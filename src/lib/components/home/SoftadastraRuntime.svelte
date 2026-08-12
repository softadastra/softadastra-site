<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	import RuntimeTable from './RuntimeTable.svelte';
	import SoftadastraRuntime3D from './SoftadastraRuntime3D.svelte';
</script>

<section
	class="runtime"
	id="softadastra-runtime"
	aria-labelledby="softadastra-runtime-title"
>
	<Container>
		<div class="runtime-content">
			<header class="runtime-header">
				<h2 id="softadastra-runtime-title">
					Softadastra Runtime
					<span>(in progress)</span>
				</h2>
			</header>

			<div class="runtime-engine">
				<SoftadastraRuntime3D />
			</div>

			<div class="runtime-overview">
				<p>
					The Softadastra Runtime is being developed as the adaptive execution
					layer between software and computing infrastructure.
				</p>

				<p>
					It observes application requirements, state and available resources,
					then progressively takes responsibility for infrastructure decisions
					that applications currently have to make themselves.
				</p>

				<a
					class="runtime-repository"
					href="https://github.com/softadastra/runtime"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="repository-status" aria-hidden="true"></span>

					<span>
						github.com/softadastra/runtime
					</span>

					<span class="repository-arrow" aria-hidden="true">
						↗
					</span>
				</a>
			</div>

			<div
				class="runtime-flow"
				aria-label="Softadastra Runtime computing model"
			>
				<div class="flow-item">
					<span class="flow-label">
						software
					</span>

					<strong>
						Intent
					</strong>
				</div>

				<span class="flow-arrow" aria-hidden="true">
					→
				</span>

				<div class="flow-item flow-item--runtime">
					<span class="flow-label">
						execution
					</span>

					<strong>
						Softadastra Runtime
					</strong>
				</div>

				<span class="flow-arrow" aria-hidden="true">
					→
				</span>

				<div class="flow-item">
					<span class="flow-label">
						resources
					</span>

					<strong>
						Computing Fabric
					</strong>
				</div>
			</div>

			<div
				class="fabric"
				aria-label="Computing Fabric resources"
			>
				<span>Local</span>
				<span>Edge</span>
				<span>Cloud</span>
				<span>CPU</span>
				<span>GPU</span>
				<span>Accelerators</span>
				<span>Future infrastructure</span>
			</div>

			<div class="runtime-model">
				<div class="runtime-model-header">
					<div class="runtime-model-title">
						<h3>
							Runtime model
						</h3>

						<span>
							in development
						</span>
					</div>

					<p>
						Infrastructure decisions progressively move out of application
						code and into the Runtime.
					</p>

					<p class="runtime-model-note">
						The capabilities below describe the technical direction of the
						Runtime. They are being implemented and validated progressively.
					</p>
				</div>

				<RuntimeTable />
			</div>

			<footer class="runtime-footer">
				<p class="runtime-principle">
					Software expresses intent.
					<strong>
						Infrastructure satisfies it.
					</strong>
				</p>

				<a
					class="runtime-source"
					href="https://github.com/softadastra/runtime"
					target="_blank"
					rel="noopener noreferrer"
				>
					follow the Runtime development on GitHub ↗
				</a>
			</footer>
		</div>
	</Container>
</section>

