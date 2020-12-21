<script lang="ts">
    import {onMount} from 'svelte'
    import { UserCard } from '../components';
    import { getUserData, getUserRepoLanguages, getUserRepos } from '../configs';

    type Response = {
        [x:string]: string|number|null
    }

    export let params: Record<'userName', string>|null = null

    let languageStats: Response = {};
    let userData: Response = {};
    let error = false;
    let loading = false;

    const toggleLoading = () => loading = !loading;
    
    const fetchAll = async () => {
        toggleLoading();
        const {userName} = params;
        
        try {
            const repos = await getUserRepos(userName);

            repos.map(async repo => {
                const languages = await getUserRepoLanguages(userName, repo.name);
                
                for(let language in languages){
                    languageStats[language] = (languageStats[language]||0)+languages[language];
                }
            })
            
            userData = await getUserData(userName);
        } catch(err){
            console.log(err)
            error = true
        } finally {
            toggleLoading();
        }
    }
    
    onMount(fetchAll);
</script>

<main lang="ts">
    <h1>Result for {params?.userName}</h1>
    {#if loading}
        <h4>This may take some time. Please be patient...</h4>
    {:else}
        {#if Object.keys(userData).length > 0}
            <UserCard userData={userData}/>
        {/if}
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 10% 0 10%;
        color: var(--smokey-white);
    }

    h1 {
        font-size: var(--large);
    }
</style>