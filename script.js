// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.mobile-menu-toggle .hamburger').classList.remove('active');
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const hamburger = document.querySelector('.hamburger');
menuToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Dark Mode
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    darkToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
});

// Load Dark Mode Preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    darkToggle.textContent = '☀️';
}

// Contact Form (Demo)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    alert(`Thanks, ${formData.get('name')}! Message received at ${email} (demo - integrate EmailJS for real sends).`);
    e.target.reset();
});

// Auto Year
document.getElementById('year').textContent = new Date().getFullYear();

// Fade-in on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
