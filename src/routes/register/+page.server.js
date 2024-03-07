import { redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').create(body);
		} catch (err) {
			console.log('Err: ', err);
			throw Error(500, 'Something went wrong');
		}

		throw redirect(303, '/login');
	}
};
