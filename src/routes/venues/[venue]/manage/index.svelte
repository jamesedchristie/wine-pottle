<!-- ****** Loading Logic ****** -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session, fetch }) => {
		const venueId = session.venue.id;
		const venueResponse = await fetch(`/venues/${venueId}.json`);
		if (!venueResponse.ok) {
			let data = await venueResponse.json();
			return {
				props: {
					err: data.errors
				}
			};
		}
		const venue = await venueResponse.json();
		const venueUsersResponse = await fetch(`/users.json?venueId=${venueId}`);
		if (!venueUsersResponse.ok) {
			let data = await venueUsersResponse.json();
			return {
				props: {
					err: data.errors
				}
			};
		}
		const users = await venueUsersResponse.json();
		return {
			props: {
				venue,
				users
			}
		};
	};
</script>

<!-- ****** Client-side Logic ****** -->
<script lang="ts">
	import type { FirebaseStore, Venue, VenueSecret, WinePottleUser } from '$types';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import Button from '$lib/components/Button.svelte';
	import { signInWithEmailAndPassword } from '@firebase/auth';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';

	const store = getContext<Writable<FirebaseStore>>('store');

	export let venue: Venue;
	export let users: WinePottleUser[] = [];
	export let err: string;
	let message: string;

	let name: string = venue?.name;
	let description: string = venue?.description;
	let currentPassword: string;
	let newPassword: string;
	let confirmNewPassword: string;

	let files: FileList;
	let uploadInput: HTMLInputElement;
	$: preview = files && files.length > 0 ? URL.createObjectURL(files[0]) : '';
	$: imageUrl = `https://res.cloudinary.com/dkj7bctqg/image/upload/v1621853195/${venue?.venueImageId}`;

	async function saveChanges() {
		message = '';
		try {
			const updatedVenue = Object.assign({}, venue) as VenueSecret;
			if (newPassword) {
				console.log('New password submitted. Signing in to authenticate');
				if (!currentPassword) throw 'Please enter your account password to authorise the change';
				if (newPassword !== confirmNewPassword) throw "Passwords don't match";
				await signInWithEmailAndPassword($store.auth, $session.user.email, currentPassword);
				console.log('User authenticated');
				updatedVenue.password = newPassword;
			}
			if (name !== venue.name) {
				updatedVenue.name = name;
				updatedVenue.route = encodeURIComponent(name.toLowerCase().split(' ').join('-'));
				console.log('New name and route: ' + updatedVenue.name + ' ' + updatedVenue.route);
			}
			if (description !== venue.description) {
				updatedVenue.description = description;
				console.log('New description: ' + updatedVenue.description);
			}
			if (files && files.length > 0) {
				let newVersion: number = 2;
				let newImageId: string;
				let imageId = venue.venueImageId.split('/')[1];
				let idSplit = imageId.split('_');
				if (idSplit.length > 1) {
					let version = Number(idSplit[1]);
					if (typeof version === 'number') {
						newVersion = version + 1;
					}
				}
				newImageId = idSplit[0] + '_' + newVersion;
				console.log('New Image Id: ' + newImageId);
				let formdata = new FormData();
				formdata.append('file', files.item(0));
				formdata.append('upload_preset', 'wine-pottle');
				formdata.append('public_id', newImageId);
				console.log('New photo. Uploading to cloudinary.');
				let response = await fetch(`https://api.cloudinary.com/v1_1/dkj7bctqg/image/upload`, {
					method: 'post',
					body: formdata
				});
				let image = await response.json();
				updatedVenue.venueImageId = image.public_id;
				console.log('Photo uploaded. Id: ' + updatedVenue.venueImageId);
			}
			console.log('Sending changes to update');
			let response = await fetch('manage/update', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(updatedVenue)
			});
			if (!response.ok) {
				let data = await response.json();
				err = data.errors;
			}
			console.log('Changes saved. Reloading session');
			(newPassword = ''),
				(confirmNewPassword = ''),
				(currentPassword = ''),
				(uploadInput.value = '');
			reloadVenue();
		} catch (error) {
			err = error;
		}
	}

	async function reloadVenue() {
		try {
			let venueResponse = await fetch(`/venues/${$session.venue.id}.json`);
			if (!venueResponse.ok) {
				let data = await venueResponse.json();
				throw data.errors;
			}
			venue = await venueResponse.json();
			message = 'Update successful';
		} catch (error) {
			err = error;
		}
	}
</script>

<!-- ****** Markup ****** -->
<h2>Manager Dashboard</h2>

{#if err}
	<ErrorAlert message={err} />
{/if}

{#if message}
	<p>{message}</p>
{/if}

<section id="detailsSection">
	<h3>Venue Details</h3>
	<form on:submit|preventDefault={saveChanges}>
		<div class="formRow">
			<label for="nameInput">Name</label>
			<input id="nameInput" type="text" bind:value={name} />
		</div>
		<div class="formRow">
			<label for="descriptionInput">Description</label>
			<textarea id="descriptionInput" type="text" bind:value={description} rows="5" />
		</div>
		<hr />
		<div id="changePasswordSection">
			<h4>Venue Password</h4>
			<div class="formRow">
				<label for="newPasswordInput">New Venue Password</label>
				<input id="newPasswordInput" type="text" bind:value={newPassword} />
			</div>
			<div class="formRow">
				<label for="confirmNewPasswordInput">Confirm Password</label>
				<input id="confirmNewPasswordInput" type="text" bind:value={confirmNewPassword} />
			</div>
			<div class="formRow">
				<label for="currentPasswordInput">Your Account Password</label>
				<input id="currentPasswordInput" type="password" bind:value={currentPassword} />
			</div>
		</div>
		<hr />
		<div id="imageSection">
			<h4>Venue Image</h4>
			<img src={imageUrl} alt={venue.name} />
			<div class="formRow">
				<label for="imageInput">Upload New Image</label>
				<input id="imageInput" type="file" accept="image/*" bind:files bind:this={uploadInput} />
			</div>
			<div id="preview">
				<img src={preview} alt="Preview" height="100px" />
			</div>
		</div>
		<div id="buttonRow">
			<Button type="submit">Save Changes</Button>
		</div>
	</form>
	<hr />
</section>
<section id="membersSection">
	<h3>Members</h3>
	<ul>
		{#each users as user}
			<li>{user?.name}</li>
		{/each}
	</ul>
</section>

<!-- ****** Styling ****** -->
<style>
	section {
		width: 100%;
		max-width: 800px;
	}
	#detailsSection, #changePasswordSection, #imageSection, #membersSection {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px
	}
	form, .formRow {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
	input, textarea {
		width: 90%;
		max-width: 500px;
	}
	img {
		max-width: 100%;
		max-height: 300px;
	}
	#buttonRow {
		width: 100%;
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	#membersSection h3 {
		margin-bottom: 0px;
	}
	ul {
		margin-top: 0px;
		list-style-type: none;
		list-style-type: lower-greek;
		padding-left: 20px;
		text-align: left;
	}
	li {
		padding: 5px 0px;
		font-weight: bold;
	}
	hr {
		width: 100%;
		color: var(--wine-pottle-black);
	}
</style>
