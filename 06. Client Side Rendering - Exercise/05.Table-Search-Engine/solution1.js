import { getAllStudents } from "./api1.js";
import { render } from "../03.Search-in-List/node_modules/lit-html/lit-html.js";
import { search } from "./search1.js";
import { studentsTemplate } from "./studentsTemplate1.js";

let tableBody = document.querySelector(".container tbody");
let studentsData = await getAllStudents();
let template = studentsTemplate(Object.values(studentsData));

render(template, tableBody);

let searchButton = document.querySelector("#searchBtn");
searchButton.addEventListener("click", search);
