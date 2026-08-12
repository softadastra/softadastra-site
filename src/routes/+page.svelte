<script lang="ts">
	import HeroSection from '$lib/components/home/HeroSection.svelte';
  import CompanySection from '$lib/components/home/CompanySection.svelte';
	import SoftadastraRuntime from '$lib/components/home/SoftadastraRuntime.svelte';
	import SoftadastraNode from '$lib/components/home/SoftadastraNode.svelte';
	import JoinResearchSection from '$lib/components/home/JoinResearchSection.svelte';
	import FaqSection from '$lib/components/home/FaqSection.svelte';
</script>

<svelte:head>
	<title>Softadastra: Make computing infrastructure-independent</title>

	<meta
		name="description"
		content="Softadastra is a computing research and technology company working toward infrastructure-independent computing through intent-driven adaptive runtimes, distributed systems and open-source technology."
	/>

	<meta
		name="keywords"
		content="Softadastra, infrastructure-independent computing, adaptive runtime, Softadastra Runtime, Softadastra Node, distributed systems, systems research, C++, Vix.cpp, edge computing, offline-first computing"
	/>

	<meta name="author" content="Softadastra" />
	<meta name="robots" content="index, follow" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Softadastra" />

	<meta
		property="og:title"
		content="Softadastra: Make computing infrastructure-independent"
	/>

	<meta
		property="og:description"
		content="Research and technology toward software that expresses intent while computing systems determine how infrastructure satisfies it."
	/>

	<link rel="canonical" href="https://softadastra.com/" />
	<meta property="og:url" content="https://softadastra.com/" />
	<meta property="og:image" content="https://softadastra.com/og-logo.png" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:image:alt" content="Softadastra logo" />

	<meta name="twitter:card" content="summary" />

	<meta
		name="twitter:title"
		content="Softadastra: Make computing infrastructure-independent"
	/>

	<meta
		name="twitter:description"
		content="Research and technology toward infrastructure-independent computing."
	/>
	<meta name="twitter:image" content="https://softadastra.com/og-logo.png" />
</svelte:head>

<HeroSection />
<CompanySection />

<SoftadastraRuntime />

<SoftadastraNode />

<JoinResearchSection />

<FaqSection />
