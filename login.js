document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Agar signup nahi hua
    if (!savedUser) {
        alert("Please sign up first!");
        window.location.href = "signup.html";
        return;
    }

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Credentials match check
    if (email === savedUser.email && password === savedUser.password) {
        alert("Login successful!");
        // ✅ Redirect to index.html
        window.location.href = "home.html";
    } else {
        alert("Wrong email or password!");
    }
});
