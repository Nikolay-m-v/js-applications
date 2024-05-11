"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const townsElement = document.getElementById("towns");

function renderCard() {
  let cardTemplate = html`<ul>
    ${towns.map((town) => html`<li id="${town}">${town}</li>`)}
  </ul>`;

  render(cardTemplate, townsElement);
}

document.getElementById("searchButton").addEventListener("click", search);

function search() {
  const searchText = document.getElementById("searchText").value.toLowerCase();

  const result = towns.filter((town) =>
    town.toLowerCase().includes(searchText)
  );

  result.forEach((town) => {
    const match = document.getElementById(town);
    match.classList.add("active");
  });

  const resultHtml = document.getElementById("result");
  resultHtml.textContent = `${result.length} matches found`;
}

renderCard();
