<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import LectureRoom from '$lib/components/lectureRoom/index.svelte';
	import InfoGrid from '$lib/components/startpage/InfoGrid.svelte';
	import { ENVIRONMENT, HOSTNAME } from '$lib/constants/environment';
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import Footer from '../lib/components/Footer.svelte';

	onMount(async () => {
		try {
			const url =
				'https://melvin.shuffle-projekt.de/de-DE/view/1YCojv4kFatCaZNyDPNpqX2l3yjFO31qyipjsB926UdXFFWzmMVVrVqg4KkNn4Yh';
			// const url = 'https://djkadsklasldka.de/';

			const response = await fetch(url, { mode: 'no-cors' });

			if (response.ok || response.type === 'opaque') {
				console.log('works, finds something');
			} else {
				console.log('finds nothing');
			}
		} catch (error) {
			console.log('---');
			console.log(error);
			console.log('---');
		}
	});
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

{#if ENVIRONMENT.allowFeedbackLink}
	<div class="feedback">
		<div class="link-wrapper">
			<p>Wir brauchen Sie!</p>
			<a href={ENVIRONMENT.lecturerFeedbackLink} target="_blank" rel="noopener noreferrer">
				<span aria-hidden="true"> Feedback von Lehrenden </span>
				<span class="sr-only"> Feedback von Lehrenden (Öffnet neues Fenster) </span>
				<Icon img="open-in-new" size="medium"></Icon>
			</a>
		</div>
		<div class="link-wrapper">
			<p>Offen für Alle</p>
			<a href={ENVIRONMENT.generalFeedbackLink} target="_blank" rel="noopener noreferrer">
				<span aria-hidden="true">Allgemeines Feedback</span>
				<span class="sr-only">Allgemeines Feedback (öffnet neues Fenster)</span>
				<Icon img="open-in-new" size="medium"></Icon>
			</a>
		</div>
	</div>
{/if}

<header>
	<div class="content">
		<div class="logo">
			<img src="{base}/icons/logo.svg" alt="" aria-hidden="true" />
			<span>BlindDate</span>
		</div>
		<ShareButton />
	</div>
</header>

<main class="content-wrapper" id="content">
	<div class="upper-content">
		<h1 class="title">Eine Hochschule für alle</h1>

		{#if ENVIRONMENT.showNewContentAd}
			<a class="new-content-ad" href="{base}/personas/oliver"> Neu! Oliver ist da! </a>
		{/if}
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
	.new-content-ad {
		font-size: 1rem;
		background-color: var(--color-green);
		color: var(--color-black);
		text-decoration: none;
		padding: 0.375rem 0.625rem;
		border-radius: 2rem;
		margin-top: 1.25rem;
		display: block;
		width: fit-content;

		&:hover,
		&:focus {
			outline: 2px solid var(--color-green);
			outline-offset: 2px;
		}
	}

	.feedback {
		padding: 1rem var(--outer-spacing) 2rem var(--outer-spacing);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 1.25rem;

		background-color: #99bef5;

		.link-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.125rem;

			p {
				margin: 0;
				font-size: 1rem;
			}

			a {
				background-color: var(--color-white);
				padding: 0.375rem 0.625rem;
				color: var(--color-black);

				font-weight: bold;
				border-radius: 2rem;
				text-decoration: none;
				cursor: pointer;

				display: flex;
				align-items: center;
				gap: 0.25rem;

				&:hover,
				&:focus {
					outline: 2px solid var(--color-black);
				}
			}
		}
	}

	header {
		background-color: var(--color-black);

		.content {
			display: flex;
			justify-content: center;
			justify-content: space-between;
			align-items: center;
			padding: 1.25rem var(--outer-spacing);
			max-width: var(--content-max-width);
			margin-inline: auto;

			.logo {
				color: var(--color-white);
				display: flex;
				align-items: center;
				gap: 0.625rem;

				font-size: 1.25rem;
				font-weight: bold;

				img {
					width: 3.125rem;
					height: 3.125rem;
				}
			}
		}
	}
	.content-wrapper {
		padding-top: 1.875rem;
		background-color: var(--color-black);

		.upper-content {
			max-width: var(--content-max-width);
			margin-inline: auto;
			padding-inline: var(--outer-spacing);

			.title {
				padding: 0;
				color: var(--color-white);
				margin: 2rem 0 2rem 0;
			}

			.subtitle,
			.call-to-action {
				color: rgba(var(--color-white-rgb), 0.85);
			}
		}
	}

	@media (max-width: 49.9375rem) {
		h1,
		.subtitle,
		.call-to-action {
			text-align: center;
		}

		.new-content-ad {
			margin-inline: auto;
		}

		.subtitle {
			max-width: 100%;
			margin: 1.875rem 0;
		}

		.call-to-action {
			margin-bottom: 1.875rem;
		}
	}

	@media (min-width: 50rem) {
		.subtitle {
			max-width: 75%;
		}
	}

	@media (max-width: 20.625rem) {
		.title {
			word-wrap: break-word;
			overflow-wrap: break-word;
			overflow-wrap: anywhere;

			-webkit-hyphens: auto;
			-moz-hyphens: auto;
			hyphens: auto;
		}
	}
</style>
