<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="thesis" id="thesis" aria-labelledby="thesis-title">
	<Container>
		<div class="thesis-layout">
			<div class="section-label">
				<span class="section-label__line" aria-hidden="true"></span>
				<span>The Thesis</span>
			</div>

			<div class="thesis-content">
				<h2 id="thesis-title">
					Software should describe
					<span>what it needs to accomplish,</span>
					not the infrastructure required to accomplish it.
				</h2>

				<div class="thesis-principle">
					<p>Software expresses intent.</p>
					<p class="accent">Infrastructure satisfies it.</p>
				</div>
			</div>
		</div>
	</Container>
</section>

<style>
	.thesis {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
	}

	.thesis-layout {
		display: grid;
		grid-template-columns: minmax(160px, 0.35fr) minmax(0, 1fr);
		gap: clamp(48px, 8vw, 120px);
		padding-block: clamp(96px, 12vw, 160px);
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

	.thesis-content {
		max-width: 900px;
	}

	h2 {
		max-width: 900px;
		color: var(--color-black);
		font-size: clamp(2.25rem, 4.5vw, 4.6rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.055em;
		line-height: 1.04;
		text-wrap: balance;
	}

	h2 span {
		color: var(--color-text-secondary);
	}

	.thesis-principle {
		margin-top: clamp(56px, 8vw, 96px);
		padding-top: var(--space-6);
		border-top: 1px solid var(--color-border);
	}

	.thesis-principle p {
		color: var(--color-black);
		font-size: clamp(1.45rem, 2.5vw, 2.4rem);
		font-weight: var(--font-weight-medium);
		letter-spacing: -0.04em;
		line-height: 1.25;
	}

	.thesis-principle .accent {
		color: var(--color-accent);
	}

	@media (max-width: 760px) {
		.thesis-layout {
			grid-template-columns: 1fr;
			gap: var(--space-7);
			padding-block: 88px;
		}

		.section-label {
			padding-top: 0;
		}

		h2 {
			font-size: clamp(2.3rem, 9vw, 3.5rem);
		}

		.thesis-principle {
			margin-top: 56px;
		}
	}

	@media (max-width: 480px) {
		.thesis-layout {
			padding-block: 72px;
		}

		h2 {
			font-size: 2.25rem;
			letter-spacing: -0.045em;
		}

		.thesis-principle p {
			font-size: 1.4rem;
		}
	}
</style>
