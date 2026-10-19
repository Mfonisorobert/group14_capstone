const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const themeIcon = document.getElementById("themeIcon");
const brandLogo = document.getElementById("brandLogo");

const moonIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.7 15.2A8.5 8.5 0 0 1 8.8 3.3a8.5 8.5 0 1 0 11.9 11.9Z"/></svg>';
const sunIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>';

function updateThemeUI(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeLabel.textContent = isDark ? "LIGHT" : "DARK";
  themeIcon.innerHTML = isDark ? sunIcon : moonIcon;
  brandLogo.src = isDark ? "images/logo.svg" : "images/logo_black.svg";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

const savedTheme = localStorage.getItem("planet-theme");
updateThemeUI(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  updateThemeUI(isDark);
  localStorage.setItem("planet-theme", isDark ? "dark" : "light");
});
