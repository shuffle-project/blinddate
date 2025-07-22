<script lang="ts">
	import { base } from '$app/paths';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import ImportantNotice from '$lib/components/ImportantNotice.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import Puzzle from '$lib/components/Puzzle.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import ToolCard from '$lib/components/ToolCard.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import FactCarousel from '$lib/components/factCarousel/FactCarousel.svelte';
	import MainHeading from '$lib/components/personaContent/MainHeading.svelte';
	import PersonaWrapper from '$lib/components/personaContent/PersonaWrapper.svelte';
	import SpeechBubble from '$lib/components/personaContent/SpeechBubble.svelte';
	import Text from '$lib/components/personaContent/Text.svelte';
	import TextSection from '$lib/components/personaContent/TextSection.svelte';
	import { personaTagIds } from '$lib/constants/environment';
	import { OLIVER } from '$lib/constants/oliver';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	const persona: Persona = OLIVER;
</script>

<PersonaWrapper {persona}>
	<SpeechBubble {persona} audio={base + '/personas/oliver/audio/oliver-sb-01.mp3'}>
		Servus, mein Name ist Oliver, ich bin 31 Jahre alt und studiere seit 4 Jahren in Würzburg. Ich
		liebe es, zu kochen – am liebsten natürlich Mexikanisch - und Musik zu machen, vor allem für und
		mit meinen Freunden. Ich habe mich für die Uni Würzburg entschieden, weil ich hier
		Lebensmittelchemie studieren kann und außerdem nicht darum kämpfen muss, dass man mich als
		Student mit LRS und ADHS ernst nimmt.
	</SpeechBubble>

	<SpeechBubble {persona} audio={base + '/personas/oliver/audio/oliver-sb-02.mp3'}>
		Man kann sich LRS so vorstellen: Wenn ich schreibe, ist es so, als ob ich jedes Wort das
		allererste Mal in meinem Leben sehen und schreiben würde. Erinnere dich einfach mal an die Zeit,
		als du Schreiben gelernt hast und wie lange es gedauert hat, um ein Wort aus deinem Kopf auf
		Papier zu bringen. Das dauert ewig! Daher schreibe ich nur, wenn ich muss und diktiere mir
		einfach lieber Gedanken und Notizen.
	</SpeechBubble>

	<MainHeading heading="Technologien und Strategien" />
	<div style="overflow: hidden;">
		<ToolCard title="Unterstützungssoftware: Lesen" image="{base}/tools/screenreader.svg">
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
				>kann es hilfreich sein, sich Texte vorlesen zu lassen, denn das sinnentnehmende Lesen kann
				erschwert sein. Das Umwandeln von Buchstaben in sinnhaften Inhalt dauert unter Umständen
				länger und kann mit viel Anstrengung verbunden sein.
				<span tabindex="-1" id={personaTagIds.oliver.vorlesefunktion}>
					Um beispielsweise Texte zu lesen, die als Foto gespeichert wurden, kann eine
					Bild-zu-Text-Software – sogenannte OCR-Software – genutzt werden, um sich dann den Text
					vorlesen zu lassen.
				</span>
			</span>
		</ToolCard>

		<ToolCard title="Unterstützungssoftware: Schreiben" image="{base}/tools/voice-recording.svg">
			Neben Schwierigkeiten beim sinnentnehmenden Lesen kann auch die Rechtschreibung, die
			Zeichensetzung, das Anfertigen von schriftlichen Texten in kurzer Zeit oder auch das Eingeben
			von Zahlen und Codes eine Hürde darstellen.

			<span tabindex="-1" id={personaTagIds.oliver.rechtschreibpruefung}>
				Mithilfe von Schreibprogrammen mit automatischer Rechtschreib- und Grammatikprüfung können
				Studierende mit LRS unterstützt werden, um sich auf die inhaltliche Ebene konzentrieren zu
				können.
			</span>

			Und mithilfe von Diktiersoftware (TTS) können Notizen schnell verfasst werden, ohne selbst
			schreiben und sich auf Rechtschreibung konzentrieren zu müssen.
		</ToolCard>

		<ToolCard title="Energiemanagement" image="{base}/tools/regular-breaks.svg">
			Auch das regelmäßige Einlegen von Pausen, um beispielsweise das visuelle „Verschwimmen“ von
			Buchstaben zu vermeiden, kann eine Strategie für Studierende mit Legasthenie sein.
		</ToolCard>

		<ToolCard title="Studienorganisation" image="{base}/tools/day-plan.svg">
			LRS und AD(H)S können sich auch auf die Selbstorganisation im Studium auswirken. Deshalb kann
			eine Unterstützung durch Studienbüros, Support-Zentren oder <span lang="en">Study-Buddy</span
			>-Programme an Hochschulen für Studierende mit ADHS eine sinnvolle Strategie zur Organisation
			des Studiums sein.</ToolCard
		>
	</div>

	<MainHeading heading="LRS und ADHS" />

	<TextSection>
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
		{#snippet linkText()}
			Selbstmanagement im Alltag mit einer ADHS
		{/snippet}
		{#snippet textAfter()}
			von Gemeinsam ADHS Begegnen
		{/snippet}
	</Recommendation>

	<SpeechBubble {persona} audio={base + '/personas/oliver/audio/oliver-sb-03.mp3'}>
		Ich stoße schon bei der Anmeldung auf der Homepage der Uni auf die erste Hürde. Das Einloggen
		mit Codes oder Kennwörtern ist für mich richtig schwer, weil die Buchstaben immer wieder zu
		einem Brei verschwimmen. Ehrlich gesagt, hab ich gar kein Plan mehr, wie oft ich schon diverse
		Support-Center anrufen musste, weil ich meine Passwörter mehrfach falsch eingegeben habe.
	</SpeechBubble>
	<SpeechBubble {persona} audio={base + '/personas/oliver/audio/oliver-sb-04.mp3'}>
		Ich nutze eine App, die mich beim Zeitmanagement etwas unterstützt. Sie blockiert beispielsweise
		für eine gewisse Zeit andere Apps auf meinem Handy, von denen ich mich leicht ablenken lasse.
		Außerdem kann ich mir damit einen Zeitplan fürs Lernen machen, damit ich nicht in Zeitnot komme.
		Bei mir dauert halt alles länger und ... das kotzt mich selbst am meisten an, aber ich habe mir
		in den letzten vier Jahren einige Strategien angeeignet, die mir schon helfen. Viele Strategien
		habe ich durch andere Studenten mit ADHS und LRS gelernt. Wir haben hier an der Uni Würzburg
		eine kleine Gruppe, in der wir uns immer wieder austauschen können.
	</SpeechBubble>
	<SpeechBubble {persona} audio={base + '/personas/oliver/audio/oliver-sb-05.mp3'}>
		Ich nehme seit ein paar Jahren Medikamente, die mir helfen, mein ADHS-Gehirn etwas zu ordnen.
		Das tun die auch echt gut. Aber sie haben halt trotzdem auch Nebenwirkungen und machen mich oft
		recht müde. Zum Glück gibt es seit ein paar Semestern einen Ruheraum an der Uni mit bequemen
		Stühlen und wenig Ablenkung. Da chille ich sehr gerne zwischen den Vorlesungen.
	</SpeechBubble>

	<FactCarousel facts={persona.facts!} />

	<MainHeading heading="Lehrveranstaltungen" />
	<TextSection>
		<Text noTopMargin>
			Da das sinnentnehmende Lesen für viele Studierende mit LRS erschwert oder verlangsamt ist,
			kann deren Gedächtnis sehr gut auf das Aufnehmen auditiver Inhalte trainiert sein. Trotzdem
			ist es in Veranstaltungen häufig notwendig, sich schnell und knapp Notizen machen zu können.
			Dafür können Studierende mit LRS, die einen Nachteilsausgleich beantragt haben, beispielsweise
			durch eine Mitschreibassistenz unterstützt werden. Außerdem kann die Aufzeichnung einer
			Veranstaltung - ob durch die Dozierenden selbst oder in Absprache mit den Dozierenden durch
			die Studentin oder den Studenten - hilfreich sein, um die Inhalte erneut anzuhören oder sie in
			eine Textdatei umzuwandeln. Werden in digital stattfindenden Veranstaltungen Untertitel
			verwendet, kann aus diesen ein Transkript erstellt werden, welches wiederum vorgelesen oder
			zur Nachbereitung verwendet werden kann.
		</Text>

		<Text>
			Asynchron zur Verfügung gestellte Aufnahmen von Veranstaltungen oder Lernvideos geben den
			Studierenden mit LRS und ADHS die Möglichkeit, nach eigenem Lese- und Lerntempo arbeiten und
			individuell Pausen einbauen zu können.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/oliver/audio/oliver-sb-06.mp3'}>
		Mittlerweile komme ich ganz gut in den Vorlesungen mit. Das war leider nicht immer so und hat
		mich schon extrem viele Nerven gekostet. Es fällt mir häufig sehr schwer, in Vorlesungen nicht
		gedanklich abzuschweifen oder auch Anweisungen im Labor bis zum Ende zuzuhören. Ich glaube,
		meine Dozenten und Kommilitonen bekommen gar nicht mit, wie viel Zeit ich vor und nach der
		Vorlesung investieren muss.
	</SpeechBubble>

	<Puzzle
		topLeft="Die denken sicher, dass ich dumm bin und gar nichts verstanden habe, wenn sie meine Notizen sehen. Ich muss die Notizen auf jeden Fall noch bearbeiten bevor ich sie weitergebe!"
		topRight="Klar, ich habe mitgeschrieben. Aber jetzt ist der Akku vom Laptop leer. Ich schicke euch meine Mitschrift Morgen zu, okay?"
		bottomLeft="Das ist echt anstrengend, dass ich mich immer erklären muss."
		bottomRight="Ich lasse mir nichts anmerken, zucke mit den Schultern und sage die Bandprobe für heute Abend ab – Ich muss mich da nochmal dransetzen bevor ich es rausgebe."
	/>

	<MainHeading heading="Lernmaterial" />
	<TextSection>
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
			entnehmen. Gerade in Prüfungssituationen kann das zusätzlichen Stress verhindern.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/oliver/audio/oliver-sb-07.mp3'}>
		<span tabindex="-1" id={personaTagIds.oliver.ablenkung}>
			Ohje, ich lasse mich ziemlich leicht von einer Aufgabe ablenken - aber nur selten von so
			offensichtlichen Dingen wie Handyspielen!
		</span>

		Es reicht schon, wenn ich meine Chemienotizen zum Lernen aufschlage und sehe, dass ich dort
		etwas grün unterstrichen habe. Dann frage ich mich: Wo ist eigentlich der grüne Stift? Also
		schaue ich in der Schublade nach, die klemmt, und ich erinnere mich, dass ich sie schon so lange
		reparieren wollte. Dazu brauche ich Werkzeug aus der Garage natürlich. Kaum dort angekommen,
		finde ich im Schrank eine Kiste mit Schrauben, die ich dann erstmal sortiere und ... dann merke
		ich irgendwann: Ich wollte doch eigentlich lernen! Das passiert mir ziemlich häufig. Deshalb
		brauche ich klare Vorgaben, die ich mir selbst setze, um fokussiert zu bleiben.
	</SpeechBubble>

	<MainHeading heading="Interaktion und Kommunikation" />
	<TextSection>
		<Text noTopMargin>
			Studierende mit LRS oder ADHS haben, wie bei anderen Studierenden mit Beeinträchtigungen auch,
			häufig mit Vorurteilen zu kämpfen. Viele Studierende haben sich im Studium verschiedene
			Strategien angeeignet, sodass die Auswirkungen von LRS oder ADHS für Außenstehende kaum oder
			nicht sichtbar sind. Daher werden die Studierenden eventuell nicht ernst genommen, wenn sie
			beispielsweise bei Kommiliton*innen oder ihren Dozierenden um Unterstützung bitten.
			<span tabindex="-1" id={personaTagIds.oliver.vorurteile}>
				Außerdem werden Schwierigkeiten im Schreiben und Lesen oder im Strukturieren des
				(Studien-)Alltags häufig mit dem Vorurteil von verminderten intellektuellen Fähigkeiten
				verbunden.
			</span>

			Wie andere Studierende mit „nicht sichtbaren“ Beeinträchtigungen ist daher viel Aufklärung des
			Umfelds nötig.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/oliver/audio/oliver-sb-08.mp3'}>
		Ich lerne gerne mit den anderen zusammen. Wir haben da eine feste Lerngruppe, die sich
		regelmäßig trifft und die wissen auch alle über LRS und ADHS Bescheid. Am Anfang hatte ich etwas
		Sorgen, dass ich nicht so viel in der Gruppe beisteuern kann, weil meine Notizen häufig sehr
		wirr und unleserlich waren. Da ich aber viel Zeit in die Vor- und Nachbereitung der
		Veranstaltungen stecke – weil ich‘s halt muss – kann ich den Stoff meistens recht gut
		zusammenfassen und erklären!
	</SpeechBubble>

	<MainHeading heading="Prüfungen" />
	<TextSection>
		<Text noTopMargin>
			Prüfungsphasen können für Studierende mit LRS sehr belastend sein, da viele Lerninhalte
			innerhalb kürzester Zeit aufgenommen und verarbeitet werden müssen.
		</Text>

		<Text>
			Mithilfe von Nachteilsausgleichen können Studierende mit LRS oder ADHS unterstützt werden.
			Diese können beispielsweise eine Zeitzugabe für die Abgabe von schriftlichen Ausarbeitungen
			oder einen separaten Raum, um Ablenkungen zu reduzieren, beinhalten. Außerdem können mündliche
			Prüfungen oder schriftliche Prüfungen mit <span lang="en">Multiple-Choice</span>-Antworten
			helfen, den Stress, der durch die Anforderung des schnellen, grammatikalisch korrekten
			Schreibens entsteht, etwas zu reduzieren. Sind schriftliche Antworten benötigt, können diese
			am Laptop mit eingeschalteter Rechtschreibprüfung verfasst werden. In manchen
			Nachteilsausgleichen kann auch festgehalten werden, dass eine korrekte Rechtschreibung nicht
			in die Bewertung der Prüfung einbezogen wird.
		</Text>
	</TextSection>

	<ImportantNotice content="lrs-compensation" />

	<FlipCard
		front="Ich habe nicht zu wenig geübt!"
		back="LRS hat neurologische Ursachen und hat nichts mit mangelndem Fleiß zu tun!"
		personaName={persona.name}
	/>

	<MainHeading heading="Selbstcheck Barrierefreiheit" />

	<TextSection>
		<Text noTopMargin>
			Hier finden Sie eine Checkliste, um zu überprüfen, wie barrierefrei Ihre Lehre bereits ist.
			Diese dient als Einstieg und ersetzt keine umfassende Betrachtung des Themas.
		</Text>
	</TextSection>

	<Checklist
		stringChecks={[
			'Ich informiere mich über digitale Barrierefreiheit',
			'Ich signalisiere Offenheit, indem ich meine Bereitschaft zur individuellen Unterstützung betone, aber vermeide es, Studierende zur Offenlegung persönlicher Informationen zu drängen',
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
				{#snippet linkText()}
					Studium mit Legasthenie/Dyskalkulie
				{/snippet}
				{#snippet textAfter()}
					vom Bundesverband für Legasthenie und Dyskalkulie e.V.
				{/snippet}
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://www.studierendenwerke.de/themen/studieren-mit-behinderung/studium-und-pruefungen/technische-hilfsmittel-assistenzen/legasthenie-technische-und-personelle-unterstuetzung"
			>
				{#snippet linkText()}
					Legasthenie - Technische und personelle Unterstützung
				{/snippet}
				{#snippet textAfter()}
					vom Deutschen Studierendenwerk
				{/snippet}
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://www.mehrwert-inklusion.de/einfache-sprache">
				{#snippet linkText()}
					MehrWert Einfache Sprache
				{/snippet}
				{#snippet textAfter()}
					von MehrWert Inklusion
				{/snippet}
			</Recommendation>
		</li>
		<li>
			<Recommendation link="https://www.youtube.com/watch?v=aYzGgtVHyXA">
				{#snippet linkText()}
					ADHS bei Erwachsenen | ARTE Re:
				{/snippet}
				{#snippet textAfter()}
					ein Video von ARTEde
				{/snippet}
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://www.bvl-legasthenie.de/images/static/pdfs/Ausbildung_Beruf/Ausbildung_Hilfen_Legasthenie.pdf"
			>
				{#snippet linkText()}
					Checkliste für Nachteilsausgleiche (PDF)
				{/snippet}
				{#snippet textAfter()}
					vom Bundesverband für Legasthenie und Dyskalkulie e.V.
				{/snippet}
			</Recommendation>
		</li>
		<li>
			<Recommendation
				link="https://www.hs-emden-leer.de/generische-seiten/meldung?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=6591&cHash=d4003d3c1d4fca9e3134cd972e85e248"
			>
				{#snippet linkText()}
					Erfahrungsbericht „Mit Chaos im Kopf neue Umweltlösungen finden“
				{/snippet}
				{#snippet textAfter()}
					von der Hochschule Emden/Leer
				{/snippet}
			</Recommendation>
		</li>
	</ul>
</PersonaWrapper>

<style lang="scss">
	.more-info-list {
		list-style-type: none;
		padding: 0;
	}
</style>
