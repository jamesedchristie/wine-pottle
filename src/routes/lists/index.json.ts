import { firestore } from "$services/firebaseAdmin";
import type { WineList } from "$types";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get({ query }: Request): Promise<EndpointOutput> {
    try {
        const venueId = query.get('venueId');
        const snapshot = await firestore.collection('wineLists').where('venueId', '==', venueId).get();
        const wineLists = [];
        if (!snapshot.empty) {
            for (let doc of snapshot.docs) {
                wineLists.push(doc.data());
            }
        }
        return {
            body: wineLists
        }
    } catch (err) {
        return {
            body: {
                errors: err
            }
        }
    }			
}

export async function post({ body }: { body: WineList } & Omit<Request, 'body'>): Promise<EndpointOutput> {
    try {
        const ref = await firestore.collection('wineLists').add(body);
        return {
            body: {
                id: ref.id
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