<script lang="ts">
	let {
		children,
		narrow = false,
		class: className = ''
	} = $props<{
		children: import('svelte').Snippet;
		narrow?: boolean;
		class?: string;
	}>();
</script>

<div class:container--narrow={narrow} class={`container ${className}`}>
	{@render children()}
</div>

<style>
	.container {
		width: min(100%, var(--content-width));
		margin-inline: auto;
		padding-inline: var(--page-padding);
	}

	.container--narrow {
		width: min(100%, var(--content-width-narrow));
	}
</style>
