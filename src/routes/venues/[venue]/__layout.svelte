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

<!-- ****** Markup ****** -->
<section 
    id="venueHeader" 
    style="background-image: url({$session.venue.venueImageId
        ? `https://res.cloudinary.com/dkj7bctqg/image/upload/o_20/v1621853195/${$session.venue.venueImageId}`
        : 'https://res.cloudinary.com/dkj7bctqg/image/upload/o_20,c_crop,h_300,w_300,x_256,y_284/v1621857774/WinePottle/wine-bar-default.jpg'});"
>
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

<!-- ****** Styling ****** -->
<style>
    #venueHeader {
        width: 100vw;
        height: 200px;
        padding-bottom: 20px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
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