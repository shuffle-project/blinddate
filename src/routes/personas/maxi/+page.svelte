<script lang="ts">
	import { base } from '$app/paths';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import PersonaContent from '$lib/components/PersonaContent.svelte';
	import Puzzle from '$lib/components/Puzzle.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import FriendBubble from '$lib/components/friendPersona/FriendBubble.svelte';
	import { ALEX_FRIEND } from '$lib/constants/alex';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import SpeechBubble from '../../../lib/components/SpeechBubble.svelte';
	import ToolCard from '../../../lib/components/ToolCard.svelte';
	import { MAXI } from '../../../lib/constants/maxi';
	import type { Persona } from '../../../lib/interfaces/persona.interfaces';

	const persona: Persona = MAXI;
	const friendPersona: FriendPersona = ALEX_FRIEND;

	const extendedPlayerConfig: ExtendedPlayerConfig = {
		title: 'Videotitel Platzhalter',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/sehen.mp4',
				captionsArray: [],
				poster: ''
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
	<title>Maxi - BlindDate</title>
</svelte:head>

<PersonaContent {persona}>
	<svelte:fragment slot="content">
		<SpeechBubble {persona}>
			Hallo, mein Name ist Maxi und ich bin 29 Jahre alt. Ich studiere Architektur in Mannheim – und
			bin endlich im Master angekommen. Das war ein steiniger Weg. Ich wohne im Wohnheim in einer
			4er WG, im Zimmer direkt neben Alex. Mit dem studier' ich auch.... In guten wie in schlechten
			Zeiten. Zusammen kriegen wir das hin. Ich hab zwei Hobbies - das ist für mich ziemlich gut,
			weil lange Zeit nicht mal das ging. Ich geh gerne Skateboarden. Nicht so mit schwierigen
			Tricks, aber ein paar Sachen krieg ich schon hin. Und ich fotografiere – am liebsten Nester,
			Höhlen und Unterschlüpfe von Tieren. Diese Bauten inspirieren mich fürs Studium und
			hoffentlich auch mal meinen Beruf. Ein großes Plus: Wenn ich fotografiere, bin ich draußen in
			der Natur unterwegs. Das tut mir gut.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Mein Studium ist nicht gerade sehr gradlinig verlaufen. Ich habe Depressionen und
			Angststörungen. Deshalb habe ich so lange gebraucht. Viele Zweitversuche, viele Semester mit
			nur zwei Kursen, viele Veranstaltungen musste ich zweimal belegen, die Frist für meine
			Bachelorarbeit musste ich verlängern lassen. Zwischendurch war es so schlimm, dass ich ein
			Krankheitssemester nehmen musste. In der Zeit war ich auch in einer Tagesklinik. Das war echt
			ein Tiefpunkt. Aber da habe ich auch Hilfe bekommen. Und aktuell geht es mir jetzt besser. Am
			Anfang des Semesters bin ich sogar zur Beauftragen für Menschen mit Beeinträchtigung gegangen.
			Jetzt habe ich einen Nachteilsausgleich für Prüfungen. Und einen individuellen
			Studienverlaufsplan. Das nimmt mir viel Druck.
		</SpeechBubble>

		<h2 class="main-heading" id="tools">Technologien und Strategien</h2>
		<div style="overflow: hidden;">
			<ToolCard title="Regelmäßige Pausen" image="{base}/tools/regular-breaks.svg">
				Psychische Erkrankungen sind Beeinträchtigungen, die oft als solche nicht wahrgenommen
				werden, da Symptome für Außenstehende häufig nicht sichtbar sind. Die unterschiedlichen
				Symptome psychischer Erkrankungen – wie beispielsweise Konzentrations- und Schlafstörungen,
				oder auch soziale Ängste - können sich erheblich auf den (Studien-)Alltag von Studierenden
				auswirken. Eine Strategie, um der Erschöpfung und dem Belastungsgefühl entgegenzuwirken,
				ist, regelmäßig Pausen einzubauen.
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
				Eine mögliche Strategie kann sein, sich eine Krankheit einzugestehen und sich therapeutisch
				beraten zu lassen Strategien können bei Therapeut*innen erlernt werden, sie sind sehr
				persönlich und schwer zu generalisieren.
			</ToolCard>
		</div>

		<SpeechBubble {persona}>
			Manchmal ist es echt schwierig, auf die eigenen Bedürfnisse zu hören und rechtzeitig und
			ausreichend Pausen zu machen. Ich weiß ja, dass das nötig ist und ich das unbedingt brauche.
			Wenn es gut läuft, leg ich mich dann etwas hin oder gehe ein bisschen raus oder skaten. Danach
			geht es mir besser, ich kann mich wieder konzentrieren und weiter machen. Wenn es schlecht
			läuft... dann kommt eben sofort eine Stimme, die mir sagt, dass ich nur faul bin und dass die
			anderen das ja auch problemlos hinbekommen. Das ich es nur versuchen muss. Dass ich sonst
			durchfalle. Dass ich keinen Job kriege. Und dann werde ich immer gestresster. Und dann geht
			nichts mehr.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Ich habe herausgefunden, dass es mir hilft, dass ich für Vorlesungen zwar an die Hochschule
			gehe, aber Projektarbeiten mache ich lieber von zu Hause. Wenn andere dabei sind... Dann habe
			ich sofort komische Gedanken: Die können alles besser, die sind viel schneller, die sind viel
			schlauer. Oder ich habe das Gefühl, ich sag oder mach die ganze Zeit was Dummes. Zu Hause ist
			niemand da, der mir über die Schulter guckt. Das beruhigt mein Gedankenkarussell. Andererseits
			bin ich deswegen natürlich viel alleine. Hab wenig Austausch. Und ich hab nicht so guten
			Kontakt zu den Leuten in meinem Studiengang. Da fühl ich mich manchmal außen vor.
		</SpeechBubble>

		<FriendBubble {friendPersona}>
			Hi, ich bin Alex, Maxis Mitbewohner und Freund und Studienkollege. Also wir machen alles
			zusammen. Ich habe eine Angststörung.. Es gibt Phasen, da geht es mir ähnlich wie Maxi. Ich
			bin echt froh, dass Maxi und ich uns gefunden haben und so gut verstehen. Und natürlich unsere
			Mitbewohner. Da hab ich dann Leute um mich rum, denen ich auch sagen kann, wenn es gerade
			schlecht geht.
		</FriendBubble>

		<FriendBubble>
			Meine Therapeutin hat mir spezielle Übungen beigebracht. Und ich hab‘ die immer wieder geübt,
			damit ich sie anwenden kann, wenn meine Gedanken außer Kontrolle geraten. Eine Übung ist zum
			Beispiel, alle Dinge aufzuzählen, die ich in dem Moment höre oder sehe. Das lenkt mich dann ab
			und idealerweise kann ich mich so selbst beruhigen. Mittlerweile kennen die anderen die Übung
			auch und schlagen sie mir manchmal vor, wenn sie merken, dass ich mich unwohl fühle.
		</FriendBubble>

		<SpeechBubble {persona}>
			Ja, solche Übungen kenn' ich auch. Ok, mittlerweile kennen die alle. Achtsamkeit ist ja
			Mainstream. Die Übungen helfen mir aber eher nur, wenn es mir schon ziemlich gut geht. Wenn
			ich in einer depressiven Phase bin, schaffe ich das nicht... Oder vielleicht haben die Übungen
			dann keinen Effekt.
		</SpeechBubble>

		<FriendBubble {friendPersona}>
			Geht mir genau so. Das wäre ja auch ein bisschen einfach, wenn ich nur Sachen aufzählen muss
			und meine Panikattacken verpuffen. Ich nehme mittlerweile auch Medikamente, die mir helfen.
			Die haben leider Nebenwirkungen, aber es geht mir damit echt besser. Und zur Therapie gehe ich
			auch. Auf den Platz musste ich ganz schön lange warten.
		</FriendBubble>

		<FlipCard
			front="Ich bin nicht faul!"
			back="Ich habe depressive Episoden. Alles - selbst Aufstehen - kostet mich dann viel Kraft, die an anderer Stelle somit fehlt."
		/>

		<h2 class="main-heading" id="lectures">Lehrveranstaltungen</h2>

		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Einer Vorlesung über 90 Minuten aufmerksam zuzuhören, ist anstrengend.
				Konzentrationsschwierigkeiten, belastende Gedanken und Selbstzweifel machen es Menschen, die
				Depressionen haben, umso schwerer dem Gesagten zu folgen. Werden Vorlesungsfolien und
				Arbeitsmaterial frühzeitig online hochgeladen, hilft das bei einem klaren Zeitmanagement und
				kann den Druck nehmen, sich parallel ausführliche Notizen machen zu müssen.
			</p>
		</div>

		<SpeechBubble {persona}>
			Manchmal schaffe ich es einfach nicht, einer Vorlesung zu folgen. Egal ob online oder in
			Präsenz. Ich kann mich dann schlecht konzentrieren – und dann bemühe ich mich, aber das
			Gedankenkarussell kommt direkt dazwischen: Oh jetzt hab ich die vorherige Folie verpasst,
			jetzt kenn' ich das Wort hier nicht, was hat die Dozentin gerade gesagt? Die Gedanken sind
			lähmend. Ich schaffe es nicht, dann zuzuhören oder sie beiseite zu schieben. Nichts, was die
			Dozentin sagt, bleibt hängen. Und in mir wächst die Panik. Dann schau ich mich um und sehe die
			anderen – die folgen mühelos der Vorlesung, machen Notizen, malen Skizzen. Und in mir kommt
			dann in Großbuchstaben die Frage, warum ich das nicht kann. Warum kann ich nicht mal in einer
			Vorlesung sitzen und zuhören? Wenn es ganz schlimm wird .... Also ich musste deswegen schon
			mal aus einer Vorlesung rausgehen. Sowas ist dann nur noch eine Bestätigung für mein
			schlechtes Selbstbild und füttert meine Angst, das Studium nicht zu schaffen. Wenn es mir
			richtig schlecht geht, schaffe ich nicht mal den Weg zur Hochschule. Dann geht nur Decke
			anstarren und weinen. Warten, dass es vorbei geht.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Stehen Vorlesungen als Videos zum asynchronen Lernen zur Verfügung, können Pausen und
				Geschwindigkeit des Lernens individuell gewählt werden.
			</p>

			<p class="no-component-text">
				Klare Strukturen, sowohl auf Vorlesungsfolien, als auch im generellen Vorgehen während des
				Semesters – wie beispielsweise verbindliche Zeiten, zu denen Inhalte auf Plattformen
				hochgeladen werden (Infos zu Prüfungen, zu Teilnahme, ...) - geben Sicherheit und
				Vorhersehbarkeit.
			</p>

			<p class="no-component-text">
				Die „Kamera-Problematik“: Das gezwungene Einschalten der Kamera in Online-Veranstaltungen
				kann für Menschen mit psychischen Erkrankungen eine große Hürde darstellen. Auf der anderen
				Seite können komplett ausgeschaltete Kameras und das Sitzen vor „schwarzen Kacheln“ sehr
				isolierend wirken. Die Anonymität kann sowohl positiv als auch negativ empfunden werden.
			</p>
		</div>

		<SpeechBubble {persona}>
			Letzte Woche hatte ich wieder so eine Situation. Ich hab meine Kamera dann einfach
			eingeschaltet. Gleichzeitig hab ich mir dann aber gedacht - oh, jetzt können ja die anderen
			das Bild von mir einfach groß stellen. Oder Screenshots machen. Da hab ich mich direkt unwohl
			gefühlt. Und mein Kopf hat aber entschieden, dass die das bestimmt machen. Obwohl ich ja auch
			irgendwie weiß, dass das nicht der Fall ist. Ich hab direkt Stress gekriegt.
		</SpeechBubble>

		<FriendBubble {friendPersona}>
			Und ich merke, wenn die Kamera bei Zoom zum Beispiel aus ist, dann mache ich halt alles andere
			nebenbei. Ich putz mein Zimmer. Ich gieß meine Blumen. Ich mach ein Puzzle. Merkt ja keiner.
			Allerdings merke ich dann auch, dass meine Konzentration komplett flöten ist und ich nichts
			mitgekriegt habe.
		</FriendBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Es gibt also keine Musterlösung und eine Absprache mit Studierenden zu Beginn eines
				Semesters oder einer Veranstaltung kann Unsicherheiten nehmen. Ein sensibler Umgang mit
				Daten und eine vertrauensvolle Atmosphäre und individuelle Lösungen sind daher Voraussetzung
				für ein barrierefreies Lernen.
			</p>
		</div>

		<h2 class="main-heading" id="material">Lernmaterial</h2>

		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Klare Informationen zu Anforderungen und auch Prüfungsleistungen bei einer Teilname an einer
				Veranstaltung sind wichtig, um Unsicherheiten abzubauen. Sind beispielsweise Exkursionen
				geplant, wird eine besondere Form der Prüfungsleistung erwartet, werden Materialien immer zu
				einer bestimmten Zeit hochgeladen, hat diese Veranstaltung eine besondere Struktur, oder
				wird es unterschiedliche Lehrpersonen geben, sollte dies zu Beginn des Semesters
				kommuniziert werden.
			</p>

			<p class="no-component-text">
				Zusätzlich dazu sollten Kontaktmöglichkeiten und -zeiten zu den Lehrenden geklärt und
				zugänglich sein. Werden Materialien online und frühzeitig an einer zuvor kommunizierten
				Stelle hochgeladen, haben Studierende mit psychischen Erkrankungen die Möglichkeit,
				Lernphasen leichter zu planen und „gute“ Phasen auszunutzen.
			</p>
		</div>

		<Puzzle
			topLeft="Ich verstehe die Vorlesung einfach nicht! Warum hat sonst niemand Fragen? Warum bin nur ich so unglaublich dumm?! Ich werde durchfallen und alle werden mich auslachen! Ich hasse mich!"
			topRight="Was, eine Lerngruppe heute Nachmittag? Oh, nein, tut mir leid, da habe ich keine Zeit."
			bottomLeft="Ich fühle, wie Panik in mir hochsteigt. Mein Puls beschleunigt sich und mein Brustkorb fühlt sich eng an. In meinen Ohren rauscht es, sodass ich den Dozenten nicht mehr verstehe."
			bottomRight="Ich sitze still an meinem Platz im Vorlesungssaal. Ich würde gerne den Raum verlassen, aber dafür müsste ich mich an drei Studierenden vorbeidrängen."
		/>

		<h2 class="main-heading" id="interaction">Interaktion und Kommunikation</h2>

		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Lehrende sind in der Regel keine Therapeut*innen und sollten diese Rolle auch nicht
				übernehmen. Umso wichtiger ist es, dass klar kommuniziert wird, an wen sich Studierende mit
				psychischen Belastungen wenden können. So ist eine Auflistung von Kontaktpersonen – wie
				beispielsweise eine psycho-soziale Beratungsstelle und die Beauftragten für Studierende mit
				Beeinträchtigungen der Hochschule - beispielsweise auf der ersten Vorlesungsfolie oder an
				einem für alle zugänglichen Ort eine sinnvolle Unterstützung. Der Hinweis auf
				Beratungsstellen zeigt, dass Lehrende sich bewusst sind, dass es auch „unsichtbare“
				Beeinträchtigungen gibt und diese genauso Unterstützung erfahren, wie „sichtbare“
				Beeinträchtigungen.
			</p>
		</div>

		<SpeechBubble {persona}>
			Wenn ich mich... oder wenn ich meine Krankheit erklären will, muss ich mich quasi nackig
			machen. Das will keiner hören. Niemand will hören, dass ich in eine Klinik musste. Oder dass
			ich in einer depressiven Phase mehrere Tage nicht mal duschen oder das Haus verlassen konnte.
			Wie mies ich von mir selber denke und wie sehr mich das behindert. Und dass das ganze auch
			irgendwie unerklärlich ist. Das ist unangenehm. Niemand hört gerne „Es geht mir NICHT gut“.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Online-Veranstaltungen bringen Vorteile wie zeitliche und örtliche Flexibilität mit sich.
				Ein daraus entstehender Nachteil kann aber auch die Isolation sein. Der direkte Austausch
				mit Mitstudierenden ist häufig erschwert oder wird schlichtweg vergessen. Auch wenn der
				direkte Vergleich mit Mitstudierenden eventuell wegfällt, ist die positive Wirkung eines
				persönlichen Austauschs nicht zu vernachlässigen. Regelmäßige Austauschangebote vor oder
				nach Online-Veranstaltungen (auch ohne Anwesenheit der Lehrperson) können hilfreich sein.
			</p>
		</div>

		<SpeechBubble {persona}>
			Ich finde es wichtig, dass bei Gruppenarbeiten von den Lehrenden geschaut wird, dass alle
			einen Platz finden. Mich kostet es sehr viel Überwindung, mich bei jemanden zu melden oder in
			eine feste Gruppe zu gehen, die immer zusammen arbeiten. Ich studiere so langsam. Alle, die
			mit mir angefangen haben, sind schon längst fertig. Und ich bin ja in recht wenigen
			Veranstaltungen. Also die Leute in meinem Semester kenne ich einfach nicht. Mir würde es
			helfen, einfach zugeteilt zu werden.
		</SpeechBubble>

		<FriendBubble {friendPersona}>
			Mir hilft es total, wenn ich die Möglichkeit habe, mich mit Mitstudierenden vor oder nach der
			Vorlesung auszutauschen – ob das in Präsenz oder online ist. Manchmal konnte ich mehrere
			Wochen nicht an einer Veranstaltung teilnehmen und habe den Anschluss verloren. Ein direkter
			Austausch hilft da total!
		</FriendBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				In der Kommunikation zwischen Studierenden und Lehrenden gibt es häufig nur die Möglichkeit
				der Kontaktaufnahme per persönlicher Sprechstunde. Ein persönliches Gespräch oder ein
				Telefonat stellt Menschen mit sozialen Ängsten manchmal vor große Hürden. Eine breite
				Aufstellung in der Kontaktaufnahme (Mail, anonymes Kontaktformular, Feedback-Möglichkeiten,
				etc.) ermöglicht dennoch einen Austausch.
			</p>
		</div>

		<SpeechBubble {persona}>
			Wenn es mir schlecht geht, ist es einfach eine zu große Aufgabe, noch Kontakt mit Lehrenden
			aufzunehmen. Dann geht es halt wieder los: Die denken, du bist dumm. Das muss man doch
			schaffen. Die anderen fragen das auch nicht. Man muss auch Leistung bringen, um zu studieren.
			Deshalb hab ich mich oft gar nicht gemeldet. Rückblickend muss ich sagen, dass mir das
			geschadet hat. Viele Lehrende haben echt viel Verständnis – und haben mir geholfen, Lösungen
			zu finden. Jetzt bemühe ich mich, mich früher zu melden. Manchmal hilft es mir, mir dabei
			helfen zu lassen. Also wirklich mit jemanden zusammen eine Email zu schreiben oder mich zur
			Sprechstunde bringen zu lassen.
		</SpeechBubble>

		<h2 class="main-heading" id="exams">Prüfungen</h2>

		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Da der Name “Behindertenbeauftragte” an vielen Hochschulen noch genutzt wird, wenden sich
				Studierende, die keine offiziell diagnostizierte Behinderung haben, aber in ihrem Studium
				dennoch Barrieren erfahren, nicht an diese Personen. Um eine psychische Erkrankung offiziell
				diagnostizieren und dann auch einen Nachteilsausgleich beantragen zu können, müssen die
				Ansprechpersonen also klar erkennbar sein.
			</p>
		</div>

		<SpeechBubble {persona}>
			Ich habe genau sechs Semester gebraucht, bis ich mich getraut habe, mich an die Beauftragte
			für Studierende mit Behinderung zu wenden. Am Anfang dachte ich, dass die wegen des Namens....
			also Behinderung... gar nicht für mich zuständig ist. Ich habe eine psychische Krankheit. Das
			ist ja keine Behinderung. Mittlerweile denke ich anders. Die Krankheit beeinträchtigt mich
			stark. Und deshalb kann und darf ich auch die Hilfen der Hochschule in Anspruch nehmen. Das
			muss ich mir immer wieder selbst sagen. Allerdings war es viel bürokratischer Aufwand, bis
			alles geregelt war. Dabei hat mir aber die Beauftragte sehr geholfen. Auch, in dem sie mit mir
			Emails geschrieben hat. Ich musste Atteste besorgen, zum Prüfungsamt, Formulare ausfüllen. Das
			ist anstrengend, wenn es einem nicht gut geht, wenn man nicht so viel schafft – und wenn man
			selbst ständig hinterfragt, ob man das überhaupt haben darf. Was mir wirklich geholfen hätte?
			Vielleicht, wenn ich Informationen früher gehabt hätte. Wenn ich gewusst hätte, dass ich mich
			an die Beauftragte wenden kann. Wo ich die finde und so. Überhaupt, dass es Stellen gibt, an
			die ich mich wenden kann.
		</SpeechBubble>

		<FriendBubble {friendPersona}>
			Je nachdem, wie es mir gerade geht, habe ich mit Prüfungen echt Probleme und bekomme
			Panikattacken. Aber ich habe mit dem Nachteilsausgleich eine Zeitverlängerung bekommen, was
			mir sehr hilft. Sonst wäre ich schon ziemlich oft durchgefallen, obwohl ich ultra viel gelernt
			habe. Ich benötige die Zeit, um mich immer wieder zu beruhigen, um dann weiterschreiben zu
			können. Ich brauche die Zeitverlängerung nicht immer. Aber es nimmt mir den Druck.
		</FriendBubble>

		<SpeechBubble {persona}>
			Ich kann mich maximal eine Stunde am Stück konzentrieren und brauche dann mindestens zwei
			Stunden Pause. Auf eine Klausur lernen – wie soll das gehen? Vor allem, wenn alle anderen sich
			den ganzen Tag in Lerngruppen treffen oder die Nacht durchbüffeln. Das kann ich doch gar
			nicht. Das macht mir immer Angst. Wie soll ich das denn schaffen? So viele Stunden hat ein Tag
			ja gar nicht.
		</SpeechBubble>

		<h2 class="main-heading" id="tips">Tipps zur Unterstützung</h2>

		<p class="no-component-text">
			Hier ist eine Auflistung von schnellen und einfachen Tipps, wie Sie Gabriel und viele weitere
			Menschen unterstützen können.
		</p>

		<Checklist
			checks={[
				'Ich informiere mich über digitale Barrierefreiheit',
				'Ich mache Studierende auf Unterstützungsangebote aufmerksam, z.B. auf Veranstaltungsfolien oder in Informationen',
				'Ich teile Informationen über Beratungsangebote und Anlaufstellen, an die sich Studierende mit psychischen Problemen wenden können',
				'Ich stelle meine Lernmaterialien vorab und digital zur Verfügung',
				'Ich ermögliche eine asynchrone oder remote Teilnahme an der Veranstaltung',
				'Nachteilsausgleiche setze ich in meiner Lehre und in Prüfungen bedarfsgerecht und fair um',
				'Ich mache ausreichend Pausen in langen Veranstaltungen'
			]}
			{persona}
		/>
	</svelte:fragment>
</PersonaContent>
