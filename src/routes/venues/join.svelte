<!-- ****** Logic ****** -->
<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";    
    export const load: Load = async ({ page, fetch }) => {
        const response = await fetch(`/venues/${page.query.get('venue')}.json`);
        const data = await response.json();
        return {
            props: {
                venue: data
            }
        };
    };
</script>

<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import ErrorAlert from '$lib/components/ErrorAlert.svelte';
    import { session } from '$app/stores';
    import { goto } from "$app/navigation";
    import type { FirebaseStore, Venue } from "$types";
    import { getIdToken } from "@firebase/auth";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    const store = getContext<Writable<FirebaseStore>>('store');

    let err: string = '';

    export let venue: Venue;
    let password: string = '';

    async function submit(): Promise<void> {
        try {
            // Add user to venue if password correct
            //console.log("Calling join endpoint");            
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
                console.log("Something went wrong trying to join venue");
                const errorData = await joinResponse.json();
				throw errorData.errors; 
            }
            //console.log('Join response ok. Setting session venue and getting fresh idToken');            
            const user = $store.auth.currentUser;
            //console.log(user);
            // Force ID Token refresh and login again to set updated session cookie
            const idToken = await getIdToken(user, true);
            //console.log(idToken);
            //console.log('Id token received. Fetching login endpoint');
            await fetch('/auth/login', {
                method: 'post',
                headers: {
                    'Authorization': idToken
                }
            });
            //console.log('Login complete, going to venue route');
            await goto(`enter?venueId=${venue.id}&route=${venue.route}`);
        } catch (error) {
            console.log(error);
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