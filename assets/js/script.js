// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // If the toggleButton doesn't exist, stop gracefully
  if (!toggleButton) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️"; // show sun icon for dark mode
  } else {
    body.classList.remove("dark-mode");
    toggleButton.textContent = "🌙"; // show moon icon for light mode
  }

  // Toggle between light and dark mode
  toggleButton.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
  });

  window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
});