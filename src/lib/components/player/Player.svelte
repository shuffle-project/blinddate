<!--
captions	The track defines translation of dialogue and sound effects (suitable for deaf users)
chapters	The track defines chapter titles (suitable for navigating the media resource)
descriptions	The track defines a textual description of the video content (suitable for blind users)
metadata	The track defines content used by scripts. Not visible for the user
subtitles	The track defines subtitles, used to display subtitles in a video
 -->
<script lang="ts">
	import { base } from '$app/paths';
	import { detect } from 'detect-browser';
	import { onMount } from 'svelte';
	import type { Video } from '../../interfaces/player.interfaces';
	import Icon from '../Icon.svelte';
	import CaptionSettings from './CaptionSettings.svelte';
	import TempoSettings from './TempoSettings.svelte';
	const isSafari = detect()!.name == 'safari';

	export let videoData: Video;

	let fullscreen = false;

	let userDeviceIsiOS = false;

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
		if (isSafari) {
			let normalizedSliderValue = (currentTime / duration) * 100;
			normalizedSliderValue = normalizedSliderValue < 0 ? 0 : normalizedSliderValue;
			if (timeProgress) {
				timeProgress.style.background = `linear-gradient(to right, #99bef5 ${normalizedSliderValue}%, #ccc ${normalizedSliderValue}%)`;
			}
		}
	}

	$: {
		if (volumeSlider) {
			volumeSlider.style.background = `linear-gradient(to right, #99bef5 ${volume * 100}%, #ccc ${
				volume * 100
			}%)`;
		}
	}

	onMount(() => {
		// userDeviceIsiOS = /iPhone/.test(navigator.userAgent);
		userDeviceIsiOS =
			['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
				navigator.platform
			) ||
			// iPad on iOS 13 detection
			(navigator.userAgent.includes('Mac') && 'ontouchend' in document);

		if (!userDeviceIsiOS) {
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
		if (userDeviceIsiOS) return;
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
		id="video"
		controls={userDeviceIsiOS}
		preload="auto"
		width="100%"
		bind:this={video}
		bind:duration
		bind:muted
		bind:paused
		bind:playbackRate
		bind:volume
		bind:currentTime
		class={!userDeviceIsiOS
			? `bg-${captionsBackgroundColor} fc-${captionsFontColor} fs-${captionsFontSize}`
			: ''}
		class:userDeviceIsiOS
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

	{#if !userDeviceIsiOS}
		<div id="video-controls" class="controls" class:isSafari>
			{#if video}
				<div class="row-1">
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
				</div>

				<div class="row-2">
					<div>
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
							id="mute"
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
							disabled={muted}
							class="volume-slider"
						/>
					</div>
					<div>
						<CaptionSettings
							{video}
							bind:captionsBackgroundColor
							bind:captionsFontColor
							bind:captionsFontSize
						/>
					</div>
					<div>
						<TempoSettings bind:playbackRate />

						<button class="player-btn" title="Fullscreen" on:click={onToggleFullscreen}>
							{#if fullscreen}
								<Icon size="parent" img="fullscreen-close" svg_color="white" />
							{:else}
								<Icon size="parent" img="fullscreen" svg_color="white" />
							{/if}
						</button>
					</div>
				</div>

				<div class="row-3">
					<span>
						{currentTimeMinutes}:{currentTimeSeconds} / {durationMinutes}:{durationSeconds}
					</span>
					<span>Tempo: {playbackRate}x</span>
					<span>{paused ? 'Pausiert' : 'Gestartet'}</span>
				</div>
				<div />
			{/if}
		</div>
	{/if}
	<!-- Aria-Live Region -->
	<div class="aria-live-region" aria-live="polite">
		{#key ariaLiveContent}
			{ariaLiveContent}
		{/key}
	</div>
</div>

<style lang="scss">
	.aria-live-region {
		opacity: 0%;
		height: 0px;
		width: 0px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;

		video {
			width: 100%;
			max-height: calc(100% - 5.5rem);
			border-bottom: none;
			margin-bottom: -1px;

			// bg color
			&.bg-black {
				&::cue {
					background-color: black;
					background: black;
				}
			}
			&.bg-red {
				&::cue {
					background-color: red;
				}
			}
			&.bg-yellow {
				&::cue {
					background-color: yellow !important;
					background: yellow !important;
				}
			}
			&.bg-white {
				&::cue {
					background-color: white;
				}
			}
			&.bg-blue {
				&::cue {
					background-color: blue;
				}
			}

			// fc color
			&.fc-black {
				&::cue {
					color: black;
				}
			}
			&.fc-red {
				&::cue {
					color: red;
				}
			}
			&.fc-yellow {
				&::cue {
					color: yellow;
				}
			}
			&.fc-white {
				&::cue {
					color: white;
				}
			}
			&.fc-blue {
				&::cue {
					color: blue;
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
					font-size: 1.3rem;
				}
			}
			&.fs-large {
				&::cue {
					font-size: 1.9rem;
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
			background-color: var(--color-black);

			box-sizing: border-box;
			width: 100%;

			padding: 0.5rem;

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

			.playback-rate {
				font-size: 0.77rem;
				text-align: center;
				width: 2rem;
			}

			button {
				width: 1.8rem;
				height: 1.8rem;
				aspect-ratio: 1;
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
					outline-offset: 2px;
				}
			}

			* {
				color: var(--color-white);
			}

			.row-2 {
				display: flex;
				justify-content: center;
				align-items: center;

				div {
					flex-basis: calc(100% / 3);
					display: flex;
					gap: 5px;
					align-items: center;
				}

				:nth-child(2) {
					justify-content: center;
				}
				:nth-child(3) {
					justify-content: flex-end;
				}
			}

			.row-3 {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 0.55rem;

				span {
					width: 33.33333%;
					font-size: 0.77rem;

					&:nth-of-type(2) {
						text-align: center;
					}
					&:last-of-type {
						text-align: right;
					}
				}
			}
			&.isSafari {
				.volume-slider {
					margin-top: 0.7rem;

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
					height: 0.2rem;
					background-color: var(--color-white);
					border-radius: 1rem;
					margin-bottom: 0.8rem;

					// margin-bottom: 0.8rem;

					cursor: pointer;

					&::-webkit-slider-thumb {
						-webkit-appearance: none;
						appearance: none;
						height: 1.11rem;
						width: 1.11rem;
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

	@media (max-width: 42.25rem) {
		#video-controls {
			border-radius: 0;
		}

		video {
			border-radius: 0;
		}
	}

	@media (min-width: 42.3125rem) {
		#video-controls {
			border-radius: 0 0 1.11rem 1.11rem;
		}

		video {
			border-radius: 1.11rem 1.11rem 0 0;

			&.userDeviceIsiOS {
				border-radius: 1.11rem;
			}
		}
	}
</style>
