<script>
    import { repoLogo } from "../assetPaths";
	import {fade} from 'svelte/transition'

    export let userData = {};
</script>

<main>
    <div class="user-card" transition:fade={{duration:500}}>
        <img src={userData.avatar_url+""} alt="avatar" class="avatar"/>
        <p>@{userData.login}{" "} 
            <span class="subtitle">{!!userData.name?`(${userData.name||""})`:""}</span>
        </p>
        {#if !!userData.bio}
            <p class="subtitle">"{userData.bio||""}"</p>
        {/if}
        <p class="sub-data">
            <span class="label">Followers: </span>
            <span class="data" style="margin-right:20px">
                {userData.followers}
            </span>
            <span class="label">Following: </span>
            <span class="data">{userData.following}</span>
        </p>
        <p class="sub-data">
            <span><img id="icon" src={repoLogo} alt="icon"/></span>
            <span class="label">Repositories: </span>
            <span class="data">{userData.public_repos}</span>
        </p>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .user-card {
        width: 100%;
        min-height: 30vh;
        background-color: var(--smokey-white);
        border-radius: 5px;
        color: var(--black);
        font-size: var(--medium);
        font-weight: var(--semi-bold);
        box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -webkit-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .avatar {
        border-radius: 50%;
        border: 5px solid var(--darker-grey);
        width: var(--largest);
    }

    .subtitle {
        font-size: var(--small);
        color: var(--darker-grey);
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

    #icon {
        width: var(--small);
    }
</style>