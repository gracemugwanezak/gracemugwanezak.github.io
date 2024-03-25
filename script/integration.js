var blogs = document.querySelector(".portfolio__container");
function displayBlogs(response) {
  var blogsHTML = ""; // Initialize an empty string to store HTML
  for (var i = 0; i < response.data.blogs.length; i++) {
    // Concatenate HTML for each blog
    const BlogDiv = document.createElement("div");
    BlogDiv.innerHTML = `
  
      <div class="wrapper">
              <div>
              <h2>${response.data.blogs[i].blogName}</h2>
              <img src="./images/portfolio/image1.jpg" alt="image 1" />
              <p>${response.data.blogs[i].blogDescription}</p>
               </div>
                 
              <a href=""><i class="fa-solid fa-trash"></i></a>
              <i class="fa-solid fa-pen-to-square"></i>`;
    blogs.append(BlogDiv);
  }
}

axios
  .get("https://brand-backend-nrbf.onrender.com/api/blogs")
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
