"use strict";

import {
  html,
  render,
} from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

const url = `http://localhost:3030/jsonstore/advanced/dropdown`;

async function getAllItems() {
  const response = await fetch(url);

  const data = await response.json();

  Object.values(data).forEach((entry) => {});
}

getAllItems();
