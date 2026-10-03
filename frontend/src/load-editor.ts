// Loads the editor bundle only when the editor is opened (it defines <nc3d-editor>).

/** Content hash of the editor bundle, set by the build (see build.mjs). */
declare const __NC3D_EDITOR_HASH__: string;

let loading: Promise<unknown> | undefined;

export function loadEditor(): Promise<unknown> {
  const url = new URL(`./neoncasa3d-editor.js?v=${__NC3D_EDITOR_HASH__}`, new URL(import.meta.url)).href;
  loading ??= import(/* @vite-ignore */ url);
  return loading;
}
