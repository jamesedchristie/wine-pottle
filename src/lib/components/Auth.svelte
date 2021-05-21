<!-- ****** Logic ****** -->
<script lang="ts">
    import { goto } from '$app/navigation';
    import ErrorAlert from '$lib/components/ErrorAlert.svelte';
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';
    import { session } from '$app/stores';
    import { loading } from '$lib/stores'
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
    import type { UserCredential } from '@firebase/auth';
    import { getContext } from 'svelte';
    import { collection, doc, getDoc, setDoc } from '@firebase/firestore';
    import type { FirebaseStore } from 'src/global';
    import type { Writable } from 'svelte/store';
    export let authMode: 'login' | 'register' = 'login';
    let err: string | null = null;

    const store = getContext<Writable<FirebaseStore>>('store');

    let email: string = '';
    let username: string = '';
    let password: string = '';    
    let confirmPassword: string = '';

    async function signIn() {
        $loading = true;            
        if (!email || !password) {
            err = 'Please fill out all fields';
            return;
        }
        try {
            $loading = true;            
            const creds = await signInWithEmailAndPassword($store.auth, email, password);
            login(creds);
        } catch (error) {
            $loading = false;
            err = error;
        }
    }

    async function login(creds: UserCredential) {        
        try {
            const idToken = await creds.user.getIdToken();
            //console.log("Fetching auth/login with idToken " + idToken.substr(0, 10));
            await fetch('auth/login', {
                method: 'post',
                headers: {
                    'Authorization': idToken
                }
            });
            let userDoc = await getDoc(doc(collection($store.firestore, 'users'), creds.user.uid));
            $session.user = userDoc.data();
            $session.user.id = creds.user.uid;
            //console.log($session.user);
            $loading = false;
            //console.log("Going to index");
            goto('/');
        } catch (error) {
            $loading = false;
            err = error;
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
            const creds = await createUserWithEmailAndPassword($store.auth, email, password);
            await setDoc(doc($store.firestore, 'users'), {
                name: username,
                email: email
            });
            login(creds);
        } catch (error) {
            $loading = false;
            err = error;
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
                <Button on:click={signIn} variant='primary'>Login</Button>
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
