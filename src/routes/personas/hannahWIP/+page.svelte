<script lang="ts">
	import { base } from '$app/paths';
	import Diy from '$lib/components/DIY.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import PersonaContent from '$lib/components/PersonaContent.svelte';
	import Puzzle from '$lib/components/Puzzle.svelte';
	import Recommendation from '$lib/components/Recommendation.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import ToolCard from '$lib/components/ToolCard.svelte';
	import { HANNAH } from '$lib/constants/hannah';
	import Carousel from '../../../lib/components/Carousel.svelte';
	import Checklist from '../../../lib/components/checklist/Checklist.svelte';
	import FlipCard from '../../../lib/components/FlipCard.svelte';
	import Week from '../../../lib/components/Week.svelte';
	const persona = HANNAH;
</script>

<svelte:head>
	<title>{persona.name} - BLIND DATE</title>
</svelte:head>

<PersonaContent {persona}>
	<svelte:fragment slot="content">
		<Carousel />

		<FlipCard
			front="Ich bin nicht faul!"
			back="Ich habe eine chronische Krankheit, wegen der ich häufig zu spät komme!"
		/>

		<SpeechBubble {persona}>
			Hallo, ich bin Hannah. Ich bin 25 Jahre alt und studiere Mathematik im Bachelor in Dortmund.
			Ich wohne gemeinsam mit meinen zwei Mitbewohnern in einer WG und fühle mich hier richtig wohl.
			In meiner Freizeit spiele ich Handball mit einer Gruppe aus Hörenden und Hörbeeinträchtigten,
			gehe gerne Essen und schaue Filme und Serien. Ich bin von Geburt an hochgradig
			hörbeeinträchtigt auf beiden Ohren. Ich trage links ein Hörgerät und rechts ein
			Cochlea-Implantat, und nutze sowohl die Lautsprache als auch die Gebärdensprache. Allgemein
			bevorzuge ich eher die Kommunikation in Lautsprache.
		</SpeechBubble>

		<Puzzle />

		<Diy content="keyboard" />
		<Recommendation link="https://www.google.com">
			<svelte:fragment slot="textBefore">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di am
			</svelte:fragment>

			<svelte:fragment slot="linkText">Kontrastseh</svelte:fragment>

			<svelte:fragment slot="textAfter">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut la bore et dolore magna aliquyam
			</svelte:fragment>
		</Recommendation>

		<h2 id="week">Eine Woche im Leben von Hannah</h2>
		<p>
			Hannah befindet sich im zweiten Jahr ihres BSc. Mathematikstudiums an der Technischen
			Hochschule Dortmund. Dies ist die zweite Woche des WS22 und Hannah hat eine volle Auslastung
			von 5 Kursen.
		</p>

		<Week {persona} />

		<h2 id="tools">Technologien und Strategien</h2>
		<div>
			<ToolCard title="Hörgeräte" image="{base}/tools/hearing-aid.svg">
				Bei einigen Hörbeeinträchtigungen können Hörgeräte eingesetzt werden. Diese verstärken
				Schallwellen und lenken sie ins Innenohr.
			</ToolCard>

			<ToolCard title="Cochlea-Implantat (CI)" image="{base}/tools/cochlea-implant.svg">
				Bei bestimmten Hörbeeinträchtigungen (z.B. einer Innenohrschwerhörigkeit) und wenn der
				Hörnerv und die Hörbahn intakt sind, kann ein Cochlea-Implantat (CI) eingesetzt werden. Es
				sitzt innerhalb des Kopfes. Außen am Kopf sieht man den dazugehörigen Sprachprozessor, der
				Schallwellen in elektrische Impulse umwandelt. Der Sprachprozessor ist abnehmbar, zum
				Beispiel beim Schlafen oder Schwimmen.
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
			Viele Menschen denken, dass ich – da ich Hörgeräte trage – alles genauso höre, wie sie. Das
			stimmt aber nicht. Viele Hintergrundgeräusche, wie Vogelgezwitscher oder das sich nähernde
			Auto, nehme ich nicht oder sehr spät wahr.
		</SpeechBubble>

		<h2>Tipps zur Unterstützung</h2>
		<Checklist
			checks={[
				'Dich über Barrierefreiheit informieren.',
				'Die Folien vor der Vorlesung schon vorher für die Studierenden verfügbar machen',
				'Visuelle Informationen (z.B. Bilder) verbal beschreiben',
				'Lorem Ipsum about something mit visuelle Informationen (z.B. Bilder) verbal beschreiben',
				'Lorem Ipsum about something mit visuelle Informationen (z.B. Bilder) verbal beschreiben Lorem Ipsum about something mit visuelle Informationen (z.B. Bilder) verbal beschreiben Lorem Ipsum about something mit visuelle Informationen (z.B. Bilder) verbal beschreiben'
			]}
			{persona}
		/>

		<h2 id="courses">Lehrveranstaltungen</h2>

		<p>
			Gebärdensprachdolmetschende können für Übersetzungen (Online oder Präsenz) gebucht werden.
			Dazu sollten gute Lichtverhältnisse herrschen und der/die Dolmetschende gut zu sehen sein,
			denn neben der Mimik und Gestik ist auch das Mundbild ein wichtiger Bestandteil der
			Gebärdensprache.
		</p>
		<br aria-hidden="true" />

		<p>
			Auch das Mundbild der dozierenden Person sollte immer gut erkennbar sein, da das einigen
			Menschen mit Hörbeeinträchtigung beim Verstehen hilft. Allerdings können selbst unter besten
			Bedingungen (Lichtverhältnisse, nicht verdeckt, deutliche Aussprache) und von geübten
			„Lippenlesern“ nur bis zu maximal 30% der Inhalte entnommen werden.
		</p>

		<br aria-hidden="true" />
		<p>
			Sowohl Hörgeräte als auch CIs können mit
			<InfoBox
				term="Höranlagen"
				definition="Höranlagen sind technische Einrichtungen, die Menschen mit einer Schwerhörigkeit das Verstehen in öffentlichen Räumen, wie zum Beispiel Kino, Theater, Kirche oder Vortragssaal, erleichtern."
				sources={[
					{
						title: 'Höranlagen',
						url: 'https://www.hoergeraete-akademie.de/hoergeraete/hoergeraete-und-hoerhilfen/hoeranlagen/'
					},
					{
						title:
							'Walthes, R. (2014). Einführung in die Pädagogik bei Blindheit und Sehbeeinträchtigung (3. Aufl.) UTB.'
					}
				]}
			/> verbunden werden, sodass über Mikrofone akustische Informationen direkt an die Hörhilfen gesendet
			werden können. Ob ein Gebärdendolmetscher oder eine Übertragungsanlage genutzt werden sollte, hängt
			von der Hörschädigung der Anwesenden ab.
		</p>
		<br aria-hidden="true" />
		<p>
			Lorem ipsum dolor sit amet consectetur. Volutpat etiam ipsum phasellus lacus orci egestas. Nam
			at velit ac morbi. Dui eget platea nec id dictum tortor ullamcorper. Quis nunc varius
			fringilla ultricies proin ullamcorper malesuada proin. Consectetur fermentum diam cras elit
			morbi etiam congue.
		</p>
	</svelte:fragment>
</PersonaContent>
