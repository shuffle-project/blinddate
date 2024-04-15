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
	aria-label="Inhaltsverzeichnis anzeigen"
	on:click={onClickButtonToggleInternal}
>
	<div class="blob">
		{#if !pressed}
			<Icon img="list" size="smedium" />
		{:else}
			<Icon img="close" size="big" />
		{/if}
	</div>
</button>

<style lang="scss">
	.switch-button {
		position: absolute;
		right: 0.625rem;
		top: 0.625rem;
		z-index: 5;

		width: 2.75rem;
		height: 2.75rem;

		border: none;
		border-radius: 50%;

		background-color: var(--color-white);

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;

		&:hover,
		&:focus {
			outline: 2px solid var(--color-blue);
			outline-offset: 0px;
		}
	}
</style>
