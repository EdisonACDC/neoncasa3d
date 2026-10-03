"""Constants for NeonCasa 3D."""

from __future__ import annotations

DOMAIN = "neoncasa3d"
# the integration's earlier name; its stores are taken over once (see storage.py)
LEGACY_DOMAIN = "neoncasa3d_legacy"

STORAGE_VERSION = 1
# minor versions of the building store; each step has a migration in storage.py
STORAGE_MINOR_VERSION = 2
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"
STORAGE_KEY_HISTORY = f"{DOMAIN}.history"
STORAGE_KEY_PACKS = f"{DOMAIN}.packs"
STORAGE_KEY_LICENSE = f"{DOMAIN}.license"

# restore points: at most this many, and a new one only after this pause since the last one
HISTORY_MAX = 20
HISTORY_INTERVAL = 600

URL_BASE = "/neoncasa3d_static"
MAIN_BUNDLE = "neoncasa3d.js"
PANEL_URL_PATH = "neoncasa3d"
PANEL_COMPONENT = "neoncasa3d-panel"
PANEL_ICON = "mdi:floor-plan"
PANEL_TITLE = "NeonCasa 3D"

SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
