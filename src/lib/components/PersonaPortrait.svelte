<script lang="ts">
	import { base } from '$app/paths';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { Persona } from '../interfaces/persona.interfaces';

	export let persona: Persona | FriendPersona;
</script>

<div class="wrapper">
	<img class="frame-img" src="{base}/decorations/persona-background.svg" alt="" />
	<img
		class="persona-img"
		src="{base}/personas/{persona.id}/{persona.id}.svg"
		alt={'visualDescription' in persona ? persona.visualDescription : ''}
	/>
	<img class="name-img" src="{base}/decorations/persona-name.svg" alt="" />

	<span class="name-text"
		>{persona.name}
		<span class="age-text">{'age' in persona ? ', ' + persona.age : ''}</span>
	</span>
</div>

<style lang="scss">
	.wrapper {
		margin-top: 1rem;
		position: relative;
		height: 50%;

		.frame-img {
			position: absolute;
			height: 95%;
			left: 0;
			right: 0;
			margin-inline: auto;
		}
		.persona-img {
			position: absolute;
			height: 90%;
			left: 0;
			right: 0;
			margin-inline: auto;
		}
		.name-img {
			position: absolute;
			width: 100%;
			bottom: -10%;
			left: 0;
			right: 0;
			margin-inline: auto;
		}
		.name-text {
			font-family: var(--font-serif);
			color: var(--color-black);
			font-size: 1.33rem;
			font-weight: bold;
			position: absolute;
			display: flex;
			justify-content: center;

			width: 70%;
			bottom: 6%;
			left: 0;
			right: 0;
			margin-inline: auto;
		}

		.age-text {
			font-weight: 400;
		}
	}
</style>
