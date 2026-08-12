<script lang="ts">
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	const researchAreas = [
		{
			number: '01',
			title: 'Programming Models',
			description:
				'How should software express intent, state and constraints without explicitly describing infrastructure?'
		},
		{
			number: '02',
			title: 'Computation Placement',
			description:
				'How should a runtime determine where computation executes as resources, networks and requirements change?'
		},
		{
			number: '03',
			title: 'Distributed State',
			description:
				'How can application state become durable, portable, synchronized and recoverable across infrastructure?'
		},
		{
			number: '04',
			title: 'Reliability',
			description:
				'How should applications continue, degrade, recover and reconcile when infrastructure fails?'
		},
		{
			number: '05',
			title: 'Workload Mobility',
			description:
				'How can computation and state checkpoint, replicate, move, resume and recover across compatible environments?'
		},
		{
			number: '06',
			title: 'Compute Fabric',
			description:
				'How can machines and accelerators become a discoverable pool of capabilities rather than manually configured targets?'
		},
		{
			number: '07',
			title: 'Trust & Security',
			description:
				'How can identity, policy, isolation and trust become part of infrastructure selection itself?'
		},
		{
			number: '08',
			title: 'Hardware Independence',
			description:
				'How far can computational intent become independent of specific processors, accelerators and hardware architectures?'
		}
	];

	const roadmap = [
		{
			code: 'R0',
			title: 'Intent Model',
			description:
				'Define how software expresses what it requires rather than how infrastructure should be configured.'
		},
		{
			code: 'R1',
			title: 'Resource Model',
			description:
				'Define how computing resources describe their capabilities, limits and trust properties.'
		},
		{
			code: 'R2',
			title: 'Compute Fabric',
			description:
				'Allow multiple resources and machines to form a discoverable computing environment.'
		},
		{
			code: 'R3',
			title: 'Placement Engine',
			description:
				'Determine dynamically where workloads should execute.'
		},
		{
			code: 'R4',
			title: 'Distributed State',
			description:
				'Build state capable of surviving infrastructure changes, network partitions and multiple execution environments.'
		},
		{
			code: 'R5',
			title: 'Failure Semantics',
			description:
				'Define how applications behave when infrastructure degrades or disappears.'
		},
		{
			code: 'R6',
			title: 'Workload Mobility',
			description:
				'Explore checkpointing, resuming, replication and movement of computation and state.'
		},
		{
			code: 'R7',
			title: 'Trust Model',
			description:
				'Integrate identity, policy, security and trust into infrastructure selection.'
		},
		{
			code: 'R8',
			title: 'Hardware Abstraction',
			description:
				'Explore how computational intent can progressively become independent of specific hardware architectures.'
		}
	];

	const transitions = [
		'Network disappears',
		'Node crashes',
		'Cloud becomes unavailable',
		'Better resource appears',
		'State diverges',
		'Infrastructure returns'
	];
</script>

<svelte:head>
	<title>Research — Softadastra</title>
	<meta
		name="description"
		content="Softadastra research toward infrastructure-independent computing: intent programming, adaptive runtimes, distributed state, workload placement and reliability."
	/>
</svelte:head>

<section class="research-hero">
	<Container>
		<div class="hero-layout">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Research</span>
			</div>

			<div class="hero-content">
				<p class="eyebrow">Our fundamental question</p>

				<h1>
					Can software be separated from
					<span>the infrastructure that executes it?</span>
				</h1>

				<p class="hero-description">
					Softadastra is exploring the programming models, runtimes and distributed
					systems required to make software progressively less dependent on machines,
					networks, cloud providers and hardware configurations.
				</p>
			</div>
		</div>
	</Container>
</section>

<section class="principle" aria-labelledby="principle-title">
	<Container>
		<div class="principle-layout">
			<div class="principle-number">01</div>

			<div>
				<p class="section-kicker">Research thesis</p>

				<h2 id="principle-title">
					Software should express intent.
					<span>Infrastructure should satisfy it.</span>
				</h2>

				<p class="principle-description">
					Instead of forcing developers to describe servers, regions, replicas,
					deployment topology and hardware, applications should increasingly describe
					the properties they require.
				</p>
			</div>
		</div>

		<div class="intent-example">
			<div class="intent-column">
				<span class="intent-label">Application intent</span>

				<div class="requirements">
					<p>This state must never be lost.</p>
					<p>This workload must respond in less than 20 milliseconds.</p>
					<p>This application must continue working without Internet.</p>
					<p>This computation can run wherever suitable resources exist.</p>
					<p>This data may only execute on trusted infrastructure.</p>
				</div>
			</div>

			<div class="intent-arrow" aria-hidden="true">
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

			<div class="intent-column intent-column--result">
				<span class="intent-label">Computing system</span>

				<strong>
					Determine how those requirements are satisfied.
				</strong>
			</div>
		</div>
	</Container>
</section>

