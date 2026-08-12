<script lang="ts">
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import Container from '$lib/components/ui/Container.svelte';

const navigation = [
	{ label: 'Research', href: '/research' },
	{ label: 'Technology', href: '/technology' },
	{ label: 'Open Source', href: '/open-source' },
	{ label: 'Company', href: '/company' }
];
</script>

<header class="site-header">
	<Container>
		<div class="header-inner">
			<a class="brand" href="/" aria-label="Softadastra home">
				<span class="brand-mark" aria-hidden="true"></span>

				<span class="brand-name">Softadastra</span>
			</a>

			<nav class="desktop-navigation" aria-label="Main navigation">
				{#each navigation as item}
					<a class="navigation-link" href={item.href}>
						{item.label}
					</a>
				{/each}
			</nav>

			<div class="desktop-actions">
				<ButtonLink
					href="https://github.com/softadastra"
					variant="secondary"
					external
					ariaLabel="Softadastra on GitHub"
				>
					GitHub
				</ButtonLink>
			</div>

			<details class="mobile-navigation">
				<summary aria-label="Open navigation">
					<span class="menu-icon" aria-hidden="true">
						<span></span>
						<span></span>
					</span>
				</summary>

				<div class="mobile-panel">
					<nav aria-label="Mobile navigation">
						{#each navigation as item}
							<a class="mobile-link" href={item.href}>
								{item.label}
							</a>
						{/each}
					</nav>

					<div class="mobile-action">
						<ButtonLink
							href="https://github.com/softadastra"
							variant="primary"
							external
							ariaLabel="Softadastra on GitHub"
						>
							GitHub
						</ButtonLink>
					</div>
				</div>
			</details>
		</div>
	</Container>
</header>

<style>
	.site-header {
		position: sticky;
		z-index: 100;
		top: 0;
		width: 100%;
		border-bottom: 1px solid var(--color-border);
		background: var(--color-white);
		box-shadow: 0 4px 16px rgb(17 17 17 / 3%);
	}

	.header-inner {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		min-height: 68px;
		align-items: center;
		gap: var(--space-6);
	}

	.brand {
		display: inline-flex;
		width: fit-content;
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

	.desktop-navigation {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}

	.navigation-link {
		position: relative;
		padding: 22px 0;
		color: var(--color-text-secondary);
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium);
		line-height: 1;
		transition: color var(--transition-fast);
	}

	.navigation-link::after {
		position: absolute;
		right: 0;
		bottom: -1px;
		left: 0;
		height: 2px;
		background: var(--color-accent);
		content: '';
		transform: scaleX(0);
		transform-origin: center;
		transition: transform var(--transition-fast);
	}

	.navigation-link:hover {
		color: var(--color-black);
	}

	.navigation-link:hover::after {
		transform: scaleX(1);
	}

	.desktop-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.mobile-navigation {
		display: none;
		position: relative;
	}

	.mobile-navigation summary {
		display: flex;
		width: 42px;
		height: 42px;
		cursor: pointer;
		list-style: none;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-small);
		background: var(--color-white);
	}

	.mobile-navigation summary::-webkit-details-marker {
		display: none;
	}

	.menu-icon {
		display: flex;
		width: 18px;
		flex-direction: column;
		gap: 5px;
	}

	.menu-icon span {
		display: block;
		width: 100%;
		height: 1.5px;
		background: var(--color-black);
		transition: transform var(--transition-fast);
	}

	.mobile-navigation[open] .menu-icon span:first-child {
		transform: translateY(3.25px) rotate(45deg);
	}

	.mobile-navigation[open] .menu-icon span:last-child {
		transform: translateY(-3.25px) rotate(-45deg);
	}

	.mobile-panel {
		position: absolute;
		top: calc(100% + 14px);
		right: 0;
		width: min(320px, calc(100vw - 40px));
		padding: var(--space-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-medium);
		background: var(--color-white);
		box-shadow: 0 18px 50px rgb(17 17 17 / 10%);
	}

	.mobile-panel nav {
		display: flex;
		flex-direction: column;
	}

	.mobile-link {
		display: flex;
		min-height: 48px;
		align-items: center;
		padding-inline: var(--space-3);
		border-radius: var(--radius-small);
		color: var(--color-text);
		font-size: 0.95rem;
		font-weight: var(--font-weight-medium);
	}

	.mobile-link:hover {
		background: rgb(255 153 0 / 7%);
		color: var(--color-black);
	}

	.mobile-action {
		margin-top: var(--space-3);
		padding-top: var(--space-3);
		border-top: 1px solid var(--color-border);
	}

	.mobile-action :global(.button-link) {
		width: 100%;
	}

	@media (max-width: 900px) {
		.header-inner {
			display: flex;
			justify-content: space-between;
		}

		.desktop-navigation,
		.desktop-actions {
			display: none;
		}

		.mobile-navigation {
			display: block;
		}
	}

	@media (max-width: 480px) {
		.header-inner {
			min-height: 62px;
		}

		.brand-mark {
			width: 27px;
			height: 27px;
			flex-basis: 27px;
		}

		.brand-name {
			font-size: 1rem;
		}
	}
</style>
