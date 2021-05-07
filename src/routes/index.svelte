<script lang="ts">
    import Auth from '$lib/components/Auth.svelte';
    import { session } from '$app/stores';
</script>

<h1>Wine Pottle</h1>

<section>
    {#if $session.user}
        <p>Welcome {$session.user.name}</p>
    {:else}
        <Auth />
    {/if}
</section>
