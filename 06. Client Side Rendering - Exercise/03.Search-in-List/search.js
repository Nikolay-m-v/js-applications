import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

// Function to render the card template
function renderCard() {
  const cardTemplate = html`
    <ul>
      ${towns.map((town) => html`<li id=${town}>${town}</li>`)}
    </ul>
  `;
  const card = document.getElementById("towns");
  render(cardTemplate, card);
}

// Initial rendering of the card
renderCard();

// Event listener for the search button
document.querySelector("button").addEventListener("click", search);

// Function to perform search
function search() {
  const searchText = document.getElementById("searchText").value.toLowerCase();
  const result = towns.filter((town) =>
    town.toLowerCase().includes(searchText)
  );

  result.forEach((town) => {
    const match = document.getElementById(town);
    match.classList.add("active");
  });

  const resultHtml = document.getElementById("result");
  resultHtml.textContent = `${result.length} matches found`;
}
