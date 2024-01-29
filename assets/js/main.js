// ADD SCROLL EVENT LISTENER
window.addEventListener('scroll', function () {
  headerShadow();
});

function headerShadow() {
  const navHeader = document.getElementById('main-header');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)';
  } else {
      navHeader.style.boxShadow = 'none';
  }

  toggleHeaderVisibility();
}

function toggleHeaderVisibility() {
  const header = document.getElementById('main-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition === 0) {
      header.classList.remove('hidden');
  } else {
      header.classList.add('hidden');
  }
}

// EXPERIENCE DESCRIPTION TOGGLE FUNCTIONS
function toggleDescription(expId) {
  var descriptionBox = document.getElementById(expId);
  var closeButton = document.getElementById(`closeBtn_${expId}`);
  if (descriptionBox.style.display === 'none' || descriptionBox.style.display === '') {
      descriptionBox.style.display = 'block';
      closeButton.style.display = 'block';
  } else {
      descriptionBox.style.display = 'none';
      closeButton.style.display = 'none';
  }
}

function closeDescriptionWithButton(expId) {
  closeDescription(expId);
  toggleCloseButton(expId);
}

function closeDescription(expId) {
  var descriptionBox = document.getElementById(expId);
  var closeButton = document.getElementById(`closeBtn_${expId}`);
  descriptionBox.style.display = 'none';
  closeButton.style.display = 'none';
}

// PROJECT DESCRIPTION TOGGLE FUNCTIONS
function toggleDescription(projectId) {
  var descriptionBox = document.getElementById(projectId);
  var closeButton = document.getElementById(`closeBtn_${projectId}`);
  if (descriptionBox.style.display === 'none' || descriptionBox.style.display === '') {
      descriptionBox.style.display = 'block';
      closeButton.style.display = 'block';
  } else {
      descriptionBox.style.display = 'none';
      closeButton.style.display = 'none';
  }
}

function closeDescriptionWithButton(projectId) {
  closeDescription(projectId);
  toggleCloseButton(projectId);
}

function closeDescription(projectId) {
  var descriptionBox = document.getElementById(projectId);
  var closeButton = document.getElementById(`closeBtn_${projectId}`);
  descriptionBox.style.display = 'none';
  closeButton.style.display = 'none';
}

// Function to show more project boxes
function showMoreProjects() {
  const additionalProjects = document.querySelectorAll('.project-box.hidden');

  additionalProjects.forEach((project) => {
      project.style.display = 'flex';
  });

  const viewMoreButton = document.getElementById('viewMore');
  viewMoreButton.style.display = 'none'; // Hide view more button after displaying additional projects
}
// TYPING EFFECT
var typingEffect = new Typed(".typedText", {
  strings: ["Student", "UI Designer", "App Developer", "Photographer", "Travel Enthusiast", "SneakerHead"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
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

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})
 // animation

// Initialize ScrollReveal
const sr = ScrollReveal({
  duration: 1000,
  easing: 'ease',
  reset: true,
});

// Add animations to your elements
// Add animations to your elements (excluding description boxes)
// Home Section
sr.reveal('.featured-text-card', { origin: 'top', distance: '80px' });
sr.reveal('.featured-name', { origin: 'top', distance: '80px', delay: 100 });
sr.reveal('.featured-text-info', { origin: 'top', distance: '80px', delay: 200 });
sr.reveal('.featured-text-btn', { origin: 'top', distance: '80px', delay: 200 });
sr.reveal('.social_icons', { origin: 'top', distance: '80px', delay: 200 });
sr.reveal('.featured-image', { origin: 'top', distance: '80px', delay: 300 });

// Project Box Section
sr.reveal('.project-box', { interval: 200 });

// Headings Section
sr.reveal('.top-header', { origin: 'top', distance: '80px' });
srLeft.reveal('.about-info', { origin: 'left', distance: '80px', delay: 100 });
srLeft.reveal('.contact-info', { origin: 'left', distance: '80px', delay: 100 });

// About Skills & Form Box Section
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 1000,
  reset: true,
});

srRight.reveal('.skills-box', { origin: 'right', distance: '80px', delay: 100 });
srRight.reveal('.form-control', { origin: 'right', distance: '80px', delay: 100 });
