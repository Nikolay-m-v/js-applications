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
    const data = await response.json();

    return data;
  }

  function renderToggleArticleButton(article, articleContent) {
    const toggleButton = document.createElement("button");

    toggleButton.classList.add("button");
    toggleButton.setAttribute("id", article._id);
    toggleButton.innerHTML = "MORE";

    toggleButton.addEventListener("click", () => {
      toggleButton.innerHTML = articleContent.classList.contains("hidden")
        ? "Less"
        : "More";
      toggleArticleContent(article._id, articleContent);
    });

    return toggleButton;
  }

  function renderSingleArticle(article, container) {
    const divAccordionElement = document.createElement("div");
    divAccordionElement.classList.add("accordion");

    const divHeadElement = document.createElement("div");
    divHeadElement.classList.add("head");

    const spanTitleElement = document.createElement("span");
    spanTitleElement.innerHTML = article.title;

    const divArticleContent = document.createElement("div");
    divArticleContent.classList.add("hidden");

    const toggleButton = renderToggleArticleButton(article, divArticleContent);

    divHeadElement.appendChild(spanTitleElement);
    divHeadElement.appendChild(toggleButton);

    divAccordionElement.appendChild(divHeadElement);
    divAccordionElement.appendChild(divArticleContent);
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

  async function getSingleArticle(id) {
    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

    const response = await fetch(url);

    const data = await response.json();

    return data;
  }

  async function toggleArticleContent(articleId, container) {
    const article = await getSingleArticle(articleId);

    container.classList.toggle("hidden");
    container.innerHTML = article.content;
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const elements = getElements();

    const articles = await getArticles();

    renderArticles(articles, elements.mainElement);
  });
})();
