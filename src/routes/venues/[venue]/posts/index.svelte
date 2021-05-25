<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    import type { Post } from "$types";

    export const load: Load = async ({ session, fetch }) => {
        try {
            const response = await fetch('/posts.json?venueId=' + session.venue.id);
            if (!response.ok) {
                const errorData = await response.json();
                throw errorData.errors;
            }
            const posts: Post[] = await response.json();
            posts.forEach(p => p.datetime = new Date(p.datetime));
            return {
                props: {
                    posts: posts
                }
            }
        } catch (err) {
            return {
                props: {
                    err: err
                }
            }
        }
    };
</script>

<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import Button from '$lib/components/Button.svelte';
    import ErrorAlert from '$lib/components/ErrorAlert.svelte';
    import { session } from "$app/stores";
    import { sortNewest } from "$lib/utils";

    export let err: string;

    export let posts: Post[] = [];

    let title: string = '';
    let content: string = '';

    function newPost(): void {
        try {
            const newPost: Post = {
                author: $session.user.name,
                title: title,
                content: content,
                datetime: new Date(),
                userId: $session.user.id,
                venueId: $session.venue.id
            };
            posts = [...posts, newPost];
            fetch('/posts.json', {
                method: 'post',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json '},
                body: JSON.stringify(newPost)
            }).then(response => response.json())
            .then(data => {
                if (data.errors) throw data.errors;
                title = '';
                content = '';
                newPost.id = data.postId;
            });
        } catch (error) {
            err = error;
        }
    }
</script>

<h2>Posts</h2>

{#if err}
    <ErrorAlert>{err}</ErrorAlert>
{/if}

<section id="compose">
    <form id="newPostForm" on:submit|preventDefault={newPost}>
        <div id="titleSection">
            <label for="newPostTitle">Title</label>
            <input id="newPostTitle" bind:value={title} type="text" placeholder="Give your post a title..." />
        </div>
        <div id="contentSection">
            <textarea id="newPostContent" rows="5" cols="45" placeholder="Write a new post..." bind:value={content}></textarea>
        </div>
        <div id="newPostButtons">
            <Button variant="secondary" type="reset">Clear</Button>
            <Button variant="primary" type="submit">Post</Button>
        </div>
    </form>
</section>

<section id="feed">
    {#each sortNewest(posts) as post}
        <article>
            <div class="postMeta">
                <strong>{post.author}</strong>
                <i>{post.datetime.toLocaleDateString()}</i>
            </div>
            <div class="postContent">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        </article>
    {/each}
</section>

<style>
    article {
        display: flex;
        flex-direction: row;
        border: 1px solid var(--wine-pottle-black);
        border-radius: 10px;
    }
    #compose {
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 10px;
        margin-bottom: 20px;
    }
    #titleSection {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    #newPostButtons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
    }
    #feed {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .postMeta {
        flex: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--wine-pottle-black);
        color: white;
    }
    .postContent {
        flex: 75%;
        justify-content: center;
        align-items: center;
        text-align: start;
        padding: 0px 10px;
    }
</style>