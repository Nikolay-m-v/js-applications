"use strict";

import { html, render } from "./node_modules/lit-html/lit-html.js";

const cardTemplate = (card) => html`<div class="contact-card">
    <ul>
      <li>placeholderLink</li>
    </ul>
  </div>
  <div class="info">
    <h2>${card}</h2>
  </div>`;
