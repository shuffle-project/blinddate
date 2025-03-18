<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="wrapper">
	{@render children?.()}
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.wrapper {
			max-width: var(--content-element-max-width);
			padding-inline: 3.375rem;
			box-sizing: border-box;
		}
	}
</style>
