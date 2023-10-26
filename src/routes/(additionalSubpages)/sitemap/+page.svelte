<script lang="ts">
	import { base } from '$app/paths';
	import SubpageTitle from '$lib/components/SubpageTitle.svelte';
</script>

<svelte:head>
	<title>Sitemap - BlindDate</title>
</svelte:head>

<SubpageTitle>Sitemap</SubpageTitle>
<div class="wrapper">
	<h2>Alle Seiten (alphabetisch)</h2>
	<ul>
		<li>
			<a href={base + '/legal/privacy'} class="focus-indicator">Datenschutzerklärung</a>
		</li>
		<li>
			<a href={base + '/personas/gabriel'} class="focus-indicator">Gabriel</a>
		</li>
		<li>
			<a href={base + '/personas/hannah'} class="focus-indicator">Hannah</a>
		</li>
		<li>
			<a href={base + '/legal/imprint'} class="focus-indicator">Impressum</a>
		</li>
		<li>
			<a href={base + '/personas/maxi'} class="focus-indicator">Maxi</a>
		</li>
		<li>
			<a href={base + '/'} class="focus-indicator">Startseite</a>
		</li>
	</ul>
</div>

<style lang="scss">
	.wrapper {
		max-width: 31.04rem;
		padding-inline: 1.33rem;
		margin-inline: auto;

		h1 {
			margin-bottom: 0;
		}

		li {
			margin: 0.33rem 0rem;
		}
	}
</style>
