<script lang="ts">
	import { base } from '$app/paths';
	import { onDestroy, onMount, type Snippet } from 'svelte';
	import type { Persona } from '../../interfaces/persona.interfaces';
	import Icon from '../Icon.svelte';

	interface Props {
		persona: Persona;
		audio?: string;
		children?: Snippet;
	}

	let { persona, audio = '', children }: Props = $props();

	let audioElement: HTMLAudioElement;
	let playingAudio = $state(false);

	let button: HTMLButtonElement;

	const speak = () => {
		if (audioElement) {
			audioElement.paused ? audioElement.play() : audioElement.pause();
			playingAudio = !playingAudio;
		}
	};

	const preloadData = () => {
		if (audioElement) {
			if (audioElement.preload === 'metadata') {
				audioElement.preload = 'auto';
				audioElement.load();
			}
		}
	};

	onMount(() => {
		if (audio !== '') {
			audioElement = new Audio(audio);
			audioElement.preload = 'metadata';
		}

		if (audioElement) {
			audioElement.addEventListener('ended', (e) => {
				playingAudio = false;
			});
		}
	});

	onDestroy(() => {
		if (audioElement && !audioElement.paused) {
			audioElement.pause();
		}
	});
</script>

<div class="wrapper" role="region" aria-label="{persona.name} Sprechblase">
	<div class="mobile-card">
		<div class="img-wrapper">
			<div class="img">
				<Icon size="parent" img="/personas/{persona.id}/{persona.id}" />
			</div>
		</div>
		<button
			bind:this={button}
			class="playbutton-mobil"
			onclick={speak}
			aria-label={!playingAudio ? persona.name + ' Sprechblase vorlesen' : 'Vorlesen stoppen'}
			onfocus={preloadData}
			onmouseenter={preloadData}
		>
			{#if playingAudio}
				<Icon size="smedium" img="pause" />
			{:else}
				<Icon size="smedium" img="play" />
			{/if}
		</button>
	</div>

	<div class="decorative-outline">
		<div aria-hidden="true" class="speech-bubble-indicator">
			<img src="{base}/decorations/speech-bubble-indicator.svg" alt="" />
		</div>
	</div>

	<button
		class="playbutton-desktop"
		onclick={speak}
		onfocus={preloadData}
		onmouseenter={preloadData}
	>
		{#if playingAudio}
			<Icon size="smedium" img="pause" />
			<span>Pausieren</span>
		{:else}
			<Icon size="smedium" img="play" />
			<span>Abspielen</span>
		{/if}
	</button>
	<p class="text">
		{@render children?.()}
	</p>
</div>

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		position: relative;
		padding-left: 1.875rem;
		padding-top: 1rem;
		margin: 1.875rem 0 1rem;

		.mobile-card {
			display: none;
		}

		.decorative-outline {
			position: absolute;
			top: 0;
			left: 1rem;
			right: 1rem;
			bottom: 1rem;
			border: 1px solid var(--color-black);
			background-color: var(--color-background-body);
			border-radius: 1.25rem;

			.speech-bubble-indicator {
				position: absolute;
				top: 1rem;
				left: -1.125rem;
			}
		}

		.text {
			margin: 0;
			position: relative;
			padding: 1.25rem 1.375rem;

			font-family: var(--font-persona);
			line-height: 150%;
			color: var(--color-black);
			border: 1px solid var(--color-black);
			border-radius: 1.25rem;
			background-color: var(--color-green);

			&::before {
				content: open-quote;
			}

			&::after {
				content: close-quote;
			}
		}

		.playbutton-desktop {
			cursor: pointer;
			background-color: var(--color-turquoise);
			border: none;

			border-top-left-radius: 0.625rem;
			border-top-right-radius: 0.625rem;
			position: absolute;
			top: -1rem;
			left: 3.25rem;

			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.375rem;
			width: 7rem;
			height: 2rem;
			padding: 0.25rem 0.625rem;

			span {
				font-size: 0.875rem;
				color: rgba(var(--color-black-rgb), 0.8);
			}

			&:hover,
			&:focus {
				outline: 2px solid var(--color-blue);
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			margin: 3.25rem auto 1rem auto;
			padding: 0 var(--outer-spacing);

			.mobile-card {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0.375rem;
				box-sizing: border-box;

				height: 3.5rem;
				max-width: 7.125rem;

				position: absolute;
				inset: -2rem 0 0 0;
				z-index: 2;
				margin-inline: auto;

				box-shadow: 0 2px 2px 0 rgba(var(--color-black-rgb), 0.25);
				border-radius: 2rem;
				background: linear-gradient(160deg, var(--color-turquoise), var(--color-green));

				.playbutton-mobil {
					background: none;
					border: none;
					border-radius: 50%;
					aspect-ratio: 1;
					width: 3rem;

					display: flex;
					align-items: center;
					justify-content: center;

					&:hover,
					&:focus {
						outline: 2px solid var(--color-blue);
						outline-offset: -2px;
					}
				}

				.img-wrapper {
					width: 3rem;
					height: 3rem;
					border: 3px solid var(--color-white);
					border-radius: 50%;
					overflow: hidden;
					box-sizing: border-box;

					.img {
						transform: translateY(0.3125rem) translateX(-0.1rem);
						width: 3rem;
						height: 3rem;
					}
				}
			}

			.decorative-outline {
				display: none;
			}

			.text {
				padding-top: 1.875rem;
			}

			.playbutton-desktop {
				display: none;
			}
		}
	}

	@media (max-width: 28.75rem) {
		.wrapper {
			.text {
				padding: 1.625rem 1rem 1rem;
			}
		}
	}
</style>
