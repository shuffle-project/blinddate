<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	import { base } from '$app/paths';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	import Icon from '../Icon.svelte';

	let toggleDisabilityInfo = $state(false);

	let { personas }: { personas: Persona[] } = $props();

	let carousel: Splide;

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

	let ariaLiveText = $derived(
		personas[carouselSelectedIndex].name +
			(toggleDisabilityInfo ? ` (${personas[carouselSelectedIndex].disablityCategory})` : '') +
			', ' +
			(carouselSelectedIndex + 1) +
			' von ' +
			personas.length
	);

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

	$effect(() => {
		if (toggleDisabilityInfo || !toggleDisabilityInfo) {
			carousel.splide.refresh();
		}
	});
</script>

<div class="toggle">
	<input id="toggle-mobile-disability-info" type="checkbox" bind:checked={toggleDisabilityInfo} />
	<label for="toggle-mobile-disability-info">Beeinträchtigung mitanzeigen</label>
</div>

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
					aria-label={persona.name +
						(toggleDisabilityInfo ? ` (${persona.disablityCategory})` : '')}
					tabindex={carouselSelectedIndex !== i ? -1 : 0}
					class="link-card"
					data-sveltekit-preload-data="tap"
				>
					<img
						src="{base}/personas/{persona.id}/{persona.id}-{getPersonaEmotion(persona.name)}.svg"
						alt=""
						class="persona-img"
						aria-hidden="true"
						loading="lazy"
					/>
					<div aria-hidden="true">
						<div class="persona-info-wrapper">
							<p class="persona-name">{persona.name}</p>
							{#if toggleDisabilityInfo}
								<p class="persona-disability">{persona.disablityCategory}</p>
							{/if}
						</div>
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

		text-decoration: none;

		&:focus-visible {
			transition: all 0.2s ease-out;

			outline-offset: -6px;
			outline: 2px solid var(--color-blue);
		}

		.persona-info-wrapper {
			position: absolute;
			left: -1.626rem;
			top: 1.25rem;

			background-color: var(--color-white);
			border-radius: 1rem;
			padding: 0.25rem 0.625rem;

			box-shadow: 0 4px 4px rgba(var(--color-black-rgb), 0.15);

			width: min-content;

			p {
				margin: 0;
				line-height: 120%;
			}
			.persona-name {
				color: var(--color-black);
				font-weight: bold;
				font-size: 1.25rem;
			}

			.persona-disability {
				color: var(--color-black);
				font-size: 0.875rem;
				opacity: 0.8;
			}
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

	.toggle {
		display: flex;
		gap: 0.5rem;

		box-sizing: border-box;

		display: flex;
		justify-content: center;
		margin-bottom: 1.5rem;

		input {
			-webkit-appearance: none;
			appearance: none;
			background-color: var(--color-black);

			margin: 0;

			height: 1.5rem;
			width: 1.5rem;
			aspect-ratio: 1;

			border-radius: 0.375rem;
			border: 2px solid var(--color-white);

			cursor: pointer;

			display: grid;
			place-content: center;

			&:checked:before {
				content: '';
				width: 0.875rem;
				height: 0.875rem;
				box-shadow: inset 1rem 1rem var(--color-white);

				transform-origin: bottom left;
				clip-path: polygon(13% 50%, 5% 65%, 45% 100%, 100% 10%, 83% 0%, 40% 75%);
			}

			&:checked {
				background-color: var(--color-black);
			}

			&:focus,
			&:hover {
				outline: 2px solid var(--color-white);
				outline-offset: 2px;
			}
		}

		label {
			color: var(--color-white);
		}
	}
</style>
