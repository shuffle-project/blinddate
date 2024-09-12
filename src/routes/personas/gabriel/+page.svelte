<script lang="ts">
	import { base } from '$app/paths';
	import BackgroundInfo from '$lib/components/BackgroundInfo.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import PersonaContent from '$lib/components/personaContent/PersonaContent.svelte';
	import PlayerExtended from '$lib/components/player/PlayerExtended.svelte';
	import { SEHEN_TRANSKRIPT } from '$lib/constants/transcripts';
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
				poster: '/media/sehen-preview-image.jpg',
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
				body: '<p>Eine Audiodeskription liegt für dieses Video nicht vor. Das Bildgeschehen ist für das Verständnis nicht erforderlich. Falls Sie denoch einen Eindruck vom Bildgeschehen haben möchten, empfehlen wir das Transkript. </p>'
			},
			{
				title: 'Transkript',
				body: SEHEN_TRANSKRIPT
			}
		]
	};
</script>

<PersonaContent {persona} let:MainHeading let:TextSection>
	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-01.mp3'}>
		Hallo, ich bin Gabriel. Ich bin 27 Jahre alt und studiere Soziale Arbeit im Master. Seit zwei
		Jahren lebe ich alleine in einer Wohnung mit meinem Kater Henry. Ich spiele Klavier und übe
		dafür auch regelmäßig. Und wenn ich gerade keine <span lang="en">True-Crime</span> Podcasts höre
		oder Henry füttere, dann treffe ich mich mit meinen Freunden. Nachdem ich in der Grundschule Probleme
		bekommen habe, Dinge in meinem Gesichtsfeld, die nicht direkt vor mir standen, wahrzunehmen und ich
		ständig aus Versehen Gegenstände vom Tisch geworfen habe, wurde bei mir „Grüner Star“, also ein Glaukom,
		diagnostiziert. Dinge am Rande meines Gesichtsfeldes sehe ich also nicht. Und Kontraste kann ich
		auch nicht gut erkennen. Häufig sieht man mich mit meiner Sonnenbrille, da meine Augen sehr empfindlich
		gegen Blendung sind.
	</SpeechBubble>

	<Recommendation
		link="https://www.woche-des-sehens.de/infothek/filme/die-simulationsfilme-der-woche-des-sehens/"
	>
		<svelte:fragment slot="linkText">Fünf Filme zeigen die Welt mit Sehbehinderung</svelte:fragment>
		<svelte:fragment slot="textAfter">von der Woche des Sehens</svelte:fragment>
	</Recommendation>

	<MainHeading heading="Technologien und Strategien" />
	<div style="overflow:hidden;">
		<ToolCard title="Hardware" image="{base}/tools/tablet.svg">
			<span
				>Zum Arbeiten mit Texten, für Recherchen und um aufgenommene Veranstaltungen erneut
				anzusehen, nutzen viele Studierende ein Tablet. Es bietet die Freiheit, Texte zu vergrößern
				oder den Kontrast zu erhöhen und ermöglicht ein flexibles Arbeiten auch unterwegs.
				Zusätzlich können große Bildschirme und ein gut beleuchteter Arbeitsplatz ohne blendende
				Lampen sehr hilfreich sein, um die vorhandene Sehfähigkeit bestens nutzen zu können. Tablets
				und Laptops mit neuster Software sind dabei hilfreich, jedoch können sich das nicht alle
				Studierende leisten. Ist das
			</span>
			<InfoBox term="Gesichtsfeld">
				<p>
					Das <strong>Gesichtsfeld</strong> ist der Bereich, der wahrgenommen wird, wenn der Blick geradeaus
					gerichtet ist und die Augen nicht bewegt werden.
				</p>
			</InfoBox>
			<span class="toolcard-span">
				eingeschränkt oder erschwert ein Nystagmus (Augenzittern) das Fokussieren des Geschriebenen,
				kann ein Orientieren im Text zudem mehr Zeit in Anspruch nehmen.
			</span>
		</ToolCard>
		<ToolCard title="Screenreader" langTitle="en" image="{base}/tools/screenreader.svg">
			<span>
				Sowohl zur Orientierung, als auch um eine langsamere Lesegeschwindigkeit auszugleichen,
				nutzen Studierende mit einer visuellen Einschränkung häufig einen sogenannten
			</span>
			<InfoBox
				langTerm="en"
				term="Screenreader"
				sources={[
					{
						title: 'Braillezeile & Screenreader von der Stiftung barrierefrei kommunizieren',
						url: 'https://www.stiftung-barrierefrei-kommunizieren.de/unsere-arbeit/erlebnisparcours/braillezeile-screenreader'
					},
					{
						title: 'Apple - VoiceOver (Screenreader) Demonstration (YouTube)',
						url: 'https://www.youtube.com/watch?v=75jv96fVGfg'
					}
				]}
			>
				<p>
					Ein <b lang="en">Screenreader</b> ist ein Hilfsmittel, das alle digitalen Informationen einer
					Webseite oder eines Dokuments erfasst. Diese Informationen können in Textform oder auch als
					Beschriftungen oder Navigationselemente eines Menüs vorliegen. Eine Computerstimme liest diese
					Informationen dann vor und/oder gibt sie als Brailleschrift an der am Computer angeschlossenen
					Braillezeile aus. So können alle visuellen Elemente für Menschen mit Sehbeeinträchtigungen
					zugänglich gemacht werden. Wichtig dafür ist, dass Bilder Beschreibungen und Alternativtexte
					enthalten, die vorgelesen werden können. Außerdem müssen Programme, Dokumente und Webseiten
					barrierefrei erstellt werden, um die Inhalte in einer logischen Reihenfolge entnehmen zu können.
				</p>
			</InfoBox>.
			<span class="toolcard-span">
				Das Programm liest alle Inhalte vor und gibt die Struktur – bspw. Überschriften oder Menüs –
				wieder. Leider sind nicht alle Websites oder PDFs barrierefrei und können nicht oder nur
				fehlerhaft durch den <span lang="en">Screenreader</span> ausgelesen werden.
			</span></ToolCard
		>
	</div>

	<FriendBubble {friendPersona}>
		Hi, ich bin Bea. Ich kenne Gabriel seit Beginn des Studiums. Wir unterstützen uns gegenseitig
		bei unterschiedlichen Themen. Ich bin blind und nutze dementsprechend zwar teilweise andere
		Techniken und Strategien als Gabriel, aber das Abbauen von Barrieren geht gemeinsam doch
		einfacher!
	</FriendBubble>

	<FriendBubble {friendPersona} hidePersonaCard>
		Beispielsweise kann ich den Cursor der Maus auf dem Desktop natürlich nicht sehen. Daher nutze
		ich Tastenkombinationen und insbesondere die Tabulatortaste – das ist die Tab-Taste mit den
		beiden Pfeilen in unterschiedliche Richtungen am linken Rand der Tastatur. Ich benutze also die
		Tastatur in Kombi mit dem <span lang="en">Screenreader</span>, um auf dem Laptop zu navigieren.
		Als Ausgabe nutze ich auch mal gerne die Braillezeile, anstatt immer nur per Audio.
	</FriendBubble>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-02.mp3'}>
		Ich kann zwar teilweise noch sehen, aber mein Gesichtsfeld ist seitlich eingeschränkt, also ist
		es für mich schwieriger, einen schnellen Überblick über Websites oder Dokumente zu gewinnen.
		Deswegen nutze ich Kopfbewegungen, um mein Gesichtsfeld zu bewegen und mich so zu orientieren.
		Sieht komisch aus, hilft mir aber sehr!
	</SpeechBubble>

	<BackgroundInfo content="keyboard" />

	<MainHeading heading="Lehrveranstaltungen" />

	<TextSection let:Text>
		<Text noTopMargin>
			Stellen Dozierende die Lernmaterialien oder Vorlesungsunterlagen frühzeitig online zur
			Verfügung, haben Studierende die Möglichkeit, diese auf ihrem Tablet oder Laptop zu öffnen,
			sich einen Überblick zu verschaffen und ggf. Kontraste und Größe individuell anzupassen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-03.mp3'}>
		Habe ich die Vorlesungsunterlagen bereits vor der Vorlesung, kann ich sie im Vorfeld für mich
		anpassen und der Veranstaltung dann besser folgen. Außerdem kann ich dann selbst entscheiden, wo
		ich mich mit meinen Freunden und Freundinnen hinsetzen möchte. Ich muss dann nicht in der ersten
		Reihe sitzen, um etwas erkennen zu können.
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
		marginBottom
	>
		<svelte:fragment slot="linkText"
			>Gestalten barrierefreier PowerPoint-Präsentationen für Personen mit Behinderungen</svelte:fragment
		>
		<svelte:fragment slot="textAfter">von Microsoft</svelte:fragment>
	</Recommendation>

	<TextSection let:Text>
		<Text>
			Sind die Veranstaltungsunterlagen in ihrer Grundstruktur immer gleich aufgebaut, erleichtert
			das den Studierenden eine schnellere Orientierung und Bearbeitung.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-04.mp3'}>
		Ich habe im Folgenden mal ein Beispiel vorbereitet, wie eine Herausforderung in meinem
		Studienalltag so aussehen kann. Die Simulation des Glaukoms ist natürlich nicht ganz
		realistisch, aber seine Auswirkungen auf mein Studium kann ich dir so, denke ich, besser
		verständlich machen.
	</SpeechBubble>

	<SimulationLink
		image="{base}/personas/gabriel/gabriel-explaining-circle.svg"
		pathtext={base + '/iframe/gabriel'}
		personaID={persona.id}
	/>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-05.mp3'}>
		Eine einheitliche Gestaltung, eine klare Struktur und nicht überfrachtete Folien helfen mir und
		auch meinen Mitstudierenden in der Orientierung sehr. So weiß ich beispielsweise, dass ich
		rechts unten immer den roten Infokasten finde und verliere nicht so viel Zeit mit Suchen.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Für Diagramme oder Bilder, die in Lehrveranstaltungen genutzt werden, sind Alternativtexte
			bzw. Bildbeschreibungen, die Screenreader vorlesen können, essentiell wichtig. Lehrpersonen
			sollten zusätzlich beschreiben, was auf der Abbildung zu sehen ist. Die Beschriftung einzelner
			Elemente innerhalb einer Abbildung sollte als Text vorhanden sein, dass die inhaltlichen
			Informationen schneller entnommen werden.
		</Text>
		<Text>
			In online Video-Konferenzen sollten Bedingungen geschaffen werden, die den Studierenden eine
			Teilnahme und Konzentration auf die Inhalte erleichtern: Teilnehmende sollten nicht direkt vor
			einem Fenster stehen oder in diesem Fall Vorhänge benutzen. Ein einfarbiger Hintergrund ohne
			Motive und eine gute Beleuchtung des Raumes erleichtern das Erkennen der Gesichter.
		</Text>
	</TextSection>

	<MainHeading heading="Lernmaterial" />
	<TextSection let:Text>
		<Text noTopMargin>
			Damit ein Screenreader ein Dokument vorlesen kann, muss der Scan eine gute Qualität haben –
			das heißt beispielsweise: keine mitgescannten Finger, scharfe Umrisse, keine Doppelseiten und
			vor allem kein Abspeichern als Bilddatei, sondern Nutzen einer Texterkennungssoftware (OCR).
			<a class="focus-indicator" href={base + '/wichtige-begriffe/#ocr'}
				>Mehr Informationen zu OCR</a
			>
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-06.mp3'}>
		Leider sind die Scans, die wir von Lehrpersonen bekommen, um uns auf kommende Veranstaltungen
		vorzubereiten, häufig sehr unscharf. Manchmal muss ich dann in die Bücherei gehen, um die Texte
		erneut einzuscannen. Wenn ich die Quelle nicht finde, muss ich die Lehrperson fragen, ob sie das
		Dokument erneut einscannen kann. Beides kostet Zeit und ist auch einfach vermeidbar.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Generell gibt es ein paar einfache Tricks, um Dokumente für viele Studierende zugänglich und
			dadurch barrierefrei zu gestalten. Transkripte der aufgenommenen Veranstaltungen sind wichtig,
			um im individuellen Tempo die Inhalte vor- oder nachbereiten zu können. Auch mit den nötigen
			Anpassungen – bspw. in Kontrast und Größe – sollte man nicht außer Acht lassen, dass das
			visuelle Arbeiten für Studierende mit Sehbeeinträchtigungen mit viel Anstrengung verbunden
			sein kann und regelmäßige Pause benötigt.
		</Text>
	</TextSection>

	<PlayerExtended {extendedPlayerConfig} />

	<MainHeading heading="Interaktion und Kommunikation" />

	<TextSection let:Text>
		<Text noTopMargin>
			In Video-Konferenzen können Studierende mit Sehbeeinträchtigung aufgrund der
			Sehbeeinträchtigung und der kleinen Kacheln die Mimik und Gestik der Sprechenden unter
			Umständen nicht gut oder gar nicht wahrnehmen. Einige nonverbale Kommunikationselemente können
			dadurch verloren gehen. Ein direktes Ansprechen der Personen und eine Verbalisierung der
			Geschehnisse sollte daher sowohl in online Settings, als auch in Präsenz ein
			selbstverständliches Kommunikationselement sein.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-07.mp3'}>
		Wenn ich meinen benötigten Abstand zum Bildschirm einnehme, ist mein Gesicht in extremer
		Nahaufnahme zu sehen, was mir meist eher unangenehm ist. Ich habe also folgende Optionen: Ich
		kann nichts oder nur schlecht sehen. Ich kann die Nahaufnahme meiner Nase zeigen. Oder ich
		schalte die Kamera aus und und bekomme doofe Kommentare.
	</SpeechBubble>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-08.mp3'}>
		Ich habe eine Dozentin, die uns immer direkt mit unseren Namen anspricht, wenn sie eine Frage
		stellt. So weiß ich sofort, dass sie mit mir spricht. Das ist für mich sehr hilfreich.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Das frühzeitige Bereitstellen der Veranstaltungsfolien, klar eingescannte Dokumente oder
			eingefügte Bildbeschreibungen, sind Maßnahmen, die für eine barrierefreie Lehre unumgänglich
			sind.
		</Text>
	</TextSection>

	<FriendBubble {friendPersona}>
		Ich nehme zu Beginn jedes Semesters Kontakt mit den Lehrpersonen auf und versuche, zu erklären,
		wie ich arbeite und was ich benötige. Häufig muss ich während des Semesters erneut dran
		erinnern, weil Dokumente nicht frühzeitig zum Bearbeiten da sind etc. Ich weiß, Gabriel ist es
		Leid, immer wieder zu erinnern. Aber wir haben ja einen Anspruch auf barrierefrei zugängliches
		Material. Deshalb muss ich da ja dranbleiben.
	</FriendBubble>

	<MainHeading heading="Prüfungen" />
	<TextSection let:Text>
		<Text noTopMargin>
			Auch für Prüfungen haben Studierende mit visuellen Beeinträchtigungen einen Anspruch auf einen
			Nachteilsausgleich. Dieser muss gewährleisten, dass sie die gleichen Voraussetzungen zum
			inhaltlichen Bearbeiten der Aufgaben haben, wie ihre Mitstudierenden. Wird beispielsweise mehr
			Zeit benötigt, um einen Überblick über Dokumente zu erlangen, da ein „Überfliegen“ des Textes
			nicht möglich ist und ist zusätzlich die Lesegeschwindigkeit beeinträchtigt, können
			individuelle Zeitzugaben Teil eines Nachteilsausgleichs sein. Außerdem muss gewährleistet
			sein, dass Bildern eine entsprechende Beschreibung bzw. ein Alternativtext beigefügt wird.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-09.mp3'}>
		Im letzten Semester habe ich eine Prüfung geschrieben, die leider keine Bildbeschreibungen
		enthielt. Es hat mich daher sehr viel Zeit gekostet, die Aufgaben dazu zu bearbeiten und diese
		Zeit hat mir dann bei anderen Aufgaben gefehlt.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Sind diese Vorkehrungen nicht gegeben und wird beispielsweise ein noch unbekanntes Programm
			für die Bearbeitung einer Prüfung verwendet, kann das den bereits vorhandenen Prüfungsstress
			erhöhen und dafür sorgen, dass Studierende an der Prüfung nicht oder nur mit deutlichen
			Nachteilen teilnehmen können.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/gabriel/audio/gabriel-sb-10.mp3'}>
		Wenn ich Prüfungen online schreibe und neue Programme dafür verwendet werden, hilft es mir,
		Probe-Prüfungen zu schreiben, um das Programm und das Vorgehen ohne Druck kennenzulernen.
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
			'Ich stelle meine Lernmaterialien und Foliensätze vorab und digital zur Verfügung',
			'Ich verwende das Mehrsinne-Prinzip, sodass alle Materialien über unterschiedliche Sinne erfahrbar sind. Ein Text kann gelesen oder mithilfe eines Screenreaders gehört werden, gesprochene Texte haben Untertitel oder ein Transkript',
			'Ich beschreibe Bilder und Grafiken und erstelle Alternativtexte',
			'Ich überprüfe die Barrierefreiheit meiner Dokumente mit den eingebauten Prüfhilfen (z.B. in MS Office oder LibreOffice)',
			'Ich zeichne meine Vorlesungen auf oder gestatte eine Aufzeichnung',
			'Ich achte darauf, dass Scans von Dokumenten qualitativ hochwertig und mit einer OCR Software (Texterkennungssoftware) aufgenommen sind',
			'Wenn Studierende einen Nachteilsausgleich haben, sorge ich für eine angemessene Umsetzung'
		]}
		{persona}
	/>

	<MainHeading heading="Weitere Informationen" />

	<ul class="more-info-list">
		<li>
			<Recommendation link="https://www.dbsv.org/gruener-star-glaukom.html">
				<svelte:fragment slot="linkText">Grüner Star (Glaukom)</svelte:fragment>
				<svelte:fragment slot="textAfter"
					>vom Deutschen Blinden und Sehbehinderten Verband</svelte:fragment
				>
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
</PersonaContent>

<style lang="scss">
	.more-info-list {
		list-style-type: none;
		padding: 0;
	}
</style>
