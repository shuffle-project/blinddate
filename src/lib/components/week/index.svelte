<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';
	import WeekDesktop from './WeekDesktop.svelte';
	import WeekMobile from './WeekMobile.svelte';

	export let persona: Persona;

	let desktop = true;

	onMount(() => {
		desktop = window.innerWidth > 510;
		window.addEventListener('resize', () => {
			desktop = window.innerWidth > 510;
		});
	});
</script>

<!-- CSS media queries not working because the switch in each week component affect ... -->
<!-- ...  each other through, probably, the bindings -->
<div class="wrapper">
	{#if desktop}
		<WeekDesktop {persona} />
	{:else}
		<WeekMobile {persona} />
	{/if}
</div>

<style lang="scss">
	// @media (max-width: 31.875rem) {
	// 	@keyframes smooth-on-mobile-reload {
	// 		0% {
	// 			opacity: 0%;
	// 		}
	// 		100% {
	// 			opacity: 100%;
	// 		}
	// 	}
	// 	.wrapper {
	// 		animation: smooth-on-mobile-reload 1s linear forwards;
	// 		animation-delay: 0.3s;
	// 	}
	// }
</style>
