<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { detect } from 'detect-browser';
	import { onMount } from 'svelte';
	let isSafari = false;
	let flipped = false;

	export let front: string;
	export let back: string;
	export let persona: Persona;

	onMount(() => {
		isSafari = detect()!.name == 'safari';
	});

	function onKeydown(ev: KeyboardEvent) {
		if (ev.key === ' ' || ev.key === 'Enter') {
			ev.preventDefault();
			flipped = !flipped;
		}
	}
</script>

<div class="speech-bubble-wrapper">
	<div aria-hidden="true" class="decorative-figure">
		<img src="{base}/decorations/decorative-figure.svg" alt="" />
	</div>
	<div class="speech-bubble-indicator">
		<img src="{base}/decorations/speech-bubble-indicator-green.svg" alt="" />
	</div>
	<div class="speech-bubble">
		<p>
			<span class="text">Ich, {persona.name}, wollte schon immer mal sagen:</span>
		</p>
	</div>
</div>

<div class="wrapper" aria-live={isSafari ? 'polite' : null}>
	<div
		tabindex="0"
		class="flip-card {flipped ? 'flipped' : ''}"
		on:click={() => {
			flipped = !flipped;
		}}
		on:keydown={onKeydown}
		role="button"
		aria-roledescription="Umdrehbare Karte"
		aria-labelledby="flip-card-inner"
	>
		<div id="flip-card-inner" class="flip-card-inner">
			<div role="group" id="flip-card-front" class="flip-card-front" aria-hidden={flipped}>
				<span class="site-info">Vorderseite</span>
				<div class="main">{front}</div>
			</div>
			<div role="group" id="flip-card-back" class="flip-card-back" aria-hidden={!flipped}>
				<span class="site-info">Rückseite</span>
				<div class="main">{back}</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.speech-bubble-wrapper {
		position: relative;
		isolation: isolate;
		margin-top: 5rem;
		margin-inline: auto;
		transform: rotateZ(-5deg) translateY(1.25rem);

		.speech-bubble {
			background-color: var(--color-green);
			border: 1px solid var(--color-black);
			border-radius: 1.25rem;
			padding: 0 1.625rem 1.25rem 1.625rem;
			font-family: var(--font-persona);
			line-height: 150%;
			max-width: 18rem;
			box-sizing: border-box;

			p {
				.text {
					&::before {
						content: open-quote;
					}

					&::after {
						content: close-quote;
					}
				}
			}
		}

		.speech-bubble-indicator {
			display: none;
		}

		.decorative-figure {
			position: absolute;
			top: -3rem;
			z-index: -1;

			width: 100%;
			max-width: 18rem;
			box-sizing: border-box;

			display: flex;
			justify-content: center;
		}
	}

	@media (min-width: 59.375rem) {
		.wrapper {
			max-width: calc(var(--content-element-max-width) - 3.75rem);
			width: 100%;
			margin-left: 1.875rem;
		}

		.speech-bubble-wrapper {
			transform: rotateZ(-5deg) translateY(3rem);
			margin: 5rem 0 3rem 6rem;

			.speech-bubble-indicator {
				display: block;
				position: absolute;
				top: 1rem;
				left: -16.5px;
			}

			.decorative-figure {
				max-width: 16rem;
			}

			.speech-bubble {
				max-width: 16rem;
				p {
					.name {
						display: none;
					}
				}
			}
		}
	}

	.wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.flip-card {
		background-color: transparent;
		width: 18rem;
		min-height: 28rem;
		perspective: 1000px;
		border-radius: 1.25rem;
		cursor: pointer;

		&:focus-within,
		&:hover {
			outline: 4px solid var(--color-blue);
			outline-offset: 2px;
		}
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;

		transition: transform 0.8s;
		transform-style: preserve-3d;
		@media prefers-reduced-motion {
			transition: transform 2s;
		}
	}

	.flip-card.flipped .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		max-width: 100%;
		height: 100%;
		max-height: 100%;

		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		border-radius: 1.25rem;
		box-shadow: 0px 6px 10px rgba(var(--color-black-rgb), 0.1);

		display: flex;
		flex-direction: column;
		text-align: start;
		padding: 1.875rem;
		box-sizing: border-box;

		.site-info {
			margin-bottom: 1.25rem;
		}

		.main {
			font-weight: bold;
		}
	}

	.flip-card-front {
		background-color: var(--color-black);
		color: var(--color-white);

		.main {
			font-size: max(2rem, 2.5rem);
			line-height: 120%;
		}
	}

	.flip-card-back {
		transform: rotateY(180deg);
		background-color: var(--color-white);
		color: var(--color-black);
		border: 1px solid var(--color-black);

		.main {
			font-size: max(1rem, 1.5rem);
			line-height: 140%;
		}
	}
</style>
