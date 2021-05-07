import { auth } from "../../services/firebase";

export async function post(): Promise<{ headers: { 'set-cookie': string }; body: {ok: boolean }}> {
    await auth.signOut();
	return {
		headers: {
			'set-cookie': 'jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
		},
		body: {
			ok: true
		}
	};
}