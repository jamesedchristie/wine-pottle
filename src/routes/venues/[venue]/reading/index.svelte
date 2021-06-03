<!-- ****** Loading Logic ****** -->
<script context="module" lang="ts">
	import type { Source } from '$types';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session, fetch }) => {
		try {
			const sourcesResponse = await fetch('/reading.json?venueId=' + session.venue.id);
			if (!sourcesResponse.ok) {
				const errorData = await sourcesResponse.json();
				throw errorData.errors;
			}
			const sources: Source[] = await sourcesResponse.json();
			sources?.forEach((s) => (s.datetime = new Date(s.datetime)));
            //console.log(sources);
			return {
				props: {
					sources: sources
				}
			};
		} catch (err) {
			return {
				props: {
					err: err
				}
			};
		}
	};
</script>

<!-- ****** Client-side Logic ****** -->
<script lang="ts">
    import ErrorAlert from '$lib/components/ErrorAlert.svelte';
    import Button from '$lib/components/Button.svelte';
    import { session } from '$app/stores';
    
    export let err: string;
    export let sources: Source[] = [];
    //console.log(sources);

    let sortProperty: string = 'author';
    let order: 1 | -1 = 1;
    $: compareFunction = (a: Source, b: Source) => {  		
        if (sortProperty === 'datetime') {
            return (a.datetime.valueOf() - b.datetime.valueOf()) * order;
        }
        if (a[sortProperty].toUpperCase() < b[sortProperty].toUpperCase()) {
            return -1 * order;
        }
        if (a[sortProperty].toUpperCase() > b[sortProperty].toUpperCase()) {
            return 1 * order;
        }
        return 0;
    }

    $: sources?.sort(compareFunction);

    let isbn: string = '', url: string = '', author: string = '', title: string = '', year: string = '', publisher: string = '', image: string = '', comment: string = '';

    function addSource() {
        try {
            const newSource: Source = {
                posterId: $session.user.id,
                poster: $session.user.name,
                venueId: $session.venue.id,
                isbn: isbn,
                url: url,
                author: author,
                title: title,
                year: year,
                publisher: publisher,
                comment: comment,
                image: image,
                datetime: new Date()
            };
            fetch('/reading.json', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newSource)
            }).then(response => response.json())
            .then(data => {
                if (data.errors) throw data.errors;
				console.log(data);
				isbn = '', url = '', author = '', title = '', year = '', publisher = '', image = '', comment = '';
            });
            sources = [...sources, newSource];
        } catch (error) {
			err = error
		}
    }
</script>

<!-- ****** Markup ****** -->
<h2>Reading</h2>

{#if err}
	<ErrorAlert message={err} />
{/if}

<form id="newSourceForm" on:submit|preventDefault={addSource}>
	<div class="formRow">
		<label for="authorName">Author</label>
		<input id="authorName" bind:value={author} type="text" />
	</div>
	<div class="formRow">
		<label for="title">Title</label>
		<input id="title" bind:value={title} type="text" />
	</div>
	<div class="formRow">
		<label for="year">Year</label>
		<input id="year" bind:value={year} type="text" />
	</div>
	<div class="formRow">
		<label for="publisher">Publisher</label>
		<input id="publisher" bind:value={publisher} type="text" />
	</div>
	<div class="formRow">
		<label for="comment">Comment</label>
		<textarea id="comment" bind:value={comment} rows="5" cols="45" />
	</div>
	<div class="buttonRow">
		<Button variant="secondary" type="reset">Clear</Button>
		<Button variant="primary" type="submit">Add</Button>
	</div>
</form>

<section>
	<ol class="sourceList">
		{#each sources as item}
			<li>{item.author}, <i>{item.title}</i>, {item.publisher} {item.year}</li>
		{:else}
			<p>
				No reading material has been posted yet. Get the ball rolling by suggesting a good book!
			</p>
		{/each}
	</ol>
</section>

<!-- ****** Styling ****** -->
<style>
	#newSourceForm {
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 20px;
	}
	.formRow {
		flex: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
	.buttonRow {
		flex: auto;
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
		gap: 10px;
	}	
	input,
	textarea {
		width: 100%;
		text-align: start;
		box-sizing: border-box;
	}
	.sourceList {
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex-wrap: wrap;
		max-width: 100%;
        align-items: flex-start;
		padding-left: 10px;
		list-style-type: none;
	}
	li {
		text-align: left;
		line-height: 20px;
	}

</style>
