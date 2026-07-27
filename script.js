/* =====================================================================
   Ravi's Music Player — script.js
   -----------------------------------------------------------------
   HOW TO ADD SONGS
   1. Drop the mp3 file inside the matching folder, e.g. songs/hindi/
   2. Add one line for it in the matching list below:
        { title: "Song Name", file: "exact-file-name.mp3" }
   3. Save this file and refresh the page. That's it — no build step.
   ===================================================================== */

const SONG_LIBRARY = {
  gujarati: {
    label: "Gujarati",
    folder: "songs/gujarati/",
    tracks: [
      { title: "vhalam avo ne", file: "g1.mp3" },
      { title: "athadaya kare chhe", file: "g2.mp3" },
      { title: "dhun lagi re", file: "g3.mp3" },
      { title: "gori tame manda lidha", file: "g4.mp3" },
      { title: "Chaand-Ne-Kaho", file: "Chaand-Ne-Kaho-Yash-Soni-Aarohi-_Media_guL_-lvkY5o_009_128k.mp3" },
      { title: "Mane-Malje", file: "Mane-Malje.mp3" },
      { title: "satrangi re", file: "satrangi re .mp3" },
      { title: "tu haiye hali ave", file: "tu haiye hali ave.mp3" },
      { title: "kapda matching", file: "kapda matching.mp3" },
      { title: "radha rani", file: "radha rani.mp3" },
      { title: "saibo re", file: "saibo re.mp3" },
      { title: "Rang-Bhini-Radha-Aditya", file: "Rang-Bhini-Radha-Aditya.mp3" },
      { title: "Naagar-Nandji-Na-Laal-Aditya-Gadhvi-", file: "Naagar-Nandji-Na-Laal-Aditya-Gadhvi-.mp3" },
      { title: "aditya ghadvi", file: "aditya ghadvi .mp3" },
      { title: "dhwarika no nath", file: "dhwarika no nath.mp3" },
      { title: "madharo darudo", file: "madharo darudo.mp3" },
      { title: "popat bole", file: "popat.mp3" },
      { title: "padar ni ambli", file: "padar ni ambali .mp3" },
     { title: "coming soon on request", file: "g10.mp3" },

],

  },
  hindi: {
    label: "Hindi",
    folder: "songs/hindi/",
    tracks: [
      { title: "afreen afreen", file: "afreen afreen.mp3" },
      { title: "ambarsariya", file: "ambarsariya.mp3" },
      { title: "ankho me doob jane ko", file: "ankho me doob jane ko.mp3" },
      { title: "apna banale", file: "apna banale.mp3" },
      { title: "arz kiya hai", file: "arz kiya hai.mp3" },
      { title: "baheriyan", file: "bahriya.mp3" },
      { title: "bulleyan", file: "bulleyan.mp3" },
      { title: "chaand baliyan", file: "chaan baliyan.mp3" },
      { title: "dil dia gallan", file: "dil dia galla.mp3" },
      { title: "dil tu jaan tu", file: "dil tu jaan tu.mp3" },
      { title: "finding her", file: "finding her.mp3" },
      { title: "heeriye", file: "heeriye.mp3" },
      { title: "i love you", file: "i love you.mp3" },
      { title: "ishq hai", file: "ishq hai.mp3" },
      { title: "jag ghoomeya", file: "jag gumiya.mp3" },
      { title: "jeena jeena", file: "jeena jeena.mp3" },
      { title: "jeene laga hu", file: "jeene laga hu.mp3" },
      { title: "jogi", file: "jogi.mp3" },
      { title: "main rang sharbato ka", file: "mai rang sharbato ka.mp3" },
      { title: "man mast magan", file: "man mast magan.mp3" },
      { title: "mere liye tum kafi ho", file: "mere liye tum kafi ho.mp3" },
      { title: "nadaaniya", file: "nadaaniya.mp3" },
      { title: "nazam nazam", file: "nazam nazam.mp3" },
      { title: "paheli nazar me", file: "pahel nazar me.mp3" },
      { title: "paheli dafa", file: "paheli dafa.mp3" }, 
      { title: "raataan lambiyan", file: "raataan lambiyan.mp3" },
      { title: "sanam-ye raaten", file: "sanam- ye raaten.mp3" },
      { title: "sanu ek pal", file: "sanu ek pal .mp3" },
      { title: "saudebazi", file: "saudebazi.mp3" },
      { title: "shahiba", file: "shahiba.mp3" },
      { title: "shamjawa", file: "shamjawa.mp3" },
      { title: "sun raha hai na", file: "sun raha hai na .mp3" },
      { title: "tera hone laga hu", file: "tera hone laga hu.mp3" },
      { title: "tere bin", file: "tere bin.mp3" },
      { title: "teri galiya", file: "teri galiya.mp3" },
      { title: "tu chahiye", file: "tu chahiye.mp3" },
      { title: "tu jane na", file: "tu jane na.mp3" },
      { title: "tum se hi", file: "tum se hi.mp3" },
      { title: "zaroorat", file: "zaroorat.mp3" },
      { title: "coming soon on request", file: "g10.mp3" },

    ],
  },
  old: {
    label: "Old Songs",
    folder: "songs/old/",
    tracks: [
      { title: "aa chalke tujhe", file: "aa chalke tujhe.mp3" },
      { title: "ajeeb dastan", file: "ajeeb dastan.mp3" },
      { title: "bade achhe lagate hai", file: "bade achhe lagate hai.mp3" },
      { title: "baho me chale aa", file: "baho me chale aa.mp3" },
      { title: "chaand si mahebub", file: "chaand si mahebub.mp3" },
      { title: "chookar mere man ko", file: "chookar mere man ko.mp3" },
      { title: "je ham tum chori se", file: "je ham tum chori se.mp3" },
      { title: "khwab ho tum ya", file: "khwab ho tum ya.mp3" },
      { title: "likhe jo khat tujhe", file: "likhe jo khat tujhe.mp3" },
      { title: "ek ladki bhigi bhagi si", file: "madhubala.mp3" },
      { title: "mere samne wali khidki", file: "mere samne wali khidki.mp3" },
      { title: "mere sapno ki rani", file: "mere sapno ki rani.mp3" },
      { title: "neele neele ambar par", file: "neele neele ambar par.mp3" },
      { title: "o mere dil ke chain", file: "o mere dil ke chain.mp3" },
      { title: "pal pal dil ke pas", file: "pal pal dil ke pas.mp3" },
      { title: "pyaar deewana", file: "pyaar deewana.mp3" },
      { title: "raat kali", file: "raat kali.mp3" },
      { title: "ye shaam mastani", file: "ye shaam mastani.mp3" },
      { title: "Song 9", file: "g9.mp3" },
       { title: "coming soon on request", file: "g10.mp3" },

    ],
  },
  english: {
    label: "English",
    folder: "songs/english/",
    tracks: [
      { title: "co2", file: "co2.mp3" },
      { title: "blue", file: "blue.mp3" },
      { title: "they call this love", file: "they call this love.mp3" },
      { title: "untill i found you", file: "i found you.mp3" },
      { title: "dandelions", file: "dandelions.mp3" },
      { title: "die with a smile", file: "die with a smile.mp3" },
      { title: "i wanna be yours", file: "i wanna be yours.mp3" },
      { title: "let her go", file: "let her go.mp3" },
      { title: "night changes", file: "night changes.mp3" },
      { title: "snap", file: "snap.mp3" },
      { title: "the night we met", file: "the night we met.mp3" },
      { title: "apt", file: "apt.mp3" },
      { title: "begin", file: "begin.mp3" },
      { title: "cmon cmon", file: "cmon cmon.mp3" },
      { title: "coldplay hymn for the weekens", file: "Coldplay Hymn For The Weekend.mp3" },
      { title: "criminal", file: "criminal.mp3" },
      { title: "fairytale", file: "fairytail.mp3" },
      { title: "steario hearts", file: "heart steario.mp3" },
      { title: "heat waves", file: "heat waves.mp3" },
      { title: "make you mine", file: "make you mine.mp3" },
      { title: "coming soon on request", file: "g10.mp3" },

    ],
  },
  rap: {
    label: "Rap",
    folder: "songs/rap/",
    tracks: [
      { title: "machayenge", file: "machayenge.mp3" },
      { title: "firse machayenge", file: "firse machayenge.mp3" },
      { title: "big dawgs", file: "big dawgs.mp3" },
      { title: "run it up", file: "run it up.mp3" },
      { title: "mirchi", file: "mirchi.mp3" },
      { title: "25 kaam", file: "25 kaam.mp3" },
      { title: "aathma raama", file: "aathma raama.mp3" },
      { title: "girlfriend dino james", file: "girlfriend dino james.mp3" },
      { title: "dooriyaan", file: "dooriyaan .mp3" },
      { title: "wishlist", file: "wishlist.mp3" },
    { title: "coming soon on request", file: "g10.mp3" },

    ],
  },
  other: {
    label: "Other",
    folder: "songs/other/",
    tracks: [
      { title: "52 gaj ka daman", file: "52 gaj ka daman.mp3" },
      { title: "sajke sawarke", file: "sajke sawarke.mp3" },
      { title: "solid body", file: "solid body.mp3" },
      { title: "soni ke nakhre", file: "soni ke nakhre.mp3" },
      { title: "Song 5", file: "g5.mp3" },
      { title: "Song 6", file: "g6.mp3" },
      { title: "Song 7", file: "g7.mp3" },
      { title: "Song 8", file: "g8.mp3" },
      { title: "Song 9", file: "g9.mp3" },
      { title: "coming soon on request", file: "g10.mp3" },
      { title: "Song 10", file: "g10.mp3" },
    ],
  },
};

