<script lang="ts">
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import { handleBackdropClick } from './utils';

	export let bottomSheet = false;
	export let term = '';
	export let friendPersona: FriendPersona = {
		id: 'placeholder',
		name: '',
		disability: '',
		disability_icon: '',
		relation: '',
		relation_to: ''
	};

	export let displayModal = false;
	let modal: HTMLDialogElement;

	let randomId = Math.random();

	export function toggleModalDisplay() {
		displayModal = !displayModal;
	}

	$: {
		if (modal) {
			if (displayModal) {
				modal.showModal();
				document.body.setAttribute('style', 'overflow: hidden;');
			} else {
				document.body.removeAttribute('style');
				modal.setAttribute('inert', '');
				modal.close();
			}
		}
	}

	const dialogAttrObserver = new MutationObserver((mutations, observer) => {
		mutations.forEach((mutation) => {
			if (mutation.attributeName === 'open') {
				const dialog: any = mutation.target;
				const isOpen = dialog.hasAttribute('open');

				if (!isOpen) return;

				dialog.removeAttribute('inert');

				//set focus
				const focusTarget = dialog.querySelector('[autofocus]');
				focusTarget ? focusTarget.focus() : dialog.querySelector('button').focus();
			}
		});
	});

	onMount(() => {
		dialogAttrObserver.observe(modal, {
			attributes: true
		});

		if (modal) {
			modal.addEventListener('close', (e) => {
				displayModal = false;
			});
		}
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	aria-labelledby={!bottomSheet ? `headline-${randomId}` : null}
	aria-label={bottomSheet
		? term !== ''
			? term + ' Definition'
			: 'Über ' + friendPersona.name
		: null}
	inert
	class:bottomSheet
	bind:this={modal}
	on:click={(e) => handleBackdropClick(e, modal)}
>
	<div class="modal-content">
		{#if !bottomSheet}
			<div class="header">
				<div class="header-content">
					<h2 id="headline-{randomId}">
						<slot name="headline" />
					</h2>
					<button
						aria-label="Dialog schließen"
						aria-describedby="headline-{randomId}"
						on:click={() => toggleModalDisplay()}
						><Icon img="close" size="big" svg_color="white" /></button
					>
				</div>
				<hr aria-hidden="true" />
			</div>
		{:else}
			<div class="header">
				<button
					class="close-btn"
					on:click={() => toggleModalDisplay()}
					aria-label={term !== ''
						? term + ' Definition, Dialog schließen'
						: 'Über ' + friendPersona.name + ', Dialog schließen'}
				>
					<Icon svg_color="white" size="medium" img="close" />
				</button>
			</div>
		{/if}

		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div class="content" tabindex="0">
			<slot name="content" />
			<div class="spacer" />
		</div>
	</div>
</dialog>

<style lang="scss">
	h2 {
		margin: 1rem 0;
	}
	dialog::backdrop {
		background-color: var(--color-background);
		transition: all 0.3s ease;
	}

	dialog {
		display: block;
		border: transparent;
		border-radius: 1rem;
		padding: 1rem 0;
		box-sizing: border-box;
		max-inline-size: min(90vw, 44.4rem);
		max-block-size: min(80vh, 100%);
		max-block-size: min(80dvb, 100%);
		overflow: hidden;
		box-shadow: 0 0 2rem rgba(var(--color-black-rgb), 0.2);

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

		&.bottomSheet {
			margin-block-end: 0;
			border-bottom-left-radius: 0rem;
			border-bottom-right-radius: 0rem;
			padding: 0rem;

			.header {
				margin: 0;
				padding: 0;
				height: 0px;
			}

			.content {
				padding-top: 2.5rem;
			}

			@keyframes animation-slide-in-up {
				from {
					transform: translateY(100%);
				}
				to {
					transform: translateY(0%);
				}
			}
			&[open] {
				animation: animation-slide-in-up 0.4s ease-out;
			}
		}

		.content {
			overflow-y: auto;
			max-block-size: 100%; /* safari */
			padding: 0 max(1.33rem, 7%);
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

	.header {
		padding: 0 max(1.33rem, 7%);
		.header-content {
			display: flex;
			align-items: center;
			justify-content: space-between;

			h2 {
				font-size: clamp(1.22rem, 3vw + 0.5rem, 1.5rem);
			}
		}

		button {
			aspect-ratio: 1;
			min-width: 2rem;
			border-radius: 50%;
			background-color: var(--color-blue);
			border: 2px solid var(--color-white);
			outline: 2px solid var(--color-white);

			display: flex;
			align-items: center;
			justify-content: center;

			cursor: pointer;

			&:hover,
			&:focus {
				border: 2px solid var(--color-white);
				outline: 2px solid var(--color-blue);
			}
		}
	}

	.close-btn {
		aspect-ratio: 1;
		min-width: 2rem;
		border-radius: 50%;
		background-color: var(--color-blue);
		border: 2px solid var(--color-white);
		outline: 2px solid var(--color-white);

		cursor: pointer;

		&:hover,
		&:focus {
			border: 2px solid var(--color-white);
			outline: 2px solid var(--color-blue);
		}

		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
	}

	@media (max-width: 23rem) {
		dialog {
			padding-top: 0.2rem;
		}
		h2 {
			margin: 0.2rem 0;
			font-size: 1rem !important;
		}
	}
</style>