<section class="areas" aria-labelledby="areas-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Research Areas</span>
			</div>

			<div>
				<h2 id="areas-title">
					The systems problems
					<span>behind infrastructure independence.</span>
				</h2>
			</div>
		</div>

		<div class="areas-grid">
			{#each researchAreas as area}
				<article class="area">
					<span class="area-number">{area.number}</span>

					<div>
						<h3>{area.title}</h3>
						<p>{area.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</Container>
</section>

<section class="current" aria-labelledby="current-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Current Target</span>
			</div>

			<div>
				<p class="section-kicker">A narrower first proof</p>

				<h2 id="current-title">
					Run one application across
					<span>local, edge and cloud</span>
					without rewriting it.
				</h2>
			</div>
		</div>

		<div class="execution-model">
			<div class="application">
				<span>Application</span>
			</div>

			<div class="branch" aria-hidden="true">
				<span></span>
			</div>

			<div class="targets">
				<div class="target">
					<span class="target-dot" aria-hidden="true"></span>
					<strong>Local</strong>
				</div>

				<div class="target">
					<span class="target-dot" aria-hidden="true"></span>
					<strong>Edge</strong>
				</div>

				<div class="target">
					<span class="target-dot" aria-hidden="true"></span>
					<strong>Cloud</strong>
				</div>
			</div>
		</div>

		<div class="transitions">
			<p class="transitions-label">The application should survive transitions such as</p>

			<ul>
				{#each transitions as transition}
					<li>{transition}</li>
				{/each}
			</ul>
		</div>
	</Container>
</section>

<section class="roadmap-section" aria-labelledby="roadmap-title">
	<Container>
		<div class="section-heading">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Research Roadmap</span>
			</div>

			<div>
				<h2 id="roadmap-title">
					A research program
					<span>built layer by layer.</span>
				</h2>
			</div>
		</div>

		<div class="roadmap">
			{#each roadmap as stage}
				<article class="roadmap-item">
					<div class="roadmap-code">{stage.code}</div>

					<div class="roadmap-content">
						<h3>{stage.title}</h3>
						<p>{stage.description}</p>
					</div>

					<span class="roadmap-dot" aria-hidden="true"></span>
				</article>
			{/each}
		</div>
	</Container>
</section>

<section class="research-close">
	<Container narrow>
		<div class="close-content">
			<span class="close-mark" aria-hidden="true"></span>

			<p class="close-label">The direction</p>

			<h2>
				The infrastructure becomes
				<span>an implementation detail.</span>
			</h2>

			<p>
				Our goal is not to hide infrastructure complexity behind more configuration.
				It is to investigate new abstractions that allow software to express what it
				needs while computing systems determine how to satisfy it.
			</p>

			<div class="close-actions">
				<ButtonLink href="/technology" variant="primary">
					Explore the technology
				</ButtonLink>

				<ButtonLink
					href="https://github.com/softadastra"
					variant="secondary"
					external
					ariaLabel="Softadastra on GitHub"
				>
					Open Source
				</ButtonLink>
			</div>
		</div>
	</Container>
</section>

<style>
	.research-hero,
	.principle,
	.areas,
	.current,
	.roadmap-section,
	.research-close {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.research-hero :global(.container) {
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

	.hero-description {
		max-width: 720px;
		margin-top: var(--space-7);
		color: var(--color-muted);
		font-size: clamp(1.05rem, 1.5vw, 1.25rem);
		line-height: 1.75;
	}

	.principle :global(.container),
	.areas :global(.container),
	.current :global(.container),
	.roadmap-section :global(.container) {
		padding-block: clamp(96px, 12vw, 160px);
	}

	.principle-layout {
		display: grid;
		grid-template-columns: minmax(80px, 0.25fr) minmax(0, 1fr);
		gap: clamp(40px, 7vw, 100px);
	}

	.principle-number {
		padding-top: 8px;
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.75rem;
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

	.principle-description {
		max-width: 660px;
		margin-top: var(--space-6);
		color: var(--color-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.intent-example {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 90px minmax(0, 0.8fr);
		align-items: stretch;
		margin-top: clamp(72px, 9vw, 112px);
	}

	.intent-column {
		padding: var(--space-6);
		border: 1px solid var(--color-border);
	}

	.intent-column--result {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-color: var(--color-accent);
	}

	.intent-label {
		display: block;
		margin-bottom: var(--space-6);
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.requirements {
		display: grid;
	}

	.requirements p {
		padding-block: var(--space-3);
		border-top: 1px solid var(--color-border);
		color: var(--color-text-secondary);
		font-size: 0.92rem;
		line-height: 1.5;
	}

	.intent-column strong {
		max-width: 330px;
		color: var(--color-accent);
		font-size: clamp(1.5rem, 2.4vw, 2.15rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.04em;
		line-height: 1.25;
	}

	.intent-arrow {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		color: var(--color-border-strong);
	}

	.intent-arrow span {
		position: absolute;
		right: 0;
		left: 0;
		height: 1px;
		background: var(--color-border);
	}

	.intent-arrow svg {
		position: relative;
		width: 26px;
		height: 26px;
		padding: 3px;
		background: var(--color-white);
	}

	.areas-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
	}

	.area {
		display: grid;
		grid-template-columns: 52px 1fr;
		gap: var(--space-5);
		min-height: 190px;
		padding: var(--space-6);
		border-right: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.area:nth-child(even) {
		border-right: 0;
	}

	.area-number,
	.roadmap-code {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
	}

	.area h3,
	.roadmap-item h3 {
		margin-bottom: var(--space-3);
		color: var(--color-black);
		font-size: 1.3rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.03em;
	}

	.area p,
	.roadmap-item p {
		max-width: 470px;
		color: var(--color-muted);
		font-size: 0.91rem;
		line-height: 1.65;
	}

	.execution-model {
		max-width: 860px;
		margin: clamp(72px, 9vw, 112px) auto 0;
	}

	.application {
		display: flex;
		justify-content: center;
	}

	.application span {
		display: inline-flex;
		min-height: 54px;
		align-items: center;
		justify-content: center;
		padding-inline: var(--space-6);
		border: 1px solid var(--color-accent);
		color: var(--color-black);
		font-size: 0.9rem;
		font-weight: var(--font-weight-semibold);
	}

	.branch {
		position: relative;
		width: 66%;
		height: 72px;
		margin-inline: auto;
		border-bottom: 1px solid var(--color-border-strong);
	}

	.branch::before {
		position: absolute;
		top: 0;
		left: 50%;
		width: 1px;
		height: 100%;
		background: var(--color-border-strong);
		content: '';
	}

	.targets {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
	}

	.target {
		display: flex;
		min-height: 100px;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);
		border: 1px solid var(--color-border);
	}

	.target-dot,
	.roadmap-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.target strong {
		font-size: 1rem;
		font-weight: var(--font-weight-semibold);
	}

	.transitions {
		margin-top: clamp(64px, 8vw, 96px);
		padding-top: var(--space-6);
		border-top: 1px solid var(--color-border);
	}

	.transitions-label {
		margin-bottom: var(--space-5);
		color: var(--color-muted);
		font-size: 0.72rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.transitions ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
	}

	.transitions li {
		padding: 9px 14px;
		border: 1px solid var(--color-border);
		border-radius: 999px;
		color: var(--color-text-secondary);
		font-size: 0.85rem;
		font-weight: var(--font-weight-medium);
	}

	.roadmap {
		position: relative;
		margin-top: clamp(72px, 9vw, 112px);
	}

	.roadmap::before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 79px;
		width: 1px;
		background: var(--color-border);
		content: '';
	}

	.roadmap-item {
		display: grid;
		position: relative;
		grid-template-columns: 80px minmax(0, 1fr);
		gap: var(--space-6);
		min-height: 130px;
		padding: var(--space-6) 0;
		border-bottom: 1px solid var(--color-border);
	}

	.roadmap-dot {
		position: absolute;
		top: 37px;
		left: 76px;
		box-shadow: 0 0 0 5px var(--color-white);
	}

	.roadmap-content {
		padding-left: var(--space-5);
	}

	.research-close :global(.container) {
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

	@media (max-width: 760px) {
		.hero-layout,
		.section-heading,
		.principle-layout {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.section-label {
			padding-top: 0;
		}

		.research-hero :global(.container),
		.principle :global(.container),
		.areas :global(.container),
		.current :global(.container),
		.roadmap-section :global(.container) {
			padding-block: 88px;
		}

		.intent-example {
			grid-template-columns: 1fr;
		}

		.intent-arrow {
			height: 56px;
		}

		.intent-arrow span {
			top: 0;
			bottom: 0;
			left: 50%;
			width: 1px;
			height: auto;
		}

		.intent-arrow svg {
			transform: rotate(90deg);
		}

		.areas-grid {
			grid-template-columns: 1fr;
		}

		.area,
		.area:nth-child(even) {
			border-right: 0;
		}

		.branch {
			display: none;
		}

		.targets {
			grid-template-columns: 1fr;
			margin-top: var(--space-5);
		}

		.target {
			min-height: 72px;
		}
	}

	@media (max-width: 480px) {
		.research-hero :global(.container),
		.principle :global(.container),
		.areas :global(.container),
		.current :global(.container),
		.roadmap-section :global(.container),
		.research-close :global(.container) {
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

		.area {
			grid-template-columns: 32px 1fr;
			padding: var(--space-5) 0;
		}

		.roadmap::before {
			left: 47px;
		}

		.roadmap-item {
			grid-template-columns: 48px 1fr;
			gap: var(--space-4);
		}

		.roadmap-dot {
			left: 44px;
		}

		.roadmap-content {
			padding-left: var(--space-4);
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
