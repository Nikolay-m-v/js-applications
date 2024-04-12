"use strict";

import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

const mainElements = document.querySelector("#contacts");

const contactTemplate = (contact) => html`<div class="contact-card>
<div>
<i class="far fa-user-circle gravatar"></i></div>
<div class="info">
<h2>Name: ${contact.name}</h2></div></div>`;