<style>
	.runtime {
		background: var(--color-white);
		color: var(--color-text);
	}

	.runtime-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;

		padding-block: var(--section-padding);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Header
	-------------------------------------------------- */

	.runtime-header h2 {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;

		gap: 8px;

		margin: 0;

		color: var(--color-text);

		font-size: clamp(
			1.2rem,
			1.65vw,
			1.5rem
		);

		font-weight: var(--font-weight-bold);

		letter-spacing: -0.018em;
		line-height: 1.4;
	}

	.runtime-header h2 span {
		color: var(--color-accent);

		font-size: 0.72em;
		font-weight: var(--font-weight-normal);

		letter-spacing: 0;
	}

	/* --------------------------------------------------
	   3D Runtime
	-------------------------------------------------- */

	.runtime-engine {
		width: 100%;

		margin-top: 2px;
	}

	/* --------------------------------------------------
	   Overview
	-------------------------------------------------- */

	.runtime-overview {
		max-width: 900px;

		margin: 2px auto 0;
	}

	.runtime-overview p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: clamp(
			0.88rem,
			1vw,
			0.96rem
		);

		font-weight: var(--font-weight-normal);

		line-height: 1.65;
	}

	.runtime-overview p + p {
		margin-top: 9px;
	}

	/* --------------------------------------------------
	   Repository
	-------------------------------------------------- */

	.runtime-repository {
		display: inline-flex;
		align-items: center;

		gap: 8px;

		margin-top: 15px;

		color: var(--color-text);

		font-size: 0.75rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.4;

		text-decoration: none;

		transition: color var(--transition-fast);
	}

	.runtime-repository:hover {
		color: var(--color-accent);
	}

	.repository-status {
		width: 6px;
		height: 6px;

		flex: 0 0 auto;

		border-radius: 50%;

		background: var(--color-accent);

		animation: repository-pulse 2s ease-in-out infinite;
	}

	.repository-arrow {
		display: inline-block;

		color: var(--color-accent);

		transition: transform var(--transition-fast);
	}

	.runtime-repository:hover .repository-arrow {
		transform: translate(2px, -2px);
	}

	/* --------------------------------------------------
	   Runtime flow
	-------------------------------------------------- */

	.runtime-flow {
		display: grid;

		grid-template-columns:
			minmax(0, 1fr)
			auto
			minmax(0, 1.25fr)
			auto
			minmax(0, 1fr);

		align-items: center;

		gap: clamp(
			14px,
			2.5vw,
			28px
		);

		max-width: 900px;

		margin: 30px auto 0;
	}

	.flow-item {
		min-width: 0;
	}

	.flow-label {
		display: block;

		margin-bottom: 5px;

		color: var(--color-muted);

		font-size: 0.64rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.2;
	}

	.flow-item strong {
		display: block;

		color: var(--color-text);

		font-size: 0.86rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.4;
	}

	.flow-item--runtime strong {
		color: var(--color-accent);
	}

	.flow-arrow {
		color: var(--color-border-strong);

		font-size: 0.9rem;
		line-height: 1;
	}

	/* --------------------------------------------------
	   Computing Fabric
	-------------------------------------------------- */

	.fabric {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		gap: 4px 0;

		max-width: 900px;

		margin: 13px auto 0;
	}

	.fabric span {
		color: var(--color-muted);

		font-size: 0.69rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.45;
	}

	.fabric span:not(:last-child)::after {
		margin-inline: 8px;

		color: var(--color-border-strong);

		content: '·';
	}

	/* --------------------------------------------------
	   Runtime model
	-------------------------------------------------- */

	.runtime-model {
		margin-top: 38px;
	}

	.runtime-model-header {
		max-width: 900px;

		margin-bottom: 14px;
	}

	.runtime-model-title {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;

		gap: 9px;
	}

	.runtime-model-title h3 {
		margin: 0;

		color: var(--color-text);

		font-size: 0.92rem;
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.01em;
		line-height: 1.4;
	}

	.runtime-model-title span {
		color: var(--color-accent);

		font-size: 0.63rem;
		font-weight: var(--font-weight-medium);

		line-height: 1.4;
	}

	.runtime-model-header > p {
		max-width: 780px;

		margin: 5px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.75rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.55;
	}

	.runtime-model-header .runtime-model-note {
		color: var(--color-muted);

		font-size: 0.68rem;
	}

	/* --------------------------------------------------
	   Footer
	-------------------------------------------------- */

	.runtime-footer {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;

		gap: 12px 28px;

		margin-top: 15px;
	}

	.runtime-principle {
		margin: 0;

		color: var(--color-text);

		font-size: 0.79rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.5;
	}

	.runtime-principle strong {
		color: var(--color-accent);
	}

	.runtime-source {
		color: var(--color-accent);

		font-size: 0.7rem;
		font-weight: var(--font-weight-medium);

		line-height: 1.5;

		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;

		transition: color var(--transition-fast);
	}

	.runtime-source:hover {
		color: var(--color-text);
	}

	/* --------------------------------------------------
	   Animation
	-------------------------------------------------- */

	@keyframes repository-pulse {
		0%,
		100% {
			opacity: 0.45;
			transform: scale(0.8);
		}

		50% {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* --------------------------------------------------
	   Tablet
	-------------------------------------------------- */

	@media (max-width: 760px) {
		.runtime-flow {
			grid-template-columns: 1fr;

			gap: 7px;

			max-width: 560px;

			margin-inline: 0;
		}

		.flow-arrow {
			width: fit-content;

			margin-block: 1px;

			transform: rotate(90deg);
		}

		.fabric {
			justify-content: flex-start;

			max-width: 620px;

			margin-inline: 0;
		}

		.runtime-footer {
			flex-direction: column;

			align-items: flex-start;
		}
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.runtime-header h2 {
			gap: 6px;

			font-size: 1.08rem;
		}

		.runtime-engine {
			margin-top: 0;
		}

		.runtime-overview {
			margin-top: 0;
		}

		.runtime-overview p {
			font-size: 0.82rem;
		}

		.runtime-repository {
			margin-top: 13px;

			font-size: 0.69rem;
		}

		.runtime-flow {
			margin-top: 25px;
		}

		.flow-label {
			font-size: 0.6rem;
		}

		.flow-item strong {
			font-size: 0.79rem;
		}

		.fabric {
			margin-top: 11px;
		}

		.fabric span {
			font-size: 0.64rem;
		}

		.fabric span:not(:last-child)::after {
			margin-inline: 6px;
		}

		.runtime-model {
			margin-top: 30px;
		}

		.runtime-model-title h3 {
			font-size: 0.85rem;
		}

		.runtime-model-title span {
			font-size: 0.59rem;
		}

		.runtime-model-header > p {
			font-size: 0.71rem;
		}

		.runtime-model-header .runtime-model-note {
			font-size: 0.64rem;
		}

		.runtime-principle {
			font-size: 0.73rem;
		}

		.runtime-source {
			font-size: 0.66rem;
		}
	}

	/* --------------------------------------------------
	   Reduced motion
	-------------------------------------------------- */

	@media (prefers-reduced-motion: reduce) {
		.repository-status {
			animation: none;

			opacity: 1;
		}
	}
</style>
