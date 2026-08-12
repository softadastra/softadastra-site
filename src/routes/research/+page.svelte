<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const researchQuestions = [
		{
			number: '01',
			question:
				'Can software describe what it needs without describing where it must run?',
			context:
				'Application code still contains many assumptions about machines, regions, databases, accelerators, networks and deployment topology.',
			direction:
				'Explore programming models where intent, state and constraints can remain separate from infrastructure selection.'
		},
		{
			number: '02',
			question:
				'Can execution decisions move from application code into an adaptive runtime?',
			context:
				'Placement, scheduling, recovery and resource selection are often decided before execution begins.',
			direction:
				'Study a runtime capable of making and revisiting those decisions from application requirements and current system conditions.'
		},
		{
			number: '03',
			question:
				'Can application state survive movement across infrastructure?',
			context:
				'Moving computation is easier than moving durable, consistent and locally useful application state.',
			direction:
				'Explore state models that support replication, recovery, reconciliation and changing execution locations.'
		},
		{
			number: '04',
			question:
				'Can useful computation continue when connectivity disappears?',
			context:
				'Many distributed systems treat connectivity as a permanent assumption even when real environments cannot provide it.',
			direction:
				'Investigate local-first execution where eligible workloads and state remain available during network partitions.'
		},
		{
			number: '05',
			question:
				'Can heterogeneous hardware become a capability instead of a dependency?',
			context:
				'Applications increasingly depend on specific CPUs, GPUs, accelerators and provider-specific execution environments.',
			direction:
				'Explore capability-driven resource selection where applications describe requirements rather than permanently selecting hardware.'
		},
		{
			number: '06',
			question:
				'How much infrastructure knowledge can actually be removed from applications?',
			context:
				'Complete infrastructure independence may not be possible or desirable for every workload.',
			direction:
				'Measure which decisions can move safely into the runtime and which constraints must remain explicit in application code.'
		}
	];

	const researchAreas = [
		{
			name: 'Programming models',
			text: 'How software expresses intent, state, capabilities and constraints without encoding unnecessary infrastructure decisions.'
		},
		{
			name: 'Adaptive runtimes',
			text: 'How execution systems observe conditions, make decisions and reconsider those decisions while software is running.'
		},
		{
			name: 'Distributed state',
			text: 'How application state can remain durable, available and reconcilable across machines, failures and network partitions.'
		},
		{
			name: 'Placement & scheduling',
			text: 'How computation can be mapped onto available resources using locality, latency, trust, cost and capability constraints.'
		},
		{
			name: 'Reliability',
			text: 'How systems recover from lost responses, failed processes, unavailable machines and partially completed operations.'
		},
		{
			name: 'Local-first systems',
			text: 'How useful computation and state can remain available when remote infrastructure cannot be reached.'
		},
		{
			name: 'Heterogeneous computing',
			text: 'How CPUs, GPUs and future accelerators can be selected as capabilities without becoming permanent application dependencies.'
		},
		{
			name: 'Systems security',
			text: 'How identity, trust and policy constrain where computation and state are permitted to exist.'
		}
	];

	const researchSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Softadastra Research',
		url: 'https://softadastra.com/research',
		description:
			'Softadastra research into infrastructure-independent computing, adaptive runtimes, distributed state, local-first systems and heterogeneous computing.',
		about: [
			'Infrastructure-independent computing',
			'Adaptive runtimes',
			'Distributed systems',
			'Distributed state',
			'Local-first computing',
			'Heterogeneous computing'
		],
		publisher: {
			'@type': 'Organization',
			name: 'Softadastra',
			url: 'https://softadastra.com'
		}
	};
</script>

