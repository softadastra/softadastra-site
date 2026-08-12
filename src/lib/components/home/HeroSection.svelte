<script lang="ts">
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="hero" aria-labelledby="hero-title">
	<Container>
		<div class="hero-content">
			<div class="hero-kicker" aria-hidden="true">
				<span class="hero-kicker__mark"></span>
				<span>Computing research & technology</span>
			</div>

			<h1 id="hero-title">
				Make computing
				<span class="hero-title__accent">infrastructure-independent.</span>
			</h1>

			<p class="hero-question">
				Can software be separated from the infrastructure that executes it?
			</p>

			<div class="hero-actions">
				<ButtonLink href="#research" variant="primary">
					Explore the research
				</ButtonLink>

				<ButtonLink
					href="https://github.com/softadastra"
					variant="secondary"
					external
					ariaLabel="Explore Softadastra on GitHub"
				>
					GitHub

					<svg
						class="external-icon"
						viewBox="0 0 16 16"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M5.5 10.5L10.5 5.5M6.5 5.5H10.5V9.5"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</ButtonLink>
			</div>
		</div>
	</Container>

	<div class="hero-rule" aria-hidden="true">
		<span></span>
	</div>
</section>

<style>
	.hero {
		display: flex;
		min-height: calc(100svh - 68px);
		align-items: center;
		overflow: hidden;
		background: var(--color-white);
	}

	.hero-content {
		width: min(100%, 980px);
		padding-block: clamp(96px, 13vh, 160px);
	}

	.hero-kicker {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: var(--space-6);
		color: var(--color-muted);
		font-size: 0.78rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		line-height: 1;
		text-transform: uppercase;
	}

	.hero-kicker__mark {
		width: 24px;
		height: 3px;
		flex: 0 0 auto;
		border-radius: 999px;
		background: var(--color-accent);
	}

	h1 {
		max-width: 940px;
		color: var(--color-black);
		font-size: clamp(3.25rem, 6.7vw, 6.5rem);
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.065em;
		line-height: 0.96;
		text-wrap: balance;
	}

	.hero-title__accent {
		display: block;
		color: var(--color-accent);
	}

	.hero-question {
		max-width: 700px;
		margin-top: clamp(32px, 4vw, 48px);
		color: var(--color-text-secondary);
		font-size: clamp(1.15rem, 1.7vw, 1.45rem);
		font-weight: var(--font-weight-normal);
		letter-spacing: -0.025em;
		line-height: 1.5;
		text-wrap: balance;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3);
		margin-top: var(--space-7);
	}

	.external-icon {
		width: 16px;
		height: 16px;
		flex: 0 0 auto;
	}

	.hero-rule {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		background: var(--color-border);
	}

	.hero-rule span {
		display: block;
		width: min(18vw, 220px);
		height: 2px;
		background: var(--color-accent);
	}

	@media (max-width: 900px) {
		.hero {
			min-height: calc(100svh - 62px);
		}

		.hero-content {
			padding-block: 104px;
		}

		h1 {
			max-width: 760px;
			font-size: clamp(3rem, 9vw, 5.4rem);
		}
	}

	@media (max-width: 640px) {
		.hero {
			min-height: auto;
		}

		.hero-content {
			padding-block: 88px 96px;
		}

		.hero-kicker {
			margin-bottom: var(--space-5);
			font-size: 0.7rem;
		}

		h1 {
			font-size: clamp(2.8rem, 13vw, 4.25rem);
			letter-spacing: -0.055em;
			line-height: 0.98;
		}

		.hero-question {
			margin-top: var(--space-6);
			font-size: 1.1rem;
			line-height: 1.55;
		}

		.hero-actions {
			align-items: stretch;
			margin-top: var(--space-6);
		}

		.hero-actions :global(.button-link) {
			min-height: 46px;
		}
	}

	@media (max-width: 420px) {
		.hero-actions {
			display: grid;
			grid-template-columns: 1fr;
		}

		.hero-actions :global(.button-link) {
			width: 100%;
		}
	}
</style>
