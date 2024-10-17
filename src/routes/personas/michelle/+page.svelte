<script lang="ts">
	import { base } from '$app/paths';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import PersonaContent from '$lib/components/personaContent/PersonaContent.svelte';
	import { MICHELLE } from '$lib/constants/michelle';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import Week from '../../../lib/components/week/index.svelte';

	const persona: Persona = MICHELLE;
</script>

<PersonaContent {persona} let:MainHeading let:TextSection>
	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-01.mp3'}>
		Hi, mein Name ist Chelle – eigentlich Michelle. Ich studiere Popmusikdesign an der Popakademie
		in Mannheim. Ich spiele Schlagzeug in einer Band – also ihr könnt mich oft im Proberaum finden.
		Alternativ falle ich euch aber auch in der Mensa auf, weil ich wahrscheinlich die einzige Person
		bin, die ihr Tablett voller neutraler Kartoffelprodukte hat. Was anderes vertrag ich nämlich
		nicht, da ich Morbus Crohn habe. Ach so – ich bin 19 Jahre alt und wohne in der Nähe von
		Mannheim bei meinem Vater. Mit 9 Jahren hab ich eine Nähmaschine bekommen, fleißig geübt und
		mittlerweile nähe ich ziemlich viel meiner Kleidung selbst. Ich gehe super-gerne auf Konzerte
		und wegen dem Morbus Crohn auch super oft auf die Toilette. Wenn ihr also mal Tipps braucht, wo
		man gute Musik hören kann und es auch schöne Sanitäranlagen gibt, wendet euch vertrauensvoll an
		mich.
	</SpeechBubble>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-02.mp3'}>
		Als ich angefangen habe zu studieren, habe ich die Gruppe studiCED gefunden. Das ist eine
		Selbsthilfevereinigung von Studierenden, die von CED betroffen sind. CED ist die Abkürzung für
		chronisch entzündliche Darmerkrankungen. Bei mir wurde Morbus Crohn mit 15 Jahren nach einer
		langen Odyssee durch Krankenhäuser und Spezialisten festgestellt. Wegen der ewigen Diagnose habe
		ich fast ein ganzes Schuljahr verpasst. Die Kontakte in der Selbsthilfegruppe sind für mich ein
		richtiger Anker – dort stärken wir uns gegenseitig, wenn es mal wieder einen Schub gibt oder man
		dafür kämpfen muss, dass an der Uni Rücksicht genommen wird. Ihr seht unsere Einschränkung nicht
		– trotzdem ist sie aber da und verursacht Barrieren.
	</SpeechBubble>

	<MainHeading heading="Allgemeine Informationen" />
	<TextSection let:Text>
		<Text noTopMargin>
			<span>Symptome</span>

			<InfoBox
				term="chronisch entzündlicher Darmerkrankungen"
				sources={[
					{
						title:
							'Morbus Crohn von der Deutschen Morbus Crohn / Colitis ulcerosa Vereinigung e.V.',
						url: 'https://www.dccv.de/betroffene-angehoerige/medizinische-grundlagen/was-ist-morbus-crohn/'
					}
				]}
			>
				CED ist die Abkürzung für <strong>„chronisch entzündliche Darmerkrankungen“</strong>. Als
				chronisch bezeichnet man eine Krankheit, die sich langsam entwickelt, lange anhält oder
				lebensbegleitend ist. Die häufigsten und bekanntesten CED-Erkrankungen sind „Morbus Crohn“
				und „Colitis ulcerosa“. Symptome, die bei beiden Erkrankungen auftrefen können, sind
				beispielsweise (starke) Bauchschmerzen, Durchfälle, Fieber, Gewichtsverlust, aber auch
				psychische Belastungen.
			</InfoBox>

			<span
				>kommen häufig in Schüben. Diese Schübe können auch stressbedingt auftreten, sich
				verschlimmern und sind nicht selten mit starken Schmerzen verbunden. Krankenhausaufenthalte
				und langfristigere Ausfälle sorgen dafür, dass Studierende Studieninhalte verpassen und
				diese nachholen müssen. Es ist also nicht selten, dass Studienzeiten verlängert werden
				müssen. Neben Bauchkrämpfen sind auch Durchfälle und Müdigkeit häufige Symptome von CED.
				Deshalb sind Pausen entweder wichtig, um Energie zu tanken oder durch Schmerzen oder
				Toilettengänge schlichtweg unumgänglich.
			</span>
		</Text>
		<Text>
			<span>
				Chronische Erkrankungen und deren Symptome sind häufig für Außenstehende nicht sichtbar.
				Daher reagieren Menschen teilweise mit Unverständnis, wenn Studierende mit chronischen
				Erkrankungen beispielsweise einen Nachteilsausgleich (NTA) haben oder häufiger Pausen machen
				müssen. Um dieses Haushalten mit Energie zu veranschaulichen und für nicht sichtbare
				Beeinträchtigungen zu sensibilisieren, wird häufig die
			</span>
			<InfoBox
				term="„spoon-theory“"
				langTerm="en"
				sources={[
					{
						title: 'The Spoon Theory written by Christine Miserandino',
						titleLang: 'en',
						url: ' https://butyoudontlooksick.com/articles/written-by-christine/the-spoon-theory/'
					},
					{
						title: 'Was ist die Spoon-Theory? von Sozialverband VdK Berlin-Brandenburg e.V.',
						url: 'https://www.vdk.de/berlin-brandenburg/pages/76831/spoontheory?dscc=essenc]'
					}
				]}
			>
				Die <strong lang="en">„spoon-theory“</strong> wurde von Christine Miserandino 2003 zum ersten
				Mal veröffentlicht. Mithilfe von Löffeln, die Energie-Portionen darstellen, erklärte sie ihrer
				Freundin, wie es ist, mit begrenzten Energien zu haushalten. Aufgrund ihrer chronischen Erkrankung
				hat sie nur eine begrenzte Anzahl an Löffeln pro Tag zur Verfügung. Energie-Portionen, die gesunden
				Menschen scheinbar unbegrenzt zur Verfügung stehen, muss sie sich gut einteilen, um alltägliche
				Aufgaben zu lösen. Sind beispielsweise schon einige Löffel für das Aufstehen, Anziehen, Frühstück
				zubereiten etc. aufgebraucht, muss sie ab einem gewissen Punkt anfangen, Entscheidungen zu treffen
				– für eine Prüfung lernen oder Mittagessen kochen?
			</InfoBox>
			<span> („Löffel-Theory“) verwendet. </span>
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-03.mp3'}>
		Ich muss mit meiner Energie immer haushalten. Das wird schwierig, wenn viele Sachen an einem Tag
		anstehen oder ich mehrere Tage hintereinander funktionieren muss. Am besten kann ich das mir –
		und auch anderen – mit der <span lang="en">Spoon</span> Theorie erklären. An guten Tagen hab ich
		viele Löffel, an schlechten eben wenig. Manchmal kosten mich die selben Aktivitäten viele oder wenige
		Löffel. Wenn ich alle Löffel verbraucht habe, geht‘s mir halt beschissen. Wenn die Löffel weg sind,
		dann wird auch kochen, einkaufen oder einfache Tätigkeiten zu viel.
	</SpeechBubble>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-04.mp3'}>
		Ich plane meine Tage immer im Voraus – Katastrophen-Planung quasi. Wenn ich das Haus verlasse,
		muss ich vorher wissen, wo ich hingehe und ob dort eine Toilette in der Nähe ist. In Vorlesungen
		sitze ich immer am Rand, damit ich notfalls schnell raus kann. Und in meinem Kopf kalkuliere ich
		schon mal den Weg zum Klo. Wenn es mir schlecht geht, muss ich auch mal 12 mal in der Stunde zur
		Toilette.
	</SpeechBubble>

	<MainHeading heading="Lehrveranstaltungen" />
	<TextSection let:Text>
		<Text noTopMargin>
			Durch Bauchkrämpfe und Durchfälle ist das schnelle Erreichen einer Toilette für viele
			Studierende mit CED eine Voraussetzung, die gegeben sein muss.
		</Text>
	</TextSection>

	<TextSection let:Text>
		<Text>
			Wenn die Rahmenbedingungen einer Veranstaltung (Räumlichkeiten, Pausen-Zeiten, etc.)
			frühzeitig bekannt gegeben werden, haben die Studierenden die Möglichkeit, im Voraus zu
			planen. Kurzfristige Planänderungen erzeugen Unsicherheit und Stress. Und Stress kann ein
			Katalysator für Beschwerden sein.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-05.mp3'}>
		Ich bin richtig frustriert, wenn ich mitbekomme, dass Leute hinter meinem Rücken Kommentare
		darüber machen, dass ich schon wieder den Raum verlasse oder ja kaum da bin. Oder noch besser:
		Wenn mich Leute davon abhalten wollen, die barrierefreie Toilette zu benutzen. Aber es gibt auch
		andere Seiten: Meine Uni-Freunde sammeln immer meine Sachen ein, wenn ich mal wieder auf dem Klo
		statt in der Vorlesung bin, teilen ihre Notizen mit mir, fragen wie es mir geht und haben auch
		immer was zu trinken für mich dabei.
	</SpeechBubble>

	<FlipCard
		front="Ich bin nicht des&shy;interessiert an der Vorlesung!"
		back="Ich habe eine chronische Darmerkrankung, die mich dazu zwingt, die Toilette auch während der Vorlesungszeiten öfter aufzusuchen."
		{persona}
	/>

	<TextSection let:Text>
		<Text extraTopMargin>
			Blockveranstaltungen oder Veranstaltungen, die sich über mehrere Stunden am Stück erstrecken,
			sind mit flexiblem Eingehen auf das aktuelle Befinden kaum vereinbar. Werden Veranstaltungen
			aufgezeichnet, können Studierende, die die Veranstaltung frühzeitig verlassen mussten oder an
			diesen wegen medizinisch wichtiger Termine gar nicht teilnehmen konnten, die Inhalte
			nachträglich erarbeiten.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-06.mp3'}>
		Ja, Morbus Crohn ist körperlich belastend. Aber es geht auch auf die Psyche – ich habe oft
		Angst, einen Schub zu bekommen und dann in einer unangenehmen Situation zu sein. Es stresst
		mich, wenn ich aus einer Veranstaltung renne und mich alle anschauen. Dazu kommt ein permanent
		schlechtes Gewissen, dass ich an einer Veranstaltungen nicht teilnehmen kann, nicht genug bei
		Gruppenarbeiten beitrage und ich immer das Gefühl habe, die anderen denken schlecht von mir.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Anwesenheitspflichten bei Lehrveranstaltungen sind pro Bundesland und Hochschule
			unterschiedlich geregelt. Ist Anwesenheit Voraussetzung für das Ablegen einer Prüfung oder das
			Bestehen einer Veranstaltung, stellt das Studierende mit einer chronischen Erkrankung häufig
			vor weitere Herausforderungen. Wichtige Arzttermine oder Fehlzeiten aufgrund von
			Krankheitsschüben machen es Studierenden manchmal unmöglich, diese Präsenztermine einzuhalten.
			Da Anwesenheitspflichten für viele Studierende eine Barriere darstellen können, sollten diese
			generell überdacht werden. Zusätzlich können in einem Nachteilsausgleich Regelungen zum Umgang
			mit Fehlzeiten festgelegt werden.
		</Text>
	</TextSection>

	<MainHeading heading="Lernmaterial" />

	<TextSection let:Text>
		<Text noTopMargin>
			Auch hier gilt: Studierende mit chronischen Erkrankungen brauchen die Möglichkeit, flexibel
			und je nach gesundheitlichem Zustand studieren zu können. Asynchrone Vorlesungen und online
			bereitgestellte Lernmaterialen ermöglichen das Arbeiten nach eigenem Tempo und die
			Vereinbarkeit mit Pausen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-07.mp3'}>
		Die Medikamente, die ich nehmen muss, machen mich oft sehr müde. Außerdem ist mein Körper durch
		die Krämpfe und Schmerzen geschlaucht. Ich muss viele Pausen einlegen und mit meinen Ressourcen
		gut haushalten.
	</SpeechBubble>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-08.mp3'}>
		Ich bin immer saufroh, wenn irgendein Lernmaterial online verfügbar ist. Ich kann nicht immer
		vor Ort sein, auch wenn ich es gerne wäre. Ich muss oft zum Arzt. Ich muss immer wieder ins
		Krankenhaus. Deshalb verpasse ich Veranstaltungen. Digitales Lernmaterial bedeutet für mich,
		dass ich trotzdem dabei sein kann. Dass ich nicht den Faden verliere. Und auch nicht immer
		nachfragen muss, wenn ich etwas verpasst habe. Für mich ist das eine riesige Erleichterung – und
		zeigt mir auch, dass ich mein Studium schaffe.
	</SpeechBubble>

	<Accordion personaName={persona.name} let:AccordionItem>
		<AccordionItem let:PersonaAnswer>
			<svelte:fragment slot="question"
				>Hast Du Dir schon mal in der Öffentlichkeit in die Hose gemacht?</svelte:fragment
			>
			<PersonaAnswer {persona}>
				Das ist super peinlich, aber: Ja! Nach meinen Magenkrämpfen kann man keinen Wecker stellen,
				die kommen, wann sie wollen - auch mal mitten auf dem Weg zur Uni. Wenn dann gerade keine
				öffentliche Toilette in der Nähe ist, hilft auch keine große, körperliche Anstrengung, um
				etwas zurückzuhalten. Nach so einem "Unfall" habe ich mich eine Zeit lang kaum noch aus dem
				Haus getraut!
			</PersonaAnswer>
		</AccordionItem>

		<AccordionItem let:PersonaAnswer>
			<svelte:fragment slot="question"
				>Was ist der unangebrachteste Kommentar, den Du bezüglich Deiner Krankheit bekommen hast?
			</svelte:fragment>
			<PersonaAnswer {persona}>
				Nur einer? Ich hab ein ganzes „Bullshit Bingo“-Feld in meinem Notizblock! Viele Kommentare
				höre ich so häufig – Wenn ich jedes Mal einen Euro bekommen würde, wäre ich inzwischen
				reich. Der Klassiker: „Und wann bist du wieder gesund?“, dicht gefolgt von Ratschlägen wie:
				„Durchfall hab ich auch manchmal, mir hilft da immer Immodium“. Oder: „Du darfst länger
				Klausuren schreiben, du hast es gut!“. Lass uns gerne tauschen, du bekommst meinen NTA und
				ich deinen gesunden Darm!
			</PersonaAnswer>
		</AccordionItem>
	</Accordion>

	<MainHeading heading="Interaktion und Kommunikation" />
	<TextSection let:Text>
		<Text noTopMargin>
			Die Kommunikation der Bedarfe ist gerade bei nicht-sichtbaren Beeinträchtigungen sehr wichtig.
			Studierende sind dann auf Verständnis von und individuelle Absprachen mit Lehrpersonen
			angewiesen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-09.mp3'}>
		Mittlerweile spreche ich sehr offen über meine Erkrankung und die Symptome. Ich will, dass die
		Menschen sensibler für unsichtbare Beeinträchtigungen werden. Und das geht nur, wenn man darüber
		aufklärt.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Ein Austausch über Beeinträchtigungen unter Studierenden findet häufig in
			Selbsthilfevereinigungen statt. Eine offene Haltung und auch das Bieten von
			Austauschmöglichkeiten für Studierende kann aber auch von Lehrenden-Seite initiiert werden.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-10.mp3'}>
		Kontakt zu Mitstudierenden ist für mich recht schwierig. Das liegt daran, dass ich einfach
		unzuverlässig bin – aber halt nicht mit Absicht. Ich bin nicht jeden Tag an der Uni, ich kann
		nicht fest zusagen, ob ich zu einer Party komme und bei Gruppenarbeiten werde ich nicht zu jedem
		Termin da sein. In meinem Studiengang sind es die Leute, mit denen ich Musik mache, die viel
		Verständnis zeigen. Die kriegen das hin, mich mitzunehmen.
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Lehrende können beispielsweise Informationen zu Anlaufstellen für Beratung und Austausch
			bereitstellen und damit Studierende mit sichtbaren und nicht-sichtbaren Beeinträchtigungen
			unterstützen.
		</Text>
	</TextSection>

	<MainHeading heading="Eine Woche im Leben von" personaName={persona.name} />
	<TextSection let:Text>
		<Text noTopMargin
			>Michelles zweites Semester an der Popakademie ist seit einigen Wochen in vollem Gange. Neben
			vielen Seminaren muss sie aber auch viele Arzttermine wahrnehmen.</Text
		>
	</TextSection>

	<Week {persona} />

	<MainHeading heading="Prüfungen" />
	<SpeechBubble {persona} audio={base + '/personas/michelle/audio/chelle-sb-11.mp3'}>
		Obwohl ich einen Nachteilsausgleich habe, muss ich trotzdem immer wieder mit Lehrenden
		diskutieren und mich erklären. Das nervt. Es wäre viel konstruktiver, wenn wir darüber reden
		könnten, wie man meinen NTA sinnvoll umsetzt, anstatt darüber, ob ich den jetzt auch wirklich
		brauche. Und das jedes Semester – das zieht echt Energie. Ich renne nicht zum Spaß während einer
		Prüfung 5 mal auf die Toilette! Und dann muss ich mich ja auch immer wieder neu reindenken!
	</SpeechBubble>

	<TextSection let:Text>
		<Text>
			Schübe der Erkrankungen können durch Stress hervorgerufen oder verstärkt werden. Mithilfe
			eines Nachteilsausgleichs können Bedingungen geschaffen werden, die Studierenden mit
			Beeinträchtigungen die gleichen Voraussetzungen schaffen, ihre Leistung abzurufen und Stress
			reduzieren. Separate Räume, in denen die Prüfungen geschrieben werden können, die in der Nähe
			von Toiletten liegen, verlängerte Fristen zur Abgabe unterschiedlicher schriftlicher
			Leistungen oder auch alternative Prüfungsformate, die von zuhause aus absolviert werden
			können, werden in dem Nachteilsausgleich festgehalten.
		</Text>
	</TextSection>

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
			'Ich ermögliche eine asynchrone und remote Teilnahme an der Veranstaltung',
			'Ich mache ausreichend Pausen in langen Veranstaltungen',
			'Wenn Studierende einen Nachteilsausgleich haben, sorge ich für eine angemessene Umsetzung'
		]}
		{persona}
	/>

	<MainHeading heading="Weitere Informationen" />
	<ul class="more-info-list">
		<li>
			<Recommendation link="https://www.dccv.de/die-dccv/aktiv-werden/aktiv-bei-studiced/">
				<svelte:fragment slot="linkText">Aktiv werden bei studiCED</svelte:fragment>
				<svelte:fragment slot="textAfter">
					von der Deutschen Morbus Crohn / Colitis ulcerosa Vereinigung e.V.
				</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://www.dccv.de/betroffene-angehoerige/medizinische-grundlagen/was-ist-morbus-crohn/"
			>
				<svelte:fragment slot="linkText">Morbus Crohn</svelte:fragment>
				<svelte:fragment slot="textAfter"
					>von der Deutschen Morbus Crohn / Colitis ulcerosa Vereinigung e.V.</svelte:fragment
				>
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://www.youtube.com/watch?v=EJxZfCsCPdU">
				<svelte:fragment slot="linkText"
					>Darmkrankheit: May hat seit 11 Jahren Schmerzen | TRU DOKU</svelte:fragment
				>
				<svelte:fragment slot="textAfter">ein Video von TRU DOKU</svelte:fragment>
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
