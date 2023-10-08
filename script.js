document
    .getElementById("signupForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var errorElement = document.getElementById("error");
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!email.match(emailRegex)) {
            errorElement.textContent = "Invalid email address.";
            return;
        }

        if (!password.match(passwordRegex)) {
            errorElement.textContent =
                "Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number.";
            return;
        }
        errorElement.textContent = "";
    });