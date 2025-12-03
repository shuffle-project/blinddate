<script lang="ts">
	import PlayerExtended from '$lib/components/player/PlayerExtended.svelte';
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import { BLINDDATE_PROMO_TRANSKRIPT } from '$lib/constants/transcripts';

	const extendedPlayerConfigPromo: ExtendedPlayerConfig = {
		title: 'Was ist BlindDate?',
		melvinVideos: [],
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/media/Barrierefreies-BlindDate.mp4',
				poster: '/media/barrierefreies-blinddate-preview-image.jpg',
				captionsArray: [
					{
						path: '/media/barrierefreies-blinddate-untertitel.vtt',
						lang: 'de',
						label: 'Deutsche Untertitel'
					}
				]
			}
		],
		transcripts: [
			{
				title: 'Transkript',
				body: BLINDDATE_PROMO_TRANSKRIPT
			}
		]
	};
</script>

<div class="wrapper dots">
	<div class="promo">
		<PlayerExtended extendedPlayerConfig={extendedPlayerConfigPromo} />
	</div>
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--color-background-body);
		padding-block: 6rem;
		margin-bottom: 2rem;

		display: flex;
		justify-content: center;
	}

	.dots {
		position: relative;
		background-image: radial-gradient(rgba(77, 77, 140, 0.3) 4px, transparent 4px);
		background-size: 2rem 2rem;
	}

	.dots::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			to bottom,
			var(--color-background-body) 0%,
			transparent 20%,
			transparent 80%,
			var(--color-background-body) 100%
		);
		pointer-events: none; /*klicks werden nicht blockiert*/
		z-index: 0;
	}

	.promo {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
		background-color: var(--color-background-body);
		border: 10px solid var(--color-lavender);
		border-radius: 1.25rem;
		box-sizing: border-box;
		max-width: var(--content-max-width);
		width: 100%;
		padding-bottom: 3rem;
		margin: 1.25rem;
		display: flex;
		justify-content: center;
		z-index: 1;
	}
</style>
