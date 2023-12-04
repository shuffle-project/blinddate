<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import emblaCarouselSvelte, {
		type EmblaCarouselType,
		type EmblaOptionsType
	} from 'embla-carousel-svelte';
	import Icon from '../Icon.svelte';

	export let personas: Persona[];

	let emblaAPI: EmblaCarouselType;
	let options: EmblaOptionsType = { loop: true, align: 'center' };
	let selectedIndex = 0;

	let ariaLiveText = '';
	let componentHasFocus = false;

	$: ariaLiveText =
		personas[selectedIndex].name + ', ' + (selectedIndex + 1) + ' von ' + personas.length;

	function getPersonaEmotion(personaName: string) {
		switch (personaName) {
			case 'Gabriel':
				return 'explaining';
			case 'Maxi':
				return 'neutral';
			case 'Hannah':
				return 'happy';
			case 'Aleksandr':
				return 'neutral';
			default:
				return 'neutral';
		}
	}

	const onInit = (e: any) => {
		emblaAPI = e.detail;
		emblaAPI.on('select', () => {
			selectedIndex = emblaAPI.internalEngine().index.get();
		});
	};

	function scrollPrevious() {
		if (!emblaAPI) return;
		componentHasFocus = true;
		emblaAPI.scrollPrev();
	}

	function scrollNext() {
		if (!emblaAPI) return;
		componentHasFocus = true;
		emblaAPI.scrollNext();
	}
</script>

<div
	role="navigation"
	aria-label="Zu den Studierenden"
	aria-roledescription="Karussell"
	class="embla"
	use:emblaCarouselSvelte={{ options }}
	on:emblaInit={onInit}
>
	<div class="embla__container">
		{#each personas as persona, index}
			<div class="embla__slide" aria-roledescription="Folie" aria-hidden={selectedIndex !== index}>
				<a
					href="{base}/personas/{persona.id}"
					aria-labelledby="{persona.id}-name"
					tabindex={selectedIndex !== index ? -1 : 0}
				>
					<img
						src="{base}/personas/{persona.id}/{persona.id}-{getPersonaEmotion(persona.name)}.svg"
						alt=""
						class="persona-img"
						aria-hidden="true"
					/>
					<div aria-hidden="true">
						<p class="persona-name" id="{persona.id}-name">{persona.name}</p>
					</div>

					<div class="clickable-icon">
						<Icon img="clickable" size="medium" />
					</div>
				</a>
			</div>
		{/each}
	</div>

	<div class="embla__buttons">
		<button
			class="embla__button embla__button--prev"
			type="button"
			on:click={() => scrollPrevious()}
			aria-label="Vorheriger Studi"
			on:focusout={() => (componentHasFocus = false)}
		>
			<Icon img="arrow-toleft" svg_color="white" />
		</button>
		<!-- <p>{selectedIndex + 1} von {personas.length}</p> -->
		<p>{`${selectedIndex + 1} von ${personas.length}`}</p>
		<button
			class="embla__button embla__button--next"
			type="button"
			on:click={() => scrollNext()}
			aria-label="Nächster Studi"
			on:focusout={() => (componentHasFocus = false)}
		>
			<Icon img="arrow-toright" svg_color="white" />
		</button>
	</div>

	{#if componentHasFocus}
		<div aria-live="polite" class="sr-only">
			{#key ariaLiveText}
				{ariaLiveText}
			{/key}
		</div>
	{/if}
</div>

<style lang="scss">
	.embla {
		overflow: hidden;
		background: linear-gradient(var(--color-black) 50%, var(--color-background-body) 50%);
	}

	.embla__container {
		display: flex;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		a {
			background: var(--color-gradient-persona);
			border-radius: 2.22rem;

			width: 14rem;
			aspect-ratio: 1/2;
			display: flex;
			justify-content: center;

			position: relative;
			margin-inline: auto;

			&:focus {
				transition: all 0.2s ease-out;

				outline-offset: -6px;
				outline: 2px solid var(--color-blue);
			}

			.persona-name {
				position: absolute;
				left: -2rem;
				top: 0.55rem;

				background-color: var(--color-white);
				border-radius: 2rem;
				padding: 0.22rem 0.55rem;

				color: var(--color-black);
				font-weight: bold;
				font-size: 1.11rem;

				box-shadow: 0 4px 4px rgba(var(--color-black-rgb), 0.15);
			}

			.persona-img {
				height: 90%;
				max-width: 100%;

				position: absolute;
				bottom: 0.55rem;
			}

			.clickable-icon {
				position: absolute;
				right: 1rem;
				bottom: 1rem;
			}
		}
	}

	.embla__buttons {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-inline: auto;
		margin-top: 2rem;

		max-width: 11.66rem;
		width: 100%;

		p {
			color: var(--color-black);
		}

		.embla__button {
			width: 3rem;
			height: 3rem;
			padding: 0;

			display: flex;
			justify-content: center;
			align-items: center;

			border: none;
			border-radius: 50%;
			background-color: var(--color-blue);

			cursor: pointer;

			&:hover,
			&:focus {
				outline-offset: 2px;
				outline: 2px solid var(--color-blue);
			}
		}
	}
</style>
