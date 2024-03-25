// signup.js

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;

    // Perform client-side validation if needed

    // Create a data object to send with the POST request
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password1", password1);

    // Send the POST request
    fetch("http://localhost:4000/api/users/signup", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        if (response.ok) {
          // Redirect or display success message
          alert("Signup successful!");

          window.location.href = "index.html";
        } else {
          // Handle errors
          alert("An error occurred. Please try again.");
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  });
