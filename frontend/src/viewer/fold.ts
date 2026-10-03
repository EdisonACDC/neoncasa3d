// Shader patch that shows or hides wall parts on the GPU. Geometry carries a "fold" attribute (see
// build.ts); per floor, one bit mask says which wall buckets stand (the others are cut) and another
// which buckets are drawn as glass. Hidden vertices are moved outside the clip volume, so their
// triangles and lines are dropped before rasterising.
//
// Roles: "plain" (lines, window and door parts) only follows standing/cut; "solid" (walls) also leaves
// out glass buckets; "glass" draws only the wall parts of glass buckets, as tinted glass.

import type { Material } from "three";

export interface FoldMask {
  value: number;
}

export interface FoldMasks {
  standing: FoldMask;
  glass: FoldMask;
}

export type FoldRole = "plain" | "solid" | "glass";

export function makeFoldable<T extends Material>(material: T, masks: FoldMasks, role: FoldRole = "plain"): T {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uStanding = masks.standing;
    shader.uniforms.uGlass = masks.glass;
    shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nattribute float fold;\nuniform int uStanding;\nuniform int uGlass;").replace(
      "#include <project_vertex>",
      `#include <project_vertex>
      {
        bool nc3dShow = ${role === "glass" ? "false" : "true"};
        if (fold > -0.5) {
          int nc3dFold = int(fold + 0.5);
          int nc3dKind = nc3dFold / 16;
          int nc3dBucket = nc3dFold - nc3dKind * 16;
          bool nc3dStanding = ((uStanding >> nc3dBucket) & 1) == 1;
          bool nc3dGlass = ((uGlass >> nc3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height
          nc3dShow = nc3dKind == 0 ? nc3dStanding : nc3dKind == 1 || nc3dKind == 3 ? !nc3dStanding : true;
          bool nc3dWall = nc3dKind == 0 || nc3dKind == 2;
          ${role === "solid" ? "if (nc3dGlass && nc3dWall) nc3dShow = false;" : ""}
          ${role === "glass" ? "nc3dShow = nc3dShow && nc3dGlass && nc3dWall;" : ""}
        }
        if (!nc3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`,
    );
    if (role === "glass") {
      // dark walls become a faint cyan-tinted glass
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`,
      );
    }
  };
  material.customProgramCacheKey = () => `nc3d-fold-${role}`;
  return material;
}
