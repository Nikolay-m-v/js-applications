"use strict";
function solve() {
  const showMoreBtn = document.getElementById(
    "ee9823ab-c3e8-4a14-b998-8c22ec246bd3"
  );
  const extraDivToShow = document.getElementsByClassName("extra")[0];

  async function getArticleDetails() {
    try {
      let url = "http://localhost:3030/jsonstore/advanced/articles/list";
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("failed to fetch data");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error fetching data");
    }
  }

  showMoreBtn.addEventListener("click", () => {
    if (extraDivToShow.style.display === "none") {
      showMoreBtn.textContent = "LESS";
      extraDivToShow.style.display = "block";
    } else {
      showMoreBtn.textContent = "MORE";
      extraDivToShow.style.display = "none";
    }
  });
}

solve();
