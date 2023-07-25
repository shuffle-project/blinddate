<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import Card from './Card.svelte';
	import CardMobile from './cardMobile/CardMobile.svelte';
	export let persona: Persona;
</script>

<main>
	<AboutMe {persona} />
	<div class="columns-wrapper">
		<div class="card-column">
			<div class="hovering-card">
				<Card {persona} />
			</div>
		</div>
		<div class="content-column">
			<CardMobile {persona} />
			<slot name="content" />
			<div class="footer-padding" />
		</div>
	</div>
</main>

<style lang="scss">
	.columns-wrapper {
		max-width: 100%;

		.card-column {
			display: none;
		}

		.content-column {
			display: flex;
			flex-direction: column;
		}
	}

	@media (min-width: 59.375rem) {
		.footer-padding {
			height: 10rem;
		}
		.columns-wrapper {
			display: flex;

			padding-left: 2.77rem;
			padding-right: 2.77rem;

			justify-content: center;

			margin-left: auto;
			margin-right: auto;
			max-width: var(--content-max-width);

			.card-column {
				display: block;
				width: 23%;

				background-image: url('/decorations/path.svg');
				background-repeat: repeat-y;

				.hovering-card {
					position: sticky;
					top: 18rem;
				}
			}
			.content-column {
				width: 77%;

				> :global(h2) {
					margin-top: 6.66rem;
					margin-left: 3.33rem;
				}

				> :global(p) {
					box-sizing: border-box;
					max-width: var(--content-element-max-width);

					padding: 0;
					margin: 0;
					padding-left: 3.33rem;
					padding-right: 3.33rem;
				}
			}
		}
	}
</style>
