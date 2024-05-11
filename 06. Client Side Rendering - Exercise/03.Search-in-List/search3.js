"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const townsElement = document.getElementById("towns");
const searchText = document.getElementById("searchText");
const result = document.getElementById("result");

function renderCard() {
  let cardTemplate = html`<ul>
    ${towns.map((town) => html`<li id="${town}">${town}</li>`)}
  </ul>`;

  render(cardTemplate, townsElement);
}

renderCard();
