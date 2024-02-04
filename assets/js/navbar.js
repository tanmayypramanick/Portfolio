// DARK/LIGHT MODE TOGGLE FUNCTION
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark');
  
    const modeIcon = document.getElementById('mode-icon');
    modeIcon.classList.toggle('uil-sun');
    modeIcon.classList.toggle('uil-moon');
  }
  // DARK MODE TOGGLE EVENT LISTENER
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  // NAVIGATION BAR FUNCTION
  function toggleMenu() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
  }
  // MENU TOGGLE EVENT LISTENER
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav_menu");
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('display-menu');
  });