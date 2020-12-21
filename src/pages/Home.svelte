<script lang="ts">
	import { Search, SourceCodeButton } from '../components'
</script>

<main>
	<h1 id="title">Github Language Visualizer</h1>
	<Search/>
    <SourceCodeButton/>
</main>

<style>
	main {
		text-align: center;
		margin: 0 10% 0 10%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--smokey-white);
		font-size: var(--larger);
        font-weight: var(--bold);
        padding-bottom: 20vh;
	}
	
	#title {
		flex: 1
	}
</style>