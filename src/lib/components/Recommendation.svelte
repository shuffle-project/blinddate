<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		link: string;
		marginBottom?: boolean;
		textBefore?: Snippet;
		linkText?: Snippet;
		textAfter?: Snippet;
	}

	let { link, marginBottom = false, textBefore, linkText, textAfter }: Props = $props();
	const randomId = $props.id();
</script>

<div class="container" class:marginBottom>
	<div class="line"></div>

	<div class="content">
		<p class="text">
			<span id="text-before-{randomId}">
				{@render textBefore?.()}
			</span>
			<span>
				<a
					class="link focus-indicator"
					href={link}
					rel="noopener noreferrer"
					aria-describedby="text-before-{randomId} text-after-{randomId}"
				>
					{@render linkText?.()}
				</a>
			</span>
			<span id="text-after-{randomId}">
				{@render textAfter?.()}
			</span>
		</p>
	</div>
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.container {
			margin: 3.375rem 0 0 3.375rem;
		}
	}

	@media (max-width: 59.3125rem) {
		.container {
			width: 100%;
			margin-inline: auto;
			padding: 0 var(--outer-spacing);
			box-sizing: border-box;
		}
	}

	.container {
		max-width: 33.5rem;
		display: flex;
		gap: 1.625rem;
		margin-top: 1.875rem;

		&.marginBottom {
			margin-bottom: 1.375rem;
		}
	}

	.line {
		min-width: 4px;
		border-radius: 1rem;
		background-color: var(--color-lavender);
	}

	.text {
		display: inline;
	}

	.link {
		font-weight: 700;
	}
</style>
