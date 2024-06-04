"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

const headerElement = document.querySelector("header");

function getSessionToken() {
  return localStorage.getItem("sessionToken");
}

function renderNavBar() {
  const sessionToken = getSessionToken();
  const isLoggedIn = !!sessionToken;

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

renderNavBar();
