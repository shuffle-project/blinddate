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
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import Checklist from '../../../lib/components/checklist/Checklist.svelte';
	import Week from '../../../lib/components/week/index.svelte';
	const persona = HANNAH;

	const extendedPlayerConfigOffline: ExtendedPlayerConfig = {
		title: 'Platzhaltertitel',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/hoeren-offline.mp4',
				poster: '/media/hoeren-offline-preview-image.png',
				captionsArray: []
			}
		],
		transcripts: []
	};

	const extendedPlayerConfigOnline: ExtendedPlayerConfig = {
		title: 'Platzhaltertitel',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/hoeren-online.mp4',
				poster: '/media/hoeren-online-preview-image.png',
				captionsArray: []
			}
		],
		transcripts: []
	};
</script>

<svelte:head>
	<title>Hannah - BlindDate</title>
</svelte:head>

<PersonaContent {persona}>
	<svelte:fragment slot="content">
		<SpeechBubble {persona}>
			Hallo, ich bin Hannah. Ich bin 25 Jahre alt und studiere Mathematik im Bachelor in Dortmund.
			Ich wohne gemeinsam mit meinen zwei Mitbewohnern, Till und Simon, in einer WG und fühle mich
			hier richtig wohl. In meiner Freizeit spiele ich Handball mit einer Gruppe aus Hörenden und
			Hörbeeinträchtigten, gehe gerne Essen und bin ein Serienjunkie. Ich bin von Geburt an
			hochgradig hörbeeinträchtigt auf beiden Ohren. Ich trage links ein Hörgerät und rechts ein
			Cochlea-Implantat, und nutze sowohl die Lautsprache als auch die Gebärdensprache. Allgemein
			bevorzuge ich eher die Kommunikation in Lautsprache.
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
Das Implantat übernimmt dann die Funktion eines Teils des Innenohrs – der Hörschnecke (oder Chochlea). Hierbei werden die Schallwellen in elektrische Impulse umgewandelt und an den Hörnerv geleitet. 
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
			Es ist ein Irrtum, dass schwerhörige Menschen nur die Lautsprache und gehörlose Menschen nur
			die Gebärdensprache nutzen! Manche Menschen haben beide Sprachen gelernt und es ist
			situationsabhängig, wann welche Sprache genutzt wird. Ich kann beide Sprachen und unterhalte
			mich mit meinen Freunden häufig in Gebärdensprache, wenn es zu viele Hintergrundgeräusche
			gibt.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Und viele Menschen denken, dass ich – da ich Hörhilfen trage – alles genauso höre, wie sie.
			Das stimmt aber nicht. Viele Hintergrundgeräusche, wie Vogelgezwitscher oder das sich nähernde
			Auto, nehme ich nicht oder sehr spät wahr. Außerdem ist Störschall immer ein Problem.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Wenn ich ins Kino gehe und es keine Angebote zu Filmen mit Untertiteln gibt, nutze ich eine
			App, die Untertitel für Filme auf dem Handy anzeigt. Das ist aber ziemlich anstrengend, da ich
			ja nicht gleichzeitig auf mein Handy und die Leinwand schauen kann.
		</SpeechBubble>

		<h2 class="main-heading" id="lectures">Lehrveranstaltungen</h2>
		<p class="no-component-text">
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
			werden können, sollten gute Lichtverhältnisse herrschen, denn neben der Mimik und Gestik ist auch
			das Mundbild ein wichtiger Bestandteil der Gebärdensprache.
		</p>
		<div class="spacer" />
		<p class="no-component-text">
			Auch das Mundbild der dozierenden Person sollte immer gut erkennbar sein, da das Menschen mit
			Hörbeeinträchtigung beim Verstehen hilft. Allerdings können selbst unter den besten
			Bedingungen (Lichtverhältnisse, nicht verdeckt, deutliche Aussprache) und von geübten
			„Lippenlesern“ nur bis zu maximal 30% der Inhalte entnommen werden.
		</p>

		<SpeechBubble {persona}>
			Manche Lehrende verstehen nicht, dass ihr Mundbild für mich sehr wichtig ist und drehen sich
			zum Whiteboard und reden weiter. Auch geöffnete Fenster oder andere Hintergrundgeräusche sind
			sehr störend und machen es für mich manchmal unmöglich, dem Gesagten zu folgen.
		</SpeechBubble>

		<div class="spacer" />
		<p class="no-component-text">
			Höranlagen sind technische Einrichtungen, die manchen Menschen mit Hörbeeinträchtigungen das
			Verstehen in öffentlichen Räumen, wie zum Beispiel Kino, Theater, Kirche oder Vortragssaal,
			erleichtern.
		</p>

		<Recommendation link="{base}/media/Infografik_Roger_Hoeranlage.pdf">
			<svelte:fragment slot="linkText">
				Infografik Roger Höranlage (PDF) (nicht barrierefrei)
			</svelte:fragment>

			<svelte:fragment slot="textAfter">
				bietet einen Überblick über den richtigen Umgang mit Höranlagen dieser Art.
			</svelte:fragment>
		</Recommendation>

		<div class="spacer" />
		<p class="no-component-text">
			Sowohl Hörgeräte als auch CIs können mit Höranlagen verbunden werden, sodass über Mikrofone
			akustische Informationen direkt an die Hörhilfen gesendet werden können. Ob ein
			Gebärdendolmetscher oder eine Übertragungsanlage genutzt werden sollte, hängt von der
			Hörschädigung der Anwesenden ab.
		</p>

		<SpeechBubble {persona}>
			Ich kann meine Hörhilfen mit der Höranlage verbinden und dadurch wird das Gesagte direkt an
			mein CI übertragen. Leider werden aber auch Störgeräusche aufgenommen, wenn die Mikrofone
			beispielsweise nicht richtig genutzt werden.
		</SpeechBubble>

		<PlayerExtended extendedPlayerConfig={extendedPlayerConfigOffline} />

		<h2 class="main-heading" id="material">Lernmaterial</h2>
		<p class="no-component-text">
			Werden die Informationen einer Veranstaltung überwiegend visuell (Gebärdensprachdolmetscher
			oder durch das Fokussieren der Lippen) entnommen, ist es schwierig, gleichzeitig Notizen zu
			machen oder Präsentationen zu betrachten. Daher ist es sehr hilfreich, wenn Folien, Skripte
			oder Transkripte (am besten bereits im Voraus) zur Verfügung gestellt werden. Das frühzeitige
			zur Verfügung stellen der Inhalte ist eine hilfreiche Maßnahme für viele Studierende.
		</p>
		<div class="spacer" />
		<p class="no-component-text">
			Eine weitere Hilfe kann das Mitschreiben/Erstellen von Skripten der Veranstaltungsgespräche
			durch Mitschreibkräfte, meist Mitstudierende sein. Generell sollten auditive Informationen
			auch in einer anderen Form verfügbar sein (Transkripte, schriftliche Anmerkungen an Folien,
			Untertitel in Videos).
		</p>
		<div class="spacer" />
		<p class="no-component-text">
			Werden Videos in Veranstaltungen genutzt, sollte darauf geachtet werden, dass Untertitel
			bereits vorhanden sind oder nachträglich hinzugefügt werden können.
		</p>
		<SpeechBubble {persona}>
			Ich wünsche mir überall Untertitel, ohne dass ich extra danach fragen muss! Das sollte
			Standard sein für kurze Videos und längere Filme. Außerdem wünsche ich mir mehr Geduld und
			Verständnis, wenn etwas akustisch nicht verstanden wird. Für mich ist das Nachfragen auch
			nicht angenehm!
		</SpeechBubble>
		<div class="spacer" />
		<p class="no-component-text">
			Automatische Untertitelungen bei Videos gibt es mittlerweile häufig, sie haben aber oft viele
			Fehler. Untertitel für Menschen mit Hörschädigungen sollten außerdem nicht nur das Gesprochene
			wiedergeben. Die Identifikation der sprechenden Person im Video und auch Erläuterung von
			Hintergrundgeräuschen etc. sind wichtige Informationen, die sonst verloren gehen.
		</p>

		<SpeechBubble {persona}>
			Häufig wird nicht verstanden, dass ein Vortrag, der 90 Minuten dauert und für mich akustisch
			schwer zu verstehen ist, sehr anstrengend ist und ich danach erst einmal eine Pause brauche.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Lorem Ipsum ... Beispiel im Folgenden ... Nicht akkurat, aber so verständlich ...
		</SpeechBubble>

		<SimulationLink
			image=""
			warningtext="Mobile Geräte werden nicht unterstützt. Das Spiel ist leider nicht barrierefrei, siehe 'Informationen zum Spiel'."
			pathtext=""
			personaID={persona.id}
		/>

		<PlayerExtended extendedPlayerConfig={extendedPlayerConfigOnline} />

		<div class="spacer" />

		<h2 class="main-heading" id="week">Eine Woche im Leben von Hannah</h2>
		<p class="no-component-text">
			Hannah befindet sich im zweiten Jahr ihres BSc. Mathematikstudiums an der Technischen
			Hochschule Dortmund. Dies ist die zweite Woche des WS22 und Hannah hat eine volle Auslastung
			von 5 Kursen.
		</p>

		<Week {persona} />

		<h2 class="main-heading" id="interaction">Interaktion und Kommunikation</h2>
		<p class="no-component-text">
			Ob die Lautsprache oder die Gebärdensprache genutzt wird, wird beeinflusst von vielen
			verschiedenen Faktoren, unter anderem die Situation, die Art der Hörbeeinträchtigung, die
			bevorzugte Kommunikation etc. Da die akustische Rückmeldung über die eigene Aussprache
			mitunter fehlt, kann es zu einer undeutlichen Lautsprache bei einzelnen Menschen mit
			Hörschädigungen kommen.
		</p>

		<SpeechBubble {persona}>
			Es ist mir manchmal unangenehm, dass meine Aussprache von Anderen nicht verstanden wird. Ich
			kann mich selbst kaum hören und merke daher häufig nur an den fragenden Gesichtern, dass meine
			Aussprache verwaschen war.
		</SpeechBubble>

		<div class="spacer" />
		<p class="no-component-text">
			Damit in Veranstaltungen eine dolmetschende Person anwesend sein kann, ist eine klare
			Absprache, schnelle Kontaktaufnahme und auch eine gewisse Verbindlichkeit sehr wichtig. Ebenso
			müssen Veranstaltungen rechtzeitig terminiert sein, damit Gebärdensprachdolmetschende
			rechtzeitig beauftragt werden können, denn hier ist eine gewisse Vorlaufzeit für die Planung
			wichtig. Die dolmetschenden Personen sollten das Vortragsmaterial vorab und rechtzeitig
			erhalten, sodass sie sich auf entsprechende Fachbegriffe etc. gezielt vorbereiten können.
		</p>

		<div class="spacer" />
		<p class="no-component-text">
			Gruppensituationen, in denen viele Menschen durcheinanderreden, können sehr anstrengend sein.
			Werden die Mikrofone der Höranlage nicht weitergereicht oder reden Menschen gleichzeitig,
			können Informationen in Gruppendiskussionen nicht entnommen werden. Das erschwert eine
			Teilnahme und Schwerhörige fühlen sich dadurch schnell ausgeschlossen.
		</p>

		<SpeechBubble {persona}>
			Mit meinen Kommiliton*innen aus dem Gebärdensprachkurs kommuniziere ich mit der
			Gebärdensprache. Hier bin ich der Profi und kann Vielen noch etwas beibringen. Außerdem ist es
			auf lauten Partys total praktisch, sich über den Raum hinweg mit meinen Freunden nonverbal
			unterhalten zu können.
		</SpeechBubble>

		<h2 class="main-heading" id="exams">Prüfungen</h2>
		<p class="no-component-text">
			Studierende können einen Nachteilsausgleich beantragen. Diese Anpassungen werden zunächst mit
			den Beauftragten für Studierende mit Beeinträchtigungen besprochen und durch das Prüfungsamts
			genehmigt werden. Wichtig ist, dass der Nachteilsausgleich rechtzeitig angemeldet wird, damit
			er in Prüfungen berücksichtigt werden kann. In dem Nachteilsausgleich werden Anpassungen
			festgehalten, die den Studierenden gleiche Voraussetzungen für die inhaltliche Bearbeitung der
			Prüfung ermöglichen. Zudem sollten in Prüfungssituationen ähnliche Aspekte berücksichtigt
			werden, die ebenfalls in Veranstaltungen gelten – wie beispielsweise geschlossene Fenster, um
			Störgeräusche zu vermeiden.
		</p>

		<h2 class="main-heading" id="tips">Tipps zur Unterstützung</h2>
		<Checklist
			checks={[
				'Ich informiere mich über digitale Barrierefreiheit',
				'Ich stelle meine Lernmaterialien und Foliensätze vorab und digital zur Verfügung',
				'Ich verwende das Mehrsinne-Prinzip, sodass alle Materialien über unterschiedliche Sinne erfahrbar sind. Ein Text kann gelesen oder mithilfe eines Screenreaders gehört werden, gesprochene Texte haben Untertitel oder ein Transkript',
				'Ich achte darauf, beim Sprechen nicht mit dem Rücken zu den Studierenden zu stehen',
				'Ich achte darauf, dass nicht mehrere Personen durcheinander reden',
				'Ich benutze portable Funkmikrofone oder denke daran, die Induktionsanlage einzuschalten',
				'Ich organisiere Gebärdensprachdolmetschende für meine Vorlesung',
				'Ich zeichne meine Vorlesungen auf oder gestatte eine Aufzeichnung',
				'Ich mache ausreichend Pausen in langen Vorlesungsblöcken',
				'Wenn Studierende einen Nachteilsausgleich haben, bemühe ich mich um eine faire Umsetzung'
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
