"use strict";
/// coding with william

import { html, render } from "./node_modules/lit-html/lit-html.js";

const state = {};

async function loadBooks() {
  const url = "http://localhost:3030/jsonstore/collections/books";

  const response = await fetch(url);
  const data = await response.json();

  state.books = data;
}

function renderBookRow(book) {
  return html` <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
      <button>Edit</button>
      <button>Delete</button>
    </td>
  </tr>`;
}

function renderBooksTable(containerElement) {
  const booksTableTemplate = html` <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      ${Object.values(state.books).map((book) => renderBookRow(book))}
    </tbody>
  </table>`;

  render(booksTableTemplate, containerElement);
}

function renderLoadBooksButton() {
  async function loadAndRenderBooks() {
    await loadBooks();

    renderBooksTable(document.getElementById("books-container"));
  }

  const loadButtonTemplate = html`<button
    @click="${loadAndRenderBooks}"
    id="loadBooks"
    type="button"
  >
    LOAD ALL BOOKS
  </button>`;

  render(loadButtonTemplate, document.getElementById("actions"));
}

renderLoadBooksButton();
