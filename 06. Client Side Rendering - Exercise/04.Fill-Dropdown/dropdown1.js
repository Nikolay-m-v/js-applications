"use strict";

import {
  html,
  render,
} from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

async function getAllItems() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/advanced/dropdown"
  );
  const data = await response.json();
  return data;
}

let items = Object.values(await getAllItems());

let cardTemplate = html`${items.map(
  (item) => html`<option value=${item._id}>${item.text}</option>`
)}`;
let main = document.getElementById("menu");
render(cardTemplate, main);
