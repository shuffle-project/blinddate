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
			<a href={base + '/personas/aleksandr'} class="focus-indicator">Aleksandr</a>
		</li>
		<li>
			<a href={base + '/personas/gabriel'} class="focus-indicator">Gabriel</a>
		</li>
		<li>
			<a href={base + '/iframe/gabriel'} class="focus-indicator">Gabriel Simulationsspiel</a>
		</li>
		<li>
			<a href={base + '/personas/hannah'} class="focus-indicator">Hannah</a>
		</li>
		<li>
			<a href={base + '/iframe/hannah'} class="focus-indicator">Hannah Simulationsspiel</a>
		</li>
		<li>
			<a href={base + '/personas/kilian'} class="focus-indicator">Kilian</a>
		</li>
		<li>
			<a href={base + '/personas/maxi'} class="focus-indicator">Maxi</a>
		</li>
		<li>
			<a href={base + '/personas/michelle'} class="focus-indicator">Michelle</a>
		</li>
	</ul>

	<h2>Alle anderen Seiten (alphabetisch)</h2>
	<ul>
		<li>
			<a href={base + '/datenschutz'} class="focus-indicator">Datenschutzerklärung</a>
		</li>

		<li>
			<a href={base + '/impressum'} class="focus-indicator">Impressum</a>
		</li>

		<li>
			<a href={base + '/kontakt'} class="focus-indicator">Kontakt</a>
		</li>

		<li>
			<a href={base + '/'} class="focus-indicator">Startseite</a>
		</li>
	</ul>
</div>

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;

		h1 {
			margin-bottom: 0;
		}

		li {
			margin: 0.625rem 0rem;
		}
	}
</style>
