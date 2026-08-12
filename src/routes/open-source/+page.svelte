<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const cgrideExample = `#include <cgride/project.hpp>

void cgride_configure(cgride::project::Project &project)
{
    auto &app = project.executable("app");

    app.sources("src/main.cpp");
}`;

	const openSourceSchema = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Softadastra Open Source',
		url: 'https://softadastra.com/open-source',
		description:
			'Open-source developer infrastructure, runtimes and reliability systems built and maintained by Softadastra.',
		publisher: {
			'@type': 'Organization',
			name: 'Softadastra',
			url: 'https://softadastra.com'
		},
		hasPart: [
			{
				'@type': 'SoftwareSourceCode',
				name: 'Vix.cpp',
				codeRepository: 'https://github.com/vixcpp/vix',
				url: 'https://vixcpp.com'
			},
			{
				'@type': 'SoftwareSourceCode',
				name: 'Softadastra Runtime',
				codeRepository: 'https://github.com/softadastra/runtime'
			},
			{
				'@type': 'SoftwareSourceCode',
				name: 'Cgride',
				codeRepository: 'https://github.com/cgride/cgride'
			},
			{
				'@type': 'SoftwareSourceCode',
				name: 'Kordex',
				codeRepository: 'https://github.com/softadastra/kordex'
			},
			{
				'@type': 'SoftwareSourceCode',
				name: 'Ivi.php',
				codeRepository: 'https://github.com/iviphp/ivi'
			}
		]
	};
</script>

<svelte:head>
	<title>Open Source — Softadastra</title>

	<meta
		name="description"
		content="Softadastra builds open-source developer infrastructure, runtimes and reliability systems including Vix.cpp, Softadastra Runtime, Cgride, Cnerium, Kordex and Ivi.php."
	/>

	<meta
		name="keywords"
		content="Softadastra open source, Vix.cpp, Softadastra Runtime, Cgride, Cnerium, Kordex, Ivi.php, C++, build systems, runtimes, local-first computing, developer infrastructure"
	/>

	<meta name="author" content="Softadastra" />
	<meta name="robots" content="index, follow" />

	<link
		rel="canonical"
		href="https://softadastra.com/open-source"
	/>

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Softadastra" />

	<meta
		property="og:url"
		content="https://softadastra.com/open-source"
	/>

	<meta
		property="og:title"
		content="Open Source — Softadastra"
	/>

	<meta
		property="og:description"
		content="Open-source developer infrastructure, runtimes and reliability systems built by Softadastra."
	/>

	<meta
		name="twitter:card"
		content="summary_large_image"
	/>

	<meta
		name="twitter:title"
		content="Open Source — Softadastra"
	/>

	<meta
		name="twitter:description"
		content="Open-source systems and developer infrastructure from Softadastra."
	/>

	<script type="application/ld+json">
		{JSON.stringify(openSourceSchema)}
	</script>
</svelte:head>

