import type { EndpointOutput, Request } from '@sveltejs/kit';
import { auth, usersCollection } from '../../services/firebase';
import { respond } from './_respond';

export async function post(request: Omit<Request, 'body'> & { body: {
	username: string;
	email: string;
	password: string
}}): Promise<EndpointOutput> {
	const newUser = request.body;
	try {
		const response = await auth.createUserWithEmailAndPassword(newUser.email, newUser.password);
		await usersCollection.doc(response.user.uid).set({
			name: newUser.username,
			email: newUser.email
		});
		return respond(response);
	} catch (err) {
		return {
			body: {
				errors: err
			}
		};
	}
}
