import type { GetSession, Handle } from '@sveltejs/kit'; 
import * as cookie from 'cookie';
import { auth, firestore } from '$services/firebaseAdmin';
import type { Venue, WinePottleUser } from '$types';

export const handle: Handle = async ({ request, render }) => {
    try {
        //console.log("Handle called");
        // console.log('Handle has been called at ' + new Date().toISOString());
        const cookies = cookie.parse(request.headers?.cookie || '');
        let idToken = cookies.jwt;
        if (!idToken) {
            //console.log("Handle: No cookie. Checking authorisation header");
            idToken = request.headers?.authorization;
            //if (idToken) console.log("Found auth header: " + idToken.substr(0, 10));
        }
        if (idToken) {
            const decodedToken = await auth.verifyIdToken(idToken); 
            //console.log("Token decoded")           
            console.log("Current user: " + decodedToken.email);
            request.locals.user = decodedToken;
        } else console.log("No cookie or auth header")
        const venueId = cookies.venueId;
        if (venueId) {
            // console.log("VenueId: " + venueId)
            request.locals.venueId = venueId;
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
        let venue: Venue | null = null;
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
            venue = { id: doc.id, name: doc.data().name, route: doc.data().route };
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