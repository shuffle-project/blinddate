<script>
	import { asset, resolve } from '$app/paths';
	import Sources from '$lib/components/Sources.svelte';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';
</script>

<div class="wrapper">
	<SubpageTitle>Die Persona-Entwicklung im Detail</SubpageTitle>
	<div class="persona-progress-wrapper" aria-hidden="true">
		<div class="persona-progress">
			<img class="progress-1" src={asset('/personas/aleksandr/aleksandr-progress-1.png')} alt="" />
			<img class="progress-2" src={asset('/personas/aleksandr/aleksandr-progress-2.png')} alt="" />
			<img class="progress-3" src={asset('/personas/aleksandr/aleksandr-progress-3.png')} alt="" />
			<img class="progress-4" src={asset('/personas/aleksandr/aleksandr-progress-4.png')} alt="" />
			<img class="progress-5" src={asset('/personas/aleksandr/aleksandr-neutral.svg')} alt="" />
		</div>
	</div>
	<div class="content-wrapper">
		<h2>Was sind Personas?</h2>
		<p>
			Die Persona-Methode wurde 1999 von Alan Cooper entwickelt. Das Ziel dieser Methode ist es,
			Modelle von Nutzenden zu entwickeln, „die Personen einer spezifischen Zielgruppe mit
			bestimmten Merkmalen charakterisieren“ (Lepzien et al). Dadurch soll ein tieferes Verständnis
			für die Bedürfnisse und Motivationen dieser Zielgruppe erreicht werden. Personas sind also
			fiktive Personen, die eine bestimmte Gruppe von Menschen repräsentieren.
		</p>
		<p>
			Die Studierenden-Personas, die Ihnen auf BlindDate begegnen, sind nicht frei erfunden – sie
			basieren auf Daten. Die Personas erklären und fassen die realen Erfahrungen der
			Personengruppe, wie beispielsweise genutzte Strategien und (assistiven) Technologien,
			zusammen. Auch Barrieren im Studienalltag werden durch sie aufgezeigt. So soll vor allem
			Lehrenden die Möglichkeit gegeben werden, sich in die Perspektive der Studierenden
			hineinzuversetzen, die Strategien und Technologien kennenzulernen und die Konzeption der
			eigenen, barrierearmen Lehre daran auszurichten.
		</p>
		<h2>Wie hat das Forschungs&shy;projekt SHUFFLE die Personas entwickelt?</h2>
		<p>
			Wie bereits erwähnt, basieren alle Personas auf BlindDate auf realen Erfahrungen von
			Studierenden mit Beeinträchtigungen. Um diese Daten zu sammeln, startete das Projekt im
			Frühjahr 2022 eine große Bedarfsanalyse. Dafür wurden insgesamt 695 Studierende an den vier
			Standorten des Projekts (<a href="https://shuffle-projekt.de/" class="focus-indicator"
				>Projektwebseite von SHUFFLE</a
			> ) mithilfe eines Fragebogens nach ihren (studienerschwerenden) Bedingungen befragt.
		</p>

		<p>
			Das Forschungsprojekt SHUFFLE arbeitet nach dem Universal Design for Learning (UDL) Ansatz und
			hat somit ein weites Verständnis von Lernen mit Beeinträchtigungen. Individuelle Umstände, die
			sich erschwerend auf ein Studium auswirken, können daher sichtbar, aber auch unsichtbar,
			diagnostiziert oder temporär sein. Ob Barrieren für Studierende mit einer psychischen
			Erkrankung, mit Pflegeverantwortung oder mit Deutsch als Zweitsprache - es gilt, eine
			Hochschule zu schaffen, die allen ein barrierearmes Lernen ermöglicht.
		</p>

		<p>
			Neben dieser quantitativen Erhebung wurden auch qualitative, leitfadengestützte Interviews mit
			Studierenden mit unterschiedlichen Beeinträchtigungen, aber auch mit Lehrenden und Leitenden
			von Hochschulen geführt. Mithilfe eines Design Thinking Workshops mit Studierenden mit
			Beeinträchtigungen wurden diese Erkenntnisse dann um weitere wichtige Ideen zur Darstellung
			der erhobenen Daten ergänzt. Ziel des BlindDate-Teams und der Studierenden war es nun,
			„Personas“ und keine „Barrieras“ zu erstellen: Der Fokus der Erzählungen soll auf den
			genutzten Strategien und Technologien und der Vermittlung von hilfreichen
			Handlungsempfehlungen für Lehrende und NICHT auf den erlebten Barrieren selbst liegen.
		</p>

		<p>
			Öffnen Lehrende oder Interessierte die Webseite von BlindDate, gelangen sie zunächst in einen
			Seminarraum, in dem unterschiedliche Studierende auf sie warten. Diesen Studierenden-Personas
			ist zunächst nicht immer anzusehen, welche studienerschwerenden Bedingungen ihnen begegnen –
			denn so ist es nun mal auch im realen Leben: Beeinträchtigungen können sichtbar UND unsichtbar
			für Außenstehende sein.
		</p>

		<p>
			Nun haben Interessierte die Möglichkeit, auf die einzelnen Studierenden zu klicken und diese
			jeweils kennenzulernen. Mithilfe von Feedback-Loops mit Studierenden mit den jeweiligen
			Beeinträchtigungen konnten die Sprechblasen der Personas, aber auch die allgemein gehaltenen
			Textpassagen, auf Authentizität und Fehler überprüft werden. Jede Persona-Unterseite ist nun
			in mehrere Kategorien (Strategien und Technologien, Lehrveranstaltungen, Lernmaterial,
			Interaktion und Kommunikation und Prüfungen) unterteilt. Außerdem befindet sich am Ende jeder
			Unterseite eine Checkliste mit hilfreichen Handlungsempfehlungen für Lehrende. Diese
			Checkliste, wie auch die übrigen Kategorien, lassen sich auch über das in der Persona-Karte
			befindliche Menü ansteuern.
		</p>

		<p>
			Ein weiteres Ziel der BlindDate-Entwickelnden ist es, dass es sich bei der Begegnungsplattform
			nicht um eine reine Informations-Webseite handelt. Neben den persönlichen Erzählungen in den
			Sprechblasen der Personas befinden sich auf BlindDate weitere interaktive Elemente, welche die
			Erfahrungen der Studierenden veranschaulichen und einen Perspektivwechsel erleichtern sollen.
		</p>

		<p>
			Haben Sie Fragen zu BlindDate oder wollen sich weiter informieren? Hier finden Sie <a
				href={resolve('/wichtige-begriffe')}
				class="focus-indicator">wichtige Begriffe</a
			>
			und Antworten auf
			<a href={resolve('/fragen')} class="focus-indicator">häufig gestellte Fragen</a>.
		</p>

		<div class="sources-wrapper">
			<Sources
				sources={[
					{
						title:
							'Lepzien, Josefine/Lewerenz, Michael (2017): Persona Methode. Eine Illustrierung von Bildungsbedarfen. In: Team der Wissenschaftlichen Weiterbildung der Universität Rostock: Weiterbildungsmanagement professionalisieren. Rostock: Universität Rostock, S. 22-31.'
					},
					{
						title: 'The Inmates Are Running the Asylum (Alan Cooper 1999)',
						titleLang: 'en'
					},
					{
						title: 'SHUFFLE Webseite',
						url: 'https://shuffle-projekt.de/'
					}
				]}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--color-background-body);

		.sources-wrapper {
			margin-block-start: 3.125rem;
		}

		.persona-progress-wrapper {
			background: linear-gradient(var(--color-black) 50%, var(--color-background-body) 50%);
			padding-inline: var(--outer-spacing);

			.persona-progress {
				margin-inline: auto;
				height: clamp(15.75rem, 28vw + 1rem, 18.75rem);
				width: 100%;
				max-width: var(--content-max-width);
				background: linear-gradient(315deg, var(--color-turquoise), var(--color-green));
				border-radius: 2.5rem;

				display: flex;
				align-items: center;
				justify-content: space-around;

				img {
					height: clamp(13.5rem, 23vw + 1rem, 16.875rem);
				}
			}
		}

		.content-wrapper {
			background-color: var(--color-background-body);

			max-width: 35rem;
			padding-inline: var(--outer-spacing);
			margin-inline: auto;
		}
	}

	@media (max-width: 43.5rem) {
		.wrapper {
			.persona-progress-wrapper {
				.persona-progress {
					height: clamp(13.5rem, 45vw + 1rem, 15.75rem);

					img {
						height: clamp(11.25rem, 40vw + 1rem, 13.5rem);
					}
					.progress-3,
					.progress-4 {
						display: none;
					}
				}
			}
		}
	}
</style>
