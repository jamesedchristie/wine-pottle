<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session }) => {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/login'
			};
		}
		return {
			props: {}
		};
	};
</script>

<!-- ****** Logic ****** -->
<script lang="ts">
	import { session } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import { slide } from 'svelte/transition';
	import { browser } from '$app/env';

	let menuHidden = true;
	$: menuText = menuHidden ? 'Menu' : 'Hide';
</script>

<!-- ****** Markup ****** -->
{#if $session.venue}
	<section
		id="venueHeader"
		style="background-image: url({$session.venue.venueImageId
			? `"https://res.cloudinary.com/dkj7bctqg/image/upload/o_20/v1621853195/${$session.venue.venueImageId}"`
			: 'https://res.cloudinary.com/dkj7bctqg/image/upload/o_20,c_crop,h_300,w_300,x_256,y_284/v1621857774/WinePottle/wine-bar-default.jpg'});"
	>
		<h1><a href={`/venues/${$session.venue.route}`}>{$session.venue.name}</a></h1>
		<div id="menuButtonContainer">
			<Button on:click={() => (menuHidden = !menuHidden)}>{menuText}</Button>
		</div>
		{#if !menuHidden}
			<nav id="venueNavSmall" transition:slide="{{ duration: 1000 }}">
				<a sveltekit:prefetch href={`/venues/${$session.venue.route}/posts`}>Posts</a>
				<a sveltekit:prefetch href={`/venues/${$session.venue.route}/gallery`}>Gallery</a>
				<a sveltekit:prefetch href={`/venues/${$session.venue.route}/articles`}>Articles</a>
				<a sveltekit:prefetch href={`/venues/${$session.venue.route}/lists`}>Lists</a>
				<a sveltekit:prefetch href={`/venues/${$session.venue.route}/reading`}>Reading</a>
				{#if $session.venue.owner === $session.user.id}
					<a sveltekit:prefetch href={`/venues/${$session.venue.route}/manage`}>Manage</a>
				{/if}
			</nav>
		{/if}
		<nav id="venueNavLarge">
			<a sveltekit:prefetch href={`/venues/${$session.venue.route}/posts`}>Posts</a>
			<a sveltekit:prefetch href={`/venues/${$session.venue.route}/gallery`}>Gallery</a>
			<a sveltekit:prefetch href={`/venues/${$session.venue.route}/articles`}>Articles</a>
			<a sveltekit:prefetch href={`/venues/${$session.venue.route}/lists`}>Lists</a>
			<a sveltekit:prefetch href={`/venues/${$session.venue.route}/reading`}>Reading</a>
			{#if $session.venue.owner === $session.user.id}
				<a sveltekit:prefetch href={`/venues/${$session.venue.route}/manage`}>Manage</a>
			{/if}
		</nav>
    </section>
{/if}
<section id="venuePage">
	<slot />
</section>

<!-- ****** Styling ****** -->
<style>
	#venueHeader {
		width: 100vw;
		padding-bottom: 20px;
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
	}
	#venueNavSmall {
		margin-top: 10px;
		flex: auto;
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
	}
	#venueNavLarge {
		display: none;
		flex: auto;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
	}
	nav a {
		display: block;
		margin: auto 5px;
		font-size: 1.3rem;
	}
	#venuePage {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
	}

	@media screen and (min-width: 768px) {
		#venueNavSmall {
			display: none;						
		}
		#venueNavLarge {
			display: flex;
		}
		#menuButtonContainer {
			display: none;
		}
	}
</style>
