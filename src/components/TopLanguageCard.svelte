<script lang="ts">
    import { formatNumberNotation } from "../services";
	import {fade} from 'svelte/transition'

    export let userName:string = "";
    export let languages: {[x:string]:string}|{} = {};
</script>

<main>
    <div class="user-card" transition:fade={{duration:500}}>
        <p>{userName}'s top 3 languages</p>
        <p class="data" style="font-size:1rem">(includes all repos)</p>
        {#each Object.keys(languages) as language,index (index)}
            <p class="sub-data">
                <span class="label">{index+1}. {language}: </span>
                <span class="data">{formatNumberNotation(languages[language])}</span>
            </p>
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
    }
    .user-card {
        width: 100%;
        min-height: 30vh;
        background-color: var(--light-white);
        border-radius: 5px;
        color: var(--black);
        font-size: var(--medium);
        font-weight: var(--bold);
        box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -webkit-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .sub-data {
        font-size: var(--small);
    }

    .label {
        font-weight: var(--semi-bold);
    }

    .data {
        font-weight: var(--light);
        color: var(--darker-grey)
    }
</style>