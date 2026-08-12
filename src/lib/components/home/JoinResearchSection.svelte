<script lang="ts">
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	const fields = [
		'Programming models',
		'Distributed systems',
		'Runtimes',
		'Distributed state',
		'Reliability',
		'Heterogeneous computing'
	];
</script>

<section class="join" id="open-source" aria-labelledby="join-title">
	<Container>
		<div class="join-layout">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>Join the Research</span>
			</div>

			<div class="join-content">
				<p class="eyebrow">Long-term systems research</p>

				<h2 id="join-title">
					Work on problems
					<span>that may take years to solve.</span>
				</h2>

				<p class="join-description">
					We are working on programming models, distributed systems, runtimes,
					state, reliability and heterogeneous computing.
				</p>

				<ul class="fields" aria-label="Research areas">
					{#each fields as field}
						<li>
							<span class="field-mark" aria-hidden="true"></span>
							{field}
						</li>
					{/each}
				</ul>

				<div class="question">
					<span class="question-label">Our question</span>

					<p>
						Can software be separated from the infrastructure that executes it?
					</p>
				</div>

				<div class="actions">
					<ButtonLink href="mailto:hello@softadastra.com" variant="primary">
						Join Softadastra
					</ButtonLink>

					<ButtonLink
						href="https://github.com/softadastra"
						variant="secondary"
						external
						ariaLabel="Explore Softadastra open-source projects on GitHub"
					>
						Open Source

						<svg
							class="arrow"
							viewBox="0 0 16 16"
							fill="none"
							aria-hidden="true"
						>
							<path
								d="M4 8H12M9 5L12 8L9 11"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</ButtonLink>
				</div>
			</div>
		</div>
	</Container>
</section>

<style>
	.join {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.join :global(.container) {
		padding-block: clamp(104px, 13vw, 176px);
	}

	.join-layout {
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

	.join-content {
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
		max-width: 880px;
		color: var(--color-black);
		font-size: clamp(2.5rem, 4.8vw, 5rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.06em;
		line-height: 1;
		text-wrap: balance;
	}

	h2 span {
		display: block;
		color: var(--color-text-secondary);
	}

	.join-description {
		max-width: 680px;
		margin-top: var(--space-6);
		color: var(--color-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.fields {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0 var(--space-7);
		max-width: 720px;
		margin-top: clamp(48px, 6vw, 72px);
		border-top: 1px solid var(--color-border);
	}

	.fields li {
		display: flex;
		min-height: 58px;
		align-items: center;
		gap: var(--space-3);
		border-bottom: 1px solid var(--color-border);
		color: var(--color-text-secondary);
		font-size: 0.9rem;
		font-weight: var(--font-weight-medium);
	}

	.field-mark {
		width: 6px;
		height: 6px;
		flex: 0 0 auto;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.question {
		max-width: 760px;
		margin-top: clamp(64px, 8vw, 96px);
		padding: var(--space-6) 0 var(--space-6) var(--space-6);
		border-left: 3px solid var(--color-accent);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.question-label {
		display: block;
		margin-bottom: var(--space-3);
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.question p {
		max-width: 680px;
		color: var(--color-black);
		font-size: clamp(1.35rem, 2.4vw, 2rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.035em;
		line-height: 1.35;
		text-wrap: balance;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-7);
	}

	.arrow {
		width: 16px;
		height: 16px;
	}

	@media (max-width: 760px) {
		.join :global(.container) {
			padding-block: 88px;
		}

		.join-layout {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.section-label {
			padding-top: 0;
		}

		h2 {
			font-size: clamp(2.5rem, 10vw, 3.8rem);
		}

		.fields {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.join :global(.container) {
			padding-block: 72px;
		}

		h2 {
			font-size: 2.4rem;
			letter-spacing: -0.05em;
		}

		.question {
			padding:
				var(--space-5)
				0
				var(--space-5)
				var(--space-4);
		}

		.actions {
			display: grid;
			grid-template-columns: 1fr;
		}

		.actions :global(.button-link) {
			width: 100%;
			min-height: 46px;
		}
	}
</style>
