"use strict";

(function main() {
  const booksUrl = `http://localhost:3030/jsonstore/collections/books`;
  const loadButton = document.getElementById("loadBooks");

  loadButton.addEventListener("click", () => {
    getBooks();
  });

  async function getBooks() {
    const response = await fetch(booksUrl);
    const data = await response.json();

    console.log(data);
  }
})();
