<script lang="ts">
	import { afterUpdate, createEventDispatcher, onMount, setContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import { trapFocus } from '../utils';
	import { key } from './menu';

	export let x: number;
	export let y: number;

	// whenever x and y is changed, restrict box to be within bounds
	$: () => {
		if (!menuEl) return;

		const rect = menuEl.getBoundingClientRect();
		x = Math.min(window.innerWidth - rect.width, x);
		if (y > window.innerHeight - rect.height) y -= rect.height;
	};
	// (x, y);

	const dispatch = createEventDispatcher();

	setContext(key, {
		dispatchClick: () => dispatch('click')
	});

	let menuEl: HTMLDivElement;

	let firstPageClick = true;
	function onPageClick(e: MouseEvent) {
		if (firstPageClick) {
			firstPageClick = false;
			return;
		}

		if (e.target === menuEl || menuEl.contains(e.target as Node)) return;

		dispatch('closeDialog');
	}

	afterUpdate(() => {
		// open menu to top
		if (
			window.innerHeight + window.pageYOffset < y + menuEl.clientHeight ||
			document.fullscreenElement
		) {
			y = y - menuEl.clientHeight;
		}

		// open menu to left
		if (window.innerWidth < x + menuEl.clientWidth || document.fullscreenElement) {
			x = x - menuEl.clientWidth;
		}
	});

	onMount(async () => {
		trapFocus(menuEl, true);
	});

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			dispatch('closeDialog');
		}
	}
</script>

<svelte:body on:click={onPageClick} />

<div
	role="menu"
	transition:fade={{ duration: 100 }}
	bind:this={menuEl}
	style="top: {y}px; left: {x}px;"
	on:keydown={onKeydown}
>
	<slot />
</div>

<style>
	div {
		position: absolute;

		display: flex;
		flex-direction: column;

		background-color: var(--color-white);
		width: 11.11rem;

		border: 2px solid var(--color-black);
		box-sizing: border-box;
		border-radius: 10px;
	}
</style>
