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
            const sessionUser = {
                id: creds.user.uid,
                name: userDoc.get('name'),
                email: userDoc.get('email')
            };
            $loading = false;
            $session.user = sessionUser;
            //console.log($session.user);
            //console.log("Going to index");
            await goto('/');
            
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
            const response = await fetch('/users/create', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uid: creds.user.uid,
                    name: username,
                    email: email
                })
            });
            if (!response.ok) {
                let data = await response.json();
                throw data.errors;
            }
            login(creds);
        } catch (error) {
            $loading = false;
            err = error;
        }
    }
</script>

<!-- ****** Markup ****** -->
<Card title={authMode === 'login' ? 'Login' : 'Register'}>
    <div>
        <p>
            {#if authMode === 'login'}
                Don't have an account? <Button on:click={() => authMode = 'register'} variant={'primary'}>Sign up</Button>
            {:else}
                Already have an account?  <Button on:click={() => authMode = 'login'} variant={'primary'}>Login</Button>
            {/if}
        </p>
    </div>
    {#if authMode === 'login'}
        <div class="form">
            {#if err}
                <ErrorAlert message={err} />
            {/if}
            <div class="formRow">
                <label for="loginEmail">Email</label>
                <input id="loginEmail" type="email" placeholder="Enter your email address" bind:value={email} />
            </div>
            <div class="formRow">
                <label for="loginPassword">Password</label>
                <input id="loginPassword" type="password" placeholder="Enter your password" bind:value={password} />
            </div>
            <div class="formRow">
                <Button on:click={signIn} variant='primary'>Login</Button>
            </div>
        </div>
    {:else}
        <div class="form">
            {#if err}
                <ErrorAlert message={err} />
            {/if}
            <div class="formRow">
                <label for="registerName">Username</label>
                <input id="registerName" type="text" placeholder="Enter you username" bind:value={username} />
            </div>    
            <div class="formRow">
                <label for="registerEmail">Email</label>
                <input id="registerEmail" type="email" placeholder="Enter your email address" bind:value={email} />
            </div>
            <div class="formRow">
                <label for="registerPassword">Password</label>
                <input id="registerPassword" type="password" placeholder="Enter your password" bind:value={password} />
            </div>
            <div class="formRow">
                <label for="confirmRegisterPassword">Password</label>
                <input id="confirmRegisterPassword" type="password" placeholder="Enter your password" bind:value={confirmPassword} />
            </div>
            <div class="formRow">
                <Button on:click={register} variant='primary'>Register</Button>
            </div>
        </div>
    {/if}    
</Card>

<!-- ****** Styling ****** -->
<style>
    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px 0px;
    }
    .formRow {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    label {
        width: 20%;
        text-align: end;
    }
    input {
        width: 50%;
        text-align: start;
    }
</style>