/* ===================================================================== */

const libraryEl = document.getElementById("library");
const audio = new Audio();

const eqEl = document.getElementById("eq");
const npTitleEl = document.getElementById("npTitle");
const npCategoryEl = document.getElementById("npCategory");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressTrack = document.getElementById("progressTrack");
const progressFill = document.getElementById("progressFill");
const timeCurrentEl = document.getElementById("timeCurrent");
const timeTotalEl = document.getElementById("timeTotal");

// flat playlist built in display order, so prev/next can walk across cards
let playlist = [];
let currentIndex = -1;

function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function buildLibrary() {
  Object.entries(SONG_LIBRARY).forEach(([key, category]) => {
    const card = document.createElement("div");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";
    header.innerHTML = `
      <span class="card-title">${category.label}</span>
      <span class="card-count">${category.tracks.length} song${category.tracks.length === 1 ? "" : "s"}</span>
    `;
    card.appendChild(header);

    const list = document.createElement("div");
    list.className = "track-list";

    if (category.tracks.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-note";
      empty.textContent = "No songs yet — add files to this folder.";
      list.appendChild(empty);
    } else {
      category.tracks.forEach((track, i) => {
        const src = category.folder + track.file;
        const playlistIndex = playlist.length;
        playlist.push({ title: track.title, src, categoryLabel: category.label });

        const row = document.createElement("div");
        row.className = "track-row";
        row.dataset.index = playlistIndex;
        row.innerHTML = `
          <span class="track-num">${i + 1}</span>
          <span class="track-title">${track.title}</span>
          <span class="track-duration" data-duration>--:--</span>
        `;
        row.addEventListener("click", () => loadTrack(playlistIndex, true));
        list.appendChild(row);

        // fetch duration in the background without affecting the main player
        const probe = new Audio();
        probe.preload = "metadata";
        probe.src = src;
        probe.addEventListener("loadedmetadata", () => {
          const durEl = row.querySelector("[data-duration]");
          if (durEl) durEl.textContent = formatTime(probe.duration);
        });
      });
    }

    card.appendChild(list);
    libraryEl.appendChild(card);
  });
}

