<script lang="ts">
    import { getUserRepoLanguages, getUserRepos } from "../configs";
    import {push} from 'svelte-spa-router'

    let user: string = ""

    const handleSubmit = (event) => {
        event.key === "Enter" && 
        push(`/details/${user}`)
    }
</script>

<main>
    <input type="text" placeholder="Search for a github user" on:keypress={handleSubmit} bind:value={user}/>
</main>

<style>
    main {
        flex: 1;
    }

    input {
        min-width: 100vh;
        border-radius: var(--largest);
        background-color: var(--grey);
        padding: 1rem;
        text-align: center;
        font-size: var(--big);
    }

    input:focus {
        outline: none;
    }

    ::placeholder {
        font-size: var(--big);
        text-align: center;
    }
</style>