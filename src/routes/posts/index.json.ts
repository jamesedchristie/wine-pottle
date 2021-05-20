import { firestore } from "$services/firebaseAdmin";
import type { Post } from "$types";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get({ query }: Request): Promise<EndpointOutput> {
    try {
        const venueId = query.get('venueId');
        const snapshot = await firestore.collection('posts').where('venueId', '==', venueId).get();
        console.log(snapshot.docs.length);
        const posts = [];
        if (!snapshot.empty) {
            for (let doc of snapshot.docs) {
                posts.push(doc.data());
            }
        }
        return {
            body: posts
        }
    } catch (err) {
        return {
            body: {
                errors: err
            }
        }
    }
}

export async function post({ body }: Omit<Request, 'body'> & { body: Post }): Promise<EndpointOutput> {
    try {
        const response = await firestore.collection('posts').add(body);
        return {
            body: {
                postId: response.id
            }
        }
    } catch (err) {
        return {
            body: {
                errors: err
            }
        }
    }
}