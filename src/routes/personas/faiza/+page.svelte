<script lang="ts">
	import PersonaContent from '$lib/components/personaContent/PersonaContent.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import { FAIZA } from '$lib/constants/faiza';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	const persona: Persona = FAIZA;
</script>

<PersonaContent {persona} let:MainHeading let:TextSection>
	<SpeechBubble {persona}>
		Hey, mein Name ist Faiza, ich bin 32 Jahre alt und studiere Informatik an der TU Darmstadt. Ich
		wohne mit meinem Partner Chris und unserem 1 1/2 Jahre alten Sohn Jonas in Griesheim. Auch Chris
		studiert in Darmstadt und wir arbeiten beide als wissenschaftliche Hilfskräfte an der Uni. Das
		ist schon ne Herausforderung, aber BAföG alleine reicht leider nicht. Und wir haben einfach
		großes Glück, dass meine Schwiegereltern uns in der Betreuung von Jonas unterstützen. So finde
		ich mittlerweile neben dem Arbeiten und dem Studium auch noch etwas Zeit für mich. Das haben wir
		uns hart erarbeitet. Ich lese unheimlich gerne und treffe mich wöchentlich mit einer Gruppe zum
		Eishockey spielen.
	</SpeechBubble>

	<MainHeading heading="Allgemeine Informationen" />

	<h3>Studienplanung</h3>
	<TextSection let:Text>
		<Text>
			Ein Studium mit Pflegeverantwortung kann mit einigen Barrieren verbunden sein. Einige davon
			scheinen offensichtlich, wie beispielsweise Herausforderungen in der Zeitplanung. Dennoch gibt
			es auch im digitalen Raum einige Barrieren für Studierende mit Pflegeverantwortung, die
			vielleicht nicht auf den ersten Blick erkennbar sind. Viele Studierende, die familiäre
			Verpflichtungen haben – sie pflegen beispielsweise ein Kind oder eine angehörige Person –
			profitieren von digitalen Studien-Angeboten. Je nach Alter des Kindes und vorhandenen
			Unterstützungsstrukturen müssen Stundenpläne dementsprechend belegt werden. Viele Studien- und
			Prüfungsordnungen sehen hier schon einige Anpassungen vor. Außerdem bieten viele Hochschulen
			die Möglichkeit eines Teilzeitstudiums (mit reduziertem Stundenumfang) an. Zur Unterstützung
			in der Planung und Strukturierung des Studienalltags gibt es an Hochschulen häufig
			verschiedene Beratungs- und Servicestellen. Auch Angebote zur Kinderbetreuung oder Beratung zu
			finanzieller Unterstützung sind dort verortet.
		</Text>
	</TextSection>

	<SpeechBubble {persona}>
		Nachdem Jonas ein halbes Jahr alt war und weil wir die Unterstützung meiner Schwiegereltern
		hatten, habe ich mein Studium als Teilzeitstudium wieder aufgenommen. Mittlerweile studiere ich
		wieder in Vollzeit, da man im Teilzeitstudium keinen Anspruch auf BAföG hat. Das wurde
		finanziell dann einfach nicht mehr stemmbar.
	</SpeechBubble>

	<h3 class="spacing-top">Flexibilität</h3>
	<TextSection let:Text>
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

	<SpeechBubble {persona}>
		Natürlich schaue ich schon bei der Semesterplanung, welche Kurse ich überhaupt belegen kann.
		Kurse mit Anwesenheitspflicht in Präsenz sind für mich eigentlich nicht möglich. Gerade in der
		Winterzeit ist Jonas häufiger erkältet und ich muss mit ihm zuhause bleiben. Wenn Anwesenheit
		dann ein Kriterium zum Bestehen des Kurses ist, kann ich den halt nicht belegen. Digitale Abend-
		oder Blockseminare sind für mich passender. Leider kommt es auch da manchmal vor, dass ich zu
		spät komme und kurzfristig früher weg muss. Das ist natürlich blöd, weil ich dann inhaltlich
		Dinge verpasse und ein paar genervte Blicke fange ich mir da auch immer mal wieder ein.
	</SpeechBubble>

	<MainHeading heading="Lehrveranstaltungen" />
	<TextSection let:Text>
		<Text>
			Studierende mit familiären Verpflichtungen brauchen räumliche und zeitliche Flexibilität.
			Aufgezeichnete Vorlesungen, die asynchron und nach eigenem Tempo angeschaut werden können,
			sind daher häufig sehr hilfreich.
		</Text>
	</TextSection>

	<SpeechBubble {persona}>
		Manchmal komme ich mir vor wie eine Eventplanerin. Eine Familie mit kleinem Kind zu
		organisieren, erfordert schon ein gewisses Organisationstalent. Aber das dann auch noch parallel
		mit zwei studierenden Elternteilen – das ist ne Herausforderung. Selbst gewählt, ja, aber es
		könnte trotzdem manchmal viel einfacher sein, wenn es strukturell nicht so starr wäre.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Eine klar abgesprochene Tagesstruktur einerseits, aber auch unplanbare Unterbrechungen dieser
			Struktur bestimmen den Alltag der Eltern. Wegfallende Anfahrtswege zur Universität und
			individuell einteilbare Lerneinheiten können diese benötigte Flexibilität unterstützen.
		</Text>
	</TextSection>

	<SpeechBubble {persona}>
		Manchmal lässt es sich nicht vermeiden und Chris oder ich müssen Jonas mit an die Uni nehmen, da
		wir keine Betreuung für ihn haben. Alleine die Wege hin und von der Uni sind für mich sehr
		anstrengend. Natürlich brauche ich mit Jonas länger und muss viel Zeit einplanen. Zum Glück gibt
		es auch einen Raum an der Uni, in dem ich Jonas früher in Ruhe gestillt habe und ihn auch
		wickeln und eine Pause machen kann.
	</SpeechBubble>
</PersonaContent>

<style lang="scss">
	h3 {
		width: 100%;
		padding-inline: 3.25rem;
		margin-inline: auto;
		margin-block: 0;

		&.spacing-top {
			margin-top: 2.5rem;
		}

		@media (max-width: 59.3125rem) {
			padding-inline: var(--outer-spacing);
			max-width: 35rem;
			margin-top: 1.25rem;
		}
	}
</style>
