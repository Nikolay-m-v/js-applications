import { html } from '../../node_modules/lit-html/lit-html.js';
import * as service from '../api/data.js';

const cardTemplate = (job) => html`<div class="offer">
	<img src=${job.imageUrl} alt="./images/example3.png" />
	<p><strong>Title: </strong><span class="title">${job.title}</span></p>
	<p><strong>Salary:</strong><span class="salary">${job.salary}</span></p>
	<a class="details-btn" href="/details/${job._id}">Details</a>
</div>`; // Collection in singular form(Единствено число)

const catalogTemplate = (jobs) => html`<section id="dashboard">
	<h2>Job Offers</h2>
	${jobs.length > 0 ? jobs.map(cardTemplate) : html`<h2>No offers yet.</h2>`}
</section>`; // Change variable name

export async function catalogPage(ctx) {
	const jobs = await service.getAll(); // Change variable name and function from service
	ctx.render(catalogTemplate(jobs)); // Change variable name
}
