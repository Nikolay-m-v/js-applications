"use strict";

const showMoreBtn = document.getElementById(
  "ee9823ab-c3e8-4a14-b998-8c22ec246bd3"
);
const extraDivToShow = document.getElementsByClassName("extra")[0];
console.log(extraDivToShow);

showMoreBtn.addEventListener("click", () => {
  if (extraDivToShow.style.display === "none") {
    showMoreBtn.textContent = "LESS";
    extraDivToShow.style.display = "block";
  } else {
    showMoreBtn.textContent = "MORE";
    extraDivToShow.style.display = "none";
  }
});

async function main() {
  let url = "http://localhost:3030/jsonstore/advanced/articles/list";
  let response = await fetch(url);

  if (response.ok === false) {
    throw new Error("failed to retrieve data");
  }

  let data = await response.json();
  console.log(data);
}
