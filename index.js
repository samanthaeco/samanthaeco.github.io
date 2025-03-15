// JavaScript functionality for animations or interactions

// Example: Animate the logo on hover
const logo = document.querySelector('.logo img');

logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s ease';
});

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)';
});
