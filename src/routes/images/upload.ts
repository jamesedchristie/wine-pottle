import type { EndpointOutput } from "@sveltejs/kit";

export async function post(request: Request): Promise<EndpointOutput> {
    //console.log(request);
    try {
        await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'post',
            body: request.body
        });
        //console.log(response);
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