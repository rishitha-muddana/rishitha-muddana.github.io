// Optional simple fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('section, .project-card, .project-gallery img')
.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
