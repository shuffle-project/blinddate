<!--
captions	The track defines translation of dialogue and sound effects (suitable for deaf users)
chapters	The track defines chapter titles (suitable for navigating the media resource)
descriptions	The track defines a textual description of the video content (suitable for blind users)
metadata	The track defines content used by scripts. Not visible for the user
subtitles	The track defines subtitles, used to display subtitles in a video
 -->
<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import type { Video } from '../../interfaces/player.interfaces';
	import Icon from '../Icon.svelte';
	import { getRandomId, isIOSDevice } from '../utils';
	import CaptionSettings from './CaptionSettings.svelte';
	import TempoSettings from './TempoSettings.svelte';
	const randomId = getRandomId();

	export let videoData: Video;

	let fullscreen = false;

	let useNativeControls = false;
	let isiOSDevice = false;

	// video
	let videoWrapper: HTMLElement;
	let video: HTMLVideoElement;

	//readonly
	let duration: number;
	$: durationMinutes = ('00' + Math.floor(duration / 60)).slice(-2);
	$: durationSeconds = ('00' + (Math.floor(duration) % 60)).slice(-2);

	//two way
	let currentTime: number = 0;
	$: currentTimeMinutes = ('00' + Math.floor(currentTime / 60)).slice(-2);
	$: currentTimeSeconds = ('00' + Math.floor(currentTime % 60)).slice(-2);

	let playbackRate: number = 1;
	let paused: boolean = true;
	let volume: number = 0.8; // between 0 and 1
	let muted: boolean;

	// caption styles
	let captionsBackgroundColor: string = 'black';
	let captionsFontColor: string = 'white';
	let captionsFontSize: string = 'small';

	// aria live
	let ariaLiveContent = '';

	let timeProgress: HTMLInputElement;
	let volumeSlider: HTMLInputElement;

	$: {
		let normalizedSliderValue = (currentTime / duration) * 100;
		normalizedSliderValue = normalizedSliderValue < 0 ? 0 : normalizedSliderValue;
		if (timeProgress) {
			timeProgress.style.background = `linear-gradient(to right, #99bef5 ${normalizedSliderValue}%, #ccc ${normalizedSliderValue}%)`;
		}
	}

	$: {
		if (volumeSlider) {
			volumeSlider.style.background = `linear-gradient(to right, #99bef5 ${volume * 100}%, #ccc ${
				volume * 100
			}%)`;
		}
	}

	$: {
		if (!muted && volume === 0) {
			onMute();
		}
		if (muted && volume !== 0) {
			onMute();
		}
	}

	onMount(() => {
		isiOSDevice = isIOSDevice();
		useNativeControls = isiOSDevice;

		if (!isiOSDevice) {
			// load capationSsettings from localStorage
			captionsBackgroundColor = window.localStorage.getItem('captionsBackgroundColor') || 'black';
			captionsFontColor = window.localStorage.getItem('captionsFontColor') || 'white';
			captionsFontSize = window.localStorage.getItem('captionsFontSize') || 'medium';
		}

		[
			'fullscreenchange',
			'webkitfullscreenchange',
			'mozfullscreenchange',
			'msfullscreenchange'
		].forEach((eventType) =>
			document.addEventListener(eventType, (e) => {
				if (e.target === videoWrapper) {
					fullscreen = !fullscreen;
				}
			})
		);
	});

	// functions
	function onPlayPause() {
		if (useNativeControls) return;

		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
		ariaLiveContent = paused ? 'Pausiert' : 'Gestartet';
	}

	function onMute() {
		muted = !muted;
		ariaLiveContent = muted ? 'Stummgeschalten' : 'Ton aktiviert';

		if (muted && volume !== 0) {
			volume = 0;
		}

		if (!muted && volume === 0) {
			volume = 0.5;
		}
	}

	function onKeyDownTimeProgress(ev: KeyboardEvent) {
		if (ev.key === ' ') {
			ev.preventDefault();
			onPlayPause();
		} else if (ev.key === 'ArrowRight') {
			ev.preventDefault();
			currentTime += 10;
		} else if (ev.key === 'ArrowLeft') {
			ev.preventDefault();
			currentTime -= 10;
		}
	}

	function onToggleFullscreen() {
		if (document.fullscreenElement || (document as any).webkitFullscreenElement) {
			exitFullscreen();
		} else {
			enterFullscreen();
		}
	}

	async function exitFullscreen() {
		if (document.exitFullscreen) {
			await document.exitFullscreen();
		} else if ((document as any).webkitExitFullscreen) {
			await (document as any).webkitExitFullscreen();
		}
	}
	function enterFullscreen() {
		if (videoWrapper.requestFullscreen) {
			videoWrapper.requestFullscreen({ navigationUI: 'hide' });
		} else if ((videoWrapper as any).webkitRequestFullscreen) {
			(videoWrapper as any).webkitRequestFullscreen({ navigationUI: 'hide' });
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="wrapper"
	bind:this={videoWrapper}
	on:focusout={() => {
		if (ariaLiveContent !== '') ariaLiveContent = '';
	}}
>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		poster={base + videoData.poster}
		id="video-{randomId}"
		controls={useNativeControls || isiOSDevice}
		preload="auto"
		width="100%"
		bind:this={video}
		bind:duration
		bind:muted
		bind:paused
		bind:playbackRate
		bind:volume
		bind:currentTime
		class={!isiOSDevice
			? `bg-${captionsBackgroundColor} fc-${captionsFontColor} fs-${captionsFontSize}`
			: ''}
		class:native-controls={!useNativeControls}
		class:isiOSDevice
		on:click={onPlayPause}
		on:dblclick={onToggleFullscreen}
		tabindex="0"
		aria-label="Videospieler anklickbar"
	>
		<source type="video/mp4" src={base + videoData.videoPathMp4} />
		{#each videoData.captionsArray as captionPath}
			<track
				kind="captions"
				src={base + captionPath.path}
				label={captionPath.label}
				srclang={captionPath.lang}
			/>
		{/each}
		<!-- <track kind="subtitles" src="{base}/media/subtitles2.vtt" label="deutsche subtitles" srclang="de" /> -->
		Ihr Browser unterstützt das Video Element nicht. Falls möglich, können Sie es mit einem anderen Internetbrowser
		probieren, oder gegebenenfalls diesen Browser aktualisieren.
	</video>

	{#if !useNativeControls}
		<div id="video-controls">
			{#if video}
				<div class="row-1">
					<span>{currentTimeMinutes}:{currentTimeSeconds}</span>
					<input
						aria-valuetext="Zeit = {currentTimeMinutes} Minuten {currentTimeSeconds} Sekunden"
						aria-label="Video-Zeitleiste"
						class="time-progress"
						type="range"
						bind:value={currentTime}
						bind:this={timeProgress}
						min="0"
						max={duration}
						on:keydown={onKeyDownTimeProgress}
					/>
					<span>{durationMinutes}:{durationSeconds}</span>
				</div>

				<div class="row-2">
					<div class="row-2-left">
						<button
							class="playpause player-btn"
							aria-label={paused ? 'Video abspielen' : 'Video pausieren'}
							title={paused ? 'Video abspielen' : 'Video pausieren'}
							on:click={onPlayPause}
						>
							{#if !paused}
								<Icon size="parent" img="pause" svg_color="white" />
							{:else}
								<Icon size="parent" img="play" svg_color="white" />
							{/if}
						</button>

						<button
							id="mute-{randomId}"
							aria-label="Ton stummschalten"
							title="Ton stummschalten"
							aria-pressed={muted}
							class="player-btn"
							on:click={onMute}
						>
							{#if muted}
								<Icon size="parent" img="volume-mute" svg_color="white" />
							{:else}
								<Icon size="parent" img="volume" svg_color="white" />
							{/if}
						</button>

						<input
							aria-valuetext="Lautstärke {volume}"
							title="Lautstärke"
							type="range"
							min="0"
							max="1"
							step="0.1"
							bind:value={volume}
							bind:this={volumeSlider}
							class="volume-slider"
						/>
					</div>
					<div class="row-2-right">
						<TempoSettings bind:playbackRate />

						<CaptionSettings
							{video}
							bind:captionsBackgroundColor
							bind:captionsFontColor
							bind:captionsFontSize
						/>

						<button
							class="player-btn"
							aria-label={fullscreen ? 'Vollbild verlassen' : 'Vollbild'}
							title={fullscreen ? 'Vollbild verlassen' : 'Vollbild'}
							on:click={onToggleFullscreen}
						>
							{#if fullscreen}
								<Icon size="parent" img="fullscreen-close" svg_color="white" />
							{:else}
								<Icon size="parent" img="fullscreen" svg_color="white" />
							{/if}
						</button>
					</div>
				</div>

				<div />
			{/if}
		</div>
	{/if}

	<div class="toggle-controls-wrapper">
		<label class="checkbox-input-label-wrapper">
			<input type="checkbox" bind:checked={useNativeControls} />
			<span>Nativer Player nutzen</span>
		</label>
	</div>

	<!-- Aria-Live Region -->
	<div class="sr-only" aria-live="polite">
		{#key ariaLiveContent}
			{ariaLiveContent}
		{/key}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;

		.toggle-controls-wrapper {
			display: flex;
			justify-content: end;
			margin-block: 0.5rem;

			label {
				span {
					font-size: 0.875rem;
				}
			}
		}

		video {
			width: 100%;
			border-bottom: none;
			margin-bottom: -1px;
			background-color: var(--color-black);

			&.native-controls {
				max-height: calc(100% - 5rem);
			}

			// bg color
			&.bg-black {
				&::cue {
					background-color: var(--color-black);
				}
			}
			&.bg-red {
				&::cue {
					background-color: var(--color-red);
				}
			}
			&.bg-yellow {
				&::cue {
					background-color: var(--color-yellow);
					background: var(--color-yellow);
				}
			}
			&.bg-white {
				&::cue {
					background-color: var(--color-white);
				}
			}
			&.bg-blue {
				&::cue {
					background-color: var(--color-blue);
				}
			}

			// fc color
			&.fc-black {
				&::cue {
					color: var(--color-black);
				}
			}
			&.fc-red {
				&::cue {
					color: var(--color-red);
				}
			}
			&.fc-yellow {
				&::cue {
					color: var(--color-yellow);
				}
			}
			&.fc-white {
				&::cue {
					color: var(--color-white);
				}
			}
			&.fc-blue {
				&::cue {
					color: var(--color-blue);
				}
			}

			// font-size
			&.fs-small {
				&::cue {
					font-size: 1rem;
				}
			}
			&.fs-medium {
				&::cue {
					font-size: 1.25rem;
				}
			}
			&.fs-large {
				&::cue {
					font-size: 1.5rem;
				}
			}
			&.fs-larger {
				&::cue {
					font-size: 2rem;
				}
			}
		}

		#video-controls {
			display: flex;
			flex-direction: column;
			justify-content: center;

			gap: 0.375rem;
			background-color: var(--color-black);

			padding: 0.625rem 1rem 0.25rem;
			height: 5rem;

			.row-1 {
				display: flex;
				align-items: center;
				gap: 0.375rem;

				span {
					font-size: 0.875rem;
					color: rgba(var(--color-white-rgb), 0.8);
				}
			}

			.volume-slider {
				cursor: pointer;
				max-width: 5rem;
			}

			.time-progress {
				box-sizing: border-box;
				width: 100%;
				margin: 0;
				cursor: pointer;
			}

			button {
				width: 2rem;
				height: 2rem;
				padding: 0rem;

				display: flex;
				align-items: center;
				justify-content: center;

				background-color: transparent;
				border: none;

				border-radius: 50%;
				cursor: pointer;

				&:hover,
				&:focus {
					outline: 2px solid var(--color-white);
				}
			}

			* {
				color: var(--color-white);
			}

			.row-2 {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.row-2-left,
				.row-2-right {
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}
			}

			&.isSafari {
				.volume-slider {
					margin-top: 0.75rem;

					&:disabled {
						opacity: 50%;
					}
				}
				.time-progress,
				.volume-slider {
					appearance: none;
					-webkit-appearance: none;
					width: 100%;
					outline: none;
					height: 0.25rem;
					background-color: var(--color-white);
					border-radius: 1rem;
					margin-bottom: 0.875rem;

					cursor: pointer;

					&::-webkit-slider-thumb {
						-webkit-appearance: none;
						appearance: none;
						height: 1.25rem;
						width: 1.25rem;
						border: 1px solid var(--color-black);
						background-color: var(--color-white);
						border-radius: 50%;

						&:hover,
						&:active {
							outline: 2px solid var(--color-white);
							border: 2px solid var(--color-black);
						}
					}

					&:focus-within {
						&::-webkit-slider-thumb {
							outline: 2px solid var(--color-white);
							border: 2px solid var(--color-black);
						}
					}
				}
			}
		}
	}

	@media (max-width: 37.75rem) {
		#video-controls {
			border-radius: 0;
		}

		video {
			border-radius: 0;
		}
	}

	@media (min-width: 37.8125rem) {
		#video-controls {
			border-radius: 0 0 1.25rem 1.25rem;
		}

		video {
			border-radius: 0rem;

			&.native-controls {
				border-radius: 1.25rem 1.25rem 0 0;
			}

			&.isiOSDevice {
				border-radius: 1.25rem;
			}
		}
	}
</style>
