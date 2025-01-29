<script lang="ts">
	import Player from '../../../lib/components/player/Player.svelte';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';
	import type { Video } from '../../../lib/interfaces/player.interfaces';

	const videoData: Video = {
		title: 'Deutsche Gebärdensprache - BlindDate Vorstellung',
		videoPathMp4: '/media/dgs-video.mp4',
		poster: '/media/dgs-video-preview-image.jpg',
		captionsArray: []
	};
</script>

<svelte:head>
	<title>Gebärdensprache (DGS) - BlindDate</title>
</svelte:head>

<SubpageTitle>Gebärdensprache (DGS)</SubpageTitle>

<div class="wrapper">
	<div class="player-wrapper">
		<Player {videoData} />
	</div>

	<p>Gebärdensprachdolmetscherin: Daniela Happ</p>
	<p>
		Videoschnitt: <a href="https://www.samurait.de/">Florian Erfurth</a>
	</p>
</div>

<style lang="scss">
	.wrapper {
		max-width: 44rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;
	}

	.player-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 2.5rem;
	}

	@media (max-width: 37.75rem) {
		.wrapper {
			padding-inline: 0;
		}

		p {
			padding-inline: var(--outer-spacing);
		}
	}
</style>
