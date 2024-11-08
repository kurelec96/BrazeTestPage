function validateRegisterForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    const registrationData = {
        username: username,
        email: email,
        password: password,
    };

    console.log("Registration Data: ", registrationData);

    window.location.href = "https://kurelec96.github.io/BrazeTestPage/store.html";
    return true;
}

document.getElementById("submitButton").addEventListener("click", function() {
    validateRegisterForm();
});



