import { firestore } from '$services/firebaseAdmin';
import type { EndpointOutput, Request } from '@sveltejs/kit';

export async function post({
	body
}: Omit<Request, 'body'> & {
	body: { 
		name: string;
		userId: string;
		password: string;
		venueImageId: string;
		route: string;
		description: string;
	};
}): Promise<EndpointOutput> {
	try {
		const { name, userId, password, venueImageId, route, description } = body;
		const venueRef = await firestore.collection('venues').add({
			name: name,
			password: password,
			owner: userId,
			venueImageId: venueImageId,
			route: route,
			description: description
		});
		await firestore.collection('venueMembers').add({
			venueId: venueRef.id,
			userId: userId
		});
		return {
			status: 200,
			body: {
				id: venueRef.id,
				route: route
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
