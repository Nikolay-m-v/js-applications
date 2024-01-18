"use strict";

function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const infoDivElement = document.getElementById("info");
  let busStop = {
    next: "depot",
  };

  departBtn.addEventListener("click", depart);

  function depart() {
    departBtn.disabled = true;

    let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        busStop = JSON.parse(JSON.stringify(data));
        infoDivElement = `Next Stop is ${busStop.name}`;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  arriveBtn.addEventListener("click", arrive);

  function arrive() {
    departBtn.disabled = false;
  }
}

let result = solve();
