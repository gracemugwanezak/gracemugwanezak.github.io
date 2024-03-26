var blog = document.querySelector(".portfolio__container container");
function getBlogs(response) {
  for (var i = 0; i < response.data.blogs.length; i++) {
    // Concatenate HTML for each blog
    const Blogsection = document.createElement("div");
    Blogsection.innerHTML = `
              <div>
              <span>${response.data.blogs[i].blogName}</span>
              <span>${response.data.blogs[i].blogDescription}</span>
              <i class="fa-solid fa-trash"></i>
              <a href="update.html"
                ><i class="fa-solid fa-pen-to-square"></i
              ></a>
               </div>
                 `;
    blog.append(Blogsection);
  }
}

axios
  .get("https://brand-backend-nrbf.onrender.com/api/blogs")
  .then(getBlogs)
  .catch((error) => {
    console.error("Error fetching blogs:", error);
  });
