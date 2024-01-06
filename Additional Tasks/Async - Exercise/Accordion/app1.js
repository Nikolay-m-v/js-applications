"use strict";

async function solution() {
  const showMoreBtn = document.getElementById(
    "ee9823ab-c3e8-4a14-b998-8c22ec246bd3"
  );
  const extraDivToShow = document.getElementsByClassName("extra")[0];
  // let articleListUrl = "http://localhost:3030/jsonstore/advanced/articles/list";
  // let articleId = "insert_article_id";
  // let articleIdUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`;

  try {
    let url = "http://localhost:3030/jsonstore/advanced/articles/list";
    let response = await fetch(url);

    if (response.ok === false) {
      throw new Error("Error fetching article list");
    }

    let data = await response.json();

    data.forEach((article) => {
      let articleElement = document.createElement("div");
      articleElement.classList.add("accordion");
      articleElement.innerHtml = `<div class="head">
      <span>${article.title}</span>
      <button class="button" id="${article._id}" onclick="moreOnclick(event)">More</button>
      </div>
      <div class="extra"></div>`;
      let main = document.getElementById("main");
      main.appendChild(articleElement);
    });
  } catch (error) {
    console.log(error);
  }

  async function moreOnclick(event) {}
}
