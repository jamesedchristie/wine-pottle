import { auth, firestore } from '$services/firebaseAdmin';
import type { Request } from '@sveltejs/kit';

export async function post({
	body,
	locals
}: Omit<Request, 'body'> & { body: { venueId: string; userId: string } }) {
	const { venueId, userId } = body;
	try {
		const snapshot = await firestore
			.collection('venueMembers')
			.where('venueId', '==', venueId)
			.where('userId', '==', userId)
			.get();
		if (snapshot.empty || snapshot.docs.length > 1) {
			console.log("Couldn't find UVM to remove");
			return {
				status: 404,
				body: {
					error: "Couldn't find UVM to remove"
				}
			};
		}
		await snapshot.docs[0].ref.delete();
		const userClaims = locals.user;
		const newVenues = userClaims.venues.filter((v) => v !== venueId);
		await auth.setCustomUserClaims(userId, { venues: newVenues });
		return {
			status: 200,
			body: {
				ok: true
			}
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
