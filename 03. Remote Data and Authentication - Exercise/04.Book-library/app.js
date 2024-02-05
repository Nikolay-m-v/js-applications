"use strict";

(function main() {
  const booksUrl = `http://localhost:3030/jsonstore/collections/books`;
  const loadButton = document.getElementById("loadBooks");
  const form = document.querySelector("form");
  const tbodyElement = document.getElementsByTagName("tbody")[0];
  const createBookButton = document.getElementById("submit");

  loadButton.addEventListener("click", () => {
    getBooks();
  });

  createBookButton.addEventListener("click", (event) => {
    createNewBook(event);
  });

  tbodyElement.addEventListener("click", (event) => {
    if (
      event.target.tagName === "BUTTON" &&
      event.target.textContent === "Edit"
    ) {
      editBook(event.target.closest("tr"));
    }
  });

  function checkInputValues() {
    const nameInput = document.querySelector(`input[name="title"]`);
    const authorInput = document.querySelector(`input[name="author"]`);

    if (nameInput.value === "" || authorInput.value === "") {
      console.log("Fill all inputs!");
      return false;
    }
  }

  function editBook(row) {
    if (!row || !row.cells || row.cells.length < 2) {
      console.error("Invalid row for editing");
      return;
    }

    const title = row.cells[0].textContent;
    const author = row.cells[1].textContent;

    const titleInput = document.querySelector(`input[name="title"]`);
    const authorInput = document.querySelector(`input[name="author"]`);

    if (titleInput && authorInput) {
      titleInput.value = title;
      authorInput.value = author;
    }
  }

  async function getBooks() {
    const response = await fetch(booksUrl);
    const data = await response.json();

    let entries = Object.entries(data);

    tbodyElement.innerHTML = "";

    for (let [key, { author, title }] of entries) {
      let trElement = document.createElement("tr");
      let titleTDElement = document.createElement("td");
      titleTDElement.textContent = title;
      let authorTDElement = document.createElement("td");
      authorTDElement.textContent = author;

      trElement.appendChild(titleTDElement);
      trElement.appendChild(authorTDElement);

      let newTDElement = document.createElement("td");
      let editButton = document.createElement("button");
      editButton.textContent = `Edit`;
      let deleteButton = document.createElement("button");
      deleteButton.textContent = `Delete`;
      deleteButton.addEventListener("click", remove);
      editButton.addEventListener("click", editBook);

      editButton.addEventListener("click", () => editBook(trElement));

      newTDElement.appendChild(editButton);
      newTDElement.appendChild(deleteButton);

      trElement.appendChild(newTDElement);
      tbodyElement.appendChild(trElement);

      function remove(event) {
        event.preventDefault();
        fetch(`${booksUrl}/${key}`, {
          method: "delete",
        });
      }
    }
  }

  async function createNewBook(event) {
    event.preventDefault();
    const bookData = {};
    if (checkInputValues()) {
      return;
    }

    const formData = new FormData(form);
    formData.forEach((value, key) => {
      bookData[key] = value;
    });

    const response = await fetch(booksUrl, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    const newBook = await response.json();

    getBooks();
  }
})();
