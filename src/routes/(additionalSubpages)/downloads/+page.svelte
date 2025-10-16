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

<p>Hallo Welt!<br />Hier findet ihr unsere tollen Downloads...</p>

<div class="wrapper">
	<DownloadComponent {download} />
</div>

<style lang="scss">
	.wrapper {
		max-width: var(--content-max-width);

		display: flex;
		flex-direction: row;
		gap: 1rem;

		align-items: center; /*horizontal*/
		justify-content: center; /*vertikal*/
	}
</style>
