<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session, fetch }) => {
		console.log('Called load function on index');
		if (!session.user) {
			console.log('No user, sending back to login');
			return { redirect: 'login', status: 302 };
		}
        console.log(session.user);
		if (session.venue) {
			//console.log('Leaving ' + session.venue.name);
			await fetch('/venues/leave', { method: 'post' });
		}
		//console.log('Getting venues');
		try {
			const response = await fetch(`venues.json?userId=${session.user.id}`);
			const data = await response.json();
			return {
				props: {
					venues: data.venues,
					uvms: data.userVenueMemberships
				}
			};
		} catch (error) {
			console.log(error);
		}
	};
</script>

<script lang="ts">
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import { session } from '$app/stores';
	import type { UVM, Venue } from '$types';

	export let venues: Venue[];
	export let uvms: UVM[];

	let err;

	const userVenues =
		uvms.length > 0 ? venues?.filter((v) => uvms.some((uv) => uv?.venueId === v.id)) : [];
	const otherVenues =
		userVenues.length > 0 ? venues?.filter((v) => !userVenues.includes(v)) : venues;
</script>

<h1>Wine Pottle</h1>

{#if err}
	<ErrorAlert message={err} />
{/if}

<section>
	{#if $session.user}
		<p>Welcome {$session.user.name}</p>
		{#if userVenues.length > 0}
			<h2>Your Venues</h2>
			<div id="userVenues">
				{#each userVenues as venue}
					<p>
						<a href={`venues/enter?venueId=${venue.id}&route=${venue.route}`}>{venue.name}</a>
					</p>
				{/each}
			</div>
		{/if}
		<div id="newVenueButton">
			<a href="/venues/create">Create A Venue Channel</a>
		</div>
		{#if otherVenues.length > 0}
			<h2>All Venues</h2>
			<div id="allVenues">
				{#each otherVenues as venue}
					<p>
						<a href={`/venues/join?venue=${venue.id}`}>{venue.name}</a>
					</p>
				{/each}
			</div>
		{/if}
	{/if}
</section>

<style>
	#newVenueButton {
		margin: 25px 0px;
	}
</style>