<main class="open-source-page">
	<section
		class="hero"
		aria-labelledby="open-source-title"
	>
		<Container>
			<div class="hero-content">
				<div class="hero-title">
					<p>
						Open Source
					</p>

					<h1 id="open-source-title">
						Software we build
						<span>in the open.</span>
					</h1>
				</div>

				<div class="hero-copy">
					<p>
						Softadastra builds developer infrastructure, runtimes and
						reliability systems in public.
					</p>

					<p>
						The projects below are the open-source systems that best represent
						our current technical direction.
					</p>

					<a
						href="https://github.com/softadastra"
						target="_blank"
						rel="noopener noreferrer"
					>
						github.com/softadastra ↗
					</a>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="core"
		aria-labelledby="core-title"
	>
		<Container>
			<div class="core-content">
				<header class="core-heading">
					<h2 id="core-title">
						Current core
					</h2>

					<p>
						The developer platform we maintain and the runtime we are building.
					</p>
				</header>

				<div class="core-projects">
					<article class="vix">
						<div class="project-top">
							<span class="status status--active">
								maintained
							</span>

							<span class="language">
								C++
							</span>
						</div>

						<h3>
							Vix.cpp
						</h3>

						<p class="project-role">
							C++ developer platform
						</p>

						<p class="project-description">
							An open-source developer platform and systems foundation for
							building modern C++ software.
						</p>

						<div class="project-surface">
							<span>build</span>
							<span>run</span>
							<span>modules</span>
							<span>packages</span>
							<span>developer tooling</span>
						</div>

						<div class="project-actions">
							<a
								href="https://vixcpp.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								vixcpp.com ↗
							</a>

							<a
								href="https://github.com/vixcpp/vix"
								target="_blank"
								rel="noopener noreferrer"
							>
								source ↗
							</a>
						</div>
					</article>

					<div
						class="core-connector"
						aria-hidden="true"
					>
						<span></span>
						<strong>→</strong>
					</div>

					<article class="runtime">
						<div class="project-top">
							<span class="status">
								in progress
							</span>

							<span class="language">
								systems
							</span>
						</div>

						<h3>
							Softadastra Runtime
						</h3>

						<p class="project-role">
							Adaptive execution runtime
						</p>

						<p class="project-description">
							The execution layer being developed for
							infrastructure-independent computing.
						</p>

						<div class="runtime-flow">
							<span>intent</span>
							<span aria-hidden="true">→</span>
							<strong>runtime</strong>
							<span aria-hidden="true">→</span>
							<span>infrastructure</span>
						</div>

						<div class="project-actions">
							<a
								href="https://github.com/softadastra/runtime"
								target="_blank"
								rel="noopener noreferrer"
							>
								source ↗
							</a>

							<a href="/technology">
								architecture →
							</a>
						</div>
					</article>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="systems"
		aria-labelledby="systems-title"
	>
		<Container>
			<div class="systems-content">
				<div class="systems-intro">
					<h2 id="systems-title">
						Systems around the work.
					</h2>

					<p>
						Focused projects that solve specific problems around building,
						executing and operating software.
					</p>
				</div>

				<div class="systems-layout">
					<article class="cgride">
						<div class="system-header">
							<span class="status status--active">
								stable
							</span>

							<span>
								C++
							</span>
						</div>

						<div class="cgride-name">
							<h3>
								Cgride
							</h3>

							<p>
								Native build engine
							</p>
						</div>

						<p class="cgride-lead">
							Describe a C++ project
							<strong>with C++ itself.</strong>
						</p>

						<p class="system-description">
							An embeddable native build engine with a small CLI on top.
							Projects use a real C++ API rather than another configuration
							language.
						</p>

<div
	class="code-sample"
	aria-label="Cgride project example"
>
	<span>
		cgride.cpp
	</span>

	<pre><code>{cgrideExample}</code></pre>
