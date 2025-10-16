<script lang="ts">
	import type { DownloadInterface } from '$lib/interfaces/download.interface';
	let { download }: { download: DownloadInterface[] } = $props();
</script>

{#each download as download}
	<div class="downloadWrapper {download.type}">
		<h2>{download.title}</h2>
		<img
			class="downloadPreview"
			src={download.previewImage.imageLink}
			alt={download.previewImage.imageAlt}
		/>
		<a class="downloadButton" href={download.downloadLink}> Download! </a>
	</div>
{/each}

<style lang="scss">
	.downloadWrapper {
		width: 20rem;
		padding: 1rem;

		border-radius: 10px; /*abgerundete ecken für niklas :) */
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

		transition: transform 0.2s ease;
	}

	.downloadWrapper.postcard {
		background-color: #fff3b0;
	}

	.downloadWrapper.poster {
		background-color: #e0e0e0;
	}

	.downloadWrapper:hover {
		transform: translateY(-4px);
	}

	.downloadPreview {
		width: 8rem;
		height: auto;

		border-radius: 6px;

		border-style: solid;
		border-width: 1px;
		border-color: black;
	}

	.downloadButton {
		padding: 0.5rem 1rem;
		margin: 0.5rem;

		border-radius: 6px;

		background-color: #0077cc;
		color: white;
		text-decoration: none;
		font-size: 0.9rem;

		transition: background-color 0.2s ease;
	}

	.downloadButton:hover {
		background-color: #005fa3;
	}
</style>
