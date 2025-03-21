<script lang="ts">
	import { base } from '$app/paths';
	import Footer from '$lib/components/Footer.svelte';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import { HOSTNAME } from '$lib/constants/hostname';
	import type { Snippet } from 'svelte';

	import { MetaTags } from 'svelte-meta-tags';

	let { children }: { children: Snippet } = $props();
</script>

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

<div class="background-black">
	<header>
		<div class="row">
			{#if ENVIRONMENT.backLinkToStartpage}
				<a href="{base}/" class="back-to-startpage">
					<img src="{base}/icons/logo.svg" alt="" aria-hidden="true" />
					<span>Zur Startseite</span>
				</a>
			{:else}
				<div></div>
			{/if}

			<div></div>
		</div>
	</header>
</div>

<main>
	{@render children?.()}
</main>

<Footer />

<style lang="scss">
	.background-black {
		background-color: var(--color-black);
		width: 100%;
	}

	main {
		padding-bottom: 3.125rem;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;

		.row {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
		}
	}

	@media (min-width: 59.375rem) {
		header {
			padding-inline: var(--outer-spacing);
			box-sizing: border-box;
		}
		.row {
			max-width: var(--content-max-width);
		}

		.row {
			padding: 1rem 0;
		}
	}

	@media (max-width: 59.3125rem) {
		.row {
			padding: 1rem var(--outer-spacing);
		}
	}
</style>
