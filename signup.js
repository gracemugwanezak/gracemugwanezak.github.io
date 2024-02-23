document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("changes")
    .addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();

  var myName = document.getElementById("name").value;
  var myEmail = document.getElementById("email").value;
  var ypassword = document.getElementById("password").value;
  var yconfirmPassword = document.getElementById("verifypassword").value;

  if (!myName || !myEmail || !ypassword || !yconfirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (ypassword !== yconfirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }
  // If validations pass, store data in local storage
  addUser(myName, myEmail, ypassword);

  // You can redirect to another page or perform other actions after successful form submission
  alert("Signup successful!");
  // Redirect to login page or any other desired action
  window.location.href = "index.html";
}

// Function to add a user to local storage
function addUser(name, email, password) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ myName: name, myEmail: email, ypassword: password });
  localStorage.setItem("users", JSON.stringify(users));
}
