// Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const body = document.body;

menuBtn.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});

// Close menu when clicking a category
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('menu-open');
    });
});

// Product Cards Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
    observer.observe(card);
});