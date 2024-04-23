"use strict";

import {
  render,
  html,
} from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

const root = document.querySelector("body");
const loadAllBooksButton = document.createElement("button");
loadAllBooksButton.id = "loadBooks";
loadAllBooksButton.textContent = "LOAD ALL BOOKS";

loadAllBooksButton.addEventListener("click", loadBooks);
root.appendChild(loadAllBooksButton);

async function loadBooks(event) {
  event.preventDefault;
}
