import type { EndpointOutput } from "@sveltejs/kit";
import cloudinary from '$services/cloudinary';

export async function post({ body }: Omit<Request, 'body'> & { body: FormData }): Promise<EndpointOutput> {
    //console.log(request);
    try {
        const response = await cloudinary.uploader.upload(
            body.get('file').toString(),
            { 
                folder: 'WinePottle',
                public_id: body.get('public_id').toString(),
                tags: body.get('tags').toString()
            }
        );
        return {
            body: {
                ok: true
            }
        }
    } catch (err) {
        return {
            status: 500
        }
    }
}