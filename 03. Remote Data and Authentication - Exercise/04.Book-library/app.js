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

  function checkInputValues() {
    const nameInput = document.querySelector(`input[name="title"]`);
    const authorInput = document.querySelector(`input[name="author"]`);

    if (nameInput.value === "" || authorInput.value === "") {
      console.log("Fill all inputs!");
      return false;
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

    console.log(entries);
  }

  async function createNewBook(event) {
    event.preventDefault();
    const bookData = {};
    if (!checkInputValues()) {
      return;
    }

    const formData = new FormData(form);
    formData.forEach((value, key) => {
      bookData[key] = value;
    });

    console.log(formData);

    const response = await fetch(booksUrl, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    const newBook = await response.json();
    console.log(newBook);
  }
})();
