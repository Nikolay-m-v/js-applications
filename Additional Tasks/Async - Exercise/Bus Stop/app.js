"use strict";

function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const submitBtn = document.getElementById("submit");
  const stopName = document.getElementById("stopName");
  const ulElement = document.getElementById("buses");

  submitBtn.addEventListener("click", () => {
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
      .then((response) => response.json())
      .then((data) => {
        let buses = data.buses;
        let name = data.name;

        stopName.textContent = name;
        ulElement.innerHTML = "";

        Object.keys(buses).forEach((bus) => {
          let liElement = document.createElement("li");
          liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
          ulElement.appendChild(liElement);
        });
      })
      .catch((error) => {
        stopName.textContent = `Error`;
        ulElement.innerHTML = "";
      });
  });
}
