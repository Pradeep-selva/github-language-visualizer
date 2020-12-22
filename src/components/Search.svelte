<script lang="ts">
    import {fade} from 'svelte/transition';
    import {push} from 'svelte-spa-router'

    let user: string = ""

    const handleSubmit = (event) => {
        event.key === "Enter" && 
        push(`/details/${user}`)
    }
</script>

<main>
    <input 
    type="text" 
    placeholder="Search for a github user" 
    on:keypress={handleSubmit} 
    bind:value={user}
    transition:fade={{duration:500}}
    />
</main>

<style>
    main {
        flex: 1;
    }

    input {
        min-width: 70vw;
        border-radius: var(--largest);
        background-color: var(--grey);
        padding: 1rem;
        text-align: center;
        font-size: var(--big);
        box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -webkit-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
    }

    input:focus {
        outline: none;
    }

    ::placeholder {
        font-size: var(--big);
        text-align: center;
    }

    @media screen and (max-width: 650px){
        input {
            padding:0.5rem;
            max-width: 4vw; 
            font-size: var(--medium);           
        }

        ::placeholder {
            font-size: var(--small);
        }
    }
</style>