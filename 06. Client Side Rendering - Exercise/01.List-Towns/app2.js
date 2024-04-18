"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", (event) => {
  event.preventDefault();

  let input = document.getElementById("towns").value;
  let townsList = input.split(", ");

  const townTemplate = html`<ul>
    ${townsList.map((town) => html`<li>${town}</li>`)}
  </ul>`;

  let root = document.getElementById("root");
  render(townTemplate, root);
});
