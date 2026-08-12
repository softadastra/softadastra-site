<script lang="ts">
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	const principles = [
		{
			number: '01',
			title: 'Inspectable',
			description:
				'Important infrastructure should be understandable. Developers and researchers should be able to inspect how the technology works.'
		},
		{
			number: '02',
			title: 'Experimentable',
			description:
				'Open systems make it possible to test ideas, challenge assumptions and explore different approaches to infrastructure-independent computing.'
		},
		{
			number: '03',
			title: 'Composable',
			description:
				'Open technology allows developers to build on top of the work instead of treating the underlying system as an inaccessible black box.'
		},
		{
			number: '04',
			title: 'Collaborative',
			description:
				'Some of the problems Softadastra is investigating are difficult systems problems that benefit from broader technical participation.'
		}
	];

	const projects = [
		{
			number: '01',
			name: 'Vix.cpp',
			type: 'Open-source developer platform',
			description:
				'A C++ developer platform for building modern software and experimenting with simpler developer experiences.',
			status: 'Open source',
			href: 'https://github.com/vixcpp/vix'
		},
		{
			number: '02',
			name: 'Softadastra Research',
			type: 'Systems research',
			description:
				'Research around intent programming, adaptive runtimes, distributed state, placement, reliability and infrastructure independence.',
			status: 'Evolving',
			href: '/research'
		}
	];

	const contributionAreas = [
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
		'Performance engineering'
	];
</script>

<svelte:head>
	<title>Open Source — Softadastra</title>
	<meta
		name="description"
		content="Explore Softadastra open-source work and contribute to research and technology around infrastructure-independent computing."
	/>
</svelte:head>

<section class="opensource-hero">
	<Container>
		<div class="hero-layout">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Open Source</span>
			</div>

			<div class="hero-content">
				<p class="eyebrow">Build in the open</p>

				<h1>
					Important computing infrastructure
					<span>should be open to inspection.</span>
				</h1>

				<p class="hero-description">
					Softadastra develops important parts of its technology in the open so developers
					and researchers can inspect it, experiment with it, challenge our assumptions
					and build on top of our work.
				</p>

				<div class="hero-actions">
					<ButtonLink
						href="https://github.com/softadastra"
						variant="primary"
						external
						ariaLabel="Explore Softadastra on GitHub"
					>
						Explore GitHub
					</ButtonLink>

					<ButtonLink href="/research" variant="secondary">
						Explore the research
					</ButtonLink>
				</div>
			</div>
		</div>
	</Container>
</section>

