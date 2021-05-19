<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    export const load: Load = ({ session }) => {
        //console.log("Login page");
        //if (session.user) console.log(session.user.name)
        return {
            props: {
                message: 'Hello'
            }
        }
    };
</script>

<!-- ****** Logic ****** -->
<script lang="ts">
    import Auth from "$lib/components/Auth.svelte";    
    import { session } from "$app/stores";
    export let message;
</script>

<!-- ****** Styling ****** -->
<style>
    
</style>

<!-- ****** Markup ****** -->
<h2>{message}{$session.user ? ' ' + $session.user.name : ''}!</h2>
<Auth />
