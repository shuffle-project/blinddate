<script lang="ts">
	import { base } from '$app/paths';
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/accordion/AccordionItem.svelte';
	import PersonaAnswer from '$lib/components/accordion/PersonaAnswer.svelte';
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import DoItYourself from '$lib/components/DoItYourself.svelte';
	import FlipCard from '$lib/components/FlipCard.svelte';
	import MainHeading from '$lib/components/personaContent/MainHeading.svelte';
	import PersonaWrapper from '$lib/components/personaContent/PersonaWrapper.svelte';
	import SpeechBubble from '$lib/components/personaContent/SpeechBubble.svelte';
	import Text from '$lib/components/personaContent/Text.svelte';
	import TextSection from '$lib/components/personaContent/TextSection.svelte';
	import ToolCard from '$lib/components/ToolCard.svelte';
	import { KILIAN } from '$lib/constants/kilian';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	const persona: Persona = KILIAN;
</script>

<PersonaWrapper {persona}>
	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-01.mp3'}>
		Hallo und Guten Tag. Mein Name ist Kilian, ich bin 21 Jahre alt und wohne, nicht ganz
		freiwillig, mit meinen Eltern und vielen Kühen in einem Vorort von Oldenburg. An der Uni
		Oldenburg studiere ich im 2. Semester Anglistik. Eine brotlose Kunst, aber ich liebe eben
		Fremdsprachen und Literatur. Gerade arbeite ich mich durch Beowulf und sogar das gefällt mir
		gut. Wie schon erwähnt, ich wohne nicht ganz freiwillig zu Hause. Aber es gibt nur sehr wenige
		barrierefreie Appartements vom Studierendenwerk. Da bin ich nun auf der Warteliste für eine
		rollstuhlgerechte Behausung.
	</SpeechBubble>
	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-02.mp3'}>
		Ach so, ich nutze einen Rollstuhl, Orthesen und noch ein paar andere Geräte aus dem Rehabedarf.
		Ich habe eine Zerebralparese und dadurch eine Spastik in der rechten Körperhälfte. Eine
		Zerebralparese ist eine angeborene Beeinträchtigung der Nerven. Die schlägt mir auch auf‘s
		Gleichgewicht und meinen Orientierungssinn. Kurz gesagt: Meine rechte Körperhälfte macht halt,
		was sie will – und ich den Rest mit links. Nicht nur in meinem Studium, auch außerhalb
		interessiere ich mich sehr für Sprachen. Deshalb versuche ich auch oft im Ausland unterwegs zu
		sein. Meine Trips und Erfahrungen verarbeite ich in einem kleinen <span lang="en"
			>Travel-Blog</span
		>. Da gibt‘s natürlich auch viele Infos zum Thema Reisen mit Mobilitätseinschränkung. Insta hab
		ich auch und darüber richtig guten Kontakt zu einer internationalen Gruppe anderer
		<span lang="en">travelling crips</span>.
	</SpeechBubble>
	<MainHeading heading="Technologien und Strategien" />
	<div style="overflow:hidden;">
		<ToolCard title="Eingabehilfen" image="{base}/tools/trackball.svg">
			Die benötigten Hilfsmittel und Strategien, die Personen mit motorischen Beeinträchtigungen
			nutzen, sind stark von der Ausprägung der Beeinträchtigung abhängig. Bei verschiedenen
			motorischen Beeinträchtigungen – wie beispielsweise einer Zerebralparese - kommt es zu einer
			muskulären Spastik, die sich in erhöhter oder unkontrollierbarer Muskelspannung zeigt.
			Außerdem können verschiedene Bereiche bzw. Extremitäten betroffen sein. Mithilfe von
			angepassten Tastaturen, Computer-Mäusen und anderen Eingabegeräten sowie speziellen
			Schreibtischstühlen können Arbeitsplätze so ausgestattet werden, dass die Muskelspannung und
			chronische Schmerzen reduziert werden.
		</ToolCard>
		<ToolCard title="Energie-Management" image="{base}/tools/calender.svg">
			Die unkontrollierbaren Anspannungen der Muskulatur verbrauchen sehr viel Energie und sind
			dadurch häufig sehr ermüdend. Regelmäßige Pausen, Aufteilen von Aufgaben in kleinere
			„Häppchen“ und ein gutes Energie-Management sind daher wichtige Strategien.
		</ToolCard>
		<ToolCard title="Muskelspannung reduzieren" image="{base}/tools/orthotic.svg">
			Um die Muskelspannung und dadurch auftretende Schmerzen zu reduzieren, können eine passende
			Medikation, Wärme, regelmäßige Physiotherapie und Orthesen helfen.
		</ToolCard>
	</div>
	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-03.mp3'}>
		Zu Hause habe ich einen Trackball und eine Großfeldtastatur. Die sieht halt aus wie für Omas.
		Aber so schaffe ich es, zuverlässig die richtige Taste zu treffen, was auf einer normalen
		Tastatur wegen der Spastik eher ein Glücksspiel ist. Häufig nutze ich auch die Spracheingabe.
		Das geht manchmal einfach schneller - oder auch nicht, je nachdem, was meine Sprachmuskulatur
		gerade so macht.
	</SpeechBubble>
	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-04.mp3'}>
		Da die Lähmung meiner rechten Körperhälfte nicht zu stark ausgeprägt ist, kann ich kurze
		Strecken laufen. Ich wackel dabei aber ziemlich viel und laufe mit einem Spitzfuß. Und langsam
		bin ich auch noch. Laufen ist für mich einfach sehr anstrengend. Wenn ich mich schnell und
		grazil fortbewegen möchte, nutze ich meinen Aktiv-Rollstuhl – der ist klein und wendig und ich
		kann ihn mit einem Arm antreiben. Der begleitet mich auch immer an die Uni. Die Leute gucken
		ganz schön blöd, wenn ich im Rollstuhl irgendwo ankomme und dann laufe. Ich nenne das den
		Lazarus Effekt. Aber ich habe auch nicht immer Lust zu erklären, warum es manchmal geht und
		manchmal eben rollt.
	</SpeechBubble>

	<DoItYourself content="wheelchair-moving" />

	<MainHeading heading="Lehrveranstaltungen" />
	<TextSection>
		<Text noTopMargin>
			Werden Aufzeichnungen von Veranstaltungen online und asynchron zur Verfügung gestellt,
			ermöglicht das die häufig benötigte Flexibilität und kann so mit regelmäßigen Pausen und
			medizinisch wichtigen Terminen besser vereinbart werden.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-05.mp3'}>
		Wenn ich Präsenzveranstaltungen habe, dann fahre ich oft mit einem Taxi an die Uni. Das ist eine
		Leistung, die ich bekomme, weil wir nicht gut angebunden sind. Mit dem Aufzug, der in der
		hintersten Ecke des Gebäudes ist, muss ich zur richtigen Etage fahren und dann noch zum
		richtigen Raum. Für den Aufzug braucht man einen Schlüssel, den muss ich mir immer vom
		Hausmeister holen. Also ist meine erste Aufgabe, den zu finden. Das kostet Zeit. Und das geht
		auch nur in Gebäuden, die tatsächlich ansatzweise barrierefrei sind. Andere Gebäude sind für
		mich einfach nicht zugänglich. Dazu gehören auch Büros von Lehrenden. Wegen des ganzen Hickhacks
		bin ich schon oft zu spät zu Vorlesungen gekommen. Das ist ganz schön peinlich, weil ich ja
		zusätzlich noch auf dem Präsentierteller sitzen muss – also in der ersten Reihe, weil da ein
		Rollstuhlplatz ist. Naja, jetzt kennen mich immerhin alle!
	</SpeechBubble>

	<TextSection>
		<Text>
			Nicht alle Gebäude und Räume in Universitäten sind barrierefrei zugänglich für Menschen, die
			einen Rollstuhl nutzen. Ein weitläufiger Campus oder viele Gebäude können für Studierende mit
			Mobilitätseinschränkungen viel Zeit beanspruchen, sodass ein schneller Raumwechsel kaum
			möglich ist. Nicht selten erfordert es zusätzliche Unterstützung.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-06.mp3'}>
		Viele Gebäude und Räume der Uni sind offiziell barrierefrei zugänglich. Das ist aber irgendwie
		Interpretationssache. Bei uns gibt es zum Beispiel eine Rampe, die so steil ist, dass ich
		rückwärts runterrollen würde, wenn niemand hinter mir ist. Die Tür zum Gebäude geht dann auch
		noch nach außen auf.
	</SpeechBubble>

	<TextSection>
		<Text>
			Unterstützungen für Studierende mit (motorischen) Beeinträchtigungen, die Universitäten
			bieten, sind häufig nicht bekannt. Mit Übersichten oder Hinweisen zu diesen Angeboten –
			beispielsweise auf einer Präsentationsfolie zu Beginn des Semesters zusammengefasst – können
			die Angebote breit kommuniziert und somit bei Bedarf auch genutzt werden.
		</Text>
	</TextSection>

	<DoItYourself content="wheelchair-sitting" />

	<MainHeading heading="Lernmaterial" />
	<TextSection>
		<Text noTopMargin>
			Auch hier gilt: Das Bereitstellen von Materialien in mehreren Modalitäten ermöglicht ein
			Aneignen der Inhalte angepasst auf verschiedene Bedarfe. Da eine konstante Muskelanspannung
			für den gesamten Körper oder auch die Augenmuskulatur sehr ermüdend sein kann, ist eine
			auditive Aufnahme manchmal hilfreich. Diese Ermüdung erfordert regelmäßige Pausen – eine
			asynchrone Beschäftigung mit Lernmaterialien kann helfen, diese Pausen in den Studienalltag
			einzubauen.
		</Text>
		<Text>
			Qualitativ hochwertige Scans von Dokumenten sind gerade bei einer benötigten Vergrößerung sehr
			wichtig.
		</Text>
	</TextSection>
	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-07.mp3'}>
		Ich gehe sehr gerne in die Bibliothek. Nicht nur zum Lernen, auch einfach um Bücher zu schmökern
		oder mir Inspiration zu holen. Allerdings kann ich mich nicht nur in den Büchern verlieren –
		mein Orientierungssinn ist so schlecht, dass ich mich in der großen Bib nicht zurecht finde.
		Bevor ich, wie Hänsel und Gretel, eine Spur Brotkrumen legen muss, gehe ich lieber mit
		Freundinnen aus meinem Kurs. Da weiß ich, dass die mich nicht vergessen. Es gibt auch einen
		Bibliotheksservice - dort kann ich Mitarbeitende fragen, ob sie mir helfen, ein Buch
		rauszusuchen. Das ist prima, wenn ich einfach nur schnell etwas brauche.
	</SpeechBubble>

	<MainHeading heading="Interaktion und Kommunikation" />
	<TextSection>
		<Text noTopMargin>
			Motorische Beeinträchtigungen können Lähmungen verschiedenster Muskeln im Körper bedeuten. Es
			kann also auch die Stimmmuskulatur betroffen sein. Nicht selten wird einer langsameren und
			verwaschenen Aussprache mit Ungeduld begegnet. Und wird eine Person mit motorischer
			Beeinträchtigung durch eine Assistenzkraft begleitet und unterstützt, wird diese teilweise als
			einzige Kommunikationsperson gesehen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-08.mp3'}>
		Die Zerebralparese ist mit einer erhöhten Muskelspannung verbunden. Die betrifft auch meine
		Stimmbänder und daher spreche ich etwas langsamer. Anstrengender ist es auch noch. Manchmal
		haben es Menschen beim Zuhören eilig. Dann vervollständigen sie schnell meine Sätze oder hören
		nach zwei Worten direkt weg. Das nervt echt. Und da erwarte ich mehr Geduld und Respekt mir
		gegenüber.
	</SpeechBubble>

	<TextSection>
		<Text>
			Manche Menschen mit motorischen Beeinträchtigungen werden durch Assistenzkräfte im Alltag
			unterstützt. Diese Unterstützung kann im Umfang und in den Aufgaben ganz unterschiedlich
			ausfallen. Wichtig ist, dass bei der Kommunikation darauf geachtet wird, direkt mit der Person
			zu sprechen und nicht davon auszugehen, dass die Assistenzkraft die Kommunikation übernimmt.
		</Text>
	</TextSection>

	<FlipCard
		front="Ich bin nicht schwer von Begriff!"
		back="Ich spreche nur langsamer, weil die Zerebralparese - und nicht ich - meine Sprechmuskulatur kontrolliert."
		personaName={persona.name}
	/>

	<MainHeading heading="Prüfungen" />
	<TextSection>
		<Text noTopMargin>
			Um Prüfungen mit den gleichen Voraussetzungen wie Mitstudierende ohne Beeinträchtigungen
			ablegen zu können, haben Studierende mit motorischen Beeinträchtigungen ein Anrecht auf einen
			Nachteilsausgleich. Die benötigten Anpassungen darin können sehr unterschiedlich ausfallen und
			werden idealerweise mit den Beauftragten für Studierende mit Beeinträchtigungen besprochen und
			durch das Prüfungsamt genehmigt.
		</Text>
		<Text>
			Häufig ist es so, dass die Studierenden selbst dann Kontakt zu den Lehrenden aufnehmen müssen,
			um diese Anpassungen vor einer Prüfung abzusprechen.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-09.mp3'}>
		Ich bin schon vor Beginn des Studiums zum Beauftragten für Studierende mit Beeinträchtigungen
		gegangen. Dort wurde mir gesagt, was ich alles besorgen muss, damit ich <span lang="en"
			>accommodations</span
		> kriege. Ich habe jetzt einen Nachteilsausgleich, der mir eine Zeitverlängerung bei Prüfungen und
		Abgaben gibt. Ich brauche wegen der Spastik einfach länger zum Schreiben oder Tippen. Und ab und
		zu muss ich etwas Pause machen, um meine Muskeln zu entspannen. Auch für mündliche Prüfungen oder
		Referate brauche ich mehr Zeit, da ich langsam spreche. Bisher hat das alles gut geklappt. Was mich
		allerdings nervt, ist, dass alle Wege bei mir liegen. Ich muss bei jeder Prüfung zum Prüfungsamt.
		Wenn Räume nicht barrierefrei sind, muss ich das melden.
	</SpeechBubble>
	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-10.mp3'}>
		Mir wurden nicht alle Hilfsmittel, die ich für‘s Studium brauche, sofort oder überhaupt
		bewilligt. Den Fahrdienst muss ich auch jeden Monat planen und mir einteilen, da der ja nicht
		unbegrenzt zur Verfügung steht. Die ständige Organisation ist eigentlich ein kompletter
		Nebenjob, der nicht bezahlt wird. Ich glaube, dass es da einfachere Lösungen gäbe, wenn man
		wollte.
	</SpeechBubble>

	<TextSection>
		<Text>
			Der psychische Zustand einer Person kann sich auch auf die Anspannung der Muskulatur
			auswirken. Aufgeregtsein vor einer Prüfung kann die Spastik der Muskulatur daher verstärken.
			Eine klare Absprache und Organisation – von barrierefrei zugänglichen Räumen, Betreuung bei
			Zeitzugabe etc. - vor einer Prüfung helfen, diese vor einer Prüfung herrschende Anspannung
			nicht noch zu verstärken.
		</Text>
	</TextSection>

	<SpeechBubble {persona} audio={base + '/personas/kilian/audio/kilian-sb-11.mp3'}>
		Mein Motto ist: <span lang="en">be prepared</span>. So versuche ich im Voraus Stress zu
		vermeiden. Oder improvisierte Lösungen, die vor allem für mich schlecht sind - und unter
		Umständen unangenehm oder sogar gefährlich sein könnten. Dazu gehört zum Beispiel, mich in
		irgendein Gebäude tragen zu wollen.
	</SpeechBubble>

	<Accordion personaName={persona.name}>
		<AccordionItem>
			{#snippet question()}
				Was ist ein No-Go, wenn ich Rollstuhlnutzenden begegne?
			{/snippet}
			{#snippet content()}
				<PersonaAnswer {persona}>
					Das ist easy: Bitte nicht einfach drauflos schieben! In dem Moment, in dem ich im
					Rollstuhl sitze, ist dieser sozusagen mein 'Ersatzbein'. Und ich fasse ja auch nicht
					einfach die Beine einer anderen Person an! Ich freue mich meistens über nett gemeinte
					Hilfsangebote, aber ich bin auch ein selbstständiger Mensch. Eine kurze Nachfrage kann uns
					beide vor unangenehmen Situationen bewahren.
				</PersonaAnswer>
			{/snippet}
		</AccordionItem>

		<AccordionItem>
			{#snippet question()}
				Welchen digitalen Barrieren begegnest Du?
			{/snippet}
			{#snippet content()}
				<PersonaAnswer {persona}>
					Klar, wenn man eine Person im Rollstuhl sieht, denkt man erstmal an bauliche Barrieren.
					Das ist aber nicht alles: Assistive Technologien wie meine Großfeldtastatur ermöglichen
					zwar grundsätzlich meine Teilhabe am digitalen Leben, aber das geht trotzdem langsamer als
					bei anderen. Wenn ein Dozent in einer Online Vorlesung beispielsweise wissen will, ob es
					noch Fragen gibt, brauche ich länger, bis ich den winzigen 'Hand heben'-Button gedrückt
					habe. Bis dahin hat er die Konferenz womöglich schon beendet.
				</PersonaAnswer>
			{/snippet}
		</AccordionItem>
	</Accordion>

	<MainHeading heading="Selbstcheck Barrierefreiheit" />

	<TextSection>
		<Text noTopMargin>
			Hier finden Sie eine Checkliste, um zu überprüfen, wie barrierefrei Ihre Lehre bereits ist.
		</Text>
	</TextSection>

	<Checklist
		{persona}
		stringChecks={[
			'Ich informiere mich über digitale Barrierefreiheit',
			'Ich zeichne meine Veranstaltungen auf oder gestatte eine Aufzeichnung',
			'Ich ermögliche eine asynchrone oder remote Teilnahme an Veranstaltungen',
			'Ich mache ausreichend Pausen in langen Veranstaltungen',
			'Wenn Studierende einen Nachteilsausgleich haben, sorge ich für eine angemessene Umsetzung'
		]}
	/>
</PersonaWrapper>
