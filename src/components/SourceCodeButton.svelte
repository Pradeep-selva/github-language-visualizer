<script>
    import { githubLogo } from '../assetPaths'
	import { links } from '../configs';

	const handleClick = () => window.open(links.githubSourceCode, "_blank")
</script>

<main>
    <div id="source-code">
		<button id="source-button" on:click={handleClick}>
			<img id="logo" src={githubLogo} alt="github logo"/>
			View Source
		</button>
	</div>
</main>

<style>
    #source-code {
		flex: 3;
		align-items: center;
		justify-content: center;
		display: flex;
        margin-bottom: 4rem;
	}

	#source-button {
		display: inline-block;
		font-size: var(--medium);
		font-weight: var(--semi-bold);
		border-radius: calc(var(--medium) - var(--small));
		cursor: pointer;
	}

	#logo {
		float:left;
		margin-right: 0.5rem;
		width: var(--almost-big);
	}
</style>