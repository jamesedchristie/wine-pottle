import type { EndpointOutput, Request } from '@sveltejs/kit';
import { auth, firestore } from '$services/firebaseAdmin';


export async function post({ headers }: Request): Promise<EndpointOutput> {
	//console.log('Setting jwt header ' + headers.authorization.substr(0, 10));
	const idToken = headers.authorization;
	const expiresIn = 60 * 60 * 24 * 7 * 1000;
	const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
	
	// const decodedToken = await auth.verifyIdToken(idToken);
	// console.log('Login called. User venues:');
	// console.log(decodedToken.venues);
	// const user = await auth.getUser(decodedToken.uid);
	// console.log(user.customClaims);
	// let venueClaims = user.customClaims['venues'] || [];
	// const snapshot = await firestore.collection('venueMembers').where('userId', '==', user.uid).get();
	// for (let doc of snapshot.docs) {
	// 	if (!venueClaims.includes(doc.get('venueId'))) {
	// 		venueClaims.push(doc.get('venueId'));
	// 	}
	// };
	// await auth.setCustomUserClaims(user.uid, { venues: venueClaims });
	
	return {
		status: 200,
		headers: {
			'set-cookie': `session=${sessionCookie}; Path=/; HttpOnly; `
		},
		body: {
			message: 'Cookie set'
		}
	}
}
