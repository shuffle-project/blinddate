<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from '../Icon.svelte';

	let { question, content }: { question: Snippet; content: Snippet } = $props();
</script>

<details>
	<summary>
		{@render question?.()}
		<div class="arrow">
			<Icon img="arrow-toright" />
		</div>
	</summary>

	<div class="answer-wrapper">
		{@render content?.()}
	</div>
</details>

<style lang="scss">
	details {
		background-color: var(--color-white);
		border-radius: 1rem;
		border: 1px solid var(--color-lavender);
		box-shadow: 0px 6px 8px rgba(var(--color-black-rgb), 0.1);

		summary {
			background-color: var(--color-white);
			color: var(--color-black);

			font-weight: bold;
			font-size: 1.125rem;
			line-height: 150%;

			padding: 1rem 1rem;
			border-radius: 1rem;

			height: 100%;
			cursor: pointer;

			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 0.625rem;

			text-align: left;

			border: none;

			.arrow {
				transform: rotate(90deg);
				transition: transform 0.4s ease-out;
				padding: 0;
				margin: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				aspect-ratio: 1;
				width: 1.5rem;
			}

			&:hover,
			&:focus-within {
				outline: 2px solid var(--color-blue);
			}

			&::marker {
				content: none;
			}

			&::-webkit-details-marker {
				display: none;
			}
		}

		.answer-wrapper {
			padding: 1rem 0 0;
		}
	}

	details[open] {
		summary {
			.arrow {
				transform: rotate(-90deg);
			}
		}
	}

	@media (min-width: 27.5rem) {
		details {
			.answer-wrapper {
				padding: 1rem 1.875rem 0.875rem;
			}
		}

		details[open] {
			padding-bottom: 1rem;
		}
	}
</style>
