<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const environments = [
		{
			index: '01',
			name: 'Local',
			description: 'Developer machines and local computing resources.'
		},
		{
			index: '02',
			name: 'Edge',
			description: 'Nearby infrastructure where latency and locality matter.'
		},
		{
			index: '03',
			name: 'Cloud',
			description: 'Remote computing resources when they satisfy application requirements.'
		}
	];
</script>

<section class="research" id="research" aria-labelledby="research-title">
	<Container>
		<div class="research-header">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Current Research</span>
			</div>

			<div class="research-intro">
				<p class="eyebrow">Our first research target</p>

				<h2 id="research-title">
					Run one application across
					<span>local, edge and cloud infrastructure</span>
					without rewriting it.
				</h2>

				<p class="research-description">
					The application should remain conceptually one system while its computation
					and state operate across different infrastructure environments.
				</p>
			</div>
		</div>

		<div class="research-model">
			<div class="application">
				<span class="application-label">One application</span>

				<div class="application-line" aria-hidden="true"></div>
			</div>

			<div class="environments">
				{#each environments as environment}
					<article class="environment">
						<div class="environment-top">
							<span class="environment-index">{environment.index}</span>
							<span class="environment-status" aria-hidden="true"></span>
						</div>

						<div>
							<h3>{environment.name}</h3>
							<p>{environment.description}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>

		<div class="research-question">
			<span class="research-question__label">The challenge</span>

			<p>
				What happens when the network disappears, a node fails, state diverges,
				or better infrastructure becomes available?
			</p>
		</div>
	</Container>
</section>

<style>
	.research {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.research :global(.container) {
		padding-block: clamp(96px, 12vw, 160px);
	}

	.research-header {
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

	.research-intro {
		max-width: 900px;
	}

	.eyebrow {
		margin-bottom: var(--space-5);
		color: var(--color-accent);
		font-size: 0.78rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	h2 {
		max-width: 900px;
		color: var(--color-black);
		font-size: clamp(2.25rem, 4.2vw, 4.3rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.055em;
		line-height: 1.04;
		text-wrap: balance;
	}

	h2 span {
		display: block;
		color: var(--color-accent);
	}

	.research-description {
		max-width: 650px;
		margin-top: var(--space-6);
		color: var(--color-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.research-model {
		margin-top: clamp(72px, 9vw, 112px);
	}

	.application {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.application-label {
		display: inline-flex;
		min-height: 52px;
		align-items: center;
		justify-content: center;
		padding-inline: var(--space-5);
		border: 1px solid var(--color-accent);
		background: var(--color-white);
		color: var(--color-black);
		font-size: 0.9rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.01em;
	}

	.application-line {
		position: relative;
		width: 1px;
		height: 56px;
		background: var(--color-border-strong);
	}

	.application-line::after {
		position: absolute;
		bottom: 0;
		left: 50%;
		width: min(66vw, 740px);
		height: 1px;
		background: var(--color-border-strong);
		content: '';
		transform: translateX(-50%);
	}

	.environments {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
		max-width: 920px;
		margin-inline: auto;
	}

	.environment {
		position: relative;
		display: flex;
		min-height: 190px;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--space-5);
		border: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.environment::before {
		position: absolute;
		top: -57px;
		left: 50%;
		width: 1px;
		height: 56px;
		background: var(--color-border-strong);
		content: '';
	}

	.environment-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.environment-index {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
	}

	.environment-status {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.environment h3 {
		margin-bottom: var(--space-2);
		color: var(--color-black);
		font-size: 1.3rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.03em;
	}

	.environment p {
		color: var(--color-muted);
		font-size: 0.88rem;
		line-height: 1.6;
	}

	.research-question {
		display: grid;
		grid-template-columns: 180px minmax(0, 1fr);
		gap: var(--space-7);
		margin-top: clamp(64px, 8vw, 96px);
		padding-top: var(--space-6);
		border-top: 1px solid var(--color-border);
	}

	.research-question__label {
		color: var(--color-muted);
		font-size: 0.72rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.research-question p {
		max-width: 720px;
		color: var(--color-text-secondary);
		font-size: clamp(1.2rem, 2vw, 1.65rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.025em;
		line-height: 1.45;
	}

	@media (max-width: 760px) {
		.research :global(.container) {
			padding-block: 88px;
		}

		.research-header {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.section-label {
			padding-top: 0;
		}

		h2 {
			font-size: clamp(2.3rem, 9vw, 3.5rem);
		}

		.research-model {
			margin-top: 72px;
		}

		.application {
			align-items: flex-start;
		}

		.application-line {
			display: none;
		}

		.environments {
			grid-template-columns: 1fr;
			margin-top: var(--space-5);
		}

		.environment {
			min-height: 150px;
		}

		.environment::before {
			display: none;
		}

		.research-question {
			grid-template-columns: 1fr;
			gap: var(--space-4);
		}
	}

	@media (max-width: 480px) {
		.research :global(.container) {
			padding-block: 72px;
		}

		h2 {
			font-size: 2.25rem;
			letter-spacing: -0.045em;
		}

		.application-label {
			width: 100%;
		}
	}
</style>
