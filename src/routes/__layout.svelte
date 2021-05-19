<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = ({ session, page }) => {
        if (!session.user && !page.path.includes('login')) {
            return {
				status: 302,
				redirect: '/login'
			};
        }
        return {
            props: {

            }
        }
    };
</script>

<script lang="ts">
    import { goto } from '$app/navigation';
    import { session } from '$app/stores';
import Auth from '$lib/components/Auth.svelte';
    import Button from '$lib/components/Button.svelte';
    import { loading } from '$lib/stores';

    async function logout() {
        //console.log("Logout function called at " + new Date().toISOString());
        await fetch('/auth/logout', {
            method: 'post'
        });
        goto('/logout');
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
    :global(a) {
        text-decoration: none;
        color: inherit;
    }
    :global(input, textarea) {
        padding: 4px 5px;
        font-family: inherit;
        border: 1px solid black;
        border-radius: 3px;
        box-shadow: none;
        font-size: inherit;
        margin-bottom: 5px;
    }
    :global(textarea) {
        width: 100%;
        box-sizing: border-box;
    }
    header {
        display: flex;
        flex-direction: column;
        height: 50px;
        border-bottom: 1px solid black;     
        color: white;
        background-color:mediumslateblue;  
        font-weight: bold;
    }
    #topNav {
        flex: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
    }
    main {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px 350px;
    }
    footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>

<header>
    <nav id="topNav">
        <a id='winePottleLogo' href="/">Wine Pottle</a>
        <div>
            {#if $loading}
                <p>Loading...</p>
            {/if}
        </div>
        <div id='topNavRight'>
            {#if $session.user}
                <a href={`/profile/${$session.user.name}`} style="margin: 0px 20px">{$session.user.name}</a>
                <Button variant='primary' on:click={logout}>Logout</Button>
            {:else}
                <a href='/login'>Login</a>
            {/if}
        </div>
    </nav>
</header>

<main>
    <slot></slot>
</main>

<footer>
    <p>&copy; Jasmin Natterer 2021</p>
</footer>