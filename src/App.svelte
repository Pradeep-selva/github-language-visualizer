<script lang="ts">
	import { Search } from './components'
	import { githubLogo } from './assetPaths'
	import { links } from './configs';

	const handleClick = () => window.open(links.githubSourceCode, "_blank")
</script>

<main>
	<h1 id="title">Github Language Visualizer</h1>
	<Search/>
	
	<div id="source-code">
		<button id="source-button" on:click={handleClick}>
			<img id="logo" src={githubLogo} alt="github logo"/>
			View Source
		</button>
	</div>
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

	#source-code {
		flex: 3;
		align-items: center;
		justify-content: center;
		display: flex;
	}

	#source-button {
		display: inline-block;
		font-size: var(--medium);
		border-radius: calc(var(--medium) - var(--small));
		cursor: pointer;
	}

	#logo {
		float:left;
		margin-right: 0.5rem;
		width: var(--medium);
	}
</style>