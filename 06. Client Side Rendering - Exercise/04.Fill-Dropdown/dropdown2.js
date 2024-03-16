"use strict";

import {
  html,
  render,
} from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

const url = `http://localhost:3030/jsonstore/advanced/dropdown`;

async function getAllItems() {
  const response = await fetch(url);

  const data = await response.json();

  return data;
}

let items = Object.values(await getAllItems());

let cardTemplate = html`${items.map((item) => {
  html`<option value=${item._id}>${item.text}</option>`;
})}`;

render(cardTemplate);

document
  .querySelector('input[type="submit"]')
  .addEventListener("click", addItem);

async function addItem(event) {
  event.preventDefault();

  let text = document.getElementById("itemText").value;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ text }),
  });

  let data = await response.json();

  items.push(data);

  if (response.ok) {
    cardTemplate = html`${items.map(
      (item) => html`<option value=${item._id}>${item.text}</option>`
    )}`;
    render(cardTemplate, main);
  }
}

getAllItems();
