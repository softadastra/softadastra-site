<script lang="ts">
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	const runtimeCapabilities = [
		{
			number: '01',
			title: 'Placement',
			description:
				'Determine which available computing resources satisfy application requirements.'
		},
		{
			number: '02',
			title: 'Scheduling',
			description:
				'Coordinate execution as resources, priorities and application constraints change.'
		},
		{
			number: '03',
			title: 'State',
			description:
				'Keep application state durable, portable and available across infrastructure.'
		},
		{
			number: '04',
			title: 'Replication',
			description:
				'Replicate state and execution where availability and resilience require it.'
		},
		{
			number: '05',
			title: 'Recovery',
			description:
				'Recover or resume applications when machines, networks or services fail.'
		},
		{
			number: '06',
			title: 'Reconciliation',
			description:
				'Reconcile divergent state after disconnected infrastructure becomes available again.'
		}
	];

	const technologies = [
		{
			number: '01',
			name: 'Vix.cpp',
			type: 'Developer Platform',
			description:
				'Softadastra’s open-source C++ developer platform for building modern software and experimenting with simpler developer experiences.',
			note:
				'Vix.cpp is not the mission itself. It is one way developers can interact with the technologies Softadastra builds.',
			href: 'https://vixcpp.com',
			action: 'Visit Vix.cpp',
			external: true
		},
		{
			number: '02',
			name: 'Softadastra Engine',
			type: 'Runtime Research',
			description:
				'Technology for resilient and offline-first applications that remain useful when connectivity or preferred infrastructure becomes unavailable.',
			note:
				'Offline-first computing is an early step toward making applications less dependent on permanent centralized infrastructure.',
			href: '#runtime',
			action: 'Explore the runtime',
			external: false
		},
		{
			number: '03',
			name: 'Softadastra Cloud',
			type: 'Hosted Infrastructure',
			description:
				'Connected infrastructure for Softadastra technologies and applications that need hosted computing resources.',
			note:
				'The cloud is one possible environment, not the destination of every application. Softadastra is intentionally not cloud-dependent.',
			href: '#fabric',
			action: 'See the architecture',
			external: false
		}
	];

	const infrastructure = ['Local', 'Edge', 'Cloud', 'Peer', 'Future infrastructure'];
</script>

<svelte:head>
	<title>Technology — Softadastra</title>
	<meta
		name="description"
		content="Explore the technology behind Softadastra: intent-driven adaptive computing, the Softadastra Runtime, Vix.cpp, Softadastra Engine and Softadastra Cloud."
	/>
</svelte:head>

<section class="technology-hero">
	<Container>
		<div class="hero-layout">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Technology</span>
			</div>

			<div class="hero-content">
				<p class="eyebrow">Intent-driven adaptive computing</p>

				<h1>
					Technology for separating software
					<span>from infrastructure.</span>
				</h1>

				<p class="hero-description">
					Softadastra is building programming models, runtime systems and computing
					infrastructure that progressively allow applications to express what they need
					without being permanently designed around where they execute.
				</p>
			</div>
		</div>
	</Container>
</section>

