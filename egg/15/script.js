const egg = document.getElementById("egg");
const stars = document.getElementById("stars");

// 星星
for (let i = 0; i < 50; i++) {
  const s = document.createElement("div");
  s.className = "star";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.animationDelay = Math.random() * 2 + "s";
  stars.appendChild(s);
}

/* ===== 长按逻辑（不做任何拉伸） ===== */
let holdTimer = null;

function startHold() {
  holdTimer = setTimeout(() => {
    window.location.href = "space.html";
  }, 1000);
}

function cancelHold() {
  clearTimeout(holdTimer);
}

// PC
egg.addEventListener("mousedown", startHold);
egg.addEventListener("mouseup", cancelHold);
egg.addEventListener("mouseleave", cancelHold);

// 手机（阻止长按菜单）
egg.addEventListener("touchstart", (e) => {
  e.preventDefault();
  startHold();
}, { passive: false });

egg.addEventListener("touchend", cancelHold);
egg.addEventListener("touchcancel", cancelHold);