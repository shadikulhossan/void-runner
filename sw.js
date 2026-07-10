# VOID RUNNER — Web/App Package

A neon synthwave tunnel-runner with an original in-browser soundtrack, sound
effects, pause menu, and a persistent high score. This folder is a complete
**installable web app (PWA)** — no external accounts or servers needed to
just play it.

## What's inside
- `index.html` — the full game (open this directly in any browser to play)
- `manifest.json` — makes the game installable as an app on phones/desktops
- `sw.js` — service worker, lets the game work offline once loaded once
- `icons/` — app icons used when installed to a home screen

## 1. Play it right now
Just double-click `index.html` — it works standalone, no music/SFX blocked
except that browsers require one click ("Enter the Void") before audio can
start, which is already built in.

## 2. Put it on the web (so others can play + install it)
The install-to-homescreen feature (PWA) only activates when the game is
served over **https**, not opened as a local file. Easiest free options,
pick one:

- **GitHub Pages** — create a repo, upload this folder's contents to it,
  turn on Pages in repo settings. You'll get a live link in ~1 minute.
- **Netlify Drop** (netlify.com/drop) — drag-and-drop this whole folder,
  get a live link instantly, no account required for a quick test link.
- **Vercel** — similar drag-and-drop / GitHub import flow.

Once live, visiting the link on Android Chrome will show an
"Install app" prompt automatically; on iPhone Safari, use
Share → "Add to Home Screen."

## 3. Getting it onto the Google Play Store
This part needs to be done from your own Google account — no one else can
submit an app under your name. The practical path:

1. Get your game hosted on https (step 2 above).
2. Go to **pwabuilder.com**, paste your live game URL.
3. PWABuilder analyzes the site (it will pick up `manifest.json` and
   `sw.js` automatically) and generates a ready-to-upload **Android App
   Bundle (.aab)** for the Play Store, or an APK for direct testing.
4. Create a **Google Play Developer account** (one-time $25 fee) at
   play.google.com/console.
5. Create a new app listing, upload the `.aab` from step 3, fill in the
   store listing (screenshots, description, privacy policy — a simple one
   is enough since this game collects no personal data), and submit for
   review.
6. Google typically reviews within a few hours to a few days for new apps.

No code changes are needed for this — the manifest and service worker in
this package are already set up the way PWABuilder expects.

## Notes
- The soundtrack and all sound effects are generated live in the browser
  with the Web Audio API — original, royalty-free, no licensing concerns.
- High scores are saved locally on each player's device (localStorage) —
  there's no backend/server, so nothing to host or pay for beyond static
  file hosting.
