import * as api from './api.js';

// FILL ENDPOINTS WITH THE CORRECT ONES FROM THE WORD FILE AND NAME THE PROPERTY CORRECTLY
const endpoints = {
	getAll: '/data/offers?sortBy=_createdOn%20desc',
	create: '/data/offers',
    getById: '/data/offers/',
    deleteById: '/data/offers/',
    editById: '/data/offers/',
	addApplication: '/data/applications/',
	totalApplications: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
	canApply: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

// CHANGE FUNCTION NAMES AND CHANGE THE ENDPOINTS 


export async function getAll() {
	return api.get(endpoints.getAll);
}

export async function create(data) {
	return api.post(endpoints.create, data);
}

export async function getById(id) {
	return api.get(endpoints.getById + id);
}

export async function editById(id, data) {
	return api.put(endpoints.editById + id, data);
}

export async function deleteById(id) {
	return api.del(endpoints.deleteById + id);
}

export async function addApplication(id) {
	return api.post(endpoints.addApplication, id);
}

export async function totalApplications(id) {
	return api.get(endpoints.totalApplications(id));
}

export async function canApply(id, userId) {
	return api.get(endpoints.canApply(id, userId));
}