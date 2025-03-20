<script module>
	import PersonaPortrait from './PersonaPortrait.svelte';
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { Persona } from '../../interfaces/persona.interfaces';
	import Icon from '../Icon.svelte';
	import Modal from '../Modal.svelte';
	import BurgerToggleButton from './BurgerToggleButton.svelte';

	interface Props {
		persona: Persona;
	}

	let { persona }: Props = $props();

	let modal: Modal;
	function toggleModalDisplay() {
		if (modal) modal.toggleModalDisplay();
	}

	let headings: NodeListOf<Element> | undefined = $state();

	onMount(() => {
		headings = document.querySelectorAll('h1, h2.main-heading');
	});

	let firstPage = $state(true);

	function togglePage() {
		if (firstPage) {
			// reload table of contents
			headings = document.querySelectorAll('h1, h2.main-heading');
		}
		firstPage = !firstPage;
	}
</script>

<Modal bind:this={modal}>
	{#snippet headline()}
		{persona.disability}
	{/snippet}
	{#snippet content()}
		<persona.disabilityExplanation />
	{/snippet}
</Modal>

<div class="container" aria-label="Persona-Karte">
	<div class="card bg left"></div>
	<div class="card bg right"></div>
	<div class="card">
		<BurgerToggleButton onClickButtonToggle={togglePage} />

		{#if firstPage}
			<div
				class="side-1"
				in:fly={{ y: -50, duration: 300, delay: 300 }}
				out:fly={{ y: -50, duration: 300 }}
			>
				<PersonaPortrait {persona} />
				<div class="card-body">
					<button class="first" onclick={() => toggleModalDisplay()}>
						<Icon img={persona.disabilityIcon} size="big">{persona.disability}</Icon>
						<Icon img="arrow-toright" size="tiny" />
					</button>

					<a href="#tips" class="second">
						<Icon img="light-bulb" size="big" svg_color="white">Selbstcheck Barrierefreiheit</Icon>

						<Icon img="arrow-down" svg_color="white" size="tiny" />
					</a>
				</div>
			</div>
		{:else}
			<div
				class="side-2"
				in:fly={{ y: 50, duration: 300, delay: 300 }}
				out:fly={{ y: 50, duration: 300 }}
			>
				<div class="card-header">
					<h2 id="table-of-content">Inhaltsverzeichnis</h2>
				</div>
				<div class="card-body">
					<nav aria-label="Inhaltsverzeichnis">
						<ul>
							{#if headings}
								{#each headings as heading}
									<li>
										<a class="focus-indicator" href="#{heading.id}">
											{heading.innerHTML}
										</a>
									</li>
								{/each}
							{/if}
						</ul>
					</nav>
				</div>
			</div>
		{/if}
	</div>

	{#if ENVIRONMENT.personaCardOtherPersonas}
		<div class="other-personas-container">
			<div class="other-personas">
				<a href="{base}/personas/{persona.previousPersona.toLocaleLowerCase()}"
					>{persona.previousPersona}</a
				>
				<a href="{base}/personas/{persona.nextPersona.toLocaleLowerCase()}">{persona.nextPersona}</a
				>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.container {
			transform: translateY(-6rem);
		}
	}

	.container {
		position: relative;
		.other-personas-container {
			display: flex;
			justify-content: center;

			.other-personas {
				max-width: 15.625rem;

				box-sizing: border-box;
				width: 100%;
				margin-top: 2rem;

				transition: margin-top 0.3s ease-in-out;

				display: flex;
				justify-content: space-between;

				a {
					text-decoration: none;
					flex-grow: 1;

					color: var(--color-black);
					background-color: var(--color-white);
					border: 1px solid var(--color-lavender);
					border-radius: 2rem;

					font-size: 1rem;
					box-shadow: 0px 2px 4px rgba(var(--color-black-rgb), 0.15);
					text-align: center;
					padding: 0.25rem 0;
					max-width: 6.375rem;

					&:hover,
					&:focus {
						outline: 2px solid var(--color-blue);
					}
				}
			}
		}

		.card {
			overflow: hidden;
			width: 100%;
			max-width: 15.625rem;
			min-width: 11.25rem;
			aspect-ratio: 5/7;

			position: relative;
			box-shadow: 0 2px 16px 0 rgba(var(--color-black-rgb), 0.075);
			border-radius: 2.5rem;
			background: var(--color-gradient-persona);

			z-index: 1;

			margin-inline: auto;

			.side-1 {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;

				height: 100%;
				width: 100%;

				.card-body {
					display: flex;
					flex-direction: column;
					align-items: center;

					.first,
					.second {
						margin-bottom: 0.625rem;
						text-align: start;
						box-sizing: border-box;
						margin-inline: 0.375rem;
						padding: 0.375rem 0.875rem 0.375rem 0.375rem;
						font-size: 1rem;
						cursor: pointer;
						min-height: 2.75rem;

						width: 92%;

						display: flex;
						align-items: center;
						justify-content: space-between;
						gap: 0.625rem;

						border: none;
						border-radius: 2.5rem;

						&:hover,
						&:focus {
							outline-offset: 2px;
							outline: 2px solid var(--color-blue);
						}
					}

					.first {
						background-color: transparent;
						color: var(--color-black);

						word-wrap: break-word;
						overflow-wrap: break-word;
						overflow-wrap: anywhere;

						-webkit-hyphens: auto;
						-moz-hyphens: auto;
						hyphens: auto;
					}
					.second {
						background-color: var(--color-blue);
						color: var(--color-white);
						text-decoration: none;
					}
				}
			}

			.side-2 {
				position: relative;
				display: flex;
				height: 100%;

				flex-direction: column;
				justify-content: center;

				.card-header {
					background-color: var(--color-green);
					padding-top: 3.25rem;

					h2 {
						color: var(--color-black);
						text-align: left;
						font-size: 1.25rem;
						padding-inline: 1.875rem;

						word-wrap: break-word;
						overflow-wrap: break-word;
						overflow-wrap: anywhere;

						-webkit-hyphens: auto;
						-moz-hyphens: auto;
						hyphens: auto;

						margin: 0;
					}
				}
				.card-body {
					overflow-y: scroll;
					background-color: var(--color-white);

					ul {
						list-style-type: none;
						padding: 0 1.875rem;
						li {
							padding: 0.625rem 0rem;
							a {
								font-size: 1rem;
								color: var(--color-blue);
							}
						}
					}
				}
			}
		}

		.card.bg {
			position: absolute;
			inset: 0;
			z-index: 0;
			background: var(--color-gradient-persona-bg);
			border: 1px solid var(--color-gradient-persona-border);
		}

		.card.bg.left {
			transform: rotateZ(5deg) translateY(2px);
			transform-origin: bottom left;
			transition: transform 0.3s ease-in-out;
		}

		.card.bg.right {
			transform: rotateZ(-5deg) translateY(2px);
			transform-origin: bottom right;
			transition: transform 0.3s ease-in-out;
		}
	}

	@media (min-width: 59.375rem) and (max-width: 73.125rem) {
		.container {
			.card.bg.left {
				transform: rotateZ(0deg) translateY(0px);
			}

			.card.bg.right {
				transform: rotateZ(0deg) translateY(0px);
			}

			.other-personas-container {
				.other-personas {
					margin-top: 1rem;
				}
			}
		}
	}
</style>
