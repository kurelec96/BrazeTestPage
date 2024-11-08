// Function to validate registration form
function validateRegisterForm() {
    // Get the values from the inputs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Create the registration data object
    const registrationData = {
        username: username,
        email: email,
        password: password,
    };

    // Optionally, log the registration data for debugging
    console.log("Registration Data: ", registrationData);

    // Call the redirect after successful registration
    window.location.href = "https://kurelec96.github.io/BrazeTestPage/store.html";
    return true;
}

// Attach event listener to submit button
document.getElementById("submitButton").addEventListener("click", function() {
    validateRegisterForm();
});
