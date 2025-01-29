
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

// Function to show more project boxes
function showMoreProjects() {
  const additionalProjects = document.querySelectorAll('.project-box.hidden');

  additionalProjects.forEach((project) => {
      project.style.display = 'flex';
  });

  const viewMoreButton = document.getElementById('viewMore');
  viewMoreButton.style.display = 'none'; 
}

// TYPING EFFECT
var typingEffect = new Typed(".typedText", {
  strings: [
    "Software Engineer",
    "Backend Developer",
    "AI / ML Enthusiast",
    "Full-Stack Developer",
    "Open Source Contributor"
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});