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
		Auf dieser Seite finden Sie demnächst verschiedene Werbematerialien, mit denen Sie BlindDate an
		Ihrer Hochschule oder in Ihrem Netzwerk bekannt machen können. Wir werden Postkarten- und
		Posterdesigns zum Download bereitstellen, die Sie direkt digital verwenden oder selbst
		ausdrucken können.
	</p>
	<p>
		Wenn Sie physische Ausdrucke benötigen, wenden Sie sich gerne - schon jetzt! - unter der
		E-Mail-Adresse
		<a href="mailto:kontakt@barrierefreies-blinddate.de" class="focus-indicator"
			>kontakt@barrierefreies-blinddate.de</a
		> an das BlindDate-Team. Solange der Vorrat reicht, senden wir Ihnen die gewünschten Materialien
		gerne zu.
	</p>
	<p>
		Helfen Sie mit, BlindDate und somit wichtige Informationen zu Barrierefreiheit auch in Ihrer
		Nähe zu verbreiten. <br />Wir freuen uns auf Ihre Anfrage!
	</p>
</div>

<!--
<div class="grid">
	<DownloadComponent {download} />
</div>
-->

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;
		margin-top: 2.5rem;
	}

	// WIP: was genau macht der query hier?

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

	.grid {
		max-width: var(--content-max-width);

		display: flex;
		flex-direction: row;
		gap: 1rem;

		align-items: center; /*horizontal*/
		justify-content: center; /*vertikal*/
	}
</style>
