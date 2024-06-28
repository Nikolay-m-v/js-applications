"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

const headerElement = document.querySelector("header");

function getSessionToken() {
  console.log(localStorage.getItem("sessionToken"));
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
      <a href="placeholder">Dashboard</a>
      <a href="placeholder">Create Offer</a>
      <a href="placeholder">Login</a>
      ${isLoggedIn
        ? html`<a href="placeholder" @click=${logout}>Logout</a>`
        : html`<a href="placeholder" @click=${login}>Login</a>`}
    </nav>`;

  render(navBar, headerElement);
}

async function login() {}

async function logout() {}

renderNavBar();
