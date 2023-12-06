"use strict";

const getData = async (url) => {
  const data = await fetch(`http://localhost:3030/jsonstore/forecaster/${uri}`);
  if (!data.ok) throw new Error();
};

function solve() {
  const inputElement = document.getElementById("location").value;
  const submitBtn = document.getElementById("submit");
  const divElement = document.getElementById("forecast");
  const upcomingElement = document.getElementById("upcoming");
}
/// fix
