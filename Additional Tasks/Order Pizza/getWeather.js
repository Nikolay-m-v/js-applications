"use strict";

function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Sunny");
    }, 200);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("🌞");
          break;
        case "Cloudy":
          resolve("☁");
          break;
        case "Rainy":
          resolve("🌧");
          break;
        default:
          reject("No icon found");
      }
    }, 200);
  });
}

function onSuccess(data) {
  console.log(`Success ${data}`);
}

function onReject(error) {
  console.log(`Error:  ${error}`);
}

getWeather().then(onSuccess, onReject);
