"use strict";

import {
  html,
  render,
} from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

const url = `http://localhost:3030/jsonstore/advanced/dropdown`;

const menuElement = document.getElementById("menu");

document.addEventListener("DOMContentLoaded", async () => {
  async function getItems() {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  let items = Object.values(await getItems());

  let cardTemplate = html`${items.map(
    (item) => html`<option value=${item._id}>${item.text}</option>`
  )}`;

  render(cardTemplate, menuElement);

  document
    .querySelector(`input[type="submit"]`)
    .addEventListener("click", addItem);

  async function addItem(event) {
    getItems();
    event.preventDefault();

    let text = document.getElementById("itemText").value;

    const response = await fetch(url, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ text }),
    });

    let data = await response.json();

    items.push(data);
  }
});
