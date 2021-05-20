import { firestore } from "$services/firebaseAdmin";
import type { EndpointOutput, Request } from "@sveltejs/kit";
import type { WinePottleUser } from '../../global'

export async function get(request: Request): Promise<EndpointOutput> {
    try {
        const { params } = request;
        const { id } = params;
        const resp = await firestore.doc(id).get();    
        const user: WinePottleUser = {
            id: resp.id,
            name: resp.get('name'),
            email: resp.get('email')
        };
        return {
            body: user
        };
    } catch (err) {
        return {
            status: 404
        };
    }
}