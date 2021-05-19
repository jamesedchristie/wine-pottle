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
        // const response = await fetch(`https://${import.meta.env.VITE_CLOUDINARY_API_KEY}:${import.meta.env.VITE_CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/resources/image/tags/${venue}?max_results=5${next ? 'next_cursor=' + next : ''}`);
        // const data: ResourceApiResponse = await response.json();
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