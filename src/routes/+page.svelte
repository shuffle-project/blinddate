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
	<div class="mobile">
		<div class="row">
			<div class="logo">
				<img src="{base}/icons/logo.svg" alt="Blind Date Logo" />
				<span aria-hidden="true">BlindDate</span>
			</div>
			<ShareButton />
		</div>
		<hr aria-hidden="true" class="separator" />
	</div>

	<div class="desktop">
		<div class="first-row">
			<div class="logo">
				<img src="{base}/icons/logo.svg" alt="Blind Date Logo" />
				<span aria-hidden="true">BlindDate</span>
			</div>

			<ShareButton />
		</div>

		<hr aria-hidden="true" class="separator" />
	</div>
</header>

<main class="content" id="content">
	<h1 class="responsive">Studierende kennenlernen</h1>
	<LectureRoom />
</main>

<div class="spacer" />

<Footer />

<style lang="scss">
	.content {
		background-color: var(--color-black);
		padding-top: 4rem;
	}
	h1 {
		color: var(--color-white);

		margin: 0;
		padding-bottom: 2rem;
		padding-inline: 1.33rem;

		max-width: var(--content-max-width);
		margin-inline: auto;
		text-align: center;
	}

	header {
		background-color: var(--color-black);
	}

	.separator {
		margin-top: 0.22rem;
		margin: 0;
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

	@media (min-width: 59.375rem) {
		h1 {
			text-align: left;
			padding-bottom: 1rem;
		}

		.mobile {
			display: none;
		}

		.desktop {
			padding-inline: 1.33rem;
			margin-inline: auto;
			max-width: var(--content-max-width);

			.first-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 1.33rem;
				padding-bottom: 1rem;
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.desktop {
			display: none;
		}

		.mobile {
			.row {
				display: flex;
				justify-content: center;
				justify-content: space-between;
				align-items: center;
				padding: 1.33rem 1rem;
			}
		}
	}

	@media (max-width: 32.75rem) {
		.mobile {
			.second-row {
				padding: 1.33rem 0.55rem;
			}
		}
	}
</style>
