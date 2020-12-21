<script lang="ts">
	import Router from "svelte-spa-router";
	import {Home, Details} from '../pages'
</script>

<main>
	<Router routes={{
		'/': Home,
		'/details': Details
	}}/>
</main>