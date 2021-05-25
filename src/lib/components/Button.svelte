<!-- ****** Logic ****** -->
<script lang="ts">
    export let isLink = false;
    export let href = '#';
    export let id = null;
    export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
    export let type: 'button' | 'submit' | 'menu' | 'reset' = 'button';
</script>

<!-- ****** Styling ****** -->
<style>
    button, a {
        cursor: pointer;
		color: white;
		padding: 7px 12px;
        font-size: 15px;
        border: none;
		border-radius: 15px;
		box-shadow: 2px 2px 5px grey;
		transition: box-shadow 0.25s, color 0.25s 0s;
    }
    button:hover, a:hover {
        color:cornflowerblue;
        box-shadow: 1px 1px 5px grey;
    }
    .primary {
        background-color: var(--wine-pottle-black);
    }
    .secondary {
        background-color: var(--wine-pottle-secondary);
    }
    .danger, .danger:hover {
        background-color: var(--wine-pottle-accent);
        box-shadow: none;
    }
</style>

<!-- ****** Markup ****** -->
{#if isLink}
    <a id={id} class={variant} href={href}>
        <slot />
    </a>
{:else}
    <button id={id} class={variant} {type} on:click>
        <slot />
    </button>
{/if}