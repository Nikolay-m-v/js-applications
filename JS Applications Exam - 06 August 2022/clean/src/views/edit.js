import { html } from '../../node_modules/lit-html/lit-html.js';
import * as service from '../api/data.js';
import { createSubmitHandler } from '../util.js';

// Add @submit=${onSubmit} to form element and change variable name
const editTemplate = (job, onSubmit) => html`<section id="edit">
	<div class="form">
		<h2>Edit Offer</h2>
		<form @submit=${onSubmit} class="edit-form">
			<input
				type="text"
				name="title"
				id="job-title"
				placeholder="Title"
				.value=${job.title}
			/>
			<input
				type="text"
				name="imageUrl"
				id="job-logo"
				placeholder="Company logo url"
				.value=${job.imageUrl}
			/>
			<input
				type="text"
				name="category"
				id="job-category"
				placeholder="Category"
				.value=${job.category}
			/>
			<textarea
				id="job-description"
				name="description"
				placeholder="Description"
				rows="4"
				cols="50"
				.value=${job.description}
			></textarea>
			<textarea
				id="job-requirements"
				name="requirements"
				placeholder="Requirements"
				rows="4"
				cols="50"
				.value=${job.requirements}
			></textarea>
			<input
				type="text"
				name="salary"
				id="job-salary"
				placeholder="Salary"
				.value=${job.salary}
			/>

			<button type="submit">post</button>
		</form>
	</div>
</section>`;

export async function editPage(ctx) {
	const id = ctx.params.id;
	const job = await service.getById(id); // Change function name from service and variable name

	ctx.render(editTemplate(job, createSubmitHandler(ctx, onSubmit))); // Change variable name
}

async function onSubmit(ctx, data, event) {
	const id = ctx.params.id;
	// data is object, Object.values(data) return array and we check with "some" if one field is empty it returns true
	if (Object.values(data).some((value) => value === '')) {
		return alert('All fields are required!');
	}

	await service.editById(id, {
		// Change function name from service
		title: data.title, // PROPERTY NAMES and VALUES WILL BE DIFFERENT !!! Take it from HTML
		imageUrl: data.imageUrl,
		category: data.category,
		description: data.description,
		requirements: data.requirements,
		salary: data.salary,
	});

	event.target.reset();
	ctx.page.redirect('/details/' + id);
}
