"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

const headerElement = document.querySelector("header");
const mainPageElement = document.querySelector("main");

function getSessionToken() {
  console.log(localStorage.getItem("sessionToken"));
  return localStorage.getItem("sessionToken");
}

function renderNavBar() {
  const sessionToken = getSessionToken();
  const isLoggedIn = !!sessionToken;

  const navBar = html` <div id="logoContainer">
      <a href="main page" @click=${renderMainPage}>
        <img
          src="./images/logo.png"
          alt="fruitpedia logo"
          width="100px"
          height="100px"
        />
      </a>
    </div>
    <nav id="navigationLinks">
      <a href="#">Fruits</a>
      <a href="#">Search</a>

      ${isLoggedIn
        ? html`<a href="#" @click=${logout}>Logout</a>`
        : html`<a href="#" @click=${renderLoginPage}>Login</a>`}
      ${!isLoggedIn
        ? html`<a href="#" @click=${renderCreateAccountPage}>Register</a>`
        : html``}
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

  const loginPage = html` <form class="form" @submit=${login}>
    <h2>Login</h2>
    <input type="text" name="email" id="email" />
    <input type="password" name="password" id="password" />
    <button type="submit">Login</button>
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
  <form class="form" @submit=${createAccount}>
    <h2>Create Account</h2>
    <input type="text" name="email" #="email"></input>
    <input type="password" name="password" #="password"></input>
    <input type="password" name="repeat-password" #="repeat password"></input>
    <button type"submit">Create Account</button>
    <div class="message">
    <span>Already registered? </span>
    <a @click=${renderLoginPage}>Login</a>
    </div>
  <form>`;

  render(accountPage, mainPageElement);
}

async function login(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const email = formData.get("email");
  const password = formData.get("password");

  const url = "http://localhost:3030/users/login";

  let response;

  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  } catch (error) {
    console.log(error);
  }

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("sessionToken", data.accessToken);
    renderMainPage();
    renderNavBar();
  } else {
    console.log("login failed");
  }
}

async function createAccount(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get("email");
  const password = formData.get("password");
  const repeatPassword = formData.get("repeat-password");

  if (password !== repeatPassword) {
    alert("passwords do not match!");
    return;
  }

  const url = "http://localhost:3030/users/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("sessionToken", data.accesToken);
    alert("Account created successfully");
    renderMainPage();
  } else {
    const errorText = await response.text();
    alert("Registration failed" + errorText);
  }
}

function logout(event) {
  event.preventDefault();
  localStorage.removeItem("sessionToken");
  renderNavBar();
  renderMainPage();
}

renderNavBar();
renderMainPage();

//working fully as of now
