// login.js

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("loginButton").addEventListener("click", handleLogin);
// });
// function handleLogin() {
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("changes").addEventListener("submit", handleLogin);
});

function handleLogin(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Check if the user exists in local storage
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var user = users.find(function (u) {
    return u.myEmail === email && u.ypassword === password;
  });

  if (user) {
    alert("Login successful!");
    window.location.href = "resume.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Function to add a user to local storage
function addUser(email, password) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ email: email, password: password });
  localStorage.setItem("users", JSON.stringify(users));
}
