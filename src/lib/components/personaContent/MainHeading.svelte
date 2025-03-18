<script lang="ts">
	interface Props {
		personaName?: string;
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

	let { personaName = '', heading = '' }: Props = $props();

	let id:
		| 'tools'
		| 'lectures'
		| 'material'
		| 'week'
		| 'interaction'
		| 'exams'
		| 'tips'
		| 'more-info'
		| 'general'
		| 'lrs-adhs'
		| '' = $state('');

	switch (heading) {
		case 'Technologien und Strategien':
			id = 'tools';
			break;
		case 'Lehrveranstaltungen':
			id = 'lectures';
			break;
		case 'Lernmaterial':
			id = 'material';
			break;
		case 'Eine Woche im Leben von':
			id = 'week';
			break;
		case 'Interaktion und Kommunikation':
			id = 'interaction';
			break;
		case 'Prüfungen':
			id = 'exams';
			break;
		case 'Selbstcheck Barrierefreiheit':
			id = 'tips';
			break;
		case 'Weitere Informationen':
			id = 'more-info';
			break;
		case 'Allgemeine Informationen':
			id = 'general';
			break;
		case 'LRS und ADHS':
			id = 'lrs-adhs';
			break;
	}
</script>

<div class="wrapper">
	{#if id === 'week'}
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
