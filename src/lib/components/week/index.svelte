<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';
	import WeekDesktop from './WeekDesktop.svelte';
	import WeekMobile from './WeekMobile.svelte';

	export let persona: Persona;

	let viewportBreakpoint: MediaQueryList;

	let smallViewport = true;

	onMount(() => {
		viewportBreakpoint = window.matchMedia(`(max-width: 510px)`);
		smallViewport = window.innerWidth < 510;

		viewportBreakpoint.addEventListener('change', (e) => {
			smallViewport = e.matches;
		});
	});
</script>

<div class="wrapper">
	{#if !smallViewport}
		<WeekDesktop {persona} />
	{:else}
		<WeekMobile {persona} />
	{/if}
</div>

<style lang="scss">
</style>
