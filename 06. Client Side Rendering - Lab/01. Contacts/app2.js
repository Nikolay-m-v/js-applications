"use strict";

import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

const mainElements = document.querySelector("#contacts");

const contactTemplate = (contact) => html`<div class="contact card>
<div>
<i class="far fa-user-circle gravatar"></i></div>
<div class="info">
<h2>Name: ${contact.name}</h2>
<button class ="detailsBtn">
</button>
<div class="details" id="1">
<p>Phone Number ${contact.phone}</p>
<p>Email ${contact.email}</p>
</div></div></div>`;

render(contacts.map(contactTemplate), root);

function showDetails(event) {
  const infoDiv = event.target.parentElement;
  const detailsDiv = infoDiv.querySelector(".data");

  if ((event.target.textContent = "Details")) {
    detailsDiv.style.display = "block";
    event.target.textContent = "Hide Details";
  } else {
    detailsDiv.style.display = "none";
    event.target.textContent = "Details";
  }
}
