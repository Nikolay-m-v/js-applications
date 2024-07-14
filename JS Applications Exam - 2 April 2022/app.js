"use strict";

import { eventNames } from "process";
import { html, render } from "./node_modules/lit-html/lit-html.js";

(function () {
  function renderHomepage(elements) {
    const renderedHomepage = html`<img
      src="./images/header-bg.png"
      alt="red background"
      width="100%"
      height="100%"
    />`;

    render(renderedHomepage, elements.contentElement);
  }

  function getElements() {
    const homeNavigationLink = document.getElementsByClassName("home");
    const contentElement = document.getElementsByClassName("content");

    return {
      homeNavigationLink,
      contentElement,
    };
  }

  function eventHandler() {
    const elements = getElements();

    elements.homeNavigationLink.addEventListener("click", renderHomepage);
  }

  eventHandler();
})();
