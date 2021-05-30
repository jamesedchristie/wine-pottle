import { firestore } from '$services/firebaseAdmin';
import type { UVM, Venue } from '$types';
import type { EndpointOutput, Request } from '@sveltejs/kit';

export async function get({ query }: Request): Promise<EndpointOutput> {
	try {
		const userId = query.get('userId');
		const userVenueMemberships: UVM[] = [];
		const uvmSnapshot = await firestore
			.collection('venueMembers')
			.where('userId', '==', userId)
			.get();
		const userVenueIds = uvmSnapshot.docs.map((doc) =>
			firestore.doc('venues/' + doc.get('venueId'))
		);
		const venues: Venue[] = [];
		const venueDocs = await firestore.getAll(...userVenueIds);
		venueDocs.forEach((doc) => {
			let data = doc.data();
			venues.push({
				id: doc.id,
				name: data.name,
				owner: data.owner,
				description: data.description,
				route: data.route,
				venueImageId: data.venueImageId
			} as Venue);
		});
		return {
			body: {
				venues: venues
			}
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				errors: err
			}
		};
	}
}
