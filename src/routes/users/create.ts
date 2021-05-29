import { firestore } from "$services/firebaseAdmin";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function post({ body }: Omit<Request, 'body'> & { body: { uid: string; name: string; email: string } }): Promise<EndpointOutput> {
    try {
        const { uid, name, email } = body;
        const result = await firestore.collection('users').doc(uid).set({
            name,
            email
        });
        return {
            status: 200,
            body: {
                ok: true
            }
        }
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            body: {
                errors: err
            }
        }
    }
}