"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

const headerElement = document.querySelector("header");
const mainPageElement = document.querySelector("main");

function getSessionToken() {
  console.log(localStorage.getItem("sessionToken"));
  return localStorage.getItem("sessionToken");
}

const sessionToken = getSessionToken();
const isLoggedIn = !!sessionToken;

function renderNavBar() {
  const navBar = html` <div id="logoContainer">
      <a href="main page" @click=${renderMainPage()}>
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
      ${isLoggedIn
        ? html`<a href="placeholder" @click=${logout}>Logout</a>`
        : html`<a href="placeholder" @click=${renderLoginPage}>Login</a>`}
      <a href="placeholder" @click=${renderCreateAccountPage}>Register</a>
    </nav>`;

  render(navBar, headerElement);
}

function renderMainPage() {
  const mainPage = html` <div id="mainWrapper">
    <h2>Learn More About Your Favorite Fruits</h2>
    <img src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
    width="800px" id="mainPageImg"
  </div>`;

  render(mainPage, mainPageElement);
}

function renderLoginPage(event) {
  event.preventDefault();
  const loginPage = html` <form class="form">
    <h2>Login</h2>
    <input type="text" name="email" placeholder="email" />
    <input type="password" name="password" placeholder="password" />
    <button type="submit" @click=${login}>Login</button>
    <div class="message">
      <span>Not registered?</span>
      <a @click=${renderCreateAccountPage}>Create an account</a>
    </div>
  </form>`;

  render(loginPage, mainPageElement);
}

function renderCreateAccountPage(event) {
  event.preventDefault();
  const accountPage = html`
  <form class="form">
    <h2>Create Account</h2>
    <input type="text" name="email" placeholder="email"></input>
    <input type="password" name="password" placeholder="password"></input>
    <input type="password" name="password" placeholder="repeat password"></input>
    <button type"submit">Create Account</button>
    <div class="message">
    <span>Already registered? </span>
    <a @click=${renderLoginPage}>Login</a>
    </div>
  <form>`;

  render(accountPage, mainPageElement);
}

function checkInputValues() {
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (!email || !password) {
    alert("fill all fields");
    return false;
  }
  return true;
}

async function login(event) {
  event.preventDefault();

  if (!checkInputValues()) {
    return;
  }

  const url = "http://localhost:3000/";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: document.querySelector(`input[name="email"]`).value,
      password: document.querySelector(`input[name="password"]`).value,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("login successful");
    renderMainPage();
  } else {
    console.log("login failed");
  }
}

function createAccount() {}

renderNavBar();

/// sess will
