import type { EndpointOutput } from "@sveltejs/kit";

export function post(): EndpointOutput {
    return {
        headers: {
            'set-cookie': 'venueId=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        },
        body: {
            ok: true
        }
    }
}