<script lang="ts">
    import {onMount} from 'svelte'
    import { Loading, UserCard } from '../components';
    import BarChart from '../components/BarChart.svelte';
    import PieChart from '../components/PieChart.svelte';
    import TopLanguageCard from '../components/TopLanguageCard.svelte';
    import { getUserData, getUserRepoLanguages, getUserRepos } from '../configs';
    import { formatChartData, getTopLanguages } from '../services';
    import {pop} from 'svelte-spa-router'

    type Response = {
        [x:string]: string|number|null
    }

    type Stats = {
        [x:string]: number
    }

    export let params: Record<'userName', string>|null = null

    let languageStats: Stats = {};
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
    <h1>{loading?"We are fetching your data":`Result for ${params?.userName}`}</h1>
    {#if loading}
        <h4>This may take some time. Please be patient...</h4>
        <Loading/>
    {:else}
        {#if Object.keys(userData).length > 0}
            <UserCard userData={userData}/>
        {/if}

        {#if Object.keys(languageStats).length > 0}
            <TopLanguageCard 
                languages={getTopLanguages(languageStats)} 
                userName={params?.userName}
            />
            <BarChart 
                data={formatChartData(languageStats)} 
                userName={params?.userName}
            />
            <PieChart 
                data={formatChartData(languageStats)}
                userName={params?.userName}
            />
            <button class="back" style="cursor:pointer" on:click={() => pop()}>
                <img 
                    src="https://image.flaticon.com/icons/png/512/59/59098.png" 
                    alt="back icon"
                    style="width:20px; margin-right:10px;"
                />
                Go Back
            </button>
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