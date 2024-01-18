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

    fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
      .then((response) => response.json())
      .then((data) => {
        busStop = JSON.parse(JSON.stringify(data));
        infoDivElement.textContent = `Next Stop is ${busStop.name}`;
      })
      .catch((error) => {
        console.log(error);
      });
    arriveBtn.disabled = false;
  }

  arriveBtn.addEventListener("click", arrive);

  function arrive() {
    departBtn.disabled = false;

    infoDivElement.textContent = `Arriving at ${busStop.name}`;
    arriveBtn.disabled = true;
  }

  return {
    arrive,
    depart,
  };
}

let result = solve();
