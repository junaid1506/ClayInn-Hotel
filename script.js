// Scroll animation using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
  
    const options = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  

  function handleScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;
      if (top < triggerPoint) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimations);
  window.addEventListener('load', handleScrollAnimations);


  function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


// footer 





// dark mode 

const toggle = document.getElementById('darkToggle');
const icon = document.getElementById('toggleIcon');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});
;


// end dark mode 