</div>

						<div class="system-footer">
							<span>
								build engine · graph · toolchains · cache · executor
							</span>

							<a
								href="https://github.com/cgride/cgride"
								target="_blank"
								rel="noopener noreferrer"
							>
								source ↗
							</a>
						</div>
					</article>

					<div class="system-side">
						<article class="system-line cnerium">
							<div class="system-line-meta">
								<span class="status status--active">
									maintained
								</span>

								<span>
									C++
								</span>
							</div>

							<div class="system-line-main">
								<div>
									<h3>
										Cnerium
									</h3>

									<p class="system-role">
										Reliability layer for Vix
									</p>
								</div>

								<p>
									Durable behavior for critical Vix write operations:
									idempotency, safe retries, replay protection and stored
									responses.
								</p>
							</div>

							<div class="system-line-bottom">
								<span>
									Vix + durability
								</span>

								<div>
									<a
										href="https://cnerium.dev"
										target="_blank"
										rel="noopener noreferrer"
									>
										cnerium.dev ↗
									</a>

									<a
										href="https://docs.cnerium.dev"
										target="_blank"
										rel="noopener noreferrer"
									>
										docs ↗
									</a>
								</div>
							</div>
						</article>

						<article class="system-line kordex">
							<div class="system-line-meta">
								<span class="status">
									early-stage
								</span>

								<span>
									JS / TS + C++
								</span>
							</div>

							<div class="system-line-main">
								<div>
									<h3>
										Kordex
									</h3>

									<p class="system-role">
										Local-first JavaScript runtime
									</p>
								</div>

								<p>
									JavaScript and TypeScript execution for reliable local-first
									applications with explicit native permissions.
								</p>
							</div>

							<div class="permission-line">
								<span>fs</span>
								<span>env</span>
								<span>network</span>
								<span>process</span>
								<span>softadastra</span>
							</div>

							<div class="system-line-bottom">
								<span>
									local-first · permission-aware · embeddable
								</span>

								<a
									href="https://github.com/softadastra/kordex"
									target="_blank"
									rel="noopener noreferrer"
								>
									source ↗
								</a>
							</div>
						</article>

						<article class="system-line ivi">
							<div class="system-line-meta">
								<span class="status status--active">
									maintained
								</span>

								<span>
									PHP
								</span>
							</div>

							<div class="system-line-main">
								<div>
									<h3>
										Ivi.php
									</h3>

									<p class="system-role">
										Application foundation
									</p>
								</div>

								<p>
									A modular foundation for web and console applications with
									explicit bootstrapping, service providers and a predictable
									application lifecycle.
								</p>
							</div>

							<div class="ivi-flow">
								<span>bootstrap</span>
								<span aria-hidden="true">→</span>
								<span>providers</span>
								<span aria-hidden="true">→</span>
								<span>application</span>
							</div>

							<div class="system-line-bottom">
								<span>
									modular · explicit · replaceable services
								</span>

								<a
									href="https://github.com/iviphp/ivi"
									target="_blank"
									rel="noopener noreferrer"
								>
									source ↗
								</a>
							</div>
						</article>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section
		class="open-principle"
		aria-labelledby="principle-title"
	>
		<Container>
			<div class="principle-content">
				<p class="principle-label">
					Why open source
				</p>

				<h2 id="principle-title">
					Technical ideas are more useful when
					<span>the implementation can be inspected.</span>
				</h2>

				<div class="principle-bottom">
					<p>
						We use open development to turn architecture into software that can
						be read, built, measured, questioned and improved.
					</p>

					<div class="principle-words">
						<span>read</span>
						<span aria-hidden="true">→</span>
						<span>build</span>
						<span aria-hidden="true">→</span>
						<span>measure</span>
						<span aria-hidden="true">→</span>
						<span>improve</span>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section class="end">
		<Container>
			<div class="end-content">
				<p>
					Explore the source.
				</p>

				<nav aria-label="Open source links">
					<a
						href="https://github.com/softadastra"
						target="_blank"
						rel="noopener noreferrer"
					>
						Softadastra ↗
					</a>

					<a
						href="https://github.com/vixcpp"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vix.cpp ↗
					</a>

					<a
						href="https://github.com/cgride"
						target="_blank"
						rel="noopener noreferrer"
					>
						Cgride ↗
					</a>
				</nav>
			</div>
		</Container>
	</section>
</main>

