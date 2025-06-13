// Register ScrollTrigger plugin
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // GSAP Animations on load
  window.addEventListener("load", () => {
    if (document.querySelector("#hero h1")) {
      gsap.from("#hero h1", {
        opacity: 0,
        y: -40,
        duration: 1.4,
        ease: "power3.out"
      });
    }
  
    if (document.querySelector("#hero p")) {
      gsap.from("#hero p", {
        opacity: 0,
        y: 40,
        delay: 0.3,
        duration: 1.2,
        ease: "power3.out"
      });
    }
  
    gsap.from(".space-x-4 a", {
      opacity: 0,
      scale: 0.9,
      delay: 0.8,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    });
  
    // Animate project cards on scroll
    gsap.utils.toArray(".project").forEach(project => {
      gsap.from(project, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  });