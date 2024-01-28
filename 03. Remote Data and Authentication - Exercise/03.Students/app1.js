"use strict";

function main() {
  let url = "http://localhost:3030/jsonstore/collections/students";
  let table = document.querySelector("#results tbody");
  let form = document.querySelector("form");

  window.addEventListener("load", loadStudents);
  form.addEventListener("submit", createStudent);

  async function loadStudents() {
    try {
      let response = await fetch(url);

      if (response.status !== 200) {
        throw new Error("Error");
      }

      let data = await response.json();

      Object.values(data).forEach((record) => {
        let student = createElement(
          "tr",
          createElement("td", record.firstName),
          createElement("td", record.lastName),
          createElement("td", record.facultyNumber),
          createElement("td", record.grade)
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

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      loadStudents();
    } catch (error) {
      console.log("Error");
    }
  }

  function createElement(type, ...content) {
    let element = document.createElement(type);

    content.forEach((content) => {
      if (typeof content === "number" || typeof content === "string") {
        content = document.createTextNode(content);
      }
      element.appendChild(content);
    });
    return element;
  }
}

main();

/// session with william
