<script lang="ts">
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	const principles = [
		{
			number: '01',
			title: 'Mission',
			value: 'Make computing infrastructure-independent.'
		},
		{
			number: '02',
			title: 'Research Question',
			value: 'Can software be separated from the infrastructure that executes it?'
		},
		{
			number: '03',
			title: 'Core Principle',
			value:
				'Software should describe what it needs to accomplish, not the infrastructure required to accomplish it.'
		},
		{
			number: '04',
			title: 'Technological Direction',
			value: 'Intent-driven adaptive computing.'
		}
	];

	const disciplines = [
		'C++',
		'Distributed systems',
		'Operating systems',
		'Compilers',
		'Programming languages',
		'Runtimes',
		'Databases',
		'Networking',
		'Fault tolerance',
		'Security',
		'Edge computing',
		'Heterogeneous computing',
		'Performance engineering',
		'Hardware acceleration'
	];

	const technology = [
		{
			name: 'Vix.cpp',
			role: 'Developer platform',
			description:
				'An open-source C++ developer platform and one way developers can interact with Softadastra technologies.'
		},
		{
			name: 'Softadastra Engine',
			role: 'Runtime research',
			description:
				'Runtime foundations for resilient, offline-first and progressively infrastructure-independent applications.'
		},
		{
			name: 'Softadastra Cloud',
			role: 'Hosted infrastructure',
			description:
				'Connected infrastructure for the ecosystem without making the architecture dependent on the cloud.'
		}
	];
</script>

<svelte:head>
	<title>Company — Softadastra</title>
	<meta
		name="description"
		content="Softadastra is a computing research and technology company working toward infrastructure-independent computing."
	/>
</svelte:head>

<section class="company-hero">
	<Container>
		<div class="hero-layout">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Company</span>
			</div>

			<div class="hero-content">
				<p class="eyebrow">Softadastra</p>

				<h1>
					A computing research
					<span>and technology company.</span>
				</h1>

				<p class="hero-description">
					Softadastra exists to investigate a long-term computing problem:
					how software can become progressively independent from the machines,
					networks, clouds and hardware configurations that execute it.
				</p>
			</div>
		</div>
	</Container>
</section>

