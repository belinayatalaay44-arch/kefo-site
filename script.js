function goTo(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}
function yes() {
  document.getElementById("answer").innerHTML = `
    <div class="final-message">
      <div class="big-heart">♥</div>
      <p>Artık bu sitenin en güzel cevabını verdin. 🖤</p>
      <p>İyi ki varsın, güzelim.</p>
    </div>
  `;

  document.querySelector("#question .buttons").style.display = "none";

  for (let i = 0; i < 25; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "flying-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDelay = Math.random() * 1.5 + "s";
  heart.style.fontSize = (18 + Math.random() * 25) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
function no() {
  document.getElementById("answer").textContent =
    "Bu seçenek biraz şüpheli... tekrar düşün 😭";
}
function toggleMusic() {
  const music = document.getElementById("music");
  const button = document.getElementById("musicButton");

  if (music.paused) {
    music.play();
    button.textContent = "🔇 müziği kapat";
  } else {
    music.pause();
    button.textContent = "🎵 müziği aç";
  }
}
function enterSite() {
  document.getElementById("intro").style.display = "none";

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.querySelector(".screen").classList.add("active");

  window.scrollTo(0, 0);

  const music = document.getElementById("music");

  if (music && music.paused) {
    music.play().catch(() => {});
    document.getElementById("musicButton").textContent = "🔇 müziği kapat";
  }
}
