import { html, render } from "./node_modules/lit-html/lit-html.js";

const state = {};

async function loadBooks() {
  const url = "http://localhost:3030/jsonstore/collections/books";

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function createBook(book) {
  const url = "http://localhost:3030/jsonstore/collections/books";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
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

async function loadAndRenderBooks() {
  const books = await loadBooks();

  state.books = books;

  renderBooksTable(document.getElementById("books-container"));
}

function renderLoadBooksButton(containerElement) {
  const loadButtonTemplate = html`<button
    @click="${loadAndRenderBooks}"
    id="loadBooks"
    type="button"
  >
    LOAD ALL BOOKS
  </button>`;

  render(loadButtonTemplate, containerElement);
}

function renderCreateBookForm(containerElement) {
  let localState = {};

  function handleTitleChange(event) {
    localState.title = event.target.value;
  }

  function handleAuthorChange(event) {
    localState.author = event.target.value;
  }

  const createBookFormTemplate = html` <form id="add-form">
    <h3>Add book</h3>

    <label>TITLE</label>
    <input
      @change="${handleTitleChange}"
      required
      type="text"
      name="title"
      placeholder="Title..."
    />

    <label>AUTHOR</label>
    <input
      @change="${handleAuthorChange}"
      required
      type="text"
      name="author"
      placeholder="Author..."
    />

    <button @click="${() => createBook(localState)}" type="button">
      Submit
    </button>
  </form>`;

  render(createBookFormTemplate, containerElement);
}

renderLoadBooksButton(document.getElementById("actions"));
renderCreateBookForm(document.getElementById("add-books-form-container"));

//// lectures and help
