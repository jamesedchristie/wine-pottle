<!-- ****** Logic ****** -->
<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    import type { Venue } from "$types";

    export const load: Load = async ({ session }) => {
        const venue: Venue = session.venue;
        return {
            props: {
                venue: venue
            }
        }
    };
</script>

<script lang="ts">
    import { session } from '$app/stores';
</script>

<!-- ****** Styling ****** -->
<style>
    
</style>

<!-- ****** Markup ****** -->
<h2>Welcome {$session.user.name}</h2>