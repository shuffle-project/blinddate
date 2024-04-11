<script lang="ts">
	import { base } from '$app/paths';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import LectureRoom from '$lib/components/lectureRoom/index.svelte';
	import InfoGrid from '$lib/components/startpage/InfoGrid.svelte';
	import { ENVIRONMENT } from '$lib/constants/environment';
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
				<img src="{base}/icons/logo.svg" alt="" aria-hidden="true" />
				<span>BlindDate</span>
			</div>
			<ShareButton />
		</div>
	</div>
</header>

<main class="content-wrapper" id="content">
	<div class="upper-content">
		<h1 class="responsive title">Eine Hochschule für alle</h1>
		<p class="subtitle">
			Auf BlindDate geben Ihnen Studierende mit Beeinträchtigungen einen Einblick in ihren
			Studienalltag. Konkrete Handlungsempfehlungen helfen Ihnen, Barrieren in der eigenen Lehre
			abzubauen.
		</p>
		<p class="call-to-action">Lernen Sie jetzt die Studierenden kennen:</p>
	</div>

	<LectureRoom />

	{#if ENVIRONMENT.displayLowerStartpageContent}
		<InfoGrid />
	{/if}
</main>

<Footer />

<style lang="scss">
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

		.logo {
			color: var(--color-white);
			display: flex;
			align-items: center;
			gap: 0.55rem;

			font-size: 1.11rem;
			font-weight: bold;

			img {
				width: 3rem;
				height: 3rem;
			}
		}
	}
	.content-wrapper {
		padding-top: 2rem;
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
	}

	@media (min-width: 50rem) {
		.subtitle {
			max-width: 80%;
		}
	}
</style>
