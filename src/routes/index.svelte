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
					<a href={`venues/enter?venueId=${venue.id}&route=${venue.route}`}>
						<div class="venueCard">
							<div class="venueImage">								
								<img 
								src={venue.venueImageId 
								? `https://res.cloudinary.com/dkj7bctqg/image/upload/v1621853195/${venue.venueImageId}`
								: 'https://res.cloudinary.com/dkj7bctqg/image/upload/c_crop,h_300,w_300,x_256,y_284/v1621857774/WinePottle/wine-bar-default.jpg'}
								alt={venue.name} 
								style="border-top-left-radius: 5px; border-top-right-radius: 5px;"
								height="300px"
								width="300px"
								/>								
							</div>							
							<div class="venueInfo">
								<h4>{venue.name}</h4>
								<p>{venue.description || ""}</p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}		
		{#if otherVenues.length > 0}
			<h2>All Venues</h2>
			<div id="allVenues">
				{#each otherVenues as venue}
					<div class="venueCard">
						<div class="venueImage">								
							<img 
							src={venue.venueImageId 
							? `https://res.cloudinary.com/dkj7bctqg/image/upload/v1621853195/${venue.venueImageId}`
							: 'https://res.cloudinary.com/dkj7bctqg/image/upload/c_crop,h_300,w_300,x_256,y_284/v1621857774/WinePottle/wine-bar-default.jpg'}
							alt={venue.name} 
							style="border-radius: 5px;"
							height="300px"
							width="300px"
							/>								
						</div>							
						<div class="venueInfo">
							<h4>{venue.name}</h4>
							<p>{venue.description || ""}</p>
							<a href={`/venues/join?venue=${venue.id}`}>Join</a>
						</div>
					</div>					
				{/each}
			</div>
		{/if}
	{/if}
</section>

<style>
	.topRow {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
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
	#userVenues {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px
	}
	.venueCard {
		width: 300px;
		border: 1px solid black;
		border-radius: 10px;
		box-shadow: 2px 2px 10px grey;
		transition: box-shadow 0.25s ease 0s;
	}
	.venueCard:hover {
		box-shadow: 1px 1px 5px grey;
	}
	.venueInfo {
		padding: 10px
	}
</style>
