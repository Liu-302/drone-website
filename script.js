// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Change nav background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.15)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.webkitBackdropFilter = 'blur(10px)';
        nav.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.15)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.15)';
        nav.style.backdropFilter = 'blur(8px)';
        nav.style.webkitBackdropFilter = 'blur(8px)';
        nav.style.boxShadow = '0 2px 15px rgba(255, 255, 255, 0.15)';
    }
});

// Add animation on scroll for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe all feature cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});