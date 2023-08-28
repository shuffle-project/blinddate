<script lang="ts">
	import { base } from '$app/paths';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import PersonaContent from '$lib/components/PersonaContent.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import FriendBubble from '$lib/components/friendPersona/FriendBubble.svelte';
	import { ALEX } from '$lib/constants/alex';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import SpeechBubble from '../../../lib/components/SpeechBubble.svelte';
	import ToolCard from '../../../lib/components/ToolCard.svelte';
	import { MAXI } from '../../../lib/constants/maxi';
	import type { Persona } from '../../../lib/interfaces/persona.interfaces';

	const persona: Persona = MAXI;
	const friendPersona: FriendPersona = ALEX;

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
				Psychische Erkrankungen sind Beeinträchtigungen, die oft als solche nicht wahrgenommen
				werden, da Symptome häufig „nicht sichtbar“ sind. Die unterschiedlichen Symptome psychischer
				Erkrankungen – wie beispielsweise Konzentrations- und Schlafstörungen, oder auch soziale
				Ängste - können sich erheblich auf den (Studien-)Alltag von Studierenden auswirken. Eine
				Strategie, um der Erschöpfung und dem Belastungsgefühl entgegenzuwirken, ist, regelmäßig
				Pausen einzubauen.
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

		<SpeechBubble {persona}>
			Manchmal ist es echt schwierig, auf den eigenen Körper zu hören und rechtzeitig und
			ausreichend Pausen zu machen. Ich fühle mich dann auf einmal grizzelig im Kopf und muss mich
			dann ausruhen. Oft hilft es mir, mich kurz hinzulegen, damit sich das Gefühl und die Gedanken
			etwas beruhigen können. Danach geht es mir besser und ich fühle mich wieder frischer im Kopf.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Ich habe herausgefunden, dass es mir hilft, dass ich für Vorlesungen zwar an die Hochschule
			gehe, aber Projektarbeiten lieber zu Hause mache. Dort habe ich nicht das Gefühl, jemand
			könnte mir über die Schulter gucken und sich über meine Arbeitsweise lustig machen. Leider ist
			das aber ein sehr einsames Arbeiten und ich fühle mich oft alleine.
		</SpeechBubble>

		<FriendBubble {friendPersona}>
			Hi, ich bin Alex, der Mitbewohner und Kommilitone von Maxi. Und ja, das Alleine-sein und die
			Isolation sind für mich auch sehr herausfordernd. Da bin ich immer froh, dass ich mit Maxi und
			unseren Mitbewohner*innen, die mich und meine Erkrankung verstehen, in einem Wohnheim wohne.
			Aber viele Menschen haben das leider nicht!
		</FriendBubble>

		<FriendBubble>
			Für mich war es sehr hilfreich, spezielle Übungen mit meiner Therapeutin einzuüben. Wenn meine
			Gedanken anfangen, sich zu überschlagen, versuche ich Dinge aufzuzählen, die ich sehe, höre
			oder spüre.
		</FriendBubble>

		<SpeechBubble {persona}>
			Ja, solche Übungen können hilfreich sein. Allerdings geht das auch nur, wenn ich mich gerade
			nicht in einer tiefen, depressiven Phase befinde.
		</SpeechBubble>

		<FriendBubble {friendPersona}>
			Ja, dann helfen mir die Übungen teilweise auch nicht. Durch die Therapie und Gespräche mit
			meinem Arzt konnte ich aber mittlerweile Medikamente bekommen, die zwar Nebenwirkungen haben,
			mir aber dennoch helfen
		</FriendBubble>

		<FlipCard
			front="Ich bin nicht faul!"
			back="Ich habe depressive Episoden. Alles - selbst Aufstehen - kostet mich dann viel Kraft, die an anderer Stelle somit fehlt."
		/>

		<h2 class="main-heading" id="lectures">Lehrveranstaltungen</h2>

		<p class="no-component-text">
			Einer Vorlesung über 90 Minuten aufmerksam zuzuhören, ist anstrengend.
			Konzentrationsschwierigkeiten, belastende Gedanken und Selbstzweifel machen es Menschen, die
			Depressionen haben, umso schwerer dem Gesagten zu folgen. Angst vor Inhalten auf unbekannten
			Folien, die eine triggernde Wirkung haben könnten, kann mit frühzeitiger Bereitstellung dieser
			Vorlesungsfolien entgegengewirkt werden.
		</p>

		<SpeechBubble {persona}>
			Ich habe gemerkt, dass mich diese Seminare und Vorlesungen, die online sind oder auch in
			Präsenz, in denen ich die Folien nicht vorab habe, extrem fordern. Weil meine Konzentration zu
			bestimmten Tageszeiten einfach extrem eingeschränkt ist und meine Gedanken sich nur damit
			beschäftigen, dass hoffentlich keine Inhalte auf den Folien folgen, die das Gedanken-Karussell
			zum Drehen bringen. Das Problem an diesen Gedanken ist, dass sie sehr lähmend sind. Sind sie
			auf einmal da, verbieten sie es mir regelrecht, noch irgendetwas anderes zu tun, als sie zu
			denken. In der Zeit geht dann alles, was beispielsweise eine Lehrperson sagt, zu einem Ohr
			hinein und zum anderen wieder hinaus, und nichts bleibt hängen. Wenn ich mich dann umschaue
			und alle anderen – scheinbar – mühelos der Vorlesung folgen, bestätigt das das schlechte Bild,
			das ich von mir habe, umso deutlicher, und ich werde richtig sauer auf mich und enttäuscht von
			mir selbst.
		</SpeechBubble>

		<div class="spacer" />

		<p class="no-component-text">
			Stehen Vorlesungen als Videos zum asynchronen Lernen zur Verfügung, können Pausen und
			Geschwindigkeit des Lernens individuell gewählt werden.
		</p>

		<div class="spacer" />

		<p class="no-component-text">
			Klare Strukturen, sowohl auf Vorlesungsfolien, als auch im generellen Vorgehen während des
			Semesters – wie beispielsweise verbindliche Zeiten, zu denen Inhalte auf Plattformen
			hochgeladen werden (Infos zu Prüfungen, zu Teilnahme, ...) - geben Sicherheit und
			Vorhersehbarkeit.
		</p>

		<div class="spacer" />

		<p class="no-component-text">
			Die „Kamera-Problematik“: Das gezwungene Einschalten der Kamera in Online-Veranstaltungen kann
			für Menschen mit psychischen Erkrankungen eine große Hürde darstellen. Auf der anderen Seite
			können komplett ausgeschaltete Kameras und das Sitzen vor „schwarzen Kacheln“ sehr isolierend
			wirken. Die Anonymität kann sowohl positiv als auch negativ empfunden werden.
		</p>

		<SpeechBubble {persona}>
			Letzte Woche hatte ich wieder so eine Situation. Ich hab meine Kamera dann einfach
			eingeschaltet und hab mich unwohl gefühlt. Weil ich ja auch weiß – okay, das macht zwar
			niemand – aber man könnte mich groß stellen und nur mich jetzt über den ganzen Bildschirm
			sehen. Man wird da halt sehr präsentiert und ich hab mich bloßgestellt gefühlt.
		</SpeechBubble>

		<FriendBubble {friendPersona}>
			Und ich merke, wenn die Kamera bei Zoom zum Beispiel aus ist, dann mache ich halt alles andere
			nebenbei. Dann kann ich hier auch noch mein Zimmer putzen, wenn es denn gerade nötig ist, weil
			es merkt ja dann keiner und dadurch geht halt einfach die Konzentration dann irgendwann
			komplett flöten.
		</FriendBubble>

		<div class="spacer" />

		<p class="no-component-text">
			Es gibt also keine Musterlösung, ein sensibler Umgang mit Daten und eine vertrauensvolle
			Atmosphäre und ggf. individuelle Lösungen können hier förderlich sein.
		</p>

		<h2 class="main-heading" id="tips">Tipps zur Unterstützung</h2>

		<p class="no-component-text">
			Hier ist eine Auflistung von schnellen und einfachen Tipps, wie Sie Gabriel und viele weitere
			Menschen unterstützen können.
		</p>

		<Checklist
			checks={[
				'Ich informiere mich über digitale Barrierefreiheit',
				'Ich mache Studierende auf Ansprechpersonen und Unterstützungsangebote aufmerksam. Zum Beispiel auf meinen Folien',
				'Ich kenne Stellen, an die sich Studierende mit psychischen Problemen wenden können',
				'Ich stelle meine Lernmaterialien vorab und digital zur Verfügung',
				'Ich ermögliche eine asynchrone oder remote Teilnahme an der Veranstaltung',
				'Ich gestatte verlängerte Abgabefristen oder alternative Prüfungsformen',
				'Ich mache ausreichend Pausen in langen Veranstaltungen'
			]}
			{persona}
		/>
	</svelte:fragment>
</PersonaContent>
