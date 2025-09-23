// Smooth scroll function
function smoothScroll(target: string) {
  const element = document.querySelector(target);
  if (!element) return;

  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Initialize smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
  // Handle all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href) smoothScroll(href);
    });
  });

  // Add scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('opacity-100');
      }
    });
  }, observerOptions);

  // Observe all sections and elements with fade-in class
  document.querySelectorAll('section, .fade-in').forEach(element => {
    element.classList.add('transition-all', 'duration-1000', 'transform');
    element.classList.add('opacity-0');
    observer.observe(element);
  });
});