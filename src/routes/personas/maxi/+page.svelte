<script lang="ts">
	import { base } from '$app/paths';
	import BackgroundInfo from '$lib/components/BackgroundInfo.svelte';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import Puzzle from '$lib/components/Puzzle.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import UserTest from '$lib/components/UserTest.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import FriendBubble from '$lib/components/friendPersona/FriendBubble.svelte';
	import PersonaContent from '$lib/components/personaContent/PersonaContent.svelte';
	import PlayerExtended from '$lib/components/player/PlayerExtended.svelte';
	import { ALEX_FRIEND } from '$lib/constants/alex';
	import { PSYCHE_TRANSKRIPT } from '$lib/constants/transcripts';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import SpeechBubble from '../../../lib/components/SpeechBubble.svelte';
	import ToolCard from '../../../lib/components/ToolCard.svelte';
	import { MAXI } from '../../../lib/constants/maxi';
	import type { Persona } from '../../../lib/interfaces/persona.interfaces';

	const persona: Persona = MAXI;
	const friendPersona: FriendPersona = ALEX_FRIEND;

	const extendedPlayerConfig: ExtendedPlayerConfig = {
		title: 'Erfahrungsbericht einer Studentin mit psychischer Erkrankung',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/psyche.mp4',
				poster: '/media/psyche-preview-image.jpg',
				captionsArray: [
					{
						path: '/media/psyche-untertitel.vtt',
						lang: 'de',
						label: 'Deutsche Untertitel'
					}
				]
			},
			{
				title: 'Video mit Audiodeskription',
				videoPathMp4: '/media/psyche-ad.mp4',
				poster: '/media/psyche-preview-image.jpg',
				captionsArray: []
			}
		],
		transcripts: [
			{
				title: 'Transkript',
				body: PSYCHE_TRANSKRIPT
			}
		]
	};
</script>

