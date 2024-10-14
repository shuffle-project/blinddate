<script lang="ts">
	import { createEventDispatcher } from 'svelte';
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
	<div class="speechbubble-wrapper {studentName}">
		<div
			class="speechbubble"
			role="region"
			aria-label="{studentName} Sprechblase"
			on:keyup={(e) => handleKeyPress(e)}
			bind:this={speechbubble}
		>
			<div class="header">
				<button aria-label="Schließen" on:click={() => close()}>
					<Icon img="close" svg_color="white" size="parent" />
				</button>
			</div>
			<p class="content">{studentComment}</p>
		</div>
		<div class="bubble-indicator">
			<Icon img="speech-bubble-indicator" size="parent" svg_color="white" />
		</div>
	</div>
{/if}

<style lang="scss">
	.speechbubble-wrapper {
		position: absolute;
		bottom: calc(100% + 0.5rem);

		.bubble-indicator {
			height: 1rem;

			width: 2.5rem;

			transform: translateY(-1px);
		}

		&.Gabriel {
			.bubble-indicator {
				margin-left: 5rem;
			}
		}

		&.Faiza {
			.bubble-indicator {
				margin-left: 6rem;
			}
		}

		&.Sarah {
			right: -8rem;
			.bubble-indicator {
				margin-left: 8.5rem;
			}
		}

		&.Mara {
			right: 0;
			.bubble-indicator {
				margin-left: 17.5rem;
			}
		}

		&.Fredo {
			.bubble-indicator {
				margin-left: 1.5rem;
			}
		}

		&.Aleksandr {
			.bubble-indicator {
				margin-left: 3.5rem;
			}
		}

		&.Kyle {
			.bubble-indicator {
				margin-left: 2rem;
			}
		}

		&.Maxi {
			.bubble-indicator {
				margin-left: 3rem;
			}
		}

		&.Michelle {
			right: -6rem;

			.bubble-indicator {
				margin-left: 13rem;
			}
		}

		&.Hannah {
			.bubble-indicator {
				margin-left: 1.5rem;
			}
		}

		&.Kilian {
			.bubble-indicator {
				margin-left: 1.5rem;
			}
		}
	}

	.speechbubble {
		margin-inline: auto;

		background-color: var(--color-white);
		border-radius: 1.25rem;
		padding: 1.5rem;
		width: 18.75rem;
		border: 1px solid var(--color-white);
		box-shadow: 0 0 0.625rem 0.625rem rgba(var(--color-black-rgb), 0.05);

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
