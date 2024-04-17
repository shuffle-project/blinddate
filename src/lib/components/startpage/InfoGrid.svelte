<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="wrapper">
	<div class="content">
		<div class="lecturers">
			<h2>Für Lehrende</h2>
			<p>
				BlindDate ist eine virtuelle Begegnungsplattform, auf der Ihnen Studierenden-Personas mit
				Behinderung ihren Hochschulalltag näherbringen. Dazu gehören Strategien, assistive
				Technologien, aber auch Barrieren, die den Studierenden begegnen. Auch Sie als Lehrperson
				können viel zur Barrierefreiheit der Hochschule beitragen. Erfahren Sie mehr darüber, wie
				Sie BlindDate nutzen können.
			</p>
			<a href="{base}/lehrende" class="focus-indicator">Informationen für Lehrende</a>
		</div>
		<div class="personas">
			<h2>Personas?</h2>
			<p>
				Personas sind fiktive Personen, die stellvertretend für eine Zielgruppe mit bestimmten
				Charakteristika stehen – in unserem Fall Studierende mit Behinderungen. Personas sind nicht
				frei erfunden – sie basieren auf Daten. Diese Daten wurden durch Umfragen,
				Erfahrungsberichte und Feedback von Studierenden mit Behinderungen im Laufe des SHUFFLE
				Projekts gesammelt.
			</p>
			<a href="{base}/persona-entwicklung" class="focus-indicator">Persona-Entwicklung im Detail</a>
		</div>
		<div class="concepts">
			<h2>Wichtige Begriffe</h2>
			<p>
				Barrierefreiheit? Behinderung? Assistive Technologien? Best3 Studie? – auf dieser Seite
				werden verschiedene Begriffe kurz und verständlich definiert.
			</p>
			<a href="{base}/wichtige-begriffe" class="focus-indicator">Zu den wichtigen Begriffen</a>
		</div>
		<div class="decorative-image">
			<img class="bottom-wave" src="{base}/tools/remote-study.svg" alt="" aria-hidden="true" />
		</div>
		<div class="questions">
			<h2>Häufige Fragen</h2>
			<p>
				Warum gibt es diese „Freunde“-Personas auf den orangenen Karten? Zwei Personas geben
				unterschiedliche Tipps – was ist denn jetzt richtig? Warum steht da mal Behinderung und mal
				Beeinträchtigung?
			</p>
			<p>In dieser Sektion finden Sie Antworten auf häufig gestellte Fragen zu BlindDate.</p>
			<a href="{base}/fragen" class="focus-indicator">Zu den häufigen Fragen</a>
		</div>
		<div class="decorative-persona">
			<img
				class="bottom-wave"
				src="{base}/personas/maxi/maxi-happy.svg"
				alt=""
				aria-hidden="true"
			/>
		</div>

		<div class="big-picture">
			<h2>Das große Ganze</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur. Suspendisse eu quam tellus scelerisque mi. Non
				elementum tristique ac a vel vitae. Eu porttitor pellentesque dui diam. Habitasse venenatis
				aliquet volutpat nullam purus.
			</p>
			<a href="{base}/" class="focus-indicator">Zum großen Ganzen</a>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--color-background-body);
		padding-block: 15rem;

		display: flex;
		justify-content: center;

		h2 {
			margin: 0;
		}

		.content {
			max-width: var(--content-max-width);
			width: 100%;
			padding: 1.25rem;

			div {
				border-radius: 1.25rem;
				padding: 1.25rem;
			}

			a {
				color: var(--color-black);
				text-decoration-color: var(--color-black);
				font-weight: bold;
			}

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

			.lecturers {
				grid-area: one;

				a {
					color: rgba(var(--color-black-rgb), 1);
					text-decoration-color: rgba(var(--color-black-rgb), 1);
				}
			}

			.personas {
				grid-area: two;
				background-color: var(--color-lavender);
			}

			.concepts {
				grid-area: three;
				background-color: var(--color-white);
				border: 1px solid var(--color-lavender);
			}

			.decorative-image {
				grid-area: four;
				background-color: var(--color-white);

				display: flex;
				align-items: center;
				justify-content: center;

				img {
					height: 100%;
					max-height: 12rem;
					width: 100%;
				}
			}

			.questions {
				grid-area: five;
				background-color: var(--color-white);
				border: 1px solid var(--color-lavender);
			}

			.decorative-persona {
				grid-area: six;
				background: var(--color-gradient-persona);
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					max-height: 22rem;
				}
			}

			.big-picture {
				grid-area: seven;
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
					'one two four'
					'five six four'
					'five six seven';
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
					'seven seven';
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
					'three three four'
					'five five six'
					'seven seven seven';
			}
		}
	}
</style>
