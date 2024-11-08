function validateRegisterForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration successful!");
    return true;
}

function validateLoginForm() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Login successful!");
    return true;
}

function submitPreferences() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;

    const notifications = [];
    if (document.getElementById("emailNotifications").checked) notifications.push("Email");
    if (document.getElementById("smsNotifications").checked) notifications.push("SMS");
    if (document.getElementById("pushNotifications").checked) notifications.push("Push");

    const theme = document.getElementById("theme").value;

    const preferencesData = {
        fullName,
        email,
        notifications,
        theme
    };

    // Simulate sending to server (you can replace this with an actual POST request)
    console.log("Saving preferences:", preferencesData);
    window.location.href = 'www.google.com';
}
