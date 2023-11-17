<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import WeekDesktop from './WeekDesktop.svelte';
	import WeekMobile from './WeekMobile.svelte';

	export let persona: Persona;
</script>

<div class="wrapper">
	<div class="desktop">
		<WeekDesktop {persona} />
	</div>
	<div class="mobile">
		<WeekMobile {persona} />
	</div>
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
