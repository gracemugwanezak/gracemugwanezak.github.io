// messages.js

function displayMessages(response) {
  console.log(response.data.messages);
  const messagesContainer = document.getElementById("messages-container");
  const messageCount = document.getElementById("msegs");

  response.data.messages.forEach((message, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${message.name}</td>
      <td>${message.email}</td>
      <td>${message.message}</td>
      <td><button><a href=mailto:${message.email}>Reply</a></button></td>
      <td><button onclick="deleting('${message._id}')" id="edit-${
      message._id
    }">Delete</button></td>
    `;
    messagesContainer.appendChild(row);
  });
  messageCount.innerHTML = response.data.result.length;
}

// Fetch all messages
axios
  .get("https://brand-backend-nrbf.onrender.com/messages/all-messages")

  .then(displayMessages)
  .catch((error) => {
    console.error("Error fetching messages:", error);
  });

// Function to delete a message
function deleting(messageId) {
  const deleteId = document.getElementById(`edit-${messageId}`);
  deleteId.textContent = "deleting ..";
  deleteId.style.background = "red";
  deleteId.style.color = "white";
  deleteId.style.border = "none";
  deleteId.style.borderRadius = "10px";

  axios
    .delete(
      "https://myportifolio-brand-backend.onrender.com/delete-message/${messageId"
    )
    .then((response) => {
      if (response.status === 200) {
        deleteId.textContent = "Succesfully deleted ✅";
        deleteId.style.background = "green";
        deleteId.style.color = "white";
        deleteId.style.border = "none";
        deleteId.style.borderRadius = "10px";
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    })
    .catch((error) => {
      console.error("Error deleting resource:", error);
    });
}
