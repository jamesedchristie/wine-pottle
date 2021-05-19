import type { EndpointOutput, Request } from '@sveltejs/kit';
import { venueMembersCollection, venuesCollection } from '../../services/firebase';

export async function post(
	request: Omit<Request, 'body'> & {
		body: {
			password: string;
			venueId: string;
			userId: string;
		};
	}
): Promise<EndpointOutput> {
	try {
		const doc: firebase.default.firestore.DocumentSnapshot = await venuesCollection
			.doc(request.body.venueId)
			.get();
		const venue: VenueSecret = {
			id: doc.id,
			name: doc.data().name,
			route: doc.data().route,
			password: doc.data().password
		};
		if (venue.password === request.body.password) {
			await venueMembersCollection.add({
				venueId: venue.id,
				userId: request.body.userId
			});
			return {
				status: 200,
				headers: {
					'set-cookie': `venueId=${venue.id}; Path=/; HttpOnly`
				},
				body: {
					ok: true
				}
			};
		} else {
			return {
				status: 504,
				body: {
					errors: 'Incorrect password'
				}
			};
		}
	} catch (err) {
		return {
			status: 500,
			body: {
				errors: err
			}
		};
	}
}
