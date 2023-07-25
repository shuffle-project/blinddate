<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { createEventDispatcher } from 'svelte';
	import Icon from '../Icon.svelte';
	export let persona: Persona;
	export let dialogOpen = false;
	export let outer = false;
	export let mobileCardIsSticky = false;

	const dispatch = createEventDispatcher();
</script>

<div
	class="wrapper"
	class:sticky={mobileCardIsSticky}
	class:dialogOpen
	class:outer
	class:inner={!outer}
>
	<div class="persona-info">
		<div class="img-wrapper">
			<div class="img">
				<Icon size="parent" img="/personas/{persona.id}/{persona.id}" />
			</div>
		</div>
		<div>
			<span class="name-text">{persona.name}</span>
		</div>
	</div>

	<button
		class="open-menu-btn"
		aria-label={!outer
			? persona.name + ' mitscrollendes Menü schließen'
			: persona.name + ' mitscrollendes Menü öffnen'}
		on:click|stopPropagation={() => dispatch('toggleDialog')}
	>
		{#if !outer}
			<Icon size="medium" svg_color="white" img="close" />
		{:else}
			<Icon size="medium" svg_color="white" img="more-placeholder" />
		{/if}
	</button>
</div>

<style lang="scss">
	.wrapper {
		min-height: 3.5rem;
		min-width: 13.3rem;

		padding: 0.33rem;
		box-sizing: border-box;

		display: flex;
		justify-content: space-between;
		align-items: center;

		box-shadow: 0 6px 10px 0 rgba(var(--color-black-rgb), 0.15);
		border-radius: 2.3rem;
		background: var(--color-gradient-persona);
		font-family: var(--font-serif);
		z-index: 10;

		transition: transform 0.5s ease-out;

		&.dialogOpen.sticky {
			&.outer {
				transform: translateY(-100%);
				transition: transform 0.5s ease-out;
			}

			@keyframes animation-slide-in-down {
				from {
					transform: translateY(-100%);
				}
				to {
					transform: translateY(0%);
				}
			}

			&.inner {
				animation: animation-slide-in-down 1s ease-out forwards;
			}
		}

		.persona-info {
			display: flex;
			align-items: center;

			.name-text {
				font-size: 1.33rem;
				font-weight: bold;
				margin-left: 0.5rem;
			}

			.img-wrapper {
				width: 2.8rem;
				height: 2.8rem;
				border: 3px solid var(--color-white);
				border-radius: 50%;
				overflow: hidden;
				box-sizing: border-box;

				.img {
					transform: translateY(0rem) translateX(-0.1rem);
					width: 3rem;
					height: 3rem;
				}
			}
		}

		.open-menu-btn {
			background-color: var(--color-blue);
			border: none;

			border-radius: 50%;
			height: 2.33rem;
			width: 2.33rem;
			display: flex;
			justify-content: center;
			align-items: center;

			&:focus,
			&:hover {
				outline: 2px solid var(--color-blue);
				outline-offset: 2px;
			}
		}
	}
</style>
