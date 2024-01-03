"use strict";

const showMoreBtn = document.getElementById(
  "ee9823ab-c3e8-4a14-b998-8c22ec246bd3"
);
const extraDivToShow = document.getElementsByClassName("extra")[0];
let articleId = "replace_with_actual_id";
let urlWithId = `http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`;

async function main() {
  let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
  let response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const data = await response.json();
  console.log(data);
}

async function getArticleDetails() {
  try {
    let response = await fetch(urlWithId);

    if (!response.ok) {
      throw new Error("failed to fetch data");
    }

    const data = await response.json();
    const { id, title, content } = data;

    console.log(data);
  } catch (error) {
    console.log("Error fetching data", error);
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

getArticleDetails();
main();
