<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="title-wrapper">
	<h1>{@render children?.()}</h1>
</div>

<style lang="scss">
	.title-wrapper {
		background-color: var(--color-black);
		display: flex;
		justify-content: center;

		h1 {
			width: 100%;
			max-width: var(--content-max-width);

			color: var(--color-white);
			text-align: center;

			padding-inline: var(--outer-spacing);

			word-wrap: break-word;
			overflow-wrap: break-word;
			overflow-wrap: anywhere;

			-webkit-hyphens: auto;
			-moz-hyphens: auto;
			hyphens: auto;
		}
	}
</style>
