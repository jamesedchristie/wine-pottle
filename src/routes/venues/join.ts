import { auth, firestore } from '$services/firebaseAdmin';
import type { VenueSecret } from '$types';
import type { EndpointOutput, Request } from '@sveltejs/kit';

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
		//console.log('Join venue called');
		const doc = await firestore.collection('venues')
			.doc(request.body.venueId)
			.get();
		const venue: VenueSecret = {
			id: doc.id,
			name: doc.data().name,
			route: doc.data().route,
			password: doc.data().password
		};
		if (venue.password === request.body.password) {
			//console.log('Password correct. Adding user to venue.')
			await firestore.collection('venueMembers').add({
				venueId: venue.id,
				userId: request.body.userId
			});
			const userClaims = request.locals.user;			
			const venuesWithAccess = userClaims.venues || [];
			//console.log("Current user venues:");
			//console.log(venuesWithAccess);
			//console.log("Adding new venue to claim");
			await auth.setCustomUserClaims(request.body.userId, { venues: [...venuesWithAccess, venue.id] });
			//console.log("Returning");
			return {
				status: 200,			
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
		console.log(err);
		return {
			status: 500,
			body: {
				errors: err
			}
		};
	}
}
