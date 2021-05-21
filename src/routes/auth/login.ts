import type { EndpointOutput, Request } from '@sveltejs/kit';

export function post({ headers }: Request): EndpointOutput {
	//console.log('Setting jwt header ' + headers.authorization.substr(0, 10));
	const idToken = headers.authorization;
	return {
		status: 200,
		headers: {
			'set-cookie': `jwt=${idToken}; Path=/; HttpOnly`
		},
		body: {
			message: 'Cookie set'
		}
	}
}
