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

    Object.values(data).forEach((entry) => {
      const tableRow = createTableHtmlTemplate(entry);
      appendRenderedElements(tableRow);
    });
    addBookForm();
  }

  // function editBook(entry) {
  //   let titleForm = document.getElementById("title");
  //   let authorForm = document.getElementById("author");
  //   titleForm.value = entry.title;
  //   authorForm.value = entry.author;
  // }

  // editBook();

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
          <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>`;

    return tableRow;
  }

  function appendRenderedElements(elementToAppend) {
    const container = document.createElement("div");
    render(elementToAppend, container);

    const renderedNode = container.firstElementChild;

    document.body.appendChild(renderedNode);
  }

  function addBookForm() {
    const form = document.createElement("form");
    form.id = "add-form";

    const h3Element = document.createElement("h3");
    h3Element.textContent = "Add book";

    const labelTitleElement = document.createElement("label");
    labelTitleElement.textContent = "TITLE";

    const inputTitleELement = document.createElement("input");
    inputTitleELement.type = "text";
    inputTitleELement.name = "title";
    inputTitleELement.placeholder = "Title...";
    inputTitleELement.id = "title";

    const labelAuthorElement = document.createElement("label");
    labelAuthorElement.textContent = "AUTHOR";

    const inputAuthorElement = document.createElement("input");
    inputAuthorElement.type = "text";
    inputAuthorElement.name = "author";
    inputAuthorElement.placeholder = "Author...";
    inputAuthorElement.id = "author";

    const inputSubmitElement = document.createElement("input");
    inputSubmitElement.type = "submit";
    inputSubmitElement.value = "Submit";

    form.appendChild(h3Element);
    form.appendChild(labelTitleElement);
    form.appendChild(inputTitleELement);
    form.appendChild(labelAuthorElement);
    form.appendChild(inputAuthorElement);
    form.appendChild(inputSubmitElement);

    document.body.appendChild(form);
  }

  document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    const loadAllBooksButton = document.createElement("button");
    loadAllBooksButton.id = "loadBooks";
    loadAllBooksButton.textContent = "LOAD ALL BOOKS";
    document.body.appendChild(loadAllBooksButton);

    loadAllBooksButton.addEventListener("click", () => {
      loadAllElements();
    });

    document.body.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit-btn")) {
        const tableRow = event.target.closest("tr");
        const title = tableRow.querySelector("td:nth-child(1)").textContent;
        const author = tableRow.querySelector("td:nth-child(2)").textContent;

        document.getElementById("title").value = title;
        document.getElementById("author").value = author;
      }
    });
  });
})();
