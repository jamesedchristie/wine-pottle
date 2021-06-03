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
            <hr />
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
        width: 100%;
        max-height: 500px;
        display: flex;
        flex-direction: column;
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
        flex: initial;        
        background-color: var(--wine-pottle-black);
        color: white;
    }
    img {
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }
    hr {
        color: var(--wine-pottle-black);
        width: 100%;
    }
    .articleInfo {
        width: 100%;
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        text-align: start;
        padding: 10px;
    }
    h4 {
        font-size: 20px;
        margin: 0px 0px;
    }
    p {
        margin: 0px 0px;
    }

    @media screen and (min-width: 768px) {
        article {
            flex-direction: row;
            height: 200px;
        }
        .articleImage {
            flex: none;
            width: 25%;
        }
        img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    }
</style>