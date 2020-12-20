<script lang="ts">
	import {Search} from './components'
</script>

<main>
	<h1 id="title">Github Language Visualizer</h1>
	<Search/>
</main>

<style>
	main {
		text-align: center;
		height: 100vh;
		margin: 0 10% 0 10%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--smokey-white);
		font-size: var(--larger);
	}
	#title {
		flex: 1
	}
</style>