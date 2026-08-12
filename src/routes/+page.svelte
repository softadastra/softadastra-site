<script lang="ts">
	import HeroSection from '$lib/components/home/HeroSection.svelte';
	import ThesisSection from '$lib/components/home/ThesisSection.svelte';
	import SystemSection from '$lib/components/home/SystemSection.svelte';
	import CurrentResearchSection from '$lib/components/home/CurrentResearchSection.svelte';
	import TechnologySection from '$lib/components/home/TechnologySection.svelte';
	import JoinResearchSection from '$lib/components/home/JoinResearchSection.svelte';
</script>

<svelte:head>
	<title>Softadastra — Make computing infrastructure-independent.</title>

	<meta
		name="description"
		content="Softadastra is a computing research and technology company working toward infrastructure-independent computing through intent-driven adaptive runtimes, distributed systems and open-source technology."
	/>

	<meta
		name="keywords"
		content="Softadastra, infrastructure-independent computing, adaptive runtime, distributed systems, systems research, C++, Vix.cpp, edge computing, offline-first computing"
	/>

	<meta name="author" content="Softadastra" />
	<meta name="robots" content="index, follow" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Softadastra" />
	<meta
		property="og:title"
		content="Softadastra — Make computing infrastructure-independent."
	/>
	<meta
		property="og:description"
		content="Research and technology toward software that expresses intent while computing systems determine how infrastructure satisfies it."
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Softadastra — Make computing infrastructure-independent."
	/>
	<meta
		name="twitter:description"
		content="Research and technology toward infrastructure-independent computing."
	/>
</svelte:head>

<HeroSection />
<ThesisSection />
<SystemSection />
<CurrentResearchSection />
<TechnologySection />
<JoinResearchSection />
