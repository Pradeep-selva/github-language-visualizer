<script lang="ts">
	import { Search, SourceCodeButton } from '../components';
	import {fade} from 'svelte/transition';
</script>

<main>
	<h1 id="title" transition:fade={{duration:300}}>
		Github Language Visualizer
	</h1>
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

	@media screen and (max-width: 650px){
		main {
			font-size: var(--medium);
		}
	}
</style>