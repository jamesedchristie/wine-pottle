<script lang="ts">
    export let title: string = "";
</script>

<style>
    .cardContainer {
        border: 1px solid black;
        border-radius: 5px;
    }
    .cardTitle {
        border-bottom: 1px solid red;
        font-size: x-large;
        color: white;
        background-color: black;
    }
    .cardContent {
        padding: 5px;
        font-style: italic;
    }
</style>

<div class="cardContainer">
    <div class="cardTitle">{title}</div>
    <div class="cardContent">
        <slot></slot>
    </div>
</div>