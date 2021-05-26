<!-- ****** Client-side Logic ****** -->
<script lang="ts">
    import type { Article } from "$types";

    export let article: Article;
</script>

<!-- ****** Markup ****** -->
<a href={article.href} target="_blank">
    <article>
        <div class="articleImage">
            <img
                src={article.image}
                alt={article.title}
            />
        </div>
        <div class="articleInfo">
            <h4>{article.title}</h4>
            <i>{article.datetime.toLocaleDateString()}</i>
            <div style="width: 100%;">
                <hr />
            </div>
            <p>
                {article.description}
            </p>
        </div>
    </article>
</a>

<!-- ****** Styling ****** -->
<style>
    a {
        width: 100%;
    }
    article {
        display: flex;
        height: 200px;
        flex-direction: row;
        border: 1px solid var(--wine-pottle-black);
        background-color: inherit;
        border-radius: 10px;
        box-shadow: 2px 2px 10px grey;
		transition: box-shadow 0.25s, background-color 0.25s ease 0s;
        overflow: hidden;
    }
    article:hover {
		box-shadow: 1px 1px 5px grey;
        background-color: lightgray;
	}
    .articleImage {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--wine-pottle-black);
        color: white;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .articleInfo {
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        text-align: start;
        padding: 0px 10px;
    }
    h4 {
        font-size: 20px;
        margin: 0px 0px;
    }
    p {
        margin: 0px 0px;
    }
</style>