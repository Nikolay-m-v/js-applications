"use strict";

import {
  render,
  html,
} from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

(function main() {
  let url = `http://localhost:3030/jsonstore/collections/books`;

  async function loadAllElements() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    Object.values(data).forEach((entry) => {
      console.log(entry);
      const tableRow = createTableHtmlTemplate(entry);
      appendElements(tableRow);
    });
  }

  function createTableHtmlTemplate(data) {
    const tableRow = html`<table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${data.title}</td>
          <td>${data.author}</td>
          <td><button>Edit</button> <button>Delete</button></td>
        </tr>
      </tbody>
    </table>`;

    return tableRow;
  }

  function appendElements(elementToAppend) {
    const container = document.createElement("div");
    render(elementToAppend, container);

    const renderedNode = container.firstElementChild;

    document.body.appendChild(renderedNode);
  }

  function getElements() {}

  document.addEventListener("DOMContentLoaded", () => {
    const loadAllBooksButton = document.createElement("button");
    loadAllBooksButton.id = "loadBooks";
    loadAllBooksButton.textContent = "LOAD ALL BOOKS";
    document.body.appendChild(loadAllBooksButton);

    loadAllBooksButton.addEventListener("click", () => {
      loadAllElements();
    });
  });
})();
