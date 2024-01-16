"use strict";

// <div class="accordion">
//   <div class="head">
//     <span>Scalable Vector Graphics</span>
//     <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">
//       More
//     </button>
//   </div>
//   <div class="extra">
//     <p>Scalable Vector Graphics .....</p>
//   </div>
// </div>

// 1.Get all articles
// 2.Display articles on the screen
// 3.Create toggle button function
// 4.

(async function () {
  async function getArticles() {
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const response = await fetch(url);
    const articles = response.json();
    console.log(articles);

    return articles;
  }

  function renderSingleArticle() {}

  function renderArticles(articles) {
    articles.forEach((article) => {
      renderSingleArticle();
    });
  }

  function getElements() {
    const mainElement = document.getElementById("main");

    return {
      mainElement,
    };
  }
  getArticles();
})();