<PersonaContent {persona} let:MainHeading let:TextSection>
	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-01.mp3'}>
		Hallo, mein Name ist Maxi und ich bin 29 Jahre alt. Ich studiere Architektur in Mannheim – und
		bin endlich auch im Master angekommen. Das war ein steiniger Weg. Ich wohne im Wohnheim in einer
		4er WG, im Zimmer direkt neben Alex. Mit dem studier‘ ich auch.... In guten wie in schlechten
		Zeiten. Zusammen kriegen wir das irgendwie hin. Ich hab zwei Hobbies - das ist für mich ziemlich
		gut, weil lange Zeit nicht mal das mehr ging. Ich geh gerne Skaten. Nicht mit so schwierigen
		Tricks, aber ein paar Sachen krieg ich schon noch hin. Und ich fotografiere auch gerne – am
		liebsten Nester, Höhlen und Unterschlüpfe von Tieren. Diese Bauten inspirieren mich fürs Studium
		und hoffentlich auch mal für meinen Beruf. Ein großes Plus: Wenn ich fotografiere, bin ich
		draußen in der Natur unterwegs. Und das tut mir sehr gut.
	</SpeechBubble>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-02.mp3'}>
		Mein Studium ist nicht gerade sehr gradlinig verlaufen. Ich habe Depressionen und
		Angststörungen. Deshalb habe ich so lange gebraucht. Viele Zweitversuche, viele Semester mit nur
		zwei Kursen, die Frist für meine Bachelorarbeit musste ich auch verlängern. Zwischendrin war es
		so schlimm, dass ich ein Krankheitssemester nehmen musste. In der Zeit war ich auch in einer
		Tagesklinik. Das war ein richtiger Tiefpunkt für mich. Aber da habe ich immerhin auch Hilfe
		bekommen. Und aktuell geht es mir jetzt besser. Am Anfang des Semesters bin ich sogar zur
		Beauftragen für Menschen mit Beeinträchtigung gegangen. Jetzt habe ich einen Nachteilsausgleich
		für Prüfungen. Und auch einen individuellen Studienverlaufsplan. Das nimmt mir viel Druck weg.
	</SpeechBubble>

	<MainHeading heading="Technologien und Strategien" />
	<div style="overflow: hidden;">
		<ToolCard title="Regelmäßige Pausen" image="{base}/tools/regular-breaks.svg">
			Psychische Erkrankungen sind Beeinträchtigungen, die oft als solche nicht wahrgenommen werden,
			da Symptome für Außenstehende häufig nicht sichtbar sind. Die unterschiedlichen Symptome
			psychischer Erkrankungen – wie Konzentrations- und Schlafstörungen, oder auch soziale Ängste -
			können sich erheblich auf den (Studien-)Alltag von Studierenden auswirken. Depressionen
			beispielsweise können das Erinnerungsvermögen beeinträchtigen und somit die Lernleistung
			beeinflussen. Eine Strategie, um Erschöpfung und Belastungsgefühlen entgegenzuwirken, ist,
			regelmäßig Pausen einzubauen.
		</ToolCard>

		<ToolCard title="Tagesplan" image="{base}/tools/day-plan.svg">
			Ein anderes Symptom von psychischen Erkrankungen, unter anderem auch bei Depressionen, kann
			eine Art „Lähmung“ sein. Die Person liegt beispielsweise im Bett und fühlt sich nicht in der
			Lage, aufzustehen und Zähne zu putzen oder andere alltägliche Aufgaben zu erledigen. Ein
			fester Tagesplan kann hier manchmal helfen.
		</ToolCard>

		<ToolCard title="Remote-Studium" image="{base}/tools/remote-study.svg">
			Zudem kann es hilfreich sein, von zu Hause arbeiten oder studieren zu können. Die
			Einstiegshürde kann hier als geringer empfunden werden. Unter Umständen bringt das digitale
			Studieren aber auch eine unfreiwillige Isolation mit sich.
		</ToolCard>

		<ToolCard title="Probleme erkennen" image="{base}/tools/identify-problem.svg">
			Eine mögliche Strategie kann sein, sich die Krankheit einzugestehen und sich therapeutisch
			beraten zu lassen. Strategien können bei Therapeut*innen erlernt werden, sie sind sehr
			persönlich und schwer zu generalisieren. Termine bei Therapeut*innen sind schwer zu bekommen
			und nicht selten mit viel Wartezeit verbunden. So kann der Zugang zu einer offiziellen
			Diagnose und Medikamenten zusätzlich erschwert sein.
		</ToolCard>
	</div>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-03.mp3'}>
		Ich habe herausgefunden, dass es mir hilft, dass ich für Vorlesungen zwar an die Hochschule
		gehe, aber Projektarbeiten mache ich dann doch lieber von zu Hause aus. Wenn andere dabei
		sind... Dann habe ich ganz oft komische Gedanken: Die können alles besser, die sind viel
		schneller, die sind viel schlauer. Oder ich habe das Gefühl, ich sag oder mach die ganze Zeit
		was Dummes. Zu Hause ist niemand da, der mir über die Schulter guckt. Das beruhigt mein
		Gedankenkarussell. Andererseits bin ich deswegen auch viel alleine und hab wenig Austausch. Und
		ich hab nicht so guten Kontakt zu den Leuten in meinem Studiengang.
	</SpeechBubble>

	<FriendBubble {friendPersona}>
		Hi, ich bin Alex, Maxis Mitbewohner und Freund und Studienkollege. Also wir machen alles
		zusammen. Ich habe eine Angststörung. Es gibt Phasen, da geht es mir ähnlich wie Maxi. Ich bin
		echt froh, dass Maxi und ich uns gefunden haben und so gut verstehen.
	</FriendBubble>

	<FriendBubble {friendPersona} hidePersonaCard>
		Meine Therapeutin hat mir spezielle Übungen beigebracht. Und ich hab' die immer wieder geübt,
		damit ich sie anwenden kann, wenn meine Gedanken außer Kontrolle geraten. Eine Übung ist zum
		Beispiel, alle Dinge aufzuzählen, die ich in dem Moment höre oder sehe. Das lenkt mich dann ab
		und idealerweise kann ich mich so selbst beruhigen.
	</FriendBubble>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-04.mp3'}>
		Ja, solche Übungen kenn' ich auch. Ok, mittlerweile kennen die alle. Achtsamkeit ist ja
		Mainstream. Die Übungen helfen mir aber nicht. Wenn ich in einer depressiven Phase bin, schaffe
		ich das nicht... Oder die Übungen haben dann gar keinen Effekt. Es wäre ja auch ein bisschen
		einfach, wenn ich nur Sachen aufzählen müsste und – Puff! - meine Angst wäre einfach weg.</SpeechBubble
	>

	<FriendBubble {friendPersona}>
		Die Übungen sind ja auch nur ein Teil meiner Strategien. Ich nehme mittlerweile auch
		Medikamente, die mir helfen. Die haben leider Nebenwirkungen, aber es geht mir damit echt
		besser. Und zur Therapie gehe ich auch. Auf den Platz musste ich ganz schön lange warten.
	</FriendBubble>

	<FlipCard
		{persona}
		front="Ich bin nicht faul und unzu&shy;verlässig!"
		back="Ich habe depressive Episoden. Alles - selbst Aufstehen - kostet mich dann viel Kraft, die an anderer Stelle somit fehlt."
	/>

	<MainHeading heading="Lehrveranstaltungen" />

	<TextSection let:Text>
		<Text noTopMargin>
			Einer Vorlesung über 90 Minuten aufmerksam zuzuhören, ist anstrengend.
			Konzentrationsschwierigkeiten, belastende Gedanken und Selbstzweifel machen es Menschen, die
			Depressionen haben, umso schwerer dem Gesagten zu folgen. Werden Vorlesungsfolien und
			Arbeitsmaterial frühzeitig online hochgeladen, hilft das bei einem klaren Zeitmanagement und
			kann den Druck nehmen, sich parallel ausführliche Notizen machen zu müssen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-05.mp3'}>
		Manchmal schaffe ich es einfach nicht, einer Vorlesung zu folgen. Es ist egal ob online oder in
		Präsenz. Ich kann mich dann einfach schlecht konzentrieren – Ich bemühe mich, aber das
		Gedankenkarussell kommt direkt dazwischen: Oh, jetzt hab ich die vorherige Folie verpasst, jetzt
		kenn' ich das Wort hier nicht, was hat die Dozentin gerade gesagt? Die Gedanken sind so lähmend.
		Ich schaffe es dann nicht, sie beiseite zu schieben und zuzuhören. Nichts, was die Dozentin
		sagt, bleibt dann hängen. Und in mir wächst die Panik. Dann schau ich mich um und ich sehe die
		anderen – die folgen mühelos der Vorlesung, machen Notizen und malen Skizzen. Und in mir kommt
		in Großbuchstaben die Frage, warum ich das nicht kann. Warum kann ich nicht mal in einer
		Vorlesung sitzen und einfach zuhören? Wenn es ganz schlimm wird .... Also, ich musste schon mal
		aus einer Vorlesung rausgehen. Sowas ist dann nur noch eine Bestätigung für mein schlechtes
		Selbstbild und füttert meine Angst, das Studium nicht zu schaffen. Wenn es mir richtig schlecht
		geht, schaffe ich nicht mal mehr den Weg zur Hochschule. Dann geht nur Decke anstarren und
		weinen. Warten, dass es vorbei geht.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Stehen Vorlesungen als Videos zum asynchronen Lernen zur Verfügung, können Pausen und
			Geschwindigkeit des Lernens individuell gewählt werden.
		</Text>

		<Text>
			Klare Strukturen, sowohl auf Vorlesungsfolien, als auch im generellen Vorgehen während des
			Semesters – wie beispielsweise verbindliche Zeiten, zu denen Inhalte auf Plattformen
			hochgeladen werden (Infos zu Prüfungen, zu Teilnahme, ...) - geben Sicherheit und
			Vorhersehbarkeit. Das Setzen von „Trigger-Warnungen“ in Vorlesungsinhalten wird viel
			diskutiert. Generell gilt: Das Warnen vor Inhalten, die in dem Kontext eher nicht erwartet
			werden und starke Emotionen auslösen können, kann vielen Studierenden helfen und Sicherheit
			geben.
		</Text>

		<Text>
			Die „Kamera-Problematik“: Das gezwungene Einschalten der Kamera in Online-Veranstaltungen kann
			für Menschen mit psychischen Erkrankungen eine große Hürde darstellen. Auf der anderen Seite
			können komplett ausgeschaltete Kameras und das Sitzen vor „schwarzen Kacheln“ sehr isolierend
			wirken. Die Anonymität kann sowohl positiv als auch negativ empfunden werden.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-06.mp3'}>
		Letzte Woche erst hatte ich wieder so eine Situation. Ich hab meine Kamera dann einfach
		eingeschaltet. Gleichzeitig hab ich mir dann aber gedacht - Oh, jetzt können ja die anderen
		einfach das Bild von mir groß stellen. Oder Screenshots machen. Da hab ich mich direkt unwohl
		gefühlt. Mein Kopf hat dann entschieden, dass die das bestimmt machen. Obwohl ich ja auch
		irgendwie weiß, dass das nicht der Fall ist. Ich hab direkt Stress gekriegt.
	</SpeechBubble>

	<FriendBubble {friendPersona}>
		Und ich merke, wenn die Kamera bei Zoom zum Beispiel aus ist, dann mache ich halt alles andere
		nebenbei. Ich putz mein Zimmer. Ich gieß meine Blumen. Ich mach ein Puzzle. Merkt ja keiner.
		Allerdings merke ich dann auch, dass meine Konzentration komplett flöten ist und ich nichts
		mitgekriegt habe.
	</FriendBubble>

	<TextSection let:Text>
		<Text>
			Es gibt also keine Musterlösung und eine Absprache mit Studierenden zu Beginn eines Semesters
			oder einer Veranstaltung kann Unsicherheiten nehmen. Ein sensibler Umgang mit Daten und eine
			vertrauensvolle Atmosphäre und individuelle Lösungen sind daher Voraussetzung für ein
			barrierefreies Lernen.
		</Text>
	</TextSection>

	<MainHeading heading="Lernmaterial" />

	<TextSection let:Text>
		<Text noTopMargin>
			Klare Informationen zu Anforderungen und auch Prüfungsleistungen bei einer Teilnahme an einer
			Veranstaltung sind wichtig, um Unsicherheiten abzubauen. Sind beispielsweise Exkursionen
			geplant, wird eine besondere Form der Prüfungsleistung erwartet, werden Materialien immer zu
			einer bestimmten Zeit hochgeladen, hat diese Veranstaltung eine besondere Struktur, oder wird
			es unterschiedliche Lehrpersonen geben, sollte dies zu Beginn des Semesters kommuniziert
			werden.
		</Text>

		<Text>
			Zusätzlich dazu sollten Kontaktmöglichkeiten und -zeiten zu den Lehrenden geklärt und
			zugänglich sein. Werden Materialien online und frühzeitig an einer zuvor kommunizierten Stelle
			hochgeladen, haben Studierende mit psychischen Erkrankungen die Möglichkeit, Lernphasen
			leichter zu planen und „gute“ Phasen auszunutzen.
		</Text>
	</TextSection>

	<Puzzle
		topLeft="Ich verstehe die Vorlesung einfach nicht! Warum hat sonst niemand Fragen? Warum bin nur ich so unglaublich dumm?! Ich werde durchfallen und alle werden mich auslachen! Ich hasse mich!"
		topRight="Was, eine Lerngruppe nach der Vorlesung? Oh, nein, tut mir leid, da habe ich keine Zeit."
		bottomLeft="Ich fühle, wie Panik in mir hochsteigt. Mein Puls beschleunigt sich und mein Brustkorb fühlt sich eng an. In meinen Ohren rauscht es, sodass ich den Dozenten nicht mehr verstehe."
		bottomRight="Ich sitze still an meinem Platz im Vorlesungssaal. Ich würde gerne den Raum verlassen, aber dafür müsste ich mich an drei Studierenden vorbeidrängen."
	/>

	<MainHeading heading="Interaktion und Kommunikation" />

	<TextSection let:Text>
		<Text noTopMargin>
			Lehrende sind in der Regel keine Therapeut*innen und sollten diese Rolle auch nicht
			übernehmen. Umso wichtiger ist es, dass klar kommuniziert wird, an wen sich Studierende mit
			psychischen Belastungen wenden können. So ist eine Auflistung von Kontaktpersonen – wie eine
			psycho-soziale Beratungsstelle und die Beauftragten für Studierende mit Beeinträchtigungen der
			Hochschule - beispielsweise auf der ersten Vorlesungsfolie oder an einem für alle zugänglichen
			Ort eine sinnvolle Unterstützung. Der Hinweis auf Beratungsstellen zeigt, dass Lehrende sich
			bewusst sind, dass es auch „unsichtbare“ Beeinträchtigungen gibt und diese genauso
			Unterstützung erfahren, wie „sichtbare“ Beeinträchtigungen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-07.mp3'}>
		Wenn ich mich... oder wenn ich meine Krankheit erklären will, dann mache ich mich ja quasi
		nackt. Das will keiner hören. Niemand will hören, dass ich in eine Klinik musste. Oder dass ich
		in einer depressiven Phase mehrere Tage nicht mal duschen oder das Haus verlassen konnte. Wie
		mies ich von mir selber denke und wie sehr mich das behindert. Und dass das Ganze auch irgendwie
		unerklärlich ist. Das ist so unangenehm. Niemand hört gerne: „Es geht mir NICHT gut“.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Online-Veranstaltungen bringen Vorteile wie zeitliche und örtliche Flexibilität mit sich. Ein
			daraus entstehender Nachteil kann aber auch die soziale Isolation sein. Der direkte Austausch
			mit Mitstudierenden ist häufig erschwert oder wird schlichtweg vergessen. Auch wenn der
			direkte Vergleich mit Mitstudierenden eventuell wegfällt, ist die positive Wirkung eines
			persönlichen Austauschs nicht zu vernachlässigen. Regelmäßige Austauschangebote vor oder nach
			Online-Veranstaltungen (auch ohne Anwesenheit der Lehrperson) können hilfreich sein.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-08.mp3'}>
		Ich finde es wichtig, dass bei Gruppenarbeiten von den Lehrenden geschaut wird, dass alle einen
		Platz finden. Mich kostet es sehr viel Überwindung, mich bei jemanden zu melden oder in eine
		feste Gruppe zu gehen, die immer zusammen arbeiten. Mir würde es helfen, einfach zugeteilt zu
		werden.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			In der Kommunikation zwischen Studierenden und Lehrenden gibt es häufig nur die Möglichkeit
			der Kontaktaufnahme per persönlicher Sprechstunde. Ein persönliches Gespräch oder ein
			Telefonat stellt Menschen mit sozialen Ängsten manchmal vor große Hürden. Eine breite
			Aufstellung in der Kontaktaufnahme (Mail, anonymes Kontaktformular, Feedback-Möglichkeiten,
			etc.) ermöglicht dennoch einen Austausch.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-09.mp3'}>
		Wenn es mir schlecht geht, ist es einfach eine zu große Aufgabe, noch Kontakt mit Lehrenden
		aufzunehmen. Dann geht es halt wieder los: Die denken, du bist dumm. Das muss man doch schaffen.
		Die anderen fragen das auch nicht. Man muss auch Leistung bringen, um zu studieren. Deshalb hab
		ich mich oft gar nicht gemeldet. Rückblickend muss ich sagen, dass mir das geschadet hat. Viele
		Lehrende haben echt viel Verständnis – und haben mir geholfen, Lösungen zu finden. Jetzt bemühe
		ich mich, mich früher zu melden. Manchmal hilft es mir, mir dabei helfen zu lassen. Also
		wirklich mit jemanden zusammen eine Email zu schreiben oder mich zur Sprechstunde bringen zu
		lassen.
	</SpeechBubble>

	<PlayerExtended {extendedPlayerConfig} />

	<MainHeading heading="Prüfungen" />

	<TextSection let:Text>
		<Text noTopMargin>
			Da der Name “Behindertenbeauftragte” an vielen Hochschulen noch genutzt wird, wenden sich
			Studierende, die keine offiziell diagnostizierte Behinderung haben, aber in ihrem Studium
			dennoch Barrieren erfahren, nicht an diese Personen. Um einen Nachteilsausgleich beantragen zu
			können, müssen die Ansprechpersonen also klar benannt sein.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/maxi/audio/sb-10.mp3'}>
		Ich habe genau sechs Semester gebraucht, bis ich mich getraut habe, mich an die Beauftragte für
		Studierende mit Behinderung zu wenden. Am Anfang dachte ich, dass die wegen des Namens.... also
		Behinderung... gar nicht für mich zuständig ist. Ich habe ja eine psychische Krankheit. Das ist
		ja keine Behinderung. Mittlerweile denke ich da aber anders. Denn die Krankheit beeinträchtigt
		mich stark. Und deshalb kann und darf ich auch die Hilfen der Hochschule in Anspruch nehmen. Das
		muss ich mir immer wieder selbst sagen. Außerdem war es viel bürokratischer Aufwand, bis das mit
		dem individuellen Studienverlauf geregelt war. Ich musste Atteste besorgen, zum Prüfungsamt,
		Formulare ausfüllen. Das ist anstrengend – gerade wenn man selbst ständig hinterfragt, ob man
		das überhaupt machen darf. Was mir wirklich geholfen hätte? Vielleicht, wenn ich Informationen
		früher gehabt hätte. Wenn ich gewusst hätte, dass ich mich an die Beauftragte wenden kann. Wo
		ich die finde und so.
	</SpeechBubble>

	<FriendBubble {friendPersona}>
		Und ich war über die Infos von Maxi dann sehr dankbar. Je nachdem, wie es mir gerade geht, habe
		ich nämlich mit Prüfungen echt Probleme und bekomme Panikattacken. Aber ich habe mit dem
		Nachteilsausgleich eine Zeitverlängerung bekommen, was mir sehr hilft. Sonst wäre ich schon
		ziemlich oft durchgefallen, obwohl ich ultra viel gelernt habe. Ich benötige die Zeit, um mich
		immer wieder zu beruhigen, um dann weiterschreiben zu können. Außerdem ist das Präsentieren vor
		einer Gruppe von Personen für mich eine riesige Herausforderung. Ich kann mich nicht auf den
		Inhalt konzentrieren und bin komplett gelähmt. Hier hilft mir sehr, wenn ich ein alternatives
		Prüfungsformat nutzen kann.
	</FriendBubble>

	<MainHeading heading="Selbstcheck Barrierefreiheit" />

	<TextSection let:Text>
		<Text noTopMargin>
			Hier finden Sie eine Checkliste, um zu überprüfen, wie barrierefrei Ihre Lehre bereits ist.
		</Text>
	</TextSection>

	<Checklist
		checks={[
			'Ich informiere mich über digitale Barrierefreiheit',
			'Ich mache Studierende auf Unterstützungsangebote aufmerksam, z.B. auf Veranstaltungsfolien oder in Informationen',
			'Ich teile Informationen über Beratungsangebote und Anlaufstellen, an die sich Studierende mit psychischen Problemen wenden können',
			'Ich stelle meine Lernmaterialien vorab und digital zur Verfügung',
			'Ich ermögliche eine asynchrone oder remote Teilnahme an der Veranstaltung',
			'Wenn Studierende einen Nachteilsausgleich haben, sorge ich für eine angemessene Umsetzung',
			'Ich mache ausreichend Pausen in langen Veranstaltungen'
		]}
		{persona}
	/>

	<BackgroundInfo content="support" />

	<MainHeading heading="Weitere Informationen" />
	<ul class="more-info-list">
		<li>
			<Recommendation
				link="https://www.deutsche-depressionshilfe.de/depression-infos-und-hilfe/was-ist-eine-depression/diagnose-der-depression"
			>
				<svelte:fragment slot="linkText">Diagnose der Depression</svelte:fragment>
				<svelte:fragment slot="textAfter"
					>von der Stiftung Deutsche Depressionshilfe und Suizidprävention</svelte:fragment
				>
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://www.rki.de/DE/Content/GesundAZ/P/Psychische_Gesundheit/EBH_Bericht_Psyschiche_Gesundheit.pdf?__blob=publicationFile"
			>
				<svelte:fragment slot="linkText"
					>Psychische Gesundheit in Deutschland - Teil 1 Erwachsene (PDF)</svelte:fragment
				>
				<svelte:fragment slot="textAfter"
					>von dem Robert Koch-Institut (Hrsg) (2021)
				</svelte:fragment>
			</Recommendation>
		</li>
	</ul>

	<!-- usertest -->
	<div class="user-test">
		<UserTest bottomOfPage />
	</div>
</PersonaContent>

<style lang="scss">
	.more-info-list {
		list-style-type: none;
		padding: 0;
	}

	.user-test {
		background-color: var(--color-black);
		border-radius: 1.25rem;
		padding: 2.5rem 1rem;
		margin: 2rem 0 0 3.375rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 59.3125rem) {
		.user-test {
			margin: 2rem 1.375rem;
		}
	}
</style>
