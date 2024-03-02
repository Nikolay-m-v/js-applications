"use strict";

import { render } from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

(function main() {
  let url = `http://localhost:3030/jsonstore/collections/books`;

  async function loadAllElements() {
    const response = await fetch(url);

    const data = await response.json();
    createHtmlTemplate(data);
  }

  function createHtmlTemplate(data) {
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

  function getElements() {}

  document.addEventListener("DOMContentLoaded", () => {
    loadAllElements();
  });
})();
