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
	<div id="nameInput">
		<label for="username">Username</label>
		<input type="text" id="username" bind:value={name} bind:this={usernameInput} disabled />
	</div>
	<div id="emailDisplay">
		<label for="userEmail">Email</label>
		<span>{$session.user.email}</span>
	</div>
	<div id="changePasswordSection">
		{#if err}
			<ErrorAlert message={err} />
		{/if}
		<div>
			<label for="currentPasswordInput">Current Password</label>
			<input id="currentPasswordInput" type="text" bind:value={currentPassword} />
		</div>
		<div>
			<label for="newPasswordInput">New Password</label>
			<input id="newPasswordInput" type="text" bind:value={newPassword} />
		</div>
		<div>
			<label for="confirmNewPasswordInput">Confirm Password</label>
			<input id="confirmNewPasswordInput" type="text" bind:value={confirmNewPassword} />
		</div>
		<div>
			<Button on:click={changePassword}>Reset</Button>
		</div>
		{#if passwordResult}
			<p>Password reset successfully.</p>
		{/if}
	</div>
	<h2>My Venues</h2>
	{#if venues.some((v) => v.owner === $session.user.id)}
		<h3>Manager</h3>
		<ul>
			{#each venues.filter((v) => v.owner === $session.user.id) as venue}
				<li><a href={`/venues/enter?venueId=${venue.id}`}>{venue.name}</a></li>
			{/each}
		</ul>
	{/if}
	{#if venues.some((v) => v.owner !== $session.user.id)}
		<h3>Member</h3>
		<ul>
			{#each venues.filter((v) => v.owner !== $session.user.id) as venue}
				<li>{venue.name} - <a href={`/venues/unsubscribe?venueId=${venue.id}`}>Unsubscribe</a></li>
			{/each}
		</ul>
	{/if}
</section>

<!-- ****** Styling ****** -->
<style>
</style>
