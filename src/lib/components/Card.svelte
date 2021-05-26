<script lang="ts">
    export let title: string = "";
</script>

<style>
    .cardContainer {
        border: 1px solid black;
        border-radius: 10px;
        overflow: hidden;
        min-width: 50%;
        max-width: 100%;
        padding-bottom: 10px;
        box-shadow: 2px 2px 10px grey;
    }
    .cardTitle {
        font-size: x-large;
        color: white;
        background-color: var(--wine-pottle-black);
        padding: 10px 0px;
        margin-bottom: 10px;
    }
</style>

<div class="cardContainer">
    <div class="cardTitle">{title}</div>
    <div class="cardContent">
        <slot></slot>
    </div>
</div>