"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

const headerElement = document.querySelector("header");
function renderNavBar() {
  const navBar = html`<div id="logoContainer">
    <a href="placeholder" 
      <img src="placeholder" alt="fruitpedia logo"></img>
    </a>
  </div>
  <div id="navigationLinks">
    <a href="placeholder">Fruits</a>
    <a href="placeholder">Search</a>
    <a href="placeholder">Add Fruit</a>
    <a href="placeholder">Logout</a>
  </div>`;

  render(navBar, headerElement);
}

renderNavBar();
