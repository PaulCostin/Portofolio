const root = document.documentElement;
let darkMode = false;

function toggleDarkMode() {
  if (darkMode) {
    root.style.setProperty("--clr-light", "0, 0%, 97%");
    root.style.setProperty("--clr-dark", "0, 0%, 13%");
  } else {
    root.style.setProperty("--clr-light", "0, 0%, 13%");
    root.style.setProperty("--clr-dark", "0, 0%, 97%");
  }
  darkMode = !darkMode;
}

// Get the navbar element
const navbar = document.getElementById("navbar");

// Get the navbar height
const navbarHeight = navbar.offsetHeight;

// Get the current scroll position
let lastScroll = 0;

// Listen for scroll events
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Check if the user has scrolled down more than the navbar height
  if (currentScroll > navbarHeight) {
    if (currentScroll > lastScroll) {
      // Scrolling down
      navbar.classList.add("hidden");
    } else {
      // Scrolling up
      navbar.classList.remove("hidden");
    }
  } else {
    navbar.classList.remove("hidden");
  }
  lastScroll = currentScroll;
});
