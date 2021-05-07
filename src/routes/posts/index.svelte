<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { session }  from '$app/stores';

    let user = $session.user;
    console.log("User on posts page is " + JSON.stringify(user));
</script>

<h1>Posts</h1>  

<p>Welcome {user.name}!</p>

<Card title="Post One">Example post content</Card>