// Looks of the 3D view. Geometry keeps its neon colours; a small shader patch maps them to the chosen
// look, so switching is instant and nothing has to be rebuilt. Signal colours (lit lamps, open windows,
// glowing screens) are bright and saturated and stay as they are in every look.

import { AdditiveBlending, NormalBlending, type Material } from "three";
import { THEMES, type Theme } from "../themes.ts";

export type { Theme } from "../themes.ts";

export interface ThemeUniform {
  value: number;
}

export function themeIndex(theme: Theme): number {
  return THEMES.indexOf(theme);
}

const GLSL = `
uniform int uTheme;
vec3 nc3dThemed(vec3 c, bool line) {
  if (uTheme == 0) return c;
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;

/**
 * Maps a material's colours to the look in `uniform` (0 neon, 1 blueprint, 2 day). Composes with an
 * existing onBeforeCompile (e.g. the fold patch). `line`: edges are mapped as lines.
 */
export function themed<T extends Material>(material: T, uniform: ThemeUniform, line = false): T {
  const before = material.onBeforeCompile.bind(material);
  const key = material.customProgramCacheKey.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    before(shader, renderer);
    shader.uniforms.uTheme = uniform;
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>\n${GLSL}`)
      .replace("#include <color_fragment>", `#include <color_fragment>\n  diffuseColor.rgb = nc3dThemed(diffuseColor.rgb, ${line ? "true" : "false"});`);
  };
  material.customProgramCacheKey = () => `${key()}-themed-${line ? "l" : "s"}`;
  return material;
}

/** Additive glow disappears on light backgrounds: in the day look, lines are drawn normally. */
export function lineBlending(theme: Theme): typeof AdditiveBlending | typeof NormalBlending {
  return theme === "day" ? NormalBlending : AdditiveBlending;
}
