import type { GetLinkPreviewResponse } from '$types';
import type { EndpointOutput, Request } from '@sveltejs/kit';
import linkPreview from 'link-preview-js';

export async function post({ body }: { body: { url: string } } & Omit<Request, 'body'>): Promise<EndpointOutput> {
    // console.log("Preview called");
    // console.log(body);
    try {
        const url = body.url;
        //console.log(url);
        const preview = await linkPreview.getLinkPreview(url) as GetLinkPreviewResponse;
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