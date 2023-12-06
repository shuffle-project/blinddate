<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import type { Persona } from '../interfaces/persona.interfaces';
	import Icon from './Icon.svelte';

	export let persona: Persona;
	export let audio: string = '';

	let audioElement: HTMLAudioElement;
	let playingAudio = false;

	let textDiv: HTMLElement;

	const speak = () => {
		if (audioElement) {
			audioElement.paused ? audioElement.play() : audioElement.pause();
			playingAudio = !playingAudio;
		}
	};

	onMount(() => {
		if (audio !== '') {
			audioElement = new Audio(audio);
		}

		if (audioElement) {
			audioElement.addEventListener('ended', (e) => {
				playingAudio = false;
			});
		}
	});
</script>

<div role="separator" aria-label="Anfang der {persona.name} Sprechblase" />
<div class="wrapper">
	<div class="mobile-card">
		<div class="img-wrapper">
			<div class="img">
				<Icon size="parent" img="/personas/{persona.id}/{persona.id}" />
			</div>
		</div>
		<button
			class="playbutton-mobil"
			on:click={speak}
			aria-label={!playingAudio ? persona.name + ' Sprechblase vorlesen' : 'Vorlesen stoppen'}
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
		on:click={speak}
		aria-label={!playingAudio ? persona.name + ' Sprechblase vorlesen' : 'Vorlesen stoppen'}
	>
		{#if playingAudio}
			<Icon size="smedium" img="pause" />
		{:else}
			<Icon size="smedium" img="play" />
		{/if}
	</button>
	<p class="text" bind:this={textDiv}>
		<slot />
	</p>
</div>
<div role="separator" aria-label="Ende der {persona.name} Sprechblase" />

<style lang="scss">
	.wrapper {
		max-width: 31.04rem; //39.24rem -  7.22rem - 1rem
		position: relative;
		padding-left: 1.66rem;
		padding-top: 0.85rem;
		margin: 2rem 0 1rem 0;

		.mobile-card {
			display: none;
		}

		.decorative-outline {
			position: absolute;
			top: 0;
			left: 0.85rem;
			right: 0.85rem;
			bottom: 0.85rem;
			border: 1px solid var(--color-black);
			background-color: var(--color-background-body);
			border-radius: 0.85rem;

			.speech-bubble-indicator {
				position: absolute;
				top: 1rem;
				left: -18px;
			}
		}
		.persona_img_container {
			display: none;
		}

		.text {
			margin: 0;
			position: relative;
			padding: 1.11rem 1.66rem;
			font-family: var(--font-persona);
			line-height: 150%;
			color: var(--color-black);
			border: 1px solid var(--color-black);
			border-radius: 0.83rem;
			background-color: var(--color-green);
			box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.1);

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
			border: 2px solid transparent;
			outline: 2px solid transparent;
			border-top-left-radius: 0.55rem;
			border-top-right-radius: 0.55rem;
			position: absolute;
			top: -1rem;
			left: 3.33rem;

			display: flex;
			justify-content: center;
			align-items: center;

			width: 2.5rem;
			height: 2rem;

			&:hover,
			&:focus {
				outline: 2px solid var(--color-blue);
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			margin: 3rem auto 1rem auto;
			padding: 0 1.33rem;

			.mobile-card {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0.33rem;
				box-sizing: border-box;

				height: 3.5rem;
				max-width: 6.5rem;

				position: absolute;
				inset: -2rem 0 0 0;
				z-index: 2;
				margin-inline: auto;

				box-shadow: 0 6px 10px 0 rgba(var(--color-black-rgb), 0.15);
				border-radius: 2.3rem;
				background: var(--color-gradient-persona);

				.playbutton-mobil {
					background: none;
					border: none;
					border-radius: 50%;
					aspect-ratio: 1;
					width: 2.5rem;

					display: flex;
					align-items: center;
					justify-content: center;

					&:hover,
					&:focus {
						outline: 2px solid var(--color-blue);
					}
				}

				.img-wrapper {
					width: 2.8rem;
					height: 2.8rem;
					border: 3px solid var(--color-white);
					border-radius: 50%;
					overflow: hidden;
					box-sizing: border-box;

					.img {
						transform: translateY(0.2rem) translateX(-0.1rem);
						width: 3rem;
						height: 3rem;
					}
				}
			}

			.decorative-outline {
				display: none;
			}
			.persona_img_container {
				position: relative;
				z-index: 2;

				display: flex;
				justify-content: center;
				align-items: center;

				background: var(--color-gradient-persona);
				margin: auto auto -1.6rem auto;
				width: 4.8rem;
				height: 4.8rem;
				border-radius: 50%;
				box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.15);

				overflow: hidden;
			}

			.persona_img_container img {
				height: 5rem;
				transform: translateY(0.5rem);
			}

			.text {
				padding-top: 2rem;
			}

			.playbutton-desktop {
				display: none;
			}
		}
	}
</style>
