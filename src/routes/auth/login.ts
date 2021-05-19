import type { EndpointOutput } from '@sveltejs/kit';
import { auth } from '../../services/firebase';
import { respond } from './_respond';

export async function post(request: Omit<Request, 'body'> & { body: {
	email: string;
	password: string
}}): Promise<EndpointOutput> {
	const { email, password } = request.body;
	try {
		const response = await auth.signInWithEmailAndPassword(email, password);
		return respond(response);
	} catch (err) {
		return {
			body: {
				errors: err
			}
		};
	}
}
