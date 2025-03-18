<script lang="ts">
	import { base } from '$app/paths';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { Persona } from '../interfaces/persona.interfaces';

	interface Props {
		persona: Persona | FriendPersona;
	}

	let { persona }: Props = $props();
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
		margin-top: 1.25rem;
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
			color: var(--color-black);
			font-size: 1.375rem;
			font-weight: 700;
			position: absolute;
			display: flex;
			justify-content: center;

			width: 80%;
			bottom: 7%;
			left: 0;
			right: 0;
			margin-inline: auto;
		}

		.age-text {
			font-weight: 300;
		}
	}
</style>
