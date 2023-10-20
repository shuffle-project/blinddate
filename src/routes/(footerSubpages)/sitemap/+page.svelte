<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Sitemap - BlindDate</title>
</svelte:head>

<div class="wrapper">
	<h1 class="responsive">Sitemap</h1>
	<p>Diese Sitemap listet alle Seiten auf.</p>

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
		h1 {
			margin-bottom: 0;
		}

		li {
			margin: 0.33rem 0rem;
		}
	}
</style>
