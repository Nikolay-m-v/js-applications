"use strict";

import { loadAllStudents } from "./api2.js";
import { studentsTemplate } from "./studentsTemplate.js";
import { search } from "./search3.js";
import { render } from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

let tableBody = document.querySelector(".container tbody");
let studentData = await loadAllStudents();
let template = studentsTemplate(Object.values(studentData));

render(template, tableBody);

let searchButton = document.querySelector("#searchBtn");
searchButton.addEventListener("click", search);
