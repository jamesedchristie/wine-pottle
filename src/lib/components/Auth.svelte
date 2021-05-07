<!-- ****** Logic ****** -->
<script lang="ts">
    import { goto } from '$app/navigation';

    import ErrorAlert from '$lib/components/ErrorAlert.svelte';
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';
    import { auth, googleAuth, usersCollection } from '../../services/firebase';
    import { session } from '$app/stores';
    import { post } from '$lib/utils';

    export let authMode: 'login' | 'register' = 'login';
    let err: string | null = null;

    let email: string = '';
    let username: string = '';
    let password: string = '';    
    let confirmPassword: string = '';

    async function login() {
        if (!email || !password) {
            err = 'Please fill out all fields';
            return;
        }
        try {
            const response = await post('auth/login', { email, password });
            const userProfile = await usersCollection.doc(response.user.uid).get();
            const data = userProfile.data();
            $session.user = {
                name: data.name,
                email: data.email
            };
            goto('/');
        } catch (error) {
            err = error;
            return;
        }
    }

    async function register() {
        if (!email || !password || !confirmPassword || !username) {
            err = 'Please fill out all fields';
            return;
        }
        if (password !== confirmPassword) {
            err = 'Passwords do not match';
            return;
        }
        try {
            const response = await post('auth/register', {username, email, password });
            if (response.errors) throw response.errors;
            const userProfile = await usersCollection.doc(response.user.uid).get();
            const data = userProfile.data();
            $session.user = {
                name: data.name,
                email: data.email
            };
            goto('/');
        } catch (error) {
            err = error;
            return;
        }
    }
</script>

<!-- ****** Styling ****** -->
<style>
    
</style>

<!-- ****** Markup ****** -->
<Card title={authMode === 'login' ? 'Login' : 'Register'}>
    <div>
        <Button on:click={() => authMode = 'login'} variant={authMode === 'login' ? 'secondary' : 'primary'}>Login</Button>
        <Button on:click={() => authMode = 'register'} variant={authMode === 'register' ? 'secondary' : 'primary'}>Register</Button>
    </div>
    {#if authMode === 'login'}
        <div>
            {#if err}
                <ErrorAlert message={err} />
            {/if}
            <h4>Login</h4>    
            <div>
                <label for="loginEmail">Email</label>
                <input id="loginEmail" type="email" placeholder="Enter your email address" bind:value={email} />
            </div>
            <div>
                <label for="loginPassword">Password</label>
                <input id="loginPassword" type="password" placeholder="Enter your password" bind:value={password} />
            </div>
            <div>
                <Button on:click={login} variant='primary'>Login</Button>
            </div>
        </div>
    {:else}
        <div>
            {#if err}
                <ErrorAlert message={err} />
            {/if}
            <h4>Register</h4>
            <div>
                <label for="registerName">Username</label>
                <input id="registerName" type="text" placeholder="Enter you username" bind:value={username} />
            </div>    
            <div>
                <label for="registerEmail">Email</label>
                <input id="registerEmail" type="email" placeholder="Enter your email address" bind:value={email} />
            </div>
            <div>
                <label for="registerPassword">Password</label>
                <input id="registerPassword" type="password" placeholder="Enter your password" bind:value={password} />
            </div>
            <div>
                <label for="confirmRegisterPassword">Password</label>
                <input id="confirmRegisterPassword" type="password" placeholder="Enter your password" bind:value={confirmPassword} />
            </div>
            <div>
                <Button on:click={register} variant='primary'>Register</Button>
            </div>
        </div>
    {/if}    
</Card>
