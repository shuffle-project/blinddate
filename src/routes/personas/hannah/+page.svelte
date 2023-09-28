<script lang="ts">
	import { base } from '$app/paths';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import PersonaContent from '$lib/components/PersonaContent.svelte';
	import PlayerExtended from '$lib/components/player/PlayerExtended.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import SimulationLink from '$lib/components/SimulationLink.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import ToolCard from '$lib/components/ToolCard.svelte';
	import { HANNAH } from '$lib/constants/hannah';
	import { HOEREN_OFFLINE_TRANSKRIPT, HOEREN_ONLINE_TRANSKRIPT } from '$lib/constants/transcripts';
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import Checklist from '../../../lib/components/checklist/Checklist.svelte';
	import Week from '../../../lib/components/week/index.svelte';
	const persona = HANNAH;

	const extendedPlayerConfigOffline: ExtendedPlayerConfig = {
		title: 'Studierende erklären den Umgang mit Höranlagen in Präsenzveranstaltungen',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/hoeren-offline.mp4',
				poster: '/media/hoeren-offline-preview-image.png',
				captionsArray: [
					{
						path: '/media/hoeren-offline-untertitel.vtt',
						lang: 'de',
						label: 'Deutsche Untertitel'
					}
				]
			}
		],
		transcripts: [
			{
				title: 'Transkript',
				body: HOEREN_OFFLINE_TRANSKRIPT
			}
		]
	};

	const extendedPlayerConfigOnline: ExtendedPlayerConfig = {
		title: 'Studierende geben Hinweise zu online Veranstaltungen',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/hoeren-online.mp4',
				poster: '/media/hoeren-online-preview-image.png',
				captionsArray: [
					{
						path: '/media/hoeren-online-untertitel.vtt',
						lang: 'de',
						label: 'Deutsche Untertitel'
					}
				]
			}
		],
		transcripts: [
			{
				title: 'Transkript',
				body: HOEREN_ONLINE_TRANSKRIPT
			}
		]
	};
</script>

<svelte:head>
	<title>Hannah - BlindDate</title>
</svelte:head>

<PersonaContent {persona}>
	<svelte:fragment slot="content">
		<SpeechBubble {persona}>
			Hallo, ich bin Hannah. Ich bin 25 Jahre alt und studiere Mathematik auf Lehramt im Bachelor in
			Dortmund. Ich wohne gemeinsam mit meinen zwei Mitbewohnern, Till und Simon, in einer WG und
			fühle mich hier richtig wohl. Eigentlich komm ich vom Dorf, aber hier in der Stadt gefällt es
			mir besser. Da ist einfach mehr los und ich kann meine Interessen ausleben. Ich spiele
			Handball mit einer gemischten Gruppe aus Leuten mit und ohne Hörbeeinträchtigung. Wir spielen
			in einer kleinen lokalen Liga – deshalb verbringe ich jeden zweiten Sonntag in einer miefigen
			Turnhalle. Durch den Verein habe ich hier direkt Anschluss gefunden. Nach dem Training machen
			wir oft noch was zusammen, grillen, essen oder einfach abhängen. Immer montags ist abends
			Fitnessrunde im Westfalenpark. Ich bin ein Serienjunkie...ist aber ganz gut, dass ich wegen
			vielen Terminen nicht jeden Abend auf der Couch verbringen kann. Bei Serien ist mir Vieles
			wichtig – besonders aber die Qualität der Untertitel.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Ich bin nämlich von Geburt an hochgradig hörbeeinträchtigt auf beiden Ohren. Ich trage links
			ein Hörgerät und rechts ein Cochlea-Implantat...wenn ich die Haare offen trage, sieht man
			davon allerdings kaum was. Ich verwende sowohl die Lautsprache als auch die deutsche
			Gebärdensprache. Dadurch, dass ich jetzt viel mehr Kontakt mit anderen DGS-Nutzenden habe, bin
			ich viel, viel besser geworden und nutze gerade jede Gelegenheit, um zu gebärden. Irgendwie
			verbindet mich das mit Leuten. Ich fühle mich als Teil der DGS Community. Das ist cool. Im
			Alltag und an der Uni nutze ich vor allem Lautsprache.
		</SpeechBubble>

		<h2 class="main-heading" id="tools">Technologien und Strategien</h2>
		<div style="overflow:hidden;">
			<ToolCard title="Hörgeräte" image="{base}/tools/hearing-aid.svg">
				Bei einigen Hörbeeinträchtigungen können Hörgeräte eingesetzt werden. Diese verstärken
				Schallwellen und lenken sie ins Innenohr.
			</ToolCard>

			<ToolCard title="Cochlea-Implantat (CI)" image="{base}/tools/cochlea-implant.svg">
				Bei bestimmten Hörbeeinträchtigungen (z.B. einer Innenohrschwerhörigkeit) und wenn der
				Hörnerv und die Hörbahn intakt sind, kann ein
				<InfoBox
					term="Cochlea-Implantat (CI)"
					definition="Ist der Hörnerv einer Person unbeschadet, die Verstärkung der Schallwellen durch ein Hörgerät aber nicht ausreichend, kann ein elektrisches Cochlea-Implantat (CI) eingesetzt werden.
