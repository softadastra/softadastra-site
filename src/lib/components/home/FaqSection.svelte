<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const faqs = [
		{
			question: 'What is Softadastra?',
			answer:
				'Softadastra is a computing research and technology company working toward a long-term goal: making computing infrastructure-independent.'
		},
		{
			question: 'What does infrastructure-independent computing mean?',
			answer:
				'It means software should increasingly describe what it needs to accomplish instead of being permanently designed around specific machines, cloud providers, networks, locations or hardware.'
		},
		{
			question: 'What problem is Softadastra trying to solve?',
			answer:
				'Modern software is deeply coupled to infrastructure. Developers often have to decide where computation runs, where state lives, how systems recover, how data is replicated and which infrastructure or hardware must be used. Softadastra is researching how more of those decisions can move into the computing system itself.'
		},
		{
			question: 'What is the Softadastra Runtime?',
			answer:
				'The Softadastra Runtime is the core execution technology behind Softadastra. It is an intent-driven adaptive runtime designed to progressively connect application requirements, state and constraints to available computing infrastructure.'
		},
		{
			question: 'What does the Runtime actually do?',
			answer:
				'The Runtime is intended to progressively handle decisions such as computation placement, scheduling, distributed state, replication, recovery, reconciliation, trust and adaptation as infrastructure conditions change.'
		},
		{
			question: 'What is the Computing Fabric?',
			answer:
				'The Computing Fabric is the pool of computing capabilities available to the Runtime. It may include local machines, edge systems, cloud infrastructure, CPUs, GPUs, accelerators and future computing resources.'
		},
		{
			question: 'Does Softadastra eliminate infrastructure?',
			answer:
				'No. Infrastructure still exists. The goal is to make more of it an implementation detail of the computing system rather than something every application must be permanently designed around.'
		},
		{
			question: 'Is Softadastra building another cloud?',
			answer:
				'No. Cloud infrastructure is only one possible environment. The broader direction includes local computing, edge infrastructure, cloud resources, heterogeneous hardware and future infrastructure.'
		},
		{
			question: 'What is Softadastra Node?',
			answer:
				'Softadastra Node is a planned hardware direction: reference computing hardware designed to run the Softadastra Runtime and participate in a Softadastra computing fabric.'
		},
		{
			question: 'Will Softadastra Node be required to use the Runtime?',
			answer:
				'No. The Node is intended to be one infrastructure option, not an infrastructure dependency. The Runtime should be able to operate across compatible Softadastra hardware, existing machines, edge systems, cloud infrastructure and future computing resources.'
		},
		{
			question: 'Does Softadastra Node exist today?',
			answer:
				'Not as a commercial hardware product. It represents a future hardware direction. Its final architecture, specifications, manufacturing model and availability have not been fixed.'
		},
		{
			question: 'What is intent-driven adaptive computing?',
			answer:
				'It is Softadastra’s central technological direction. Software expresses intent, state and constraints, while an adaptive runtime interprets those requirements and determines how available computing resources can satisfy them.'
		},
		{
			question: 'What is Vix.cpp?',
			answer:
				'Vix.cpp is Softadastra’s open-source C++ developer platform. It provides developer tooling and a foundation for building modern systems while also serving as one path for experimenting with ideas related to Softadastra’s broader computing direction.'
		},
		{
			question: 'What is Softadastra Engine?',
			answer:
				'Softadastra Engine explores runtime foundations for resilient and offline-first applications. It focuses on systems that remain useful when connectivity is unreliable or unavailable and contributes toward the broader infrastructure-independent computing direction.'
		},
		{
			question: 'Does infrastructure-independent computing exist today?',
			answer:
				'Not in the complete form Softadastra is pursuing. It is a long-term research direction. The individual programming models, runtime capabilities, distributed systems and infrastructure abstractions must be developed and validated progressively.'
		},
		{
			question: 'Is Softadastra open source?',
			answer:
				'Important parts of Softadastra’s developer infrastructure are developed in the open. Vix.cpp is open source today, and additional components may become open as the research and technology develop.'
		},
		{
			question: 'How can I contribute?',
			answer:
				'You can explore the open-source work, follow the research and contribute through GitHub. Softadastra is especially interested in systems programming, distributed systems, runtimes, operating systems, compilers, programming languages, networking, reliability, security and heterogeneous computing.'
		}
	];
</script>

<section
	class="faq"
	id="faq"
	aria-labelledby="faq-title"
>
	<Container>
		<div class="faq-content">
			<h2 id="faq-title">
				FAQ
			</h2>

			<div class="faq-list">
				{#each faqs as faq}
					<article class="faq-item">
						<h3>
							{faq.question}
						</h3>

						<p>
							{faq.answer}
						</p>
					</article>
				{/each}
			</div>

			<nav
				class="faq-links"
				aria-label="Softadastra links"
			>
				<a href="/research">
					research
				</a>

				<span aria-hidden="true">
					|
				</span>

				<a href="/technology">
					technology
				</a>

				<span aria-hidden="true">
					|
				</span>

				<a href="/open-source">
					open source
				</a>

				<span aria-hidden="true">
					|
				</span>

				<a
					href="https://github.com/softadastra"
					target="_blank"
					rel="noopener noreferrer"
				>
					github
				</a>
			</nav>
		</div>
	</Container>
</section>

<style>
	.faq {
		background: var(--color-white);
		color: var(--color-text);
	}

	.faq-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: var(--section-padding);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Heading
	-------------------------------------------------- */

	.faq h2 {
		margin: 0 0 26px;

		color: var(--color-text);

		font-size: 1.35rem;
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;
		line-height: 1.35;
	}

	/* --------------------------------------------------
	   Questions
	-------------------------------------------------- */

	.faq-list {
		max-width: 1000px;
	}

	.faq-item {
		margin: 0;
	}

	.faq-item + .faq-item {
		margin-top: 27px;
	}

	.faq-item h3 {
		margin: 0 0 7px;

		color: var(--color-text);

		font-size: 0.96rem;
		font-style: italic;
		font-weight: var(--font-weight-normal);

		letter-spacing: -0.01em;
		line-height: 1.45;
	}

	.faq-item p {
		max-width: 960px;

		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.91rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.58;
	}

	/* --------------------------------------------------
	   Links
	-------------------------------------------------- */

	.faq-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		gap: 6px 10px;

		margin-top: 34px;

		font-size: 0.78rem;
		line-height: 1.4;
	}

	.faq-links a {
		position: relative;

		color: var(--color-text);

		text-decoration: none;
	}

	.faq-links a::after {
		position: absolute;

		right: 0;
		bottom: -2px;
		left: 0;

		height: 1px;

		background: var(--color-accent);

		content: '';

		transform: scaleX(0);
		transform-origin: right;

		transition:
			transform var(--transition-fast);
	}

	.faq-links a:hover {
		color: var(--color-accent);
	}

	.faq-links a:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.faq-links > span {
		color: var(--color-border-strong);

		user-select: none;
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.faq h2 {
			margin-bottom: 22px;

			font-size: 1.16rem;
		}

		.faq-item + .faq-item {
			margin-top: 23px;
		}

		.faq-item h3 {
			margin-bottom: 6px;

			font-size: 0.88rem;
		}

		.faq-item p {
			font-size: 0.82rem;

			line-height: 1.6;
		}

		.faq-links {
			gap: 5px 8px;

			margin-top: 29px;

			font-size: 0.71rem;
		}
	}
</style>
