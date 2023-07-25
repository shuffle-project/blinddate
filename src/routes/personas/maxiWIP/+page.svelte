<script lang="ts">
	import { base } from '$app/paths';
	import PersonaContent from '$lib/components/PersonaContent.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import FriendBubble from '$lib/components/friendPersona/FriendBubble.svelte';
	import PlayerExtended from '$lib/components/player/PlayerExtended.svelte';
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
				captionsArray: []
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
		<h2 class="no-component-text" id="interaction">Interaktion und Kommunikation</h2>
		<Recommendation link="https://www.dbsv.org/gruener-star-glaukom.html">
			<svelte:fragment slot="linkText">
				Deutscher Blinden und Sehbehinderten Verband
			</svelte:fragment>
		</Recommendation>
		<FriendBubble {friendPersona}>
			Ich nehme zu Beginn jedes Semesters Kontakt mit den Lehrpersonen auf und versuche, zu
			erklären, wie ich arbeite und was ich benötige. Häufig muss ich während des Semesters erneut
			dran erinnern, weil Dokumente nicht frühzeitig zum Bearbeiten da sind etc. Ich weiß, Gabriel
			ist es Leid, immer wieder zu erinnern. Aber es hilft ja nichts. Ich bleibe da hintendran.
		</FriendBubble>
		<!-- <Checklist
			checks={[
				'Ich informiere mich über Barrierefreiheit',
				'Ich stelle meine Lernmaterialien vorab zur Verfügung',
				'Ich stelle meine Lernmaterialien digital zur Verfügung',
				'Ich verwende auditive statt visueller Medien',
				'Ich beschreibe visuelle Medien detailliert',
				'Ich benutze digitale statt analoger Tafeln',
				'Ich achte auf die Barrierefreiheit textueller Dokumente',
				'Ich optimiere die Lichtverhältnisse im Vorlesungssaal',
				'Ich gestatte Blindenführhunde im Vorlesungssaal',
				'Ich gestatte technische Hilfsmittel',
				'Ich zeichne meine Vorlesung auf oder gestatte eine Aufzeichnung meiner Vorlesung',
				'Ich gestatte verlängerte Abgabefristen oder alternative Prüfungsformen',
				'Ich mache ausreichend Pausen in langen Vorlesungsblocken'
			]}
			{persona}
		/> -->
		<h2 id="main">Lorem Ipsum</h2>
		<!-- heading as main content for testing purposes -->
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
			justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
			et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
			sanctus est Lorem ipsum dolor sit amet.
		</p>

		<SpeechBubble {persona}>
			Hallo, mein Name ist Maxi. Ich studiere Architektur im Master in Mannheim und wohne mit drei
			Personen in einer WG in einem Wohnheim. Eine dieser Personen ist Alex, der gemeinsam mit mir
			Architektur studiert. Das ist für mich sehr hilfreich, da wir uns gegenseitig unterstützen
			können.
			<br />
			Neben dem Studium schaue ich gerne Serien, gehe Skateboarden und bin generell viel in der Natur.
			Hier fotografiere ich sehr gerne Tiere und deren Unterschlüpfe – wahrscheinlich eine Auswirkung
			meines Studiums.
			<br />
			Mittlerweile bin ich im Master angekommen. Das hat eine Weile gedauert, weil ich ein Krankheitssemester
			nehmen musste. Immer mehr schwere depressive Episoden und eine Angststörung machten es mir unmöglich,
			weiter zu studieren. Nachdem ich Hilfe bekommen habe, konnte ich mich an die Beauftragte für Menschen
			mit Beeinträchtigung an der Hochschule wenden und habe nun einen Nachteilsausgleich mit individuellem
			Studienverlaufsplan.
		</SpeechBubble>

		<h2 id="tools">Technologien und Strategien</h2>
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

		<PlayerExtended {extendedPlayerConfig} />
	</svelte:fragment>
</PersonaContent>
