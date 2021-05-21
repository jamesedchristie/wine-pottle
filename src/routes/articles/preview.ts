import type { ArticlePreview } from '$types';
import type { EndpointOutput, Request } from '@sveltejs/kit';
import { getLinkPreview } from 'link-preview-js';

export async function post({ body }: { body: { url: string } } & Omit<Request, 'body'>): Promise<EndpointOutput> {
    // console.log("Preview called");
    // console.log(body);
    try {
        const url = body.url;
        //console.log(url);
        const preview = await getLinkPreview(url) as ArticlePreview;
        return {
            body: preview
        }
    } catch (err) {
        return {
            body: {
                errors: err
            }
        }
    }
}