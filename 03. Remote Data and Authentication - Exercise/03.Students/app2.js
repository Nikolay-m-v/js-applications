"use strict";

(function () {
  const url = `http://localhost:3030/jsonstore/collections/students`;
  let table = document.querySelector("#results tbody");
  let form = document.querySelector("form");

  async function loadStudents() {
    const response = await fetch(url);

    const data = await response.json();

    Object.values(data).forEach((record) => {
      let student = document.createElement(
        "tr",
        document.createElement("td", record.firstName),
        document.createElement("td", record.lastName),
        document.createElement("td", record.facultyNumber),
        document.createElement("td", record.grade)
      );
    });
    console.log(data);
  }

  loadStudents();
})();
