import { firestore } from '$services/firebaseAdmin';
import type { WinePottleUser } from '$types';
import type { EndpointOutput, Request } from '@sveltejs/kit';

export async function get({ query }: Request): Promise<EndpointOutput> {
	try {
		if (query.has('venueId')) {
			let users = [];
			let snapshot = await firestore
				.collection('venueMembers')
				.where('venueId', '==', query.get('venueId'))
				.get();
			if (!snapshot.empty) {
				let uids = snapshot.docs.map((doc) => firestore.doc('users/' + doc.get('userId')));
				let docs = await firestore.getAll(...uids);
				for (let doc of docs) {
                    users.push(doc.data())
                }
			}
			return {
				status: 200,
				body: users
			};
		}
		throw 'No query recognised';
	} catch (err) {
		return {
			status: 500,
			body: {
				errors: err
			}
		};
	}
}
