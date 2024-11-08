function validateRegisterForm(event) {
    event.preventDefault(); 

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    }
    else{
        window.location.href = "store.html";
    }
}

function validateLoginForm(event) {
    event.preventDefault(); 

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");

    }

    window.location.href = "https://kurelec96.github.io/BrazeTestPage/store.html";

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

    console.log("Saving preferences:", preferencesData);

    alert("Preferences saved successfully!");
}

