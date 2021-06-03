<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session, fetch }) => {
		//console.log('Called load function on index');
		if (!session.user) {
			//console.log('No user, sending back to login');
			return { redirect: 'login', status: 302 };
		}
        //console.log(session.user);
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
	import Button from '$lib/components/Button.svelte';
	import VenueCard from '$lib/components/VenueCard.svelte';
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

<div class="topRow">
	<div id="titleOffset">&nbsp;</div>
	<div id="pageTitle">
		<h1>Wine Pottle</h1>
	</div>
	<div id="newVenueButtonContainer">
		<Button isLink id="newVenueButton" href="/venues/create">Create A Venue Channel</Button>
	</div>
</div>

{#if err}
	<ErrorAlert message={err} />
{/if}

<section>
	{#if $session.user}
		{#if userVenues.length > 0}
			<h2>Your Venues</h2>
			<div id="userVenues">
				{#each userVenues as venue}
					<VenueCard venue={venue} linkMode='enter' />
				{/each}
			</div>
		{/if}		
		{#if otherVenues.length > 0}
			<h2>All Venues</h2>
			<div id="allVenues">
				{#each otherVenues as venue}
					<VenueCard venue={venue} linkMode='join' />				
				{/each}
			</div>
		{/if}
	{/if}
</section>

<style>
	.topRow {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		margin-bottom: 20px;
	}
	#titleOffset {
		flex: 25%;
	}
	#pageTitle {
		flex: 50%;
		text-align: center;
	}
	#newVenueButtonContainer {
		flex: 25%;
		text-align: center;	
	}	
	#userVenues, #allVenues {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px
	}

	@media screen and (min-width: 768px) {
		.topRow {
			flex-direction: row;
		}
	}
</style>
