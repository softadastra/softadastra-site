<script lang="ts">
	import '../lib/styles/global.css';

	import { page } from '$app/state';

	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';

	let { children } = $props();

	const isHome = $derived(page.url.pathname === '/');
	const isOscarService = $derived(page.url.pathname === '/oscar-service');
	const hasSiteChrome = $derived(!isHome && !isOscarService);
</script>

{#if hasSiteChrome}
	<SiteHeader />
{/if}

{@render children()}

{#if !isOscarService}
	<SiteFooter />
{/if}
