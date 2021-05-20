<!-- ****** Logic ****** -->
<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";    
    export const load: Load = async ({ page, fetch }) => {
        const response = await fetch(`/venues/${page.query.get('venue')}.json`);
        const data = await response.json();
        return {
            props: {
                venue: data.venue
            }
        };
    };
</script>

<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import ErrorAlert from '$lib/components/ErrorAlert.svelte';
    import { session } from '$app/stores';
    import { goto } from "$app/navigation";
    import type { Venue } from "$types";

    let err: string = '';

    export let venue: Venue;
    let password: string = '';

    async function submit(): Promise<void> {
        try {
            const joinResponse = await fetch('/venues/join', {
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    password: password, 
                    venueId: venue.id, 
                    userId: $session.user.id 
                })
            });
            if (!joinResponse.ok) {
                const errorData = await joinResponse.json();
				throw errorData.errors; 
            }            
            $session.venue = venue;
            goto(`${venue.route}`);
        } catch (error) {
            err = error
        }
    }
</script>

<!-- ****** Styling ****** -->
<style>
    
</style>

<!-- ****** Markup ****** -->
<h1>{venue.name}</h1>

<section>
    {#if err}
		<ErrorAlert>{err}</ErrorAlert>
	{/if}
    <div>
        <label for="passwordInput">Venue Password</label>
        <input id="passwordInput" type="password" bind:value={password} />
        <Button variant='primary' on:click={submit}>Submit</Button>        
    </div>
</section>