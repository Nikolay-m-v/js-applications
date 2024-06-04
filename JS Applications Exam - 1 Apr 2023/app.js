"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

const headerElement = document.querySelector("header");

function getSessionToken() {
  return localStorage.getItem("sessionToken");
}

const sessionToken = getSessionToken();
const isLoggedIn = !!sessionToken;

function renderNavBar() {
  const navBar = html` <div id="logoContainer">
      <a href="placeholder">
        <img
          src="./images/logo.png"
          alt="fruitpedia logo"
          width="100px"
          height="100px"
        />
      </a>
    </div>
    <nav id="navigationLinks">
      <a href="placeholder">Fruits</a>
      <a href="placeholder">Search</a>
      <a href="placeholder">Add Fruit</a>
      ${isLoggedIn
        ? html`<a href="placeholder" @click=${logout}>Logout</a>`
        : html`<a href="placeholder">Login</a>`}
    </nav>`;

  render(navBar, headerElement);
}

function renderPage() {
  const mainPageElement = document.querySelector("main");
  const mainPage = html` <div id="mainWrapper">
    <h2>Learn More About Your Favorite Fruits</h2>
    <img src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
  </div>`;

  render(mainPage, mainPageElement);
}

async function login() {
  const url = "http://localhost:3000/";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

renderNavBar();
renderPage();
