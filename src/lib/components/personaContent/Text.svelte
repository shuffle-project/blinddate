<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		noTopMargin?: boolean;
		extraTopMargin?: boolean;
		children?: Snippet;
	}

	let { noTopMargin = false, extraTopMargin = false, children }: Props = $props();
</script>

<p class:noTopMargin class:extraTopMargin>{@render children?.()}</p>

<style lang="scss">
	.extraTopMargin {
		margin-top: 2.5rem;
	}
	@media (min-width: 59.375rem) {
		.noTopMargin {
			margin-top: 0;
		}
	}

	@media (max-width: 59.3125rem) {
		p {
			max-width: 35rem;
			margin-inline: auto;
			padding-inline: var(--outer-spacing);
		}
	}
</style>
