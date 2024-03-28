function getAllPortfolioItems() {
  const response = fetch("http://localhost:4000/portfolio", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: Bearer ${token},
    },
  });
  return response;
}
const response = getAllPortfolioItems();
response
  .then((resp) => resp.json())
  .then((data) => {
    const wrapper = document.querySelector(".wrapper");
    data.forEach((portfolio) => {
      const div = document.createElement("div");
      div.innerHTML = `
            <h2>${portfolio.title}</h2>
            <img src="${portfolio.image}" alt="image 1" />
            <p>${portfolio.content}</p>
          `;
      wrapper.appendChild(div);
    });
  });
