<script lang="ts">
	import { base } from '$app/paths';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import LectureRoom from '$lib/components/lectureRoom/index.svelte';
	import { HOSTNAME } from '$lib/constants/hostname';
	import { MetaTags } from 'svelte-meta-tags';
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BlindDate</title>
</svelte:head>

<MetaTags
	title="Barrierefreies BlindDate"
	description="Persönliche Erfahrungen von Studierenden mit Beeinträchtigung und Tipps zur Umsetzung barrierefreier (Hochschul) Lehre."
	additionalMetaTags={[
		{
			property: 'keywords',
			content:
				'Barrierefreiheit, Inklusion, Vorlesung, Lehre, Studierende, Hochschule, Studium und Behinderung, Didaktik, Barrierefreie Lehre'
		}
	]}
	openGraph={{
		url: HOSTNAME,
		title: 'Barrierefreies BlindDate',
		description:
			'Persönliche Erfahrungen von Studierenden mit Beeinträchtigung und Tipps zur Umsetzung barrierefreier (Hochschul) Lehre.',
		siteName: 'BlindDate',
		images: [
			{
				url: `${HOSTNAME}decorations/mainpage-teaser.jpg`
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image',

		title: 'Barrierefreies BlindDate',
		description:
			'Persönliche Erfahrungen von Studierenden mit Beeinträchtigung und Tipps zur Umsetzung barrierefreier (Hochschul) Lehre.',
		image: `${HOSTNAME}decorations/mainpage-teaser.jpg`
	}}
/>

<header>
	<div>
		<div class="row">
			<div class="logo">
				<img src="{base}/icons/logo.svg" alt="Blind Date Logo" />
				<span aria-hidden="true">BlindDate</span>
			</div>
			<ShareButton />
		</div>
		<hr aria-hidden="true" class="separator" />
	</div>
</header>

<main class="content-wrapper" id="content">
	<div class="upper-content">
		<h1 class="responsive title">Barrierefreie Lehre verstehen</h1>
		<p class="subtitle">
			Persönliche Erfahrungen von Studierenden mit Beeinträchtigung und Tipps zur Umsetzung
			barrierefreier (Hochschul) Lehre.
		</p>
		<p class="call-to-action">Jetzt die Studierenden kennenlernen:</p>
	</div>
	<LectureRoom />
	<div class="lower-content-wrapper">
		<div class="lower-content">
			<div class="lecturers">
				<h2>Für Lehrende</h2>
				<p>
					BlindDate ist eine virtuelle Begegnugsplatform um Studierende mit individuellen Bedarfen
					in Form von Personas kennenzulernen.
				</p>
				<p>
					Lehre ist nicht einfach und Barrierefreiheit kostet Zeit. Was Sie als lehrende Person auf
					BlindDate beachten sollten, erklären wir auf der folgenden Seite:
				</p>
				<a href="{base}/lecturers" class="focus-indicator">Informationen für Lehrende</a>
			</div>
			<div class="personas">
				<img
					class="top-wave"
					src="{base}/decorations/top-blue-wave.svg"
					alt=""
					aria-hidden="true"
				/>
				<div class="personas-content">
					<h2>Was sind Personas?</h2>
					<p>
						Personas sind keine reale Personen, aber durchaus realistisch. Unsere Personas basieren
						auf Daten, Interviews und vor allem Erfahrungen echter Studierender mit individuellen
						Bedarfen.
					</p>
					<div class="to-persona-development">
						<a href="{base}/development" class="focus-indicator"
							>Die Persona-Entwicklung im Detail</a
						>
					</div>
				</div>
				<img
					class="bottom-wave"
					src="{base}/decorations/bottom-blue-wave.svg"
					alt=""
					aria-hidden="true"
				/>
			</div>
			<div class="glossary">
				<h2>Glossar</h2>
				<p>
					Was bedeutet "Barrierefreiheit" eigentlich genau und wie sieht die gesetzliche Lage aus?
					Auf der folgenden Unterseite gehen wir auf diese und weitere Frage ein:
				</p>
				<a href="{base}/glossary" class="focus-indicator">Zum Glossar</a>
			</div>
		</div>
	</div>
</main>

<div class="spacer" />

<Footer />

<style lang="scss">
	:root {
		--text-section-max-width: 31rem;
	}
	header {
		background-color: var(--color-black);

		.row {
			display: flex;
			justify-content: center;
			justify-content: space-between;
			align-items: center;
			padding: 1.33rem 1rem;
			max-width: var(--content-max-width);
			margin-inline: auto;
		}

		.separator {
			max-width: var(--content-max-width);
			margin: 0 auto 0 auto;
			color: rgba(var(--color-white-rgb), 0.5);
		}

		.logo {
			color: var(--color-white);
			display: flex;
			align-items: center;
			gap: 0.55rem;

			font-size: 1.11rem;
			font-weight: bold;
		}
	}
	.content-wrapper {
		padding-top: 4rem;
		background-color: var(--color-black);

		.upper-content {
			max-width: var(--content-max-width);
			margin-inline: auto;
			padding: 0 1rem;

			.title {
				padding: 0;
			}

			h1,
			.subtitle,
			.call-to-action {
				color: var(--color-white);
			}
			h1 {
				margin: 0;
			}
		}

		.lower-content-wrapper {
			background-color: var(--color-background-body);

			h2 {
				margin: 0;
			}
		}
	}

	@media (max-width: 49.9375rem) {
		h1,
		.subtitle,
		.call-to-action {
			text-align: center;
		}

		.subtitle {
			max-width: 100%;
			margin: 2rem 0;
		}

		.call-to-action {
			margin-bottom: 2rem;
		}

		.lower-content {
			.lecturers,
			.glossary {
				max-width: var(--text-section-max-width);
				padding: 7rem 1.33rem 5rem 1.33rem;
				margin-inline: auto;
			}
		}

		.personas {
			display: flex;
			flex-direction: column;

			.top-wave,
			.bottom-wave {
				width: 100%;
				max-width: 100%;
			}
			.personas-content {
				padding: 2rem 0;
				background-color: var(--color-lavender);

				p,
				.to-persona-development,
				h2 {
					max-width: var(--text-section-max-width);
					padding: 0 1.33rem;
					margin-inline: auto;
				}

				a {
					color: var(--color-black);
					text-decoration-color: var(--color-black);

					&:focus {
						outline: 2px solid var(--color-black);
					}
				}
			}
		}
	}

	@media (min-width: 50rem) {
		.subtitle {
			max-width: 80%;
		}

		.lower-content-wrapper {
			background-image: url('/decorations/startpage-path.svg');
			background-repeat: no-repeat;
			background-position: center -1rem;

			.lower-content {
				max-width: var(--content-max-width);
				margin-inline: auto;
				padding-inline: 1rem;
				display: flex;
				flex-direction: column;

				.lecturers {
					padding-top: 11rem;
					margin-left: 2rem;
					max-width: clamp(20rem, 40vw + 1rem, var(--text-section-max-width));
				}

				.personas {
					max-width: clamp(20rem, 40vw + 1rem, var(--text-section-max-width));
					align-self: flex-end;
					padding-top: 6rem;
					margin-right: 1rem;
				}

				.glossary {
					max-width: clamp(26rem, 40vw + 1rem, var(--text-section-max-width));
					padding: 12rem 0;
					margin-left: 2rem;
				}
			}
		}

		.bottom-wave,
		.top-wave {
			display: none;
		}
	}
</style>
