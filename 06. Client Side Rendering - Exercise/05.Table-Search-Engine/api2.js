"use strict";

let url = `http://localhost:3030/jsonstore/advanced/table`;

export async function loadAllStudents() {
  const response = await fetch(url);
  return await response.json();
}
