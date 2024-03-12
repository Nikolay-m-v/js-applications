"use strict";

import { html, render } from "../../node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", (event) => {
  event.preventDefault();

  let input = document.querySelector("#towns").value;

  let townsList = input.split(", ");

  const cardTemplate = html`<ul>
    ${townsList.map((town) => html`<li>${town}</li>`)}
  </ul>`;

  let root = document.getElementById("root");
  render(cardTemplate, root);
});
