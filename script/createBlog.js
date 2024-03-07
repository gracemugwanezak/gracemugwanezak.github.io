const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
const createForm = document.getElementById("createBlogForm");
const errorMessage = document.createElement("p");
errorMessage.style.color = "brown";
document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const image = document.getElementById("file");
  const createBlog = (blog) => {
    console.log(blog);
    console.log(blogs instanceof Array);
    blogs.push(blog);
    return localStorage.setItem("blogs", JSON.stringify(blogs));
  };
  const validateBlog = (title, content, image) => {
    if (
      title.value.trim().length < 2 ||
      content.value.trim().length < 10 ||
      image.files.length < 0
    ) {
      errorMessage.textContent = "please fill in the the blank";
      createForm.appendChild(errorMessage);
      return;
    } else {
      errorMessage.style.display = "none";
      return true;
    }
  };

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
        id: Date.now(),
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
