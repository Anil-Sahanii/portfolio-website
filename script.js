document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        event.preventDefault();  // Prevent form submission
    }
    // Simple email validation
    else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();  // Prevent form submission
    }
});
