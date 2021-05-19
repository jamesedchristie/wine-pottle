import type { EndpointOutput, Request } from "@sveltejs/kit";
import { usersCollection } from "../../services/firebase";

export async function get(request: Request): Promise<EndpointOutput> {
    try {
        const { params } = request;
        const { id } = params;
        const resp = await usersCollection.doc(id).get();
        const user: WinePottleUser = {
            id: resp.id,
            name: resp.data().name,
            email: resp.data().email
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