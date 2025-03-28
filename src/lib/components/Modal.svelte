<script lang="ts">
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import { onMount, type Snippet } from 'svelte';
	import Icon from './Icon.svelte';
	import { handleBackdropClick } from './utils';

	interface Props {
		bottomSheet?: boolean;
		term?: string;
		friendPersona?: FriendPersona;
		displayModal?: boolean;
		headline?: Snippet;
		content?: Snippet;
	}

	let {
		bottomSheet = false,
		term = '',
		friendPersona = {
			id: 'placeholder',
			name: '',
			disability: '',
			disabilityIcon: '',
			relation: '',
			relation_to: ''
		},
		displayModal = $bindable(false),
		headline,
		content
	}: Props = $props();

	let modal: HTMLDialogElement;

	let randomId = $props.id();

	export function toggleModalDisplay() {
		displayModal = !displayModal;
	}

	$effect(() => {
		if (modal) {
			if (displayModal) {
				modal.showModal();
				document.body.setAttribute('style', 'overflow: hidden;');
			} else {
				document.body.removeAttribute('style');
				modal.close();
			}
		}
	});

	onMount(() => {
		if (modal) {
			modal.addEventListener('close', (e) => {
				displayModal = false;
			});
		}
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	aria-labelledby={!bottomSheet ? `headline-${randomId}` : null}
	aria-label={bottomSheet
		? term !== ''
			? term + ' Definition'
			: 'Über ' + friendPersona.name
		: null}
	class:bottomSheet
	bind:this={modal}
	onclick={(e) => handleBackdropClick(e, modal)}
>
	<div class="modal-content">
		{#if !bottomSheet}
			<div class="header">
				<div class="header-content">
					<h2 id="headline-{randomId}">
						{@render headline?.()}
					</h2>
					<button
						aria-label="Dialog schließen"
						aria-describedby="headline-{randomId}"
						onclick={(e) => {
							e.stopPropagation();
							toggleModalDisplay();
						}}><Icon img="close" size="big" svg_color="white" /></button
					>
				</div>
				<hr aria-hidden="true" />
			</div>
		{:else}
			<div class="header">
				<button
					onclick={(e) => {
						e.stopPropagation();
						toggleModalDisplay();
					}}
					aria-label={term !== ''
						? term + ' Definition, Dialog schließen'
						: 'Über ' + friendPersona.name + ', Dialog schließen'}
				>
					<Icon svg_color="white" size="big" img="close" />
				</button>
			</div>
		{/if}

		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div class="content" tabindex="0">
			{@render content?.()}
		</div>
	</div>
</dialog>

<style lang="scss">
	dialog::backdrop {
		background-color: var(--color-background);
		transition: all 0.3s ease;
	}

	// normal dialog stylesheets
	dialog {
		border: none;
		border-radius: 2.5rem;

		padding: 0;

		box-sizing: border-box;
		max-inline-size: min(90vw, 50rem);
		max-block-size: min(80vh, 100%);
		max-block-size: min(80dvb, 100%);

		overflow: hidden;
		box-shadow: 0 0 2rem rgba(var(--color-black-rgb), 0.2);

		opacity: 100%;
		position: fixed;
		inset: 0;

		@keyframes animation-scale-in {
			from {
				transform: scale(0.97);
			}
			to {
				transform: scale(1);
			}
		}

		&[open] {
			animation: animation-scale-in 0.3s ease-out forwards;
		}

		.header {
			padding: 1.875rem max(1.375rem, 7%) 0;
			.header-content {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 1.25rem;
				margin-bottom: 0.625rem;

				h2 {
					font-size: clamp(1.375rem, 3vw + 0.5rem, 1.75rem);
					margin: 0;
				}
			}

			button {
				aspect-ratio: 1;
				width: 3.125rem;
				border-radius: 50%;
				background-color: var(--color-blue);
				border: none;

				display: flex;
				align-items: center;
				justify-content: center;

				cursor: pointer;

				&:hover,
				&:focus {
					outline: 2px solid var(--color-blue);
					outline-offset: 2px;
				}
			}
		}

		.content {
			overflow-y: auto;
			max-block-size: 100%; /* safari */
			padding-inline: max(1.375rem, 7%);
			padding-bottom: 1.25rem;
		}
	}

	// bottomsheet dialog stylesheets
	dialog {
		&.bottomSheet {
			margin-block-end: 0rem;
			border-bottom-left-radius: 0rem;
			border-bottom-right-radius: 0rem;
			z-index: 100%;

			.header {
				margin: 0;
				padding: 0;
				height: 0;

				button {
					position: absolute;
					right: 0.625rem;
					top: 0.625rem;
				}
			}

			.content {
				&::before {
					content: '';
					min-height: 2.5rem;
					display: block;
				}
			}

			@keyframes animation-slide-in-bottom {
				from {
					transform: translateY(100%);
				}
				to {
					transform: translateY(0%);
				}
			}
			&[open] {
				animation: animation-slide-in-bottom 0.4s ease-out;
			}
		}
	}

	dialog:not([open]) {
		pointer-events: none;
		opacity: 0;
	}

	hr {
		margin: 0;
		background-color: var(--color-lavender);
		height: 3px;
		border: none;
		border-radius: 6px;
	}

	.modal-content {
		display: grid;
		grid-template-rows: auto 1fr;
		align-items: start;
		max-block-size: 80vh;
	}

	@media (min-width: 23.0625rem) and (max-width: 35rem) {
		dialog {
			.header {
				padding-top: 1.25rem;
			}
		}
	}

	@media (max-width: 23rem) {
		dialog {
			.header {
				padding-top: 0.25rem;

				.header-content {
					h2 {
						font-size: 1rem;
					}
				}
			}
		}
	}
</style>
