<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';
	import WeekDesktop from './WeekDesktop.svelte';
	import WeekMobile from './WeekMobile.svelte';

	interface Props {
		persona: Persona;
	}

	let { persona }: Props = $props();

	let desktop = $state(true);
	let mounted = $state(false);

	onMount(() => {
		desktop = window.innerWidth > 510;
		window.addEventListener('resize', () => {
			desktop = window.innerWidth > 510;
		});
		mounted = true;
	});
</script>

<!-- CSS media queries not working because the switch in each week component affect ... -->
<!-- ...  each other through, probably, the bindings -->
<div class="wrapper" class:mounted>
	{#if desktop}
		<WeekDesktop {persona} />
	{:else}
		<WeekMobile {persona} />
	{/if}
</div>

<style lang="scss">
	.wrapper {
		opacity: 0%;
		&.mounted {
			opacity: 100%;
			transition: opacity 0.2s ease-in-out;
		}
	}
</style>
