<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

    export let data = []
    export let userName = ""

    fcRoot(FusionCharts, Charts, FusionTheme);

    const dataSource = {
        chart: {
            caption: `${userName}'s language usage`,
            updateAnimduration: "0.6",
            theme: "fusion"
        },
        data
    }

    const chartConfigs = {
        type: 'pie3d',
        width: '60%',
        height:"60%",
        dataFormat: 'json',
        dataSource
    }
</script>

<main>
    <SvelteFC {...chartConfigs} />
</main>

<style>
    main {
        margin: 3rem 0 5rem 0;
        box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -webkit-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
    }
</style>