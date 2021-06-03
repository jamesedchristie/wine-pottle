<!-- ****** Loading Logic ****** -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Article, GetLinkPreviewResponse } from '$types';

	export const load: Load = async ({ fetch, session }) => {
		try {
			//console.log(session.venue);
			const articlesResponse = await fetch('/articles.json?venueId=' + session.venue.id);
			if (!articlesResponse.ok) {
                const errorData = await articlesResponse.json();
                throw errorData.errors;
            }
			const articles: Article[] = await articlesResponse.json();
			articles.forEach(a => a.datetime = new Date(a.datetime));
			//console.log("Loaded articles: " + articles.length);
			return {
				props: {
					articles: articles
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
    import { sortNewest } from '$lib/utils';
	import Button from '$lib/components/Button.svelte';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import { session } from '$app/stores';
	import type { Writable } from 'svelte/store';
	import type { FirebaseStore } from '$types';
	import { getContext } from 'svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';


	export let err: string;

    const store = getContext<Writable<FirebaseStore>>('store');
	//console.log("Just after getContext " + Object.keys($store));
	export let articles: Article[] = [];
	//console.log(articles);

	let newArticleUrl: string = '';

	async function newArticle() {
		try {
			const newArticle: Article = {
				userId: $session.user.id,
				venueId: $session.venue.id,
				href: newArticleUrl,
				datetime: new Date()
			};
			const previewResponse = await fetch('/articles/preview', { 
				method: 'post',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json ' },
				body: JSON.stringify({ url: newArticleUrl }) 
			});
			if (!previewResponse.ok) {
				const errorData = await previewResponse.json();
				throw errorData.errors;
			}
			let preview = await previewResponse.json() as GetLinkPreviewResponse;
			newArticle.title = preview.title;
			newArticle.description = preview.description.length > 100 ? preview.description.substr(0, 100) + '...' : preview.description;
			newArticle.image = preview.images.length > 0 ? preview.images[0] : '';			
			articles = [...articles, newArticle];
			fetch('/articles.json', {
				method: 'post',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json ' },
				body: JSON.stringify(newArticle)
			}).then((response) => response.json())
			.then(data => {
				if (data.errors) throw data.errors;
				console.log(data);
				newArticleUrl = '';
			});
		} catch (error) {
			err = error;
		}
	}
</script>

<!-- ****** Markup ****** -->
<h1>Articles</h1>

{#if err}
    <ErrorAlert message={err} />
{/if}

<section id="newArticle">
	<form id="newArticleForm" on:submit|preventDefault={newArticle}>
		<div id="titleSection">
			<label for="articleUrl">URL</label>
			<input
				id="articleUrl"
				bind:value={newArticleUrl}
				type="text"
				placeholder="Paste the address of the article..."
			/>
		</div>
		<div id="postButton">
			<Button variant="primary" type="submit">Post</Button>
		</div>
	</form>
</section>

<section id="feed">
	{#each sortNewest(articles) as article}
		<ArticleCard {article} />
	{:else}
		<p>Start this section off by posting a link to an interesting article!</p>
	{/each}
</section>

<!-- ****** Styling ****** -->
<style>
	#newArticle {
		max-width: 500px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		margin-bottom: 20px;
	}
	form {
		width: 100%;
	}
	#titleSection {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		gap: 10px;
	}
	label {
		max-width: fit-content;
		text-align: right;
	}
	input {
		width: 100%;
		text-align: left;
	}
	#postButton {
		text-align: right;
	}
	#feed {
		width: 100%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
</style>
