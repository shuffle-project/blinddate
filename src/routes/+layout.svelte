<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

{@render children?.()}

<style lang="scss" global>
	@import './../scss/_main.scss';

	.dev-env-info {
		background-color: #99bef5;

		padding: 2rem 1.25rem;

		display: flex;
		justify-content: center;

		border: solid 1rem;
		border-image: repeating-linear-gradient(
				-75deg,
				#99bef5,
				#99bef5 0.625rem,
				var(--color-black) 0.625rem,
				var(--color-black) 1.25rem
			)
			20;

		p,
		a,
		strong {
			margin: 0;
			font-size: 1.25rem;
			color: var(--color-black);
		}
	}
</style>
