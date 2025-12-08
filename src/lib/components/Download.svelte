<script lang="ts">
	import type { DownloadInterface } from '$lib/interfaces/download.interface';
	let { download }: { download: DownloadInterface[] } = $props();
</script>

{#each download as download}
	<div class="download-tile">
		<div class="background-image">
			<img src={download.backgroundImage.imageLink} alt={download.backgroundImage.imageAlt} />
		</div>

		<div class="information-text">
			<div class="label type">{download.type}</div>
			{#if download.persona}
				<div class="label persona">{download.persona}</div>
			{/if}
			<h3 class="title">{@html download.title}</h3>
			<p class="description">{@html download.description}</p>
			<div class="download-button-wrapper">
				<a class="download-button" href={download.downloadLink}> Herunterladen </a>
				{#if download.sendable == true}
					<div class="shipping-indicator">Vorrat</div>
				{/if}
			</div>
		</div>
	</div>
{/each}

<style lang="scss">
	.download-tile {
		height: 32rem; // possibly change for long texts

		display: grid;
		grid-template-rows: auto 1fr;

		border: 1px solid rgba(var(--color-black-rgb), 0.5);
		border-radius: 1.25rem; // as startpage tiles
		overflow: hidden;

		transition: transform 0.2s ease;
	}

	.download-tile:hover {
		transform: translateY(-4px);
	}

	.background-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
	}

	.background-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;

		opacity: 0.5;
	}

	.information-text {
		position: relative;

		background-color: var(--color-white); // as startpage tiles
		padding: 1.25rem; // as startpage tiles

		box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2);
	}

	.label {
		position: absolute;

		width: 5rem;
		top: -0.75rem;
		padding: 0.3rem 0.75rem;

		border-radius: 2.5rem;
		border: 1px solid rgba(var(--color-black-rgb), 0.5);
		background-color: var(--color-green);

		color: var(--color-black);
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		text-align: center;

		box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2);
	}

	.label.persona {
		left: 8.3rem;
	}

	.title {
		line-height: 1.29;
		margin-top: 0.9rem;
		font-size: 1.29rem;
	}

	.description {
		margin-top: -0.9rem;
	}

	.download-button-wrapper {
		position: absolute;

		left: 1.25rem;
		right: 1.25rem;
		bottom: 1.25rem;
	}

	.download-button {
		display: block;

		padding: 1rem;
		background-color: var(--color-white);
		border-radius: 1rem;
		border: 1px solid rgba(var(--color-black-rgb), 0.5);

		color: rgb(0, 0, 0);
		font-size: 1.125rem;
		text-decoration: none;
		text-align: center;

		transition: background-color 0.2s ease;
	}

	.download-button-wrapper:hover .download-button {
		background-color: rgb(241, 241, 241);
	}
	.download-button-wrapper:hover .shipping-indicator {
		background-color: #d1eea6;
	}

	.shipping-indicator {
		position: absolute;

		top: 0;
		right: 1.25rem;
		transform: translate(0%, -40%);

		padding: 0.5rem;
		background-color: var(--color-green);
		border-radius: 1rem;
		border: 1px solid rgba(var(--color-black-rgb), 0.5);

		color: rgb(0, 0, 0);
		font-size: 0.75rem;
		text-decoration: none;
		text-align: center;
	}
</style>
