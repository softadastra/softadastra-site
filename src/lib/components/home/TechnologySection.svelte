<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const technologies = [
		{
			index: '01',
			name: 'Vix.cpp',
			role: 'Developer platform',
			description:
				'An open-source C++ developer platform and an interface for building modern systems.',
			href: 'https://vixcpp.com',
			external: true
		},
		{
			index: '02',
			name: 'Softadastra Engine',
			role: 'Adaptive runtime research',
			description:
				'Runtime foundations for resilient, offline-first and infrastructure-independent applications.',
			href: '#engine',
			external: false
		},
		{
			index: '03',
			name: 'Softadastra Cloud',
			role: 'Hosted infrastructure',
			description:
				'Connected infrastructure for Softadastra technologies without making applications cloud-dependent.',
			href: '#cloud',
			external: false
		}
	];
</script>

<section class="technology" id="technology" aria-labelledby="technology-title">
	<Container>
		<div class="technology-header">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Technology</span>
			</div>

			<div class="technology-intro">
				<h2 id="technology-title">
					One company.
					<span>One technological direction.</span>
				</h2>

				<p>
					Our technologies are different parts of the same effort: progressively
					removing infrastructure constraints from software.
				</p>
			</div>
		</div>

		<div class="technology-list">
			{#each technologies as technology}
				<a
					class="technology-item"
					href={technology.href}
					target={technology.external ? '_blank' : undefined}
					rel={technology.external ? 'noopener noreferrer' : undefined}
				>
					<div class="technology-index">
						<span>{technology.index}</span>
					</div>

					<div class="technology-name">
						<h3>{technology.name}</h3>
						<span>{technology.role}</span>
					</div>

					<p>{technology.description}</p>

					<div class="technology-arrow" aria-hidden="true">
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

		<div class="technology-principle">
			<span class="principle-mark" aria-hidden="true"></span>

			<p>
				Does this remove another infrastructure constraint from software?
				<strong>If it does, it belongs to the mission.</strong>
			</p>
		</div>
	</Container>
</section>

<style>
	.technology {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.technology :global(.container) {
		padding-block: clamp(96px, 12vw, 160px);
	}

	.technology-header {
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

	.technology-intro {
		max-width: 820px;
	}

	h2 {
		color: var(--color-black);
		font-size: clamp(2.25rem, 4.2vw, 4.3rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.055em;
		line-height: 1.04;
		text-wrap: balance;
	}

	h2 span {
		display: block;
		color: var(--color-text-secondary);
	}

	.technology-intro > p {
		max-width: 620px;
		margin-top: var(--space-6);
		color: var(--color-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.technology-list {
		margin-top: clamp(72px, 9vw, 112px);
		border-top: 1px solid var(--color-border);
	}

	.technology-item {
		display: grid;
		grid-template-columns:
			80px
			minmax(200px, 0.8fr)
			minmax(280px, 1.2fr)
			48px;
		align-items: center;
		gap: var(--space-5);
		min-height: 154px;
		padding-block: var(--space-6);
		border-bottom: 1px solid var(--color-border);
		color: var(--color-text);
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast);
	}

	.technology-item:hover {
		background: rgb(255 153 0 / 3%);
		color: var(--color-text);
		border-bottom-color: var(--color-accent);
	}

	.technology-index {
		align-self: start;
		padding-top: 4px;
	}

	.technology-index span {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.05em;
	}

	.technology-name h3 {
		margin-bottom: 7px;
		color: var(--color-black);
		font-size: clamp(1.25rem, 2vw, 1.65rem);
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.035em;
	}

	.technology-name span {
		color: var(--color-accent);
		font-size: 0.78rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.025em;
	}

	.technology-item > p {
		max-width: 520px;
		color: var(--color-muted);
		font-size: 0.92rem;
		line-height: 1.65;
	}

	.technology-arrow {
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
			border-color var(--transition-fast),
			background-color var(--transition-fast),
			color var(--transition-fast),
			transform var(--transition-fast);
	}

	.technology-arrow svg {
		width: 18px;
		height: 18px;
	}

	.technology-item:hover .technology-arrow {
		border-color: var(--color-accent);
		background: var(--color-accent);
		color: var(--color-black);
		transform: translateX(3px);
	}

	.technology-principle {
		display: grid;
		grid-template-columns: 4px minmax(0, 720px);
		gap: var(--space-5);
		margin-top: clamp(64px, 8vw, 96px);
	}

	.principle-mark {
		width: 4px;
		height: 100%;
		min-height: 74px;
		background: var(--color-accent);
	}

	.technology-principle p {
		color: var(--color-text-secondary);
		font-size: clamp(1.15rem, 1.8vw, 1.5rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.025em;
		line-height: 1.5;
	}

	.technology-principle strong {
		display: block;
		margin-top: var(--space-2);
		color: var(--color-black);
	}

	@media (max-width: 900px) {
		.technology-item {
			grid-template-columns: 56px minmax(180px, 0.8fr) minmax(0, 1.2fr) 44px;
		}
	}

	@media (max-width: 760px) {
		.technology :global(.container) {
			padding-block: 88px;
		}

		.technology-header {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.section-label {
			padding-top: 0;
		}

		h2 {
			font-size: clamp(2.3rem, 9vw, 3.5rem);
		}

		.technology-list {
			margin-top: 64px;
		}

		.technology-item {
			grid-template-columns: 44px minmax(0, 1fr) 40px;
			gap: var(--space-4);
			min-height: auto;
			padding-block: var(--space-5);
		}

		.technology-name {
			grid-column: 2;
		}

		.technology-item > p {
			grid-column: 2 / 4;
		}

		.technology-arrow {
			grid-column: 3;
			grid-row: 1;
		}
	}

	@media (max-width: 480px) {
		.technology :global(.container) {
			padding-block: 72px;
		}

		h2 {
			font-size: 2.25rem;
			letter-spacing: -0.045em;
		}

		.technology-item {
			grid-template-columns: 32px minmax(0, 1fr) 36px;
		}

		.technology-arrow {
			width: 36px;
			height: 36px;
		}

		.technology-principle {
			gap: var(--space-4);
		}
	}
</style>
