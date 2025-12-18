// Modal Controls
function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("error-msg").style.display = "none";
}

// Hardcoded credentials (demo only)
const validUsername = "admin";
const validPassword = "1234";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (username === validUsername && password === validPassword) {
        window.location.href = "webpages/homepage.html";
    } else {
        errorMsg.style.display = "block";
    }
}

// Close modal when clicking outside the card
window.addEventListener("click", function (e) {
    const modal = document.getElementById("loginModal");
    if (e.target === modal) {
        closeLogin();
    }
});
