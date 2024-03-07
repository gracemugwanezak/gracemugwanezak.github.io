document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".blogs__container");
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  if (blogs.length <= 0) {
    container.innerHTML = "<h2>No Blogs to Display, Please create them!</h2>";
  } else {
    container.innerHTML = "";
    blogs.forEach(({ title, id }, index) => {
      const blogDiv = document.createElement("div");
      blogDiv.innerHTML = ` <span>0${index + 1}</span>
              <span>${title}</span>
              <i class="fa-solid fa-trash" data-id=${id}></i>
              <a href="update.html?id=${id}"><i class="fa-solid fa-pen-to-square"></i></a>`;
      container.appendChild(blogDiv);
    });
  }
  //   implementing delete function
  const blogList = document.querySelectorAll(" .blogs__container div");
  const popup = document.querySelector(".popup");
  blogList.forEach(function (blog) {
    blog.addEventListener("click", function (e) {
      if (e.target.classList.contains("fa-trash")) {
        //  alert("hi");

        const deleteId = +e.target.dataset.id;
        //  const deleteBlog = blogs.find(({ id }) => id === deleteId);
        //  console.log(deleteBlog);
        popup.style.display = "flex";
        popup.addEventListener("click", function (e) {
          if (e.target.textContent === "Delete") {
            popup.style.display = "none";
            let updatedblogs = blogs.filter((b) => {
              return b.id !== deleteId;
            });
            blog.style.display = "none";
            //      console.log(updatedblogs);
            localStorage.setItem("blogs", JSON.stringify(updatedblogs));
          } else {
            popup.style.display = "none";
            return;
          }
        });
      }
    });
  });
});

/*
div>
              <span>01</span>
              <span>blog Title</span>
              <i class="fa-solid fa-trash"></i>
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            */
