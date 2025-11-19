const html = document.querySelector("html");
const btn = document.querySelector("button");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
