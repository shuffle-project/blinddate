<script lang="ts">
	import { onMount } from 'svelte';
	import { sineIn, sineOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import type { Persona } from '../../interfaces/persona.interfaces';
	import DisabilityExplanation from '../disabilityExplanation/DisabilityExplanation.svelte';
	import Icon from '../Icon.svelte';
	import Modal from '../Modal.svelte';
	import { handleBackdropClick } from '../utils';
	import MobileCardToggleButton from './MobileCardToggleButton.svelte';

	interface Props {
		persona: Persona;
		mobileCardIsSticky?: boolean;
		deactivateScrolling: () => void;
	}

	let { persona, mobileCardIsSticky = false, deactivateScrolling }: Props = $props();

	let headings: NodeListOf<Element> | undefined = $state();

	let dialogOpen = $state(false);
	let showTableOfContents = $state(false);

	let dialogElement: HTMLDialogElement | undefined = $state();

	let modal: Modal;

	function toggleDialog() {
		dialogOpen = !dialogOpen;
	}

	function toggleTableOfContents() {
		showTableOfContents = !showTableOfContents;
	}

	$effect(() => {
		if (dialogElement) {
			if (dialogOpen) {
				dialogElement.showModal();
				document.body.setAttribute('style', 'overflow: hidden;');
			} else {
				document.body.removeAttribute('style');
				showTableOfContents = false;
				dialogElement.close();
			}
		}
	});

	onMount(() => {
		headings = document.querySelectorAll('h1, h2.main-heading');

		if (dialogElement) {
			dialogElement.addEventListener('close', (e) => {
				dialogOpen = false;
			});
		}
	});
</script>

<div class="mobile-card">
	<div>
		<MobileCardToggleButton {toggleDialog} {mobileCardIsSticky} outer {persona} {dialogOpen} />

		<dialog
			class:sticky={mobileCardIsSticky}
			bind:this={dialogElement}
			onclick={(e) => handleBackdropClick(e, dialogElement!)}
		>
			<nav aria-label={persona.name + ' mitscrollendes Menü'}>
				<ul>
					<li>
						<MobileCardToggleButton {toggleDialog} {mobileCardIsSticky} {persona} {dialogOpen} />
					</li>
					<li>
						<button
							class="table-of-contents-btn btn-with-arrow"
							aria-expanded={showTableOfContents}
							onclick={(e) => {
								e.stopPropagation();
								toggleTableOfContents();
							}}
						>
							<Icon img="list-subtle" size="medium">Inhaltsverzeichnis</Icon>
							<div class="arrow-icon" class:contents_open={showTableOfContents}>
								<Icon size="tiny" img="arrow-toright" />
							</div>
						</button>
					</li>
					{#if showTableOfContents && headings}
						{#each headings as heading}
							<li
								class="heading-link"
								in:slide|global={{ duration: 300, easing: sineOut }}
								out:slide|global={{ duration: 300, easing: sineIn }}
							>
								<a class="focus-indicator" href="#{heading.id}" onclick={toggleDialog}>
									{heading.innerHTML}
								</a>
							</li>
						{/each}
						<hr aria-hidden="true" />
					{/if}
					<li>
						<button
							class="disability-btn btn-with-arrow"
							onclick={(e) => {
								e.stopPropagation();
								modal.toggleModalDisplay();
							}}
						>
							<Icon svg_color="black" img={persona.disabilityIcon} size="medium"
								>{persona.disability}</Icon
							>
							<Icon size="tiny" img="arrow-toright" />
						</button>
					</li>
					<li>
						<a
							href="#selbstcheck-barrierefreiheit"
							onclick={toggleDialog}
							class="tips-btn btn-with-arrow"
						>
							<Icon img="light-bulb" size="medium" svg_color="white"
								>Selbstcheck Barrierefreiheit</Icon
							>
							<Icon size="tiny" img="arrow-down" svg_color="white" />
						</a>
					</li>
					<li>
						<button
							class="stop-scrolling-btn"
							onclick={(e) => {
								e.stopPropagation();
								deactivateScrolling();
								toggleDialog();
							}}
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
	{#snippet headline()}
		{persona.disability}
	{/snippet}
	{#snippet content()}
		<DisabilityExplanation personaId={persona.id} />
	{/snippet}
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
			border-radius: 2rem;

			max-block-size: min(80vh, 100%);
			max-block-size: min(80dvb, 100%);

			padding-bottom: 0;

			&.sticky {
				padding-top: 0.625rem;

				margin-block-start: 0;
				border-top-left-radius: 0rem;
				border-top-right-radius: 0rem;
			}
		}

		dialog[open].sticky {
			animation: animation-slide-in-down 0.8s ease-out forwards;
		}

		dialog::backdrop {
			background: var(--color-background);
		}

		nav {
			max-width: 16.25rem;
			padding: 0rem 1em 1rem 1rem;
			box-sizing: border-box;

			display: flex;
			flex-direction: column;
			align-items: center;

			ul {
				list-style: none;
				padding: 0;
				margin: 0;
				height: auto;

				.heading-link {
					padding: 0.625rem 0;
					a {
						font-size: 1rem;
					}
				}

				hr {
					height: 3px;
					border-radius: 3px;
					background-color: var(--color-lavender);
					border: none;
				}

				.btn-with-arrow {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 1rem;

					width: 100%;
					margin-block: 0.625rem;
					box-sizing: border-box;

					text-align: left;

					padding: 0.625rem;
					cursor: pointer;

					border-radius: 2.5rem;

					color: var(--color-black);
					background-color: var(--color-white);

					&:hover,
					&:focus {
						outline: 2px solid var(--color-blue);
						outline-offset: 2px;
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

					&.tips-btn {
						background-color: var(--color-blue);
						color: var(--color-white);
						text-decoration: none;
						padding-block: 0.25rem;
					}
				}
			}

			button.stop-scrolling-btn {
				background-color: transparent;
				border: none;
				text-align: center;
				color: var(--color-blue);
				font-size: 0.875rem;
				border-radius: 2.5rem;
				margin-top: 0.625rem;

				&:hover,
				&:focus {
					outline: 2px solid var(--color-blue);
					outline-offset: 2px;
				}
			}
		}
	}
</style>
