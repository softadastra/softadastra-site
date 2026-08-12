<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const work = [
		{
			status: 'maintained',
			name: 'Vix.cpp',
			type: 'Open-source C++ developer platform',
			description:
				'Vix.cpp provides developer tooling and foundations for building modern C++ systems. It is maintained by Softadastra and represents an important part of our existing open-source work.',
			href: 'https://vixcpp.com',
			external: true
		},
		{
			status: 'in progress',
			name: 'Softadastra Runtime',
			type: 'Intent-driven adaptive runtime',
			description:
				'The Runtime is the core execution technology behind our infrastructure-independent computing direction. It is being developed to progressively move infrastructure decisions out of application code and into the computing system.',
			href: 'https://github.com/softadastra/runtime',
			external: true
		},
		{
			status: 'planned',
			name: 'Softadastra Node',
			type: 'Reference computing hardware',
			description:
				'A future low-power reference machine designed to run the Softadastra Runtime and participate in a computing fabric without becoming a hardware dependency for applications.',
			href: '/technology',
			external: false
		}
	];

	const researchAreas = [
		'Programming models',
		'Adaptive runtimes',
		'Distributed systems',
		'Distributed state',
		'Scheduling and placement',
		'Offline-first computing',
		'Failure recovery',
		'Reconciliation',
		'Networking',
		'Systems security',
		'Heterogeneous computing',
		'Hardware acceleration',
		'C++ systems engineering'
	];

	const principles = [
		{
			number: '01',
			title: 'Software should express intent.',
			description:
				'Applications should describe what they need to accomplish, the state they require and the constraints that must be respected.'
		},
		{
			number: '02',
			title: 'Infrastructure should satisfy it.',
			description:
				'Placement, scheduling, resources, recovery and infrastructure selection should increasingly become responsibilities of the computing system.'
		},
		{
			number: '03',
			title: 'Infrastructure should remain replaceable.',
			description:
				'Applications should not have to be permanently redesigned because execution moves between local machines, edge systems, cloud infrastructure or future hardware.'
		},
		{
			number: '04',
			title: 'Useful systems should survive disconnection.',
			description:
				'Where application requirements permit it, loss of Internet connectivity should not automatically mean loss of computation, state or usefulness.'
		},
		{
			number: '05',
			title: 'The architecture must work on ordinary hardware.',
			description:
				'Infrastructure-independent computing should not require expensive proprietary machines. Efficiency and hardware diversity are part of the research problem.'
		}
	];

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Softadastra',
		url: 'https://softadastra.com',
		description:
			'Softadastra is a computing research and technology company working toward infrastructure-independent computing.',
		sameAs: [
			'https://github.com/softadastra',
			'https://vixcpp.com'
		],
		knowsAbout: [
			'Infrastructure-independent computing',
			'Adaptive runtimes',
			'Distributed systems',
			'C++',
			'Offline-first computing',
			'Edge computing',
			'Heterogeneous computing'
		]
	};
</script>

<svelte:head>
	<title>About Softadastra: Computing Research and Technology</title>

	<meta
		name="description"
		content="Softadastra is a computing research and technology company building Vix.cpp, the Softadastra Runtime and infrastructure-independent computing systems."
	/>

	<meta
		name="keywords"
		content="Softadastra, infrastructure-independent computing, Softadastra Runtime, Vix.cpp, distributed systems, adaptive runtime, C++, systems research, offline-first computing, edge computing, computing infrastructure"
	/>

	<meta name="author" content="Softadastra" />
	<meta name="robots" content="index, follow" />

	<link
		rel="canonical"
		href="https://softadastra.com/company"
	/>

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Softadastra" />
	<meta
		property="og:url"
		content="https://softadastra.com/company"
	/>

	<meta
		property="og:title"
		content="About Softadastra: Computing Research and Technology"
	/>

	<meta
		property="og:description"
		content="Softadastra is working toward infrastructure-independent computing through open-source developer technology, adaptive runtimes and systems research."
	/>

	<meta property="og:image" content="https://softadastra.com/og-logo.png" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:image:alt" content="Softadastra logo" />

	<meta name="twitter:card" content="summary" />

	<meta
		name="twitter:title"
		content="About Softadastra"
	/>

	<meta
		name="twitter:description"
		content="Computing research and technology toward infrastructure-independent computing."
	/>
	<meta name="twitter:image" content="https://softadastra.com/og-logo.png" />

	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
