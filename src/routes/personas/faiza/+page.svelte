<script lang="ts">
	import { base } from '$app/paths';
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/accordion/AccordionItem.svelte';
	import PersonaAnswer from '$lib/components/accordion/PersonaAnswer.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import FactCarousel from '$lib/components/factCarousel/FactCarousel.svelte';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import FriendBubble from '$lib/components/friendPersona/FriendBubble.svelte';
	import MainHeading from '$lib/components/personaContent/MainHeading.svelte';
	import PersonaContent from '$lib/components/personaContent/PersonaContent.svelte';
	import Text from '$lib/components/personaContent/Text.svelte';
	import TextSection from '$lib/components/personaContent/TextSection.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import { CHRIS } from '$lib/constants/chris';
	import { FAIZA } from '$lib/constants/faiza';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	const persona: Persona = FAIZA;
	const friendPersona: FriendPersona = CHRIS;
</script>

<PersonaContent {persona}>
	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-01.mp3'}>
		Hey, mein Name ist Faiza, ich bin 32 Jahre alt und studiere Informatik an der TU Darmstadt. Ich
		wohne mit meinem Partner Chris und unserem 1 1/2 Jahre alten Sohn Jonas in Griesheim. Auch Chris
		studiert in Darmstadt und wir arbeiten beide als wissenschaftliche Hilfskräfte an der Uni. Das
		ist schon echt ne Herausforderung, aber BAföG alleine reicht leider nicht. Wir haben großes
		Glück, dass meine Schwiegereltern uns in der Betreuung von Jonas unterstützen. Dass ich
		mittlerweile neben dem Arbeiten und dem Studium auch noch etwas Zeit für mich finde, haben wir
		uns trotzdem hart erarbeitet. Ich lese unheimlich gerne und treffe mich wöchentlich mit einer
		Gruppe zum Eishockey spielen.
	</SpeechBubble>

	<MainHeading heading="Allgemeine Informationen" />

	<div class="h3-wrapper">
		<h3>Studienplanung</h3>
	</div>
	<TextSection>
		<Text>
			Ein Studium mit Pflegeverantwortung kann mit zahlreichen Barrieren verbunden sein. Einige
			davon scheinen offensichtlich, wie beispielsweise Herausforderungen in der Zeitplanung.
			Lösungen dafür finden sich nicht nur im analogen, sondern auch im digitalen Raum. Viele
			Studierende, die familiäre Verpflichtungen haben – sie pflegen ein Kind oder eine angehörige
			Person – profitieren beispielsweise von digitalen Studienangeboten. Je nach Alter des Kindes
			und vorhandenen Unterstützungsstrukturen müssen Stundenpläne entsprechend belegt werden. Viele
			Studien- und Prüfungsordnungen sehen hier schon einige Anpassungen vor. Außerdem bieten viele
			Hochschulen die Möglichkeit eines Teilzeitstudiums (mit reduziertem Stundenumfang) an. Zur
			Unterstützung in der Planung und Strukturierung des Studienalltags gibt es an Hochschulen
			häufig verschiedene Beratungs- und Servicestellen. Auch Angebote zur Kinderbetreuung oder
			Beratung zu finanzieller Unterstützung sind dort verortet.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-02.mp3'}>
		Als Jonas ein halbes Jahr alt war und weil wir die Unterstützung meiner Schwiegereltern hatten,
		habe ich mein Studium als Teilzeitstudium wieder aufgenommen. Mittlerweile studiere ich wieder
		in Vollzeit, da man im Teilzeitstudium keinen Anspruch auf BAföG hat. Das wurde finanziell dann
		einfach nicht mehr stemmbar.
	</SpeechBubble>

	<div class="h3-wrapper">
		<h3 class="spacing-top">Flexibilität</h3>
	</div>
	<TextSection>
		<Text>
			Planbarkeit ist mit familiärer Verantwortung sehr schwierig, da immer wieder unvorhersehbare
			Dinge passieren – das Kind wird plötzlich krank, betreuende Personen fallen aus...offene
			Aufgaben müssen daher immer dann erledigt werden, wenn gerade Zeit ist. Prokrastination kann
			man sich nicht leisten! Das erfordert viel Selbstdisziplin.
		</Text>

		<Text>
			Eine klare Kommunikation mit Partner*in und weiteren betreuenden Personen ist wichtig, um auch
			ungeplante Situationen zu meistern.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-03.mp3'}>
		Natürlich schaue ich schon bei der Semesterplanung, welche Kurse ich überhaupt belegen kann.
		Kurse mit Anwesenheitspflicht in Präsenz sind für mich eigentlich nicht möglich. Gerade in der
		Winterzeit ist Jonas häufiger erkältet und ich muss mit ihm zuhause bleiben. Wenn Anwesenheit
		dann ein Kriterium zum Bestehen des Kurses ist, kann ich den halt nicht belegen. Digitale Abend-
		und Blockseminare sind für mich passender. Leider kommt es auch da manchmal vor, dass ich zu
		spät komme und früher weg muss. Das ist natürlich blöd, weil ich dann inhaltlich Dinge verpasse
		und ein paar genervte Blicke fange ich mir da auch immer mal wieder ein.
	</SpeechBubble>

	<FactCarousel facts={persona.facts} />

	<MainHeading heading="Lehrveranstaltungen" />
	<TextSection>
		<Text noTopMargin>
			Studierende mit Pflegeverantwortung brauchen räumliche und zeitliche Flexibilität.
			Aufgezeichnete Vorlesungen, die asynchron und nach eigenem Tempo angeschaut werden können,
			sind daher häufig sehr hilfreich.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-04.mp3'}>
		Manchmal komme ich mir vor wie eine Eventplanerin. Eine Familie mit kleinem Kind zu
		organisieren, erfordert schon ein gewisses Organisationstalent. Aber das dann auch noch parallel
		mit zwei studierenden Elternteilen – das ist ne Herausforderung. Selbst gewählt, ja, aber es
		könnte trotzdem manchmal viel einfacher sein, wenn es strukturell nicht immer so starr wäre.
	</SpeechBubble>

	<TextSection>
		<Text>
			Eine klar abgesprochene Tagesstruktur einerseits, aber auch unplanbare Unterbrechungen dieser
			Struktur bestimmen den Alltag der Eltern. Wegfallende Anfahrtswege zur Universität und
			individuell einteilbare Lerneinheiten können diese benötigte Flexibilität unterstützen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-05.mp3'}>
		Manchmal lässt es sich nicht vermeiden und Chris oder ich müssen Jonas mit an die Uni nehmen, da
		wir keine Betreuung für ihn haben. Alleine die Wege hin und von der Uni sind für mich sehr
		anstrengend. Natürlich brauche ich mit Jonas länger und muss viel Zeit einplanen. Zum Glück gibt
		es auch einen Raum an der Uni, in dem ich Jonas früher in Ruhe gestillt habe und ihn auch
		wickeln und eine Pause machen kann.
	</SpeechBubble>

	<FriendBubble {friendPersona}>
		Ja, das hat bisher zum Glück immer ganz gut geklappt. Wir fragen dann jeweils bei den
		Dozierenden an, ob es okay ist, dass Jonas mit in der Vorlesung sitzt. Mit einem Sitzplatz nahe
		der Tür, um auch mal schnell mit ihm rauszugehen, klappt das ganz gut. Trotzdem ist man halt
		auch immer abgelenkt und kann nur mit einem Ohr zuhören.
	</FriendBubble>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-06.mp3'}>
		Und das geht mit einem Kind ab und an mal. Aber mit Pflegeverantwortung für ein älteres
		Familienmitglied zum Beispiel wird es schwierig. Ein Freundin von mir pflegt ihre kranke Oma. Es
		ist sozial akzeptiert, dass man mal Kinder mit zur Arbeit oder an die Uni bringt – aber nicht
		die Oma.
	</SpeechBubble>

	<TextSection>
		<Text>
			Werden die Vorlesungsunterlagen im Voraus digital zur Verfügung gestellt, können
			beispielsweise die Schlafzeiten des Kindes genutzt werden, um sich vorzubereiten.
		</Text>

		<Text>
			Außerdem sind klare Absprachen und Transparenz zur Struktur und den Anforderungen einer
			Veranstaltung zu Beginn eines Semesters sehr wichtig. Hier können auch alternative Prüfformate
			und Regelungen zur Anwesenheit kommuniziert werden.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-07.mp3'}>
		Ehrlich gesagt, ist das immer das Erste, was ich mir in der Veranstaltungs&shy;beschreibung
		anschaue: Gibt es eine Anwesenheitspflicht? Wie oft darf ich maximal fehlen? Gibt es die
		Möglichkeit, online teilzunehmen oder asynchron zu Arbeiten? Ich muss einfach wissen, welche
		Anforderungen an mich gestellt sind und ob ich diesen zeitlich gerecht werden kann. Und wenn ich
		als Prüfungsleistung eine Hausarbeit schreiben kann, dann ist das für mich besser machbar, als
		eine Präsenzprüfung. Ich würde mich wirklich freuen, wenn diese strukturellen und inhaltlichen
		Anforderungen immer selbstverständlich und klar zu Beginn kommuniziert werden und ich nicht erst
		bei Dozierenden nachfragen muss.
	</SpeechBubble>

	<MainHeading heading="Lernmaterial" />

	<TextSection>
		<Text noTopMargin>
			Digitale Barrieren für Studierende mit Pflegeverantwortung sind für Außenstehende
			möglicherweise nicht immer direkt ersichtlich. Die verwendete Hard- und Software für ein
			Studium kann aber beispielsweise folgende Herausforderungen mit sich bringen: Eine Software
			ist nur auf Universitäts-Rechnern und damit vor Ort verfügbar, oder die Anschaffung von
			Geräten für die Onlinelehre bringt zusätzliche Kosten mit sich.
		</Text>
		<Text>
			Ist Lernmaterial in verschiedenen Formen und Modalitäten vorhanden, kann es zu
			unterschiedlichen Situationen in den Alltag eingebaut werden: Untertitel beispielsweise
			ermöglichen das Anschauen eines Lernvideos ohne Ton in einem Wartezimmer und gleichzeitig
			können aus diesen ein Transkript zum Nachbereiten erstellt werden. Und Audioaufnahmen oder
			Podcasts können auch während des Stillens gehört werden.
		</Text>
		<Text>
			Da das asynchrone Lernen besser in den Alltag integriert werden kann, sind didaktisch gut
			aufbereitete Anleitungen für Selbstlernphasen sehr hilfreich und wichtig. Wenn aufgezeichnete
			Vorlesungen oder Lernvideos in didaktisch sinnvolle Kapitel unterteilt und diese
			dementsprechend auch benannt werden, können Studierende diese „häppchenweisen“ anschauen,
			lernen und effektiv auch wiederholen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-08.mp3'}>
		Ich bin immer sehr froh, wenn ich Videos oder Podcasts zu einem Thema finde oder es sogar von
		Lehrenden zur Verfügung gestellt wird, da ich mir dann die Inhalte flexibel anhören oder
		anschauen kann. Und wenn es dann kein 90 minütiges Video ist, sondern Kurzvideos zu
		Lerneinheiten, ist das für mich optimal.
	</SpeechBubble>

	<MainHeading heading="Interaktion und Kommunikation" />

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-09.mp3'}>
		Wir sind darauf angewiesen, dass Lehrende ihre Vorlesungen entweder asynchron zur Verfügung
		stellen, oder dass wir auf Verständnis bei ihnen stoßen, wenn wir spontan an Veranstaltungen
		nicht teilnehmen können. Das ist leider nicht immer der Fall, da häufig noch das Idealbild von
		Vollzeitstudierenden ohne Einschränkungen vorherrscht.
	</SpeechBubble>

	<FriendBubble {friendPersona}>
		Ja genau. Dass Studieren und Familien parallel existiert, ist nichts Neues mehr. Trotzdem fehlt
		manchmal noch die soziale Akzeptanz. Schön wäre, wenn ich mich irgendwann nicht mehr
		rechtfertigen muss, dass ich Student UND Papa bin und das auch so gewählt habe.
	</FriendBubble>

	<FlipCard
		{persona}
		front="Nein, mein Kind war kein „Unfall“!"
		back="Bewusste Entscheidung! Geht aber auch niemanden etwas an."
	/>

	<TextSection>
		<Text extraTopMargin>
			Häufig füllen die Erziehung und Betreuung eines Kindes, das Studium und eventuelle Nebenjobs
			den Alltag komplett aus. Wird dann noch asynchron studiert, sind soziale Kontakte zu
			Mitstudierenden oft erschwert. Und auch die unterschiedlichen Tagesrhythmen machen gemeinsame
			Gruppenarbeiten und Projekte mit Mitstudierenden manchmal zu einer Herausforderung.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-10.mp3'}>
		An der Uni gibt es ein Vernetzungstreffen für Studierende mit Pflegeverantwortung. Da werden
		neue Regelungen kommuniziert und man hat die Möglichkeit, sich auszutauschen. Das hat mir sehr
		geholfen und tut es auch immer noch. Und es gibt tatsächlich auch einen Moodle-Kurs „Studieren
		mit Kind“ mit wichtigen Informationen. Das war auch das Erste, was ich gemacht habe, als ich
		schwanger war. Ich hab‘ nach allen Informationen und Möglichkeiten der Uni gesucht. Das würde
		ich auch allen Studierenden mit Pflegeverantwortung empfehlen. Jede Hochschule hat eine
		Anlaufstelle - ob das jetzt das Familienbüro, ein Gleichstellungsbüro oder die
		Studienkoordinations&shy;stelle ist.
	</SpeechBubble>

	<Accordion personaName={persona.name} question="Frage">
		<AccordionItem>
			{#snippet question()}
				Was wünschst Du Dir von Lehrpersonen?
			{/snippet}
			{#snippet content()}
				<PersonaAnswer {persona}>
					Hört sich ganz leicht und selbstverständlich an. Aber generell erst einmal: Ein offenes
					Ohr und eine offene Haltung gegenüber Studierenden, die Pflegeverantwortung haben oder
					auch aus anderen Gründen kein Vollzeitstudium in Präsenz durchziehen können. Wertschätzung
					ist das passende Wort, glaube ich. Und vielleicht auch manchmal mehr Menschlichkeit. Es
					gibt doch auch genügend Dozierende mit Familien und Pflegeverantwortung. Vielleicht
					müssten wir alle mehr darüber sprechen und offen auch Grenzen aufzeigen.
				</PersonaAnswer>
			{/snippet}
		</AccordionItem>

		<AccordionItem>
			{#snippet question()}
				Wie erlebst Du den Spagat zwischen Studium und Kind?
			{/snippet}
			{#snippet content()}
				<PersonaAnswer {persona}>
					Ich spüre oft Druck, in beiden Rollen – sowohl als Studentin als auch als Mutter –
					irgendwelchen Erwartungen gerecht werden zu müssen. Im Alltag schaffe ich aber manchmal
					nicht beides und das Priorisieren fällt mir schwer. Wenn ich lerne, fühle ich mich
					schlecht, weil ich nicht genug für meinen Sohn da bin, und wenn ich Zeit mit Jonas
					verbringe, habe ich das Gefühl, mein Studium zu vernachlässigen. Dann passiert es auch
					schnell, dass ich meine eigenen Bedürfnisse komplett hinten anstelle, um den Anforderungen
					meines Kindes oder meines Studiums gerecht zu werden.
				</PersonaAnswer>
			{/snippet}
		</AccordionItem>
	</Accordion>

	<MainHeading heading="Prüfungen" />

	<TextSection>
		<Text noTopMargin>
			Nicht selten finden mehrere Prüfungen in Präsenz in einer Prüfungswoche gegen Ende des
			Semesters statt und erfordern eine mehrmalige, mehrstündige Anwesenheit an der Uni. Das ist
			organisatorisch für viele Studierende mit familiären Verpflichtungen nicht möglich.
			Alternative Prüfungsformate und individuelle Absprachen können hier sehr hilfreich sein.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/faiza/audio/faiza-sb-11.mp3'}>
		Letztes Semester hatten wir beide zur gleichen Zeit unsere Prüfungswoche mit jeweils 3 Prüfungen
		in Präsenz. Da sind wir beide, Jonas und meine Schwiegereltern auf dem Zahnfleisch gegangen.
	</SpeechBubble>

	<TextSection>
		<Text>
			Auch pflegende Studierende können einen Antrag auf Nachteilsausgleich stellen, um
			beispielsweise Fristen für Abgaben zu verlängern oder kurzfristig von Prüfungen zurücktreten,
			diese verschieben zu können oder alternative Prüfungsformate in Anspruch zu nehmen.
		</Text>
	</TextSection>

	<MainHeading heading="Selbstcheck Barrierefreiheit" />

	<TextSection>
		<Text noTopMargin>
			Hier finden Sie eine Checkliste, um zu überprüfen, wie barrierefrei Ihre Lehre bereits ist.
		</Text>
	</TextSection>

	<Checklist
		checks={[
			'Ich informiere mich über digitale Barrierefreiheit',
			'Ich gebe in der Veranstaltungsbeschreibung die Prüfungsform, die Struktur sowie Informationen zur Anwesenheitspflicht an',
			'Ich teile Informationen über Beratungsangebote und Anlaufstellen, an die sich Studierende mit Pflegeverantwortung wenden können',
			'Ich ermögliche eine asynchrone oder remote Teilnahme an der Veranstaltung',
			'Ich gehe auf individuelle Bedarfe von Studierenden ein und stelle alternative Prüfformate zur Verfügung'
		]}
		{persona}
	/>

	<MainHeading heading="Weitere Informationen" />
	<ul class="more-info-list">
		<li>
			<Recommendation link="https://www.youtube.com/watch?v=J4fWA6vWmz0">
				{#snippet linkText()}
					Studieren mit Kind: Ist das Studium der beste Zeitpunkt für ein Kind?
				{/snippet}
				{#snippet textAfter()}
					von PULS Reportage auf YouTube
				{/snippet}
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://www.che.de/download/pflegende-studierende/">
				{#snippet linkText()}
					Fragen & Antworten zu Studium und Pflege
				{/snippet}
				{#snippet textAfter()}
					vom Centrum für Hochschulentwicklung
				{/snippet}
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://studieren.de/studieren-mit-kind.0.html">
				{#snippet linkText()}
					Studieren mit Kind
				{/snippet}
				{#snippet textAfter()}
					von studieren.de
				{/snippet}
			</Recommendation>
		</li>
	</ul>
</PersonaContent>

<style lang="scss">
	.more-info-list {
		list-style-type: none;
		padding: 0;
	}

	.h3-wrapper {
		h3 {
			margin-block: 0;
			padding-inline: var(--outer-spacing);
			max-width: 35rem;
			margin-inline: auto;

			&.spacing-top {
				margin-top: 2.5rem;
			}
		}
	}
	@media (min-width: 59.375rem) {
		.h3-wrapper {
			h3 {
				padding: 0;
				margin-inline: 3.25rem;
			}
		}
	}
</style>
