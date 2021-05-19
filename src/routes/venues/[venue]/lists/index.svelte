<!-- ****** Loading Logic ****** -->
<script context="module" lang="ts">
	import { winelistCollection } from '$services/firebase';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
        try {
			const wineLists = [];
			const snapshot = await winelistCollection.where('venueId', '==', session.venue.id).get();
			if (!snapshot.empty) {
				for (let doc of snapshot.docs) {
					wineLists.push(await doc.data());
				}
			}
			//console.log(wineLists);
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
				venueId: $session.venue.id,
				listVenueName: venueName,
				href: newListUrl,
				note: note,
				datetime: new Date()
			};
			wineLists = [...wineLists, newWineList];
			fetch('lists.json', {
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

<section id="newList">
    <form id="newListForm" on:submit|preventDefault={addList}>
        <div>
            <label for="venueName">Venue</label>
            <input id="venueName" bind:value={venueName} type="text" />
        </div>
        <div>
            <label for="newListUrl">Link</label>
            <input id="newListUrl" bind:value={newListUrl} type="text" />
        </div>
        <div>
            <label for="note">Note</label>
            <textarea id="note" bind:value={note} rows="5" cols="45" ></textarea>
        </div>
        <div>
            <Button variant="primary" type="submit">Post</Button>
        </div>
    </form>
</section>

<section id="feed">
	{#each sortNewest(wineLists) as list}
		<article>
			<h4>{list.listVenueName}</h4>
            <a href={list.href} target="_blank">Open</a>
            <p>{list.note}</p>
		</article>
	{/each}
</section>

<!-- ****** Styling ****** -->
<style>
    #newList {
		display: flex;
		flex-direction: column;
		text-align: left;
		gap: 10px;
		margin-bottom: 20px;
	}
	#feed {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
    article {
        border: 1px solid black;
        border-radius: 5px;
    }
</style>
