import type { EndpointOutput, Request } from "@sveltejs/kit";
import cloudinary from '$services/cloudinary';

export async function get({ params, query }: Request): Promise<EndpointOutput> {
    const venue: string = params.venue;
    const next: string = query.get('next');
    try {
        const gallery = await cloudinary.api.resources_by_tag(venue, {
            max_results: 5,
            next_cursor: next
        });        
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