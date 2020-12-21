<script>
import { pop } from "svelte-spa-router";
import { backIcon, emptyIcon } from "../assetPaths";
</script>

<main>
    <img src={emptyIcon} alt="empty"/>
    <h1>404: Page Not Found!</h1>

    <button class="back" style="cursor:pointer" on:click={() => pop()}>
        <img 
            src={backIcon}
            alt="back icon"
            style="width:20px; margin-right:10px;"
        />
        Go Back
    </button>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 10% 0 10%;
        color: var(--smokey-white);
        min-height: 100vh;
    }

    h1 {
        font-size: var(--large);
    }

    .back {
        margin: 2rem 0 5rem 0;
        font-weight: var(--bold);
        padding: 1rem;
        border-radius: var(--small);
    }
</style>