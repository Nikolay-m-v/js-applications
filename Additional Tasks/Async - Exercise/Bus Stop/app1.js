"use strict";

function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const submitButton = document.getElementById("submit");
  const stopName = document.getElementById("stopName");
  const ulElement = document.getElementById("buses");

  submitButton.addEventListener("click", () => {
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let buses = data.buses;
        let name = data.name;

        stopName.textContent = name;
        buses.innerHTML = "";

        Object.keys(buses).forEach((bus) => {
          let liElement = document.createElement("li");
          liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
          ulElement.appendChild(liElement);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
}
