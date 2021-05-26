import { firestore } from "$services/firebaseAdmin";
import type { Source } from "$types";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get({ query }: Request): Promise<EndpointOutput> {
    try {
        const venueId = query.get('venueId');
        const snapshot = await firestore.collection('sources').where('venueId', '==', venueId).get();
        //console.log(snapshot.docs.length);
        const sources = [];
        if (!snapshot.empty) {
            for (let doc of snapshot.docs) {
                sources.push(doc.data());
            }
        }
        return {
            body: sources
        }
    } catch (err) {
        return {
            body: {
                errors: err
            }
        }
    }
}

export async function post({ body }: Omit<Request, 'body'> & { body: Source }): Promise<EndpointOutput> {
    try {
        const response = await firestore.collection('sources').add(body);
        return {
            body: {
                sourceId: response.id
            }
        }
    } catch (err) {
        return {
            body: {
                errors: err
            }
        }
    }
}