function getAllRows() {
  return document.querySelectorAll(".track-row");
}

function loadTrack(index, autoplay) {
  if (index < 0 || index >= playlist.length) return;
  currentIndex = index;
  const track = playlist[currentIndex];

  audio.src = track.src;
  npTitleEl.textContent = track.title;
  npCategoryEl.textContent = track.categoryLabel;

  getAllRows().forEach((row) => {
    row.classList.toggle("active", Number(row.dataset.index) === currentIndex);
  });

  if (autoplay) {
    audio.play();
  }
}

function togglePlay() {
  if (currentIndex === -1) {
    if (playlist.length > 0) loadTrack(0, true);
    return;
  }
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function playNext() {
  if (playlist.length === 0) return;
  const next = currentIndex + 1 >= playlist.length ? 0 : currentIndex + 1;
  loadTrack(next, true);
}

function playPrev() {
  if (playlist.length === 0) return;
  const prev = currentIndex - 1 < 0 ? playlist.length - 1 : currentIndex - 1;
  loadTrack(prev, true);
}

function updatePlayButtonState() {
  const isPlaying = !audio.paused && !audio.ended && currentIndex !== -1;
  playBtn.textContent = isPlaying ? "⏸" : "▶";
  eqEl.classList.toggle("playing", isPlaying);
}

/* ---------- event wiring ---------- */

playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);

audio.addEventListener("play", updatePlayButtonState);
audio.addEventListener("pause", updatePlayButtonState);
audio.addEventListener("ended", playNext);

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progressFill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
  }
  timeCurrentEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  timeTotalEl.textContent = formatTime(audio.duration);
});

progressTrack.addEventListener("click", (e) => {
  if (!audio.duration) return;
  const rect = progressTrack.getBoundingClientRect();
  const ratio = (e.clientX - rect.left) / rect.width;
  audio.currentTime = ratio * audio.duration;
});

/* ---------- init ---------- */

buildLibrary();