<style>
	.open-source-page {
		background: var(--color-white);
		color: var(--color-text);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Hero
	-------------------------------------------------- */

	.hero-content {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			minmax(300px, 0.65fr);

		gap: clamp(40px, 9vw, 110px);

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(52px, 6vw, 72px);
	}

	.hero-title > p {
		margin: 0;

		color: var(--color-accent);

		font-size: 0.66rem;
		font-weight: var(--font-weight-semibold);

		line-height: 1.4;
	}

	.hero-title h1 {
		max-width: 650px;

		margin: 8px 0 0;

		color: var(--color-text);

		font-size: clamp(1.7rem, 3vw, 2.45rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.04em;
		line-height: 1.15;
	}

	.hero-title h1 span {
		color: var(--color-accent);
	}

	.hero-copy {
		align-self: end;

		max-width: 570px;
	}

	.hero-copy p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.79rem;

		line-height: 1.65;
	}

	.hero-copy p + p {
		margin-top: 9px;
	}

	.hero-copy a {
		display: inline-block;

		margin-top: 14px;

		color: var(--color-accent);

		font-size: 0.67rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* --------------------------------------------------
	   Core
	-------------------------------------------------- */

	.core {
		border-top: 1px solid var(--color-border);
	}

	.core-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(40px, 4vw, 52px);
	}

	.core-heading {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		gap: 30px;

		margin-bottom: 28px;
	}

	.core-heading h2 {
		margin: 0;

		color: var(--color-text);

		font-size: 1.15rem;
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;
	}

	.core-heading p {
		max-width: 550px;

		margin: 0;

		color: var(--color-muted);

		font-size: 0.67rem;
		line-height: 1.5;

		text-align: right;
	}

	.core-projects {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			56px
			minmax(0, 1fr);

		align-items: stretch;
	}

	.vix,
	.runtime {
		min-width: 0;

		padding-block: 12px 6px;
	}

	.vix {
		padding-right: clamp(25px, 4vw, 50px);
	}

	.runtime {
		padding-left: clamp(25px, 4vw, 50px);
	}

	.project-top,
	.system-header,
	.system-line-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;

		gap: 14px;
	}

	.status {
		color: var(--color-accent);

		font-size: 0.59rem;
		font-weight: var(--font-weight-semibold);
	}

	.status--active {
		color: var(--color-text);
	}

	.language,
	.system-header > span:last-child,
	.system-line-meta > span:last-child {
		color: var(--color-muted);

		font-size: 0.57rem;
	}

	.vix h3,
	.runtime h3 {
		margin: 22px 0 0;

		color: var(--color-text);

		font-size: clamp(1.45rem, 2.5vw, 2rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.045em;
		line-height: 1.05;
	}

	.runtime h3 {
		color: var(--color-accent);
	}

	.project-role {
		margin: 7px 0 0;

		color: var(--color-muted);

		font-size: 0.67rem;
		line-height: 1.4;
	}

	.project-description {
		max-width: 580px;

		margin: 19px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.77rem;

		line-height: 1.65;
	}

	.project-surface {
		display: flex;
		flex-wrap: wrap;

		gap: 5px 0;

		margin-top: 19px;

		color: var(--color-muted);

		font-size: 0.6rem;
	}

	.project-surface span:not(:last-child)::after {
		margin-inline: 8px;

		color: var(--color-border-strong);

		content: '·';
	}

	.runtime-flow {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		gap: 6px 9px;

		margin-top: 19px;

		color: var(--color-muted);

		font-size: 0.62rem;
	}

	.runtime-flow strong {
		color: var(--color-accent);
	}

	.runtime-flow > span:nth-child(even) {
		color: var(--color-border-strong);
	}

	.project-actions {
		display: flex;
		flex-wrap: wrap;

		gap: 8px 18px;

		margin-top: 22px;
	}

	.project-actions a {
		color: var(--color-accent);

		font-size: 0.65rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.core-connector {
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		color: var(--color-border-strong);
	}

	.core-connector span {
		position: absolute;

		top: 0;
		bottom: 0;
		left: 50%;

		width: 1px;

		background: var(--color-border);
	}

	.core-connector strong {
		position: relative;

		padding-block: 5px;

		background: var(--color-white);

		color: var(--color-accent);

		font-size: 0.8rem;
	}

	/* --------------------------------------------------
	   Systems
	-------------------------------------------------- */

	.systems {
		border-top: 1px solid var(--color-border);
	}

	.systems-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(40px, 4vw, 54px);
	}

	.systems-intro {
		display: grid;
		grid-template-columns:
			minmax(0, 0.7fr)
			minmax(0, 1.3fr);

		gap: clamp(40px, 8vw, 100px);

		margin-bottom: 30px;
	}

	.systems-intro h2 {
		margin: 0;

		color: var(--color-text);

		font-size: clamp(1.05rem, 1.6vw, 1.3rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;
	}

	.systems-intro p {
		max-width: 650px;

		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.75rem;
		line-height: 1.65;
	}

	.systems-layout {
		display: grid;
		grid-template-columns:
			minmax(0, 1.08fr)
			minmax(0, 0.92fr);

		gap: clamp(36px, 6vw, 80px);
	}

	/* --------------------------------------------------
	   Cgride feature
	-------------------------------------------------- */

	.cgride {
		min-width: 0;

		padding-top: 13px;

		border-top: 2px solid var(--color-accent);
	}

	.cgride-name {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		gap: 20px;

		margin-top: 20px;
	}

	.cgride h3 {
		margin: 0;

		color: var(--color-text);

		font-size: clamp(1.55rem, 3vw, 2.3rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.05em;
		line-height: 1;
	}

	.cgride-name > p {
		margin: 0;

		color: var(--color-muted);

		font-size: 0.62rem;
	}

	.cgride-lead {
		max-width: 650px;

		margin: 26px 0 0;

		color: var(--color-text);

		font-size: clamp(0.95rem, 1.5vw, 1.14rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;

		line-height: 1.55;
	}

	.cgride-lead strong {
		color: var(--color-accent);
	}

	.system-description {
		max-width: 650px;

		margin: 12px 0 0;

		color: var(--color-text-secondary);

		font-size: 0.73rem;
		line-height: 1.65;
	}

	.code-sample {
		margin-top: 25px;
	}

	.code-sample > span {
		display: block;

		margin-bottom: 7px;

		color: var(--color-muted);

		font-size: 0.58rem;
	}

	.code-sample pre {
		margin: 0;
		padding: 16px 18px;

		overflow-x: auto;

		border-left: 2px solid var(--color-accent);

		background: rgb(0 0 0 / 1.8%);

		color: var(--color-text);

		font-family: var(--font-mono);

		font-size: 0.65rem;
		line-height: 1.6;
	}

	.system-footer {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		gap: 20px;

		margin-top: 18px;
	}

	.system-footer > span {
		color: var(--color-muted);

		font-size: 0.57rem;
		line-height: 1.5;
	}

	.system-footer a {
		flex: 0 0 auto;

		color: var(--color-accent);

		font-size: 0.63rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* --------------------------------------------------
	   Side systems
	-------------------------------------------------- */

	.system-side {
		border-top: 1px solid var(--color-border);
	}

	.system-line {
		padding-block: 16px 18px;

		border-bottom: 1px solid var(--color-border);
	}

	.system-line-main {
		display: grid;
		grid-template-columns:
			minmax(140px, 0.65fr)
			minmax(0, 1.35fr);

		gap: 22px;

		margin-top: 18px;
	}

	.system-line h3 {
		margin: 0;

		color: var(--color-text);

		font-size: 0.92rem;
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.02em;
		line-height: 1.3;
	}

	.system-role {
		margin: 4px 0 0 !important;

		color: var(--color-muted) !important;

		font-size: 0.59rem !important;
	}

	.system-line-main > p {
		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.68rem;
		line-height: 1.6;
	}

	.permission-line,
	.ivi-flow {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		gap: 5px 8px;

		margin-top: 15px;

		color: var(--color-muted);

		font-size: 0.56rem;
	}

	.permission-line span:not(:last-child)::after {
		margin-left: 8px;

		color: var(--color-border-strong);

		content: '/';
	}

	.ivi-flow > span:nth-child(even) {
		color: var(--color-border-strong);
	}

	.system-line-bottom {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		gap: 20px;

		margin-top: 15px;
	}

	.system-line-bottom > span {
		color: var(--color-muted);

		font-size: 0.56rem;
		line-height: 1.4;
	}

	.system-line-bottom > div {
		display: flex;

		gap: 12px;
	}

	.system-line-bottom a {
		flex: 0 0 auto;

		color: var(--color-accent);

		font-size: 0.6rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* --------------------------------------------------
	   Open principle
	-------------------------------------------------- */

	.open-principle {
		border-top: 1px solid var(--color-border);
	}

	.principle-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: clamp(42px, 5vw, 62px);
	}

	.principle-label {
		margin: 0;

		color: var(--color-muted);

		font-size: 0.62rem;
		font-weight: var(--font-weight-semibold);
	}

	.principle-content h2 {
		max-width: 1000px;

		margin: 13px 0 0;

		color: var(--color-text);

		font-size: clamp(1.25rem, 2.5vw, 2rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.035em;
		line-height: 1.35;
	}

	.principle-content h2 span {
		color: var(--color-accent);
	}

	.principle-bottom {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr)
			auto;

		gap: 35px;

		align-items: end;

		margin-top: 26px;
	}

	.principle-bottom > p {
		max-width: 650px;

		margin: 0;

		color: var(--color-text-secondary);

		font-size: 0.73rem;
		line-height: 1.65;
	}

	.principle-words {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		gap: 5px 9px;

		color: var(--color-text);

		font-size: 0.64rem;
		font-weight: var(--font-weight-semibold);
	}

	.principle-words > span:nth-child(even) {
		color: var(--color-accent);
	}

	/* --------------------------------------------------
	   End
	-------------------------------------------------- */

	.end {
		border-top: 1px solid var(--color-border);
	}

	.end-content {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		gap: 30px;

		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: 24px;
	}

	.end-content > p {
		margin: 0;

		color: var(--color-text);

		font-size: 0.7rem;
		font-weight: var(--font-weight-bold);
	}

	.end nav {
		display: flex;
		flex-wrap: wrap;

		gap: 8px 19px;
	}

	.end nav a {
		color: var(--color-accent);

		font-size: 0.63rem;
		font-weight: var(--font-weight-semibold);

		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* --------------------------------------------------
	   Links
	-------------------------------------------------- */

	a {
		transition: color var(--transition-fast);
	}

	a:hover {
		color: var(--color-text);
	}

	/* --------------------------------------------------
	   Tablet
	-------------------------------------------------- */

	@media (max-width: 860px) {
		.hero-content,
		.systems-intro,
		.systems-layout {
			grid-template-columns: 1fr;

			gap: 27px;
		}

		.hero-copy {
			max-width: 700px;
		}

		.core-projects {
			grid-template-columns: 1fr;
		}

		.vix,
		.runtime {
			padding-inline: 0;
		}

		.core-connector {
			height: 45px;
		}

		.core-connector span {
			top: 0;
			bottom: 0;
		}

		.core-connector strong {
			transform: rotate(90deg);
		}

		.systems-layout {
			gap: 40px;
		}
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.hero-content {
			padding-block: 42px 38px;
		}

		.hero-title h1 {
			font-size: 1.62rem;
		}

		.hero-copy p {
			font-size: 0.74rem;
		}

		.core-content,
		.systems-content {
			padding-block: 36px;
		}

		.core-heading {
			flex-direction: column;
			align-items: flex-start;

			gap: 6px;

			margin-bottom: 23px;
		}

		.core-heading p {
			text-align: left;
		}

		.vix h3,
		.runtime h3 {
			font-size: 1.4rem;
		}

		.project-description {
			font-size: 0.72rem;
		}

		.cgride-name {
			align-items: flex-start;
			flex-direction: column;

			gap: 5px;
		}

		.cgride h3 {
			font-size: 1.55rem;
		}

		.cgride-lead {
			font-size: 0.91rem;
		}

		.code-sample pre {
			padding: 13px 14px;

			font-size: 0.59rem;
		}

		.system-footer {
			flex-direction: column;

			gap: 8px;
		}

		.system-line-main {
			grid-template-columns: 1fr;

			gap: 9px;
		}

		.system-line-main > p {
			font-size: 0.65rem;
		}

		.system-line-bottom {
			align-items: flex-start;
			flex-direction: column;

			gap: 8px;
		}

		.principle-content {
			padding-block: 38px;
		}

		.principle-content h2 {
			font-size: 1.12rem;
		}

		.principle-bottom {
			grid-template-columns: 1fr;

			gap: 19px;
		}

		.end-content {
			align-items: flex-start;
			flex-direction: column;

			gap: 9px;

			padding-block: 21px;
		}
	}
</style>
