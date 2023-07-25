<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '../interfaces/persona.interfaces';
	import Icon from './Icon.svelte';

	export let persona: Persona;

	let playingAudio = false;

	// const SpeechSynthesis = window.SpeechSynthesis;
	// const speechSynthesis = new SpeechSynthesis();

	let textDiv: HTMLElement;

	const speak = () => {
		const speechSynthesis = window.speechSynthesis;
		if (playingAudio) {
			playingAudio = false;
			speechSynthesis.cancel();
		} else {
			playingAudio = true;
			const utterance = new SpeechSynthesisUtterance(textDiv.innerHTML);
			speechSynthesis.speak(utterance);
		}
	};
</script>

<div class="wrapper">
	<div class="persona_img_container">
		<img
			class="persona-img"
			src="{base}/personas/{persona.id}/{persona.id}.svg"
			alt=""
			role="presentation"
		/>
	</div>

	<div class="decorative-outline">
		<div aria-hidden="true" class="speech-bubble-indicator">
			<img src="{base}/decorations/speech-bubble-indicator.svg" alt="" />
		</div>
	</div>

	<button
		class="playbutton"
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

<style lang="scss">
	.wrapper {
		max-width: 31.04rem; //39.24rem -  7.22rem - 1rem
		position: relative;
		padding-left: 1.66rem;
		padding-top: 0.85rem;
		margin-top: 2rem;
		margin-right: 7.66rem;

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

		.playbutton {
			cursor: pointer;
			background-color: var(--color-turquoise);
			border: 2px solid transparent;
			outline: 2px solid transparent;
			border-top-left-radius: 0.55rem;
			border-top-right-radius: 0.55rem;
			position: absolute;
			top: -1rem;
			left: 3.33rem;
			padding: 0.3rem 0.5rem 0.5rem 0.5rem;
			display: flex;
			justify-content: center;

			width: 2.2rem;
			height: 2.2rem;

			&:hover,
			&:focus {
				outline: 2px solid var(--color-blue);
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			padding-left: 0rem;
			margin-inline: auto;
			padding: 0 1.33rem;

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

			.playbutton {
				margin-top: 2.2rem;
			}
		}
	}
</style>