Das Implantat übernimmt dann die Funktion eines Teils des Innenohrs – der Hörschnecke (oder Cochlea). Hierbei werden die Schallwellen in elektrische Impulse umgewandelt und an den Hörnerv geleitet. 
Sichtbar ist bei einem CI das Mikrofon, der Sprachprozessor und die Sendespule, die mittels Magneten auf der Haut hinter dem Ohr platziert sind. Unter der Haut liegt die Empfangsspule, welche die elektrischen Signale an die Elektroden in der Cochlea weiterleitet. Der äußere Teil des CIs ist abnehmbar."
					sources={[
						{
							title: 'Cochlea-Impantat von HNO-Ärzte im Netz',
							url: 'https://www.hno-aerzte-im-netz.de/therapien/cochlea-implantat.html'
						}
					]}
				/>

				eingesetzt werden. Es sitzt innerhalb des Kopfes. Außen am Kopf sieht man den dazugehörigen
				Sprachprozessor, der Schallwellen in elektrische Impulse umwandelt. Der Sprachprozessor ist
				abnehmbar, zum Beispiel beim Schlafen oder Schwimmen.
			</ToolCard>

			<ToolCard title="Gebärdensprache" image="{base}/tools/sign-language.svg">
				Neben den Hörhilfen, die es ermöglichen, die Lautsprache zu verstehen, lernen manche
				Menschen mit Hörbeeinträchtigungen zusätzlich die Gebärdensprache. Diese visuelle Sprache
				besitzt eine eigene Grammatik und einen ganz anderen Satzbau – ist also eine eigenständige
				Sprache, die erlernt werden muss. Für gehörlose Menschen, die mit der Gebärdensprache als
				Muttersprache aufgewachsen sind, kann die Laut- und Schriftsprache schwer zu erlernen sein.
			</ToolCard>

			<ToolCard title="Untertitel" image="{base}/tools/subtitles.svg">
				Videos, Filme und Serien können durch automatisch generierte oder manuell hinzugefügte
				Untertitel zugänglich gemacht werden. Eine Übersetzung in Gebärdensprache ist für einige
				Personen mit Hörbeeinträchtigung ebenso wichtig.
			</ToolCard>
		</div>

		<SpeechBubble {persona}>
			Dass Gebärdensprache nur von gehörlosen Menschen genutzt wird, ist ein Irrtum. Manche
			hörbehinderte Menschen gebärden und nutzen auch die Lautsprache – sie entscheiden dann
			situationsabhängig. Und natürlich kommt es auch auf die Gesprächsperson an. Leider ist es so,
			dass auch nicht alle gehörlosen und schwerhörigen Menschen die Gebärdensprache gut
			beherrschen. Das hat ziemlich viel mit der Geschichte hier in Deutschland zu tun und dass
			Gebärdensprache lange nicht als eigene Sprache anerkannt war. Aber das ist eine andere
			Story.... Als Lehrerin habe ich aber fest vor, DGS im Schulsystem zu fördern. Ich spreche
			beide Sprachen. Mit meinen DGS-kompetenten Freunden gebärde ich viel. Das ist auch sehr
			praktisch wenn es mal laut ist, oder wir nicht wollen, dass direkt alle alles mitbekommen.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Und viele Menschen denken, dass ich – da ich Hörhilfen trage – alles genauso höre, wie sie.
			Das stimmt aber nicht. Viele Hintergrundgeräusche, wie Vogelgezwitscher oder das sich nähernde
			Auto, nehme ich nicht oder sehr spät wahr. Auch ist es für mich schwierig, selektiv zu hören,
			also einige Geräusche oder vor allem Stimmen auszublenden. Bei mir kommt quasi alles gleich
			laut an. Und dann gibt es noch Störschall.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Mittlerweile gibt es recht viele Filme, die auch mit Untertiteln gezeigt werden. Also
			zumindest hier in Dortmund ist das Angebot okay. Es gibt auch die Möglichkeit, mir Untertitel
			über eine App auf dem Handy anzeigen zu lassen. Die Idee ist ja nett, aber das ist wenig
			praktikabel. Statt auf die Leinwand, guck ich dann nur auf mein Handy.
		</SpeechBubble>

		<h2 class="main-heading" id="lectures">Lehrveranstaltungen</h2>

		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				<InfoBox
					term="Gebärdensprach<wbr/>dolmet<wbr/>schende"
					definition="Personen mit Hörbeeinträchtigung haben in bestimmten Bereichen einen rechtlichen Anspruch auf Schrift- oder Gebärdensprach<wbr/>dolmet<wbr/>schende. Diese Bereiche umfassen staatliche Einrichtungen, aber auch Gesundheit, Arbeit und Bildung. Beispiele sind Arztbesuche, Beratungsgespräche oder Veranstaltungen in der Hochschule. Hier übernehmen staatliche Stellen die Kosten.
				Sind dolmetschende Personen direkt in der Kommunikationssituation anwesend, dolmetschen sie simultan. Sind Personen schwerhörig oder später ertaubt und beherrschen u.U. die deutsche Gebärdensprache (DGS) nicht, können Dolmetscher*innen das gesprochene Wort auch in Schrift übersetzen.
				Dolmetscher*innen können über die Dolmetscher*innenvermittlung der Landesverbände engagiert werden. 
				"
					sources={[
						{
							title: 'Gebärdensprachdolmetscher von einfach teilhaben',
							url: 'https://www.einfach-teilhaben.de/DE/AS/Ratgeber/Gebaerdensprachdolmetscher/Gebaerdensprachdolmetscher_node.html'
						}
					]}
				/>
				können für Übersetzungen (Online oder Präsenz) gebucht werden. Damit die Dolmetschenden gut gesehen
				werden können, müssen gute Lichtverhältnisse herrschen, denn neben der Mimik und Gestik ist auch
				das Mundbild ein wichtiger Bestandteil der Gebärdensprache.
			</p>

			<p class="no-component-text">
				Auch das Mundbild der dozierenden Person muss immer gut erkennbar sein, da das Menschen mit
				Hörbeeinträchtigung beim Verstehen hilft. Allerdings können selbst unter den besten
				Bedingungen (Lichtverhältnisse, nicht verdeckt, deutliche Aussprache) und von geübten
				„Lippenlesern“ nur bis zu maximal 30% der Inhalte entnommen werden.
			</p>
		</div>

		<SpeechBubble {persona}>
			Manche Lehrende verstehen nicht, dass ihr Mundbild für mich sehr wichtig ist. Weil ich eben
			nicht gut höre, brauche ich Zusatzinformationen, die ich durch das Ablesen von Mund und Lippen
			bekomme. Wenn Lehrende sich wegdrehen und sprechen, ihren Mund verdecken oder zu weit weg
			sind, fehlen mir diese Infos. Das heißt, ich versuche irgendwie mitzuhören und auszugleichen,
			wenn ich etwas nicht verstehe. Gerade bei Mathe-Vorlesungen mit vielen Fachwörtern ist das
			hinderlich. Da hilft mir auch, wenn Lehrende ans Whiteboard schreiben oder eine Präsi haben,
			die relativ selbsterklärend ist. So verliere ich nicht den Faden.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Höranlagen sind technische Einrichtungen, die manchen Menschen mit Hörbeeinträchtigungen das
				Verstehen in öffentlichen Räumen, wie zum Beispiel Kino, Theater, Kirche oder Vortragssaal,
				erleichtern.
			</p>
		</div>

		<Recommendation link="{base}/media/Infografik_Roger_Hoeranlage.pdf">
			<svelte:fragment slot="linkText">
				Infografik Roger Höranlage (PDF) (nicht barrierefrei)
			</svelte:fragment>

			<svelte:fragment slot="textAfter">
				bietet einen Überblick über den richtigen Umgang mit Höranlagen dieser Art.
			</svelte:fragment>
		</Recommendation>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Sowohl Hörgeräte als auch CIs können mit Höranlagen verbunden werden, sodass über Mikrofone
				akustische Informationen direkt an die Hörhilfen gesendet werden können. Ob
				Gebärdensprachdolmetschende oder eine Übertragungsanlage genutzt werden sollte, hängt von
				der Hörschädigung der Anwesenden ab.
			</p>
		</div>

		<SpeechBubble {persona}>
			Ich kann meine Hörhilfen mit der Höranlage verbinden und dadurch wird das, was die Lehrperson
			sagt direkt an mein CI übertragen. Leider werden aber auch Störgeräusche übertragen, wenn die
			Mikrofone zum Beispiel nicht vorsichtig abgelegt werden oder das Mikro dauernd mit was in
			Berührung kommt. Und es gibt an der Uni nicht genug Höranlagen – deshalb steht mir nicht immer
			eine zur Verfügung. Aber im nächsten Semester sollen neue angeschafft werden.
		</SpeechBubble>

		<PlayerExtended extendedPlayerConfig={extendedPlayerConfigOffline} />

		<h2 class="main-heading" id="material">Lernmaterial</h2>
		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Werden die Informationen einer Veranstaltung überwiegend visuell
				(Gebärdensprachdolmetschende oder durch das Fokussieren der Lippen) entnommen, ist es
				schwierig, gleichzeitig Notizen zu machen oder Präsentationen zu betrachten. Daher sollten
				Folien, Skripte oder Transkripte (am besten bereits im Voraus) zur Verfügung gestellt
				werden. Eine weitere Hilfe kann das Erstellen von Skripten der Veranstaltungsgespräche durch
				Mitschreibkräfte (meist Mitstudierende oder Tutor*innen) sein.
			</p>

			<p class="no-component-text">
				Generell sollten auditive Informationen auch in einer anderen Form verfügbar sein
				(Transkripte, schriftliche Anmerkungen an Folien, Untertitel in Videos).
			</p>

			<p class="no-component-text">
				Werden Videos in Veranstaltungen genutzt, muss darauf geachtet werden, dass Untertitel
				bereits vorhanden und korrekt sind oder nachträglich hinzugefügt werden können.
			</p>
		</div>
		<SpeechBubble {persona}>
			Ich wünsche mir überall Untertitel, ohne dass ich extra danach fragen muss! Das sollte
			Standard sein, weil alle Menschen einen Anspruch auf barrierefrei zugängliche Informationen
			haben. Mittlerweile kann man die doch automatisch erstellen lassen. Das kostet nichts. Nur
			etwas Zeit, um sie dann zu verbessern – das muss man halt schon machen. Weil schlechte,
			automatisch generierte Untertitel furchtbar verwirren können. Es würde auch helfen, wenn Leute
			externe Mikrofone benutzen. Das ist lauter und online deutlicher. Außerdem wünsche ich mir
			mehr Geduld und Verständnis, wenn ich etwas akustisch nicht verstehe. Für mich ist das
			Nachfragen auch nicht angenehm!
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Automatische Untertitelungen bei Videos gibt es mittlerweile häufig, sie haben aber oft
				viele Fehler. Untertitel für Menschen mit Hörschädigungen dürfen außerdem nicht nur das
				Gesprochene wiedergeben. Die Identifikation der sprechenden Person im Video und auch
				Erläuterung von Hintergrundgeräuschen etc. sind wichtige Informationen, die sonst verloren
				gehen.
			</p>
		</div>

		<SpeechBubble {persona}>
			Ein 90-minütiger Vortrag, der für mich akustisch schlecht zu verstehen ist, ist anstrengend.
			Die ganze Zeit habe ich quasi Ausfälle, wenn ich Wörter nicht verstehe oder die von anderen
			Geräuschen überdeckt werden. Ich bin dann die ganze Zeit hochkonzentriert und versuche, immer
			aus dem Kontext irgendwie abzuleiten, um was es gerade geht. Danach brauch ich erstmal eine
			Pause. Dazu schalte ich dann auch meine Hörhilfen ab.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Ich studiere zwar Mathematik, aber manche Vorlesungsaufnahmen sind auch für mich
			unberechenbar. Wortwitze beiseite: Das ist tatsächlich nicht nur für mich so, sondern auch für
			die anderen im Kurs ohne Beeinträchtigung. Manchmal gibt es einfach gewisse Audio-Probleme.
			Die folgende Simulation versucht das auf etwas abstrahierte Weise zu veranschaulichen.
		</SpeechBubble>

		<SimulationLink
			image="{base}/personas/hannah/hannah-explaining-circle.svg"
			warningtext="Mobile Geräte werden nicht unterstützt. Das Spiel ist leider nicht barrierefrei, siehe 'Informationen zum Spiel'."
			pathtext=""
			personaID={persona.id}
		/>

		<PlayerExtended extendedPlayerConfig={extendedPlayerConfigOnline} />

		<h2 class="main-heading" id="week">Eine Woche im Leben von Hannah</h2>
		<p class="no-component-text">
			Hannah befindet sich im zweiten Jahr ihres Lehramt Mathematik Studiums in Dortmund. Dies ist
			die zweite Woche des WS22 und Hannah hat eine volle Auslastung von 5 Kursen.
		</p>

		<Week {persona} />

		<h2 class="main-heading" id="interaction">Interaktion und Kommunikation</h2>
		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Ob die Lautsprache oder die Gebärdensprache genutzt wird, wird beeinflusst von vielen
				verschiedenen Faktoren, unter anderem die (Gruppen-)Situation, die Art der
				Hörbeeinträchtigung, die bevorzugte Kommunikation etc. Da die akustische Rückmeldung über
				die eigene Aussprache mitunter fehlt, kann es zu einer undeutlichen Lautsprache bei
				einzelnen Menschen mit Hörschädigungen kommen.
			</p>
		</div>

		<SpeechBubble {persona}>
			Es ist mir manchmal unangenehm, dass meine Aussprache von Anderen nicht verstanden wird. Ich
			kann mich selbst kaum hören und merke daher häufig nur an den fragenden Gesichtern, dass meine
			Aussprache verwaschen war.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Damit in Veranstaltungen eine dolmetschende Person anwesend sein kann, ist eine klare
				Absprache, schnelle Kontaktaufnahme und auch eine gewisse Verbindlichkeit sehr wichtig.
				Ebenso müssen Veranstaltungen rechtzeitig terminiert sein, damit Gebärdensprachdolmetschende
				rechtzeitig beauftragt werden können, denn hier ist eine gewisse Vorlaufzeit für die Planung
				wichtig. Die dolmetschenden Personen benötigen das Vortragsmaterial vorab und rechtzeitig,
				sodass sie sich auf entsprechende Fachbegriffe etc. gezielt vorbereiten können.
			</p>

			<p class="no-component-text">
				Gruppensituationen, in denen viele Menschen durcheinanderreden, können sehr anstrengend
				sein. Werden die Mikrofone der Höranlage nicht weitergereicht oder reden Menschen
				gleichzeitig, können Informationen in Gruppendiskussionen nicht entnommen werden. Das
				erschwert eine Teilnahme und Schwerhörige fühlen sich dadurch schnell ausgeschlossen.
			</p>
		</div>

		<SpeechBubble {persona}>
			Mit meinen Kommiliton*innen aus dem Gebärdensprachkurs kommuniziere ich mit der
			Gebärdensprache. Ich werde immer besser. Mittlerweile kann ich auch anderen was beibringen.
			Mich interessiert auch, wie neue Gebärden entstehen, zum Beispiel für neue Technologien oder
			Ausdrücke aus der Jugendsprache. Auf Partys ist es praktisch zu gebärden, dann müssen wir
			nicht brüllen. Aber ich habe auch gemerkt, dass mich dann andere, hörende Leute eher nicht
			ansprechen. Durch die Leute, die ich kennengelernt habe, gehe ich auch zu Events, bei denen
			DGS die dominante Sprache ist.
		</SpeechBubble>

		<h2 class="main-heading" id="exams">Prüfungen</h2>
		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Studierende mit Beeinträchtigungen können einen Nachteilsausgleich beantragen. Diese
				Anpassungen werden zunächst mit den Beauftragten für Studierende mit Beeinträchtigungen
				besprochen und durch das Prüfungsamts genehmigt. Wichtig ist, dass der Nachteilsausgleich
				rechtzeitig angemeldet wird, damit er in Prüfungen berücksichtigt werden kann. In dem
				Nachteilsausgleich werden Anpassungen festgehalten, die den Studierenden gleiche
				Voraussetzungen für die inhaltliche Bearbeitung der Prüfung ermöglichen. Zudem müssen in
				Prüfungssituationen ähnliche Aspekte berücksichtigt werden, die ebenfalls in Veranstaltungen
				gelten – wie beispielsweise geschlossene Fenster, um Störgeräusche zu vermeiden.
			</p>
		</div>

		<h2 class="main-heading" id="tips">Barrierefreiheit umsetzen</h2>

		<p class="no-component-text">
			Hier finden Sie eine Checkliste, um zu überprüfen, wie barrierefrei Ihre Lehre bereits ist.
		</p>

		<Checklist
			checks={[
				'Ich informiere mich über digitale Barrierefreiheit',
				'Ich stelle meine Lernmaterialien und Foliensätze vorab und digital zur Verfügung',
				'Ich verwende das Mehrsinne-Prinzip und erstelle Material bspw. auditiv und visuell',
				'Ich spreche deutlich und zeige mein Mundbild gut sichtbar',
				'Damit mich alle gut verstehen, nutze ich ein externes Mikrofon',
				'Um Störgeräusche zu vermeiden, schließe ich die Fenster',
				'Ich zeichne meine Veranstaltungen auf und stelle sie digital zur Verfügung',
				'Für Aufzeichnungen und Videos erstelle ich Untertitel. Automatisch erstellte Untertitel korrigiere ich'
			]}
			{persona}
		/>

		<h2 class="main-heading" id="more-info">Weitere Informationen</h2>
		<ul class="more-info-list">
			<li>
				<Recommendation
					link="https://www.deutsche-gesellschaft.de/fokus/einige-informationen-zum-thema-hoerschaedigung"
				>
					<svelte:fragment slot="linkText">
						Einige Informationen zum Thema Hörschädigung
					</svelte:fragment>
					<svelte:fragment slot="textAfter">
						von der Deutschen Gesellschaft der Hörbehinderten - Selbsthilfe und Fachverbände e.V.
					</svelte:fragment>
				</Recommendation>
			</li>
			<li>
				<Recommendation
					link="https://www.schwerhoerigen-netz.de/fileadmin/user_upload/dsb/Dokumente/Information/Service/Ratgeber/Ratgeber1_Hoerschaedigung-Was_kann_ich_dagegen_tun.pdf"
				>
					<svelte:fragment slot="linkText">
						Hörschädigung - Was kann ich dagegen tun? (PDF)
					</svelte:fragment>
					<svelte:fragment slot="textAfter">vom Deutschen Schwerhörigenbund e.V.</svelte:fragment>
				</Recommendation>
			</li>
		</ul>
	</svelte:fragment>
</PersonaContent>

<style lang="scss">
	.more-info-list {
		list-style-type: none;
		margin-left: -2rem;
	}
</style>
