import type { EndpointOutput } from "@sveltejs/kit";

export async function post(): Promise<Omit<EndpointOutput, 'headers'> & { headers?: { 'set-cookie': string | string[] } }> {
	return {
        headers: {
			'set-cookie': ['jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT', 'venueId=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT']
		},
        body: {
            message: 'Deleting cookies'
        }
    };
}