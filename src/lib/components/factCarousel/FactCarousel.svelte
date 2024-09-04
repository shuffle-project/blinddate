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
			prev: 'Vorheriger Fakt',
			next: 'Nächster Fakt',
			first: 'Zum ersten Fakt gehen',
			last: 'Zum letzten Fakt gehen',
			slideX: 'Zum Fakt %s gehen',
			pageX: 'Zur Seite %s gehen',
			carousel: 'Karussell',
			slide: 'Fakt',
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

	$: ariaLiveText =
		facts[carouselSelectedIndex].text + ', ' + (carouselSelectedIndex + 1) + ' von ' + facts.length;

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
									<p>{@html fact.text}</p>
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
				<button
					aria-label="Vorheriger Fakt"
					on:focusout={() => (componentHasFocus = false)}
					on:click={() => moveSlide('<')}
				>
					<Icon img="arrow-toleft" svg_color="white" />
				</button>
				<span>{`${carouselSelectedIndex + 1} von ${facts.length}`}</span>
				<button
					aria-label="Nächster Fakt"
					on:focusout={() => (componentHasFocus = false)}
					on:click={() => moveSlide('>')}
				>
					<Icon img="arrow-toright" svg_color="white" />
				</button>
			</div>
		</div>
	</Splide>
</div>

<div aria-live="polite" class="sr-only">
	{#if componentHasFocus}
		{#key ariaLiveText}
			<p>{@html ariaLiveText}</p>
		{/key}
	{/if}
</div>

<style lang="scss">
	.wrapper {
		padding-inline: 1.875rem;
	}

	h3 {
		margin: 2.5rem 1.375rem 1.25rem 1.375rem;
	}

	.carousel-wrapper {
		max-width: 40.75rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
	}

	.content-wrapper {
		min-height: 22.875rem;
		width: 100%;
		max-width: 40.75rem;
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

		min-height: 19.125rem;
		padding: 1.25rem;
		box-sizing: border-box;

		border-radius: 2rem;
		margin: 1.875rem;

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

	@media (max-width: 59.3125rem) {
		.wrapper {
			padding: 0;
			box-sizing: border-box;
			width: 100%;

			.carousel-wrapper {
				margin-inline: auto;
			}

			h3 {
				width: 100%;
				max-width: 35rem;
				margin-inline: auto;
			}
		}
	}

	@media (max-width: 38.75rem) {
		.wrapper {
			background-color: var(--color-lavender);
			margin-top: 4rem;
			width: 100%;
			border-radius: 40% 40% 40% 40% / 4% 4% 4% 4%;
			padding-block: 2.5rem;

			h3 {
				width: initial;
				margin: 0 var(--outer-spacing);
			}

			.carousel-wrapper {
				gap: 0;
			}

			.content-wrapper {
				border-radius: 0;
				background-color: transparent;

				&::before {
					display: none;
				}

				.fact-slide {
					margin-block: 1rem;
				}
			}

			.fact-slide {
				margin-inline: var(--outer-spacing);
			}
		}
	}
</style>