<svelte:head>
	<title>Research: Softadastra</title>

	<meta
		name="description"
		content="Softadastra researches infrastructure-independent computing, adaptive runtimes, distributed state, local-first systems, reliability and heterogeneous computing."
	/>

	<meta
		name="keywords"
		content="Softadastra research, infrastructure-independent computing, adaptive runtime, distributed systems, distributed state, local-first computing, heterogeneous computing, systems research, C++"
	/>

	<meta name="author" content="Softadastra" />
	<meta name="robots" content="index, follow" />

	<link
		rel="canonical"
		href="https://softadastra.com/research"
	/>

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Softadastra" />

	<meta
		property="og:url"
		content="https://softadastra.com/research"
	/>

	<meta
		property="og:title"
		content="Research: Softadastra"
	/>

	<meta
		property="og:description"
		content="Research toward separating software from the infrastructure that executes it."
	/>

	<meta property="og:image" content="https://softadastra.com/og-logo.png" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:image:alt" content="Softadastra logo" />

	<meta name="twitter:card" content="summary" />

	<meta
		name="twitter:title"
		content="Research: Softadastra"
	/>

	<meta
		name="twitter:description"
		content="Research toward infrastructure-independent computing."
	/>
	<meta name="twitter:image" content="https://softadastra.com/og-logo.png" />

	{@html `<script type="application/ld+json">${JSON.stringify(researchSchema)}</script>`}
</svelte:head>

