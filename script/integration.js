var blogs = document.querySelector(".blogs");
function displayBlogs(response) {
  var blogsHTML = ""; // Initialize an empty string to store HTML
  for (var i = 0; i < response.data.blogs.length; i++) {
    // Concatenate HTML for each blog
    const BlogDiv = document.createElement("div");
    BlogDiv.innerHTML = `              <span>0${i + 1}</span>
              <span>${response.data.blogs[i].blogName}</span>
              <a href=""><i class="fa-solid fa-trash"></i></a>
              <i class="fa-solid fa-pen-to-square"></i>`;
    blogs.append(BlogDiv);
  }
}

axios
  .get("http://localhost:4000/api/blogs")
  .then(displayBlogs)
  .catch((error) => {
    console.error("Error fetching blogs:", error);
  });
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjA2NTM0M2RiY2FkZTI2YzRhYzA3ZiIsImlhdCI6MTcxMDUxOTA1NSwiZXhwIjoxNzEzMTExMDU1fQ.5Su6WcC0_moyXg66-RCExjguNcrwGXr-H7AHkxM0W8Y";

document
  .getElementById("createBlogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");

    const title = titleInput.value;
    const description = descriptionInput.value;

    // Data to be sent to the server
    const blogData = {
      title: title,
      description: description,
    };

    // Make a POST request to your server to add the blog data to the database
    axios
      .post("http://localhost:4000/blogs", blogData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        // Handle success, if necessary
        console.log("Blog data added successfully:", response.data.blogs);
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding blog data:", error);
      });
  });
