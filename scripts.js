// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP animations on load
window.addEventListener("load", () => {
    gsap.from("#hero h1", {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.from("#hero p", {
        opacity: 0,
        y: 50,
        delay: 0.5,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.from(".btn", {
        opacity: 0,
        scale: 0.8,
        delay: 1,
        duration: 0.8,
        stagger: 0.2
    });

    gsap.from(".project", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%"
        }
    });
});