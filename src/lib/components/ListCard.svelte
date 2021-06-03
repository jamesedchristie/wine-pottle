<!-- ****** Client-side Logic ****** -->
<script lang="ts">
    import type { WineList } from "$types";

    export let list: WineList;    
</script>

<!-- ****** Markup ****** -->
<a href={list.href} target="_blank">
    <article>
        <div class="listMeta">
            <strong>{list.poster}</strong>
            <i>{list.datetime.toLocaleDateString()}</i>
        </div>
        <div class="listContent">
            <h4>{list.listVenueName}</h4>
            <p>{list.note}</p>
        </div>
    </article>
</a>

<!-- ****** Styling ****** -->
<style>
    a {
        width: 100%;
        max-width: 800px;
    }
    article {
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
    .listMeta {
        flex: auto;
        display: flex;
        flex-direction: column;
        padding: 5px;
        gap: 5px;
        justify-content: center;
        align-items: center;
        background-color: var(--wine-pottle-black);
        color: white;
    }
    .listContent {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: start;
        padding: 10px;
    }
    h4 {
        font-size: 20px;
        margin: 0px 0px 5px 0px;
    }
    p {
        margin: 0px 0px;
    }

    @media screen and (min-width: 768px) {
        article {
            flex-direction: row;
        }
        .listMeta {
            flex: none;
            width: 25%;
        }
    }
</style>