"use strict";

function main() {
  let url = "http://localhost:3030/jsonstore/collections/students";
  let table = document.querySelector("#results tbody");
  let form = document.querySelector("form");

  window.addEventListener("load", loadStudents);

  async function loadStudents() {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();

      Object.values(data).forEach((record) => {
        let student = createElement(
          "tr",
          createElement("td", record.FirstName),
          createElement("td", record.LastName),
          createElement("td", record.FacultyNumber),
          createElement("td", record.Grade)
        );

        table.appendChild(student);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createStudent(event) {
    event.preventDefault();

    let dataForm = new FormData(form);
    let infoArr = [...dataForm.values()];

    let gradeNumber = infoArr[3].trim();

    table.replaceChildren();

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName: infoArr[0],
          lastName: infoArr[1],
          facultyNumber: infoArr[2],
          grade: gradeNumber,
        }),
      });
    } catch (error) {
      console.log("Error");
    }
  }
}

main();
