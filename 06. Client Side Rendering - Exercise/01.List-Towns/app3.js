"use strict";

import { html, render } from "../../node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", (event) => {
  event.preventDefault();

  const rootElement = document.getElementById("root");

  let towns = document.getElementById("towns").value;
  let townsList = towns.split(", ");

  let cardTemplate = html`<ul>
    ${townsList.map((town) => html`<li>${town}</li>`)}
  </ul>`;

  render(cardTemplate, rootElement);
});
