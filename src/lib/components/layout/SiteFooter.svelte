<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

const navigation = [
	{ label: 'Research', href: '/research' },
	{ label: 'Technology', href: '/technology' },
	{ label: 'The System', href: '/#system' },
	{ label: 'Open Source', href: '/open-source' },
	{ label: 'Company', href: '/company' }
];

	const external = [
		{
			label: 'Vix.cpp',
			href: 'https://vixcpp.com'
		},
		{
			label: 'GitHub',
			href: 'https://github.com/softadastra'
		}
	];
</script>

<footer class="site-footer">
	<Container>
		<div class="footer-main">
			<div class="footer-brand">
				<a href="/" class="brand" aria-label="Softadastra home">
					<span class="brand-mark" aria-hidden="true"></span>
					<span class="brand-name">Softadastra</span>
				</a>

				<p>Make computing infrastructure-independent.</p>
			</div>

			<div class="footer-navigation">
				<div class="footer-column">
					<span class="column-label">Explore</span>

					<nav aria-label="Footer navigation">
						{#each navigation as item}
							<a href={item.href}>{item.label}</a>
						{/each}
					</nav>
				</div>

				<div class="footer-column">
					<span class="column-label">Technology</span>

					<div class="footer-links">
						{#each external as item}
							<a
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.label}

								<svg
									viewBox="0 0 16 16"
									fill="none"
									aria-hidden="true"
								>
									<path
										d="M5.5 10.5L10.5 5.5M6.5 5.5H10.5V9.5"
										stroke="currentColor"
										stroke-width="1.3"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p>© {new Date().getFullYear()} Softadastra.</p>

			<p class="footer-principle">
				Software expresses intent.
				<span>Infrastructure satisfies it.</span>
			</p>
		</div>
	</Container>
</footer>

<style>
	.site-footer {
		background: var(--color-white);
	}

	.footer-main {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: clamp(64px, 10vw, 160px);
		padding-block: clamp(72px, 8vw, 104px);
	}

	.footer-brand {
		max-width: 420px;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		color: var(--color-black);
	}

	.brand:hover {
		color: var(--color-black);
	}

	.brand-mark {
		display: block;
		width: 30px;
		height: 30px;
		flex: 0 0 30px;
		background: var(--color-accent);
		-webkit-mask: url('/logo.svg') center / contain no-repeat;
		mask: url('/logo.svg') center / contain no-repeat;
	}

	.brand-name {
		font-size: 1.05rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.025em;
	}

	.footer-brand > p {
		max-width: 330px;
		margin-top: var(--space-5);
		color: var(--color-muted);
		font-size: 0.95rem;
		line-height: 1.65;
	}

	.footer-navigation {
		display: grid;
		grid-template-columns: repeat(2, minmax(140px, 1fr));
		gap: clamp(48px, 6vw, 88px);
	}

	.footer-column {
		min-width: 140px;
	}

	.column-label {
		display: block;
		margin-bottom: var(--space-5);
		color: var(--color-muted);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.footer-column nav,
	.footer-links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-3);
	}

	.footer-column a {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		color: var(--color-text-secondary);
		font-size: 0.88rem;
		font-weight: var(--font-weight-medium);
		line-height: 1.5;
		transition: color var(--transition-fast);
	}

	.footer-column a:hover {
		color: var(--color-accent);
	}

	.footer-column svg {
		width: 14px;
		height: 14px;
	}

	.footer-bottom {
		display: flex;
		min-height: 78px;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-6);
		border-top: 1px solid var(--color-border);
		color: var(--color-muted);
		font-size: 0.78rem;
	}

	.footer-principle {
		text-align: right;
	}

	.footer-principle span {
		color: var(--color-accent);
	}

	@media (max-width: 760px) {
		.footer-main {
			grid-template-columns: 1fr;
			gap: 64px;
		}

		.footer-navigation {
			max-width: 500px;
		}

		.footer-bottom {
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			padding-block: var(--space-5);
		}

		.footer-principle {
			text-align: left;
		}
	}

	@media (max-width: 480px) {
		.footer-main {
			padding-block: 64px;
		}

		.footer-navigation {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}
	}
</style>
