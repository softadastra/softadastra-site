<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const runtimeResponsibilities = [
		{
			area: 'Placement',
			observes: 'latency · locality · trust · capabilities',
			responsibility:
				'Determine where computation should execute across available infrastructure.'
		},
		{
			area: 'Scheduling',
			observes: 'priority · load · resources · constraints',
			responsibility:
				'Schedule workloads according to application requirements and current resource conditions.'
		},
		{
			area: 'Distributed state',
			observes: 'durability · consistency · availability',
			responsibility:
				'Manage application state independently from any single machine or location.'
		},
		{
			area: 'Replication',
			observes: 'state · availability · locality',
			responsibility:
				'Determine when and where state should be replicated across the computing fabric.'
		},
		{
			area: 'Recovery',
			observes: 'failure · availability · application state',
			responsibility:
				'Recover or resume execution when machines, networks or infrastructure become unavailable.'
		},
		{
			area: 'Reconciliation',
			observes: 'divergent state · connectivity · consistency',
			responsibility:
				'Reconcile state after partitions, offline operation or infrastructure reconnection.'
		},
		{
			area: 'Trust',
			observes: 'identity · policy · security',
			responsibility:
				'Restrict execution and state placement to infrastructure permitted by application policy.'
		},
		{
			area: 'Hardware',
			observes: 'CPU · GPU · accelerators · capabilities',
			responsibility:
				'Select compatible computing resources without permanently coupling the application to specific hardware.'
		},
		{
			area: 'Adaptation',
			observes: 'network · resources · failures · changing conditions',
			responsibility:
				'Re-evaluate execution decisions while the application and its environment change.'
		}
	];

	const technologies = [
		{
			status: 'maintained',
			name: 'Vix.cpp',
			role: 'Developer platform',
			description:
				'Open-source C++ developer platform maintained by Softadastra.',
			href: 'https://vixcpp.com',
			external: true
		},
		{
			status: 'in progress',
			name: 'Softadastra Runtime',
			role: 'Adaptive execution layer',
			description:
				'The central runtime technology behind infrastructure-independent computing.',
			href: 'https://github.com/softadastra/runtime',
			external: true
		},
		{
			status: 'planned',
			name: 'Softadastra Node',
			role: 'Reference hardware',
			description:
				'Low-power reference hardware designed to run the Runtime as one resource in the computing fabric.',
			href: '#softadastra-node',
			external: false
		}
	];

	const nodeTargets = [
		{
			property: 'Role',
			value: 'Reference hardware for the Softadastra computing fabric'
		},
		{
			property: 'Architecture',
			value: 'x86-64 initially'
		},
		{
			property: 'Prototype class',
			value: 'Low-power 4-core system'
		},
		{
			property: 'Memory',
			value: '16 GB target'
		},
		{
			property: 'Storage',
			value: '512 GB NVMe target'
		},
		{
			property: 'Networking',
			value: '2.5 GbE · Wi-Fi'
		},
		{
			property: 'Power',
			value: '< 20 W typical system target'
		},
		{
			property: 'Operation',
			value: 'Local-first · able to remain useful without Internet connectivity'
		},
		{
			property: 'Status',
			value: 'Planned reference system',
			accent: true
		}
	];

	const technologySchema = {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: 'Softadastra Technology',
		description:
			'The technical architecture behind Softadastra infrastructure-independent computing.',
		author: {
			'@type': 'Organization',
			name: 'Softadastra',
			url: 'https://softadastra.com'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Softadastra',
			url: 'https://softadastra.com'
		},
		mainEntityOfPage: 'https://softadastra.com/technology'
	};
</script>

