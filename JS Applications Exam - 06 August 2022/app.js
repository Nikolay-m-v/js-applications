"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

const headerElement = document.querySelector("header");
const wrapperElement = document.getElementById("wrapper");

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
          src="./images/logo.jpg"
          alt="fruitpedia logo"
          width="100px"
          height="60px"
        />
      </a>
    </div>
    <nav id="navigationLinks">
      <a href="placeholder">Dashboard</a>
      <a href="placeholder">Create Offer</a>
      ${isLoggedIn
        ? html`<a href="#" @click=${logout}>Logout</a>`
        : html`<a href="#" @click=${renderLoginPage}>Login</a>`}
    </nav>`;

  render(navBar, headerElement);
}

function renderStaticHomePage() {
  const homePage = html`<div id="homepageWrapper">
    <img
      src="./images/homepage.png"
      alt="magnified glass looking for a job"
      width="400px"
      height="220px"
    />
    <h3>Searching for a job?</h3>
    <h3>The right place for a new career start</h3>
  </div>`;

  render(homePage, wrapperElement);
}

function renderLoginPage(event) {
  event.preventDefault();

  const loginPage = html`<form class="form" @submit=${login}>
    <h2>Login</h2>
    <input type="text" name="email" id="email" />
    <input type="password" name="password" id="password" />
    <button type="submit">Login</button>
    <div class="message">
      <span>Not registered?</span>
      <a @click=${renderCreateAccountPage}>Create an account</a>
    </div>
  </form> `;

  render(loginPage, wrapperElement);
}

function logout(event) {
  event.preventDefault();
  localStorage.removeItem("sessionToken");
  renderNavBar();
  renderStaticHomePage();
}

function renderCreateAccountPage() {}

async function login() {}

renderNavBar();
renderStaticHomePage();