<section class="identity" aria-labelledby="identity-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>What Defines Us</span>
			</div>

			<div>
				<p class="section-kicker">One mission</p>

				<h2 id="identity-title">
					Products may change.
					<span>The mission should not.</span>
				</h2>

				<p class="section-description">
					Programming languages will evolve. Hardware will change. Architectures and
					products may be replaced. Softadastra is organized around a question designed
					to remain relevant beyond any individual technology.
				</p>
			</div>
		</div>

		<div class="principles">
			{#each principles as principle}
				<article class="principle">
					<span class="principle-number">{principle.number}</span>

					<div>
						<p class="principle-title">{principle.title}</p>
						<h3>{principle.value}</h3>
					</div>
				</article>
			{/each}
		</div>
	</Container>
</section>

<section class="direction" aria-labelledby="direction-title">
	<Container>
		<div class="direction-layout">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>One Direction</span>
			</div>

			<div class="direction-content">
				<h2 id="direction-title">
					Many technologies.
					<span>One test.</span>
				</h2>

				<p>
					Softadastra may build different technologies throughout its lifetime.
					They should not become unrelated products living under the same name.
				</p>

				<div class="mission-test">
					<span>Every major technology should answer</span>

					<strong>
						Does this remove another infrastructure constraint from software?
					</strong>

					<p>
						If it does, it belongs to the mission. If it does not, we should question
						why Softadastra is building it.
					</p>
				</div>
			</div>
		</div>
	</Container>
</section>

<section class="technology" aria-labelledby="technology-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Technology</span>
			</div>

			<div>
				<h2 id="technology-title">
					Technology is a means
					<span>to pursue the mission.</span>
				</h2>

				<p class="section-description">
					Vix.cpp, Softadastra Engine and Softadastra Cloud represent different parts
					of the same long-term technical direction.
				</p>
			</div>
		</div>

		<div class="technology-list">
			{#each technology as item}
				<article class="technology-item">
					<div>
						<p class="technology-role">{item.role}</p>
						<h3>{item.name}</h3>
					</div>

					<p>{item.description}</p>
				</article>
			{/each}
		</div>

		<div class="technology-action">
			<ButtonLink href="/technology" variant="secondary">
				Explore the technology
			</ButtonLink>
		</div>
	</Container>
</section>

<section class="why" aria-labelledby="why-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Why This Matters</span>
			</div>

			<div>
				<h2 id="why-title">
					Infrastructure dependence is
					<span>more than developer inconvenience.</span>
				</h2>

				<p class="section-description">
					Many systems operate in environments where permanent connectivity,
					centralized infrastructure or a single cloud provider cannot safely be assumed.
					A more infrastructure-independent computing foundation could eventually serve
					many different industries without requiring a separate platform for each one.
				</p>
			</div>
		</div>

		<div class="why-statement">
			<span class="why-mark" aria-hidden="true"></span>

			<p>
				The deeper opportunity is not to build one product for every industry.
				<strong>
					It is to build a computing foundation that many of them can use.
				</strong>
			</p>
		</div>
	</Container>
</section>

<section class="people" aria-labelledby="people-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>People</span>
			</div>

			<div>
				<p class="section-kicker">Work on fundamental problems</p>

				<h2 id="people-title">
					We are interested in people who want
					<span>to understand the underlying systems.</span>
				</h2>

				<p class="section-description">
					Not only applications. Not only another SaaS product. Not only another
					developer tool. The underlying computing systems themselves.
				</p>
			</div>
		</div>

		<div class="disciplines">
			{#each disciplines as discipline}
				<div class="discipline">
					<span aria-hidden="true"></span>
					{discipline}
				</div>
			{/each}
		</div>
	</Container>
</section>

<section class="company-close">
	<Container narrow>
		<div class="close-content">
			<span class="close-mark" aria-hidden="true"></span>

			<p class="close-label">Our time horizon</p>

			<h2>
				The questions are difficult.
				<span>That is why they are worth working on.</span>
			</h2>

			<p>
				Softadastra is pursuing a long-term research direction. Individual products,
				architectures and technologies will evolve as we learn. The mission is intended
				to remain.
			</p>

			<div class="close-actions">
				<ButtonLink href="/research" variant="primary">
					Explore the research
				</ButtonLink>

				<ButtonLink
					href="mailto:hello@softadastra.com"
					variant="secondary"
				>
					Join Softadastra
				</ButtonLink>
			</div>
		</div>
	</Container>
</section>

<style>
	.company-hero,
	.identity,
	.direction,
	.technology,
	.why,
	.people,
	.company-close {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.company-hero :global(.container) {
		padding-block: clamp(104px, 13vw, 176px);
	}

	.hero-layout,
	.section-heading,
	.direction-layout {
		display: grid;
		grid-template-columns: minmax(160px, 0.35fr) minmax(0, 1fr);
		gap: clamp(48px, 8vw, 120px);
	}

	.section-label {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		padding-top: 10px;
		color: var(--color-muted);
		font-size: 0.75rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		line-height: 1;
		text-transform: uppercase;
	}

	.section-label__line {
		width: 22px;
		height: 2px;
		margin-top: 4px;
		flex: 0 0 auto;
		background: var(--color-accent);
	}

	.hero-content {
		max-width: 940px;
	}

	.eyebrow,
	.section-kicker {
		margin-bottom: var(--space-5);
		color: var(--color-accent);
		font-size: 0.78rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	h1 {
		max-width: 950px;
		color: var(--color-black);
		font-size: clamp(3rem, 6vw, 6rem);
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.065em;
		line-height: 0.98;
		text-wrap: balance;
	}

	h1 span {
		display: block;
		color: var(--color-accent);
	}

	.hero-description,
	.section-description {
		max-width: 690px;
		margin-top: var(--space-6);
		color: var(--color-muted);
		font-size: 1.05rem;
		line-height: 1.75;
	}

	.hero-description {
		margin-top: var(--space-7);
		font-size: clamp(1.05rem, 1.5vw, 1.25rem);
	}

	.identity :global(.container),
	.direction :global(.container),
	.technology :global(.container),
	.why :global(.container),
	.people :global(.container) {
		padding-block: clamp(96px, 12vw, 160px);
	}

	h2 {
		max-width: 900px;
		color: var(--color-black);
		font-size: clamp(2.3rem, 4.3vw, 4.5rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.055em;
		line-height: 1.04;
		text-wrap: balance;
	}

	h2 span {
		display: block;
		color: var(--color-text-secondary);
	}

	.principles {
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
	}

	.principle {
		display: grid;
		grid-template-columns: 70px 190px minmax(0, 1fr);
		gap: var(--space-6);
		align-items: start;
		padding-block: var(--space-6);
		border-bottom: 1px solid var(--color-border);
	}

	.principle-number {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
	}

	.principle-title {
		color: var(--color-accent);
		font-size: 0.72rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	.principle h3 {
		max-width: 740px;
		color: var(--color-black);
		font-size: clamp(1.25rem, 2vw, 1.7rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.035em;
		line-height: 1.4;
	}

	.direction-content {
		max-width: 850px;
	}

	.direction-content > p {
		max-width: 660px;
		margin-top: var(--space-6);
		color: var(--color-muted);
		font-size: 1.02rem;
		line-height: 1.7;
	}

	.mission-test {
		margin-top: clamp(56px, 7vw, 88px);
		padding: var(--space-6) 0 var(--space-6) var(--space-6);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		border-left: 3px solid var(--color-accent);
	}

	.mission-test > span {
		display: block;
		margin-bottom: var(--space-4);
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.mission-test strong {
		display: block;
		max-width: 720px;
		color: var(--color-black);
		font-size: clamp(1.35rem, 2.4vw, 2rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.035em;
		line-height: 1.4;
	}

	.mission-test p {
		max-width: 620px;
		margin-top: var(--space-5);
		color: var(--color-muted);
		font-size: 0.93rem;
		line-height: 1.65;
	}

	.technology-list {
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
	}

	.technology-item {
		display: grid;
		grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
		gap: var(--space-7);
		padding-block: var(--space-7);
		border-bottom: 1px solid var(--color-border);
	}

	.technology-role {
		margin-bottom: var(--space-3);
		color: var(--color-accent);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	.technology-item h3 {
		color: var(--color-black);
		font-size: clamp(1.45rem, 2.4vw, 2rem);
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.04em;
	}

	.technology-item > p {
		max-width: 580px;
		color: var(--color-muted);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	.technology-action {
		margin-top: var(--space-7);
	}

	.why-statement {
		display: grid;
		grid-template-columns: 4px minmax(0, 760px);
		gap: var(--space-5);
		margin-top: clamp(64px, 8vw, 96px);
	}

	.why-mark {
		background: var(--color-accent);
	}

	.why-statement p {
		color: var(--color-text-secondary);
		font-size: clamp(1.2rem, 2vw, 1.65rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.03em;
		line-height: 1.5;
	}

	.why-statement strong {
		display: block;
		margin-top: var(--space-2);
		color: var(--color-black);
	}

	.disciplines {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
		border-left: 1px solid var(--color-border);
	}

	.discipline {
		display: flex;
		min-height: 68px;
		align-items: center;
		gap: var(--space-3);
		padding-inline: var(--space-5);
		border-right: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		color: var(--color-text-secondary);
		font-size: 0.88rem;
		font-weight: var(--font-weight-medium);
	}

	.discipline span {
		width: 6px;
		height: 6px;
		flex: 0 0 auto;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.company-close :global(.container) {
		padding-block: clamp(104px, 13vw, 176px);
	}

	.close-content {
		text-align: center;
	}

	.close-mark {
		display: block;
		width: 36px;
		height: 3px;
		margin: 0 auto var(--space-6);
		background: var(--color-accent);
	}

	.close-label {
		margin-bottom: var(--space-5);
		color: var(--color-muted);
		font-size: 0.72rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.close-content h2 {
		margin-inline: auto;
	}

	.close-content h2 span {
		color: var(--color-accent);
	}

	.close-content > p:not(.close-label) {
		max-width: 650px;
		margin: var(--space-6) auto 0;
		color: var(--color-muted);
		font-size: 1.02rem;
		line-height: 1.7;
	}

	.close-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
		margin-top: var(--space-7);
	}

	@media (max-width: 900px) {
		.disciplines {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 760px) {
		.hero-layout,
		.section-heading,
		.direction-layout {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.section-label {
			padding-top: 0;
		}

		.company-hero :global(.container),
		.identity :global(.container),
		.direction :global(.container),
		.technology :global(.container),
		.why :global(.container),
		.people :global(.container) {
			padding-block: 88px;
		}

		.principle {
			grid-template-columns: 44px minmax(0, 1fr);
		}

		.principle > div {
			grid-column: 2;
		}

		.technology-item {
			grid-template-columns: 1fr;
			gap: var(--space-5);
		}
	}

	@media (max-width: 480px) {
		.company-hero :global(.container),
		.identity :global(.container),
		.direction :global(.container),
		.technology :global(.container),
		.why :global(.container),
		.people :global(.container),
		.company-close :global(.container) {
			padding-block: 72px;
		}

		h1 {
			font-size: 2.75rem;
			letter-spacing: -0.055em;
		}

		h2 {
			font-size: 2.25rem;
			letter-spacing: -0.045em;
		}

		.principle {
			grid-template-columns: 32px minmax(0, 1fr);
			gap: var(--space-4);
		}

		.mission-test {
			padding-left: var(--space-4);
		}

		.disciplines {
			grid-template-columns: 1fr;
		}

		.close-actions {
			display: grid;
			grid-template-columns: 1fr;
		}

		.close-actions :global(.button-link) {
			width: 100%;
		}
	}
</style>