<section class="architecture" id="architecture" aria-labelledby="architecture-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>The Architecture</span>
			</div>

			<div>
				<p class="section-kicker">The technological direction</p>

				<h2 id="architecture-title">
					Intent becomes
					<span>execution.</span>
				</h2>

				<p class="section-description">
					The application describes intent, state and constraints. The adaptive runtime
					connects those requirements to available computing resources.
				</p>
			</div>
		</div>

		<div class="architecture-flow" aria-label="Softadastra technology architecture">
			<div class="architecture-stage">
				<span class="stage-number">01</span>
				<span class="stage-type">Application</span>
				<strong>Intent + State + Constraints</strong>
			</div>

			<div class="flow-arrow" aria-hidden="true">
				<span></span>
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

			<div class="architecture-stage architecture-stage--accent">
				<span class="stage-number">02</span>
				<span class="stage-type">Decision layer</span>
				<strong>Adaptive Runtime</strong>
			</div>

			<div class="flow-arrow" aria-hidden="true">
				<span></span>
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

			<div class="architecture-stage">
				<span class="stage-number">03</span>
				<span class="stage-type">Resources</span>
				<strong>Computing Fabric</strong>
			</div>
		</div>

		<div class="infrastructure-row" id="fabric">
			<p>Available computing infrastructure</p>

			<ul>
				{#each infrastructure as item}
					<li>
						<span aria-hidden="true"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</Container>
</section>

<section class="runtime" id="runtime" aria-labelledby="runtime-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Softadastra Runtime</span>
			</div>

			<div>
				<p class="section-kicker">Where the research becomes executable</p>

				<h2 id="runtime-title">
					An adaptive runtime between
					<span>applications and infrastructure.</span>
				</h2>

				<p class="section-description">
					The runtime is intended to progressively make infrastructure decisions from
					application requirements rather than forcing those decisions into application
					code and deployment configuration.
				</p>
			</div>
		</div>

		<div class="capabilities">
			{#each runtimeCapabilities as capability}
				<article class="capability">
					<span class="capability-number">{capability.number}</span>

					<div>
						<h3>{capability.title}</h3>
						<p>{capability.description}</p>
					</div>
				</article>
			{/each}
		</div>

		<div class="runtime-principle">
			<div class="runtime-principle__mark" aria-hidden="true"></div>

			<div>
				<span>Core principle</span>
				<p>
					The developer manages the application.
					<strong>
						Softadastra manages the relationship between that application and
						infrastructure.
					</strong>
				</p>
			</div>
		</div>
	</Container>
</section>

<section class="products" aria-labelledby="products-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Technology Today</span>
			</div>

			<div>
				<h2 id="products-title">
					Different technologies.
					<span>One direction.</span>
				</h2>

				<p class="section-description">
					Each technology explores a different part of the same problem:
					reducing the infrastructure constraints placed on software.
				</p>
			</div>
		</div>

		<div class="technology-list">
			{#each technologies as technology}
				<article class="technology-item">
					<div class="technology-number">{technology.number}</div>

					<div class="technology-main">
						<p class="technology-type">{technology.type}</p>
						<h3>{technology.name}</h3>
					</div>

					<div class="technology-information">
						<p>{technology.description}</p>
						<p class="technology-note">{technology.note}</p>

						<a
							class="technology-link"
							href={technology.href}
							target={technology.external ? '_blank' : undefined}
							rel={technology.external ? 'noopener noreferrer' : undefined}
						>
							{technology.action}

							<svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
								<path
									d="M4 9H14M10 5L14 9L10 13"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</Container>
</section>

<section class="independence" aria-labelledby="independence-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Infrastructure Independence</span>
			</div>

			<div>
				<h2 id="independence-title">
					Cloud is infrastructure.
					<span>Not the architecture.</span>
				</h2>

				<p class="section-description">
					Softadastra is not trying to move every application into another proprietary
					cloud. Local machines, edge nodes, cloud resources and future hardware are all
					potential execution environments.
				</p>
			</div>
		</div>

		<div class="evolution">
			<div class="evolution-item">
				<span>01</span>
				<strong>Physical machines</strong>
			</div>

			<div class="evolution-arrow" aria-hidden="true">→</div>

			<div class="evolution-item">
				<span>02</span>
				<strong>Virtualization</strong>
			</div>

			<div class="evolution-arrow" aria-hidden="true">→</div>

			<div class="evolution-item">
				<span>03</span>
				<strong>Cloud computing</strong>
			</div>

			<div class="evolution-arrow" aria-hidden="true">→</div>

			<div class="evolution-item">
				<span>04</span>
				<strong>Distributed edge</strong>
			</div>

			<div class="evolution-arrow" aria-hidden="true">→</div>

			<div class="evolution-item evolution-item--accent">
				<span>05</span>
				<strong>Infrastructure-independent computing</strong>
			</div>
		</div>
	</Container>
</section>

<section class="technology-close">
	<Container narrow>
		<div class="close-content">
			<span class="close-mark" aria-hidden="true"></span>

			<p class="close-label">One company. One direction.</p>

			<h2>
				Every major technology should remove
				<span>another infrastructure constraint from software.</span>
			</h2>

			<p>
				Products and architectures will evolve. The mission remains the same:
				make computing progressively infrastructure-independent.
			</p>

			<div class="close-actions">
				<ButtonLink href="/research" variant="primary">
					Explore the research
				</ButtonLink>

				<ButtonLink
					href="https://github.com/softadastra"
					variant="secondary"
					external
					ariaLabel="Explore Softadastra on GitHub"
				>
					Open Source
				</ButtonLink>
			</div>
		</div>
	</Container>
</section>

<style>
	.technology-hero,
	.architecture,
	.runtime,
	.products,
	.independence,
	.technology-close {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.technology-hero :global(.container) {
		padding-block: clamp(104px, 13vw, 176px);
	}

	.hero-layout,
	.section-heading {
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

	.architecture :global(.container),
	.runtime :global(.container),
	.products :global(.container),
	.independence :global(.container) {
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

	.architecture-flow {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			80px
			minmax(0, 1.1fr)
			80px
			minmax(0, 1fr);
		align-items: stretch;
		margin-top: clamp(72px, 9vw, 112px);
	}

	.architecture-stage {
		display: flex;
		min-height: 180px;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--space-5);
		border: 1px solid var(--color-border);
	}

	.architecture-stage--accent {
		position: relative;
		border-color: var(--color-accent);
	}

	.architecture-stage--accent::before {
		position: absolute;
		top: -1px;
		right: -1px;
		left: -1px;
		height: 3px;
		background: var(--color-accent);
		content: '';
	}

	.stage-number {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
	}

	.stage-type {
		display: block;
		margin-top: auto;
		margin-bottom: 7px;
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	.architecture-stage strong {
		color: var(--color-black);
		font-size: clamp(1.15rem, 1.7vw, 1.45rem);
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.03em;
		line-height: 1.25;
	}

	.architecture-stage--accent strong {
		color: var(--color-accent);
	}

	.flow-arrow {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		color: var(--color-border-strong);
	}

	.flow-arrow span {
		position: absolute;
		right: 0;
		left: 0;
		height: 1px;
		background: var(--color-border);
	}

	.flow-arrow svg {
		position: relative;
		width: 24px;
		height: 24px;
		padding: 3px;
		background: var(--color-white);
	}

	.infrastructure-row {
		margin-top: var(--space-7);
		padding-top: var(--space-6);
		border-top: 1px solid var(--color-border);
	}

	.infrastructure-row > p {
		margin-bottom: var(--space-4);
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.infrastructure-row ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
	}

	.infrastructure-row li {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 9px 14px;
		border: 1px solid var(--color-border);
		border-radius: 999px;
		color: var(--color-text-secondary);
		font-size: 0.85rem;
		font-weight: var(--font-weight-medium);
	}

	.infrastructure-row li span {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.capabilities {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
	}

	.capability {
		display: grid;
		grid-template-columns: 52px 1fr;
		gap: var(--space-5);
		min-height: 170px;
		padding: var(--space-6);
		border-right: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.capability:nth-child(even) {
		border-right: 0;
	}

	.capability-number,
	.technology-number {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
	}

	.capability h3 {
		margin-bottom: var(--space-3);
		color: var(--color-black);
		font-size: 1.25rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.03em;
	}

	.capability p {
		max-width: 460px;
		color: var(--color-muted);
		font-size: 0.91rem;
		line-height: 1.65;
	}

	.runtime-principle {
		display: grid;
		grid-template-columns: 4px minmax(0, 760px);
		gap: var(--space-5);
		margin-top: clamp(64px, 8vw, 96px);
	}

	.runtime-principle__mark {
		background: var(--color-accent);
	}

	.runtime-principle span {
		display: block;
		margin-bottom: var(--space-3);
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.runtime-principle p {
		color: var(--color-text-secondary);
		font-size: clamp(1.25rem, 2vw, 1.7rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.03em;
		line-height: 1.45;
	}

	.runtime-principle strong {
		display: block;
		margin-top: var(--space-2);
		color: var(--color-black);
	}

	.technology-list {
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
	}

	.technology-item {
		display: grid;
		grid-template-columns: 70px minmax(220px, 0.7fr) minmax(0, 1.3fr);
		gap: var(--space-6);
		padding-block: clamp(40px, 5vw, 64px);
		border-bottom: 1px solid var(--color-border);
	}

	.technology-type {
		margin-bottom: var(--space-3);
		color: var(--color-accent);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	.technology-main h3 {
		color: var(--color-black);
		font-size: clamp(1.5rem, 2.5vw, 2.1rem);
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.04em;
	}

	.technology-information > p {
		max-width: 600px;
		color: var(--color-text-secondary);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	.technology-information .technology-note {
		margin-top: var(--space-4);
		color: var(--color-muted);
		font-size: 0.86rem;
	}

	.technology-link {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		margin-top: var(--space-5);
		color: var(--color-black);
		font-size: 0.85rem;
		font-weight: var(--font-weight-semibold);
	}

	.technology-link:hover {
		color: var(--color-accent);
	}

	.technology-link svg {
		width: 18px;
		height: 18px;
		transition: transform var(--transition-fast);
	}

	.technology-link:hover svg {
		transform: translateX(3px);
	}

	.evolution {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1fr)
			auto
			minmax(0, 1.25fr);
		align-items: stretch;
		margin-top: clamp(72px, 9vw, 112px);
	}

	.evolution-item {
		display: flex;
		min-height: 150px;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--space-4);
		border: 1px solid var(--color-border);
	}

	.evolution-item span {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.68rem;
	}

	.evolution-item strong {
		font-size: 0.9rem;
		font-weight: var(--font-weight-semibold);
		line-height: 1.35;
	}

	.evolution-item--accent {
		border-color: var(--color-accent);
	}

	.evolution-item--accent strong {
		color: var(--color-accent);
	}

	.evolution-arrow {
		display: flex;
		width: 32px;
		align-items: center;
		justify-content: center;
		color: var(--color-border-strong);
	}

	.technology-close :global(.container) {
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

	@media (max-width: 960px) {
		.architecture-flow {
			grid-template-columns: 1fr;
		}

		.flow-arrow {
			height: 58px;
		}

		.flow-arrow span {
			top: 0;
			bottom: 0;
			left: 50%;
			width: 1px;
			height: auto;
		}

		.flow-arrow svg {
			transform: rotate(90deg);
		}

		.evolution {
			grid-template-columns: 1fr;
			gap: var(--space-3);
		}

		.evolution-arrow {
			display: none;
		}

		.evolution-item {
			min-height: 105px;
		}
	}

	@media (max-width: 760px) {
		.hero-layout,
		.section-heading {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.section-label {
			padding-top: 0;
		}

		.technology-hero :global(.container),
		.architecture :global(.container),
		.runtime :global(.container),
		.products :global(.container),
		.independence :global(.container) {
			padding-block: 88px;
		}

		.capabilities {
			grid-template-columns: 1fr;
		}

		.capability,
		.capability:nth-child(even) {
			border-right: 0;
		}

		.technology-item {
			grid-template-columns: 44px minmax(0, 1fr);
		}

		.technology-information {
			grid-column: 2;
		}
	}

	@media (max-width: 480px) {
		.technology-hero :global(.container),
		.architecture :global(.container),
		.runtime :global(.container),
		.products :global(.container),
		.independence :global(.container),
		.technology-close :global(.container) {
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

		.capability {
			grid-template-columns: 32px 1fr;
			padding-inline: 0;
		}

		.technology-item {
			grid-template-columns: 32px 1fr;
			gap: var(--space-4);
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
