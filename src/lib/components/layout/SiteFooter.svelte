<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const links = [
		{
			label: 'research',
			href: '/research'
		},
		{
			label: 'technology',
			href: '/technology'
		},
		{
			label: 'open source',
			href: '/open-source'
		},
		{
			label: 'company',
			href: '/company'
		},
		{
			label: 'Vix.cpp',
			href: 'https://vixcpp.com',
			external: true
		},
		{
			label: 'runtime',
			href: 'https://github.com/softadastra/runtime',
			external: true
		},
		{
			label: 'github',
			href: 'https://github.com/softadastra',
			external: true
		}
	];
</script>

<footer class="site-footer">
	<Container>
		<div class="footer-content">
			<div class="footer-main">
				<a
					class="footer-brand"
					href="/"
					aria-label="Softadastra home"
				>
					Softadastra
				</a>

				<nav
					class="footer-nav"
					aria-label="Footer navigation"
				>
					{#each links as link, index}
						{#if index > 0}
							<span aria-hidden="true">|</span>
						{/if}

						<a
							href={link.href}
							target={link.external ? '_blank' : undefined}
							rel={link.external ? 'noopener noreferrer' : undefined}
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>

			<div class="footer-bottom">
				<p>
					Make computing infrastructure-independent.
				</p>

				<p>
					© {new Date().getFullYear()} Softadastra
				</p>
			</div>
		</div>
	</Container>
</footer>

<style>
	.site-footer {
		background: var(--color-white);
		color: var(--color-text);
	}

	.footer-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;

		padding-block: 22px 20px;

		border-top: 1px solid var(--color-border);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Main
	-------------------------------------------------- */

	.footer-main {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		gap: 24px;
	}

	.footer-brand {
		flex: 0 0 auto;

		color: var(--color-accent);

		font-size: 0.86rem;
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.015em;

		text-decoration: none;
	}

	.footer-brand:hover {
		color: var(--color-accent);
	}

	/* --------------------------------------------------
	   Navigation
	-------------------------------------------------- */

	.footer-nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;

		gap: 5px 8px;

		font-size: 0.7rem;
		line-height: 1.4;
	}

	.footer-nav a {
		color: var(--color-text-secondary);

		text-decoration: none;

		transition: color var(--transition-fast);
	}

	.footer-nav a:hover {
		color: var(--color-accent);
	}

	.footer-nav > span {
		color: var(--color-border-strong);

		user-select: none;
	}

	/* --------------------------------------------------
	   Bottom
	-------------------------------------------------- */

	.footer-bottom {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		gap: 24px;

		margin-top: 13px;

		color: var(--color-muted);

		font-size: 0.65rem;
		line-height: 1.5;
	}

	.footer-bottom p {
		margin: 0;
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 760px) {
		.footer-main {
			flex-direction: column;

			gap: 12px;
		}

		.footer-nav {
			justify-content: flex-start;
		}

		.footer-bottom {
			margin-top: 16px;
		}
	}

	@media (max-width: 520px) {
		.footer-content {
			padding-block: 19px 18px;
		}

		.footer-brand {
			font-size: 0.82rem;
		}

		.footer-nav {
			gap: 4px 6px;

			font-size: 0.64rem;
		}

		.footer-bottom {
			flex-direction: column;

			gap: 4px;

			font-size: 0.61rem;
		}
	}
</style>
