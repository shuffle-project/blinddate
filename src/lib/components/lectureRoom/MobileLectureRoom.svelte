<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';


	import { base } from '$app/paths';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	import Icon from '../Icon.svelte';
	interface Props {
		personas: Persona[];
	}

	let { personas }: Props = $props();

	let carousel: Splide = $state();

	const splideOptions = {
		type: 'loop',
		live: false,
		keyboard: false,
		i18n: {
			prev: 'Vorherige Person',
			next: 'Nächste Person',
			first: 'Zur ersten Person gehen',
			last: 'Zur letzten Person gehen',
			slideX: 'Zur Person %s gehen',
			pageX: 'Zur Seite %s gehen',
			carousel: 'Karussell',
			slide: 'Person',
			slideLabel: '%s von %s'
		},
		pagination: false,
		arrows: false,
		speed: 800,
		drag: 'free' as const,
		snap: true,
		flickPower: 450,
		easing: 'ease'
	};

	let carouselSelectedIndex: number = $state(0);

	let componentHasFocus = $state(false);

	let ariaLiveText =
		$derived(personas[carouselSelectedIndex].name +
		', ' +
		(carouselSelectedIndex + 1) +
		' von ' +
		personas.length);

	function moveSlide(direction: string) {
		if (!carousel) return;
		componentHasFocus = true;
		carousel.go(direction);
		carouselSelectedIndex = carousel.splide.index;
	}

	function handleMove(index: number | undefined) {
		if (index !== undefined) carouselSelectedIndex = index;
	}

	function handleScrolled() {
		if (!carousel) return;
		carouselSelectedIndex = carousel.splide.index;
	}

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
			case 'Michelle':
				return 'shrug';
			default:
				return 'neutral';
		}
	}
</script>

<Splide
	aria-roledescription="Karussell"
	role="navigation"
	aria-label="Studierende"
	options={splideOptions}
	bind:this={carousel}
	hasTrack={false}
	on:moved={(e) => handleMove(e?.detail.index)}
	on:scrolled={() => handleScrolled()}
>
	<SplideTrack>
		{#each personas as persona, i (persona.id)}
			<SplideSlide id="result-card-{i + 1}" aria-roledescription="Folie">
				<a
					href="{base}/personas/{persona.id}"
					aria-labelledby="{persona.id}-name"
					tabindex={carouselSelectedIndex !== i ? -1 : 0}
					class="link-card"
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
			</SplideSlide>
		{/each}
	</SplideTrack>
	<div class="splide__arrows"></div>

	<div class="slider-navigation">
		<button
			onfocusout={() => (componentHasFocus = false)}
			onclick={() => moveSlide('<')}
			class="previous-button after-card"
			aria-label="Vorherige Person"
		>
			<Icon img="arrow-toleft" size="parent" svg_color="white" />
		</button>

		<p class="slide-number-info">
			{carouselSelectedIndex + 1} von {personas.length}
		</p>

		<button
			onfocusout={() => (componentHasFocus = false)}
			onclick={() => moveSlide('>')}
			class="next-button"
			aria-label="Nächste Person"
			><Icon img="arrow-toright" size="parent" svg_color="white" />
		</button>
	</div>
</Splide>

{#if componentHasFocus}
	<div aria-live="polite" class="sr-only">
		{#key ariaLiveText}
			{ariaLiveText}
		{/key}
	</div>
{/if}

<style lang="scss">
	.link-card {
		background: var(--color-gradient-persona);
		border-radius: 2.5rem;

		width: 15.75rem;
		aspect-ratio: 1/2;
		display: flex;
		justify-content: center;

		position: relative;
		margin-inline: auto;

		&:focus-visible {
			transition: all 0.2s ease-out;

			outline-offset: -6px;
			outline: 2px solid var(--color-blue);
		}

		.persona-name {
			position: absolute;
			left: -1.626rem;
			top: 0.625rem;

			background-color: var(--color-white);
			border-radius: 2rem;
			padding: 0.25rem 0.625rem;

			color: var(--color-black);
			font-weight: bold;
			font-size: 1.25rem;

			box-shadow: 0 4px 4px rgba(var(--color-black-rgb), 0.15);
		}

		.persona-img {
			height: 90%;
			max-width: 100%;

			position: absolute;
			bottom: 0.625rem;
		}

		.clickable-icon {
			position: absolute;
			right: 1.25rem;
			bottom: 1.25rem;
			transition: transform 0.2s ease-out;
		}

		&:hover {
			.clickable-icon {
				transform: scale(120%);
			}
		}
	}

	.slider-navigation {
		max-width: 15.75rem;
		position: relative;
		height: 3rem;
		margin-inline: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1.25rem;

		.slide-number-info {
			text-align: center;
			color: var(--color-dark-grey);
			font-size: 0.875rem;
			margin-bottom: 0;
		}
	}

	.previous-button,
	.next-button {
		position: absolute;
		top: auto;
		bottom: 0;
		z-index: 5;

		display: flex;
		align-items: center;
		justify-content: center;

		height: 3.125rem;
		width: 3.125rem;

		padding: 0.25rem;

		cursor: pointer;

		background-color: var(--color-blue);
		border: none;
		border-radius: 50%;

		&:focus,
		&:hover {
			outline: 2px solid var(--color-blue);
			outline-offset: 2px;
		}
	}

	.previous-button {
		left: 0;
	}

	.next-button {
		right: 0;
	}
</style>
