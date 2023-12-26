"use strict";

function solve() {
  const locationElement = document.getElementById("location");
  const submitBtn = document.getElementById("submit");
  const forecastElement = document.getElementById("forecast");
  const currentElement = document.getElementById("current");
  const upcomingElement = document.getElementById("upcoming");

  submitBtn.addEventListener("click", () => {
    getWeather();
  });

  function getWeather() {
    const locationName = locationElement.value();

    if (!locationName) {
      displayError();
      return;
    }

    fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
      .then((response) => response.json())
      .then((locationsData) => {
        const location = locationsData.find(
          (location) => location.name === locationName
        );
        if (!location) {
          displayError();
          return;
        }
      });
  }
}
