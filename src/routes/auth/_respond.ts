import type { EndpointOutput } from "@sveltejs/kit";

export async function respond(body: firebaseUser): Promise<EndpointOutput> {
	const creds = body as firebaseUser;
	const user = creds.user;
    const json = JSON.stringify(await user.getIdToken());
	const value = Buffer.from(json).toString('base64');

	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body: JSON.stringify(creds)
	};
}

export async function respondLogout(): Promise<Omit<EndpointOutput, 'headers'> & { headers?: { 'set-cookie': string | string[] } }> {
	return {
		headers: {
			'set-cookie': ['jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT', 'venueId=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT']
		},
		body: {
			ok: true
		}
	}
}