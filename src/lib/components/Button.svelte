<!-- ****** Logic ****** -->
<script lang="ts">
    export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
    export let type: 'button' | 'submit' | 'menu' | 'reset' = 'button';
</script>

<!-- ****** Styling ****** -->
<style>
    button {
        padding: 5px 10px;
        background-color: darkgray;
        border: none;
        color: white;
        border-radius: 2px;
        cursor: pointer;
        font-size: 18px;
    }
    .primary {
        background-color: cornflowerblue;
    }
    .secondary {
        background-color: darkcyan;
    }
    .danger {
        background-color: tomato;
    }
</style>

<!-- ****** Markup ****** -->
<button class={variant} {type} on:click>
    <slot></slot>
</button>