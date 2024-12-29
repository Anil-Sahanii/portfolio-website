// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Function to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle('dark-mode');

    // Update the button text based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});

// Form Submission Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset(); // Clear the form fields
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
