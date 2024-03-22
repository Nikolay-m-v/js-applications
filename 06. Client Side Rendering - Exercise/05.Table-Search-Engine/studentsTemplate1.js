"use strict";

import { html } from "../03.Search-in-List/node_modules/lit-html/lit-html.js";

export const studentsTemplate = (studentsData) =>
  html` ${studentsData.map(
    (student) => html` <tr>
      <td>${student.firstName} ${student.lastName}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
    </tr>`
  )}`;
