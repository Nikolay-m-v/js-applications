"use strict";

import {
  html,
  render,
} from "../03.Search-in-List/node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

(function () {
  const rootElement = document.getElementById("allCats");
  const nestedUlElement = document.createElement("ul");

  rootElement.appendChild(nestedUlElement);

  let cardTemplate = (cat) => html`<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap"/>
    <div class="info">
      <button class="showBtn" @click=${onClick}>Show status code</button>
      <div class="status" style="dispay: none" id="${cat.id}>
        <h4>Status code: ${cat.statusCode}</h4>
        <p>${cat.message}</p>
        </div>
      </div>
    </li>`;

  function onClick(event) {
    let cat = event.target.parentNode;
    let result = cat.querySelector(".status").style.display;

    if (result === "block") {
      cat.querySelector(".status").style.display = "none";
    } else {
      cat.querySelector(".status").style.display = "block";
    }
  }

  let result = cats.map(cardTemplate);
  render(result, rootElement);
})();
