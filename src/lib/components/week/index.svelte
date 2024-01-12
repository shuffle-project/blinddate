<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
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
<!-- Adding svelte animation for cleaner transition on page refresh on mobile -->
<div class="wrapper">
	{#if desktop}
		<div in:fade={{ duration: 300 }}>
			<WeekDesktop {persona} />
		</div>
	{:else}
		<div in:fade={{ duration: 300 }}>
			<WeekMobile {persona} />
		</div>
	{/if}
</div>
