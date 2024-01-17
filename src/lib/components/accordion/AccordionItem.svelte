<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '../Icon.svelte';
	import PersonaAnswer from './PersonaAnswer.svelte';

	let open = false;
	let details: HTMLDetailsElement;

	onMount(() => {
		details.addEventListener('toggle', (e) => {
			open = !open;
		});
	});
</script>

<details bind:this={details}>
	<summary>
		<slot name="question" />
		<div class="arrow">
			<Icon img="arrow-toright" />
		</div>
	</summary>
	{#if open}
		<div transition:slide={{ duration: 400 }} class="answer-wrapper">
			<slot {PersonaAnswer} />
		</div>
	{/if}
</details>

<style lang="scss">
	details {
		background-color: var(--color-white);
		border-radius: 0.85rem;
		border: 1px solid var(--color-lavender);
		box-shadow: 0px 6px 10px rgba(var(--color-black-rgb), 0.15);

		summary {
			background-color: var(--color-white);
			color: var(--color-black);

			font-weight: bold;
			font-size: 1rem;
			line-height: 150%;

			padding: 1rem 1rem;
			border-radius: 0.85rem;

			height: 100%;
			cursor: pointer;

			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 0.5rem;

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
