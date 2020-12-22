<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
    import { getStackedChartData } from '../services';
	import {fade} from 'svelte/transition'

    export let ownData = {}
    export let forkedData = {}
    export let userName = ""

    let {labels, forkedValues, ownValues} = getStackedChartData(ownData, forkedData)

    fcRoot(FusionCharts, Charts, FusionTheme);

    const dataSource = {
        chart: {
            caption: `${userName}'s language usage`,
            xAxisName: "Languages",
            yAxisName: "Lines of code",
            updateAnimduration: "0.6",
            plottooltext: "$seriesName - <b>$dataValue</b> lines",
            theme: "fusion"
        },
        categories: [
            {
                category: labels
            }
        ],
        dataset: [
            {
                seriesname: "Owned repos",
                data: ownValues
            },
            {
                seriesname: "Forked repos",
                data: forkedValues
            }
        ]
    }
  const chartConfigs = {
    type: 'stackedcolumn3d',
    width: window.screen.width <= 650?"95%":"60%",
    height: "50%",
    dataFormat: 'json',
    dataSource
  };
</script>

<main transition:fade={{duration:500}}>
    <SvelteFC {...chartConfigs}/>
</main>

<style>
    main {
        margin-top: 3rem;
        box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -webkit-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 11px 13px 48px -16px rgba(0,0,0,0.75);
    }
</style>
