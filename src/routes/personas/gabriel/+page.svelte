<script lang="ts">
	import { base } from '$app/paths';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import PersonaContent from '$lib/components/PersonaContent.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import UserTest from '$lib/components/UserTest.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import PlayerExtended from '$lib/components/player/PlayerExtended.svelte';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import SimulationLink from '../../../lib/components/SimulationLink.svelte';
	import SpeechBubble from '../../../lib/components/SpeechBubble.svelte';
	import ToolCard from '../../../lib/components/ToolCard.svelte';
	import FriendBubble from '../../../lib/components/friendPersona/FriendBubble.svelte';
	import { BEA } from '../../../lib/constants/bea';
	import { GABRIEL } from '../../../lib/constants/gabriel';
	import type { Persona } from '../../../lib/interfaces/persona.interfaces';

	const persona: Persona = GABRIEL;
	const friendPersona: FriendPersona = BEA;

	const extendedPlayerConfig: ExtendedPlayerConfig = {
		title: 'Erfahrungsbericht einer Studentin mit visueller Beeinträchtigung',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/sehen.mp4',
				captionsArray: [
					{
						path: '/media/sehen-untertitel.vtt',
						lang: 'de',
						label: 'Deutsche Untertitel'
					}
				]
			}
		],
		transcripts: [
			{
				title: 'Video mit Audiodeskription',
				body: '<p>Eine Audiodeskription liegt für dieses Video nicht vor.</p>'
			},
			{
				title: 'Transkript',
				body: `<p>[Studierende läuft in das Gebäude der Hochschule]</p>
<p>Also, ich komme sehr gut zurecht.
Die Räume sind gut ausgeschildert, einmal vergrößert, aber auch in Braille-Form
...bis auf die Treppen, wenn sie nicht markiert sind. Einfach, weil ich den Anfang nicht unbedingt erkenne, das Ende sehe ich nicht unbedingt und die Treppen verschwimmen so ein bisschen wie so ein Wasserfall ineinander.</p>

<p>[Studierende sitzt in einem Vorlesungssaal in einer Tischreihe]</p>
<p>Wenn Dozierende mich unterstützen möchten, dann würde es mir sehr helfen,
wenn sie mich ansprechen, da ich einfach nur die Blickrichtung erkennen kann.
Aber ich kann nicht erkennen, wen die Dozenten quasi gerade anschauen. 
Und dadurch würde es mir sehr viel helfen, wenn sie einfach meinen Namen nennen.</p>

<p>In der Vorlesung komme ich an sich super zurecht. Wenn ich die Vorlesungen vorab habe, dann brauche ich keine Hilfe.
Was mir aber in der Vorlesung viel bringt, wenn z.B. Diagramme sind,
dass der Dozent oder die Dozentin eben mitspricht, was gerade zu sehen ist, 
worauf der Fokus gerade liegt, da ich einfach auch Aspekte nicht unbedingt in Diagrammen oder in Videos erkenne.</p>

<p>Was ich brauche, ist, dass die Vorlesung vorher hochgeladen wird, bzw. die PowerPoint-Präsentation.
Also wenn ich, z.B. hier hinten sitze, dann kann ich die PowerPoint vorne gar nicht erkennen.
[Verschwommene Ansicht auf Folien am Kopfende des Vorlesungssaals, dann Sicht auf Folien auf einem Laptop-Bildschirm]
Wenn ich die Folien vorab bekommen habe, dann kann ich sie mir vergrößern, kann sie mir so zugänglich machen,
dass ich mich auf jedem Stuhl hinsetzen kann, bei meinen Freunden sitzen kann - und eben nicht auffalle.</p>


<p>Bei Büchern ist das Problem - ich brauche es digital, da die Schrift in den Büchern mir zu klein ist.
Da ist es gut, wenn die Scans klar sind, wenn sie gerade sind, die Kontraste gut erhöht sind.
[Sicht auf Negativbeispiele von unscharf und schräg gescannten Bücherseiten]
Das hilft mir sehr. Und um Dozierende zu unterstützen, gibt es auch den Umsetzungsdienst.
Der ist zwar primär für die Studierenden, aber wenn Dozent*innen zu dem Umsetzungsdienst kommen, helfen wir da gerne.</p>

<p>[Studierende ist in der Bibliothek an einem Scanner und drückt auf den "OCR"-Knopf]<p/>
<p>Es gibt in der Bibliothek auch gute Anleitungen, z.B. die Scanner haben auch eine OCR Software.
Das bedeutet eine Texterkennungs-Software. Damit ist schon viel gemacht, einfach damit die auditive Zugänglichkeit gesichert ist.</p>

<p>[Studierende sitzt an einem Schreibtisch vor einem Bildschirm]</p>
<p>Und das Beste ist, dass es mir sogar auch digital hilft. Denn dann muss ich nicht so rangehen [bewegt das Gesicht nahe an die Kamera].</p>
`
			}
		]
	};
