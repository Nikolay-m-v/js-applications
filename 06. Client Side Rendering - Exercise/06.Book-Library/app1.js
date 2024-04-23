"use strict";

import {
  render,
  html,
} from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

const root = document.querySelector("body");
const loadAllBooksButton = document.createElement("button");
const booksUrl = "http://localhost:3030/jsonstore/collections/books";

loadAllBooksButton.id = "loadBooks";
loadAllBooksButton.textContent = "LOAD ALL BOOKS";

loadAllBooksButton.addEventListener("click", loadBooks);
root.appendChild(loadAllBooksButton);

async function loadBooks(event) {
  event.preventDefault;
  const response = await fetch(booksUrl);

  const data = await response.json();
  Object.values(data).forEach((entry) => {
    const tableRow = createTableHtmlTemplate(entry);
  });

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
          <td>${data.author}</td>
          <td>${data.title}</td>
          <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>`;

    return tableRow;
  }
}
