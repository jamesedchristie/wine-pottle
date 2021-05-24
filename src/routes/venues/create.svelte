<!-- ****** Logic ****** -->
<script lang="ts">
	import { goto } from '$app/navigation';

	import { session } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';

	let name: string = '';
	let description: string = '';
	let password: string = '';

	let files: FileList;
    $: preview = files && files.length > 0 ? URL.createObjectURL(files[0]) : '';

	let err;

	async function createVenue() {
		try {
			if (!name) {
				err = 'Please enter a name for the venue';
				return;
			}
			if (!password) {
				err = 'Please enter a password for the venue';
				return;
			}
			if (!description) {
				err = 'Please enter a short description for the venue';
				return;
			}
			let venueImageId = '';
			let route = encodeURIComponent(name.toLowerCase().split(' ').join('-'));
			if (files) {
				let formdata = new FormData();
				formdata.append('file', files.item(0));
				formdata.append('upload_preset', 'wine-pottle');
				formdata.append('public_id', route);
				formdata.append('folder', 'WinePottle');
				try {
					let response = await fetch(`https://api.cloudinary.com/v1_1/dkj7bctqg/image/upload`, {
						method: 'post',
						body: formdata
					});
					let image = await response.json();
					venueImageId = image.public_id;
				} catch (error) {
					console.log(error);
				}
			}
			const createResponse = await fetch('/venues/create', {
				method: 'post',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					password: password,
					userId: $session.user.id,
					description: description,
					venueImageId: venueImageId,
					route: route
				})
			});
			if (!createResponse.ok) {
				const errorData = await createResponse.json();
				throw errorData.errors;
			}
			const createData: { id: string, route: string } = await createResponse.json();
			await goto(`/venues/enter?venueId=${createData.id}&route=${createData.route}`);			
		} catch (error) {
			err = error
		}
	}
</script>

<!-- ****** Markup ****** -->
<h1>New Venue</h1>

<section>
	{#if err}
		<ErrorAlert>{err}</ErrorAlert>
	{/if}
	<form on:submit|preventDefault={createVenue}>
		<div>
			<label for="venueName">Venue Name</label>
			<input id="venueName" type="text" bind:value={name} />
		</div>
		<div>
			<label for="venueDescription">Description</label>
			<input id="venueDescription" type="text" bind:value={description} />
		</div>
		<div>
			<label for="venuePassword">Venue Password</label>
			<input id="venuePassword" type="text" bind:value={password} />
		</div>
		<div>
			<label for="imageUpload">Venue Image</label>
			<input type="file" id="imageUpload" accept="image/*" bind:files />
		</div>
		<div id="preview">
			<img src={preview} alt="Preview" height="100px" />
		</div>		
		<div>
			<Button type='submit' variant="primary">Create</Button>
		</div>
	</form>
</section>

<!-- ****** Styling ****** -->
<style>
</style>
