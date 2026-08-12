<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section
	class="company"
	id="company"
	aria-labelledby="company-title"
>
	<Container>
		<div class="company-content">
			<h2 id="company-title">
				Softadastra
			</h2>

			<div class="company-copy">
				<p>
					Softadastra is a computing research and technology company working
					toward <strong>infrastructure-independent computing.</strong>
				</p>

				<p>
					We write and maintain
					<a
						href="https://vixcpp.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vix.cpp
					</a>,
					an open-source C++ developer platform for building modern systems.
				</p>

				<p>
					Vix.cpp is where much of our developer infrastructure exists today.
					It gives us a practical foundation for exploring developer tooling,
					runtime integration and future programming models.
				</p>

				<p>
					We are now building the
					<a
						href="https://github.com/softadastra/runtime"
						target="_blank"
						rel="noopener noreferrer"
					>
						Softadastra Runtime
					</a>,
					the adaptive execution layer at the center of our long-term computing
					architecture.
				</p>
			</div>

			<div
				class="direction"
				aria-label="Softadastra computing direction"
			>
				<span>software</span>
				<span class="direction-arrow" aria-hidden="true">→</span>

				<strong>intent</strong>
				<span class="direction-arrow" aria-hidden="true">→</span>

				<strong>runtime</strong>
				<span class="direction-arrow" aria-hidden="true">→</span>

				<span>computing fabric</span>
				<span class="direction-arrow" aria-hidden="true">→</span>

				<span>infrastructure</span>
			</div>

			<div class="company-principle">
				<p>
					Software should describe
					<strong>what it needs to accomplish.</strong>
				</p>

				<p>
					Infrastructure should determine
					<strong>how to satisfy it.</strong>
				</p>
			</div>

			<nav
				class="company-links"
				aria-label="Softadastra projects and research"
			>
				<a
					href="https://vixcpp.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Vix.cpp ↗
				</a>

				<a
					href="https://github.com/softadastra/runtime"
					target="_blank"
					rel="noopener noreferrer"
				>
					Runtime ↗
				</a>

				<a href="/research">
					research →
				</a>
			</nav>
		</div>
	</Container>
</section>

<style>
	.company {
		background: var(--color-white);
		color: var(--color-text);
	}

	.company-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: var(--section-padding);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Heading
	-------------------------------------------------- */

	.company h2 {
		margin: 0 0 20px;

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

	/* --------------------------------------------------
	   Copy
	-------------------------------------------------- */

	.company-copy {
		max-width: 950px;
	}

	.company-copy p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: clamp(
			0.9rem,
			1.05vw,
			0.98rem
		);

		font-weight: var(--font-weight-normal);

		line-height: 1.65;
	}

	.company-copy p + p {
		margin-top: 13px;
	}

	.company-copy strong {
		color: var(--color-text);

		font-weight: var(--font-weight-bold);
	}

	.company-copy a {
		position: relative;

		color: var(--color-accent);

		font-weight: var(--font-weight-semibold);

		text-decoration: none;
	}

	.company-copy a::after {
		position: absolute;

		right: 0;
		bottom: -2px;
		left: 0;

		height: 1px;

		background: var(--color-accent);

		content: '';

		transform: scaleX(0.3);
		transform-origin: left;

		transition: transform var(--transition-fast);
	}

	.company-copy a:hover::after {
		transform: scaleX(1);
	}

	/* --------------------------------------------------
	   Direction
	-------------------------------------------------- */

	.direction {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		gap: 6px 10px;

		margin-top: 28px;

		color: var(--color-muted);

		font-size: 0.76rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.5;
	}

	.direction strong {
		color: var(--color-accent);

		font-weight: var(--font-weight-bold);
	}

	.direction-arrow {
		color: var(--color-border-strong);

		user-select: none;
	}

	/* --------------------------------------------------
	   Principle
	-------------------------------------------------- */

	.company-principle {
		margin-top: 24px;
	}

	.company-principle p {
		margin: 0;

		color: var(--color-text);

		font-size: 0.88rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.55;
	}

	.company-principle p + p {
		margin-top: 2px;
	}

	.company-principle strong {
		color: var(--color-accent);

		font-weight: var(--font-weight-bold);
	}

	/* --------------------------------------------------
	   Links
	-------------------------------------------------- */

	.company-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		gap: 9px 22px;

		margin-top: 25px;
	}

	.company-links a {
		color: var(--color-text);

		font-size: 0.77rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.4;

		text-decoration: underline;
		text-decoration-color: var(--color-accent);
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;

		transition: color var(--transition-fast);
	}

	.company-links a:hover {
		color: var(--color-accent);
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.company h2 {
			margin-bottom: 16px;

			font-size: 1.08rem;
		}

		.company-copy p {
			font-size: 0.82rem;

			line-height: 1.65;
		}

		.company-copy p + p {
			margin-top: 11px;
		}

		.direction {
			gap: 5px 7px;

			margin-top: 22px;

			font-size: 0.67rem;
		}

		.company-principle {
			margin-top: 20px;
		}

		.company-principle p {
			font-size: 0.79rem;
		}

		.company-links {
			gap: 8px 17px;

			margin-top: 21px;
		}

		.company-links a {
			font-size: 0.7rem;
		}
	}
</style>
