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
    const articles = await response.json();
    console.log(articles);

    return articles;
  }

  function renderSingleArticle(article, container) {
    const divAccordionElement = document.createElement("div");
    divAccordionElement.classList.add("accordion");

    const divHeadElement = document.createElement("div");
    divHeadElement.classList.add("head");

    const spanElement = document.createElement("span");
    spanElement.textContent = article.title;

    const toggleButtonElement = document.createElement("button");
    toggleButtonElement.classList.add("button");
    toggleButtonElement.id = "ee9823ab-c3e8-4a14-b998-8c22ec246bd3";
    toggleButtonElement.textContent = "MORE";

    const divExtraElement = document.createElement("extra");
    divAccordionElement.classList.add("extra");

    const pElement = document.createElement("p");
    pElement.textContent = article.content;
    divHeadElement.appendChild(spanElement);
    divHeadElement.appendChild(toggleButtonElement);
    divAccordionElement.appendChild(divHeadElement);
    divExtraElement.appendChild(pElement);
    container.appendChild(divAccordionElement);
  }

  function renderArticles(articles, container) {
    articles.forEach((article) => {
      renderSingleArticle(article, container);
    });
  }

  function getElements() {
    const mainElement = document.getElementById("main");

    return {
      mainElement,
    };
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const elements = getElements();

    const articles = await getArticles();

    renderArticles(articles, elements.mainElement);
  });
})();
