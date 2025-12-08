const btn = document.getElementById("themeToggle");
const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme");
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const theme = getCurrentTheme();
  const iconElement = document.getElementById("themeIcon");

  if (!iconElement) return;

  iconElement.innerHTML = theme === "light" ? lightIcon : darkIcon;
}

function toggleTheme() {
  const newTheme = getCurrentTheme() === "light" ? "dark" : "light";
  setTheme(newTheme);
}

if (btn) {
  btn.addEventListener("click", toggleTheme);
}

if (!localStorage.getItem("theme")) {
  setTheme("light");
} else {
  setTheme(localStorage.getItem("theme"));
}

function animate() {
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;
  grid.style.backgroundPosition = `${currentX}px ${currentY}px, ${currentX + 25
    }px ${currentY + 25}px, ${currentX + 12.5}px ${currentY + 12.5}px`;
  requestAnimationFrame(animate);
}

const grid = document.querySelector(".grid");
let targetX = 0,
  targetY = 0;
let currentX = 0,
  currentY = 0;

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  targetX = x * 30;
  targetY = y * 30;
});

animate();
