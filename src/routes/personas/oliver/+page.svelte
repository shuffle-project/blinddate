<script lang="ts">
	import { base } from '$app/paths';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import ImportantNotice from '$lib/components/ImportantNotice.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import Puzzle from '$lib/components/Puzzle.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import ToolCard from '$lib/components/ToolCard.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import PersonaContent from '$lib/components/personaContent/PersonaContent.svelte';
	import { OLIVER } from '$lib/constants/oliver';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	const persona: Persona = OLIVER;
</script>

<PersonaContent {persona} let:MainHeading let:TextSection>
	<SpeechBubble {persona} audio={base + ''}>
		Servus, mein Name ist Oliver, ich bin 31 Jahre alt und lebe und studiere seit 4 Jahren in
		Würzburg. Ich liebe es, zu kochen – am liebsten Mexikanisch - und Musik zu machen, vor allem für
		und mit meinen Freunden. Ich habe mich für die Uni Würzburg entschieden, weil ich hier
		Lebensmittelchemie studieren kann und außerdem nicht darum kämpfen muss, dass man mich als
		Studierender mit LRS und ADHS ernst nimmt.
	</SpeechBubble>

	<SpeechBubble {persona} audio={base + ''}>
		Man kann sich LRS so vorstellen: Wenn ich schreibe, ist es, als ob ich jedes Wort das erste Mal
		in meinem Leben sehen und schreiben würde. Erinnere dich einfach mal an die Zeit, als du
		Schreiben gelernt hast und wie lange es gedauert hat, um ein Wort aus deinem Kopf auf Papier zu
		bringen. Das dauert ewig! Daher schreibe ich nur, wenn ich muss und diktiere mir meine Gedanken
		und Notizen immer.
	</SpeechBubble>

	<MainHeading heading="Technologien und Strategien" />
	<div style="overflow: hidden;">
		<ToolCard title="Unterstützungssoftware: Lesen" image="{base}/icons/lrs_adhs.svg">
			<span>Für Studierende mit</span>
			<InfoBox
				term="Lese-Rechtschreib-Störung"
				sources={[
					{
						title:
							'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5), American Psychiatric Association.'
					}
				]}
			>
				<p>
					Legasthenie, auch als <strong>Lese-Rechtschreib-Störung</strong> bekannt, ist eine spezifische
					Lernstörung, die durch Schwierigkeiten beim Erlernen des Lesens und Schreibens trotz normaler
					Intelligenz gekennzeichnet ist. Betroffene Personen haben oft Probleme mit der genauen und
					flüssigen Worterkennung sowie mit der Rechtschreibung und dem Textverständnis. Diese Schwierigkeiten
					können das schulische und berufliche Leben erheblich beeinträchtigen, sind jedoch durch spezielle
					Fördermaßnahmen oft gut zu kompensieren.
				</p>
			</InfoBox>

			<span
				>kann es hilfreich sein, sich Texte vorlesen zu lassen. Denn bei ihnen ist das
				sinnentnehmende Lesen erschwert. Das Umwandeln von Buchstaben in sinnhaften Inhalt dauert
				unter Umständen länger und kann mit viel Anstrengung verbunden sein. Um beispielsweise Texte
				zu lesen, die als Foto gespeichert wurden, kann eine Bild-zu-Text-Software – sogenannte
				OCR-Software – genutzt werden, um sich dann den Text vorlesen zu lassen.</span
			>
		</ToolCard>

		<ToolCard title="Unterstützungssoftware: Schreiben" image="{base}/icons/lrs_adhs.svg">
			Neben Schwierigkeiten beim sinnentnehmenden Lesen kann auch die Rechtschreibung, die
			Zeichensetzung, das Anfertigen von schriftlichen Texten in kurzer Zeit oder auch das Eingeben
			von Zahlen und Codes eine Hürde darstellen. Mithilfe von Schreibprogrammen mit automatischer
			Rechtschreib- und Grammatikprüfung können Studierende mit LRS unterstützt werden, um sich auf
			die inhaltliche Ebene konzentrieren zu können. Und mithilfe von Diktiersoftware (TTS) können
			Notizen schnell verfasst werden, ohne selbst schreiben und sich auf Rechtschreibung
			konzentrieren zu müssen.
		</ToolCard>
	</div>

	<MainHeading heading="LRS und ADHS" />

	<TextSection let:Text>
		<Text noTopMargin>
			Die Diagnosen LRS und AD(H)S treten nicht selten gemeinsam auf. ADHS ist die Abkürzung für
			Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung. Symptome von ADHS können unter anderem
			fehlende Filter für relevante Informationen und eine starke Ablenkbarkeit durch verschiedene
			Reize sein. Für weitere Informationen zu Strategien bei ADHS:
		</Text>
	</TextSection>

	<Recommendation
		link="https://gemeinsam-adhs-begegnen.de/leben-mit-adhs/erwachsene/ratgeber/selbstmanagement-im-alltag-mit-adhs/"
		marginBottom
	>
		<svelte:fragment slot="linkText">Selbstmanagement im Alltag mit einer ADHS</svelte:fragment>
		<svelte:fragment slot="textAfter">von Gemeinsam ADHS Begegnen</svelte:fragment>
	</Recommendation>

	<SpeechBubble {persona} audio={base + ''}>
		Für mich fängt die erste Hürde schon bei der Anmeldung auf der Homepage der Uni an. Das
		Einloggen mit Codes oder Kennwörtern ist für mich richtig schwer, weil die Buchstaben immer
		wieder zu einem Brei verschwimmen. Ich weiß nicht, wie oft ich schon diverse Support-Center
		kontaktieren musste, weil ich meine Passwörter auf Webseiten mehrfach falsch eingegeben habe.
	</SpeechBubble>
	<SpeechBubble {persona} audio={base + ''}>
		Ich nutze eine App, die mich beim Zeitmanagement etwas unterstützt. Sie blockiert beispielsweise
		für eine gewisse Zeit andere Apps auf meinem Handy, von denen ich mich leicht ablenken lasse.
		Außerdem kann ich mir damit einen Zeitplan fürs Lernen machen, damit nicht in Zeitnot komme. Bei
		mir dauert halt alles länger. Das nervt mich selbst sehr, aber ich habe mir in den letzten vier
		Jahren einige Strategien angeeignet, die mir schon helfen. Viele Strategien habe ich durch
		andere Studierende mit ADHS und LRS gelernt. Wir haben hier eine kleine Gruppe an der Uni
		Würzburg, in der wir uns immer wieder austauschen können.
	</SpeechBubble>
	<SpeechBubble {persona} audio={base + ''}>
		Ich nehme seit ein paar Jahren Medikamente, die mir helfen, mein ADHS-Gehirn etwas zu ordnen.
		Das tun die auch echt gut. Aber sie haben halt trotzdem auch Nebenwirkungen und machen mich oft
		recht müde. Seit ein paar Semestern gibt es einen Ruheraum an der Uni mit bequemen Stühlen und
		wenig Ablenkung. Da chille ich sehr gerne zwischen den Vorlesungen.
	</SpeechBubble>

	<MainHeading heading="Lehrveranstaltungen" />
	<TextSection let:Text>
		<Text noTopMargin>
			Da das sinnentnehmende Lesen für viele Studierende mit LRS erschwert oder verlangsamt ist,
			kann deren Gedächtnis sehr gut auf das Aufnehmen auditiver Inhalte trainiert sein. Trotzdem
			ist es in Veranstaltungen häufig notwendig, sich schnell und knapp Notizen machen zu können.
			Dafür können Studierende mit LRS, die einen Nachteilsausgleich beantragt haben, beispielsweise
			durch eine Mitschreibassistenz unterstützt werden. Außerdem kann die Aufzeichnung einer
			Veranstaltung - ob durch die Dozierenden selbst oder in Absprache mit den Dozierenden durch
			die Studentin oder den Studenten - hilfreich sein, um diese im Nachgang an die Veranstaltung
			erneut anzuhören oder in eine Textdatei umzuwandeln. Werden in digital stattfindenden
			Veranstaltungen Untertitel verwendet, kann aus diesen ein Transkript erstellt werden, welches
			wiederum vorgelesen oder zur Nachbereitung verwendet werden kann.
		</Text>

		<Text>
			Asynchron zur Verfügung gestellte Aufnahmen von Veranstaltungen oder Lernvideos geben den
			Studierenden mit LRS und ADHS die Möglichkeit, nach eigenem Lese- und Lerntempo arbeiten und
			individuell Pausen einbauen zu können.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + ''}>
		Ich komme mittlerweile in den Vorlesungen ganz gut mit. Das war leider nicht immer so und hat
		mich schon viele Nerven gekostet. Es fällt mir häufig sehr schwer, in Vorlesungen nicht
		gedanklich abzuschweifen oder auch Anweisungen im Labor bis zum Ende zuzuhören. Meine
		Dozierenden und Mitstudierenden bekommen gar nicht mit, wie viel Zeit ich vor und nach der
		Vorlesung investieren muss.
	</SpeechBubble>

	<Puzzle
		topLeft="Die denken sicher, dass ich dumm bin und gar nichts verstanden habe, wenn sie meine Notizen sehen. Ich muss die Notizen auf jeden Fall noch bearbeiten bevor ich sie weitergebe!"
		topRight="Klar, ich habe mitgeschrieben. Aber jetzt ist der Akku vom Laptop leer. Ich schicke euch meine Mitschrift Morgen zu, okay?"
		bottomLeft="Das ist echt anstrengend, dass ich mich immer erklären muss."
		bottomRight="Ich lasse mir nichts anmerken, zucke mit den Schultern und sage die Bandprobe für heute Abend ab – Ich muss mich da nochmal dransetzen bevor ich es rausgebe."
	/>

	<MainHeading heading="Lernmaterial" />
	<TextSection let:Text>
		<Text noTopMargin>
			Aufwendig und visuell „spannend“ gestaltete Texte, die ggf. noch durch zwischengeschaltete
			Anzeigen unterbrochen werden, oder aufwendig formulierte Aufgabenstellungen, bedeuten für
			Studierende mit LRS einen hohen Zeit- und Energieaufwand. Um diesen Zeitaufwand etwas zu
			senken, können beispielsweise Vorleseprogramme genutzt werden. Sind Dokumente barrierefrei
			konzipiert, kann mithilfe von Vorlesesoftware das Geschriebene in unterschiedlichen
			Geschwindigkeitsstufen wiedergegeben werden. Dafür ist es wichtig, dass es sich um qualitativ
			hochwertige Scans handelt, die nicht als Bild-Datei, sondern als Word, PowerPoint oder
			PDF-Datei gespeichert wurden.
		</Text>

		<Text>
			Eine klare und verständliche Ausdrucksweise bei Aufgabenstellungen, ohne unnötig lange und
			verschachtelte Sätze, kann Studierenden mit Legasthenie helfen, die Inhalte einfacher zu
			entnehmen. Gerade in Prüfungssituationen kann das zusätzlichen Stress verringern.
		</Text>
	</TextSection>

	<MainHeading heading="Interaktion und Kommunikation" />
	<TextSection let:Text>
		<Text noTopMargin>
			Studierende mit LRS oder ADHS haben, wie andere Studierende mit Beeinträchtigungen auch,
			häufig mit Vorurteilen zu kämpfen. Viele Studierende haben sich im Studium verschiedene
			Strategien angeeignet, sodass die Auswirkungen von LRS oder ADHS für Außenstehende kaum oder
			nicht sichtbar sind. Daher werden die Studierenden eventuell nicht ernst genommen, wenn sie
			beispielsweise bei Kommiliton*innen oder ihren Dozierenden um Unterstützung bitten. Außerdem
			scheinen Schwierigkeiten im Schreiben und Lesen oder im Strukturieren des (Studien-)Alltags
			häufig mit dem Vorurteil von verminderten intellektuellen Fähigkeiten verbunden. Wie andere
			Studierende mit „nicht sichtbaren“ Beeinträchtigungen ist daher viel Aufklärung des Umfelds
			nötig.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + ''}>
		Ich lerne gerne mit den anderen zusammen. Wir haben eine feste Lerngruppe, die sich regelmäßig
		trifft und die wissen auch alle über LRS und ADHS Bescheid. Am Anfang hatte ich etwas Sorgen,
		dass ich nicht so viel in der Gruppe beisteuern kann, weil meine Notizen häufig sehr wirr und
		unleserlich waren. Da ich aber viel Zeit in die Vor- und Nachbereitung der Veranstaltungen
		stecke – weil ich‘s halt muss – kann ich Themen meistens recht gut zusammenfassen und erklären!
	</SpeechBubble>

	<MainHeading heading="Prüfungen" />
	<TextSection let:Text>
		<Text noTopMargin>
			Prüfungsphasen können für Studierende mit LRS sehr belastend sein, da viele Lerninhalte
			innerhalb kürzester Zeit aufgenommen und verarbeitet werden müssen.
		</Text>

		<Text>
			Mithilfe von Nachteilsausgleichen können Studiereden mit LRS oder ADHS unterstützt werden.
			Diese können beispielsweise eine Zeitzugabe für die Abgabe von schriftlichen Ausarbeitungen
			oder einen separaten Raum, um Ablenkungen zu reduzieren, beinhalten. Außerdem können mündliche
			Prüfungen oder schriftliche Prüfungen mit Multiple-Choice-Antworten helfen, den Stress, der
			durch die Anforderung des schnellen, grammatikalisch korrekten Schreibens entsteht, etwas
			reduzieren. Sind schriftliche Antworten benötigt, können diese am Laptop mit eingeschalteter
			Rechtschreibprüfung verfasst werden. In manchen Nachteilsausgleichen kann auch festgehalten
			werden, dass eine korrekte Rechtschreibung nicht in die Bewertung der Prüfung einbezogen wird.
		</Text>
	</TextSection>

	<ImportantNotice content="lrs-compensation" />

	<FlipCard
		front="Ich habe nicht zu wenig geübt!"
		back="LRS hat neurologische Ursachen und hat nichts mit mangelndem Fleiß zu tun!"
		{persona}
	/>

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
			'Ich verfasse verständliche und eindeutige Aufgabenstellungen',
			'Ich zeichne meine Veranstaltungen auf oder gestatte eine Aufzeichnung',
			'Ich achte darauf, dass Scans von Dokumenten qualitativ hochwertig und mit einer OCR Software (Texterkennungssoftware) aufgenommen sind',
			'Ich kommuniziere Abgabefristen und wichtige Termine frühzeitig',
			'Ich gehe auf individuelle Bedarfe von Studierenden ein und stelle alternative Prüfformate zur Verfügung',
			'Wenn Studierende einen Nachteilsausgleich haben, sorge ich für eine angemessene Umsetzung'
		]}
		{persona}
	/>

	<MainHeading heading="Weitere Informationen" />
	<ul class="more-info-list">
		<li>
			<Recommendation link="https://www.bvl-legasthenie.de/ausbildung-beruf/studium.html">
				<svelte:fragment slot="linkText">Studium mit Legasthenie/Dyskalkulie</svelte:fragment>
				<svelte:fragment slot="textAfter">
					vom Bundesverband für Legasthenie und Dyskalkulie e.V.
				</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://www.studierendenwerke.de/themen/studieren-mit-behinderung/studium-und-pruefungen/technische-hilfsmittel-assistenzen/legasthenie-technische-und-personelle-unterstuetzung"
			>
				<svelte:fragment slot="linkText"
					>Legasthenie - Technische und personelle Unterstützung</svelte:fragment
				>
				<svelte:fragment slot="textAfter">vom Deutschen Studierendenwerk</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://www.mehrwert-inklusion.de/einfache-sprache">
				<svelte:fragment slot="linkText">MehrWert Einfache Sprache</svelte:fragment>
				<svelte:fragment slot="textAfter">von MehrWert Inklusion</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://www.youtube.com/watch?v=aYzGgtVHyXA">
				<svelte:fragment slot="linkText">ADHS bei Erwachsenen | ARTE Re:</svelte:fragment>
				<svelte:fragment slot="textAfter">ein Video von ARTEde</svelte:fragment>
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://www.bvl-legasthenie.de/images/static/pdfs/Ausbildung_Beruf/Ausbildung_Hilfen_Legasthenie.pdf"
			>
				<svelte:fragment slot="linkText">Checkliste für Nachteilsausgleiche (PDF)</svelte:fragment>
				<svelte:fragment slot="textAfter"
					>vom Bundesverband für Legasthenie und Dyskalkulie e.V.</svelte:fragment
				>
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://www.hs-emden-leer.de/generische-seiten/meldung?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=6591&cHash=d4003d3c1d4fca9e3134cd972e85e248"
			>
				<svelte:fragment slot="linkText"
					>Erfahrungsbericht „Mit Chaos im Kopf neue Umweltlösungen finden“
				</svelte:fragment>
				<svelte:fragment slot="textAfter">von der Hochschule Emden/Leer</svelte:fragment>
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
