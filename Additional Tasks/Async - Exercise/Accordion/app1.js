"use strict";

const showMoreBtn = document.getElementById(
  "ee9823ab-c3e8-4a14-b998-8c22ec246bd3"
);
const extraDivToShow = document.getElementsByClassName("extra")[0];
let articleListUrl = "http://localhost:3030/jsonstore/advanced/articles/list";
let articleId = "insert_article_id";
let articleIdUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`;

async function getArticleDetails() {
  fetch(articleListUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data[0]);
      for (let i = 0; i < data.length; i++) {
        const objData = data[i];
        const { _id, title } = objData;
        articleId = objData._id;
        getArticleIdDetails();
      }
    });
}

async function getArticleIdDetails() {
  fetch(articleIdUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetchin data");
      }
    })
    .then((data) => {});
}

showMoreBtn.addEventListener("click", () => {
  if (extraDivToShow.style.display === "none") {
    showMoreBtn.textContent = "MORE";
    extraDivToShow.style.display = "block";
  } else {
    showMoreBtn.textContent = "LESS";
    extraDivToShow.style.display = "none";
  }
});

getArticleDetails();
