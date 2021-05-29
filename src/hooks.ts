import type { GetSession, Handle } from '@sveltejs/kit'; 
import cookie from 'cookie';
import { auth, firestore } from '$services/firebaseAdmin';
import type { Venue, VenueSecret, WinePottleUser } from '$types';

export const handle: Handle = async ({ request, render }) => {
    try {
        //console.log("Handle called");
        // console.log('Handle has been called at ' + new Date().toISOString());
        const cookies = cookie.parse(request.headers?.cookie || '');
        const sessionCookie = cookies.session;
        if (sessionCookie) {
            try {
                const decodedClaims = await auth.verifySessionCookie(sessionCookie);
                request.locals.user = decodedClaims;
                //console.log(decodedClaims);
            } catch (err) {
                console.log('Authentication failed');
                console.log(err);
            }
        }
        const venueId = cookies.venueId;
        if (venueId) {
            if (!request.locals.user?.venues?.includes(venueId)) {
                console.log("User has no access to this venue");
                
            } else {
                request.locals.venueId = venueId;
            }
            // console.log("VenueId: " + venueId)
        }
        return await render(request);
    } catch (err) {
        console.log("Handle error:")
        console.log(err);
    }
}

export const getSession: GetSession = async (request) => {
    //console.log("Get Session called");
    try {
        // console.log("getSession has been called at " + new Date().toISOString());
        // console.log(request.locals);
        let user: WinePottleUser | null = null;
        let venue = null;
        if (request.locals.user) {
            //console.log("Gettng session user");
            const userProfile = await firestore.collection('users').doc(request.locals.user?.uid).get();
            user = {
                id: request.locals.user.uid,
                name: userProfile.data().name,
                email: request.locals.user?.email
            }
        }
        if (request.locals.venueId) {
            const doc = await firestore.collection('venues').doc(request.locals.venueId).get();
            const data = doc.data() as Venue;
            venue = { 
                id: doc.id,
                name: data.name,
                route: data.route,
                owner: data.owner,
                venueImageId: data.venueImageId,
                description: data.description
             };
        }
            
        return {
            user: user,
            venue: venue
        }
    } catch (err) {
        console.log("getSession error:")
        console.log(err);
    }
} 