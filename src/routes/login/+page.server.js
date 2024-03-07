import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').authWithPassword(body.username, body.password);
		} catch (err) {
			console.log('Err: ', err);
			throw Error(500, 'Something went wrong logging in');
		}

		throw redirect(303, '/');
	}
};
