const music = new Audio(
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
);
music.loop = true;

document.addEventListener("click", () => music.play(), { once: true });
