function displayMessages(response) {
  console.log(response.data.messages);
  const messagesContainer = document.getElementById("messages-container");
  const messageCount = document.getElementById("msegs");

  // Check if 'messages' array exists in the response
  if (response.data.messages && Array.isArray(response.data.messages)) {
    response.data.messages.forEach((message, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td>${index + 1}</td>
    <td>${message.name}</td>
    <td>${message.email}</td>
    <td>${message.message}</td>
    <td><button onclick="replyToMessage('${message.email}')">Reply</button></td>
    <td><button onclick="deleting('${message._id}')" id="edit-${
        message._id
      }">Delete</button></td>
`;

      messagesContainer.appendChild(row);
    });
    // messageCount.innerHTML = response.data.messages.length; // Update message count based on the 'messages' array
  } else {
    console.error("Error: No messages found in the response.");
    // messageCount.innerHTML = "0"; // Set message count to 0 if no messages are found
  }
}

const token = JSON.parse(localStorage.getItem("token"));
// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjk1ZGEyOWM4ZGJkMDZkNWQzY2FkYSIsImlhdCI6MTcxMTY0ODE5MiwiZXhwIjoxNzE0MjQwMTkyfQ.h3aip56cSYutZ_g3TV41-UNI_qiEpTAM1e4djbewANU";
// Fetch all messages
axios
  .get("http://localhost:4000/messages/all-messages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(displayMessages)
  .catch((error) => {
    console.error("Error fetching messages:", error);
  });

// Function to reply to a message
function replyToMessage(email) {
  const subject = encodeURIComponent("Reply to your message");
  const body = encodeURIComponent("Your reply message here.");
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// Function to delete a message
async function deleting(messageId) {
  const deleteId = document.getElementById(`edit-${messageId}`);
  deleteId.textContent = "deleting ..";
  deleteId.style.background = "red";
  deleteId.style.color = "white";
  deleteId.style.border = "none";
  deleteId.style.borderRadius = "10px";

  const response = await fetch(
    `http://localhost:4000/messages/delete-message/${messageId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // .then((response) => {
  console.log(response.ok);
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
  //   .catch((error) => {
  //     console.error("Error deleting resource:", error);
  //   });

  return response;
}
