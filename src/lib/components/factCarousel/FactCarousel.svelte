<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';

	import type { FactSlide } from '$lib/interfaces/factSlide.interface';
	import Icon from '../Icon.svelte';
	import Enumeration from './Enumeration.svelte';

	let carousel: Splide;

	export let facts: FactSlide[] = [];

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

	let carouselSelectedIndex: number = 0;

	let componentHasFocus = false;

	// $: ariaLiveText =
	// 	personas[carouselSelectedIndex].name +
	// 	', ' +
	// 	(carouselSelectedIndex + 1) +
	// 	' von ' +
	// 	personas.length;

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
</script>

<div class="wrapper">
	<h3>Fakten und Zahlen</h3>

	<Splide
		aria-roledescription="Karussell"
		aria-label="Fakten und Zahlen"
		options={splideOptions}
		bind:this={carousel}
		hasTrack={false}
		on:moved={(e) => handleMove(e?.detail.index)}
		on:scrolled={() => handleScrolled()}
	>
		<div class="carousel-wrapper">
			<div class="content-wrapper">
				<SplideTrack>
					{#each facts as fact, i}
						<SplideSlide id="result-card-{i + 1}" aria-roledescription="Folie">
							<div class="fact-slide">
								<Enumeration total={fact.decoration.total} amount={fact.decoration.amount} />
								<div class="text-content">
									<p>{fact.text}</p>
									<a class="focus-indicator" href={fact.source.url} lang={fact.source.titleLang}
										>{fact.source.title}</a
									>
								</div>
							</div>
						</SplideSlide>
					{/each}
				</SplideTrack>
				<div class="splide__arrows" />
			</div>

			<div class="navigation-wrapper">
				<button on:focusout={() => (componentHasFocus = false)} on:click={() => moveSlide('<')}>
					<Icon img="arrow-toleft" svg_color="white" />
				</button>
				<span>{`${carouselSelectedIndex + 1} von ${facts.length}`}</span>
				<button on:focusout={() => (componentHasFocus = false)} on:click={() => moveSlide('>')}>
					<Icon img="arrow-toright" svg_color="white" />
				</button>
			</div>
		</div>
	</Splide>
</div>

<style lang="scss">
	h3 {
		margin: 2.5rem 3.25rem 1.25rem 3.25rem;
	}

	.carousel-wrapper {
		padding-inline: 1.875rem;
		max-width: 40.75rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
	}

	.content-wrapper {
		min-height: 22.875rem;
		width: 100%;
		max-width: 40.75rem;
		margin-inline: 1.875rem;
		background-color: var(--color-lavender);

		border-radius: 2.5rem;

		position: relative;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: 10;
			border-radius: 2.5rem;
			pointer-events: none;
			box-shadow: inset 0px 0px 20px rgba(var(--color-black-rgb), 0.05);
		}
	}

	.navigation-wrapper {
		background-color: var(--color-black);
		max-width: fit-content;
		padding: 0.375rem;
		border-radius: 2.5rem;
		color: var(--color-white);

		display: flex;
		align-items: center;
		gap: 1.5rem;

		button {
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			border: none;
			background-color: transparent;
			cursor: pointer;

			display: flex;
			align-items: center;
			justify-content: center;

			&:hover,
			&:focus {
				outline: 2px solid var(--color-white);
			}
		}
	}

	.fact-slide {
		background-color: var(--color-white);
		margin-block: 1.875rem;

		min-height: 19.125rem;

		padding: 1.25rem;
		box-sizing: border-box;

		display: flex;

		border-radius: 2rem;
		margin-inline: 1.875rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		text-align: center;

		.text-content {
			p {
				margin: 0;
				margin-bottom: 0.25rem;
			}

			a {
				font-size: 0.875rem;
			}
		}
	}
</style>
