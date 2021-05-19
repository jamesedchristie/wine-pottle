import { articlesCollection } from "$services/firebase";
import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function post({ body }: Omit<Request, 'body'> & { body: Article }): Promise<EndpointOutput> {
    try {
        const { userId, venueId, href, datetime } = body;
        const ref = await articlesCollection.add({
            userId,
            venueId,
            href,
            datetime
        });
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