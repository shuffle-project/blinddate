<script lang="ts">
	import Icon from './Icon.svelte';

	export let pressed = false;
	export let onClickButtonToggle: () => void;

	function onClickButtonToggleInternal() {
		pressed = !pressed;
		onClickButtonToggle();
	}
</script>

<button
	class="switch-button"
	aria-pressed={pressed}
	aria-label="Inhaltsverzeichnis"
	on:click={onClickButtonToggleInternal}
>
	<div class="blob">
		{#if !pressed}
			<Icon img="list" size="smedium" />
		{:else}
			<Icon img="close" size="medium" />
		{/if}
	</div>
</button>

<style lang="scss">
	.switch-button {
		position: absolute;
		right: 0.5rem;
		top: 0.3rem;
		z-index: 5;

		border: none;
		border-radius: 50%;
		aspect-ratio: 1;
		background-color: transparent;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;

		outline: 2px solid transparent;

		&:hover,
		&:focus {
			outline: 2px solid var(--color-blue);
		}
	}

	.blob {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 2.4rem;
		height: 2.2rem;
		background-color: var(--color-white);
		border-radius: 120% 50% 100% 100% / 100% 100% 80% 60%;

		filter: drop-shadow(0px 1px 2px rgba(var(--color-black-rgb), 0.2));
	}
</style>
