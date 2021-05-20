<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = ({ session }) => {
        if (!session.user) {
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

<!-- ****** Logic ****** -->
<script lang="ts">
    import { session } from '$app/stores';
</script>

<!-- ****** Styling ****** -->
<style>
    #venueHeader {
        height: 100px;
        margin-bottom: 30px;
    }
    #venueNav {
        flex: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    #venueNav a {
        display: block;
        margin: auto 20px;
        font-size: 28px;
    }
</style>

<!-- ****** Markup ****** -->
<section id="venueHeader">
    {#if $session.venue}
        <h1><a href={`/venues/${$session.venue.route}`}>{$session.venue.name}</a></h1>

        <nav id='venueNav'>
            <a sveltekit:prefetch href={`/venues/${$session.venue.route}/posts`} >Posts</a>
            <a sveltekit:prefetch href={`/venues/${$session.venue.route}/gallery`}>Gallery</a>
            <a sveltekit:prefetch href={`/venues/${$session.venue.route}/articles`}>Articles</a>
            <a sveltekit:prefetch href={`/venues/${$session.venue.route}/lists`}>Lists</a>
            <a sveltekit:prefetch href={`/venues/${$session.venue.route}/reading`}>Reading</a>
        </nav>
    {/if}
</section>

<slot></slot>