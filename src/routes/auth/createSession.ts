import type { EndpointOutput, Request } from "@sveltejs/kit";

export function get({ query }: Omit<Request, 'body'> & { body: { returnUrl: string } }): EndpointOutput {
    return {
        status: 308,
        headers: {
            'location': query.get('returnUrl')
        }
    }
}