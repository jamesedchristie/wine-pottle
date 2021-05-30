<!-- ****** Loading Logic ****** -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ page }) => {
		const venueId = page.query.get('venueId');
		return {
			props: {
				venueId
			}
		};
	};
</script>

<!-- ****** Client-side Logic ****** -->
<script lang="ts">
	import { session } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import { goto } from '$app/navigation';

	export let venueId: string;
	export let err: string;

	export async function quit() {
		try {
			const response = await fetch('quit', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					venueId: venueId,
					userId: $session.user.id
				})
			});
			if (!response.ok) {
				const data = await response.json();
				throw data.errors;
			}
			await goto('/');
		} catch (error) {
			console.log(error);
			err = error;
		}
	}
</script>

<!-- ****** Markup ****** -->
<section>
	<ErrorAlert message={err} />
	<p>Are you sure you want to unsubscribe from this venue?</p>
	<Button isLink={true} href={`/users/${$session.user.id}/profile`}>Back</Button>
	<Button on:click={quit}>Unsubscribe</Button>
</section>

<!-- ****** Styling ****** -->
<style>
</style>
