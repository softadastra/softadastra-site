<script lang="ts">
	const release = {
		version: '0.1.0',
		platform: 'Windows 10 / 11',
		downloadUrl:
			'https://updates.softadastra.com/oscar-service/Oscar-Service-Setup-0.1.0.exe',
		fileName: 'Oscar-Service-Setup-0.1.0.exe',
		size: '107 Mo'
	};

	const features = [
		{
			title: 'Enregistrez vos transactions',
			description: 'Ajoutez rapidement les informations d’une nouvelle opération.'
		},
		{
			title: 'Retrouvez vos opérations',
			description: 'Consultez facilement les transactions déjà enregistrées.'
		},
		{
			title: 'Corrigez une transaction lorsque nécessaire',
			description: 'Modifiez une transaction lorsque vous devez corriger une information.'
		},
		{
			title: 'Créez vos rapports et enregistrez-les en PDF',
			description: 'Préparez vos rapports et enregistrez-les facilement en PDF.'
		}
	];

	const installationSteps = [
		{
			title: 'Téléchargez Oscar Service',
			description: 'Cliquez sur le bouton de téléchargement.'
		},
		{
			title: 'Ouvrez le fichier téléchargé',
			description:
				'Une fois le téléchargement terminé, ouvrez le fichier d’installation.'
		},
		{
			title: 'Suivez l’installation',
			description:
				'Oscar Service sera ensuite disponible directement sur votre ordinateur.'
		}
	];

	const softwareSchema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Oscar Service',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Windows 10, Windows 11',
		softwareVersion: release.version,
		downloadUrl: release.downloadUrl,
		publisher: {
			'@type': 'Organization',
			name: 'Softadastra',
			url: 'https://softadastra.com'
		}
	};
</script>

<svelte:head>
	<title>Oscar Service | Softadastra</title>
	<meta
		name="description"
		content="Oscar Service vous permet de gérer simplement vos transactions et vos rapports depuis votre ordinateur Windows."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://softadastra.com/oscar-service" />
	<meta name="theme-color" content="#08090b" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Softadastra" />
	<meta property="og:title" content="Oscar Service | Softadastra" />
	<meta
		property="og:description"
		content="Gérez simplement vos transactions et vos rapports depuis votre ordinateur Windows."
	/>
	<meta property="og:url" content="https://softadastra.com/oscar-service" />
	<meta property="og:image" content="https://softadastra.com/og-logo.png" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:image:alt" content="Softadastra logo" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Oscar Service | Softadastra" />
	<meta
		name="twitter:description"
		content="Gérez simplement vos transactions et vos rapports depuis votre ordinateur Windows."
	/>
	<meta name="twitter:image" content="https://softadastra.com/og-logo.png" />

	{@html `<script type="application/ld+json">${JSON.stringify(softwareSchema)}</script>`}
</svelte:head>

