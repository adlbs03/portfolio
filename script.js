
// Animation fade-in au scroll
const faders = document.querySelectorAll('.fade-in');

const appear = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(el => appear.observe(el));

// Dark mode toggle
document.getElementById('toggle-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
