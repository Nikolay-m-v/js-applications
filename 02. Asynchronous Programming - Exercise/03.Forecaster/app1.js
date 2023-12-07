"use strict";

function solve() {
  const baseUrl = "http://localhost:3030/jsonstore/forecaster/locations";

  const inputElement = document.getElementById("location");
  const submitBtn = document.getElementById("submit");
  const divElementForecast = document.getElementById("forecast");
  const divElemenetForecastUpcoming = document.getElementById("upcoming");
  const divElemenetForecastCurrent = document.getElementById("current");

  submitBtn.addEventListener("click", getLocation);

  function getLocation() {
    const locationValue = inputElement.value;

    if (!locationValue) {
      return;
    }

    const url = `${baseUrl}/${locationValue}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const locationCode = data.code;

        fetchCurrentConditions(locationCode);
        fetchUpcomingConditions(locationCode);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error.message);
      });
  }

  function fetchCurrentConditions(locationCode) {
    const currentUrl = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;

    fetch(currentUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error: ${response.status}  - ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        divElemenetForecastCurrent.innerHTML = `
          <div class="label">Current conditions</div>
          <div class="condition">${data.forecast.condition}</div>
          <div class="symbol">&#176;</div>
          <div class="forecast-data">Low: ${data.forecast.low}° | High: ${data.forecast.high}°</div>
        `;
      })
      .catch((error) => {
        console.error("Error fetching current conditions:", error.message);
      });
  }

  function fetchUpcomingConditions(locationCode) {
    const upcomingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`;

    fetch(upcomingUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error: ${response.status}  - ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        divElemenetForecastUpcoming.innerHTML = `
          <div class="label">Three-day forecast</div>
        `;

        data.forecast.forEach((forecast) => {
          const forecastDiv = document.createElement("div");
          forecastDiv.className = "forecast-info";
          forecastDiv.innerHTML = `
            <div class="condition">${forecast.condition}</div>
            <div class="symbol">&#176;</div>
            <div class="forecast-data">Low: ${forecast.low}° | High: ${forecast.high}°</div>
          `;
          divElemenetForecastUpcoming.appendChild(forecastDiv);
        });
      })
      .catch((error) => {
        console.error("Error fetching upcoming forecast:".error.message);
      });
  }
}

solve();
