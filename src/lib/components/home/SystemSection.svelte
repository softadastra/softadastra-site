<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const infrastructure = ['Local', 'Edge', 'Cloud', 'Hardware'];
</script>

<section class="system" id="system" aria-labelledby="system-title">
	<Container>
		<div class="system-header">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>The System</span>
			</div>

			<div class="system-intro">
				<h2 id="system-title">
					From application intent
					<span>to available infrastructure.</span>
				</h2>

				<p>
					The application describes its requirements. The computing system determines how
					those requirements are satisfied.
				</p>
			</div>
		</div>

		<div class="system-flow" aria-label="Softadastra system architecture">
			<div class="flow-stage flow-stage--intent">
				<span class="stage-index">01</span>

				<div>
					<span class="stage-label">Application</span>
					<strong>Intent</strong>
				</div>
			</div>

			<div class="connector" aria-hidden="true">
				<span></span>
				<svg viewBox="0 0 20 20">
					<path d="M5 10H15M11 6L15 10L11 14" />
				</svg>
			</div>

			<div class="flow-stage flow-stage--runtime">
				<span class="stage-index">02</span>

				<div>
					<span class="stage-label">Execution layer</span>
					<strong>Adaptive Runtime</strong>
				</div>
			</div>

			<div class="connector" aria-hidden="true">
				<span></span>
				<svg viewBox="0 0 20 20">
					<path d="M5 10H15M11 6L15 10L11 14" />
				</svg>
			</div>

			<div class="flow-stage flow-stage--fabric">
				<span class="stage-index">03</span>

				<div>
					<span class="stage-label">Resources</span>
					<strong>Computing Fabric</strong>
				</div>
			</div>
		</div>

		<div class="infrastructure">
			<div class="infrastructure-line" aria-hidden="true"></div>

			<p class="infrastructure-label">Available infrastructure</p>

			<ul>
				{#each infrastructure as item}
					<li>
						<span class="resource-dot" aria-hidden="true"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</Container>
</section>

<style>
	.system {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.system :global(.container) {
		padding-block: clamp(96px, 12vw, 160px);
	}

	.system-header {
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

	.system-intro {
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

	.system-intro p {
		max-width: 620px;
		margin-top: var(--space-6);
		color: var(--color-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.system-flow {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			80px
			minmax(0, 1.15fr)
			80px
			minmax(0, 1fr);
		align-items: stretch;
		margin-top: clamp(72px, 9vw, 112px);
	}

	.flow-stage {
		position: relative;
		display: flex;
		min-height: 180px;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--space-5);
		border: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.flow-stage--runtime {
		border-color: var(--color-accent);
	}

	.flow-stage--runtime::before {
		position: absolute;
		top: -1px;
		right: -1px;
		left: -1px;
		height: 3px;
		background: var(--color-accent);
		content: '';
	}

	.stage-index {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.05em;
	}

	.stage-label {
		display: block;
		margin-bottom: 7px;
		color: var(--color-muted);
		font-size: 0.76rem;
		font-weight: var(--font-weight-medium);
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.flow-stage strong {
		display: block;
		color: var(--color-black);
		font-size: clamp(1.15rem, 1.7vw, 1.45rem);
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.03em;
		line-height: 1.2;
	}

	.flow-stage--runtime strong {
		color: var(--color-accent);
	}

	.connector {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		color: var(--color-border-strong);
	}

	.connector span {
		position: absolute;
		right: 0;
		left: 0;
		height: 1px;
		background: var(--color-border);
	}

	.connector svg {
		position: relative;
		width: 24px;
		height: 24px;
		padding: 3px;
		background: var(--color-white);
	}

	.connector path {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.25;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.infrastructure {
		position: relative;
		margin-top: var(--space-7);
		padding-top: var(--space-6);
	}

	.infrastructure-line {
		position: absolute;
		top: 0;
		left: 50%;
		width: 1px;
		height: var(--space-6);
		background: var(--color-accent);
	}

	.infrastructure-label {
		margin-bottom: var(--space-4);
		color: var(--color-muted);
		font-size: 0.72rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-align: center;
		text-transform: uppercase;
	}

	.infrastructure ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);
	}

	.infrastructure li {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 9px 14px;
		border: 1px solid var(--color-border);
		border-radius: 999px;
		background: var(--color-white);
		color: var(--color-text-secondary);
		font-size: 0.85rem;
		font-weight: var(--font-weight-medium);
	}

	.resource-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--color-accent);
	}

	@media (max-width: 900px) {
		.system-flow {
			grid-template-columns: 1fr;
			max-width: 680px;
		}

		.flow-stage {
			min-height: 145px;
		}

		.connector {
			height: 58px;
		}

		.connector span {
			top: 0;
			bottom: 0;
			left: 50%;
			width: 1px;
			height: auto;
		}

		.connector svg {
			transform: rotate(90deg);
		}
	}

	@media (max-width: 760px) {
		.system :global(.container) {
			padding-block: 88px;
		}

		.system-header {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.section-label {
			padding-top: 0;
		}

		h2 {
			font-size: clamp(2.3rem, 9vw, 3.5rem);
		}

		.system-flow {
			margin-top: 64px;
		}
	}

	@media (max-width: 480px) {
		.system :global(.container) {
			padding-block: 72px;
		}

		h2 {
			font-size: 2.25rem;
			letter-spacing: -0.045em;
		}

		.flow-stage {
			min-height: 130px;
			padding: var(--space-4);
		}

		.infrastructure ul {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}

		.infrastructure li {
			justify-content: center;
		}
	}
</style>
