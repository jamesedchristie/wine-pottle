import type { GetSession, Handle } from '@sveltejs/kit'; 
import { auth, usersCollection } from './services/firebase';
import * as cookie from 'cookie';

export const handle: Handle = async ({ request, render }) => {
    console.log('Handle has been called');
    request.locals.user = auth.currentUser;
    return await render(request);
}

export const getSession: GetSession = async (request) => {
    console.log("getSession has been called");
    if (request.locals.user !== null) {
        const userProfile = await usersCollection.doc(request.locals.user?.uid).get();
        return {
            user: {
                name: userProfile?.data().name,
                email: request.locals.user?.email
            }
        }
    } else {
        return {
            user: null
        }
    }
} 