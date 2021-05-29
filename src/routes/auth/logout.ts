import type { EndpointOutput } from "@sveltejs/kit";

export async function post(): Promise<Omit<EndpointOutput, 'headers'> & { headers?: { 'set-cookie': string, 'Set-Cookie': string } }> {
	return {
        headers: {
            'Set-Cookie': 'venueId=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
			'set-cookie': 'session=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
		},
        body: {
            message: 'Deleting cookies'
        }
    };
}