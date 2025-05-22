// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    observer.observe(el);
});















//effect


      // Impact meter functionality
        const impactBtns = document.querySelectorAll('.impact-btn');
        const impactValue = document.getElementById('impact-value');
        
        impactBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const impactLevel = btn.getAttribute('data-impact');
                impactValue.textContent = `${impactLevel}%`;
                
                // Remove active class from all buttons
                impactBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
            });
        });
        
        // Set default active button
        impactBtns[0].classList.add('active');
        
        // Animation on scroll
        
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });