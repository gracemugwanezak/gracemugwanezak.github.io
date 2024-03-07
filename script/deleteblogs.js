document.addEventListener("DOMContentLoaded", function () {
  // Initialize blogs array or retrieve from localStorage
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const image = document.getElementById("file");
  const createForm = document.getElementById("createBlogForm");
  const errorMessage = document.createElement("p");
  errorMessage.style.color = "brown";

  // Function to delete a blog by index
  const deleteBlog = (index) => {
    blogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    renderBlogs(); // Update the dashboard after deletion
  };

  // Function to render blogs on the dashboard
  const renderBlogs = () => {
    // Clear existing blogs in the dashboard
    // (Assuming you have a container with id "blogList" to display the blogs)
    const blogListContainer = document.getElementById("blogList");
    blogListContainer.innerHTML = "";

    // Render each blog in the dashboard
    blogs.forEach((blog, index) => {
      const blogContainer = document.createElement("div");
      blogContainer.innerHTML = `
        <h3>${blog.title}</h3>
        <p>${blog.description}</p>
        <img src="${blog.image}" alt="Blog Image">
        <button class="deleteButton" data-index="${index}">Delete</button>
      `;

      // Attach click event for delete button
      const deleteButton = blogContainer.querySelector(".deleteButton");
      deleteButton.addEventListener("click", function () {
        const indexToDelete = this.getAttribute("data-index");
        deleteBlog(indexToDelete);
      });

      // Append the blog container to the dashboard
      blogListContainer.appendChild(blogContainer);
    });
  };

  // Render initial blogs on page load
  renderBlogs();

  // ... (existing code for form submission)

  createForm.addEventListener("submit", function (e) {
    console.log("hello");
    e.preventDefault();
    if (validateBlog(title, description, image)) {
      errorMessage.style.color = "lightgreen";
      errorMessage.textContent = "blog created successfully!";
      this.prepend(errorMessage);
      let blog = {
        title: title.value,
        description: description.value,
        image: URL.createObjectURL(image.files[0]),
      };
      createBlog(blog);
      title.value = "";
      description.value = "";
      image.value = "";
    } else {
      errorMessage.textContent = "invalid inputs";
      this.prepend(errorMessage);
      return;
    }
  });
});
