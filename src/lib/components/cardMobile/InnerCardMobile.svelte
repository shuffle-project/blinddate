<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { sineIn, sineOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import type { Persona } from '../../interfaces/persona.interfaces';
	import Icon from '../Icon.svelte';
	import Modal from '../Modal.svelte';
	import { handleBackdropClick } from '../utils';
	import ToggleButton from './ToggleButton.svelte';

	export let persona: Persona;
	export let mobileCardIsSticky = false;

	let headings: NodeListOf<Element>;

	let dialogOpen = false;
	let showTableOfContents = false;

	let dialog: HTMLDialogElement;

	let modal: Modal;

	const dispatch = createEventDispatcher();

	function toggleDialog() {
		dialogOpen = !dialogOpen;
	}

	$: {
		if (dialog) {
			if (dialogOpen) {
				dialog.showModal();
				document.body.setAttribute('style', 'overflow: hidden;');
			} else {
				document.body.removeAttribute('style');
				showTableOfContents = false;
				dialog.setAttribute('inert', '');
				dialog.close();
			}
		}
	}

	function toggleTableOfContents() {
		showTableOfContents = !showTableOfContents;
	}

	onMount(() => {
		headings = document.querySelectorAll('h1, h2.main-heading');

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

		dialogAttrObserver.observe(dialog, {
			attributes: true
		});

		if (dialog) {
			dialog.addEventListener('close', (e) => {
				dialogOpen = false;
			});
		}
	});

	function deactivateScrolling() {
		dialogOpen = false;
		dispatch('deactivateScrolling', false);
	}
</script>

<div class="mobile-card">
	<div>
		<ToggleButton
			on:toggleDialog={toggleDialog}
			{mobileCardIsSticky}
			outer
			{persona}
			{dialogOpen}
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<dialog
			inert
			class:sticky={mobileCardIsSticky}
			bind:this={dialog}
			on:click={(e) => handleBackdropClick(e, dialog)}
		>
			<nav aria-label={persona.name + ' mitscrollendes Menü'}>
				<ul>
					<li>
						<ToggleButton
							on:toggleDialog={toggleDialog}
							{mobileCardIsSticky}
							{persona}
							{dialogOpen}
						/>
					</li>
					<li>
						<button
							class="table-of-contents-btn btn-with-arrow"
							aria-expanded={showTableOfContents}
							on:click|stopPropagation={() => toggleTableOfContents()}
						>
							<Icon img="list-subtle" size="medium">Inhaltsverzeichnis</Icon>
							<div class="arrow-icon" class:contents_open={showTableOfContents}>
								<Icon size="tiny" img="arrow-toright" />
							</div>
						</button>
					</li>
					{#if showTableOfContents}
						{#each headings as heading}
							<li
								class="heading-link"
								in:slide|global={{ duration: 300, easing: sineOut }}
								out:slide|global={{ duration: 300, easing: sineIn }}
							>
								<a class="focus-indicator" href="#{heading.id}" on:click={toggleDialog}>
									{heading.innerHTML}
								</a>
							</li>
						{/each}
						<hr aria-hidden="true" />
					{/if}
					<li>
						<button
							class="disability-btn btn-with-arrow"
							on:click|stopPropagation={() => modal.toggleModalDisplay()}
						>
							<Icon svg_color="black" img={persona.disabilityIcon} size="medium"
								>{persona.disability}</Icon
							>
							<Icon size="tiny" img="arrow-toright" />
						</button>
					</li>
					<li>
						<a href="#tips" on:click={toggleDialog} class="tips-btn btn-with-arrow">
							<Icon img="light-bulb" size="medium" svg_color="white">Barrierefreiheit umsetzen</Icon
							>
							<Icon size="tiny" img="arrow-toright" svg_color="white" />
						</a>
					</li>
					<li>
						<button
							class="stop-scrolling-btn"
							on:click|stopPropagation={() => deactivateScrolling()}
						>
							Mitscrollen stoppen und Menü schließen
						</button>
					</li>
				</ul>
			</nav>
		</dialog>
	</div>
</div>

<Modal bind:this={modal}>
	<svelte:fragment slot="headline">
		{persona.disability}
	</svelte:fragment>
	<svelte:fragment slot="content">
		<svelte:component this={persona.disabilityExplanation} />
	</svelte:fragment>
</Modal>

<style lang="scss" scoped>
	.mobile-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		@keyframes animation-slide-in-down {
			0% {
				transform: translateY(-100%);
			}
			25% {
				transform: translateY(-100%);
			}
			100% {
				transform: translateY(0%);
			}
		}

		dialog {
			border: none;
			border-radius: 1.11rem;

			max-block-size: min(80vh, 100%);
			max-block-size: min(80dvb, 100%);

			display: block;
			padding-bottom: 0;

			&.sticky {
				padding-top: 0.5rem;

				margin-block-start: 0;
				border-top-left-radius: 0rem;
				border-top-right-radius: 0rem;
			}
		}

		dialog[open].sticky {
			animation: animation-slide-in-down 0.8s ease-out forwards;
		}

		dialog:not([open]) {
			pointer-events: none;
			opacity: 0;
		}

		dialog::backdrop {
			background: var(--color-background);
		}

		nav {
			max-width: 14.4rem;
			padding: 0rem 1em 1rem 1rem;
			box-sizing: border-box;

			display: flex;
			flex-direction: column;
			align-items: center;

			gap: 1rem;

			ul {
				list-style: none;
				padding: 0;
				margin: 0;
				height: auto;

				.heading-link {
					padding: 0.5rem 1rem;
					font-size: 0.88rem;
				}

				hr {
					height: 3px;
					border-radius: 3px;
					background-color: var(--color-lavender);
					border: none;
				}

				button,
				.tips-btn {
					margin: 0.5rem 0;
					cursor: pointer;
					border-radius: 40px;
					padding: 0.5rem;
					text-align: left;
					width: 100%;
					font-size: 0.88rem;
					color: var(--color-black);

					&:hover,
					&:focus {
						outline: 2px solid var(--color-blue);
						outline-offset: 2px;
					}

					&.btn-with-arrow {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding-right: 1rem;
					}

					&.table-of-contents-btn {
						background-color: transparent;
						border: none;

						.arrow-icon {
							transition: transform 0.3s ease-out;
							&.contents_open {
								transform: rotate(90deg);
								transition: transform 0.3s ease-out;
							}
						}
					}

					&.disability-btn {
						background-color: transparent;
						border: none;
					}

					&.stop-scrolling-btn {
						background-color: transparent;
						border: none;
						text-align: center;
						color: var(--color-blue);
					}
				}

				.tips-btn {
					background-color: var(--color-blue);
					color: var(--color-white);
					border: none;
					box-sizing: border-box;
					text-decoration: none;
				}
			}
		}
	}
</style>
