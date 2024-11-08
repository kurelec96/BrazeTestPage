
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
