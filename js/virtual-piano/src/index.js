const mp3 = "./assets/mp3.json";

const keyShow = document.querySelector("#bottomKeys");
const myKeys = document.querySelector("#myKeys");

let audio = {};

async function loadAudio() {
  const response = await fetch(mp3);
  const data = await response.json();

  // Convert file paths into Audio objects
  Object.keys(data).forEach((noteName) => {
    audio[noteName] = new Audio(data[noteName]);
  });
}

loadAudio();

const keys = document.querySelectorAll(".key");

// Function to play a note
function playNote(note) {
  if (!note) return;

  console.log("Playing note:", note);

  // Stop all audio
  Object.values(audio).forEach((a) => {
    a.pause();
    a.currentTime = 0;
  });

  if (audio[note]) {
    audio[note].play();
  } else {
    console.warn("No audio found for note:", note);
  }
}

// Click event on piano keys
keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    const note = event.target.dataset.note;
    playNote(note);

    myKeys.innerHTML = note;

    setTimeout(() => {
      myKeys.innerHTML = "";
    }, 1000);
  });
});

// Keyboard mapping: keyboard key -> piano note
const keyboardMap = {
  a: "C3",
  s: "C#3",
  d: "D3",
  f: "D#3",
  g: "E3",
  h: "F3",
  j: "F#3",
  k: "G3",
  l: "G#3",
  ";": "A3",
  "'": "A#3",
  Enter: "B3",
  q: "C4",
  w: "C#4",
  e: "D4",
  r: "D#4",
  t: "E4",
  y: "F4",
  u: "F#4",
  i: "G4",
  o: "G#4",
  p: "A4",
  "[": "A#4",
  "]": "B4",
  1: "C5",
  2: "C#5",
  3: "D5",
  4: "D#5",
  5: "E5",
  6: "F5",
  7: "F#5",
  8: "G5",
  9: "G#5",
  0: "A5",
  "-": "A#5",
  "=": "B5",
};

// Display all keyboard keys
(() => {
  Object.keys(keyboardMap).forEach((key) => {
    keyShow.innerHTML += `<div class="keyXC">${key}</div>`;
    console.log("Keyboard key:", key);
  });
})();

// Keydown event on document
document.addEventListener("keydown", (event) => {
  const key = event.key;
  const note = keyboardMap[key];

  if (note) {
    event.preventDefault(); // Prevent default browser behavior
    console.log("Keyboard pressed:", key, "->", note);
    playNote(note);
    myKeys.innerHTML = note;

    setTimeout(() => {
      myKeys.innerHTML = "";
    }, 1000);
  }
});
