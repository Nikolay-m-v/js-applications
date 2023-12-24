"use strict";

function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const infoElement = document.getElementById("infoElement");

  let busStop = {
    next: "depot",
  };

  departBtn.addEventListener("click", depart);

  function depart() {
    departBtn.disabled = true;

    fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
      .then((response) => response.json())
      .then((data) => {
        busStop = JSON.parse(JSON.stringify(data));
        infoElement.textContent = `Next Stop is ${busStop.name}`;
      })
      .catch((error) => {
        console.log(error);
      });
    arriveBtn.disabled = false;
  }

  function arrive() {
    arriveBtn.disabled = true;

    fetch;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
