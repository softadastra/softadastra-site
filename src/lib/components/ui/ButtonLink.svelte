<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'text';

	let {
		href,
		children,
		variant = 'primary',
		external = false,
		ariaLabel,
		class: className = ''
	} = $props<{
		href: string;
		children: Snippet;
		variant?: Variant;
		external?: boolean;
		ariaLabel?: string;
		class?: string;
	}>();
</script>

<a
	{href}
	class={`button-link button-link--${variant} ${className}`}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	aria-label={ariaLabel}
>
	<span class="button-link__label">
		{@render children()}
	</span>
</a>

<style>
	.button-link {
		display: inline-flex;
		min-height: 42px;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		padding: 0 18px;
		border: 1px solid transparent;
		border-radius: var(--radius-small);
		font-size: 0.9rem;
		font-weight: var(--font-weight-medium);
		line-height: 1;
		white-space: nowrap;
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast),
			color var(--transition-fast);
	}

	.button-link--primary {
		border-color: var(--color-accent);
		background: var(--color-accent);
		color: var(--color-black);
	}

	.button-link--primary:hover {
		border-color: var(--color-accent-hover);
		background: var(--color-accent-hover);
		color: var(--color-black);
	}

	.button-link--secondary {
		border-color: var(--color-border-strong);
		background: var(--color-white);
		color: var(--color-text);
	}

	.button-link--secondary:hover {
		border-color: var(--color-accent);
		color: var(--color-text);
	}

	.button-link--text {
		min-height: auto;
		padding: 0;
		border: 0;
		border-radius: 0;
		background: transparent;
		color: var(--color-text-secondary);
	}

	.button-link--text:hover {
		color: var(--color-accent);
	}

	.button-link__label {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
</style>
