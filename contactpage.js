 // Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally

  // Retrieve form values
  var myName = document.getElementById("name").value;
  var myEmail = document.getElementById("email").value;
  var myMessage = document.getElementById("message").value;

  // Validate form fields
  if (!myName || !myEmail || !myMessage) {

  //  filling in fields
function showMessage(message, duration) {
  var messageContainer = document.getElementById("messageContainer");
  messageContainer.textContent = message;
  messageContainer.style.display = "block";

  setTimeout(function () {
    messageContainer.style.display = "none";
  }, duration);
}


showMessage("please fill in all fields!", 2000);


    return;
  }

  // Check if an item is being edited
  var editingIndex = parseInt(localStorage.getItem("editingIndex"));
  if (editingIndex >= 0) {
    // Update the existing item
    updateLocalStorageItem(myName, myEmail, myMessage, editingIndex);

    // Clear the editing state
    localStorage.removeItem("editingIndex");
  } else {
    // Save data to local storage
    saveToLocalStorage(myName, myEmail, myMessage);
  }

  // Clear the form after submission
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
// alerting submission
function showMessage(message, duration) {
  var messageContainer = document.getElementById("messageContainer");
  messageContainer.textContent = message;
  messageContainer.style.display = "block";

  setTimeout(function () {
    messageContainer.style.display = "none";
  }, duration);
}


showMessage("form submitted successfully", 2000);


}

// Function to save data to local storage
function saveToLocalStorage(name, email, message) {
  // Check if localStorage is supported
  if (typeof Storage !== "undefined") {
    // Retrieve existing data or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem("formData")) || [];

    // Add new data
    existingData.push({
      myName: name,
      myEmail: email,
      myMessage: message,
    });

    // Save the updated data back to localStorage
    localStorage.setItem("formData", JSON.stringify(existingData));
  } else {

    // Local storage is not supported
    function showMessage(message, duration) {
      var messageContainer = document.getElementById("messageContainer");
      messageContainer.textContent = message;
      messageContainer.style.display = "block";

      setTimeout(function () {
        messageContainer.style.display = "none";
      }, duration);
    }

  
    showMessage("local storage not supported", 2000);
  }
}

// Function to update an item in local storage
function updateLocalStorageItem(name, email, message, index) {
  var existingData = JSON.parse(localStorage.getItem("formData")) || [];

  // Update the item at the specified index
  existingData[index] = {
    myName: name,
    myEmail: email,
    myMessage: message,
  };

  // Save the updated data back to localStorage
  localStorage.setItem("formData", JSON.stringify(existingData));
}

// Function to delete an item from local storage
function deleteLocalStorageItem(index) {
  var existingData = JSON.parse(localStorage.getItem("formData")) || [];

  // Remove the item at the specified index
  existingData.splice(index, 1);

  // Save the updated data back to localStorage
  localStorage.setItem("formData", JSON.stringify(existingData));
}

// Function to edit an item
function editItem(index) {
  var existingData = JSON.parse(localStorage.getItem("formData")) || [];

  // Set editingIndex in local storage to indicate editing mode
  localStorage.setItem("editingIndex", index);

  // Fill the form with the values of the item being edited
  document.getElementById("name").value = existingData[index].myName;
  document.getElementById("email").value = existingData[index].myEmail;
  document.getElementById("message").value = existingData[index].myMessage;
}

// Function to delete an item
function deleteItem(index) {
  // Confirm deletion with the user
  var confirmDelete = confirm("Are you sure you want to delete this item?");

  if (confirmDelete) {
    // Delete the item
    deleteLocalStorageItem(index);
  }
}

// Event listener for form submission
document.getElementById("changes").addEventListener("submit", handleSubmit);



