"use strict";

function getInfo() {
  const stopName = document.getElementById("stopName");
  const busesUlElement = document.getElementById("buses");
  const submitBtn = document.getElementById("submit");
  const stopId = document.getElementById("stopId");
  let url = `http://localhost:3030/jsonstore/bus/businfo/`;

  submitBtn.addEventListener("click", async () => {
    const currentStopId = stopId.value;
    try {
      const response = await fetch(url + currentStopId);
      if (!response.ok) {
        throw new Error("Failed to fetch bus info.");
      }

      const data = await response.json();
      stopName.textContent = data.name;
      let buses = data.buses;
      busesUlElement.innerHTML = "";

      Object.keys(buses).forEach((bus) => {
        let liElement = document.createElement("li");
        liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes.`;
        busesUlElement.appendChild(liElement);
      });
    } catch (error) {
      console.log(error);
    }
  });
}
