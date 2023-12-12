"use strict";

function getWeather() {
  return new Promise(function (resolve, reject) {
    resolve("Sunny");
  });
}

const promise = getWeather();
promise.then(function (data) {
  console.log(data);
});
