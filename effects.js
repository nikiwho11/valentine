const emojis = ["❤️", "💖", "💗", "🌸", "🌷", "🌹", "💐"];

setInterval(() => {
  const el = document.createElement("div");
  el.className = "float";
  el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (18 + Math.random() * 18) + "px";
  el.style.animationDuration = (4 + Math.random() * 4) + "s";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}, 300);
