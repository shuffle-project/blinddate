<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		personaName: string;
		question?: 'Fragen' | 'Frage';
		children?: Snippet;
	}

	let { personaName, question = 'Fragen', children }: Props = $props();
</script>

<section class="wrapper">
	<h3>
		{`${question} an ${personaName}`}
	</h3>
	<div class="items">
		{@render children?.()}
	</div>
</section>

<style lang="scss">
	.items {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.wrapper {
		max-width: var(--content-element-max-width);
		padding-inline: 3.375rem;
		box-sizing: border-box;
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			width: 100%;
			max-width: calc(35rem + (2 * var(--outer-spacing)));
			margin-inline: auto;
			padding-inline: var(--outer-spacing);
		}
	}
</style>