<main class="research-page">
	<section
		class="hero"
		aria-labelledby="research-title"
	>
		<Container>
			<div class="hero-content">
				<header class="hero-heading">
					<p class="eyebrow">
						Research
					</p>

					<h1 id="research-title">
						Infrastructure-independent computing
						<span>is a research problem.</span>
					</h1>
				</header>

				<div class="hero-context">
					<p>
						Softadastra studies whether software can become less dependent on
						the machines, networks and infrastructure that execute it.
					</p>

					<p>
						The work combines programming models, runtimes, distributed systems,
						state, reliability and heterogeneous computing.
					</p>

					<a
						href="https://github.com/softadastra/runtime"
						target="_blank"
						rel="noopener noreferrer"
					>
						Runtime research implementation ↗
					</a>
				</div>
			</div>

			<div class="research-question">
				<span>
					Fundamental question
				</span>

				<p>
					Can software be separated from the infrastructure that executes it?
				</p>
			</div>
		</Container>
	</section>

	<section class="thesis">
		<Container>
			<div class="thesis-content">
				<aside class="margin-note">
					<span>
						Research thesis
					</span>
				</aside>

				<div class="thesis-main">
					<p>
						Software should describe
						<strong>what it needs to accomplish</strong>,
						not the infrastructure required to accomplish it.
					</p>

					<div
						class="thesis-model"
						aria-label="Softadastra research model"
					>
						<div>
							<span>
								application
							</span>

							<strong>
								Intent
							</strong>
						</div>

						<span aria-hidden="true">
							+
						</span>

						<div>
							<span>
								application
							</span>

							<strong>
								State
							</strong>
						</div>

						<span aria-hidden="true">
							+
						</span>

						<div>
							<span>
								application
							</span>

							<strong>
								Constraints
							</strong>
						</div>

						<span class="model-arrow" aria-hidden="true">
							→
						</span>

						<div class="runtime-model">
							<span>
								system
							</span>

							<strong>
								Adaptive Runtime
							</strong>
						</div>

						<span class="model-arrow" aria-hidden="true">
							→
						</span>

						<div>
							<span>
								result
							</span>

							<strong>
								Execution
							</strong>
						</div>
					</div>

					<p class="thesis-note">
						The research question is not whether infrastructure disappears.
						It is how much infrastructure knowledge can move out of application
						code and into the computing system.
					</p>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="questions"
		aria-labelledby="questions-title"
	>
		<Container>
			<div class="questions-content">
				<header class="questions-heading">
					<div>
						<p>
							Research program
						</p>

						<h2 id="questions-title">
							Questions we are working through
						</h2>
					</div>

					<p>
						These questions are not presented as solved problems. They define
						the technical territory that guides the Runtime and related systems
						work.
					</p>
				</header>

				<div class="question-list">
					{#each researchQuestions as item}
						<article class="question">
							<div class="question-number">
								{item.number}
							</div>

							<div class="question-main">
								<h3>
									{item.question}
								</h3>

								<p>
									{item.context}
								</p>
							</div>

							<div class="question-direction">
								<span>
									Direction
								</span>

								<p>
									{item.direction}
								</p>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section
		class="territory"
		aria-labelledby="territory-title"
	>
		<Container>
			<div class="territory-content">
				<div class="territory-title">
					<p>
						Research territory
					</p>

					<h2 id="territory-title">
						One problem crosses many systems disciplines.
					</h2>

					<p class="territory-description">
						Infrastructure independence cannot be implemented by a single
						abstraction. The Runtime sits at the intersection of several
						technical areas.
					</p>
				</div>

				<div class="territory-list">
					{#each researchAreas as area, index}
						<article>
							<span>
								{String(index + 1).padStart(2, '0')}
							</span>

							<h3>
								{area.name}
							</h3>

							<p>
								{area.text}
							</p>
						</article>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section
		class="method"
		aria-labelledby="method-title"
	>
		<Container>
			<div class="method-content">
				<div class="method-title">
					<span>
						Research method
					</span>

					<h2 id="method-title">
						Build the smallest system that can challenge the idea.
					</h2>
				</div>

				<div class="method-sequence">
					<div>
						<span>
							question
						</span>

						<strong>
							Define the assumption
						</strong>
					</div>

					<span aria-hidden="true">→</span>

					<div>
						<span>
							prototype
						</span>

						<strong>
							Implement it
						</strong>
					</div>

					<span aria-hidden="true">→</span>

					<div>
						<span>
							evidence
						</span>

						<strong>
							Measure behavior
						</strong>
					</div>

					<span aria-hidden="true">→</span>

					<div>
						<span>
							result
						</span>

						<strong>
							Keep or reject it
						</strong>
					</div>
				</div>

				<div class="method-copy">
					<p>
						Softadastra's research is intended to produce executable systems,
						not only architecture diagrams.
					</p>

					<p>
						An idea becomes more useful when it can be implemented, benchmarked,
						broken under failure, observed under constrained resources and
						compared against simpler alternatives.
					</p>

					<p>
						That is why open-source implementation work is part of the research
						process itself.
					</p>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="artifacts"
		aria-labelledby="artifacts-title"
	>
		<Container>
			<div class="artifacts-content">
				<div class="artifacts-intro">
					<p>
						Research artifacts
					</p>

					<h2 id="artifacts-title">
						The research should leave code behind.
					</h2>

					<p>
						We do not currently present a catalogue of academic publications.
						The primary public evidence of the work is the software being
						implemented and maintained.
					</p>
				</div>

				<div class="artifact-links">
					<a
						class="artifact artifact--runtime"
						href="https://github.com/softadastra/runtime"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>
							in progress
						</span>

						<strong>
							Softadastra Runtime
						</strong>

						<p>
							Implementation of the adaptive execution layer at the center of
							the research direction.
						</p>

						<small>
							source ↗
						</small>
					</a>

					<a
						class="artifact"
						href="https://vixcpp.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>
							maintained
						</span>

						<strong>
							Vix.cpp
						</strong>

						<p>
							Open-source C++ developer infrastructure used to build and test
							real systems.
						</p>

						<small>
							vixcpp.com ↗
						</small>
					</a>

					<a
						class="artifact"
						href="/open-source"
					>
						<span>
							public
						</span>

						<strong>
							Open-source systems
						</strong>

						<p>
							Additional build, reliability and runtime systems maintained in
							the open.
						</p>

						<small>
							explore →
						</small>
					</a>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="limits"
		aria-labelledby="limits-title"
	>
		<Container>
			<div class="limits-content">
				<p class="limits-label">
					Research position
				</p>

				<div>
					<h2 id="limits-title">
						We do not assume the thesis is already proven.
					</h2>

					<p>
						Infrastructure-independent computing is a direction we are trying
						to make increasingly practical. Some infrastructure constraints may
						always need to remain explicit. Some runtime decisions may be too
						expensive, unsafe or workload-specific to automate.
					</p>

					<p>
						The purpose of the research is to discover that boundary through
						working systems.
					</p>
				</div>
			</div>
		</Container>
	</section>

	<section class="join-research">
		<Container>
			<div class="join-content">
				<div>
					<p>
						Work on the problem
					</p>

					<h2>
						Some of these questions may take years to answer.
					</h2>
				</div>

				<div class="join-side">
					<p>
						If you work on programming languages, runtimes, distributed systems,
						reliability, state, operating systems, networking or heterogeneous
						computing, we are interested in hearing from you.
					</p>

					<div>
						<a href="mailto:hello@softadastra.com">
							hello@softadastra.com ↗
						</a>

						<a
							href="https://github.com/softadastra"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub ↗
						</a>
					</div>
				</div>
			</div>
		</Container>
	</section>
</main>

<style>
	.research-page {
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
			minmax(0, 1.1fr)
			minmax(280px, 0.65fr);

		gap: clamp(40px, 8vw, 105px);

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-top: clamp(52px, 6vw, 74px);
	}

	.eyebrow {
		margin: 0;

		color: var(--color-accent);

		font-size: 0.66rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.4;
	}

	.hero-heading h1 {
		max-width: 760px;

		margin: 9px 0 0;

		color: var(--color-text);

		font-size: clamp(1.65rem, 3vw, 2.45rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.04em;
		line-height: 1.15;
	}

	.hero-heading h1 span {
		color: var(--color-accent);
	}

	.hero-context {
		align-self: end;

		max-width: 580px;
	}

	.hero-context p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.78rem;
		line-height: 1.65;
	}

	.hero-context p + p {
		margin-top: 9px;
	}

	.hero-context a {
		display: inline-block;

		margin-top: 14px;

		color: var(--color-accent);

		font-size: 0.65rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.research-question {
		display: grid;
		grid-template-columns:
			180px
			minmax(0, 1fr);

		gap: clamp(28px, 6vw, 80px);

		width: 100%;
		max-width: var(--content-width);

		margin: clamp(38px, 5vw, 55px) auto 0;
		padding-bottom: clamp(38px, 5vw, 52px);
	}

	.research-question > span {
		padding-top: 5px;

		color: var(--color-muted);

		font-size: 0.61rem;
		font-weight: var(--font-weight-semibold);
	}

	.research-question p {
		max-width: 850px;

		margin: 0;

		color: var(--color-text);

		font-size: clamp(1rem, 2vw, 1.4rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.025em;
		line-height: 1.5;
	}

	/* --------------------------------------------------
	   Thesis
	-------------------------------------------------- */

	.thesis {
		border-top: 1px solid var(--color-border);
	}

	.thesis-content {
		display: grid;
		grid-template-columns:
			180px
			minmax(0, 1fr);

		gap: clamp(28px, 6vw, 80px);

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(40px, 4.5vw, 56px);
	}

	.margin-note span {
		color: var(--color-muted);

		font-size: 0.61rem;
		font-weight: var(--font-weight-semibold);
	}

	.thesis-main > p:first-child {
		max-width: 950px;

		margin: 0;

		color: var(--color-text);

		font-size: clamp(1rem, 1.7vw, 1.28rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.022em;
		line-height: 1.55;
	}

	.thesis-main > p:first-child strong {
		color: var(--color-accent);
	}

	.thesis-model {
		display: grid;
		grid-template-columns:
			minmax(90px, 1fr)
			auto
			minmax(90px, 1fr)
			auto
			minmax(90px, 1fr)
			auto
			minmax(140px, 1.25fr)
			auto
			minmax(90px, 1fr);

		gap: 9px;

		align-items: center;

		max-width: 980px;

		margin-top: 30px;
	}

	.thesis-model div > span {
		display: block;

		margin-bottom: 4px;

		color: var(--color-muted);

		font-size: 0.55rem;
	}

	.thesis-model div > strong {
		color: var(--color-text);

		font-size: 0.68rem;
	}

	.thesis-model > span {
		color: var(--color-border-strong);

		font-size: 0.7rem;
	}

	.runtime-model {
		padding-block: 7px;

		border-bottom: 2px solid var(--color-accent);
	}

	.runtime-model strong {
		color: var(--color-accent) !important;
	}

	.model-arrow {
		color: var(--color-accent) !important;
	}

	.thesis-note {
		max-width: 850px;

		margin: 27px 0 0;

		color: var(--color-muted);

		font-size: 0.68rem;
		line-height: 1.6;
	}

	/* --------------------------------------------------
	   Questions
	-------------------------------------------------- */

	.questions {
		border-top: 1px solid var(--color-border);
	}

	.questions-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(40px, 4.5vw, 56px);
	}

	.questions-heading {
		display: grid;
		grid-template-columns:
			minmax(0, 0.8fr)
			minmax(280px, 0.55fr);

		gap: clamp(40px, 8vw, 100px);

		align-items: end;

		margin-bottom: 29px;
	}

	.questions-heading > div > p,
	.territory-title > p,
	.method-title > span,
	.artifacts-intro > p:first-child,
	.limits-label,
	.join-content > div:first-child > p {
		margin: 0;

		color: var(--color-accent);

		font-size: 0.61rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.4;
	}

	.questions-heading h2,
	.territory-title h2,
	.method-title h2,
	.artifacts-intro h2,
	.limits-content h2,
	.join-content h2 {
		margin: 7px 0 0;

		color: var(--color-text);

		font-size: clamp(1.05rem, 1.7vw, 1.35rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.025em;
		line-height: 1.45;
	}

	.questions-heading > p {
		margin: 0;

		color: var(--color-muted);

		font-size: 0.67rem;
		line-height: 1.6;
	}

	.question-list {
		border-top: 1px solid var(--color-border);
	}

	.question {
		display: grid;
		grid-template-columns:
			52px
			minmax(0, 1fr)
			minmax(260px, 0.75fr);

		gap: clamp(18px, 4vw, 50px);

		padding-block: 18px;

		border-bottom: 1px solid var(--color-border);
	}

	.question-number {
		padding-top: 2px;

		color: var(--color-accent);

		font-size: 0.61rem;
		font-weight: var(--font-weight-semibold);
	}

	.question-main h3 {
		max-width: 680px;

		margin: 0;

		color: var(--color-text);

		font-size: 0.82rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.5;
	}

	.question-main p {
		max-width: 720px;

		margin: 7px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.69rem;
		line-height: 1.6;
	}

	.question-direction > span {
		display: block;

		color: var(--color-muted);

		font-size: 0.56rem;
		font-weight: var(--font-weight-semibold);
	}

	.question-direction p {
		margin: 6px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.66rem;
		line-height: 1.6;
	}

	/* --------------------------------------------------
	   Research territory
	-------------------------------------------------- */

	.territory {
		border-top: 1px solid var(--color-border);
	}

	.territory-content {
		display: grid;
		grid-template-columns:
			minmax(240px, 0.55fr)
			minmax(0, 1.45fr);

		gap: clamp(44px, 8vw, 110px);

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(42px, 5vw, 62px);
	}

	.territory-description {
		max-width: 520px;

		margin: 13px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.72rem;
		line-height: 1.65;
	}

	.territory-list {
		display: grid;
		grid-template-columns:
			repeat(2, minmax(0, 1fr));

		gap: 27px 45px;
	}

	.territory-list article > span {
		color: var(--color-muted);

		font-size: 0.57rem;
	}

	.territory-list h3 {
		margin: 6px 0 0;

		color: var(--color-text);

		font-size: 0.77rem;
		font-weight: var(--font-weight-bold);
	}

	.territory-list p {
		margin: 6px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.66rem;
		line-height: 1.6;
	}

	/* --------------------------------------------------
	   Method
	-------------------------------------------------- */

	.method {
		border-top: 1px solid var(--color-border);
	}

	.method-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(42px, 5vw, 60px);
	}

	.method-title {
		max-width: 760px;
	}

	.method-sequence {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr);

		gap: 14px;

		align-items: center;

		margin-top: 31px;
	}

	.method-sequence div {
		padding-top: 10px;

		border-top: 1px solid var(--color-border);
	}

	.method-sequence div:first-child {
		border-color: var(--color-accent);
	}

	.method-sequence div > span {
		display: block;

		color: var(--color-muted);

		font-size: 0.56rem;
	}

	.method-sequence div > strong {
		display: block;

		margin-top: 4px;

		color: var(--color-text);

		font-size: 0.68rem;
	}

	.method-sequence > span {
		color: var(--color-border-strong);
	}

	.method-copy {
		display: grid;
		grid-template-columns:
			repeat(3, minmax(0, 1fr));

		gap: clamp(24px, 5vw, 65px);

		margin-top: 30px;
	}

	.method-copy p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.68rem;
		line-height: 1.65;
	}

	/* --------------------------------------------------
	   Artifacts
	-------------------------------------------------- */

	.artifacts {
		border-top: 1px solid var(--color-border);
	}

	.artifacts-content {
		display: grid;
		grid-template-columns:
			minmax(250px, 0.55fr)
			minmax(0, 1.45fr);

		gap: clamp(44px, 8vw, 110px);

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(42px, 5vw, 60px);
	}

	.artifacts-intro > p:last-child {
		max-width: 500px;

		margin: 13px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.7rem;
		line-height: 1.65;
	}

	.artifact-links {
		border-top: 1px solid var(--color-border);
	}

	.artifact {
		display: grid;
		grid-template-columns:
			110px
			minmax(160px, 0.65fr)
			minmax(0, 1.35fr)
			70px;

		gap: 20px;

		align-items: center;

		padding-block: 15px;

		border-bottom: 1px solid var(--color-border);

		text-decoration: none;
	}

	.artifact > span {
		color: var(--color-muted);

		font-size: 0.57rem;
		font-weight: var(--font-weight-semibold);
	}

	.artifact > strong {
		color: var(--color-text);

		font-size: 0.75rem;
	}

	.artifact > p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.64rem;
		line-height: 1.55;
	}

	.artifact > small {
		color: var(--color-accent);

		font-size: 0.59rem;
		font-weight: var(--font-weight-semibold);

		text-align: right;
	}

	.artifact--runtime > span,
	.artifact--runtime > strong {
		color: var(--color-accent);
	}

	/* --------------------------------------------------
	   Limits
	-------------------------------------------------- */

	.limits {
		border-top: 1px solid var(--color-border);
	}

	.limits-content {
		display: grid;
		grid-template-columns:
			180px
			minmax(0, 1fr);

		gap: clamp(28px, 6vw, 80px);

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(42px, 5vw, 60px);
	}

	.limits-content > div {
		max-width: 850px;
	}

	.limits-content h2 {
		margin-top: 0;
	}

	.limits-content div > p {
		margin: 13px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.72rem;
		line-height: 1.65;
	}

	.limits-content div > p + p {
		margin-top: 10px;
	}

	/* --------------------------------------------------
	   Join
	-------------------------------------------------- */

	.join-research {
		border-top: 1px solid var(--color-border);
	}

	.join-content {
		display: grid;
		grid-template-columns:
			minmax(0, 0.9fr)
			minmax(280px, 0.65fr);

		gap: clamp(44px, 8vw, 110px);

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(42px, 5vw, 60px);
	}

	.join-side {
		align-self: end;
	}

	.join-side > p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.71rem;
		line-height: 1.65;
	}

	.join-side > div {
		display: flex;
		flex-wrap: wrap;

		gap: 8px 20px;

		margin-top: 14px;
	}

	.join-side a {
		color: var(--color-accent);

		font-size: 0.64rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
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

	@media (max-width: 860px) {
		.hero-content,
		.questions-heading,
		.territory-content,
		.artifacts-content,
		.join-content {
			grid-template-columns: 1fr;

			gap: 25px;
		}

		.research-question,
		.thesis-content,
		.limits-content {
			grid-template-columns:
				130px
				minmax(0, 1fr);

			gap: 28px;
		}

		.thesis-model {
			grid-template-columns: 1fr;

			gap: 5px;
		}

		.thesis-model > span {
			width: fit-content;

			transform: rotate(90deg);
		}

		.method-sequence {
			grid-template-columns: 1fr;

			gap: 7px;
		}

		.method-sequence > span {
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

		.hero-heading h1 {
			font-size: 1.6rem;
		}

		.hero-context p {
			font-size: 0.74rem;
		}

		.research-question,
		.thesis-content,
		.limits-content {
			grid-template-columns: 1fr;

			gap: 13px;
		}

		.research-question {
			margin-top: 31px;
		}

		.research-question p {
			font-size: 0.96rem;
		}

		.question {
			grid-template-columns:
				34px
				minmax(0, 1fr);

			gap: 10px;
		}

		.question-direction {
			grid-column: 2;
		}

		.question-main h3 {
			font-size: 0.77rem;
		}

		.question-main p,
		.question-direction p {
			font-size: 0.65rem;
		}

		.territory-list {
			grid-template-columns: 1fr;

			gap: 21px;
		}

		.method-copy {
			grid-template-columns: 1fr;

			gap: 12px;
		}

		.artifact {
			grid-template-columns: 1fr;

			gap: 5px;

			padding-block: 13px;
		}

		.artifact > small {
			text-align: left;
		}

		.join-content h2,
		.limits-content h2,
		.questions-heading h2,
		.territory-title h2,
		.method-title h2,
		.artifacts-intro h2 {
			font-size: 1rem;
		}
	}
</style>
