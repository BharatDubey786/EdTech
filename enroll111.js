document.getElementById('enrollForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    // Simulate successful enrollment
    const message = `Thank you for enrolling, ${name}! You are now registered for ${course}. A confirmation email will be sent to ${email}.`;
    
    // Show the success message
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.display = 'block'; // Display the message
});
