<!-- ****** Logic ****** -->
<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    import type { ResourceApiResponse } from 'cloudinary';

    export const load: Load = async ({ fetch, session }) => {
        try {
            const galleryResponse = await fetch(`/images/venues/${session.venue.route}.json`);
            if (!galleryResponse.ok) {
                const errorData = await galleryResponse.json();
                throw errorData.errors;
            }	
            const gallery: ResourceApiResponse = await galleryResponse.json();
            return {
                props: {
                    gallery: gallery
                }
            }
        } catch (err) {
            return {
                props: {
                    err: err
                }
            }
        }
    };
</script>

<script lang="ts">
    import { session } from '$app/stores';
    import Button from '$lib/components/Button.svelte';
    import ErrorAlert from '$lib/components/ErrorAlert.svelte';

    export let err: string;

    //Gallery
    export let gallery: ResourceApiResponse | undefined;
    let images: CloudinaryImage[] = gallery?.resources.map(r => r as CloudinaryImage) || [];
    $: sortedImages = images.sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf());

    // Image uploading
    let files: FileList;
    $: preview = files && files.length > 0 ? URL.createObjectURL(files[0]) : '';
    async function uploadImage(): Promise<void> {
        try {
            let formdata = new FormData();
            formdata.append('file', files.item(0));
            formdata.append('upload_preset', 'wine-pottle');
            formdata.append('folder', 'WinePottle');
            formdata.append('tags', $session.venue.route);
            let response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method: 'post',
                body: formdata
            });
            if (!response.ok) {
                throw await response.json();
            }
            let data = await response.json();
            images = [...images, data as CloudinaryImage];
        } catch (error) {
            err = error;
        }
    }
</script>

<!-- ****** Styling ****** -->
<style>
    #gallery {
        display: flex;
        flex-direction: column;
        gap: 30px
    }
</style>

<!-- ****** Markup ****** -->
<h1>Gallery</h1>

<form id="uploadForm" on:submit|preventDefault={uploadImage} >
    <label for="imageUpload">Upload Image</label>
    <input type="file" id="imageUpload" accept="image/*" bind:files />

    <div id="preview">
        <img src={preview} alt="Preview" height="100px" />
    </div>
    <div id="uploadButtonContainer">
        <Button type='submit'>Upload</Button>
    </div>
</form>

{#if err}
    <ErrorAlert>{err}</ErrorAlert>
{/if}

<div id="gallery">
    {#each sortedImages as image}
        <picture>
            <img src={image.secure_url} alt={image.public_id} loading="lazy" />
        </picture>
    {/each}
</div>