import { firestore } from "$services/firebaseAdmin";
import type { Venue } from "$types";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get(request: Request): Promise<EndpointOutput> {
    try {
        const { params } = request;
        const { id } = params;
        const resp = await firestore.doc(id).get();
        const venue: Venue = {
            id: resp.id,
            name: resp.data().name,
            route: resp.data().route
        };
        return {
            body: {
                venue
            }
        };
    } catch (err) {
        return {
            status: 404
        };
    }
}