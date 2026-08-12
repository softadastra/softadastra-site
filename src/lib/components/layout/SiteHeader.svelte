<script lang="ts">
	import { page } from '$app/state';
	import Container from '$lib/components/ui/Container.svelte';

	const navigation = [
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
		}
	];

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

<header class="site-header">
	<Container>
		<div class="header-inner">
			<a
				class="brand"
				href="/"
				aria-label="Softadastra home"
			>
				Softadastra
			</a>

			<div class="navigation-wrapper">
				<nav
					class="navigation"
					aria-label="Main navigation"
				>
					{#each navigation as item}
						<a
							href={item.href}
							class:active={isActive(item.href)}
							aria-current={isActive(item.href) ? 'page' : undefined}
						>
							{item.label}
						</a>
					{/each}

					<a
						class="github"
						href="https://github.com/softadastra"
						target="_blank"
						rel="noopener noreferrer"
					>
						github
						<span aria-hidden="true">↗</span>
					</a>
				</nav>
			</div>
		</div>
	</Container>
</header>

<style>
	.site-header {
		position: sticky;
		z-index: 100;
		top: 0;

		width: 100%;

		background: rgb(255 255 255 / 96%);

		border-bottom: 1px solid var(--color-border);

		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;

		gap: clamp(20px, 4vw, 50px);

		width: 100%;
		max-width: var(--content-width);
		height: 52px;

		margin-inline: auto;

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Brand
	-------------------------------------------------- */

	.brand {
		flex: 0 0 auto;

		color: var(--color-accent);

		font-size: 0.84rem;
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.025em;
		line-height: 1;

		text-decoration: none;

		transition: opacity var(--transition-fast);
	}

	.brand:hover {
		color: var(--color-accent);

		opacity: 0.72;
	}

	/* --------------------------------------------------
	   Navigation
	-------------------------------------------------- */

	.navigation-wrapper {
		min-width: 0;

		overflow: hidden;
	}

	.navigation {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		gap: clamp(13px, 2.1vw, 27px);

		white-space: nowrap;
	}

	.navigation a {
		position: relative;

		flex: 0 0 auto;

		padding-block: 4px;

		color: var(--color-text-secondary);

		font-size: 0.68rem;
		font-weight: var(--font-weight-medium);

		line-height: 1.3;

		text-decoration: none;

		transition:
			color var(--transition-fast),
			opacity var(--transition-fast);
	}

	.navigation a:hover {
		color: var(--color-text);
	}

	/* --------------------------------------------------
	   Active page
	-------------------------------------------------- */

	.navigation a.active {
		color: var(--color-text);

		font-weight: var(--font-weight-semibold);
	}

	.navigation a.active::after {
		position: absolute;

		right: 0;
		bottom: -3px;
		left: 0;

		height: 1px;

		background: var(--color-accent);

		content: '';
	}

	/* --------------------------------------------------
	   GitHub
	-------------------------------------------------- */

	.navigation .github {
		display: inline-flex;
		align-items: center;

		gap: 4px;

		color: var(--color-accent);
	}

	.navigation .github:hover {
		color: var(--color-text);
	}

	.navigation .github span {
		display: inline-block;

		font-size: 0.85em;

		transition: transform var(--transition-fast);
	}

	.navigation .github:hover span {
		transform: translate(1px, -1px);
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 720px) {
		.header-inner {
			gap: 17px;

			height: 48px;
		}

		.brand {
			font-size: 0.76rem;
		}

		.navigation-wrapper {
			overflow-x: auto;

			scrollbar-width: none;

			-webkit-overflow-scrolling: touch;
		}

		.navigation-wrapper::-webkit-scrollbar {
			display: none;
		}

		.navigation {
			width: max-content;

			gap: 14px;
		}

		.navigation a {
			font-size: 0.61rem;
		}
	}

	@media (max-width: 480px) {
		.header-inner {
			gap: 13px;

			height: 46px;
		}

		.brand {
			font-size: 0.71rem;
		}

		.navigation {
			gap: 11px;
		}

		.navigation a {
			font-size: 0.57rem;
		}
	}
</style>
