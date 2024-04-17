<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import MetaTags from '../MetaTags.svelte';
	import PersonaCard from '../PersonaCard.svelte';
	import CardMobile from '../cardMobile/CardMobile.svelte';
	import MainHeading from './MainHeading.svelte';
	import TextSection from './TextSection.svelte';

	export let persona: Persona;
</script>

<MetaTags {persona} />

<main>
	<AboutMe {persona} />
	<div class="columns-wrapper">
		<div class="card-column">
			<div class="hovering-card">
				<PersonaCard {persona} />
			</div>
		</div>
		<div class="content-column">
			<CardMobile {persona} />
			<slot {MainHeading} {TextSection} />
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

			padding-inline: var(--outer-spacing);

			justify-content: center;

			margin-inline: auto;
			max-width: var(--content-max-width);

			.card-column {
				display: block;
				width: 25%;

				background-image: url('/decorations/path.svg');
				background-repeat: repeat-y;

				.hovering-card {
					position: sticky;
					top: 50vh;
					transform: translateY(-50%);
				}
			}
			.content-column {
				width: 77%;
			}
		}
	}
</style>
