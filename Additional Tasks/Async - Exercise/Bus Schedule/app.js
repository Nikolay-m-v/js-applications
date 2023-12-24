"use strict";

function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const info = document.getElementById("info");

  let busStop = {
    next: "depot",
  };

  departBtn
    .addEventListener("click", () => {
      fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`);
    })
    .then((response) => response.json())
    .then((data) => {});
}
