<script lang="ts">
	import { base } from '$app/paths';
	import SubpageTitle from '$lib/components/SubpageTitle.svelte';
</script>

<svelte:head>
	<title>Sitemap - BlindDate</title>
</svelte:head>

<SubpageTitle>Sitemap</SubpageTitle>
<div class="wrapper">
	<h2>Alle Persona-Seiten (alphabetisch)</h2>
	<ul>
		<li>
			<a href={base + '/personas/aleksandr'} class="focus-indicator"
				>Aleksandr ( Autismus-Spektrum-Störung)</a
			>
		</li>
		<li>
			<a href={base + '/personas/faiza'} class="focus-indicator">Faiza (Pflegeverantwortung)</a>
		</li>
		<li>
			<a href={base + '/personas/gabriel'} class="focus-indicator">Gabriel (Sehbeeinträchtigung)</a>
		</li>
		<li>
			<a href={base + '/iframe/gabriel'} class="focus-indicator">Gabriel Simulationsspiel</a>
		</li>
		<li>
			<a href={base + '/personas/hannah'} class="focus-indicator">Hannah (Hörbehinderung)</a>
		</li>
		<li>
			<a href={base + '/iframe/hannah'} class="focus-indicator">Hannah Simulationsspiel</a>
		</li>
		<li>
			<a href={base + '/personas/kilian'} class="focus-indicator"
				>Kilian (Motorische Beeinträchtigung)</a
			>
		</li>
		<li>
			<a href={base + '/personas/maxi'} class="focus-indicator">Maxi (Psychische Erkrankung)</a>
		</li>
		<li>
			<a href={base + '/personas/michelle'} class="focus-indicator"
				>Michelle (Chronische Erkrankung)</a
			>
		</li>
		<li>
			<a href={base + '/personas/oliver'} class="focus-indicator">Oliver (Teilleistungsstörung)</a>
		</li>
	</ul>

	<h2>Alle anderen Seiten (alphabetisch)</h2>
	<ul>
		<li>
			<a href={base + '/große-ganze'} class="focus-indicator">Das große Ganze</a>
		</li>
		<li>
			<a href={base + '/datenschutz'} class="focus-indicator">Datenschutzerklärung</a>
		</li>

		<li>
			<a href={base + '/erklaerung-zur-barrierefreiheit'} class="focus-indicator"
				>Erkärung zur Barrierefreiheit</a
			>
		</li>

		<li>
			<a href={base + '/fragen'} class="focus-indicator">Häufige Fragen</a>
		</li>

		<li>
			<a href={base + '/dgs'} class="focus-indicator">Gebärdensprache (DGS)</a>
		</li>

		<li>
			<a href={base + '/impressum'} class="focus-indicator">Impressum</a>
		</li>

		<li>
			<a href={base + '/kontakt'} class="focus-indicator">Kontakt</a>
		</li>
		<li>
			<a href={base + '/leichte-sprache'} class="focus-indicator">Leichte Sprache</a>
		</li>
		<li>
			<a href={base + '/persona-entwicklung'} class="focus-indicator"
				>Persona-Entwicklung im Detail</a
			>
		</li>

		<li>
			<a href={base + '/so-funktioniert-es'} class="focus-indicator">So funktioniert's</a>
		</li>
		<li>
			<a href={base + '/'} class="focus-indicator">Startseite</a>
		</li>
		<li>
			<a href={base + '/wichtige-begriffe'} class="focus-indicator">Wichtige Begriffe</a>
		</li>
	</ul>
</div>

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;

		li {
			margin: 0.625rem 0rem;
		}
	}
</style>
