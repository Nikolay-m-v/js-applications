"use strict";

(function () {
  const url = `http://localhost:3030/jsonstore/collections/students`;
  let table = document.querySelector("#results tbody");
  let form = document.querySelector("form");

  form.addEventListener("submit", createStudent);

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
      table.appendChild(student);
    });
  }

  async function createStudent(event) {
    event.preventDefault();
    const formData = FormData(form);
    const studentData = {};
    formData.forEach((value, key) => {
      studentData[key] = value;
    });
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    const createdStudent = await response.json();

    let student = document.createElement("tr");
    ["firstName", "lastName", "facultyNumber", "grade"].forEach((field) => {
      let cell = document.createElement("td");
      cell.textContent = createdStudent[field];
      student.appendChild(cell);
    });

    table.appendChild(student);
  }
  loadStudents();
})();
