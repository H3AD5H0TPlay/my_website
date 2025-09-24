document.addEventListener('DOMContentLoaded', () => {
  // Initialize intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0');
        entry.target.style.animation = 'fadeIn 1s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '50px'
  });

  // Observe all elements with scroll-trigger
  document.querySelectorAll('.scroll-trigger').forEach((element) => {
    observer.observe(element);
  });
});