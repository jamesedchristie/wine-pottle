<script lang="ts">
    import { goto } from '$app/navigation';
    import { session } from '$app/stores';
    import Button from '$lib/components/Button.svelte';
    import { post } from '$lib/utils';

    async function logout() {
        console.log("Logout function called");
        await post('auth/logout', null);
        $session.user = null;
        goto('/');
    }
</script>

<style>
    :global(#svelte) {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    }
    header {
        display: flex;
        flex-direction: column;
        height: 200px;       
    }
    nav {
        flex: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    nav a {
        display: block;
        margin: auto 20px;
        text-decoration: none;
        color: inherit;
        font-size: 28px;
    }
    #logoutContainer {
        text-align: right;
        margin: 10px 20px;
    }
    main {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>

<header>
    {#if $session.user}
        <div id='logoutContainer'>
            <Button variant='primary' on:click={logout}>Logout</Button>
        </div>
    {/if}
    <nav>
        <a href=".">Home</a>
        <a href="articles">Articles</a>
        <a href="posts">Posts</a>
        <a href="gallery">Gallery</a>
        <a href="reading">Reading</a>
    </nav>
</header>

<main>
    <slot></slot>
</main>

<footer>
    <p>&copy; Jasmin Natterer 2021</p>
</footer>