
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    duration: 1000,
    easing: 'ease',
    reset: true,
  });
  
  
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
  