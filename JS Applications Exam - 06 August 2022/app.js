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
        ? html`<a href="placeholder" @click=${logout}>Logout</a>`
        : html`<a href="placeholder" @click=${login}>Login</a>`}
    </nav>`;

  render(navBar, headerElement);
}

function renderStaticHomePage() {
  const homePage = html`<div id="homepageWrapper">
    <img
      src="./images/homepage.png"
      alt="magnified glass looking for a job"
      width="250px"
      height="250px"
    />
    <h2>Searching for a job?</h2>
    <h2>The right place for a new career start</h2>
  </div>`;

  render(homePage, wrapperElement);
}

async function login() {}

async function logout() {}

renderNavBar();
renderStaticHomePage();