<svelte:head>
	<title>Technology: Softadastra</title>

	<meta
		name="description"
		content="Explore the Softadastra Runtime, Computing Fabric, Vix.cpp and reference hardware architecture behind infrastructure-independent computing."
	/>

	<meta
		name="keywords"
		content="Softadastra, Softadastra Runtime, infrastructure-independent computing, adaptive runtime, computing fabric, distributed systems, Vix.cpp, C++, edge computing, offline-first computing"
	/>

	<meta name="author" content="Softadastra" />
	<meta name="robots" content="index, follow" />

	<link
		rel="canonical"
		href="https://softadastra.com/technology"
	/>

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Softadastra" />

	<meta
		property="og:url"
		content="https://softadastra.com/technology"
	/>

	<meta
		property="og:title"
		content="Technology: Softadastra"
	/>

	<meta
		property="og:description"
		content="The Runtime and computing architecture behind Softadastra infrastructure-independent computing."
	/>

	<meta property="og:image" content="https://softadastra.com/og-logo.png" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:image:alt" content="Softadastra logo" />

	<meta name="twitter:card" content="summary" />

	<meta
		name="twitter:title"
		content="Technology: Softadastra"
	/>

	<meta
		name="twitter:description"
		content="Adaptive runtime technology for infrastructure-independent computing."
	/>
	<meta name="twitter:image" content="https://softadastra.com/og-logo.png" />

	{@html `<script type="application/ld+json">${JSON.stringify(technologySchema)}</script>`}
</svelte:head>

