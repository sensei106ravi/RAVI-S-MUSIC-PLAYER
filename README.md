# Ravi's Music Player
A simple, dark-themed music player — plain HTML, CSS, and vanilla JS, no frameworks, no API. Songs are just mp3 files sitting in folders next to the page.

## Folder structure

```
music-player/
├── index.html
├── style.css
├── script.js
├── README.md
└── songs/
    ├── gujarati/
    ├── hindi/
    ├── old/
    ├── english/
    ├── rap/
    └── other/
```

## How to add songs

1. Drop your mp3 file into the matching folder inside `songs/` (e.g. `songs/hindi/tera-yaar-hoon-main.mp3`).
2. Open `script.js` and find the matching category in `SONG_LIBRARY` near the top of the file.
3. Add one line for the song:

   ```js
   { title: "Tera Yaar Hoon Main", file: "tera-yaar-hoon-main.mp3" },
   ```

4. Save and refresh the page in your browser — it's picked up automatically, the card count and scroll list update on their own.

That's the only file you ever need to touch to manage your library. No build step, no server-side code.

## Running it locally

Because the page reads mp3 file metadata (song length) directly from disk, some browsers are stricter about that when you just double-click `index.html` (the `file://` protocol). If durations show as `--:--` or playback feels off, run a tiny local server from inside the `music-player` folder instead:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Publishing on GitHub

1. Create a new repository and push this whole `music-player` folder to it (mp3 files included — GitHub allows audio files, just keep an eye on the 100 MB per-file limit and the repo size in general).
2. Turn on **GitHub Pages** in the repo settings (Settings → Pages → deploy from the `main` branch) to get a shareable link for your colleagues, or just tell them to clone the repo and open `index.html`.

## Controls

- Click any song in a card to play it.
- Bottom bar: previous / play-pause / next, plus a click-to-seek progress bar.
- The currently playing song is highlighted in its card and shown at the bottom left.
