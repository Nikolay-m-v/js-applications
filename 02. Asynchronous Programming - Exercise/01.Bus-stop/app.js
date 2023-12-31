"use strict";

function getInfo() {
  const divElement = document.getElementById("stopName");
  const ulElement = document.getElementById("buses");
  const inputElement = document.getElementById("stopId").value;
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click");

  fetch(`http://localhost:3030/jsonstore/bus/businfo/${inputElement}`)
    .then((response) => response.json())
    .then((data) => {
      let buses = data.buses;
      let name = data.name;

      divElement.textContent = name;
      ulElement.innerHTML = "";

      Object.keys(buses).forEach((bus) => {
        let liElement = document.createElement("li");
        liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
        ulElement.appendChild(liElement);
      });
    })
    .catch((error) => {
      divElement.textContent = `Error`;
      ulElement.innerHTML = "";
    });
}
