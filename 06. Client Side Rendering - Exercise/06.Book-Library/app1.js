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
  const tableRows = Object.values(data).map(createTableHtmlTemplate);
  const bookTable = html`
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
  // bject.values(data).forEach((entry) => {
  //   const tableRow = createTableHtmlTemplate(entry);
  //   appendRenderedElements(tableRow);
  // });

  render(bookTable, root);

  addBookForm();

  function createTableHtmlTemplate(data) {
    return html`
      <tr>
        <td>${data.title}</td>
        <td>${data.author}</td>
        <td>
          <button @click=${() => editBook(data)}>Edit</button>
          <button @click=${() => deleteBook(data)}>Delete</button>
        </td>
      </tr>
    `;
  }

  // function createTableHtmlTemplate(data) {
  //   const tableRow = html`<table>
  //     <thead>
  //       <tr>
  //         <th>Title</th>
  //         <th>Author</th>
  //         <th>Action</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>${data.author}</td>
  //         <td>${data.title}</td>
  //         <td>
  //           <button class="edit-btn">Edit</button>
  //           <button class="delete-btn">Delete</button>
  //         </td>
  //       </tr>
  //     </tbody>
  //   </table>`;

  //   return tableRow;
  // }

  function addBookForm() {
    const form = document.createElement("form");
    form.id = "add-form";

    const h3Element = document.createElement("h3");
    h3Element.textContent = "Add book";

    const labelTitleElement = document.createElement("label");
    labelTitleElement.textContent = "TITLE";

    const titleInputElement = document.createElement("input");
    titleInputElement.type = "text";
    titleInputElement.name = "title";
    titleInputElement.placeholder = "Title...";
    titleInputElement.id = "title";

    const authorTitleElement = document.createElement("label");
    authorTitleElement.textContent = "AUTHOR";

    const authorInputElement = document.createElement("input");
    authorInputElement.type = "text";
    authorInputElement.name = "author";
    authorInputElement.placeholder = "Author...";

    const inputSubmitElement = document.createElement("input");
    inputSubmitElement.type = "submit";
    inputSubmitElement.value = "Submit";
    inputSubmitElement.id = "submitButtonForm";

    form.appendChild(h3Element);
    form.appendChild(labelTitleElement);
    form.appendChild(titleInputElement);
    form.appendChild(authorTitleElement);
    form.appendChild(authorInputElement);
    form.appendChild(inputSubmitElement);

    document.body.appendChild(form);
  }

  submitButtonForm.addEventListener("click", submitBook);

  function submitBook(event) {
    event.preventDefault();
  }

  // document.querySelector(".edit-button").addEventListener("click", () => {});

  // function editBook() {}

  function appendRenderedElements(elementToAppend) {
    const container = document.createElement("div");
    render(elementToAppend, container);

    const renderedElementNode = container.firstElementChild;

    document.body.appendChild(renderedElementNode);
  }
}

/// working on solutions
