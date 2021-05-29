import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get({ query, locals }: Request): Promise<EndpointOutput> {
    try {
        //console.log("Enter venue called");
        const venueId: string = query.get('venueId');
        //console.log("venue: " + venueId);
        const userClaims = locals.user;
        //console.log("User claims:");
        //console.log(userClaims);
        if (!userClaims.venues.includes(venueId)) {
            throw "User does not have access to this venue";
        }
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
    } catch (err) {
        console.log(err);
        return {
            body: {
                errors: err
            }
        }
    }
}