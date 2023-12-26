"use strict";

function solve() {
  const locationElement = document.getElementById("location");
  const submitBtn = document.getElementById("submit");
  const forecastElement = document.getElementById("forecast");
  const currentElement = document.getElementById("current");
  const upcomingElement = document.getElementById("upcoming");

  submitBtn.addEventListener("click", (event) => {
    console.log("works");
    event.preventDefault();
    getWeather();
  });

  function getWeather() {
    const locationName = locationElement.value;

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

        fetch(
          `http://localhost:3030/jsonstore/forecaster/today/${location.code}`
        )
          .then((response) => response.json())
          .then((currentData) => {
            return fetch(
              `http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`
            )
              .then((response) => response.json())
              .then((upcomingData) => {
                displayForecast(currentData, upcomingData);
              });
          })
          .catch(() => {
            displayError();
          });
      })
      .catch(() => {
        displayError();
      });
  }

  function displayForecast(currentData, upcomingData) {
    currentElement.innerHTML = `
    <div class="label">${currentData.name}</div>
    <div class="forecast-info">
      <p>Low: ${currentData.forecast.low}&#176;C</p>
      <p>High: ${currentData.forecast.high}&#176;C</p>
      <p>Condition: ${currentData.forecast.condition}</p>
    </div>
  `;

    upcomingElement.innerHTML = `
    <div class="label">${upcomingData.name}</div>
    ${upcomingData.forecast
      .map(
        (day) => `
        <div class="forecast-info">
          <p>Low: ${day.low}&#176;C</p>
          <p>High: ${day.high}&#176;C</p>
          <p>Condition: ${day.condition}</p>
        </div>
      `
      )
      .join("")}
  `;
    forecastElement.style.display = "block";
  }

  function displayError() {
    currentElement.innerHTML = `<p>Error</p>`;
    upcomingElement.innerHTML = `<p>Error</p>`;
    forecastElement.style.display = "block";
  }
}

solve();
