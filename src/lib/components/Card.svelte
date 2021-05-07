<script lang="ts">
    export let title:string = "Title";
</script>

<style>
    .cardContainer {
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px;
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

    @media screen and (min-width: 900px) {
        .cardContainer {
            margin: 5px 150px;
        }
    }
</style>

<div class="cardContainer">
    <div class="cardTitle">{title}</div>
    <div class="cardContent">
        <slot></slot>
    </div>
</div>