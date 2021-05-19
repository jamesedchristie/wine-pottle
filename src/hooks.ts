import type { GetSession, Handle } from '@sveltejs/kit'; 
import { auth, usersCollection, venuesCollection } from './services/firebase';
import * as cookie from 'cookie';

export const handle: Handle = async ({ request, render }) => {
    try {
        // console.log('Handle has been called at ' + new Date().toISOString());
        if (auth.currentUser) {
            // console.log("Current user:");
            // console.log(auth.currentUser.email);
            request.locals.user = auth.currentUser;
        }
        const cookies = cookie.parse(request.headers?.cookie || '')
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
    try {
        // console.log("getSession has been called at " + new Date().toISOString());
        // console.log(request.locals);
        let user: WinePottleUser | null = null;
        let venue: Venue | null = null;
        if (request.locals.user) {
            const userProfile = await usersCollection.doc(request.locals.user?.uid).get();
            user = {
                id: request.locals.user.uid,
                name: userProfile.data().name,
                email: request.locals.user?.email
            }
        }
        if (request.locals.venueId) {
            const doc = await venuesCollection.doc(request.locals.venueId).get();
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