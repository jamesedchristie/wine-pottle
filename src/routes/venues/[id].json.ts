import type { EndpointOutput, Request } from "@sveltejs/kit";
import { venuesCollection } from "../../services/firebase";

export async function get(request: Request): Promise<EndpointOutput> {
    try {
        const { params } = request;
        const { id } = params;
        const resp = await venuesCollection.doc(id).get();
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