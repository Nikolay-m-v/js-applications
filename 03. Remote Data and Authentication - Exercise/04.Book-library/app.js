"use strict";

(function main() {
  const booksUrl = `http://localhost:3030/jsonstore/collections/books`;
  const loadButton = document.getElementById("loadBooks");
  const form = document.querySelector("form");
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
      return;
    }
  }

  async function getBooks() {
    const response = await fetch(booksUrl);
    const data = await response.json();

    console.log(data);
  }

  async function createNewBook(event) {
    event.preventDefault();
    const bookData = {};
    checkInputValues();

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
