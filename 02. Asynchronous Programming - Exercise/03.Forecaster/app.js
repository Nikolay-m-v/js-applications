"use strict";

// const getData = async (url) => {
//   const data = await fetch(`http://localhost:3030/jsonstore/forecaster/${uri}`);
//   if (!data.ok) throw new Error();
// };

function solve() {
  const inputElement = document.getElementById("location").value;
  const submitBtn = document.getElementById("submit");
  const divDisplay = document.getElementById("forecast");
  const upcomingDayDiv = document.getElementById("upcoming");
  const currentDayDiv = document.getElementById("current");
  let baseUrl = "http://localhost:3030/jsonstore/forecaster";
  let sunny = "&#x2600";
  let partlySunny = "&#x26C5";
  let overcast = "&#x2601";
  let rain = "&#x2614";
  let degrees = "&#176";
  let code = "";

  let divElementCurrent = document.createElement("div");
  let divElementUpcoming = document.createElement("div");

  submitBtn.addEventListener("click", (e) => {
    divElementCurrent.innerHTML = "";
    divElementUpcoming.innerHTML = "";

    divElementCurrent.setAttribute("class", "forecasts");
    divElementUpcoming.setAttribute("class", "forecast-info");

    divDisplay.style.display = "inline";
  });
}