</script>

<svelte:head>
	<title>Gabriel - BlindDate</title>

	<!-- Primary Meta Tags -->
	<!-- <meta name="title" content="Gabriel - Blindate" />
	<meta
		name="description"
		content="Gabriel zeigt dir, wie man eine Vorlesung barrierefreier für Menschen mit visuellen Einschränkungen gestalten kann."
	/>
	<meta
		name="keywords"
		content="Barrierefreiheit, Inklusion, Vorlesung, Unterricht, Screenreader"
	/> -->

	<!-- Open Graph / Facebook -->
	<!-- <meta property="og:type" content="website" />
	<meta property="og:url" content={document.URL} />
	<meta property="og:title" content="Gabriel - Blindate" />
	<meta property="og:site_name" content="Blinddate" />
	<meta
		property="og:description"
		content="Gabriel zeigt dir, wie man eine Vorlesung barrierefreier für Menschen mit visuellen Einschränkungen gestalten kann."
	/>

	<meta
		property="og:image"
		content="https://shuffle.pages.mi.hdm-stuttgart.de/blinddate/personas/gabriel/gabriel-teaser.png"
	/> -->

	<!-- Twitter -->
	<!-- <meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={document.URL} />
	<meta property="twitter:title" content="Gabriel - Blindate" />
	<meta
		property="twitter:description"
		content="Gabriel zeigt dir, wie man eine Vorlesung barrierefreier für Menschen mit visuellen Einschränkungen gestalten kann."
	/>
	<meta
		property="twitter:image"
		content="https://shuffle.pages.mi.hdm-stuttgart.de/blinddate/personas/gabriel/gabriel-teaser.png"
	/> -->
</svelte:head>

