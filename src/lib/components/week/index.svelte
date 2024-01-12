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

<div class="wrapper">
	{#if desktop}
		<WeekDesktop {persona} />
	{:else}
		<WeekMobile {persona} />
	{/if}
</div>

<style lang="scss">
	@media (min-width: 31.9375rem) {
		.mobile {
			display: none;
		}
	}
	@media (max-width: 31.875rem) {
		.desktop {
			display: none;
		}
	}
</style>
