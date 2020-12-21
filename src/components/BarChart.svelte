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
            xAxisName: "Languages",
            yAxisName: "Lines of code",
            updateAnimduration: "0.6",
            theme: "fusion"
        },
        data
    }

    const chartConfigs = {
        type: 'column2d',
        width: '60%',
        height: "80%",
        dataFormat: 'json',
        dataSource
    }
</script>

<main>
    <SvelteFC {...chartConfigs} />
</main>

<style>
    main {
        margin-top: 3rem;
        box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -webkit-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
    }
</style>