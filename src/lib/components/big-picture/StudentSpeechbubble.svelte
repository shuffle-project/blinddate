<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import Icon from '../Icon.svelte';

	export let studentName: string;
	export let studentComment: string | undefined;
	export let visible = false;

	let speechbubble: HTMLDivElement;

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			close();
		}
	}
</script>

{#if studentComment && visible}
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="speechbubble {studentName}"
		role="region"
		aria-label="{studentName} Sprechblase"
		on:keyup={(e) => handleKeyPress(e)}
		out:fade={{ duration: 200 }}
		bind:this={speechbubble}
	>
		<div class="header">
			<button aria-label="Schließen" on:click={() => close()}>
				<Icon img="close" svg_color="white" size="parent" />
			</button>
		</div>
		<p class="content">{studentComment}</p>
	</div>
{/if}

<style lang="scss">
	.speechbubble {
		position: absolute;
		margin-inline: auto;
		bottom: calc(100% + 1.25rem);
		background-color: var(--color-white);
		border-radius: 1.25rem;
		padding: 1.5rem;
		width: 18.75rem;
		border: none;
		box-shadow: 0 0 0.625rem 0.625rem rgba(var(--color-black-rgb), 0.05);
		animation: rotateFadeIn 0.4s forwards;

		@keyframes rotateFadeIn {
			0% {
				transform: rotate(-5deg) translateX(-1rem);
				opacity: 0%;
			}
			100% {
				transform: rotate(0deg) translateX(0rem);
				opacity: 100%;
			}
		}

		&::before {
			content: url('/decorations/speech-bubble-indicator-white.svg');
			position: absolute;
			bottom: -2rem;
			display: none;

			width: 3rem;
			height: 2.5rem;
		}

		&.Gabriel {
			&::before {
				display: flex;
				left: clamp(1rem, 5vw + 0.25rem, 5rem);
			}
		}

		&.Michelle {
			right: -2rem;

			&::before {
				display: flex;

				right: clamp(0.5rem, 3vw + 0.25rem, 2rem);
			}
		}

		&.Maxi {
			&::before {
				display: flex;
				left: clamp(1rem, 3vw + 0.25rem, 3rem);
			}
		}

		.header {
			button {
				background-color: var(--color-blue);
				border: none;
				width: 1.875rem;
				height: 1.875rem;
				border-radius: 50%;
				cursor: pointer;

				position: absolute;
				right: 0.25rem;
				top: 0.25rem;

				&:hover,
				&:focus {
					outline: 2px solid var(--color-blue);
					outline-offset: 1px;
				}
			}
		}

		.content {
			font-family: var(--font-persona);
			margin: 0;

			&::before {
				content: open-quote;
			}

			&::after {
				content: close-quote;
			}
		}
	}
</style>