<main class="technology-page">
	<section
		class="hero"
		aria-labelledby="technology-title"
	>
		<Container>
			<div class="hero-content">
				<div class="hero-heading">
					<p class="eyebrow">
						Technology
					</p>

					<h1 id="technology-title">
						Infrastructure-independent computing.
					</h1>
				</div>

				<div class="hero-description">
					<p>
						Softadastra is developing an adaptive computing architecture where
						software describes what it needs and the Runtime determines how
						available infrastructure can satisfy it.
					</p>

					<div class="hero-links">
						<a
							href="https://github.com/softadastra/runtime"
							target="_blank"
							rel="noopener noreferrer"
						>
							Runtime source ↗
						</a>

						<a href="/research">
							Research →
						</a>
					</div>
				</div>
			</div>

			<div
				class="core-flow"
				aria-label="Softadastra computing architecture"
			>
				<div class="flow-item">
					<span>
						software
					</span>

					<strong>
						Intent + State + Constraints
					</strong>
				</div>

				<div
					class="flow-arrow"
					aria-hidden="true"
				>
					→
				</div>

				<div class="flow-item flow-item--runtime">
					<span>
						execution
					</span>

					<strong>
						Softadastra Runtime
					</strong>

					<small>
						in progress
					</small>
				</div>

				<div
					class="flow-arrow"
					aria-hidden="true"
				>
					→
				</div>

				<div class="flow-item">
					<span>
						resources
					</span>

					<strong>
						Computing Fabric
					</strong>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="architecture-title"
	>
		<Container>
			<div class="section-content">
				<header class="section-heading">
					<span>
						01
					</span>

					<h2 id="architecture-title">
						Core architecture
					</h2>
				</header>

				<div class="architecture">
					<article>
						<span class="architecture-label">
							Application
						</span>

						<h3>
							Describe requirements
						</h3>

						<p>
							Application code expresses intent, state requirements and
							constraints without permanently encoding a complete infrastructure
							topology.
						</p>

						<div class="architecture-values">
							intent · state · constraints
						</div>
					</article>

					<div
						class="architecture-arrow"
						aria-hidden="true"
					>
						→
					</div>

					<article class="architecture-runtime">
						<span class="architecture-label">
							Runtime
						</span>

						<h3>
							Make execution decisions
						</h3>

						<p>
							The Softadastra Runtime interprets application requirements and
							progressively decides how computation and state should use
							available resources.
						</p>

						<div class="architecture-values">
							placement · scheduling · state · recovery
						</div>
					</article>

					<div
						class="architecture-arrow"
						aria-hidden="true"
					>
						→
					</div>

					<article>
						<span class="architecture-label">
							Fabric
						</span>

						<h3>
							Expose capabilities
						</h3>

						<p>
							Local machines, edge systems, cloud infrastructure and hardware
							accelerators become resources available to the Runtime.
						</p>

						<div class="architecture-values">
							local · edge · cloud · CPU · GPU
						</div>
					</article>
				</div>

				<p class="architecture-principle">
					Software describes the requirement.
					<strong>
						The Runtime handles the infrastructure decision.
					</strong>
				</p>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="runtime-title"
	>
		<Container>
			<div class="section-content">
				<header class="section-heading">
					<span>
						02
					</span>

					<h2 id="runtime-title">
						Softadastra Runtime
					</h2>
				</header>

				<div class="runtime-intro">
					<div>
						<p class="runtime-lead">
							The adaptive execution layer between software and computing
							infrastructure.
						</p>
					</div>

					<div class="runtime-description">
						<p>
							The Runtime is currently
							<strong>in progress</strong>.
							It is being developed publicly and individual capabilities are
							being implemented and validated progressively.
						</p>

						<a
							href="https://github.com/softadastra/runtime"
							target="_blank"
							rel="noopener noreferrer"
						>
							github.com/softadastra/runtime ↗
						</a>
					</div>
				</div>

				<div class="runtime-table-wrapper">
					<table class="runtime-table">
						<thead>
							<tr>
								<th scope="col">
									Runtime area
								</th>

								<th scope="col">
									Observes
								</th>

								<th scope="col">
									Responsibility
								</th>
							</tr>
						</thead>

						<tbody>
							{#each runtimeResponsibilities as item}
								<tr>
									<th scope="row">
										{item.area}
									</th>

									<td>
										{item.observes}
									</td>

									<td>
										{item.responsibility}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		id="computing-fabric"
		aria-labelledby="fabric-title"
	>
		<Container>
			<div class="section-content">
				<header class="section-heading">
					<span>
						03
					</span>

					<h2 id="fabric-title">
						Computing Fabric
					</h2>
				</header>

				<div class="fabric-layout">
					<div class="fabric-copy">
						<p class="fabric-lead">
							The Fabric is the set of computing capabilities visible to the
							Runtime.
						</p>

						<p>
							It is not another cloud provider. A resource may be local, remote,
							temporary or specialized.
						</p>

						<p>
							The application should not need to permanently depend on the
							location or provider of that resource.
						</p>
					</div>

					<div class="fabric">
						<div class="fabric-runtime">
							<span>
								control
							</span>

							<strong>
								Softadastra Runtime
							</strong>
						</div>

						<div
							class="fabric-line"
							aria-hidden="true"
						></div>

						<div class="fabric-resources">
							<div>
								<span>
									local
								</span>

								<strong>
									Local machine
								</strong>

								<small>
									CPU · memory · storage
								</small>
							</div>

							<div>
								<span>
									edge
								</span>

								<strong>
									Edge resource
								</strong>

								<small>
									locality · low latency
								</small>
							</div>

							<div>
								<span>
									cloud
								</span>

								<strong>
									Cloud resource
								</strong>

								<small>
									remote capacity
								</small>
							</div>

							<div>
								<span>
									acceleration
								</span>

								<strong>
									GPU / accelerator
								</strong>

								<small>
									specialized compute
								</small>
							</div>
						</div>
					</div>
				</div>

				<div class="offline-model">
					<div>
						<span>
							connected
						</span>

						<strong>
							local + remote resources
						</strong>
					</div>

					<span aria-hidden="true">
						→
					</span>

					<div>
						<span>
							network unavailable
						</span>

						<strong>
							eligible local work continues
						</strong>
					</div>

					<span aria-hidden="true">
						→
					</span>

					<div>
						<span>
							reconnected
						</span>

						<strong>
							state can be reconciled
						</strong>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="map-title"
	>
		<Container>
			<div class="section-content">
				<header class="section-heading">
					<span>
						04
					</span>

					<h2 id="map-title">
						Technology map
					</h2>
				</header>

				<div class="technology-list">
					{#each technologies as technology}
						<article class="technology-item">
							<div class="technology-status">
								<span class:status-maintained={technology.status === 'maintained'}>
									{technology.status}
								</span>
							</div>

							<div class="technology-name">
								<h3>
									{technology.name}
								</h3>

								<p>
									{technology.role}
								</p>
							</div>

							<p class="technology-description">
								{technology.description}
							</p>

							<a
								href={technology.href}
								target={technology.external ? '_blank' : undefined}
								rel={technology.external ? 'noopener noreferrer' : undefined}
							>
								{technology.external ? 'open ↗' : 'details ↓'}
							</a>
						</article>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		id="softadastra-node"
		aria-labelledby="node-title"
	>
		<Container>
			<div class="section-content">
				<header class="section-heading">
					<span>
						05
					</span>

					<h2 id="node-title">
						Softadastra Node
						<small>
							planned
						</small>
					</h2>
				</header>

				<div class="node-intro">
					<p class="node-lead">
						Reference hardware for proving the Runtime on a small, ordinary,
						low-power machine.
					</p>

					<div>
						<p>
							The Node is not required to use Softadastra. It is one future
							computing resource designed specifically around the Runtime.
						</p>

						<p>
							The first target intentionally favors low cost and low power over
							workstation-class hardware.
						</p>
					</div>
				</div>

				<div class="node-table-wrapper">
					<table class="node-table">
						<thead>
							<tr>
								<th></th>

								<th>
									node v1
									<span>
										reference target
									</span>
								</th>
							</tr>
						</thead>

						<tbody>
							{#each nodeTargets as target}
								<tr>
									<th scope="row">
										{target.property}
									</th>

									<td class:accent-value={target.accent}>
										{target.value}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<p class="node-note">
					Target specification. Final hardware may change as prototypes and the
					Runtime are validated.
				</p>
			</div>
		</Container>
	</section>

	<section class="end">
		<Container>
			<div class="end-content">
				<p>
					The architecture is being built progressively.
				</p>

				<nav aria-label="Technology links">
					<a
						href="https://github.com/softadastra/runtime"
						target="_blank"
						rel="noopener noreferrer"
					>
						Runtime ↗
					</a>

					<a
						href="https://vixcpp.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vix.cpp ↗
					</a>

					<a href="/research">
						Research →
					</a>
				</nav>
			</div>
		</Container>
	</section>
</main>

<style>
	.technology-page {
		background: var(--color-white);
		color: var(--color-text);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Hero
	-------------------------------------------------- */

	.hero-content {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			minmax(300px, 0.65fr);

		gap: clamp(40px, 8vw, 100px);

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;

		padding-top: clamp(52px, 6vw, 76px);
	}

	.eyebrow {
		margin: 0;

		color: var(--color-accent);

		font-size: 0.67rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.4;
	}

	.hero h1 {
		max-width: 700px;

		margin: 9px 0 0;

		color: var(--color-text);

		font-size: clamp(1.7rem, 3.2vw, 2.6rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.045em;
		line-height: 1.12;
	}

	.hero-description {
		align-self: end;
	}

	.hero-description > p {
		max-width: 560px;

		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.82rem;
		line-height: 1.65;
	}

	.hero-links {
		display: flex;
		flex-wrap: wrap;

		gap: 8px 20px;

		margin-top: 14px;
	}

	.hero-links a {
		color: var(--color-accent);

		font-size: 0.68rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* --------------------------------------------------
	   Core flow
	-------------------------------------------------- */

	.core-flow {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr);

		align-items: center;

		gap: clamp(13px, 2.5vw, 28px);

		width: 100%;
		max-width: var(--content-width);

		margin: clamp(38px, 5vw, 56px) auto 0;
		padding-bottom: clamp(38px, 5vw, 52px);
	}

	.flow-item span {
		display: block;

		margin-bottom: 4px;

		color: var(--color-muted);

		font-size: 0.59rem;
		line-height: 1.3;
	}

	.flow-item strong {
		display: block;

		color: var(--color-text);

		font-size: 0.79rem;
		line-height: 1.4;
	}

	.flow-item small {
		display: block;

		margin-top: 3px;

		color: var(--color-muted);

		font-size: 0.56rem;
	}

	.flow-item--runtime strong {
		color: var(--color-accent);
	}

	.flow-arrow {
		color: var(--color-border-strong);

		font-size: 0.8rem;
	}

	/* --------------------------------------------------
	   Sections
	-------------------------------------------------- */

	.section {
		border-top: 1px solid var(--color-border);
	}

	.section-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(40px, 4.5vw, 56px);
	}

	.section-heading {
		display: flex;
		align-items: baseline;

		gap: 12px;

		margin-bottom: 25px;
	}

	.section-heading > span {
		color: var(--color-accent);

		font-size: 0.62rem;
		font-weight: var(--font-weight-semibold);
	}

	.section-heading h2 {
		margin: 0;

		color: var(--color-text);

		font-size: clamp(1.05rem, 1.5vw, 1.3rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;
		line-height: 1.4;
	}

	.section-heading h2 small {
		margin-left: 5px;

		color: var(--color-accent);

		font-size: 0.62em;
		font-weight: var(--font-weight-normal);
	}

	/* --------------------------------------------------
	   Architecture
	-------------------------------------------------- */

	.architecture {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr);

		gap: 16px;

		align-items: stretch;
	}

	.architecture article {
		padding: 18px 0;
	}

	.architecture-label {
		display: block;

		margin-bottom: 8px;

		color: var(--color-muted);

		font-size: 0.61rem;
	}

	.architecture h3 {
		margin: 0;

		color: var(--color-text);

		font-size: 0.84rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.4;
	}

	.architecture p {
		margin: 9px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.72rem;
		line-height: 1.6;
	}

	.architecture-values {
		margin-top: 13px;

		color: var(--color-muted);

		font-size: 0.61rem;
		line-height: 1.5;
	}

	.architecture-runtime {
		border-top: 2px solid var(--color-accent);
	}

	.architecture-runtime h3 {
		color: var(--color-accent);
	}

	.architecture-arrow {
		align-self: center;

		color: var(--color-border-strong);
	}

	.architecture-principle {
		margin: 16px 0 0;

		color: var(--color-text);

		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.5;
	}

	.architecture-principle strong {
		color: var(--color-accent);
	}

	/* --------------------------------------------------
	   Runtime
	-------------------------------------------------- */

	.runtime-intro {
		display: grid;
		grid-template-columns:
			minmax(0, 0.9fr)
			minmax(0, 1.1fr);

		gap: clamp(38px, 8vw, 100px);

		margin-bottom: 25px;
	}

	.runtime-lead {
		max-width: 600px;

		margin: 0;

		color: var(--color-text);

		font-size: clamp(0.96rem, 1.4vw, 1.13rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.015em;
		line-height: 1.55;
	}

	.runtime-description {
		max-width: 700px;
	}

	.runtime-description p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.76rem;
		line-height: 1.65;
	}

	.runtime-description strong {
		color: var(--color-accent);
	}

	.runtime-description a {
		display: inline-block;

		margin-top: 11px;

		color: var(--color-accent);

		font-size: 0.66rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.runtime-table-wrapper,
	.node-table-wrapper {
		width: 100%;

		overflow-x: auto;
	}

	.runtime-table {
		width: 100%;
		min-width: 760px;

		border-collapse: collapse;
	}

	.runtime-table th,
	.runtime-table td {
		padding: 7px 10px;

		border: 1px solid var(--color-border);

		font-size: 0.65rem;
		line-height: 1.45;

		text-align: left;
	}

	.runtime-table thead th {
		color: var(--color-muted);

		font-weight: var(--font-weight-semibold);
	}

	.runtime-table tbody th {
		width: 165px;

		color: var(--color-text);

		font-weight: var(--font-weight-bold);
	}

	.runtime-table tbody td {
		color: var(--color-text-secondary);
	}

	.runtime-table tbody td:nth-child(2) {
		width: 320px;

		color: var(--color-muted);
	}

	.runtime-table tbody tr:hover {
		background: rgb(244 123 32 / 2%);
	}

	/* --------------------------------------------------
	   Fabric
	-------------------------------------------------- */

	.fabric-layout {
		display: grid;
		grid-template-columns:
			minmax(260px, 0.65fr)
			minmax(0, 1.35fr);

		gap: clamp(40px, 8vw, 100px);
	}

	.fabric-copy {
		max-width: 560px;
	}

	.fabric-lead {
		color: var(--color-text) !important;

		font-size: 0.94rem !important;
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.015em;
	}

	.fabric-copy p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.74rem;
		line-height: 1.65;
	}

	.fabric-copy p + p {
		margin-top: 11px;
	}

	.fabric {
		width: 100%;
	}

	.fabric-runtime {
		width: fit-content;

		padding-bottom: 9px;

		border-bottom: 2px solid var(--color-accent);
	}

	.fabric-runtime span,
	.fabric-resources span {
		display: block;

		margin-bottom: 4px;

		color: var(--color-muted);

		font-size: 0.57rem;
	}

	.fabric-runtime strong {
		color: var(--color-accent);

		font-size: 0.75rem;
	}

	.fabric-line {
		width: 1px;
		height: 20px;

		margin-left: 17px;

		background: var(--color-border-strong);
	}

	.fabric-resources {
		display: grid;
		grid-template-columns:
			repeat(2, minmax(0, 1fr));

		gap: 8px 28px;
	}

	.fabric-resources > div {
		padding-block: 9px;

		border-top: 1px solid var(--color-border);
	}

	.fabric-resources strong {
		display: block;

		color: var(--color-text);

		font-size: 0.68rem;
		line-height: 1.4;
	}

	.fabric-resources small {
		display: block;

		margin-top: 3px;

		color: var(--color-muted);

		font-size: 0.57rem;
		line-height: 1.45;
	}

	.offline-model {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr);

		gap: 14px;

		align-items: center;

		margin-top: 30px;
		padding-top: 20px;

		border-top: 1px solid var(--color-border);
	}

	.offline-model > div > span {
		display: block;

		color: var(--color-muted);

		font-size: 0.58rem;
	}

	.offline-model > div > strong {
		display: block;

		margin-top: 3px;

		color: var(--color-text);

		font-size: 0.67rem;
		line-height: 1.4;
	}

	.offline-model > span {
		color: var(--color-border-strong);
	}

	/* --------------------------------------------------
	   Technology map
	-------------------------------------------------- */

	.technology-list {
		border-top: 1px solid var(--color-border);
	}

	.technology-item {
		display: grid;
		grid-template-columns:
			110px
			minmax(180px, 0.65fr)
			minmax(0, 1.35fr)
			70px;

		gap: 24px;

		align-items: center;

		padding-block: 15px;

		border-bottom: 1px solid var(--color-border);
	}

	.technology-status span {
		color: var(--color-accent);

		font-size: 0.61rem;
		font-weight: var(--font-weight-semibold);
	}

	.technology-status .status-maintained {
		color: var(--color-text);
	}

	.technology-name h3 {
		margin: 0;

		color: var(--color-text);

		font-size: 0.78rem;
		font-weight: var(--font-weight-bold);
	}

	.technology-name p {
		margin: 3px 0 0;

		color: var(--color-muted);

		font-size: 0.59rem;
	}

	.technology-description {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.69rem;
		line-height: 1.55;
	}

	.technology-item > a {
		color: var(--color-accent);

		font-size: 0.62rem;
		font-weight: var(--font-weight-semibold);

		text-align: right;

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* --------------------------------------------------
	   Node
	-------------------------------------------------- */

	.node-intro {
		display: grid;
		grid-template-columns:
			minmax(0, 0.9fr)
			minmax(0, 1.1fr);

		gap: clamp(38px, 8vw, 100px);

		margin-bottom: 25px;
	}

	.node-lead {
		max-width: 600px;

		margin: 0;

		color: var(--color-text);

		font-size: clamp(0.96rem, 1.4vw, 1.13rem);
		font-weight: var(--font-weight-bold);

		line-height: 1.55;
	}

	.node-intro > div p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.75rem;
		line-height: 1.65;
	}

	.node-intro > div p + p {
		margin-top: 10px;
	}

	.node-table {
		width: 100%;
		max-width: 900px;

		border-collapse: collapse;
	}

	.node-table th,
	.node-table td {
		padding: 7px 10px;

		border: 1px solid var(--color-border);

		font-size: 0.65rem;
		line-height: 1.45;
	}

	.node-table thead th:first-child {
		width: 210px;
	}

	.node-table thead th:last-child {
		color: var(--color-accent);

		font-weight: var(--font-weight-bold);

		text-align: center;
	}

	.node-table thead span {
		display: block;

		margin-top: 2px;

		color: var(--color-muted);

		font-size: 0.56rem;
		font-weight: var(--font-weight-normal);
	}

	.node-table tbody th {
		color: var(--color-muted);

		font-weight: var(--font-weight-medium);

		text-align: right;
	}

	.node-table tbody td {
		color: var(--color-text);

		text-align: center;
	}

	.node-table .accent-value {
		color: var(--color-accent);

		font-weight: var(--font-weight-bold);
	}

	.node-note {
		max-width: 900px;

		margin: 10px 0 0;

		color: var(--color-muted);

		font-size: 0.6rem;
		line-height: 1.5;
	}

	/* --------------------------------------------------
	   End
	-------------------------------------------------- */

	.end {
		border-top: 1px solid var(--color-border);
	}

	.end-content {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		gap: 30px;

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: 26px;
	}

	.end-content > p {
		margin: 0;

		color: var(--color-text);

		font-size: 0.72rem;
		font-weight: var(--font-weight-semibold);
	}

	.end-content nav {
		display: flex;
		flex-wrap: wrap;

		gap: 8px 20px;
	}

	.end-content a {
		color: var(--color-accent);

		font-size: 0.66rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* --------------------------------------------------
	   Global links
	-------------------------------------------------- */

	a {
		transition: color var(--transition-fast);
	}

	a:hover {
		color: var(--color-text);
	}

	/* --------------------------------------------------
	   Tablet
	-------------------------------------------------- */

	@media (max-width: 820px) {
		.hero-content,
		.runtime-intro,
		.fabric-layout,
		.node-intro {
			grid-template-columns: 1fr;

			gap: 24px;
		}

		.hero-description {
			max-width: 680px;
		}

		.architecture {
			grid-template-columns: 1fr;

			gap: 6px;
		}

		.architecture article {
			padding-block: 13px;
		}

		.architecture-arrow {
			width: fit-content;

			transform: rotate(90deg);
		}
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.hero-content {
			padding-top: 42px;
		}

		.hero h1 {
			font-size: 1.65rem;
		}

		.hero-description > p {
			font-size: 0.76rem;
		}

		.core-flow {
			grid-template-columns: 1fr;

			gap: 6px;

			margin-top: 31px;
		}

		.flow-arrow {
			width: fit-content;

			transform: rotate(90deg);
		}

		.section-content {
			padding-block: 36px;
		}

		.section-heading {
			margin-bottom: 21px;
		}

		.section-heading h2 {
			font-size: 1rem;
		}

		.runtime-lead,
		.node-lead {
			font-size: 0.91rem;
		}

		.fabric-lead {
			font-size: 0.88rem !important;
		}

		.fabric-resources {
			grid-template-columns: 1fr;
		}

		.offline-model {
			grid-template-columns: 1fr;

			gap: 7px;
		}

		.offline-model > span {
			width: fit-content;

			transform: rotate(90deg);
		}

		.technology-item {
			grid-template-columns: 1fr;

			gap: 6px;

			padding-block: 13px;
		}

		.technology-item > a {
			text-align: left;
		}

		.node-table {
			min-width: 620px;
		}

		.end-content {
			flex-direction: column;

			gap: 10px;

			padding-block: 22px;
		}
	}
</style>
