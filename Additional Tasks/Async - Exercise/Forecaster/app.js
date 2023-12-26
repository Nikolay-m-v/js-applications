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
  }
}
