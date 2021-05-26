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
            console.log(gallery);
			return {
				props: {
					gallery: gallery
				}
			};
		} catch (err) {
			return {
				props: {
					err: err
				}
			};
		}
	};
</script>

<script lang="ts">
	import { session } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import ImageCard from '$lib/components/ImageCard.svelte';
	import type { CloudinaryImage } from '$types';

	export let err: string;

	//Gallery
	export let gallery: ResourceApiResponse | undefined;
	let images: CloudinaryImage[] = gallery?.resources?.map((r) => r as CloudinaryImage) || [];
	$: sortedImages = images.sort(
		(a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
	);

	// Image uploading
	let files: FileList;
    let imageInput: HTMLInputElement;
	let caption: string;
	$: preview = files && files.length > 0 ? URL.createObjectURL(files[0]) : '';
	async function uploadImage(): Promise<void> {
		try {
			let formdata = new FormData();
			formdata.append('file', files.item(0));
			formdata.append('upload_preset', 'wine-pottle');
			formdata.append('folder', 'WinePottle');
			formdata.append('tags', $session.venue.route);
			formdata.append(
				'context',
				`caption=${caption}|poster=${$session.user.name}|userId=${$session.user.id}`
			);
			let response = await fetch(`https://api.cloudinary.com/v1_1/dkj7bctqg/image/upload`, {
				method: 'post',
				body: formdata
			});
			if (!response.ok) {
				throw await response.json();
			}
			let data = await response.json();
            let newImage = data as CloudinaryImage;
            newImage.context = {
                caption: caption,
                poster: $session.user.name,
                userId: $session.user.id
            }
			images = [...images, data as CloudinaryImage];
            imageInput.value = '';
            caption = '';
		} catch (error) {
			err = error;
		}
	}
</script>

<!-- ****** Markup ****** -->
<h1>Gallery</h1>

<form id="uploadForm" on:submit|preventDefault={uploadImage}>
	<div class="formRow">
		<label for="imageUpload">Upload Image</label>
		<input type="file" id="imageUpload" accept="image/*" bind:files bind:this={imageInput} />
	</div>
	<div class="formRow">
		<label for="imageCaption">Caption</label>
		<input type="text" id="imageCaption" bind:value={caption} />
	</div>
	<div id="preview">
		<img src={preview} alt="Preview" height="100px" />
	</div>
	<div id="uploadButtonContainer">
		<Button type="submit">Upload</Button>
	</div>
</form>

{#if err}
	<ErrorAlert>{err}</ErrorAlert>
{/if}

<div id="gallery">
	{#each sortedImages as image}
		<ImageCard {image} />
	{/each}
</div>

<!-- ****** Styling ****** -->
<style>
	form {
        min-width: 50%;
		max-width: 700px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	#gallery {
		margin-top: 50px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 30px;
	}
    .formRow {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    label {
        text-align: right;
        min-width: fit-content;
        width: 20%;
    }
    input {
        width: 70%;
    }
</style>
