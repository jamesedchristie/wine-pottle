import { firestore } from "$services/firebaseAdmin";
import type { Venue } from "$types";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get(request: Request): Promise<EndpointOutput> {
    try {
        const { params } = request;
        const { id } = params;
        const resp = await firestore.doc('venues/' +  id).get();
        const data = resp.data();
        const venue: Venue = {
            id: resp.id,
            name: data.name,
            route: data.route,
            owner: data.owner,
            venueImageId: data.venueImageId,
            description: data.description
        };
        return {
            body: venue
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            body: {
                errors: err
            }
        };
    }
}