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
        width: 75%;
    }
    article {
        display: flex;
        height: 100px;
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
    .listMeta {
        flex: 25%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        background-color: var(--wine-pottle-black);
        color: white;
    }
    .listContent {
        flex: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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