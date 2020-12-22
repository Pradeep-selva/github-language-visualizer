<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
	import {fade} from 'svelte/transition'

    export let data = []
    export let userName = ""

    fcRoot(FusionCharts, Charts, FusionTheme);

    const dataSource = {
        chart: {
            caption: `${userName}'s language usage (excludes forked repos)`,
            updateAnimduration: "0.6",
            theme: "fusion"
        },
        data
    }

    const chartConfigs = {
        type: 'pie3d',
        width: window.screen.width <= 650?"95%":'60%',
        height:window.screen.width <= 650?"50%":"50%",
        dataFormat: 'json',
        dataSource
    }
</script>

<main transition:fade={{duration:500}}>
    <SvelteFC {...chartConfigs} />
</main>

<style>
    main {
        margin: 3rem 0 3rem 0;
        box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -webkit-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
    }
</style>