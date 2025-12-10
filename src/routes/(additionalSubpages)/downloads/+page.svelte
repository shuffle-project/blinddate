<script lang="ts">
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';

	import DownloadComponent from '$lib/components/Download.svelte';
	import type { DownloadInterface } from '$lib/interfaces/download.interface';
	import { DownloadConstant } from '$lib/constants/download';

	const download: DownloadInterface[] = DownloadConstant;
</script>

<svelte:head>
	<title>Downloads - BlindDate</title>
</svelte:head>

<SubpageTitle>Downloads</SubpageTitle>

<div class="wrapper">
	<h2>Werbematerialien für BlindDate</h2>

	<p>
		Auf dieser Seite finden Sie verschiedene Werbematerialien, mit denen Sie BlindDate an Ihrer
		Hochschule oder in Ihrem Netzwerk bekannt machen können. Wir stellen Postkarten- und
		Posterdesigns als PDFs zum Download bereit, die Sie direkt digital verwenden oder ausdrucken
		können.
	</p>
	<p>
		Wenn Sie physische Ausdrucke benötigen, wenden Sie sich gerne unter der E-Mail-Adresse
		<a href="mailto:kontakt@barrierefreies-blinddate.de" class="focus-indicator"
			>kontakt@barrierefreies-blinddate.de</a
		> an das BlindDate-Team. Alle Materialien, die als vorrätig gekennzeichnet sind, senden wir Ihnen
		gerne zu. Geben Sie dafür einfach die gewünschten Materialien und die Stückzahl an.
	</p>
	<p>
		Helfen Sie mit, BlindDate und somit wichtige Informationen zu Barrierefreiheit auch in Ihrer
		Nähe zu verbreiten!
	</p>
</div>

<div class="grid">
	<DownloadComponent {download} />
</div>

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;
		margin-top: 2.5rem;
	}

	.grid {
		max-width: var(--content-max-width);
		padding: 3rem 1.25rem 1.25rem;
		margin: 0 auto;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.875rem;
	}

	@media (max-width: 75rem) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 55rem) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 35rem) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 21.25rem) {
		h2 {
			word-wrap: break-word;
			overflow-wrap: break-word;
			overflow-wrap: anywhere;

			-webkit-hyphens: auto;
			-moz-hyphens: auto;
			hyphens: auto;
		}
	}
</style>
