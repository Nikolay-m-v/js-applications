import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../util.js';
import * as service from '../api/data.js'; 

const createTemplate = (onSubmit) => html`<section id="create">
<div class="form">
  <h2>Create Offer</h2>
  <form @submit=${onSubmit} class="create-form">
	<input
	  type="text"
	  name="title"
	  id="job-title"
	  placeholder="Title"
	/>
	<input
	  type="text"
	  name="imageUrl"
	  id="job-logo"
	  placeholder="Company logo url"
	/>
	<input
	  type="text"
	  name="category"
	  id="job-category"
	  placeholder="Category"
	/>
	<textarea
	  id="job-description"
	  name="description"
	  placeholder="Description"
	  rows="4"
	  cols="50"
	></textarea>
	<textarea
	  id="job-requirements"
	  name="requirements"
	  placeholder="Requirements"
	  rows="4"
	  cols="50"
	></textarea>
	<input
	  type="text"
	  name="salary"
	  id="job-salary"
	  placeholder="Salary"
	/>

	<button type="submit">post</button>
  </form>
</div>
</section>`; // Add @submit=${onSubmit} to form element

export function createPage(ctx) {
	ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
	// data is object, Object.values(data) return array and we check with "some" if one field is empty it returns true
	if (Object.values(data).some((value) => value === '')) { // Validation if there is any in WORD FILE 
		return alert('All fields are required!');
	}

	await service.create({		// Change function from service
		title: data.title,			// PROPERTY NAMES and VALUES WILL BE DIFFERENT !!! Take it from HTML 
		imageUrl: data.imageUrl,
		category: data.category,
		description: data.description,
		requirements: data.requirements,
		salary: data.salary,
	});

	event.target.reset();   // Reset the form 
	ctx.page.redirect('/catalog'); // Redirect to some page 
}