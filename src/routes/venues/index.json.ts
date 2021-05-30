import { firestore } from "$services/firebaseAdmin";
import type { UVM, Venue } from "$types";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get(request: Request): Promise<EndpointOutput> {
    const { query } = request;
    const venues: Venue[] = [];
    const venueSnapshot = await firestore.collection('venues').get();
    venueSnapshot.forEach(doc => {
        let data = doc.data();
        venues.push({
            id: doc.id,
            name: data.name,
            owner: data.owner,
            description: data.description,
            route: data.route,
            venueImageId: data.venueImageId
        } as Venue)
    });
    if (query.get('userId')) {
        const userVenueMemberships: UVM[] = [];            
        const uvmSnapshot = await firestore.collection('venueMembers').where('userId', '==', query.get('userId')).get();
        if (!uvmSnapshot.empty) uvmSnapshot.forEach(doc => userVenueMemberships.push({
            id: doc.id,
            venueId: doc.data().venueId,
            userId: doc.data().userId
        } as UVM));
        return {
            body: {
                venues: venues,
                userVenueMemberships: userVenueMemberships
            }
        };
    }
    return {
        body: {
            venues: venues
        }
    }
}