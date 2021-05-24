import type { EndpointOutput, Request } from "@sveltejs/kit";
import cloudinary from '$services/cloudinary';

export async function get({ params, query }: Request): Promise<EndpointOutput> {
    const venue: string = params.venue;
    const next: string = query.get('next');
    try { 
        const gallery = await cloudinary.search.expression('tags=' + venue).execute();
        return {
            body: JSON.stringify(gallery)
        }
    } catch (err) {
        return {
            body: {
                errors: err
            }
        }
    }
}