<script lang="ts">
	import type { PersonaID } from '$lib/interfaces/persona.interfaces';
	import Ass from './ASS.svelte';
	import CareResponsibility from './CareResponsibility.svelte';
	import CerebralPalsy from './CerebralPalsy.svelte';
	import Glaucoma from './Glaucoma.svelte';
	import HardOfHearing from './HardOfHearing.svelte';
	import LrSandAdhs from './LRSandADHS.svelte';
	import MentalDisorder from './MentalDisorder.svelte';
	import MorbusCrohn from './MorbusCrohn.svelte';

	let { personaId }: { personaId: PersonaID } = $props();
</script>

{#if personaId === 'maxi'}
	<MentalDisorder />
{:else if personaId === 'michelle'}
	<MorbusCrohn />
{:else if personaId === 'aleksandr'}
	<Ass />
{:else if personaId === 'hannah'}
	<HardOfHearing />
{:else if personaId === 'kilian'}
	<CerebralPalsy />
{:else if personaId === 'gabriel'}
	<Glaucoma />
{:else if personaId === 'faiza'}
	<CareResponsibility />
{:else if personaId === 'oliver'}
	<LrSandAdhs />
{/if}
