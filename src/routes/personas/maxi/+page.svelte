<script lang="ts">
	import { base } from '$app/paths';
	import PersonaContent from '$lib/components/PersonaContent.svelte';
	import { BEA } from '$lib/constants/bea';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import SpeechBubble from '../../../lib/components/SpeechBubble.svelte';
	import ToolCard from '../../../lib/components/ToolCard.svelte';
	import { MAXI } from '../../../lib/constants/maxi';
	import type { Persona } from '../../../lib/interfaces/persona.interfaces';

	const persona: Persona = MAXI;
	const friendPersona: FriendPersona = BEA;

	const extendedPlayerConfig: ExtendedPlayerConfig = {
		title: 'Videotitel Platzhalter',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/sehen.mp4',
				poster: '',
				captionsArray: [{ path: '', label: '', lang: '' }]
			}
		],
		transcripts: [
			{
				title: 'Video mit Audiodeskription',
				body: 'Eine Audiodeskription liegt für dieses Video nicht vor.'
			},
			{
				title: 'Transkript',
				body: 'Hier könnte ihre Werbung stehen.'
			}
		]
	};
</script>

<svelte:head>
	<title>{persona.name} - BLIND DATE</title>
</svelte:head>

<PersonaContent {persona}>
	<svelte:fragment slot="content">
		<SpeechBubble {persona}>
			Hallo, mein Name ist Maxi und ich bin 29 Jahre alt. Ich studiere Architektur im Master in
			Mannheim und wohne mit drei Personen in einer WG in einem Wohnheim. Eine dieser Personen ist
			Alex, der gemeinsam mit mir Architektur studiert. Das ist für mich sehr hilfreich, da wir uns
			gegenseitig unterstützen können. Skateboarden ist ein großes Hobby von mir und ich bin
			generell viel in der Natur. Hier fotografiere ich sehr gerne Tiere und deren Unterschlüpfe –
			wahrscheinlich eine Auswirkung meines Studiums. Mittlerweile bin ich im Master angekommen. Das
			hat eine Weile gedauert, weil ich ein Krankheitssemester nehmen musste. Immer mehr schwere
			depressive Episoden und eine Angststörung haben es mir unmöglich gemacht, weiter zu studieren.
			Nachdem ich Hilfe bekommen habe, konnte ich mich an die Beauftragte für Menschen mit
			Beeinträchtigung an der Hochschule wenden und habe nun einen Nachteilsausgleich mit
			individuellem Studienverlaufsplan.
		</SpeechBubble>

		<h2 class="main-heading" id="tools">Technologien und Strategien</h2>
		<div style="overflow: hidden;">
			<ToolCard title="Regelmäßige Pausen" image="{base}/tools/regular-breaks.svg">
				Konzentrations- und Schlafstörungen können Symptome von Depressionen sein, die sich
				erheblich auf den (Studien-)Alltag der betroffenen Person auswirken. Eine Strategie, um der
				Erschöpfung und dem Belastungsgefühl entgegenzuwirken, ist, regelmäßig Pausen einzubauen.
			</ToolCard>

			<ToolCard title="Tagesplan" image="{base}/tools/day-plan.svg">
				Ein anderes Symptom von Depressionen kann eine Art „Lähmung“ sein. Die Person liegt
				beispielsweise im Bett und fühlt sich nicht in der Lage, aufzustehen und Zähne zu putzen
				oder andere alltägliche Aufgaben zu erledigen. Ein fester Tagesplan kann hier manchmal
				helfen.
			</ToolCard>

			<ToolCard title="Remote-Studium" image="{base}/tools/remote-study.svg">
				Zudem kann es hilfreich sein, von zu Hause arbeiten oder studieren zu können. Die
				Einstiegshürde kann hier als geringer empfunden werden. Unter Umständen bringt das digitale
				Studieren aber eine unfreiwillige Isolation mit sich.
			</ToolCard>

			<ToolCard title="Probleme erkennen" image="{base}/tools/identify-problem.svg">
				Eine wichtige Strategie kann sein, sich seine Krankheit einzugestehen. Solche wichtigen
				Strategien lernt man bei Therapeut*innen, sie sind sehr persönlich und schwer zu
				generalisieren.
			</ToolCard>

			<ToolCard title="Medienkonsum einschränken" image="{base}/tools/media-consumption.svg">
				Den Medienkonsum einzuschränken kann manchmal auch helfen – Soziale Medien können
				regelrechte Depressionsbeschleuniger sein.
			</ToolCard>
		</div>
	</svelte:fragment>
</PersonaContent>
