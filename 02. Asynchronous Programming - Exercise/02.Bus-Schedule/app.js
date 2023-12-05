"use strict";

function solve() {
  const infoElement = document.getElementById("info");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");

  let busStop = {
    next: "depot",
  };

  function depart() {
    departBtn.disabled = true;
    fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
      .then((response) => response.json())
      .then((data) => {
        busStop = JSON.parse(JSON.stringify(data));
        infoElement.textContent = `Next Stop ${busStop.name}`;
      })
      .catch((error) => console.log(error));
    arriveBtn.disabled = false;
  }

  function arrive() {
    infoElement.textContent = `Arriving at ${busStop.name}`;
    departBtn.dispatchEvent = false;
    arriveBtn.dispatchEvent = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
