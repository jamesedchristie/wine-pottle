<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    export const load: Load = ({ session }) => {
        //console.log("Logout page loading");
        session.user = null;
        session.venue = null;
        return {
            props: {
                message: 'Bye!'
            }
        }
    };
</script>

<!-- ****** Logic ****** -->
<script lang="ts">
    export let message;
</script>

<!-- ****** Styling ****** -->
<style>
    
</style>

<!-- ****** Markup ****** -->
<h2>{message}</h2>

<div>
    <a href="/login">Login</a>
</div>