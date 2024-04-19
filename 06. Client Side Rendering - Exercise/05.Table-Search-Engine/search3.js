"use strict";

export function search() {
  let tableRows = document.querySelector(".container tbody").children;
  let input = document.getElementById("searchField");
  let searchText = input.value;
  input.value = "";

  for (const row of tableRows) {
    row.classList.remove("select");

    if (
      row.textContent
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    ) {
      row.classList.add("select");
    }
  }
}
