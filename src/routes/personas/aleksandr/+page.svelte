<script lang="ts">
	import { base } from '$app/paths';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import Puzzle from '$lib/components/Puzzle.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import ToolCard from '$lib/components/ToolCard.svelte';
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import FriendBubble from '$lib/components/friendPersona/FriendBubble.svelte';
	import { ALEKSANDR } from '$lib/constants/aleksandr';
	import { VALENTIN } from '$lib/constants/valentin';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import PersonaContent from '../../../lib/components/personaContent/PersonaContent.svelte';

	const persona: Persona = ALEKSANDR;
	const friendPersona: FriendPersona = VALENTIN;
</script>

<PersonaContent {persona} let:MainHeading let:TextSection>
	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-01.mp3'}>
		Hallo, mein Name ist Aleksandr, aber ich bevorzuge Sasha. Ich bin 23 Jahre alt. Ich wohne etwas
		außerhalb von Frankfurt. Ich interessiere mich sehr für die Funktionsweise des menschlichen
		Gehirns – wie Verhaltensweisen das Resultat elektrischer Signale sind. Deshalb studiere ich
		Neurowissenschaften. Angefangen habe ich mit einem Fernstudium. Ich dachte, für mich sei das
		besser. Soziale Interaktionen, viele Leute um mich herum, große Gebäude. Das ist für mich
		anstrengend. Das ist, weil ich Autist bin. Aber ich habe das Fernstudium abgebrochen. Die
		Selbstorganisation war zu viel. Das hat nicht gut geklappt. Damit habe ich Probleme. Jetzt
		studiere ich an der Goethe-Universität in Frankfurt. Ich habe auch einen Job als
		wissenschaftliche Hilfskraft für 15 Stunden im Monat. Meine Aufgabe ist das Codieren von Daten
		für eine große Studie.
	</SpeechBubble>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-02.mp3'}>
		Ich wohne bei meinen Eltern. Das ist wichtig. Ich brauche ab und zu Hilfe bei der Organisation
		von Dingen. Zum Beispiel Wäsche machen oder Kochen. Und bei Terminen. Ich bin 4 Tage die Woche
		an der Uni. Ab 8:30Uhr. Dort besuche ich Veranstaltungen und lerne auch. Ich mache auch viel
		Sport. Zweimal in der Woche gehe ich Joggen. Für meine kardiovaskuläre Fitness. Und ich mache
		Calisthenics für Flexibilität und Muskelaufbau. Das ist Kraftsport mit dem eigenen
		Körpergewicht. Strategische Brettspiele mag ich auch. Zum Beispiel <span lang="en"
			>Age of Sigmar</span
		>, das früher <span lang="en">Warhammer</span> hieß. Die Legenden von Andor. Oder Dune:Imperium.
		Ich spiele gerne zusammen mit Valentin. Weil er das mag, auch mal Siedler von Catan.
	</SpeechBubble>

	<MainHeading heading="Technologien und Strategien" />
	<div style="overflow:hidden;">
		<ToolCard title="Studienorganisation" image="{base}/tools/calender.svg">
			Menschen auf dem Autismus-Spektrum nehmen ihre Umwelt anders wahr als neurotypische Menschen.
			Das Orientieren und Navigieren im Studienalltag, den Überblick zu behalten und das soziale
			Miteinander zu meistern, kann Studierende mit ASS vor Herausforderungen stellen. Eine
			Unterstützung in der Studienplanung und Organisation des Studiums kann für Studierende mit ASS
			daher hilfreich sein. Da ein Orientieren an Details eine häufige Ausprägung bei Menschen mit
			ASS ist, ist das ganzheitliche Erfassen von Situationen und auch das Verschaffen von Überblick
			erschwert. Gerade der Übergang von eher strukturiertem Alltag in der Schule zu häufig
			unstrukturiertem Alltag im Studium kann eine Hürde darstellen.
		</ToolCard>
		<ToolCard title="Routinen & Struktur" image="{base}/tools/day-plan.svg">
			Das Orientieren an Details und ein sogenannter Hyper-Fokus auf Themen können für ein Studium
			von Vorteil sein. Manchmal nehmen diese Spezialinteressen aber auch viel Zeit und
			Aufmerksamkeit in Anspruch. Andere wichtige Aktivitäten – wie Essen oder Termine – können
			dadurch komplett in den Hintergrund rutschen. Deshalb kann es für Studierende mit ASS wichtig
			sein, sich klare Strukturen und feste Routinen in den Alltag einzubauen, um andere Bereiche
			nicht zu vernachlässigen.
		</ToolCard>
		<ToolCard title="Reizreduktion" image="{base}/tools/headphone.svg">
			<span
				>Menschen mit ASS reagieren häufig über- oder unterempfindlich auf verschiedene Umweltreize.
				So können Lichter, Gerüche, Geräusche oder auch Berührungen zu einer Reizüberflutung und
				Überstimulation führen. Reizarm gestaltete Räume oder das Tragen von
				Geräusch-unterdrückenden Kopfhörern können Strategien sein, um einer Reizüberflutung
				vorzubeugen. Eine Reizüberflutung kann unterschiedliche Reaktionen hervorrufen. Manche
				Menschen mit ASS „erstarren“ und wirken auf die Umwelt nicht ansprechbar, andere versuchen
				sich dieser Situation schnell zu entziehen oder nutzen
			</span>
			<InfoBox term="Stimming" langTerm="en">
				<p>
					Der Begriff <b lang="en">„Stimming“</b> kommt aus dem Englischen und ist eine Abkürzung
					für
					<span lang="en">„selfstimulating behaviour“</span>. Es ist somit eine – häufig unbewusste
					– Handlung einer Person, um Reize selbst zu erzeugen, um sich beispielsweise von anderen,
					störenden Reizen abzulenken. <span lang="en">Stimming</span> kann aber auch genutzt werden,
					um die Konzentration zu erhöhen. Es gibt:
				</p>
				<ul>
					<li>
						motorische <span lang="en">Stimms</span> (z.B. Schaukeln mit Oberkörper, sich drehen)
					</li>
					<li>
						taktile <span lang="en">Stimms</span> (z.B. Finger bewegen, mit Gegenständen hantieren)
					</li>
					<li>auditive <span lang="en">Stimms</span> (z.B. Summen, sich die Ohren zuhalten)</li>
					<li>
						visuelle <span lang="en">Stimms</span> (z.B. Betrachten von Mustern oder Lichtquellen)
					</li>
				</ul>
				<p>
					Aber auch mit dem Geruch- und Geschmackssinn können verschiedene Reize aufgenommen werden,
					die als <span lang="en">Stimming</span> dienen. Werden diese selbststimulierenden Reize
					bewusst gesetzt, um beispielsweise die Konzentration zu erhöhen, spricht man von
					<span lang="en">„Skills“</span>. Viele Menschen, ob neurotypisch oder neurodivergent,
					benutzten
					<span lang="en">Stimming</span>. Mit den Füßen wippen oder mit dem Kugelschreiber klicken
					sind Handlungen, die häufig unbewusst ablaufen, aber dazu dienen, sich auf etwas
					Bestimmtes besser konzentrieren zu können. Der Unterschied ist dabei, dass für Menschen
					auf dem Autismusspektrum dieses Verhalten häufig eine notwendige Schutzfunktion darstellt,
					um beispielsweise einen <span lang="en">Meltdown</span> zu vermeiden. Außerdem sind die Art
					der Bewegungen und die Intensität unterschiedlich ausgeprägt.
				</p>
			</InfoBox>
			<span class="toolcard-span">, um andere Reize auszublenden.</span>
		</ToolCard>
		<ToolCard title="Selbststimulation" image="{base}/tools/fidget-spinner.svg">
			Neben der Überstimulierung durch verschiedene Reize ist auch eine Unterstimulation ein
			bekanntes Symptom bei Menschen auf dem Autismus-Spektrum. <span lang="en">Stimming</span>,
			also die bewusste Wiederholung von physischen Bewegungen oder Lauten, aber auch Sport oder das
			Hantieren mit reizauslösenden Gegenständen (z.B. sogenannte
			<span lang="en">Fidget Toys</span>) sind Möglichkeiten des selbststimulierenden Verhaltens.
		</ToolCard>
	</div>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-03.mp3'}>
		Umweltreize lenken mich schnell ab. Mein Gehirn kann sie nicht ausfiltern. Deshalb nutze ich
		Kopfhörer. Solche mit <span lang="en">Active Noise Cancelling</span>. Ich höre damit keine
		Musik. Sie blenden aber zumindest Geräusche aus, damit ich mich besser konzentrieren kann.
		<span lang="en">Fidget Toys</span> habe ich auch dabei. Zum Beispiel ein Würfel mit Schaltern, Tasten
		und einer Kugel. Oder einen Ball, den man kneten kann. Das ist kein Spielzeug. Ich brauche die Sachen,
		damit ich nicht überstimuliert werde. Das passiert sonst schnell, wenn viele Menschen da sind, es
		laut ist oder ich einen Weg finden muss.
	</SpeechBubble>

	<FriendBubble {friendPersona}>
		Sasha und ich – wir kennen uns schon ewig. Schon seit der Grundschule. Wenn ihm alles zu viel
		wird, spricht er nicht mehr und klopft auf seinen Händen rum. Das macht er, damit er sich besser
		konzentrieren kann, hat er mir gesagt. Also, er hört einen dann trotzdem, auch wenn das nicht so
		aussieht. Er versucht nur, den Rest, der ihn stört, auszublenden. Zum Beispiel andere Leute, die
		sich unterhalten oder rumlaufen. Stell dir mal vor, wie das ist, wenn du alles merkst! Ich weiß,
		dass er so reagiert. Aber viele andere checken das nicht. Die reden dann lauter auf ihn ein,
		kommen näher oder berühren ihn sogar. Das bringt halt gar nichts. Viel besser wäre, zusammen
		einen ruhigeren Ort zu finden.
	</FriendBubble>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-04.mp3'}>
		Wenn mir eine Situation zu viel wird – das heißt, wenn ich überstimuliert bin und deshalb einen
		schnellen Puls, schnellen Atem und Angstgefühle bekomme... Dann habe ich Regulationsprobleme und
		komme, wenn es nicht gut läuft, in einen Zustand, den man <span lang="en">„Meltdown“</span> nennt.
		Dann habe ich mein Verhalten nicht mehr unter Kontrolle. Als Kind hatte ich das oft. Da habe ich
		geschrien und auch um mich getreten oder geschlagen. Heute beiße ich mir in die Hand. Das ist autoaggressives
		Verhalten. Das tut weh, aber in der Situation hilft mir das. Am besten lässt man mich dann in Ruhe.
	</SpeechBubble>

	<FlipCard
		{persona}
		front="Ich bin nicht unhöflich!"
		back="Im Gegenteil: Wenn ich keinen Augenkontakt halte, kann ich besser zuhören."
	/>

	<MainHeading heading="Lehrveranstaltungen" />
	<TextSection let:Text>
		<Text noTopMargin>
			Zu Beginn eines Semesters finden viele Auftaktveranstaltungen statt, um den Studierenden
			viele, wichtige Informationen zu geben, um einen Start ins neue Semester zu erleichtern. Diese
			Informationsflut kann für Studierende auf dem Spektrum sehr schwierig sein und ggf. können sie
			nicht alle Informationen aufnehmen. Digitale Zusammenstellungen der Informationen, die im
			Nachhinein verfügbar sind, sind daher sehr hilfreich.
		</Text>
		<Text>
			Mehrdeutigkeiten und uneindeutige Arbeitsaufträge können für Studierende mit ASS eine
			Herausforderung darstellen. Dozierende können unterstützen, indem sie die Arbeitsaufträge
			eindeutig und ohne Interpretationsspielraum formulieren und die damit verbundenen
			Anforderungen an die Studierenden erläutern.
		</Text>
		<Text>
			Damit es den Studierenden leichter fällt, der Veranstaltung zu folgen – unabhängig davon, ob
			die Veranstaltung online oder in Präsenz stattfindet – sollten Umgebungsreize möglichst
			vermieden werden. Störgeräusche durch offene Fenster, Blendung durch grelle
			Hintergrundbeleuchtung oder Rauschen durch Laptop-Mikrofone sind vermeidbare Reize, die
			Überstimulationen und sensorische Ablenkungen verursachen können.
		</Text>
		<Text>
			Auch soziale Interaktionen können für Studierende mit ASS herausfordernd sein. Manche
			Studierende ziehen daher Einzelarbeiten Gruppenarbeiten vor. Ist das Entschlüsseln von Gestik
			und Mimik für einige Studierende mit ASS generell erschwert, wird dies durch digitale
			Veranstaltungen häufig noch verstärkt und beansprucht viel Aufmerksamkeit und Energie. Diese
			Energie und Aufmerksamkeit kann dann für das inhaltliche Bearbeiten der Aufgaben fehlen.
		</Text>
		<Text>
			Reizarme und ruhige Rückzugsorte an Hochschulen können allen Studierenden helfen, zwischen
			Veranstaltungen etwas Ruhe zu finden. Für Studierende auf dem Spektrum können diese Orte
			helfen, Reizüberflutungen zu vermeiden.
		</Text>
		<Text>
			Raum- oder Dozierendenwechsel können zu Orientierungsproblemen und Unsicherheiten führen und
			sollten daher möglich frühzeitig angekündigt und spontane Änderungen, wenn möglich, vermieden
			werden.
		</Text>
	</TextSection>

	<MainHeading heading="Lernmaterial" />
	<TextSection let:Text>
		<Text noTopMargin>
			Für Studierende mit ASS kann das Unterscheiden zwischen relevanten und irrelevanten Inhalten
			schwierig sein. Eine große Menge an (unstrukturierten) (Lern-)Materialien kann also schnell zu
			Überforderung oder Überarbeitung führen. Arbeitsanweisungen, Fragen oder Antwortmöglichkeiten,
			die inhaltlich oder auch visuell ähnlich sind – beispielsweise lediglich durch ein „nicht“ zu
			unterscheiden – können zu Herausforderungen führen, die nichts mit dem Inhalt selbst zu tun
			haben. Deshalb sind eindeutige Arbeitsanweisungen und Strukturen hilfreich.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-05.mp3'}>
		Viele Dinge lenken mich von meiner Aufgabe ab. Das geht leicht. Ein Beispiel: Wenn ich sage, ich
		lerne jetzt Neuroanatomie mit dem Gehirn-Atlas. Und dann sehe ich, dass ich etwas grün
		unterstrichen habe. Dann frag ich mich: Wo ist eigentlich der grüne Stift? Dann schaue ich in
		der Schublade. Und mir fällt ein, dass ich die reparieren wollte. Dazu brauche ich Werkzeug aus
		der Garage. Da gehe ich dann hin. In dem Schrank finde ich eine Kiste mit Schrauben, die ganz
		durcheinander sind. Ich fange an, sie zu sortieren... Aber eigentlich will ich lernen. Das
		passiert mir sehr oft. Deshalb brauche ich klare Vorgaben. Die muss ich mir selbst setzen. Und
		aufpassen, dass mich wenig ablenkt. Dort wo ich lerne.
	</SpeechBubble>

	<FriendBubble {friendPersona}>
		Ich treff mich immer mal mit Sasha am Nachmittag zum Lernen. Ich studiere was ganz anderes, aber
		das kann man ja trotzdem zusammen machen. Schwierig wird es, wenn Sasha nach unserem Lern-Date
		noch einen anderen Termin hat. Ich hab dann das Gefühl er sitzt da wie bestellt und nicht
		abgeholt und wartet eigentlich nur darauf, dass er jetzt zu dem Termin losgehen kann. Auf etwas
		anderes konzentrieren kann er sich dann nicht mehr, obwohl er erst in einer Stunde oder so los
		muss.
	</FriendBubble>

	<Accordion personaName={persona.name} let:AccordionItem>
		<AccordionItem let:PersonaAnswer>
			<svelte:fragment slot="question"
				>Inwiefern nimmst du die Welt anders wahr als andere?
			</svelte:fragment>
			<PersonaAnswer {persona}>
				Neurotypische Personen filtern jeden Tag tausende Sinneseindrücke aus. Das merken sie gar
				nicht. Aber bei mir funktioniert das Filtern nicht. Ich sehe die Welt sehr detailliert. Als
				ob ich die ganze Zeit durch eine Lupe gucken würde. Ich höre die Welt ganz laut. Als ob ich
				direkt neben einem Lautsprecher stehen würde. Ich rieche die Welt auch intensiv. Als ob ich
				konstant auf einem Fischmarkt stehen würde. Und ich spüre die Welt sehr stark. Als ob ich
				permanent einen sehr kratzigen Pullover tragen würde.
			</PersonaAnswer>
		</AccordionItem>

		<AccordionItem let:PersonaAnswer>
			<svelte:fragment slot="question">Was ist deine Inselbegabung?</svelte:fragment>
			<PersonaAnswer {persona}>
				Ich habe keine Inselbegabung. Nur sehr wenige Menschen auf dem Spektrum haben eine. Die mit
				dem Savant-Syndrom. Das ist ein sich hartnäckig haltendes Gerücht. Es ist spannender,
				Menschen mit Autismus-Spektrum-Störung und einer besonderen Inselbegabung in Film und Serien
				darzustellen. Deswegen hält sich dieser Eindruck.
			</PersonaAnswer>
		</AccordionItem>
	</Accordion>

	<MainHeading heading="Interaktion und Kommunikation" />
	<TextSection let:Text>
		<Text noTopMargin>
			Für Studierende mit ASS können die Regeln und ungeschriebenen Gesetze sozialer Interaktionen
			eine Herausforderung darstellen. Was gesellschaftlich anerkannt ist oder als höflich gilt,
			passiert in der Kommunikation mit Dozierenden und Kommiliton*innen auch häufig „zwischen den
			Zeilen“. Nonverbale Kommunikation und Small Talk sind dabei wichtige Instrumente, die manche
			Studierende auf dem Spektrum teilweise auswendig lernen müssen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-06.mp3'}>
		Small Talk ist und bleibt für mich sehr anstrengend. Ich musste dafür viel üben. Zum Beispiel
		als Kind in der Therapie. Es fühlt sich immer an, als würde ich performen. So wie ein
		Schauspieler, der ein Skript liest. Wenn ich keinen Small Talk mache, wirke ich unfreundlich.
		Andere möchten dann nicht mit mir reden. Wenn ich über die Sachen rede, die mich interessieren,
		wollen andere das oft nicht hören. Dann sagen die, das ist zu viel.
	</SpeechBubble>

	<FriendBubble {friendPersona}>
		Sasha hat mir mal erklärt, dass das, was er performen nennt, auch
		<InfoBox term="masking" langTerm="en" inSpeechBubble>
			<p style="font-family: var(--font-sans-serif);">
				<b lang="en">„Masking“ </b>ist eine Strategie, die Menschen auf dem Spektrum nutzen, um im
				sozialen Miteinander nicht aufzufallen. Es ist eine Anpassungsleistung, die auch
				neurotypische Menschen nutzen. Sie lernen diese allerdings häufig eher intuitiv mit dem
				Erwachsen-werden mit. Wie verhält man sich in Gruppensituationen? Welche sozialen Regeln
				herrschen in Gesprächen? Bei Menschen auf dem Spektrum kommt das Erlernen dieser Regeln
				häufig nicht intuitiv und muss mühsam trainiert werden.
			</p>
		</InfoBox>

		genannt wird. Das bedeutet, dass er quasi eine Maske aufzieht oder eine Rolle spielt – er spielt
		dann, was er denkt, was neurotypisches Verhalten ist. Ich glaube, Sasha würde oft anders
		reagieren – aber er hat gelernt, dass es besser ist, normal zu scheinen. Oder so, wie die
		Gesellschaft es erwarten würde. Wenn man ihn etwas kennt, merkt man allerdings, dass das nicht
		so echt ist.
	</FriendBubble>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-07.mp3'}>
		Genau. Ich denke, man muss so wirken, wie die anderen. Ich musste auch lernen, dass man dem
		anderen in die Augen schaut. Das mache ich aber nicht mehr. Das ist mir unangenehm. Ich schaue
		woanders hin. Dann höre ich auch besser zu und kann mich konzentrieren. Gesprächspartner finden
		das aber komisch. Manchmal denken sie, ich bin nicht interessiert. Also schaue ich immer mal
		wieder auf einen Punkt hinter dem Kopf der Person und nicke.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Für Studierende mit ASS kann das Lesen und Interpretieren von Mimik und Gestik erschwert sein.
			Eine häufig genutzte Strategie ist das Auswendiglernen bekannter Mimiken. Dabei fällt das
			Interpretieren der Gesichtszüge und Emotionen bei bekannten Personen leichter.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-08.mp3'}>
		Mimik und Gestik ist manchmal wie eine Art Geheimsprache für mich. Wie als sähe man etwas in
		einer unbekannten Schrift. Ich kann dann sehen, dass es Schrift ist. Vielleicht auch, dass es
		arabisch ist oder Runen. Aber ich kenne die Bedeutung nicht. Ich bin sozusagen Mimik-Analphabet.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Im Studienalltag treffen Studierende auf eine große Anzahl an unterschiedlichen Personen in
			unterschiedlichen Seminaren, Veranstaltungen und Settings. Eine häufige Komorbidität, die mit
			Autismus auftritt, ist die sogenannte „Gesichtsblindheit“ oder „Prosopagnosie“. Hierbei können
			zwar die Details eines Gesichts erkannt, aber nicht mit der Person in Verbindung gebracht
			werden. Personen auf dem Autismus-Spektrum lernen als Strategie daher, Personen anhand anderer
			Merkmale – wie beispielsweise Stimme, Gangbild, Statur etc. – zu erkennen und zuzuordnen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-09.mp3'}>
		Die Umwelt ist eher für neurotypische Menschen gestaltet. Deshalb ist das nicht so einfach. Es
		verursacht mir Stress und Aufregung. Eigentlich die ganze Zeit. An der Uni sind oft viele Leute
		oder es gibt eine Baustelle oder irgendeine Aktion, bei denen Leute einen was fragen. Ein
		Halbmarathon zu laufen ist für mich einfacher. Nach einem ganzen Uni-Tag bin ich müde.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Eine Unterstützung im Studienalltag bei der Kontaktaufnahme mit Dozierenden, der Navigation
			auf der Website der Uni oder in der Stundenplanerstellung kann über die Kontaktaufnahme mit
			den Beauftragten für Studierende mit Beeinträchtigungen erfolgen. Mentor*innen-Programme,
			<span lang="en">„Study Buddys“</span> oder auch ausgebildete Assistenzen können Studierende auch
			bei den sozialen Aspekten des Studierens begleiten. Dozierende können Studierenden mit ASS unter
			anderem durch das Hinweisen auf oder Vermitteln von eben dieser Unterstützungsmöglichkeiten helfen.
			Auch der Verweis auf möglicherweise existierende Studierenden-Gruppen zum Vernetzen kann eine Unterstützung
			darstellen.
		</Text>
	</TextSection>

	<Puzzle
		topLeft="Ich muss hier raus. Ich brauche Ruhe. Das ist zu viel. Hat er mich gerade etwas gefragt? Ich sollte Augenkontakt halten! Was soll dieser Gesichtsausdruck bedeuten?"
		topRight="Ich habe gerade keine Kapazität für ein Gespräch. Ich sage besser nichts!"
		bottomLeft="Es ist viel zu laut. Wieso blinkt denn die LED am Beamer so hell? Mein Puls geht schnell und meine Hände sind schwitzig. Es wird mir zu viel."
		bottomRight="Ich fange an, mir selbst in die Hände zu zwicken und bewege meinen Oberkörper leicht vor und zurück."
	/>

	<MainHeading heading="Prüfungen" />
	<TextSection let:Text>
		<Text noTopMargin>
			Neben dem Fokussieren auf Details können autistische Studierende Probleme haben, Worte, Texte
			oder Gegenstände, die sich visuell oder inhaltlich sehr ähnlich sind, auseinanderzuhalten.
			Daher kann das häufig gewählte Prüfungsformat „Fragebogen mit multiple choice-Antworten“ eine
			Herausforderung darstellen. Bei dem Prüfungsformat „mündlicher Vortrag“ werden neben den
			Inhalten häufig eine flüssige Sprechweise, eine offene Haltung und gelegentlicher Blickkontakt
			zum Publikum bewertet. Gerade diese Punkte können bei Studierenden mit ASS erschwert sein.
		</Text>
		<Text>
			Bei Nachteilsausgleichen können daher beispielsweise festgehalten werden, dass es entweder die
			Möglichkeit alternativer Prüfungsformate gibt oder dass Blickkontakt und Sprechweise nicht
			bewertet werden.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-10.mp3'}>
		Ich habe keinen Nachteilsausgleich, der mir eine Zeitverlängerung bei Prüfungen oder Abgaben
		einräumt. Ich brauche das nicht. Aber ich kenne Andere auf dem Spektrum, für die das sehr
		hilfreich ist. Die haben Probleme bei der Prüfung und müssen zwischendurch pausieren. Ich darf
		aber Prüfungen in einem separaten Raum schreiben. So muss ich nicht so viel ausblenden. Aber die
		Zeit ist die gleiche. Nächstes Semester habe ich eine wichtige Gruppenarbeit. Vielleicht sollte
		ich mich dafür um einen Nachteilsausgleich bemühen. Mit mir unbekannten Studierenden so
		zusammenarbeiten. Da werde ich kein gutes Ergebnis erzielen.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Prüfungssituationen sind für viele mit Stress verbunden. Ein Konzentrieren auf die Inhalte der
			Prüfung kann für Studierende mit ASS erleichtert werden, indem Störreize möglichst vermieden
			werden. Das Ablegen von Prüfungen in reizarm gestalteten Räumen ohne Mitstudierende oder die
			Möglichkeit, Kopfhörer tragen zu können, werden ebenfalls in einem Nachteilsausgleich
			festgehalten.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/aleksandr/audio/aleksandr-sb-11.mp3'}>
		Multiple-Choice ist für mich schwierig. Da sind die Antwortmöglichkeiten oft fast gleich. Nur
		ein Wort oder ein „nicht“ ist anders. Ich kann das dann schwer auseinanderhalten und alles
		verschwimmt vor meinen Augen. Schwierig finde ich auch, wenn Fragen für mich uneindeutig sind.
		Wenn man sie auf mehrere Arten lesen kann, denn dann kann man auch auf mehrere Arten antworten.
	</SpeechBubble>

	<MainHeading heading="Selbstcheck Barrierefreiheit" />

	<TextSection let:Text>
		<Text noTopMargin>
			Hier finden Sie eine Checkliste, um zu überprüfen, wie barrierefrei Ihre Lehre bereits ist.
		</Text>
	</TextSection>

	<Checklist
		checks={[
			'Ich informiere mich über digitale Barrierefreiheit',
			'Ich mache transparent, welche Komponenten meiner Lehrveranstaltung bewertet werden und welche nicht (Bspw. mündliche Teilnahme und Gruppensituation)',
			'Ich erlaube die Nutzung von Kopfhörern oder Fidget Toys in meinen Veranstaltungen',
			'Ich achte auf eine möglichst reizarme Umgebung in meinen Veranstaltungen (keine Störgeräusche, blinkende Lichter etc.)',
			'Ich stelle den Studierenden frei, ob sie Aufgaben in Gruppen oder einzeln bearbeiten',
			'Ich verfasse verständliche und eindeutige Aufgabenstellungen',
			'Ich verweise auf Unterstützungs-möglichkeiten, Mentoring-Programme oder Studierenden-Gruppen zum Austausch',
			'Wenn Studierende einen Nachteilsausgleich haben, sorge ich für eine angemessene Umsetzung'
		]}
		{persona}
	/>

	<MainHeading heading="Weitere Informationen" />
	<ul class="more-info-list">
		<li>
			<Recommendation
				link="https://dieneuenorm.de/gesellschaft/autismus-selbstfuersorge/?mc_cid=70566efc01&mc_eid=b1d842d3fd"
			>
				<svelte:fragment slot="linkText">
					Über die Schwierigkeiten, als autistische Person Selbstfürsorge zu praktizieren
				</svelte:fragment>
				<svelte:fragment slot="textAfter">von Die Neue Form</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://ellasblog.de/wie-viele-autistinnen-und-autisten-auf-reizueberflutung-reagieren/"
			>
				<svelte:fragment slot="linkText">
					Wie viele Autistinnen und Autisten auf Reizüberflutung reagieren
				</svelte:fragment>
				<svelte:fragment slot="textAfter">von Ellas Blog</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://ellasblog.de/barrierefreiheit-fuer-autistinnen-und-autisten/">
				<svelte:fragment slot="linkText">
					Barrierefreiheit für Autistinnen und Autisten – Struktur, Reizreduzierung, Kommunikation,
					Rahmenbedingungen und mehr….
				</svelte:fragment>
				<svelte:fragment slot="textAfter">von Ellas Blog</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://www.youtube.com/watch?v=6TlLUjGmJXU">
				<svelte:fragment slot="linkText"
					>Was ist eigentlich Masking im Autismus? | InsideAut</svelte:fragment
				>
				<svelte:fragment slot="textAfter">ein Video von InsideAut</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://www.youtube.com/watch?v=-E7WqWHGsko">
				<svelte:fragment slot="linkText"
					>Das Autismus-Spektrum erklärt – So kannst du es dir vorstellen | InsideAut</svelte:fragment
				>
				<svelte:fragment slot="textAfter">ein Video von InsideAut</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://blogs.hoou.de/psychestudium/comic-ruhe-hier/">
				<svelte:fragment slot="linkText">Comic „Ruhe hier!“</svelte:fragment>
				<svelte:fragment slot="textAfter"
					>von der Hamburg Open Online University (HOOU)</svelte:fragment
				>
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://blogs.hoou.de/psychestudium/wissen-und-diagnosen/">
				<svelte:fragment slot="linkText">Wissen und Diagnosen</svelte:fragment>
				<svelte:fragment slot="textAfter"
					>von der Hamburg Open Online University (HOOU)</svelte:fragment
				>
			</Recommendation>
		</li>
	</ul>
</PersonaContent>

<style lang="scss">
	.more-info-list {
		list-style-type: none;
		padding: 0;
	}
</style>
