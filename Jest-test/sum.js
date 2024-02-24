"use strict";

// function sum(a, b) {
//   return a + b;
// }

// module.exports = sum;

// function myFunction(input) {
//   if (typeof input !== "number") {
//     throw new Error("invalid input");
//   }
// }

// module.exports = myFunction;

function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

module.exports = fetchData;
