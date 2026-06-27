const egg = document.getElementById("egg");
const stars = document.getElementById("stars");

document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) e.preventDefault();
    lastTouchEnd = now;
}, { passive: false });
document.addEventListener('contextmenu', e => e.preventDefault());
document.body.style.userSelect = 'none';

for (let i = 0; i < 50; i++) {
  const s = document.createElement("div");
  s.className = "star";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.animationDelay = Math.random() * 2 + "s";
  stars.appendChild(s);
}

let holdTimer = null;

function startHold() {
  holdTimer = setTimeout(() => {
    window.location.href = "space.html";
  }, 1000);
}

function cancelHold() {
  clearTimeout(holdTimer);
}

egg.addEventListener("mousedown", startHold);
egg.addEventListener("mouseup", cancelHold);
egg.addEventListener("mouseleave", cancelHold);

egg.addEventListener("touchstart", (e) => {
  e.preventDefault();
  startHold();
}, { passive: false });

egg.addEventListener("touchend", cancelHold);
egg.addEventListener("touchcancel", cancelHold);