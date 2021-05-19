import { winelistCollection } from "$services/firebase";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function post({ body }: { body: WineList } & Omit<Request, 'body'>): Promise<EndpointOutput> {
    try {
        const ref = await winelistCollection.add(body);
        return {
            body: {
                id: ref.id
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