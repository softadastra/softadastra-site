<script lang="ts">
	import '../lib/styles/global.css';

	import { page } from '$app/state';

	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';

	let { children } = $props();

	const isHome = $derived(page.url.pathname === '/');
</script>

{#if !isHome}
	<SiteHeader />
{/if}

{@render children()}

<SiteFooter />
