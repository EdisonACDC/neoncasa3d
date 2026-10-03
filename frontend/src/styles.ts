import { css } from "lit";

/** Neon design tokens shared by panel, card and editor. */
export const tokens = css`
  :host {
    --nc3d-bg: #070b14;
    --nc3d-bg2: #0d1424;
    --nc3d-chrome: rgba(14, 21, 38, 0.86);
    --nc3d-chrome-solid: #0f1729;
    --nc3d-line: rgba(120, 170, 255, 0.16);
    --nc3d-text: #e6eefc;
    --nc3d-muted: #8a9bb8;
    --nc3d-accent: #37e0ff;
    --nc3d-accent-text: #041018;
    --nc3d-soft: #5b7cff;
    --nc3d-warm: #ffb547;
    --nc3d-danger: #ff6b8b;
    --nc3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --nc3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --nc3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--nc3d-font);
    color: var(--nc3d-text);
  }
`;

/** Segmented buttons, chips and form controls. */
export const controls = css`
  .nc3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--nc3d-chrome);
    box-shadow: var(--nc3d-shadow);
  }
  .nc3d-seg button,
  .nc3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--nc3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .nc3d-seg button[aria-pressed="true"],
  .nc3d-chip[aria-pressed="true"] {
    background: var(--nc3d-accent);
    color: var(--nc3d-accent-text);
  }
  .nc3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .nc3d-chip {
    background: var(--nc3d-chrome);
    color: var(--nc3d-text);
    box-shadow: var(--nc3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--nc3d-accent);
    outline-offset: 2px;
  }
  .nc3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--nc3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--nc3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .nc3d-btn:hover {
    border-color: var(--nc3d-accent);
  }
  .nc3d-btn.nc3d-danger {
    color: var(--nc3d-danger);
  }
  .nc3d-btn.nc3d-primary {
    background: var(--nc3d-accent);
    color: var(--nc3d-accent-text);
    border-color: transparent;
  }
  .nc3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--nc3d-muted);
  }
  .nc3d-field input,
  .nc3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--nc3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--nc3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .nc3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--nc3d-accent);
  }
  .nc3d-field select option {
    background: var(--nc3d-chrome-solid);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .nc3d-seg button,
    .nc3d-chip,
    .nc3d-btn {
      min-height: 40px;
    }
  }
`;
