<script lang="ts">
	export let isDisabled = false;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function onHandleClick() {
		if (isDisabled) return;
		dispatch('click');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button class:disabled={isDisabled} on:click={onHandleClick} role="menuitem">
	<slot />
</button>

<style>
	button {
		font-size: 0.9rem;
		display: flex;
		align-items: right;
		justify-content: start;
		border: 2px solid var(--color-white);
		border-radius: 5px;
		margin: 3px;
		padding: 2px 5px;
		background-color: var(--color-white);
		box-sizing: border-box;
	}
	button:focus {
		outline: 2px solid var(--color-black);
	}
	button:hover {
		outline: 2px solid var(--color-black);
	}
	button.disabled {
		color: var(--color-black);
	}
	button.disabled:hover {
		background: var(--color-white);
	}
</style>