</svelte:head>

<main class="company-page">
	<section
		class="hero"
		aria-labelledby="company-title"
	>
		<Container>
			<div class="hero-content">
				<p class="eyebrow">
					Company
				</p>

				<h1 id="company-title">
					Softadastra
				</h1>

				<p class="hero-lead">
					A computing research and technology company working toward
					<strong>infrastructure-independent computing.</strong>
				</p>

				<p class="hero-description">
					We research and build systems that progressively separate software
					from the infrastructure executing it.
				</p>

				<div
					class="hero-direction"
					aria-label="Softadastra direction"
				>
					<span>software</span>
					<span aria-hidden="true">→</span>
					<strong>intent</strong>
					<span aria-hidden="true">→</span>
					<strong>runtime</strong>
					<span aria-hidden="true">→</span>
					<span>computing fabric</span>
					<span aria-hidden="true">→</span>
					<span>infrastructure</span>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="question-title"
	>
		<Container>
			<div class="section-content statement-section">
				<div class="section-heading">
					<p class="section-index">
						01
					</p>

					<h2 id="question-title">
						The question
					</h2>
				</div>

				<div class="statement">
					<p class="statement-question">
						Can software be separated from the infrastructure that executes it?
					</p>

					<div class="statement-copy">
						<p>
							Modern applications are deeply coupled to infrastructure.
							Developers choose machines, regions, databases, replication
							strategies, accelerators, recovery systems, deployment topology
							and cloud services long before an application begins executing.
						</p>

						<p>
							Softadastra is exploring a different computing model: applications
							express their requirements while the computing system determines
							how available infrastructure can satisfy them.
						</p>

						<p>
							This is the long-term problem around which the company is being
							built.
						</p>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="work-title"
	>
		<Container>
			<div class="section-content">
				<div class="section-heading">
					<p class="section-index">
						02
					</p>

					<h2 id="work-title">
						What we build
					</h2>
				</div>

				<p class="section-intro">
					Softadastra combines existing open-source engineering with longer-term
					runtime and computing systems research.
				</p>

				<div class="work-list">
					{#each work as project}
						<article class="work-item">
							<div class="work-meta">
								<span class:status-active={project.status === 'maintained'}>
									{project.status}
								</span>
							</div>

							<div class="work-name">
								<h3>
									{project.name}
								</h3>

								<p>
									{project.type}
								</p>
							</div>

							<div class="work-description">
								<p>
									{project.description}
								</p>

								<a
									href={project.href}
									target={project.external ? '_blank' : undefined}
									rel={project.external ? 'noopener noreferrer' : undefined}
								>
									explore {project.name}
									<span aria-hidden="true">
										{project.external ? '↗' : '→'}
									</span>
								</a>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="vix-title"
	>
		<Container>
			<div class="section-content split-section">
				<div class="section-heading">
					<p class="section-index">
						03
					</p>

					<h2 id="vix-title">
						We already maintain software
					</h2>
				</div>

				<div class="split-content">
					<div class="large-copy">
						<p>
							<a
								href="https://vixcpp.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vix.cpp ↗
							</a>
							is Softadastra's open-source C++ developer platform.
						</p>
					</div>

					<div class="body-copy">
						<p>
							Our long-term research does not begin from a presentation or a
							hardware concept. We already spend time building and maintaining
							developer infrastructure.
						</p>

						<p>
							Vix.cpp gives us a practical environment for working on C++ tooling,
							build systems, developer experience, runtime integration and future
							programming models.
						</p>

						<p>
							It also keeps Softadastra connected to a simple requirement:
							research must eventually become software developers can actually
							use.
						</p>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="runtime-title"
	>
		<Container>
			<div class="section-content split-section">
				<div class="section-heading">
					<p class="section-index">
						04
					</p>

					<h2 id="runtime-title">
						The Runtime is the center
					</h2>
				</div>

				<div class="split-content">
					<div class="large-copy">
						<p>
							Intent + State + Constraints
							<span>→</span>
							Softadastra Runtime
							<span>→</span>
							Computing Fabric
						</p>
					</div>

					<div class="body-copy">
						<p>
							The
							<a
								href="https://github.com/softadastra/runtime"
								target="_blank"
								rel="noopener noreferrer"
							>
								Softadastra Runtime ↗
							</a>
							is currently in development.
						</p>

						<p>
							It is the execution layer where our research is intended to become
							executable technology.
						</p>

						<p>
							Over time, it is intended to take increasing responsibility for
							placement, scheduling, distributed state, replication, recovery,
							reconciliation, trust, resource selection and adaptation.
						</p>

						<p class="development-note">
							These are engineering and research targets. Runtime capabilities
							are being implemented and validated progressively.
						</p>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="principles-title"
	>
		<Container>
			<div class="section-content">
				<div class="section-heading">
					<p class="section-index">
						05
					</p>

					<h2 id="principles-title">
						Principles
					</h2>
				</div>

				<div class="principles">
					{#each principles as principle}
						<article class="principle">
							<span class="principle-number">
								{principle.number}
							</span>

							<h3>
								{principle.title}
							</h3>

							<p>
								{principle.description}
							</p>
						</article>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="research-title"
	>
		<Container>
			<div class="section-content research-section">
				<div class="section-heading">
					<p class="section-index">
						06
					</p>

					<h2 id="research-title">
						Research territory
					</h2>
				</div>

				<div class="research-layout">
					<p class="research-copy">
						Infrastructure-independent computing crosses multiple areas of
						computer science and systems engineering. We do not expect a single
						abstraction to solve it.
					</p>

					<ul class="research-areas">
						{#each researchAreas as area}
							<li>
								<span aria-hidden="true">+</span>
								{area}
							</li>
						{/each}
					</ul>
				</div>

				<a
					class="inline-link"
					href="/research"
				>
					read about our research direction →
				</a>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="hardware-title"
	>
		<Container>
			<div class="section-content split-section">
				<div class="section-heading">
					<p class="section-index">
						07
					</p>

					<h2 id="hardware-title">
						Hardware without hardware lock-in
					</h2>
				</div>

				<div class="split-content">
					<div class="large-copy">
						<p>
							The machine should be replaceable.
							<strong>The application should remain.</strong>
						</p>
					</div>

					<div class="body-copy">
						<p>
							Softadastra Node is our planned reference hardware direction: a
							small, efficient computing resource designed around the
							Softadastra Runtime.
						</p>

						<p>
							It is deliberately not the foundation of the architecture.
							Softadastra software should also be able to use existing local
							machines, edge infrastructure, cloud resources and future
							hardware.
						</p>

						<p>
							The purpose of reference hardware is to demonstrate what the
							Runtime can do on a known, low-cost environment, not to create a
							new infrastructure dependency.
						</p>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="approach-title"
	>
		<Container>
			<div class="section-content">
				<div class="section-heading">
					<p class="section-index">
						08
					</p>

					<h2 id="approach-title">
						How we are approaching it
					</h2>
				</div>

				<div class="approach">
					<div>
						<strong>Build</strong>

						<p>
							Turn research questions into small working systems instead of
							keeping the architecture theoretical.
						</p>
					</div>

					<span aria-hidden="true">→</span>

					<div>
						<strong>Measure</strong>

						<p>
							Test behavior, performance, resource consumption, recovery and
							failure modes.
						</p>
					</div>

					<span aria-hidden="true">→</span>

					<div>
						<strong>Learn</strong>

						<p>
							Remove assumptions that fail and refine the programming and
							execution models.
						</p>
					</div>

					<span aria-hidden="true">→</span>

					<div>
						<strong>Expand</strong>

						<p>
							Move progressively from individual runtime capabilities toward a
							larger computing fabric.
						</p>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="open-title"
	>
		<Container>
			<div class="section-content split-section">
				<div class="section-heading">
					<p class="section-index">
						09
					</p>

					<h2 id="open-title">
						Open development
					</h2>
				</div>

				<div class="split-content">
					<div class="large-copy">
						<p>
							Some of the best way to understand Softadastra is to
							<strong>read the code.</strong>
						</p>
					</div>

					<div class="body-copy">
						<p>
							Vix.cpp is open source and the Softadastra Runtime is being
							developed publicly on GitHub.
						</p>

						<p>
							That gives developers, researchers and potential collaborators a
							way to evaluate the technical direction from actual work rather
							than only company descriptions.
						</p>

						<div class="text-links">
							<a
								href="https://github.com/softadastra"
								target="_blank"
								rel="noopener noreferrer"
							>
								github.com/softadastra ↗
							</a>

							<a
								href="https://vixcpp.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								vixcpp.com ↗
							</a>

							<a
								href="https://github.com/softadastra/runtime"
								target="_blank"
								rel="noopener noreferrer"
							>
								runtime repository ↗
							</a>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section"
		aria-labelledby="company-model-title"
	>
		<Container>
			<div class="section-content">
				<div class="section-heading">
					<p class="section-index">
						10
					</p>

					<h2 id="company-model-title">
						Building a company around a long-term problem
					</h2>
				</div>

				<div class="company-model">
					<p class="company-model-lead">
						Softadastra is being built around a technical thesis rather than a
						single temporary product category.
					</p>

					<div class="company-model-copy">
						<p>
							The immediate work is concrete: maintain developer technology,
							build the Runtime, validate individual capabilities and test them
							on real hardware.
						</p>

						<p>
							The larger opportunity is a computing layer capable of spanning
							machines and infrastructure without forcing applications to encode
							every infrastructure decision themselves.
						</p>

						<p>
							If successful, that direction can become useful across developer
							infrastructure, edge systems, unreliable networks, local
							computing, cloud environments and new classes of hardware.
						</p>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="section final-section"
		aria-labelledby="collaborate-title"
	>
		<Container>
			<div class="section-content">
				<div class="section-heading">
					<p class="section-index">
						11
					</p>

					<h2 id="collaborate-title">
						Work with Softadastra
					</h2>
				</div>

				<div class="collaborate">
					<div class="collaborate-intro">
						<p>
							We are interested in people and organizations who care about
							difficult computing systems problems.
						</p>
					</div>

					<div class="collaborate-groups">
						<div>
							<h3>
								Developers & researchers
							</h3>

							<p>
								Explore the repositories, challenge the architecture, contribute
								code and work with us on the systems problems behind the
								Runtime.
							</p>

							<a
								href="https://github.com/softadastra"
								target="_blank"
								rel="noopener noreferrer"
							>
								explore the open source ↗
							</a>
						</div>

						<div>
							<h3>
								Investors & partners
							</h3>

							<p>
								If you are interested in long-term computing infrastructure,
								developer technology, edge computing or adaptive runtime
								systems, we are open to conversations about the direction.
							</p>

							<a href="mailto:softadastra@gmail.com">
								softadastra@gmail.com ↗
							</a>
						</div>
					</div>
				</div>

				<p class="final-principle">
					Software expresses intent.
					<strong>
						Infrastructure satisfies it.
					</strong>
				</p>
			</div>
		</Container>
	</section>
</main>

<style>
	.company-page {
		background: var(--color-white);
		color: var(--color-text);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Hero
	-------------------------------------------------- */

	.hero {
		background: var(--color-white);
	}

	.hero-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(70px, 9vw, 120px);
	}

	.eyebrow,
	.section-index {
		margin: 0;

		color: var(--color-accent);

		font-size: 0.68rem;
		font-weight: var(--font-weight-semibold);

		letter-spacing: 0.04em;
		line-height: 1.4;
	}

	.hero h1 {
		margin: 8px 0 0;

		color: var(--color-text);

		font-size: clamp(2.4rem, 6vw, 5.5rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.055em;
		line-height: 0.98;
	}

	.hero-lead {
		max-width: 930px;

		margin: clamp(26px, 4vw, 44px) 0 0;

		color: var(--color-text);

		font-size: clamp(1.15rem, 2.3vw, 1.8rem);
		font-weight: var(--font-weight-normal);

		letter-spacing: -0.025em;
		line-height: 1.45;
	}

	.hero-lead strong {
		color: var(--color-accent);

		font-weight: var(--font-weight-bold);
	}

	.hero-description {
		max-width: 780px;

		margin: 15px 0 0;

		color: var(--color-text-secondary);

		font-size: clamp(0.86rem, 1.1vw, 0.98rem);
		line-height: 1.65;
	}

	.hero-direction {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		gap: 6px 10px;

		margin-top: 32px;

		color: var(--color-muted);

		font-size: 0.73rem;
		line-height: 1.5;
	}

	.hero-direction strong {
		color: var(--color-accent);
	}

	.hero-direction > span:nth-child(even) {
		color: var(--color-border-strong);
	}

	/* --------------------------------------------------
	   Sections
	-------------------------------------------------- */

	.section {
		position: relative;
	}

	.section::before {
		position: absolute;

		top: 0;
		right: var(--page-padding);
		left: var(--page-padding);

		height: 1px;

		background: var(--color-border);

		content: '';
	}

	.section-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: var(--section-padding);
	}

	.section-heading {
		display: flex;
		align-items: baseline;

		gap: 12px;

		margin-bottom: 27px;
	}

	.section-heading h2 {
		margin: 0;

		color: var(--color-text);

		font-size: clamp(1.18rem, 1.7vw, 1.5rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.022em;
		line-height: 1.4;
	}

	.section-intro {
		max-width: 850px;

		margin: -10px 0 29px;

		color: var(--color-text-secondary);

		font-size: 0.88rem;
		line-height: 1.65;
	}

	/* --------------------------------------------------
	   Question
	-------------------------------------------------- */

	.statement {
		display: grid;
		grid-template-columns:
			minmax(0, 0.85fr)
			minmax(0, 1.15fr);

		gap: clamp(42px, 8vw, 110px);
	}

	.statement-question {
		margin: 0;

		color: var(--color-accent);

		font-size: clamp(1.1rem, 2vw, 1.45rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.025em;
		line-height: 1.5;
	}

	.statement-copy,
	.body-copy {
		max-width: 720px;
	}

	.statement-copy p,
	.body-copy p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.86rem;
		line-height: 1.65;
	}

	.statement-copy p + p,
	.body-copy p + p {
		margin-top: 13px;
	}

	/* --------------------------------------------------
	   Work
	-------------------------------------------------- */

	.work-list {
		border-top: 1px solid var(--color-border);
	}

	.work-item {
		display: grid;
		grid-template-columns:
			140px
			minmax(220px, 0.75fr)
			minmax(0, 1.25fr);

		gap: 28px;

		padding-block: 19px;

		border-bottom: 1px solid var(--color-border);
	}

	.work-meta span {
		color: var(--color-accent);

		font-size: 0.65rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.4;
	}

	.work-meta .status-active {
		color: var(--color-text);
	}

	.work-name h3 {
		margin: 0;

		color: var(--color-text);

		font-size: 0.91rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.4;
	}

	.work-name p {
		margin: 4px 0 0;

		color: var(--color-muted);

		font-size: 0.66rem;
		line-height: 1.45;
	}

	.work-description p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.78rem;
		line-height: 1.6;
	}

	.work-description a,
	.body-copy a,
	.large-copy a,
	.inline-link,
	.text-links a,
	.collaborate-groups a {
		display: inline-block;

		margin-top: 10px;

		color: var(--color-accent);

		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;
	}

	.work-description a {
		font-size: 0.68rem;
	}

	/* --------------------------------------------------
	   Split sections
	-------------------------------------------------- */

	.split-content {
		display: grid;
		grid-template-columns:
			minmax(0, 0.9fr)
			minmax(0, 1.1fr);

		gap: clamp(42px, 8vw, 110px);
	}

	.large-copy p {
		max-width: 620px;

		margin: 0;

		color: var(--color-text);

		font-size: clamp(1rem, 1.7vw, 1.27rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;
		line-height: 1.5;
	}

	.large-copy span {
		color: var(--color-muted);
	}

	.large-copy strong {
		color: var(--color-accent);
	}

	.body-copy a {
		margin-top: 0;
	}

	.development-note {
		color: var(--color-muted) !important;

		font-size: 0.72rem !important;
	}

	/* --------------------------------------------------
	   Principles
	-------------------------------------------------- */

	.principles {
		display: grid;
		grid-template-columns:
			repeat(2, minmax(0, 1fr));

		gap: 28px clamp(36px, 7vw, 90px);

		max-width: 1050px;
	}

	.principle-number {
		display: block;

		margin-bottom: 8px;

		color: var(--color-accent);

		font-size: 0.63rem;
		font-weight: var(--font-weight-semibold);
	}

	.principle h3 {
		margin: 0;

		color: var(--color-text);

		font-size: 0.88rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.45;
	}

	.principle p {
		margin: 7px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.76rem;
		line-height: 1.6;
	}

	/* --------------------------------------------------
	   Research
	-------------------------------------------------- */

	.research-layout {
		display: grid;
		grid-template-columns:
			minmax(0, 0.85fr)
			minmax(300px, 1.15fr);

		gap: clamp(40px, 8vw, 110px);
	}

	.research-copy {
		max-width: 620px;

		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.88rem;
		line-height: 1.65;
	}

	.research-areas {
		display: grid;
		grid-template-columns:
			repeat(2, minmax(0, 1fr));

		gap: 7px 24px;

		margin: 0;
		padding: 0;

		list-style: none;
	}

	.research-areas li {
		display: flex;

		gap: 8px;

		color: var(--color-text-secondary);

		font-size: 0.72rem;
		line-height: 1.45;
	}

	.research-areas li span {
		color: var(--color-accent);

		font-weight: var(--font-weight-bold);
	}

	.inline-link {
		margin-top: 24px;

		font-size: 0.72rem;
	}

	/* --------------------------------------------------
	   Approach
	-------------------------------------------------- */

	.approach {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr);

		gap: 18px;

		align-items: start;
	}

	.approach > span {
		padding-top: 3px;

		color: var(--color-border-strong);
	}

	.approach strong {
		color: var(--color-accent);

		font-size: 0.8rem;
	}

	.approach p {
		margin: 7px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.72rem;
		line-height: 1.6;
	}

	/* --------------------------------------------------
	   Open development
	-------------------------------------------------- */

	.text-links {
		display: flex;
		flex-wrap: wrap;

		gap: 6px 22px;

		margin-top: 17px;
	}

	.text-links a {
		margin: 0;

		font-size: 0.7rem;
	}

	/* --------------------------------------------------
	   Company model
	-------------------------------------------------- */

	.company-model {
		display: grid;
		grid-template-columns:
			minmax(0, 0.9fr)
			minmax(0, 1.1fr);

		gap: clamp(42px, 8vw, 110px);
	}

	.company-model-lead {
		max-width: 640px;

		margin: 0;

		color: var(--color-text);

		font-size: clamp(1rem, 1.7vw, 1.25rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;
		line-height: 1.5;
	}

	.company-model-copy p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.84rem;
		line-height: 1.65;
	}

	.company-model-copy p + p {
		margin-top: 13px;
	}

	/* --------------------------------------------------
	   Collaborate
	-------------------------------------------------- */

	.collaborate {
		display: grid;
		grid-template-columns:
			minmax(0, 0.75fr)
			minmax(0, 1.25fr);

		gap: clamp(42px, 8vw, 110px);
	}

	.collaborate-intro p {
		max-width: 580px;

		margin: 0;

		color: var(--color-text);

		font-size: clamp(1rem, 1.6vw, 1.2rem);
		font-weight: var(--font-weight-bold);

		line-height: 1.55;
	}

	.collaborate-groups {
		display: grid;
		grid-template-columns:
			repeat(2, minmax(0, 1fr));

		gap: 38px;
	}

	.collaborate-groups h3 {
		margin: 0;

		color: var(--color-text);

		font-size: 0.82rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.4;
	}

	.collaborate-groups p {
		margin: 8px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.74rem;
		line-height: 1.6;
	}

	.collaborate-groups a {
		font-size: 0.68rem;
	}

	.final-principle {
		margin: 34px 0 0;

		color: var(--color-text);

		font-size: 0.8rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.5;
	}

	.final-principle strong {
		color: var(--color-accent);
	}

	/* --------------------------------------------------
	   Links
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
		.statement,
		.split-content,
		.research-layout,
		.company-model,
		.collaborate {
			grid-template-columns: 1fr;

			gap: 28px;
		}

		.work-item {
			grid-template-columns:
				110px
				minmax(180px, 0.8fr)
				minmax(0, 1.2fr);

			gap: 20px;
		}

		.approach {
			grid-template-columns: 1fr;

			gap: 9px;
		}

		.approach > span {
			width: fit-content;

			padding: 0;

			transform: rotate(90deg);
		}
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.hero-content {
			padding-block: 55px 50px;
		}

		.hero h1 {
			font-size: clamp(2.35rem, 14vw, 4rem);
		}

		.hero-lead {
			margin-top: 24px;

			font-size: 1.02rem;
		}

		.hero-description {
			font-size: 0.79rem;
		}

		.hero-direction {
			gap: 4px 7px;

			margin-top: 24px;

			font-size: 0.64rem;
		}

		.section-heading {
			gap: 9px;

			margin-bottom: 22px;
		}

		.section-heading h2 {
			font-size: 1.06rem;
		}

		.section-index {
			font-size: 0.6rem;
		}

		.statement-question {
			font-size: 1rem;
		}

		.statement-copy p,
		.body-copy p {
			font-size: 0.79rem;
		}

		.work-item {
			grid-template-columns: 1fr;

			gap: 9px;

			padding-block: 16px;
		}

		.work-name p {
			font-size: 0.62rem;
		}

		.work-description p {
			font-size: 0.73rem;
		}

		.principles {
			grid-template-columns: 1fr;

			gap: 22px;
		}

		.research-areas {
			grid-template-columns: 1fr;

			gap: 6px;
		}

		.collaborate-groups {
			grid-template-columns: 1fr;

			gap: 26px;
		}

		.large-copy p,
		.company-model-lead,
		.collaborate-intro p {
			font-size: 0.95rem;
		}

		.company-model-copy p {
			font-size: 0.78rem;
		}

		.section-intro,
		.research-copy {
			font-size: 0.79rem;
		}

		.final-principle {
			margin-top: 28px;

			font-size: 0.72rem;
		}
	}
</style>
