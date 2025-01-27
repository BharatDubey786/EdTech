function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    
    // Clear previous error message
    errorMessage.innerHTML = "";

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.innerHTML = "Username and password cannot be empty!";
        return false;
    }
    
    // Add more validation logic as needed (e.g., regex for password strength)
    if (username.length < 4 || password.length < 6) {
        errorMessage.innerHTML = "Username should be at least 4 characters and password at least 6 characters!";
        return false;
    }

    return true; // Allow form submission if validation passes
}