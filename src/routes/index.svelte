<script lang="ts">
	import Router from "svelte-spa-router";
	import {Home, Details, NotFound} from '../pages'
</script>

<main>
	<Router routes={{
		'/': Home,
		'/details/:userName': Details,
		'*': NotFound
	}}/>
</main>