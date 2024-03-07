document.addEventListener("DOMContentLoaded", function () {
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  const id = +location.href.split("=")[1];
  const blogToUpdate = blogs.find((blog) => blog.id === id);
  const form = document.getElementById("updateForm");
  const title = document.getElementById("updateTitle");
  const content = document.getElementById("updateContent");
  const image = document.getElementById("file");
  title.value = blogToUpdate.title;
  content.value = blogToUpdate.description;
  console.log(blogToUpdate);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (
      title.value.trim().length < 3 ||
      content.value.trim().length < 10 ||
      image.isDefaultNamespace.length < 1
    ) {
      return;
    } else {
      const index = blogs.indexOf(blogToUpdate);
      if (index > -1) {
        blogs[index] = {
          title: title.value,
          description: content.value,
          image: URL.createObjectURL(image.files[0]),
          id: Date.now(),
        };
        title.value = "";
        content.value = "";
        image.value = "";
        localStorage.setItem("blogs", JSON.stringify(blogs));
      }
    }
  });
});
