<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session, page }) => {
		if (!session.user && !page.path.includes('login')) {
			//console.log('Layout loading. No user. Redirecting to login');
			return {
				status: 302,
				redirect: '/login'
			};
		}		
		return {
			props: {}
		};
	};

	// onMount(() => {
	//     if (browser) {
	//         if (getApps().length === 0) {
	//             const firebaseApp = initializeApp(firebase_config);
	//             return {
	//                 context: { firebaseApp }
	//             }
	//         }
	//     }
	// })
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import { loading } from '$lib/stores';
	import { writable } from 'svelte/store';
	import { setContext, onMount } from 'svelte';
	import type { FirebaseStore } from '../global';
	import { initializeApp } from 'firebase/app';
	import config from '../firebase_config';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { getFirestore } from 'firebase/firestore';

	let store = writable<FirebaseStore>({
		firebase: null,
		auth: null,
		firestore: null
	});
	setContext('store', store);
	$: user = $session.user || null;
	onMount(async () => {
		(window as any).ssrUser = user;
		const firebase = (window as any).firebase || initializeApp(config);
		(window as any).firebase = firebase;
		const auth = getAuth(firebase);
		onAuthStateChanged(auth, async user => {
			if (!user) {
				await goto('/login');
			}
		});
		const firestore = getFirestore(firebase);		
        //console.log("Setting firebase store in layout");
		store.set({ firebase, auth, firestore });
	});

	async function logout() {
		//console.log("Logout function called at " + new Date().toISOString());
		await fetch('/auth/logout', {
			method: 'post'
		});
		await goto('/logout');
	}
</script>

<header>
	<nav id="topNav">
		<a id="winePottleLogo" href="/">Wine Pottle</a>
		<div>
			{#if $loading}
				<p>Loading...</p>
			{/if}
		</div>
		<div id="topNavRight">
			{#if $session.user}
				<a href={`/users/${$session.user.id}/profile`} style="margin: 0px 20px">{$session.user.name}</a>
				<Button variant="danger" on:click={logout}>Logout</Button>
			{:else}
				<a href="/login">Login</a>
			{/if}
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<p>This is the footer</p>
</footer>

<style>
	:root {
		--wine-pottle-black: rgb(40, 40, 40);
		--wine-pottle-secondary: rgb(40, 40, 117);
		--wine-pottle-accent: rgb(114, 33, 53);
	}
	:global(#svelte) {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: var(--wine-pottle-black);
		font-size: 15px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		margin: 0;
	}
	:global(body) {
		margin: 0
	}
	:global(a) {
		text-decoration: none;
		color: inherit;
	}
	:global(input, textarea) {
		padding: 4px 5px;
		font-family: inherit;
		border: 1px solid var(--wine-pottle-black);
		border-radius: 3px;
		box-shadow: none;
		font-size: inherit;
		margin-bottom: 5px;
	}
	:global(textarea) {
		width: 100%;
		box-sizing: border-box;
	}
	header {
		display: flex;
		flex-direction: column;
		height: 50px;
		border-bottom: 1px solid black;
		color: white;
		background-color: var(--wine-pottle-black);
		font-weight: bold;
		box-shadow: 1px 1px 5px var(--wine-pottle-black);
	}
	#topNav {
		flex: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px 20px;
	}
	main {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 0px 20px;
	}
	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	@media screen and (min-width: 800px) {
		main {
			padding: 0px 200px;
		}
	}
</style>
