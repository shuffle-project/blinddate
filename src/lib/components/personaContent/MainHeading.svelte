<script lang="ts">
	import type { PersonaName } from '$lib/interfaces/persona.interfaces';

	interface Props {
		personaName?: PersonaName;
		heading?:
			| 'Technologien und Strategien'
			| 'Lehrveranstaltungen'
			| 'Lernmaterial'
			| 'Eine Woche im Leben von'
			| 'Interaktion und Kommunikation'
			| 'Prüfungen'
			| 'Selbstcheck Barrierefreiheit'
			| 'Weitere Informationen'
			| 'Allgemeine Informationen'
			| 'LRS und ADHS'
			| '';
	}

	let { personaName, heading = '' }: Props = $props();

	export type MainHeadingId =
		| 'technologien-und-strategien'
		| 'lehrveranstaltungen'
		| 'lernmaterial'
		| 'eine-woche-im-leben-von'
		| 'interaktion-und-kommunikation'
		| 'pruefungen'
		| 'selbstcheck-barrierefreiheit'
		| 'weitere-informationen'
		| 'allgemeine-informationen'
		| 'lrs-adhs';

	let id: MainHeadingId | '' = $state('');

	switch (heading) {
		case 'Technologien und Strategien':
			id = 'technologien-und-strategien';
			break;
		case 'Lehrveranstaltungen':
			id = 'lehrveranstaltungen';
			break;
		case 'Lernmaterial':
			id = 'lernmaterial';
			break;
		case 'Eine Woche im Leben von':
			id = 'eine-woche-im-leben-von';
			break;
		case 'Interaktion und Kommunikation':
			id = 'interaktion-und-kommunikation';
			break;
		case 'Prüfungen':
			id = 'pruefungen';
			break;
		case 'Selbstcheck Barrierefreiheit':
			id = 'selbstcheck-barrierefreiheit';
			break;
		case 'Weitere Informationen':
			id = 'weitere-informationen';
			break;
		case 'Allgemeine Informationen':
			id = 'allgemeine-informationen';
			break;
		case 'LRS und ADHS':
			id = 'lrs-adhs';
			break;
	}
</script>

<div class="wrapper">
	{#if id === 'eine-woche-im-leben-von' && personaName}
		<h2 class="main-heading" {id}>{`${heading} ${personaName}`}</h2>
	{:else}
		<h2 class="main-heading" {id}>{heading}</h2>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		padding-inline: 3.25rem;

		.main-heading {
			padding-top: 5rem;
			margin-inline: 0;
		}
	}

	#lectures,
	#tips,
	#interaction {
		word-wrap: break-word;
		overflow-wrap: break-word;
		overflow-wrap: anywhere;

		-webkit-hyphens: auto;
		-moz-hyphens: auto;
		hyphens: auto;
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			padding-inline: var(--outer-spacing);

			.main-heading {
				width: 100%;
				max-width: 35rem;
				margin-inline: auto;
				box-sizing: border-box;
				margin-bottom: 0.375rem;
			}
		}

		#tools {
			margin-bottom: 2rem;
		}
	}
</style>
