import type { EndpointOutput, Request } from "@sveltejs/kit";
import { postsCollection } from "$services/firebase";

export async function get({ query }: Request): Promise<EndpointOutput> {
    try {
        const venueId = query.get('venueId');
        const docs = await postsCollection.where('venueId', '==', venueId).get();
        const posts: Post[] = [];
        if (!docs.empty) {
            docs.forEach(doc => posts.push({
                ...doc.data(),
                id: doc.id
            } as Post));
        }
        return {
            body: {
                posts: posts
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

export async function post({ body }: Omit<Request, 'body'> & { body: Post }): Promise<EndpointOutput> {
    try {
        const response = await postsCollection.add(body);
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