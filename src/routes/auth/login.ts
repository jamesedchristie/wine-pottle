import { auth } from '../../services/firebase';
import { respond } from './_respond';

type firebaseUser = firebase.default.auth.UserCredential;

export async function post(request: {
	method: string;
	credentials: string;
	body: { email: string; password: string };
	headers: { 'Content-Type': string };
}): Promise<{ body: firebaseUser; headers?: { 'set-cookie': string }; status?: number | undefined }> {
	const { email, password } = request.body;

	try {
		const response = await auth.signInWithEmailAndPassword(email, password);
		return respond(response);
	} catch (err) {
		return respond({ errors: err });
	}
}
