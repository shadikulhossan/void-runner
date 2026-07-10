{# 🌆 VOID RUNNER

A neon synthwave tunnel-runner built with Three.js and the Web Audio API.
Pilot your ship through a collapsing corridor, dodge magenta obstacles,
collect cyan orbs, and survive as long as you can — with an original
in-browser synth soundtrack that intensifies as your speed climbs.

**[▶ Play it live](https://shadikulhossan.github.io/void-runner/)**

## Features
- Full 3D synthwave visuals (glowing grid tunnel, retro sun, particle trail)
- Original procedurally generated soundtrack + sound effects (Web Audio API)
- Installable as a PWA — add to your home screen, works offline
- Persistent high score
- Pause, mute, mobile touch controls

## Controls
← / → or A / D to switch lanes · P or Esc to pause
  "name": "Void Runner - Synthwave Corridor",
  "short_name": "Void Runner",
  "description": "A neon synthwave tunnel-runner. Dodge, collect, survive.",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#05030a",
  "theme_color": "#05030a",
  "icons": [
    { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
    { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "icons/icon-192-maskable.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable" },
    { "src": "icons/icon-512-maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
