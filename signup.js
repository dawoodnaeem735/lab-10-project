
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const userData = {
        email: document.getElementById("signupEmail").value,
        password: document.getElementById("signupPassword").value,
        age: document.getElementById("signupAge").value,
        gender: document.getElementById("signupGender").value
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup successful! Please login.");
    window.location.href = "login.html";
});
