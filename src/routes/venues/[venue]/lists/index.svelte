<!-- ****** Loading Logic ****** -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { WineList } from '$types';

	export const load: Load = async ({ session, fetch }) => {
        try {
			const listResponse = await fetch('/lists.json?venueId=' + session.venue.id);
			if (!listResponse.ok) {
                const errorData = await listResponse.json();
                throw errorData.errors;
            }
			const wineLists: WineList[] = await listResponse.json();
			wineLists.forEach(l => l.datetime = new Date(l.datetime));
			return {
				props: {
					wineLists: wineLists
				}
			};
		} catch (err) {
			return {
				props: {
					err: err
				}
			}
		}
	};
</script>

<!-- ****** Client-side Logic ****** -->
<script lang="ts">
	import { session } from '$app/stores';
	import { sortNewest } from '$lib/utils';
    import Button from '$lib/components/Button.svelte';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
import ListCard from '$lib/components/ListCard.svelte';

	export let err: string;

	export let wineLists: WineList[] = [];
    //console.log(wineLists);

	let newListUrl: string;
	let venueName: string;
	let note: string;

	function addList() {
		try {
			const newWineList: WineList = {
				userId: $session.user.id,
				poster: $session.user.name,
				venueId: $session.venue.id,
				listVenueName: venueName,
				href: newListUrl,
				note: note,
				datetime: new Date()
			};
			wineLists = [...wineLists, newWineList];
			fetch('/lists.json', {
				method: 'post',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newWineList)
			}).then((response) => response.json())
			.then(data => {
				if (data.errors) throw data.errors;
				console.log(data);
			});
		} catch (error) {
			err = error
		}
	}
</script>

<!-- ****** Markup ****** -->
<h1>Wine Lists</h1>

{#if err}
    <ErrorAlert>{err}</ErrorAlert>
{/if}

<form id="newListForm" on:submit|preventDefault={addList}>
	<div class="formRow">
		<label for="venueName">Venue</label>
		<input id="venueName" bind:value={venueName} type="text" />
	</div>
	<div class="formRow">
		<label for="newListUrl">Link</label>
		<input id="newListUrl" bind:value={newListUrl} type="text" />
	</div>
	<div class="formRow">
		<label for="note">Note</label>
		<textarea id="note" bind:value={note} rows="5" cols="45" ></textarea>
	</div>
	<div class="buttonRow">
		<Button variant="primary" type="submit">Post</Button>
	</div>
</form>

<section id="feed">
	{#each sortNewest(wineLists) as list}
		<ListCard {list} />
	{/each}
</section>

<!-- ****** Styling ****** -->
<style>
    #newListForm {
		width: 75%;
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 20px;
	}
	.formRow {
		display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 10px;
	}
	.buttonRow {
		display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
	}
	label {
        width: 20%;
        text-align: end;
    }
    input, textarea {
        width: 60%;
        text-align: start;
		box-sizing: border-box;
    }
	#feed {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
</style>