<PersonaContent {persona}>
	<svelte:fragment slot="content">
		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_01.mp3'}>
			Hallo, ich bin Gabriel. Ich bin 27 Jahre alt und studiere Soziale Arbeit im Master. Seit zwei
			Jahren lebe ich alleine in einer Wohnung mit meinem Kater Henry. Ich spiele Klavier und übe
			dafür auch regelmäßig. Und wenn ich gerade keine <span lang="en">True-Crime</span> Podcasts höre
			oder Henry füttere, dann treffe ich mich mit meinen Freunden. Nachdem ich in der Grundschule Probleme
			bekommen habe, Dinge in meinem Gesichtsfeld, die nicht direkt vor mir standen, wahrzunehmen und
			ich ständig aus Versehen Gegenstände vom Tisch geworfen habe, wurde bei mir „Grüner Star“, also
			ein Glaukom, diagnostiziert. Dinge am Rande meines Gesichtsfeldes sehe ich also nicht. Und Kontraste
			kann ich auch nicht gut erkennen. Häufig sieht man mich mit meiner Sonnenbrille, da meine Augen
			sehr empfindlich gegen Blendung sind.
		</SpeechBubble>

		<Recommendation
			link="https://www.woche-des-sehens.de/infothek/filme/die-simulationsfilme-der-woche-des-sehens/"
		>
			<svelte:fragment slot="linkText"
				>Fünf Filme zeigen die Welt mit Sehbehinderung</svelte:fragment
			>
			<svelte:fragment slot="textAfter">von der Woche des Sehens</svelte:fragment>
		</Recommendation>

		<h2 class="main-heading" id="tools">Technologien und Strategien</h2>
		<div style="overflow:hidden;">
			<ToolCard title="Hardware" image="{base}/tools/tablet.svg">
				Zum Arbeiten mit Texten, für Recherchen und um aufgenommene Veranstaltungen erneut
				anzusehen, nutzen viele Studierende ein Tablet. Es bietet die Freiheit, Texte zu vergrößern
				oder den Kontrast zu erhöhen und ermöglicht ein flexibles Arbeiten auch unterwegs.
				Zusätzlich können große Bildschirme und ein gut beleuchteter Arbeitsplatz ohne blendende
				Lampen sehr hilfreich sein, um die vorhandene Sehfähigkeit bestens nutzen zu können. Tablets
				und Laptops mit neuster Software sind dabei hilfreich, jedoch können sich das nicht alle
				Studierende leisten. Ist das
				<InfoBox
					term="Gesichtsfeld"
					definition="Das Gesichtsfeld ist der Bereich, der wahrgenommen wird, wenn der Blick geradeaus gerichtet ist und die Augen nicht bewegt werden."
				/>
				eingeschränkt oder erschwert ein Nystagmus (Augenzittern) das Fokussieren des Geschriebenen,
				kann ein Orientieren im Text zudem mehr Zeit in Anspruch nehmen.
			</ToolCard>
			<ToolCard title="Screenreader" langTitle="en" image="{base}/tools/screenreader.svg">
				Sowohl zur Orientierung, als auch um eine langsamere Lesegeschwindigkeit auszugleichen,
				nutzen Studierende mit einer visuellen Einschränkung häufig einen sogenannten
				<InfoBox
					langTerm="en"
					term="Screenreader"
					definition="Ein Screenreader ist ein Hilfsmittel, das alle digitalen Informationen einer Webseite oder eines Dokuments erfasst. Diese Informationen können in Textform oder auch als Beschriftungen oder Navigationselemente eines Menüs vorliegen. Eine Computerstimme liest diese Informationen dann vor und/oder gibt sie als Brailleschrift an der am Computer angeschlossenen Braillezeile aus. So können alle visuellen Elemente für Menschen mit Sehbeeinträchtigungen zugänglich gemacht werden. 
				Wichtig dafür ist, dass Bilder Beschreibungen und Alternativtexte enthalten, die vorgelesen werden können. Außerdem müssen Programme, Dokumente und Webseiten barrierefrei erstellt werden, um die Inhalte in einer logischen Reihenfolge entnehmen zu können."
					sources={[
						{
							title: 'Braillezeile & Screenreader von der Stiftung barrierefrei kommunizieren',
							url: 'https://www.stiftung-barrierefrei-kommunizieren.de/unsere-arbeit/erlebnisparcours/braillezeile-screenreader'
						}
					]}
				/>. Das Programm liest alle Inhalte vor und gibt die Struktur – bspw. Überschriften oder
				Menüs – wieder. Leider sind nicht alle Websites oder PDFs barrierefrei und können nicht oder
				nur fehlerhaft durch den <span lang="en">Screenreader</span> ausgelesen werden.
			</ToolCard>
		</div>

		<FriendBubble {friendPersona}>
			Hi, ich bin Bea. Ich kenne Gabriel seit Beginn des Studiums. Wir unterstützen uns gegenseitig
			bei unterschiedlichen Themen. Ich bin blind und nutze dementsprechend zwar teilweise andere
			Techniken und Strategien als Gabriel, aber das Abbauen von Barrieren geht gemeinsam doch
			einfacher!
		</FriendBubble>

		<FriendBubble>
			Beispielsweise kann ich den Cursor der Maus auf dem Desktop natürlich nicht sehen. Daher nutze
			ich Tastenkombinationen und insbesondere die Tabulatortaste – das ist die Tab-Taste mit den
			beiden Pfeilen in unterschiedliche Richtungen am linken Rand der Tastatur. Ich benutze also
			die Tastatur in Kombi mit dem <span lang="en">Screenreader</span>, um auf dem Laptop zu
			navigieren. Als Ausgabe nutze ich auch mal gerne die Braillezeile, anstatt immer nur per
			Audio.
		</FriendBubble>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_02.mp3'}>
			Ich kann zwar teilweise noch sehen, aber mein Gesichtsfeld ist seitlich eingeschränkt, also
			ist es für mich schwieriger, einen schnellen Überblick über Websites oder Dokumente zu
			gewinnen. Deswegen nutze ich Kopfbewegungen, um mein Gesichtsfeld zu bewegen und mich so zu
			orientieren. Sieht komisch aus, hilft mir aber sehr!
		</SpeechBubble>

		<h2 class="main-heading" id="lectures">Lehrveranstaltungen</h2>

		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Stellen Dozierende die Lernmaterialien oder Vorlesungsunterlagen frühzeitig online zur
				Verfügung, haben Studierende die Möglichkeit, diese auf ihrem Tablet oder Laptop zu öffnen,
				sich einen Überblick zu verschaffen und ggf. Kontraste und Größe individuell anzupassen.
			</p>
		</div>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_03.mp3'}>
			Habe ich die Vorlesungsunterlagen bereits vor der Vorlesung, kann ich sie im Vorfeld für mich
			anpassen und der Veranstaltung dann besser folgen. Außerdem kann ich dann selbst entscheiden,
			wo ich mich mit meinen Freunden und Freundinnen hinsetzen möchte. Ich muss dann nicht in der
			ersten Reihe sitzen, um etwas erkennen zu können.
		</SpeechBubble>
		<FriendBubble {friendPersona}>
			Es gibt ein paar Kniffe, die man bei der Erstellung von Dokumenten beachten kann, die nicht
			lange dauern und mir das Arbeiten damit extrem erleichtern. Dokumente immer wieder selbst
			bearbeiten zu müssen oder von meiner Assistenz umwandeln zu lassen, kostet Zeit und Nerven.
		</FriendBubble>

		<Recommendation
			link="https://support.microsoft.com/de-de/office/gestalten-barrierefreier-word-dokumente-f%C3%BCr-personen-mit-behinderungen-d9bf3683-87ac-47ea-b91a-78dcacb3c66d"
		>
			<svelte:fragment slot="linkText"
				>Gestalten barrierefreier Word-Dokumente für Personen mit Behinderungen</svelte:fragment
			>
			<svelte:fragment slot="textAfter">von Microsoft</svelte:fragment>
		</Recommendation>

		<Recommendation
			link="https://support.microsoft.com/de-de/office/gestalten-barrierefreier-powerpoint-pr%C3%A4sentationen-f%C3%BCr-personen-mit-behinderungen-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25"
		>
			<svelte:fragment slot="linkText"
				>Gestalten barrierefreier PowerPoint-Präsentationen für Personen mit Behinderungen</svelte:fragment
			>
			<svelte:fragment slot="textAfter">von Microsoft</svelte:fragment>
		</Recommendation>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Sind die Veranstaltungsunterlagen in ihrer Grundstruktur immer gleich aufgebaut, erleichtert
				das den Studierenden eine schnellere Orientierung und Bearbeitung.
			</p>
		</div>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_04.mp3'}>
			Ich habe im Folgenden mal ein Beispiel vorbereitet, wie eine Herausforderung in meinem
			Studienalltag so aussehen kann. Die Simulation des Glaukoms ist natürlich nicht ganz
			realistisch, aber seine Auswirkungen auf mein Studium kann ich dir so, denke ich, besser
			verständlich machen.
		</SpeechBubble>

		<div>
			<SimulationLink
				image="{base}/personas/gabriel/gabriel-explaining-circle.svg"
				warningtext="Mobile Geräte werden nicht unterstützt. Die Simulation ist leider nicht barrierefrei, siehe 'Informationen zur Simulation'."
				pathtext={base + '/games/gabriel'}
			/>
		</div>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_05.mp3'}>
			Eine einheitliche Gestaltung, eine klare Struktur und nicht überfrachtete Folien helfen mir
			und auch meinen Mitstudierenden in der Orientierung sehr. So weiß ich beispielsweise, dass ich
			rechts unten immer den roten Infokasten finde und verliere nicht so viel Zeit mit Suchen.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Für Diagramme oder Bilder, die in Lehrveranstaltungen genutzt werden, sind Alternativtexte
				bzw. Bildbeschreibungen, die Screenreader vorlesen können, essentiell wichtig. Wenn die
				Lehrperson zusätzlich beschreibt, was auf der Abbildung zu sehen ist und die Beschriftung
				einzelner Elemente zusätzlich als Text vorhanden ist, können die inhaltlichen Informationen
				schneller entnommen werden.
			</p>

			<p class="no-component-text">
				In online Video-Konferenzen sollten Bedingungen geschaffen werden, die den Studierenden eine
				Teilnahme und Konzentration auf die Inhalte erleichtern: Teilnehmende sollten nicht direkt
				vor einem Fenster stehen oder in diesem Fall Vorhänge benutzen. Ein einfarbiger Hintergrund
				ohne Motive und eine gute Beleuchtung des Raumes erleichtern das Erkennen der Gesichter.
			</p>
		</div>

		<h2 class="main-heading" id="material">Lernmaterial</h2>
		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Damit ein Screenreader ein Dokument vorlesen kann, muss der Scan eine gute Qualität haben –
				das heißt beispielsweise: keine mitgescannten Finger, scharfe Umrisse, keine Doppelseiten.
			</p>
		</div>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_06.mp3'}>
			Leider sind die Scans, die wir von Lehrpersonen bekommen, um uns auf kommende Veranstaltungen
			vorzubereiten, häufig sehr unscharf. Manchmal muss ich dann in die Bücherei gehen, um die
			Texte erneut einzuscannen. Wenn ich die Quelle nicht finde, muss ich die Lehrperson fragen, ob
			sie das Dokument erneut einscannen kann. Beides kostet Zeit und ist auch einfach vermeidbar.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Generell gibt es ein paar einfache Tricks, um Dokumente für viele Studierende zugänglich und
				dadurch barrierefreier zu gestalten. Transkripte der aufgenommenen Veranstaltungen helfen,
				um im individuellen Tempo die Inhalte vor- oder nachzubereiten. Auch mit den nötigen
				Anpassungen – bspw. in Kontrast und Größe – sollte man nicht außer Acht lassen, dass das
				visuelle Arbeiten für Studierende mit Sehbeeinträchtigungen mit viel Anstrengung verbunden
				sein kann und regelmäßige Pause benötigt.
			</p>
		</div>

		<PlayerExtended {extendedPlayerConfig} />

		<h2 class="main-heading" id="interaction">Interaktion und Kommunikation</h2>
		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				In Video-Konferenzen können Studierende mit Sehbeeinträchtigung aufgrund der
				Sehbeeinträchtigung und der kleinen Kacheln die Mimik und Gestik der Sprechenden unter
				Umständen nicht gut oder gar nicht wahrnehmen. Einige nonverbale Kommunikationselemente
				können dadurch verloren gehen. Ein direktes Ansprechen der Personen und eine Verbalisierung
				der Geschehnisse kann daher sowohl in online Settings, als auch in Präsenz sehr hilfreich
				sein.
			</p>
		</div>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_07.mp3'}>
			Wenn ich meinen benötigten Abstand zum Bildschirm einnehme, ist mein Gesicht in extremer
			Nahaufnahme zu sehen, was mir meist eher unangenehm ist. Ich habe also folgende Optionen: Ich
			kann nichts oder nur schlecht sehen. Ich kann die Nahaufnahme meiner Nase zeigen. Oder ich
			schalte die Kamera aus und und bekomme doofe Kommentare.
		</SpeechBubble>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_08.mp3'}>
			Ich habe eine Dozentin, die uns immer direkt mit unseren Namen anspricht, wenn sie eine Frage
			stellt. So weiß ich sofort, dass sie mit mir spricht. Das ist für mich sehr hilfreich.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Werden gewisse Dinge, wie frühzeitiges Bereitstellen der Veranstaltungsfolien, klar
				eingescannte Dokumente oder eingefügte Bildbeschreibungen, vor einer Veranstaltung bedacht,
				erspart dies ein erneutes Erinnern von Seiten der Studierenden.
			</p>
		</div>

		<FriendBubble {friendPersona}>
			Ich nehme zu Beginn jedes Semesters Kontakt mit den Lehrpersonen auf und versuche, zu
			erklären, wie ich arbeite und was ich benötige. Häufig muss ich während des Semesters erneut
			dran erinnern, weil Dokumente nicht frühzeitig zum Bearbeiten da sind etc. Ich weiß, Gabriel
			ist es Leid, immer wieder zu erinnern. Aber es hilft ja nichts. Ich bleibe da hintendran.
		</FriendBubble>

		<h2 class="main-heading" id="exams">Prüfungen</h2>
		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Auch für Prüfungen haben Studierende mit visuellen Beeinträchtigungen einen Anspruch auf
				einen Nachteilsausgleich. Dieser soll gewährleisten, dass sie die gleichen Voraussetzungen
				zum inhaltlichen Bearbeiten der Aufgaben haben, wie ihre Mitstudierenden. Wird
				beispielsweise mehr Zeit benötigt, um einen Überblick über Dokumente zu erlangen, da ein
				„Überfliegen“ des Textes nicht möglich ist und ist zusätzlich die Lesegeschwindigkeit
				beeinträchtigt, können individuelle Zeitzugaben Teil eines Nachteilsausgleichs sein.
				Außerdem sollte gewährleistet sein, dass Bildern eine entsprechende Beschreibung bzw. ein
				Alternativtext beigefügt wird.
			</p>
		</div>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_09.mp3'}>
			Im letzten Semester habe ich eine Prüfung geschrieben, die leider keine Bildbeschreibungen
			enthielt. Es hat mich daher sehr viel Zeit gekostet, die Aufgaben dazu zu bearbeiten und diese
			Zeit hat mir dann bei anderen Aufgaben gefehlt.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Sind diese Vorkehrungen nicht gegeben und wird beispielsweise ein noch unbekanntes Programm
				für die Bearbeitung einer Prüfung verwendet, kann das den bereits vorhandenen Prüfungsstress
				erhöhen und dafür sorgen, dass Studierende an der Prüfung nicht oder nur mit deutlichen
				Nachteilen teilnehmen können.
			</p>
		</div>

		<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/sb_10.mp3'}>
			Wenn ich Prüfungen online schreibe und neue Programme dafür verwendet werden, hilft es mir,
			Probe-Prüfungen zu schreiben, um das Programm und das Vorgehen ohne Druck kennenzulernen.
		</SpeechBubble>

		<h2 class="main-heading" id="tips">Tipps zur Unterstützung</h2>

		<p class="no-component-text">
			Hier ist eine Auflistung von schnellen und einfachen Tipps, wie Sie Gabriel und viele weitere
			Menschen unterstützen können.
		</p>

		<Checklist
			checks={[
				'Ich informiere mich über digitale Barrierefreiheit',
				'Ich stelle meine Lernmaterialien und Foliensätze vorab und digital zur Verfügung',
				'Ich verwende das Mehrsinne-Prinzip, sodass alle Materialien über unterschiedliche Sinne erfahrbar sind. Ein Text kann gelesen oder mithilfe eines Screenreaders gehört werden, gesprochene Texte haben Untertitel oder ein Transkript.',
				'Ich beschreibe Bilder und Grafiken und erstelle Alternativtexte',
				'Ich überprüfe die Barrierefreiheit meiner Dokumente mit den eingebauten Prüfhilfen (z.B. in MS Office oder LibreOffice)',
				'Ich zeichne meine Vorlesungen auf oder gestatte eine Aufzeichnung',
				'Ich achte darauf, dass Scans von Dokumenten qualitativ hochwertig und mit einer OCR Software (Texterkennungssoftware) aufgenommen sind',
				'Wenn Studierende einen Nachteilsausgleich haben, bemühe ich mich um eine faire Umsetzung'
			]}
			{persona}
		/>

		<h2 class="main-heading" id="more-info">Weitere Informationen</h2>

		<ul class="more-info-list">
			<li>
				<Recommendation link="https://www.dbsv.org/gruener-star-glaukom.html">
					<svelte:fragment slot="linkText">
						Deutscher Blinden und Sehbehinderten Verband
					</svelte:fragment>
				</Recommendation>
			</li>
			<li>
				<Recommendation link="http://www.glaukom.de/">
					<svelte:fragment slot="linkText">Glaukom</svelte:fragment>
					<svelte:fragment slot="textAfter"
						>vom Initiativkreis zur Glaukom Früherkennung</svelte:fragment
					>
				</Recommendation>
			</li>
			<li>
				<Recommendation
					link="https://www.woche-des-sehens.de/infothek/filme/die-simulationsfilme-der-woche-des-sehens/"
				>
					<svelte:fragment slot="linkText">
						Fünf Filme zeigen die Welt mit Sehbehinderung
					</svelte:fragment>
					<svelte:fragment slot="textAfter">von der Woche des Sehens</svelte:fragment>
				</Recommendation>
			</li>
		</ul>

		<!-- usertest -->
		<div class="user-test">
			<UserTest />
		</div>
	</svelte:fragment>
</PersonaContent>

<style lang="scss">
	.more-info-list {
		list-style-type: none;
		margin-left: -2rem;
	}

	.user-test {
		background-color: var(--color-black);
		margin-top: 5rem;
		margin-inline: 3.66rem;
		padding: 2rem 1rem;
		border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
