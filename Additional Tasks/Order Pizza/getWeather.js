"use strict";

function getWeather() {
  return new Promise(function (resolve, reject) {
    resolve("Sunny");
  });
}

function onSuccess(data) {
  console.log(`Success ${data}`);
}

function onReject(error) {
  console.log(`Error:  ${error}`);
}

getWeather().then(onSuccess, onReject);
