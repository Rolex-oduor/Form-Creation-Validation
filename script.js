

 ["addEventListener", "DOMContentLoaded", "function"]


 ["document.getElementById", "registration-form"]

 "form-feedback"

 "username", "email", "password", "trim"

 feedbackDiv.style.display = "block";

if (isValid) {
  feedbackDiv.textContent = "Registration successful!";
  feedbackDiv.style.color = "#28a745"; // green
} else {
  feedbackDiv.innerHTML = messages.join("<br>");
  feedbackDiv.style.color = "#dc3545"; // red
}

const usernameInput = document.getElementById("username");
const username = usernameInput.value.trim();

let isValid = true;
const messages = [];

if (username === "") {
  isValid = false;
  messages.push("Username is required.");
} else if (username.length < 3) {
  isValid = false;
  messages.push("Username must be at least 3 characters.");
} else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
  isValid = false;
  messages.push("Username can only contain letters, numbers, and underscores.");
}

const passwordInput = document.getElementById("password");
const password = passwordInput.value.trim();

let isValid = true;
const messages = [];

if (password === "") {
  isValid = false;
  messages.push("Password is required.");
} else if (password.length < 6) {
  isValid = false;
  messages.push("Password must be at least 6 characters long.");
} else if (!/[A-Z]/.test(password)) {
  isValid = false;
  messages.push("Password must include at least one uppercase letter.");
} else if (!/[0-9]/.test(password)) {
  isValid = false;
  messages.push("Password must include at least one number.");
} else if (!/[!@#$%^&*]/.test(password)) {
  isValid = false;
  messages.push("Password must include at least one special character (!@#$%^&*).");
}

const emailInput = document.getElementById("email");
const email = emailInput.value.trim();

let isValid = true;
const messages = [];

if (email === "") {
  isValid = false;
  messages.push("Email is required.");
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  isValid = false;
  messages.push("Please enter a valid email address.");
}
