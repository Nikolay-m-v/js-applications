import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as service from '../api/data.js';
import { getUserData } from '../util.js';

//  Add @click=${onDelete} to Delete button or anchor and change variable name
const detailsTemplate = (job, onDelete, onClick) => html`<section id="details">
	<div id="details-wrapper">
		<img id="details-img" src=${job.imageUrl} alt="example1" />
		<p id="details-title">${job.title}</p>
		<p id="details-category">
			Category: <span id="categories">${job.category}</span>
		</p>
		<p id="details-salary">
			Salary: <span id="salary-number">${job.salary}</span>
		</p>
		<div id="info-wrapper">
			<div id="details-description">
				<h4>Description</h4>
				<span>${job.description}</span>
			</div>
			<div id="details-requirements">
				<h4>Requirements</h4>
				<span>${job.requirements}</span>
			</div>
		</div>
		<p>
			Applications: <strong id="applications">${job.applications}</strong>
		</p>
		<div id="action-buttons">
			${job.isOwner
				? html` <a href="/edit/${job._id}" id="edit-btn">Edit</a>
						<a
							@click=${onDelete}
							href="javascript:void(0)"
							id="delete-btn"
							>Delete</a
						>`
				: nothing}
			${job.isLogged && !job.isOwner && !job.canApply
				? html`<a
						@click=${onClick}
						href="javascript:void(0)"
						id="apply-btn"
						>Apply</a
				  >`
				: nothing}
		</div>
	</div>
</section>`;

export async function detailsPage(ctx) {
	const id = ctx.params.id;
	const job = await service.getById(id); // Change variable name and function name from service
	job.isLogged = getUserData();
	job.applications = await service.totalApplications(id);
	job.canApply = await service.canApply(id, ctx.user._id);
	if (ctx.user) {
		job.isOwner = ctx.user._id && ctx.user._id === job._ownerId; // Change variable name
	}
	ctx.render(detailsTemplate(job, onDelete, onClick)); // Change variable name

	async function onDelete() {
		const choice = confirm('Are you sure you want to delete this?');
		if (choice) {
			await service.deleteById(id); // Change function name from service
			ctx.page.redirect('/catalog');
		}
	}

	async function onClick() {
		await service.addApplication({ offerId: id });
		ctx.page.redirect('/details/' + id);
	}
}
