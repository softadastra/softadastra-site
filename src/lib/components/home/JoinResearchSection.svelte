<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const fields = [
		'C++',
		'Distributed systems',
		'Operating systems',
		'Compilers',
		'Programming languages',
		'Runtimes',
		'Distributed state',
		'Networking',
		'Fault tolerance',
		'Security',
		'Edge computing',
		'Heterogeneous computing',
		'Performance engineering',
		'Hardware acceleration'
	];
</script>

<section
	class="join"
	id="join"
	aria-labelledby="join-title"
>
	<Container>
		<div class="join-content">
			<div class="join-main">
				<div class="join-intro">
					<h2 id="join-title">
						Work on problems
						<span>that may take years to solve.</span>
					</h2>

					<p>
						Softadastra is interested in people who want to work on
						fundamental computing problems, from programming models and
						runtimes to distributed systems and computing infrastructure.
					</p>

					<p>
						Many of the questions are difficult. Some are still unresolved.
						That is precisely why they are worth working on.
					</p>
				</div>

				<ul
					class="fields"
					aria-label="Areas of interest"
				>
					{#each fields as field}
						<li>
							<span aria-hidden="true">+</span>
							{field}
						</li>
					{/each}
				</ul>
			</div>

			<div class="join-call">
				<p>
					If infrastructure-independent computing interests you,
					<strong>work on it with us.</strong>
				</p>

				<div class="join-links">
					<a
						class="join-link join-link--primary"
						href="mailto:softadastra@gmail.com"
					>
						<span>Join Softadastra</span>

						<span
							class="link-arrow"
							aria-hidden="true"
						>
							↗
						</span>
					</a>

					<a
						class="join-link join-link--secondary"
						href="https://github.com/softadastra"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>Contribute on GitHub</span>

						<span
							class="link-arrow"
							aria-hidden="true"
						>
							↗
						</span>
					</a>
				</div>
			</div>
		</div>
	</Container>
</section>

<style>
	.join {
		background: var(--color-white);
		color: var(--color-text);
	}

	.join-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: var(--section-padding);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Main composition
	-------------------------------------------------- */

	.join-main {
		display: grid;
		grid-template-columns:
			minmax(0, 1.2fr)
			minmax(300px, 0.8fr);

		gap: clamp(40px, 7vw, 90px);

		align-items: start;
	}

	/* --------------------------------------------------
	   Intro
	-------------------------------------------------- */

	.join-intro {
		max-width: 720px;
	}

	.join-intro h2 {
		margin: 0;

		color: var(--color-text);

		font-size: clamp(
			1.2rem,
			1.65vw,
			1.5rem
		);

		font-weight: var(--font-weight-bold);

		letter-spacing: -0.018em;
		line-height: 1.5;
	}

	.join-intro h2 span {
		display: block;

		color: var(--color-accent);
	}

	.join-intro p {
		max-width: 680px;

		margin: 18px 0 0;

		color: var(--color-text-secondary);

		font-size: clamp(
			0.88rem,
			1vw,
			0.96rem
		);

		font-weight: var(--font-weight-normal);

		line-height: 1.65;
	}

	.join-intro p + p {
		margin-top: 11px;
	}

	/* --------------------------------------------------
	   Fields
	-------------------------------------------------- */

	.fields {
		display: grid;
		grid-template-columns:
			repeat(2, minmax(0, 1fr));

		gap: 8px 22px;

		margin: 2px 0 0;
		padding: 0;

		list-style: none;
	}

	.fields li {
		display: flex;
		align-items: baseline;

		gap: 8px;

		min-width: 0;

		color: var(--color-text-secondary);

		font-size: 0.76rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.45;
	}

	.fields li > span {
		flex: 0 0 auto;

		color: var(--color-accent);

		font-weight: var(--font-weight-bold);
	}

	/* --------------------------------------------------
	   Call to action
	-------------------------------------------------- */

	.join-call {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		gap: 40px;

		margin-top: clamp(34px, 4vw, 48px);
	}

	.join-call > p {
		max-width: 620px;

		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.9rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.6;
	}

	.join-call > p strong {
		color: var(--color-text);

		font-weight: var(--font-weight-bold);
	}

	/* --------------------------------------------------
	   Links
	-------------------------------------------------- */

	.join-links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		gap: 11px;

		flex: 0 0 auto;
	}

	.join-link {
		display: inline-flex;
		align-items: center;

		gap: 9px;

		width: fit-content;

		text-decoration: none;
	}

	.join-link--primary {
		position: relative;

		color: var(--color-accent);

		font-size: clamp(
			1.08rem,
			1.55vw,
			1.35rem
		);

		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;
		line-height: 1.3;
	}

	.join-link--primary::after {
		position: absolute;

		right: 0;
		bottom: -4px;
		left: 0;

		height: 1px;

		background: var(--color-accent);

		content: '';

		transform: scaleX(1);
		transform-origin: left;

		transition:
			transform var(--transition-fast);
	}

	.join-link--primary:hover::after {
		transform: scaleX(0.72);
	}

	.join-link--secondary {
		color: var(--color-text);

		font-size: 0.78rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.4;
	}

	.join-link--secondary:hover {
		color: var(--color-accent);
	}

	.link-arrow {
		display: inline-block;

		transition:
			transform var(--transition-fast);
	}

	.join-link:hover .link-arrow {
		transform:
			translate(2px, -2px);
	}

	/* --------------------------------------------------
	   Tablet
	-------------------------------------------------- */

	@media (max-width: 820px) {
		.join-main {
			grid-template-columns: 1fr;

			gap: 30px;
		}

		.fields {
			max-width: 620px;
		}

		.join-call {
			align-items: flex-start;

			flex-direction: column;

			gap: 24px;
		}
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.join-intro h2 {
			font-size: 1.08rem;
		}

		.join-intro p {
			margin-top: 14px;

			font-size: 0.82rem;
		}

		.join-intro p + p {
			margin-top: 9px;
		}

		.join-main {
			gap: 25px;
		}

		.fields {
			grid-template-columns: 1fr;

			gap: 7px;
		}

		.fields li {
			font-size: 0.72rem;
		}

		.join-call {
			margin-top: 30px;
		}

		.join-call > p {
			font-size: 0.82rem;
		}

		.join-links {
			gap: 13px;
		}

		.join-link--primary {
			font-size: 1.05rem;
		}

		.join-link--secondary {
			font-size: 0.74rem;
		}
	}
</style>
