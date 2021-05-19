<!-- ****** Logic ****** -->
<script lang="ts">
	import { goto } from '$app/navigation';

	import { session } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';

	let name: string = '';
	let password: string = '';
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
			const createResponse = await fetch('/venues/create', {
				method: 'post',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					password: password,
					userId: $session.user.id
				})
			});
			if (!createResponse.ok) {
				const errorData = await createResponse.json();
				throw errorData.errors;
			}
			const createData: { id: string, route: string } = await createResponse.json();
			goto(`/venues/enter?venueId=${createData.id}&route=${createData.route}`);			
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
	<form>
		<div>
			<label for="venueName">Venue Name</label>
			<input id="venueName" type="text" bind:value={name} />
		</div>
		<div>
			<label for="venuePassword">Venue Password</label>
			<input id="venuePassword" type="text" bind:value={password} />
		</div>
		<div>
			<Button variant="primary" on:click={createVenue}>Create</Button>
		</div>
	</form>
</section>

<!-- ****** Styling ****** -->
<style>
</style>
