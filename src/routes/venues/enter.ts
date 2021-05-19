import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get({ query }: Request): Promise<EndpointOutput> {
    const venueId: string = query.get('venueId');
    //console.log(venueId);
    const route: string = query.get('route');
    //console.log(route);
    return {
        headers: {
            'set-cookie': `venueId=${venueId}; Path=/; HttpOnly`,
            'location': route
        },
        status: 308
    }
}