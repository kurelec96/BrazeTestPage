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
