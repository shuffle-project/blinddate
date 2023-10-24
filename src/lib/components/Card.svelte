<script context="module">
	import BurgerToggleButton from './BurgerToggleButton.svelte';
	import PersonaPortrait from './PersonaPortrait.svelte';
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { Persona } from '../interfaces/persona.interfaces';
	import Icon from './Icon.svelte';
	import Modal from './Modal.svelte';

	export let persona: Persona;

	let modal: Modal;
	function toggleModalDisplay() {
		if (modal) modal.toggleModalDisplay();
	}

	let headings: NodeListOf<Element>;

	onMount(() => {
		headings = document.querySelectorAll('h1, h2.main-heading');
	});

	let firstPage = true;

	function togglePage() {
		if (firstPage) {
			// reload table of contents
			headings = document.querySelectorAll('h1, h2.main-heading');
		}
		firstPage = !firstPage;
	}
</script>

<Modal bind:this={modal}>
	<svelte:fragment slot="headline">
		{persona.disability}
	</svelte:fragment>
	<svelte:fragment slot="content">
		<svelte:component this={persona.disabilityExplanation} />
	</svelte:fragment>
</Modal>

<div class="container">
	<div class="card bg left" />
	<div class="card bg right" />
	<div class="card">
		<BurgerToggleButton onClickButtonToggle={togglePage} />

		{#if firstPage}
			<div
				class="side-1"
				in:fly={{ y: -100, duration: 200, delay: 200 }}
				out:fly={{ y: -100, duration: 200 }}
			>
				<PersonaPortrait {persona} />
				<div class="card-body">
					<button class="first" on:click={() => toggleModalDisplay()}>
						<Icon img={persona.disabilityIcon} size="medium">{persona.disability}</Icon>
						<Icon img="arrow-toright" size="tiny" />
					</button>

					<a href="#tips" class="second">
						<Icon img="light-bulb" size="medium" svg_color="white">Barrierefreiheit umsetzen</Icon>

						<Icon img="arrow-toright" svg_color="white" size="tiny" />
					</a>
				</div>
			</div>
		{:else}
			<div
				class="side-2"
				in:fly={{ y: 100, duration: 200, delay: 200 }}
				out:fly={{ y: 100, duration: 200 }}
			>
				<div class="card-header">
					<h2 id="table-of-content">Inhaltsverzeichnis</h2>
				</div>
				<div class="card-body">
					<nav aria-label="Inhaltsverzeichnis">
						<ul>
							{#each headings as heading}
								<li>
									<a class="focus-indicator" href="#{heading.id}">
										{heading.innerHTML}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			</div>
		{/if}
	</div>
	<div class="other-personas-container">
		<div class="other-personas">
			<a href="{base}/personas/{persona.previousPersona.toLocaleLowerCase()}"
				>{persona.previousPersona}</a
			>
			<a href="{base}/personas/{persona.nextPersona.toLocaleLowerCase()}">{persona.nextPersona}</a>
		</div>
	</div>
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.container {
			transform: translateY(-11.2rem);
		}
	}

	.container {
		position: relative;
		.other-personas-container {
			display: flex;
			justify-content: center;

			.other-personas {
				max-width: 13.8rem;

				box-sizing: border-box;
				width: 100%;
				position: absolute;
				bottom: -3.3rem;
				display: flex;
				justify-content: space-between;

				a {
					text-decoration: none;
					flex-grow: 1;

					color: var(--color-black);
					background-color: var(--color-white);
					border: 1px solid var(--color-lavender);
					border-radius: 2.22rem;

					font-size: 0.88rem;
					box-shadow: 0px 6px 10px rgba(var(--color-black-rgb), 0.15);
					text-align: center;
					padding: 0.11rem 0;
					max-width: 6.11rem;

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
			max-width: 13.88rem;
			min-width: 10rem;
			aspect-ratio: 5/7;

			position: relative;
			box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
			border-radius: 40px;
			background: var(--color-gradient-persona);

			z-index: 1;

			margin-left: auto;
			margin-right: auto;

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
						width: 94%;
						margin-bottom: 0.5rem;
						text-align: start;
						box-sizing: border-box;

						padding: 0.33rem 0.55rem 0.33rem 0.33rem;
						font-size: 0.88rem;
						cursor: pointer;

						display: flex;
						align-items: center;
						justify-content: space-between;
						border: none;

						&:hover,
						&:focus {
							outline-offset: 2px;
							outline: 2px solid var(--color-blue);
						}
					}

					.first {
						border-radius: 40px;
						background-color: transparent;
						color: var(--color-black);
					}
					.second {
						border-radius: 40px;
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
					padding-top: 3rem;

					h2 {
						color: var(--color-black);
						text-align: center;
						font-size: 1.22rem;

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
						padding: 0 2rem;
						li {
							padding: 0.5rem 0rem;
							a {
								font-size: 0.88rem;
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
		}

		.card.bg.right {
			transform: rotateZ(-5deg) translateY(2px);
			transform-origin: bottom right;
		}
	}
</style>