<main class="oscar-service">
	<section class="hero" aria-labelledby="oscar-service-title">
		<div class="container hero-content">
			<p class="eyebrow">Softadastra</p>
			<h1 id="oscar-service-title">Oscar Service</h1>
			<p class="hero-subtitle">
				Gérez simplement vos transactions et vos rapports depuis votre ordinateur.
			</p>
			<a class="primary-button" href={release.downloadUrl} aria-describedby="hero-release-info">
				Télécharger pour Windows
			</a>
			<p id="hero-release-info" class="release-info">
				{release.platform} · {release.size}
			</p>
		</div>
	</section>

	<section class="section" aria-labelledby="features-title">
		<div class="container">
			<div class="section-heading">
				<p class="section-label">Simple au quotidien</p>
				<h2 id="features-title">Tout ce qu’il faut pour gérer votre travail</h2>
				<p>
					Oscar Service rassemble vos opérations dans une seule application facile à utiliser.
				</p>
			</div>

			<div class="features">
				{#each features as feature, index}
					<article class="feature">
						<p class="feature-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
						<div>
							<h3>{feature.title}</h3>
							<p>{feature.description}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="section section-download" aria-labelledby="download-title">
		<div class="container">
			<div class="download-card">
				<div>
					<p class="section-label">Oscar Service pour Windows</p>
					<h2 id="download-title">Installez Oscar Service sur votre ordinateur</h2>
					<p class="download-description">
						Téléchargez l’application et commencez simplement à gérer vos transactions.
					</p>
					<a class="primary-button" href={release.downloadUrl} aria-describedby="download-release-info">
						Télécharger pour Windows
					</a>
					<p id="download-release-info" class="release-info">
						{release.platform} · {release.size} · Version {release.version}
					</p>
					<p class="file-name">Fichier: {release.fileName}</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section installation" aria-labelledby="installation-title">
		<div class="container installation-grid">
			<div class="section-heading">
				<p class="section-label">Installation</p>
				<h2 id="installation-title">Comment l’installer ?</h2>
				<p>Trois étapes suffisent.</p>
			</div>

			<ol class="steps">
				{#each installationSteps as step, index}
					<li>
						<span class="step-number">{index + 1}</span>
						<div>
							<h3>{step.title}</h3>
							<p>{step.description}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<section class="section section-compact" aria-label="Avertissement Windows">
		<div class="container">
			<details class="warning">
				<summary>Windows affiche un avertissement ?</summary>
				<div class="warning-content">
					<p>Sur certains ordinateurs, Windows peut demander une confirmation avant l’installation.</p>
					<p>
						Cliquez sur <strong>Informations complémentaires</strong>, puis sur
						<strong>Exécuter quand même</strong>.
					</p>
				</div>
			</details>
		</div>
	</section>

	<section class="final" aria-labelledby="final-title">
		<div class="container final-inner">
			<div>
				<p class="section-label">Oscar Service</p>
				<h2 id="final-title">Prêt à commencer ?</h2>
				<p>Installez Oscar Service sur votre ordinateur Windows.</p>
			</div>
			<a class="primary-button" href={release.downloadUrl}>Télécharger pour Windows</a>
		</div>
	</section>

	<footer class="footer-note">
		<div class="container">
			<p>Les prochaines mises à jour pourront être installées directement depuis Oscar Service.</p>
			<p>Développé par <a href="/">Softadastra</a>.</p>
		</div>
	</footer>
</main>

<style>
	.oscar-service {
		--oscar-bg: #08090b;
		--oscar-surface: #101216;
		--oscar-surface-soft: #15181d;
		--oscar-border: rgb(255 255 255 / 9%);
		--oscar-text: #f4f5f7;
		--oscar-muted: #999fa8;
		--oscar-orange: #f47b20;

		min-height: 100vh;
		background: radial-gradient(circle at 50% -15%, rgb(244 123 32 / 10%), transparent 34rem), var(--oscar-bg);
		color: var(--oscar-text);
		font-family: var(--font-sans);
	}

	.oscar-service > section,
	.oscar-service > footer {
		background: transparent;
	}

	.oscar-service > section::after {
		display: none;
	}

	.container {
		width: min(1120px, calc(100% - 40px));
		margin-inline: auto;
	}

	.hero {
		padding: clamp(96px, 12vw, 150px) 0 clamp(72px, 9vw, 110px);
		text-align: center;
	}

	.hero-content {
		max-width: 780px;
	}

	.eyebrow,
	.section-label {
		margin: 0 0 14px;
		color: var(--oscar-orange);
		font-size: 0.82rem;
		font-weight: var(--font-weight-bold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1,
	h2,
	h3 {
		color: var(--oscar-text);
	}

	h1 {
		font-size: clamp(3rem, 7vw, 5.4rem);
		font-weight: var(--font-weight-bold);
		letter-spacing: -0.06em;
		line-height: 0.98;
	}

	.hero-subtitle {
		max-width: 660px;
		margin: 30px auto 36px;
		color: var(--oscar-muted);
		font-size: clamp(1.08rem, 2vw, 1.35rem);
		line-height: 1.65;
	}

	.primary-button {
		display: inline-flex;
		min-height: 52px;
		align-items: center;
		justify-content: center;
		padding: 0 25px;
		border-radius: 10px;
		background: var(--oscar-orange);
		color: #111;
		font-size: 1rem;
		font-weight: var(--font-weight-bold);
		text-align: center;
		transition: background-color var(--transition-fast), transform var(--transition-fast);
	}

	.primary-button:hover {
		background: var(--color-accent-hover);
		color: #111;
		transform: translateY(-1px);
	}

	.release-info,
	.file-name {
		margin: 17px 0 0;
		color: var(--oscar-muted);
		font-size: 0.88rem;
	}

	.file-name {
		margin-top: 6px;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		overflow-wrap: anywhere;
	}

	.section {
		padding: clamp(56px, 8vw, 90px) 0;
	}

	.section-heading {
		max-width: 650px;
		margin-bottom: 48px;
	}

	.section-heading h2,
	.download-card h2,
	.final h2 {
		font-size: clamp(2rem, 4vw, 3.2rem);
		letter-spacing: -0.045em;
		line-height: 1.06;
	}

	.section-heading > p:last-child,
	.download-description,
	.final p:not(.section-label) {
		margin: 20px 0 0;
		color: var(--oscar-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		border-top: 1px solid var(--oscar-border);
		border-left: 1px solid var(--oscar-border);
	}

	.feature {
		display: flex;
		gap: 22px;
		padding: 34px;
		border-right: 1px solid var(--oscar-border);
		border-bottom: 1px solid var(--oscar-border);
	}

	.feature-index {
		margin: 0;
		color: var(--oscar-orange);
		font-family: var(--font-mono);
		font-size: 0.82rem;
		font-weight: var(--font-weight-bold);
	}

	.feature h3,
	.steps h3 {
		margin: 0 0 9px;
		font-size: 1.05rem;
	}

	.feature p:not(.feature-index),
	.steps p {
		margin: 0;
		color: var(--oscar-muted);
		line-height: 1.65;
	}

	.section-download {
		padding-block: clamp(48px, 6vw, 70px);
	}

	.download-card {
		padding: clamp(38px, 7vw, 72px);
		border: 1px solid var(--oscar-border);
		border-radius: 22px;
		background: radial-gradient(circle at 100% 0%, rgb(244 123 32 / 12%), transparent 24rem), var(--oscar-surface);
	}

	.download-card > div {
		max-width: 650px;
	}

	.download-description {
		max-width: 570px;
		margin-bottom: 30px;
	}

	.installation-grid {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: clamp(40px, 8vw, 110px);
		align-items: start;
	}

	.steps {
		display: grid;
		margin: 0;
		padding: 0;
	}

	.steps li {
		display: grid;
		grid-template-columns: 44px 1fr;
		gap: 18px;
		padding: 26px 0;
		border-bottom: 1px solid var(--oscar-border);
	}

	.steps li:first-child {
		padding-top: 0;
	}

	.step-number {
		display: flex;
		width: 38px;
		height: 38px;
		align-items: center;
		justify-content: center;
		border: 1px solid rgb(244 123 32 / 30%);
		border-radius: 50%;
		color: var(--oscar-orange);
		font-size: 0.86rem;
		font-weight: var(--font-weight-bold);
	}

	.section-compact {
		padding-top: 10px;
		padding-bottom: clamp(70px, 8vw, 100px);
	}

	.warning {
		border: 1px solid var(--oscar-border);
		border-radius: 14px;
		background: var(--oscar-surface);
	}

	.warning summary {
		position: relative;
		padding: 22px 56px 22px 24px;
		cursor: pointer;
		font-weight: var(--font-weight-semibold);
		list-style: none;
	}

	.warning summary::-webkit-details-marker {
		display: none;
	}

	.warning summary::after {
		position: absolute;
		top: 50%;
		right: 24px;
		color: var(--oscar-orange);
		content: '+';
		font-size: 1.4rem;
		transform: translateY(-50%);
	}

	.warning[open] summary::after {
		content: '−';
	}

	.warning-content {
		max-width: 720px;
		padding: 0 24px 24px;
		color: var(--oscar-muted);
		line-height: 1.7;
	}

	.warning-content p + p {
		margin-top: 10px;
	}

	.warning-content strong {
		color: var(--oscar-text);
	}

	.final {
		padding: clamp(56px, 7vw, 72px) 0;
		border-top: 1px solid var(--oscar-border);
		border-bottom: 1px solid var(--oscar-border);
		background: var(--oscar-surface) !important;
	}

	.final-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
	}

	.final p:not(.section-label) {
		margin-top: 14px;
	}

	.footer-note {
		padding: 35px 0 55px;
		color: var(--oscar-muted);
		font-size: 0.86rem;
		text-align: center;
	}

	.footer-note p + p {
		margin-top: 7px;
	}

	.footer-note a {
		color: var(--oscar-text);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	@media (max-width: 760px) {
		.container {
			width: min(1120px, calc(100% - 28px));
		}

		.features,
		.installation-grid {
			grid-template-columns: 1fr;
		}

		.feature {
			padding: 26px 22px;
		}

		.download-card {
			padding: 32px 22px;
			border-radius: 17px;
		}

		.installation-grid {
			gap: 20px;
		}

		.final-inner {
			align-items: stretch;
			flex-direction: column;
		}

		.final .primary-button,
		.hero .primary-button,
		.download-card .primary-button {
			width: 100%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.primary-button:hover {
			transform: none;
		}
	}
</style>
