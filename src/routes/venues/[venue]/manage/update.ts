import { firestore } from '$services/firebaseAdmin';
import type { Venue, VenueSecret } from '$types';
import type { EndpointOutput, Request } from '@sveltejs/kit';

export async function post({
	body
}: Omit<Request, 'body'> & { body: VenueSecret }): Promise<EndpointOutput> {
	try {
		console.log('Update called. New venue details:');
		console.log(body);
		const { name, description, venueImageId, route } = body;
		console.log('Getting existing data');
		const venue = await firestore.collection('venues').doc(body.id).get();
		const password = body.password || venue.get('password');
		console.log('Password will be ' + password + '. Updating document');
		await firestore.doc('venues/' + body.id).update({
			name,
			description,
			password,
			venueImageId,
			route
		});
		console.log('Doc updated. Returning');
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
