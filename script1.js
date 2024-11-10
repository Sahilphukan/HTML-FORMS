document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Display a response message
    document.getElementById('responseMessage').innerText = 'Thank you for your message, ' + name + '!';
    
    // Optionally, you can reset the form
    document.getElementById('contactForm').reset();
});