import type { EndpointOutput, Request } from "@sveltejs/kit";
import { venuesCollection, venueMembersCollection } from "../../services/firebase";

export async function get(request: Request): Promise<EndpointOutput> {
    const { query } = request;
    const venues: Venue[] = [];
    const venueSnapshot = await venuesCollection.get();
    venueSnapshot.forEach(doc => venues.push({
        id: doc.id,
        name: doc.data().name,
        route: doc.data().route
    } as Venue));
    if (query.get('userId')) {
        const userVenueMemberships: UVM[] = [];            
        const uvmSnapshot = await venueMembersCollection.where('userId', '==', query.get('userId')).get();
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