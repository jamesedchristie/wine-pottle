<!-- ****** Loading Logic ****** -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session, page, fetch }) => {
		const { userId } = page.params;
		if (userId !== session.user.id) {
			return {
				status: 302,
				redirect: '/login'
			};
		}
		try {
			const response = await fetch(`/users/${userId}/venues.json?userId=${session.user.id}`);
			const data = await response.json();
			return {
				props: {
					venues: data.venues
				}
			};
		} catch (error) {
			console.log(error);
		}
	};
</script>

<!-- ****** Client-side Logic ****** -->
<script lang="ts">
	import { session } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import type { FirebaseStore, Venue } from '$types';
	import { signInWithEmailAndPassword, updatePassword } from '@firebase/auth';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const store = getContext<Writable<FirebaseStore>>('store');

	export let err: string;
	export let venues: Venue[] = [];
	//console.log(venues.length);

	$: managedVenues = venues.filter((v) => v.owner === $session.user.id);
	$: joinedVenues = venues.filter((v) => v.owner !== $session.user.id);
	//$: console.log(joinedVenues.length);

	let name: string = $session.user.name;
	let usernameInput: HTMLInputElement;

	let currentPassword: string;
	let newPassword: string;
	let confirmNewPassword: string;
	let passwordResult = false;

	async function changePassword() {
		try {
			if (!newPassword || !confirmNewPassword || newPassword !== confirmNewPassword) {
				err = "Passwords don't match";
				return;
			}
			const creds = await signInWithEmailAndPassword(
				$store.auth,
				$session.user.email,
				currentPassword
			);
			await updatePassword(creds.user, newPassword);
			passwordResult = true;
		} catch (error) {
			err = error;
		}
	}
</script>

<!-- ****** Markup ****** -->
<section>
	<h1>Profile</h1>
	<div class="formRow" id="nameInput">
		<label for="username">Username</label>
		<input type="text" id="username" bind:value={name} bind:this={usernameInput} disabled />
	</div>
	<div class="formRow" id="emailDisplay">
		<label for="userEmail">Email</label>
		<span>{$session.user.email}</span>
	</div>
	<hr />
	<div id="changePasswordSection">
		<h3>Change Password</h3>
		{#if err}
			<ErrorAlert message={err} />
		{/if}
		<div class="formRow">
			<label for="currentPasswordInput">Current Password</label>
			<input id="currentPasswordInput" type="text" bind:value={currentPassword} />
		</div>
		<div class="formRow">
			<label for="newPasswordInput">New Password</label>
			<input id="newPasswordInput" type="text" bind:value={newPassword} />
		</div>
		<div class="formRow">
			<label for="confirmNewPasswordInput">Confirm Password</label>
			<input id="confirmNewPasswordInput" type="text" bind:value={confirmNewPassword} />
		</div>
		<div>
			<Button on:click={changePassword}>Change</Button>
		</div>
		{#if passwordResult}
			<p>Password reset successfully.</p>
		{/if}
	</div>
	<hr />
</section>
<section>
	<h2>My Venues</h2>
	{#if managedVenues}
		<h3>Manager</h3>
		<ul>
			{#each managedVenues as venue}
				<li><a href={`/venues/enter?venueId=${venue.id}`}>{venue.name}</a></li>
			{/each}
		</ul>
	{/if}
	{#if joinedVenues}
		<h3>Member</h3>
		<ul>
			{#each joinedVenues as venue}
				<li>{venue.name} - <a href={`/venues/unsubscribe?venueId=${venue.id}`}>Unsubscribe</a></li>
			{/each}
		</ul>
	{/if}
</section>

<!-- ****** Styling ****** -->
<style>
	section, #changePasswordSection, .formRow {
		width: 100%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
	.formRow {
		gap: 5px;
	}
	input {
		width: 100%;
		max-width: 250px;
	}
	h1, h2, h3 {
		margin-bottom: 5px;
	}
	ul {
		margin: 0px;
		list-style-type: none;
		text-align: left;
		padding-left: 0px;
	}
	li {
		margin-bottom: 10px;
	}
	hr {
		color: var(--wine-pottle-black);
		width: 100%;
		margin: 20px 0px;
	}
	@media screen and (min-width: 768px) {
		.formRow {
			flex-direction: row;
			align-items: center;
		}
		label {
			width: 150px;
			text-align: start;
		}
	}
</style>
