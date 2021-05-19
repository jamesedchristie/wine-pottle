import { venueMembersCollection, venuesCollection } from '$services/firebase';
import type { EndpointOutput, Request } from '@sveltejs/kit';

export async function post({
	body
}: Omit<Request, 'body'> & {
	body: { name: string; userId: string; password: string };
}): Promise<EndpointOutput> {
	try {
		const { name, userId, password } = body;
		const route = encodeURIComponent(name.toLowerCase().split(' ').join('-'));
		const venueRef = await venuesCollection.add({
			name: name,
			password: password,
			route: route
		});
		await venueMembersCollection.add({
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
		return {
			status: 500,
			body: {
				errors: err
			}
		};
	}
}
