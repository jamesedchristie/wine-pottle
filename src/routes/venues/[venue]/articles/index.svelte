<!-- ****** Loading Logic ****** -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Article, ArticlePreview } from '$types';
	import { browser } from '$app/env';
	import { collection, getDocs, query, where } from '@firebase/firestore';
	import type { QuerySnapshot, DocumentData } from '@firebase/firestore';


	export const load: Load = async ({ fetch, session }) => {
		try {
			console.log(session.venue);
			const articlesResponse = await fetch('/articles.json?venueId=' + session.venue.id);
			console.log('')
			if (!articlesResponse.ok) {
                const errorData = await articlesResponse.json();
                throw errorData.errors;
            }
			const articles = await articlesResponse.json();
			console.log("Loaded articles: " + articles.length);
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
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { FirebaseStore } from '$types';
	import { getContext } from 'svelte';


	export let err: string;

    const store = getContext<Writable<FirebaseStore>>('store');
	console.log("Just after getContext " + Object.keys($store));
	export let articles: Article[] = [];
	console.log(articles.length);
	// console.log(articles);
	// onMount(async () => {
	// 	console.log("In onMount " + Object.keys($store));
	// 	console.log(articles);
	// 	if (articles.length === 0) {
	// 		console.log(Object.keys($store));
	// 		// const store = getContext<Writable<FirebaseStore>>('store');
	// 		// snapshot = await query collection('articles').where('venueId', '==', session.venue.id).get();
	// 		const snapshot = await getDocs<Article>(query(collection($store.firestore, 'articles'), where('venueId', '==', $session.venue.id)));
	// 		console.log(snapshot.docs.length);
	// 		for (let doc of snapshot.docs) {
	// 			let article = doc.data() as Article;
	// 			article.datetime = new Date(article.datetime);
	// 			const previewResponse = await fetch('articles/preview', { 
	// 				method: 'post',
	// 				credentials: 'include',
	// 				headers: { 'Content-Type': 'application/json ' },
	// 				body: JSON.stringify({ url: article.href }) 
	// 			});
	// 			if (!previewResponse.ok) {
	// 				const errorData = await previewResponse.json();
	// 				throw errorData.errors;
	// 			}				
	// 			article.preview = await previewResponse.json() as ArticlePreview;
	// 			articles = [...articles, article];
	// 		}			
	// 	}
	// })

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
			newArticle.preview = await previewResponse.json() as ArticlePreview;
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
			});
		} catch (error) {
			err = error;
		}
	}
</script>

<!-- ****** Markup ****** -->
<h1>Articles</h1>

{#if err}
    <ErrorAlert>{err}</ErrorAlert>
{/if}

<section id="newArticle">
	<form id="newPostForm" on:submit|preventDefault={newArticle}>
		<div id="titleSection">
			<label for="articleUrl">URL</label>
			<input
				id="articleUrl"
				bind:value={newArticleUrl}
				type="text"
				placeholder="Paste the address of the article..."
			/>
		</div>
		<div id="newPostButtons">
			<Button variant="primary" type="submit">Post</Button>
		</div>
	</form>
</section>

<section id="feed">
	{#each sortNewest(articles) as article}
		<article>
			<div class="articleImage">
				<img
					src={article.preview?.images?.length > 0 ? article.preview.images[0] : ''}
					alt={article.preview.title}
					width="100"
				/>
			</div>
			<div class="articleInfo">
				<h4>{article.preview.title}</h4>
				<p>{article.preview.description}</p>
				<a href={article.href} target="_blank">Visit</a>
			</div>
		</article>
	{/each}
</section>

<!-- ****** Styling ****** -->
<style>
	#newArticle {
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
		display: flex;
		flex-direction: row;
	}
	.articleImage {
		width: 100px;
		height: 100px;
	}
</style>
