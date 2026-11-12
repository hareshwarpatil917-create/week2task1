// Toggle mobile navigation menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Contact form validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const nameErr = document.getElementById('nameErr');
        const emailErr = document.getElementById('emailErr');
        const msgErr = document.getElementById('msgErr');
        const successBox = document.getElementById('successBox');

        // Reset messages
        nameErr.textContent = '';
        emailErr.textContent = '';
        msgErr.textContent = '';
        successBox.style.display = 'none';

        let isValid = true;

        if (name.length < 2) {
            nameErr.textContent = 'Please enter your name.';
            isValid = false;
        }

        if (!email.includes('@') || !email.includes('.')) {
            emailErr.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (message.length < 10) {
            msgErr.textContent = 'Message must be at least 10 characters.';
            isValid = false;
        }

        if (isValid) {
            successBox.style.display = 'block';
            contactForm.reset();
        }
    });
}
// Dark / Light Mode Toggle with localStorage persistence
const themeBtn = document.getElementById('themeBtn');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.textContent = 'Light Mode';
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}