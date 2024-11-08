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

function submitPreferences() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;

    const notifications = [];
    if (document.getElementById("emailNotifications").checked) notifications.push("Email");
    if (document.getElementById("smsNotifications").checked) notifications.push("SMS");
    if (document.getElementById("pushNotifications").checked) notifications.push("Push");

    const theme = document.getElementById("theme").value;

    const preferencesData = {
        fullName: fullName,
        email: email,
        notifications: notifications,
        theme: theme
    };

    console.log("Preferences Data:", preferencesData);

    alert("Preferences saved successfully!");
}

document.getElementById("savePreferencesButton").addEventListener("click", function() {
    submitPreferences();
});

function validateLoginForm() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields!");
        return false;
    }

    console.log("Logging in with:", { username, password });

    window.location.href = "https://kurelec96.github.io/BrazeTestPage/store.html";

    return true;
}

document.getElementById("loginButton").addEventListener("click", function() {
    validateLoginForm();
});