<section class="philosophy" aria-labelledby="philosophy-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Why Open Source</span>
			</div>

			<div>
				<p class="section-kicker">Our philosophy</p>

				<h2 id="philosophy-title">
					Research becomes stronger
					<span>when others can examine it.</span>
				</h2>

				<p class="section-description">
					Open source is not a separate business line. It is part of how Softadastra
					develops developer infrastructure and exposes technical ideas to real scrutiny.
				</p>
			</div>
		</div>

		<div class="principles">
			{#each principles as principle}
				<article class="principle">
					<span class="principle-number">{principle.number}</span>

					<div>
						<h3>{principle.title}</h3>
						<p>{principle.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</Container>
</section>

<section class="projects" aria-labelledby="projects-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Open Work</span>
			</div>

			<div>
				<h2 id="projects-title">
					Technology you can
					<span>inspect and build on.</span>
				</h2>

				<p class="section-description">
					Vix.cpp is currently one of the main public foundations of Softadastra’s
					open-source work. Additional components may become open as the research evolves.
				</p>
			</div>
		</div>

		<div class="project-list">
			{#each projects as project}
				<a
					class="project"
					href={project.href}
					target={project.href.startsWith('http') ? '_blank' : undefined}
					rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
				>
					<div class="project-number">{project.number}</div>

					<div class="project-name">
						<span>{project.type}</span>
						<h3>{project.name}</h3>
					</div>

					<div class="project-description">
						<p>{project.description}</p>

						<div class="project-status">
							<span class="status-dot" aria-hidden="true"></span>
							{project.status}
						</div>
					</div>

					<div class="project-arrow" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<path
								d="M5 12H19M14 7L19 12L14 17"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</Container>
</section>

<section class="contribute" aria-labelledby="contribute-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Contribute</span>
			</div>

			<div>
				<p class="section-kicker">Systems problems are collaborative</p>

				<h2 id="contribute-title">
					Help explore problems
					<span>that do not have simple answers.</span>
				</h2>

				<p class="section-description">
					We are interested in contributions from people learning deeply about systems
					software as well as experienced engineers and researchers.
				</p>
			</div>
		</div>

		<div class="contribution-areas">
			{#each contributionAreas as area}
				<div class="contribution-area">
					<span aria-hidden="true"></span>
					{area}
				</div>
			{/each}
		</div>

		<div class="contribution-message">
			<div class="message-mark" aria-hidden="true"></div>

			<div>
				<span class="message-label">What matters</span>

				<p>
					You do not need to already know every part of the stack.
					<strong>
						Understanding difficult systems problems deeply is more important than
						collecting technologies.
					</strong>
				</p>
			</div>
		</div>
	</Container>
</section>

<section class="direction" aria-labelledby="direction-title">
	<Container>
		<div class="direction-layout">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>The Direction</span>
			</div>

			<div class="direction-content">
				<h2 id="direction-title">
					Open source serves
					<span>the mission.</span>
				</h2>

				<p>
					Softadastra may create many technologies over time. Open-source projects should
					not become disconnected experiments. They should contribute to the same long-term
					direction: removing infrastructure constraints from software.
				</p>

				<div class="direction-rule">
					<span>Our test</span>

					<strong>
						Does this remove another infrastructure constraint from software?
					</strong>
				</div>
			</div>
		</div>
	</Container>
</section>

<section class="opensource-close">
	<Container narrow>
		<div class="close-content">
			<span class="close-mark" aria-hidden="true"></span>

			<p class="close-label">Explore the work</p>

			<h2>
				Inspect it.
				<span>Challenge it. Build on it.</span>
			</h2>

			<p>
				Our long-term research is difficult by design. Open development gives developers
				and researchers a way to follow the work as it evolves.
			</p>

			<div class="close-actions">
				<ButtonLink
					href="https://github.com/softadastra"
					variant="primary"
					external
					ariaLabel="Explore Softadastra on GitHub"
				>
					Explore GitHub
				</ButtonLink>

				<ButtonLink href="/research" variant="secondary">
					Read the research
				</ButtonLink>
			</div>
		</div>
	</Container>
</section>

<style>
	.opensource-hero,
	.philosophy,
	.projects,
	.contribute,
	.direction,
	.opensource-close {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.opensource-hero :global(.container) {
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

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-7);
	}

	.philosophy :global(.container),
	.projects :global(.container),
	.contribute :global(.container),
	.direction :global(.container) {
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
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
	}

	.principle {
		display: grid;
		grid-template-columns: 52px 1fr;
		gap: var(--space-5);
		min-height: 190px;
		padding: var(--space-6);
		border-right: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.principle:nth-child(even) {
		border-right: 0;
	}

	.principle-number,
	.project-number {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
	}

	.principle h3 {
		margin-bottom: var(--space-3);
		color: var(--color-black);
		font-size: 1.3rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.03em;
	}

	.principle p {
		max-width: 470px;
		color: var(--color-muted);
		font-size: 0.91rem;
		line-height: 1.65;
	}

	.project-list {
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
	}

	.project {
		display: grid;
		grid-template-columns:
			70px
			minmax(220px, 0.7fr)
			minmax(0, 1.3fr)
			48px;
		align-items: center;
		gap: var(--space-6);
		min-height: 190px;
		padding-block: var(--space-6);
		border-bottom: 1px solid var(--color-border);
		color: var(--color-text);
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast);
	}

	.project:hover {
		border-bottom-color: var(--color-accent);
		background: rgb(255 153 0 / 3%);
		color: var(--color-text);
	}

	.project-name > span {
		display: block;
		margin-bottom: var(--space-3);
		color: var(--color-accent);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	.project-name h3 {
		color: var(--color-black);
		font-size: clamp(1.45rem, 2.4vw, 2rem);
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.04em;
	}

	.project-description > p {
		max-width: 560px;
		color: var(--color-muted);
		font-size: 0.93rem;
		line-height: 1.7;
	}

	.project-status {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-top: var(--space-4);
		color: var(--color-text-secondary);
		font-size: 0.76rem;
		font-weight: var(--font-weight-medium);
	}

	.status-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.project-arrow {
		display: flex;
		width: 40px;
		height: 40px;
		align-items: center;
		justify-content: center;
		justify-self: end;
		border: 1px solid var(--color-border);
		border-radius: 50%;
		color: var(--color-text-secondary);
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast),
			color var(--transition-fast),
			transform var(--transition-fast);
	}

	.project-arrow svg {
		width: 18px;
		height: 18px;
	}

	.project:hover .project-arrow {
		border-color: var(--color-accent);
		background: var(--color-accent);
		color: var(--color-black);
		transform: translateX(3px);
	}

	.contribution-areas {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
		border-left: 1px solid var(--color-border);
	}

	.contribution-area {
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

	.contribution-area span {
		width: 6px;
		height: 6px;
		flex: 0 0 auto;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.contribution-message {
		display: grid;
		grid-template-columns: 4px minmax(0, 760px);
		gap: var(--space-5);
		margin-top: clamp(64px, 8vw, 96px);
	}

	.message-mark {
		background: var(--color-accent);
	}

	.message-label {
		display: block;
		margin-bottom: var(--space-3);
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.contribution-message p {
		color: var(--color-text-secondary);
		font-size: clamp(1.2rem, 2vw, 1.65rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.03em;
		line-height: 1.45;
	}

	.contribution-message strong {
		display: block;
		margin-top: var(--space-2);
		color: var(--color-black);
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

	.direction-rule {
		margin-top: clamp(56px, 7vw, 80px);
		padding: var(--space-6) 0 var(--space-6) var(--space-6);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		border-left: 3px solid var(--color-accent);
	}

	.direction-rule span {
		display: block;
		margin-bottom: var(--space-3);
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.direction-rule strong {
		display: block;
		max-width: 700px;
		color: var(--color-black);
		font-size: clamp(1.3rem, 2.3vw, 1.9rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.035em;
		line-height: 1.4;
	}

	.opensource-close :global(.container) {
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
		max-width: 640px;
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
		.contribution-areas {
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

		.opensource-hero :global(.container),
		.philosophy :global(.container),
		.projects :global(.container),
		.contribute :global(.container),
		.direction :global(.container) {
			padding-block: 88px;
		}

		.principles {
			grid-template-columns: 1fr;
		}

		.principle,
		.principle:nth-child(even) {
			border-right: 0;
		}

		.project {
			grid-template-columns: 44px minmax(0, 1fr) 40px;
		}

		.project-description {
			grid-column: 2 / 4;
		}

		.project-arrow {
			grid-column: 3;
			grid-row: 1;
		}
	}

	@media (max-width: 480px) {
		.opensource-hero :global(.container),
		.philosophy :global(.container),
		.projects :global(.container),
		.contribute :global(.container),
		.direction :global(.container),
		.opensource-close :global(.container) {
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

		.hero-actions,
		.close-actions {
			display: grid;
			grid-template-columns: 1fr;
		}

		.hero-actions :global(.button-link),
		.close-actions :global(.button-link) {
			width: 100%;
		}

		.principle {
			grid-template-columns: 32px 1fr;
			padding-inline: 0;
		}

		.project {
			grid-template-columns: 32px 1fr 36px;
			gap: var(--space-4);
		}

		.project-arrow {
			width: 36px;
			height: 36px;
		}

		.contribution-areas {
			grid-template-columns: 1fr;
		}

		.direction-rule {
			padding-left: var(--space-4);
		}
	}
</style>
