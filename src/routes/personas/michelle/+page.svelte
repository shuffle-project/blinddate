<script lang="ts">
	import FlipCard from '$lib/components/FlipCard.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import PersonaContent from '$lib/components/PersonaContent.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/accordion/AccordionItem.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import { MICHELLE } from '$lib/constants/michelle';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import Week from '../../../lib/components/week/index.svelte';

	const persona: Persona = MICHELLE;
</script>

<svelte:head>
	<title>Michelle - BlindDate</title>
</svelte:head>

<PersonaContent {persona}>
	<svelte:fragment slot="content">
		<SpeechBubble {persona}>
			Hi, mein Name ist Chelle – eigentlich Michelle. Ich studiere Popmusikdesign an der Popakademie
			in Mannheim. Ich spiele Schlagzeug in einer Band – also ihr könnt mich im Proberaum finden.
			Alternativ falle ich euch aber in der Mensa auf, weil ich wahrscheinlich die einzige Person
			bin, die ihr Tablett voller neutraler Kartoffelprodukte hat. Was anderes vertrag ich nämlich
			nicht, da ich Morbus Crohn habe. Ach so – ich bin 19 Jahre alt und wohne in der Nähe von
			Hannover bei meinem Vater. Mit 9 Jahren hab ich eine Nähmaschine bekommen, fleißig geübt und
			mittlerweile nähe ich ziemlich viel meiner Kleidung selbst. Ich gehe super-gerne auf Konzerte
			und wegen dem Morbus Crohn auch super oft auf die Toilette. Wenn ihr also mal Tipps braucht,
			wo man gute Musik hören kann und es auch super Sanitäranlagen gibt, wendet euch an mich.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Als ich angefangen habe zu studieren, habe ich die Gruppe studiCED gefunden. Das ist eine
			Selbsthilfevereinigung von Studierenden, die von CED betroffen sind. CED ist die Abkürzung für
			chronisch entzündliche Darmerkrankungen. Bei mir wurde mit 15 Jahren Morbus Crohn festgestellt
			nach einer langen Odyssee durch Krankenhäuser und Spezialisten. Wegen der ewigen Diagnose habe
			ich fast ein ganzes Schuljahr verpasst. Die Kontakte in der Selbsthilfegruppe sind für mich
			ein richtiger Anker – dort kämpfen wir alle mit den gleichen Problemen, nehmen aufeinander
			Rücksicht und stärken uns gegenseitig, wenn es mal wieder einen Schub gibt oder man dafür
			kämpfen muss, dass an der Uni Rücksicht genommen wird. Mit studiCED versuchen wir auch,
			Aufklärungsarbeit zu leisten und auf unsichtbare Behinderungen aufmerksam zu machen. Ihr seht
			unsere Einschränkung nicht – trotzdem ist sie aber da und verursacht Barrieren.
		</SpeechBubble>

		<h2 class="main-heading" id="general">Allgemeine Information</h2>
		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Symptome

				<InfoBox
					term="chronisch entzündlicher Darmerkrankungen"
					definition="CED ist die Abkürzung für <b>„chronisch entzündliche Darmerkrankungen“</b>. Als chronisch bezeichnet man eine Krankheit, die sich langsam entwickelt, lange anhält oder lebensbegleitend ist. Die häufigsten und bekanntesten CED-Erkrankungen sind „Morbus Crohn“ und „Colitis ulcerosa“. Symptome, die bei beiden Erkrankungen auftrefen können, sind beispielsweise (starke) Bauchschmerzen, Durchfälle, Fieber, Gewichtsverlust, aber auch psychische Belastungen."
					sources={[
						{
							title:
								'Morbus Crohn von der Deutschen Morbus Crohn / Colitis ulcerosa Vereinigung e.V.',
							url: 'https://www.dccv.de/betroffene-angehoerige/medizinische-grundlagen/was-ist-morbus-crohn/'
						}
					]}
				/>

				kommen häufig in Schüben. Diese Schübe können auch stressbedingt auftreten, sich
				verschlimmern und nicht selten mit starken Schmerzen verbunden. Krankenhausaufenthalte und
				langfristigere Ausfälle sorgen dafür, dass Studierende Studieninhalte verpassen und diese
				nachholen müssen. Es ist also nicht selten, dass Studienzeiten verlängert werden müssen.
				Neben Bauchkrämpfen sind auch Durchfälle und Müdigkeit häufige Symptome von CED. Deshalb
				sind Pausen entweder wichtig, um Energie zu tanken oder durch Schmerzen oder Toilettengänge
				schlichtweg unumgänglich.
			</p>

			<p class="no-component-text">
				Chronische Erkrankungen und deren Symptome sind häufig für Außenstehende nicht sichtbar.
				Daher reagieren Menschen teilweise mit Unverständnis, wenn Studierende mit chronischen
				Erkrankungen beispielsweise einen Nachteilsausgleich haben oder häufiger Pausen machen
				müssen. Um dieses Haushalten mit Energie zu veranschaulichen und für nicht sichtbare
				Beeinträchtigungen zu sensibilisieren, wird häufig die
				<InfoBox
					term="„spoon-theory“"
					langTerm="en"
					definition="Die „spoon-theory“ wurde von Christine Miserandino 2003 zu ersten Mal veröffentlicht. Mithilfe von Löffeln, die Energie-Portionen darstellen, erklärte sie ihrer Freundin, wie es ist, mit begrenzten Energien zu haushalten. Aufgrund ihrer chronischen Erkrankung hat sie nur eine begrenzte Anzahl an Löffeln pro Tag zur Verfügung. Energie-Portionen, die gesunden Menschen scheinbar unbegrenzt zur Verfügung stehen, muss sie sich gut einteilen, um alltägliche Aufgaben zu lösen. Sind beispielsweise schon einige Löffel für das Aufstehen, Anziehen, Frühstück zubereiten etc. aufgebraucht, muss sie ab einem gewissen Punkt anfangen, Entscheidungen zu treffen – für eine Prüfung lernen oder Mittagessen kochen?"
					sources={[
						{
							title: 'Was ist die Spoon-Theory? von Sozialverband VdK Berlin-Brandenburg e.V.',
							url: 'https://www.vdk.de/berlin-brandenburg/pages/76831/spoontheory?dscc=essenc]'
						}
					]}
				/>

				(„Löffel-Theory“) verwendet.
			</p>
		</div>

		<SpeechBubble {persona}>
			Ich muss mit meiner Energie immer haushalten. Das wird schwierig, wenn viele wichtige Sachen
			an einem Tag anstehen oder ich mehrere Tage hintereinander funktionieren muss. Am besten kann
			ich das mir – und auch andren – mit der Spoon Theorie erklären. An guten Tagen, hab ich viele
			Löffel, an schlechten eben wenig. Manchmal kosten mich die selben Aktivitäten viel oder wenig
			Löffel. Wenn ich alle meine Löffel verbraucht habe, geht‘s mir halt beschissen. Wenn die
			Löffel weg sind, dann wird auch kochen, einkaufen oder einfache Tätigkeiten zu viel
		</SpeechBubble>

		<SpeechBubble {persona}>
			Ich plane meine Tage immer im Voraus – Katastrophen-Planung quasi. Wenn ich das Haus verlasse,
			muss ich vorher wissen, wo ich hingehe und ob dort eine Toilette in der Nähe ist. Denn, wenn
			es richtig blöd läuft, renne ich halt 12 mal pro Stunde aufs Klo. Das ist absolut
			unkontrollierbar, bereitet mir Schmerzen und ist halt auch gefährlich.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Manchmal, wenn es morgens stressig wird, muss ich entscheiden: Medikamente oder Frühstück.
			Beides zusammen geht nicht. Also hab ich die Wahl energielos in der Vorlesung zu sitzen oder
			eben aufmerksamer zu sein, aber Schmerzen zu haben.
		</SpeechBubble>

		<h2 class="main-heading" id="lectures">Lehrveranstaltungen</h2>

		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Durch Bauchkrämpfe und Durchfälle ist das schnelle Erreichen einer Toilette für viele
				Studierende mit CED eine Voraussetzung, die gegeben sein muss.
			</p>
		</div>

		<SpeechBubble {persona}>
			In Vorlesungssälen oder Seminarräumen setze ich mich immer an den Rand oder nahe zur Tür,
			damit ich schnell zur Toilette rennen kann. Meine Freunde halten mir schon immer einen Platz
			frei und haben genau ausgerechnet, aus welcher Sitzreihe man am schnellsten das Klo erreicht.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Wenn die Rahmenbedingungen einer Veranstaltung (Räumlichkeiten, (Pausen-Zeiten, etc.)
				frühzeitig bekannt gegeben werden, haben die Studierenden die Möglichkeit, im Voraus zu
				planen. Kurzfristige Planänderungen erzeugen Unsicherheit und Stress. Und Stress kann ein
				Katalysator für Beschwerden sein.
			</p>
		</div>

		<SpeechBubble {persona}>
			Ich bin richtig frustriert, wenn ich mitbekomme, dass Leute hinter meinem Rücken Kommentare
			darüber machen, dass ich schon wieder den Raum verlasse oder ja kaum da bin. Oder noch besser:
			Wenn mich Leute davon abhalten wollen, die barrierefreie Toilette zu benutzen. Aber es gibt
			auch die andere Seite: Meine Uni-Freunde sammeln immer meine Sachen ein, wenn ich mal wieder
			auf dem Klo statt in der Vorlesung bin,teilen ihre Notizen mit mir, fragen wie es mir geht und
			haben auch immer was zu trinken für mich dabei.
		</SpeechBubble>

		<FlipCard front="Lorem Ipsum" back="Lorem Ipsum" />

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Blockveranstaltungen oder Veranstaltungen, die sich über mehrere Stunden am Stück
				erstrecken, sind mit flexiblem Eingehen auf das aktuelle Befinden kaum vereinbar. Werden
				Veranstaltungen aufgezeichnet, können Studierende, die die Veranstaltung frühzeitig
				verlassen mussten oder an diesen wegen medizinisch wichtiger Termine gar nicht teilnehmen
				konnten, die Inhalte nachträglich erarbeiten.
			</p>
		</div>

		<SpeechBubble {persona}>
			Ja, Morbus Crohn ist körperlich belastend. Aber es geht auch auf die Psyche – ich habe mir
			schon öfters in die Hose gemacht. Und die Gefahr besteht eigentlich immer. Das bereitet mir
			ständigen Stress und Angst. Dazu kommt ein permanent schlechtes Gewissen, dass ich an einer
			Veranstaltung nicht teilnehmen kann, nicht genug bei Gruppenarbeiten beitrage und ich immer
			das Gefühl habe, die anderen denken schlecht von mir.
		</SpeechBubble>

		<h2 class="main-heading" id="material">Lernmaterial</h2>

		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Auch hier gilt: Studierende mit chronischen Erkrankungen brauchen die Möglichkeit, flexibel
				und je nach gesundheitlichem Zustand studieren zu können. Asynchrone Vorlesungen und online
				bereitgestellte Lernmaterialen ermöglichen das Arbeiten nach eigenem Tempo und die
				Vereinbarkeit mit Pausen.
			</p>
		</div>

		<SpeechBubble {persona}>
			Die Medikamente, die ich nehmen muss, machen mich oft sehr müde. Außerdem ist mein Körper
			durch die Krämpfe und Schmerzen geschlaucht. Ich muss viele Pausen einlegen und mit meinen
			Ressourcen gut haushalten. Das ist ein ziemlicher Lernprozess für mich.Aber nur so schaffe ich
			es, wenigstens etwas planen zu können. Viel Unterstützung finde ich da in der
			Selbsthilfegruppe.
		</SpeechBubble>

		<SpeechBubble {persona}>
			Ich bin immer saufroh, wenn irgendein Lernmaterial online verfügbar ist. Ich kann nicht immer
			vor Ort sein, auch wenn ich es gerne wäre. Ich muss oft zum Arzt. Ich muss immer wieder ins
			Krankenhaus. Deshalb verpasse ich Veranstaltungen. Digitales Lernmaterial bedeutet für mich,
			dass ich trotzdem dabei sein kann. Dass ich nicht den Faden verliere. Und auch nicht immer
			nachfragen muss, wenn ich etwas verpasst habe. Für mich ist das eine riesige Erleichterung –
			und zeigt mir auch, dass ich mein Studium schaffe.
		</SpeechBubble>

		<Accordion title="Fragen und Antworten - Platzhaltertitel">
			<AccordionItem id="1">
				<span slot="title"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr? </span>

				<p slot="content">
					dsaddsad Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing
					elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit
					amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
					dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
				</p>
			</AccordionItem>

			<AccordionItem id="2">
				<span slot="title"> Lorem ipsum dolor sit amet, consetetur sadipscing? </span>

				<p slot="content">dsaddsad</p>
			</AccordionItem>
		</Accordion>

		<h2 class="main-heading" id="interaction">Interaktion und Kommunikation</h2>
		<div class="no-component-text-wrapper">
			<p class="no-component-text no-margin-top">
				Die Kommunikation der Bedarfe ist gerade bei nicht-sichtbaren Beeinträchtigungen sehr
				wichtig. Studierende sind dann auf Verständnis von und individuelle Absprachen mit
				Lehrpersonen angewiesen.
			</p>
		</div>

		<SpeechBubble {persona}>
			Mittlerweile spreche ich sehr offen über meine Erkrankung und die Symptome. Ich will, dass die
			Menschen sensibler für unsichtbare Beeinträchtigungen werden. Und das geht nur, wenn man
			darüber aufklärt. Vielleicht bekomme ich dann irgendwann keine Kommentare oder komische Blicke
			mehr, wenn ich die Toilette für Menschen mit Behinderungen nutze oder mich zurückziehen muss,
			weil mein Darm krampft.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Ein Austausch über Beeinträchtigungen unter Studierenden findet häufig in
				Selbsthilfevereinigungen statt. Eine offene Haltung und auch das Bieten von
				Austauschmöglichkeiten für Studierende kann aber auch von Lehrenden-Seite initiiert werden.
			</p>
		</div>

		<SpeechBubble {persona}>
			Kontakt zu Mitstudierenden ist für mich recht schwierig. Das liegt daran, dass ich einfach
			unzuverlässig bin – aber halt nicht mit Absicht. Ich bin nicht jeden Tag an der Uni, ich kann
			nicht fest zusagen, ob ich zu einer Party komme und bei Gruppenarbeiten werde ich nicht zu
			jedem Termin da sein. Zwei meiner Schulfreundinnen studieren auch hier und sind das alles
			gewohnt. Ich freu' mich jedes mal sehr, wenn wir uns treffen. Und in meinem Studiengang sind
			es die Leute, mit denen ich Musik mache, die viel Verständnis zeigen. Die kriegen das hin,
			mich mitzunehmen.
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Lehrende können beispielsweise Informationen zu Anlaufstellen für Beratung und Austausch
				bereitstellen und damit Studierende mit sichtbaren und nicht-sichtbaren Beeinträchtigungen
				unterstützen.
			</p>
		</div>

		<SpeechBubble {persona}>
			Der Austausch mit den anderen in der Selbsthilfegruppe hilft mir sehr. Trotzdem wünsche ich
			mir häufig mehr Verständnis in meinem Umfeld – gerade weil ich so offen darüber kommuniziere.
		</SpeechBubble>

		<h2 class="main-heading" id="week">Eine Woche im Leben von Michelle</h2>
		<p class="no-component-text">Lorem Ipsum, Michelle studiert das und hier ist eine Woche...</p>

		<Week {persona} />

		<h2 class="main-heading" id="exams">Prüfungen</h2>

		<SpeechBubble {persona}>
			Obwohl ich einen Nachteilsausgleich habe, muss ich trotzdem immer wieder mit Lehrenden
			diskutieren und mich erklären. Das nervt. Es wäre viel konstruktiver, wenn wir darüber reden
			könnten, wie man meinen NTA sinnvoll umsetzt, anstatt darüber, ob ich den jetzt auch wirklich
			brauche. Und das jedes Semester – das zieht Energie. Ich renne nicht zum Spaß während einer
			Prüfung 5mal auf die Toilette! Und dann muss ich mich ja auch immer wieder neu reindenken!
		</SpeechBubble>

		<div class="no-component-text-wrapper">
			<p class="no-component-text">
				Schübe der Erkrankungen können durch Stress hervorgerufen oder verstärkt werden. Mithilfe
				eines Nachteilsausgleichs können Bedingungen geschaffen werden, die Studierenden mit
				Beeinträchtigungen die gleichen Voraussetzungen schaffen, ihre Leistung abzurufen und Stress
				reduzieren. Separate Räume, in denen die Prüfungen geschrieben werden können, die in der
				Nähe von Toiletten liegen, verlängerte Fristen zur Abgabe unterschiedlicher schriftlicher
				Leistungen oder auch alternative Prüfungsformate, die von zuhause aus absolviert werden
				können, werden in dem Nachteilsausgleich festgehalten.
			</p>
		</div>

		<h2 class="main-heading" id="tips">Tipps zur Unterstützung</h2>

		<p class="no-component-text">
			Hier finden Sie eine Checkliste, um zu überprüfen, wie barrierefrei Ihre Lehre bereits ist.
		</p>

		<Checklist
			checks={[
				'Ich informiere mich über digitale Barrierefreiheit',
				'Ich stelle meine Lernmaterialien vorab und digital zur Verfügung',
				'Ich ermögliche eine asynchrone und remote Teilnahme an der Veranstaltung',
				'Ich mache ausreichend Pausen in langen Veranstaltungen'
			]}
			{persona}
		/>
	</svelte:fragment>
</PersonaContent>
