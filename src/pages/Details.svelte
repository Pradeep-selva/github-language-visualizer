<script lang="ts">
    import {onMount} from 'svelte'
    import { getUserData, getUserRepoLanguages, getUserRepos } from '../configs';

    export let params: Record<'userName', string>|null = null

    let languageStats = {};
    let userData = {};
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

<main>
    <h1>Details</h1>
    {#if loading}
        <h4>This may take some time. Please be patient...</h4>
    {:else}
        <h4>{params?.userName}</h4>
        <p>{JSON.stringify(languageStats)}</p>
    {/if}
</main>