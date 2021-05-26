<!-- ****** Client-side Logic ****** -->
<script lang="ts">
    import type { Post } from "$types";

    export let post: Post;
</script>

<!-- ****** Markup ****** -->
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

<!-- ****** Styling ****** -->
<style>
    article {
        display: flex;
        flex-direction: row;
        border: 1px solid var(--wine-pottle-black);
        border-radius: 10px;
        box-shadow: 1px 1px 5px grey;
        overflow: hidden;
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