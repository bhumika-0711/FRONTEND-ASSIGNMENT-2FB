const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.style.borderColor = "red";
        valid = false;
    } else {
        nameError.textContent = "";
        nameInput.style.borderColor = "green";
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailInput.style.borderColor = "red";
        valid = false;
    } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Invalid email";
        emailInput.style.borderColor = "red";
        valid = false;
    } else {
        emailError.textContent = "";
        emailInput.style.borderColor = "green";
    }

    if (passInput.value.trim() === "") {
        passError.textContent = "Password is required";
        passInput.style.borderColor = "red";
        valid = false;
    } else if (passInput.value.length < 8) {
        passError.textContent = "Minimum 8 characters";
        passInput.style.borderColor = "red";
        valid = false;
    } else {
        passError.textContent = "";
        passInput.style.borderColor = "green";
    }

    if (valid) {
        alert("Form Submitted Successfully!");
    }
});
