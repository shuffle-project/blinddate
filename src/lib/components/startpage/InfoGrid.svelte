<script lang="ts">
	import { asset, resolve } from '$app/paths';
</script>

<div class="wrapper">
	<div class="content">
		<div class="lecturers">
			<h2>So funktioniert's</h2>
			<p>
				BlindDate ist eine virtuelle Begegnungsplattform, auf der Ihnen Studierenden-Personas mit
				Beeinträchtigung ihren Hochschulalltag näherbringen. Dazu gehören Strategien, assistive
				Technologien, aber auch Barrieren, die den Studierenden begegnen. Auch Sie als Lehrperson
				können viel zur Barrierefreiheit an der Hochschule beitragen. Erfahren Sie mehr darüber, wie
				Sie BlindDate nutzen können.
			</p>
			<a href={resolve('/so-funktioniert-es')} class="focus-indicator">So funktioniert's</a>
		</div>
		<div class="big-picture">
			<h2>Das große Ganze</h2>
			<p>
				Wir wollen eine Hochschullehre, an der möglichst viele unterschiedliche Menschen erfolgreich
				lernen und lehren können. Hier geben wir Ihnen einen Einblick in Maßnahmen zur Gestaltung
				Ihrer Lehre, die vielen Lernenden gleichzeitig zugutekommen.
			</p>
			<a href={resolve('/große-ganze')} class="focus-indicator">Zum großen Ganzen</a>
		</div>
		<div class="personas">
			<h2>Personas?</h2>
			<p>
				Personas sind fiktive Personen, die stellvertretend für eine Zielgruppe mit bestimmten
				Charakteristika stehen – in unserem Fall Studierende mit Beeinträchtigungen. Personas sind
				nicht frei erfunden – sie basieren auf Daten. Diese Daten wurden durch Umfragen,
				Erfahrungsberichte und Feedback von Studierenden mit Beeinträchtigungen im Laufe des SHUFFLE
				Projekts gesammelt.
			</p>
			<a href={resolve('/persona-entwicklung')} class="focus-indicator"
				>Persona-Entwicklung im Detail</a
			>
		</div>

		<div class="questions">
			<h2>Häufige Fragen</h2>
			<p>
				Warum gibt es diese „Freunde“-Personas auf den orangenen Karten? Zwei Personas geben
				unterschiedliche Tipps – was ist denn jetzt richtig? Warum steht da mal Behinderung und mal
				Beeinträchtigung?
			</p>
			<p>In dieser Sektion finden Sie Antworten auf häufig gestellte Fragen zu BlindDate.</p>
			<a href={resolve('/fragen')} class="focus-indicator">Zu den häufigen Fragen</a>
		</div>
		<div class="decorative-image">
			<img src={asset('/tools/remote-study.svg')} alt="" aria-hidden="true" />
		</div>
		<div class="concepts">
			<h2>Wichtige Begriffe</h2>
			<p>
				Barrierefreiheit? Behinderung? Assistive Technologien? best3 Studie? – auf dieser Seite
				werden verschiedene Begriffe kurz und verständlich definiert.
			</p>
			<a href={resolve('/wichtige-begriffe')} class="focus-indicator">Zu den wichtigen Begriffen</a>
		</div>
		<div class="decorative-persona">
			<img src={asset('/personas/maxi/maxi-happy.svg')} alt="" aria-hidden="true" loading="lazy" />
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--color-background-body);
		padding-block: 6rem;

		display: flex;
		justify-content: center;

		h2 {
			margin: 0;
			line-height: 120%;
		}

		.content {
			max-width: var(--content-max-width);
			width: 100%;
			padding: 1.25rem;

			display: grid;
			gap: 1.875rem;

			grid-template-areas:
				'one'
				'two'
				'three'
				'four'
				'five'
				'six'
				'seven';

			div {
				border-radius: 1.25rem;
				padding: 1.25rem;
			}

			a {
				color: var(--color-black);
				text-decoration-color: var(--color-black);
				font-weight: bold;
			}

			.lecturers {
				grid-area: one;

				a {
					color: rgba(var(--color-black-rgb), 1);
					text-decoration-color: rgba(var(--color-black-rgb), 1);
				}
			}

			.personas {
				grid-area: three;
				background-color: var(--color-white);
				border: 1px solid var(--color-lavender);
			}

			.concepts {
				grid-area: six;
				background-color: var(--color-white);
				border: 1px solid var(--color-lavender);
			}

			.decorative-image {
				grid-area: five;

				display: flex;
				align-items: center;
				justify-content: center;

				img {
					height: 100%;
					max-height: 10rem;
					width: 100%;
				}
			}

			.questions {
				grid-area: four;
				background-color: var(--color-lavender);
				border: 1px solid var(--color-lavender);
			}

			.decorative-persona {
				grid-area: seven;
				background: var(--color-gradient-persona);
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					max-height: 22rem;
				}
			}

			.big-picture {
				grid-area: two;
				background-color: var(--color-lavender);
			}
		}
	}

	@media (min-width: 66.25rem) {
		.wrapper {
			.content {
				grid-template-columns: repeat(3, 1fr);
				grid-template-areas:
					'one two three'
					'one five three'
					'four five seven'
					'four six seven';
			}
		}
	}

	@media (min-width: 42.5rem) and (max-width: 66.1875rem) {
		.wrapper {
			.content {
				grid-template-columns: repeat(2, 1fr);
				grid-template-areas:
					'one two'
					'three four'
					'five six'
					'seven eight';
			}
		}
	}

	@media (min-width: 32.5rem) and (max-width: 42.4375rem) {
		.wrapper {
			.content {
				grid-template-columns: repeat(3, 1fr);
				grid-template-areas:
					'one one one'
					'two two two'
					'three three seven'
					'four four four'
					'five six six';
			}
		}
	}

	@media (max-width: 21.875rem) {
		.wrapper {
			.content {
				div {
					padding: 0.875rem;
				}

				.lecturers {
					h2 {
						word-wrap: break-word;
						overflow-wrap: break-word;
						overflow-wrap: anywhere;

						-webkit-hyphens: auto;
						-moz-hyphens: auto;
						hyphens: auto;
					}
				}
			}
		}
	}
</style>
