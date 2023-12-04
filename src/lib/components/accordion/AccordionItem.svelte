<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '../Icon.svelte';
	export let id: string;
	let isOpen = false;

	function toggle(event: KeyboardEvent | MouseEvent) {
		if (
			event.type === 'keydown' &&
			(event as KeyboardEvent).key !== 'enter' &&
			(event as KeyboardEvent).key !== ''
		) {
			return;
		}
		isOpen = !isOpen;
	}
</script>

<div class="card">
	<h4>
		<button
			class="button"
			aria-controls="sect{id}"
			id="accordion{id}id"
			aria-expanded={isOpen}
			on:keydown={toggle}
			on:click={toggle}
		>
			<slot name="title" />

			<div class="arrow" class:isOpen>
				<Icon img="arrow-toright" />
			</div>
		</button>
	</h4>
	<div id="sect{id}" role="region" aria-labelledby="accordion{id}id" aria-hidden={!isOpen}>
		{#if isOpen}
			<div transition:slide={{ duration: 500 }} class="content">
				<slot name="content" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.card {
		z-index: 1;
		background-color: var(--color-white);
		border-radius: 0.85rem;
		border: 1px solid var(--color-border);
		box-shadow: 0px 6px 10px rgba(var(--color-black-rgb), 0.15);
	}

	h4 {
		margin: 0;
		font-weight: bold;
	}

	.button {
		background-color: var(--color-white);
		color: var(--color-black);

		font-weight: bold;
		font-size: 1rem;
		line-height: 150%;

		padding: 1rem 1.33rem 1rem 1.875rem;
		border-radius: 0.85rem;

		height: 100%;
		cursor: pointer;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		width: 100%;

		border: none;

		&:hover,
		&:focus-within {
			outline: 2px solid var(--color-blue);
		}

		h4 {
			text-align: left;
			margin: 0px;
		}

		.arrow {
			transform: rotate(90deg);
			transition: transform 0.5s ease-out;
			padding: 0;
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			aspect-ratio: 1;
			width: 1.5rem;

			&.isOpen {
				transform: rotate(-90deg);
			}
		}
	}

	.content {
		padding: 1rem 1.875rem;
	}
</style>
