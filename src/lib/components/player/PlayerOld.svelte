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
	import Modal from '../Modal.svelte';
	import Menu from '../menu/Menu.svelte';
	import MenuDivider from '../menu/MenuDivider.svelte';
	import MenuOption from '../menu/MenuOption.svelte';

	export let videoData: Video;

	// export let videoPathMp4: string;
	// export let captionsArray: Caption[];

	const captionsSettingsButtonId =
		'captionsSettingsBtn-' + Number((Math.random() * 100000000000).toFixed(0)).toString(32);

	let isOpenCaptionSettings = false;

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

	//
	let selectedTrackLabel: string | null = null; // track active Caption

	// caption styles
	let captionsBackgroundColor: string = 'black';
	let captionsFontColor: string = 'white';
	let captionsFontSize: string = 'small';

	// save captionsSettings in localStorage
	function onChangeCaptionsSettings() {
		window.localStorage.setItem('captionsBackgroundColor', captionsBackgroundColor);
		window.localStorage.setItem('captionsFontColor', captionsFontColor);
		window.localStorage.setItem('captionsFontSize', captionsFontSize);
	}

	// aria live
	let ariaLiveContent = '';

	onMount(() => {
		// if (/iPhone/.test(navigator.userAgent)) {
		// 	alert('Iphone');
		// } else {
		// 	alert('NO IPhone');
		// }

		// load capationSsettings from localStorage
		captionsBackgroundColor = window.localStorage.getItem('captionsBackgroundColor') || 'black';
		captionsFontColor = window.localStorage.getItem('captionsFontColor') || 'white';
		captionsFontSize = window.localStorage.getItem('captionsFontSize') || 'small';
	});

	// functions
	function onPlayPause() {
		paused = !paused;
		ariaLiveContent = paused ? 'Pausiert' : 'Gestartet';
	}
	function onMute() {
		muted = !muted;
		ariaLiveContent = muted ? 'Stummgeschalten' : 'Ton aktiviert';
	}

	// function onChangeTrack(ev: any) {
	// 	for (let index = 0; index < video.textTracks.length; index++) {
	// 		const textTrack = video.textTracks[index];
	// 		if (selectedTrackLabel === textTrack.label) {
	// 			textTrack.mode = 'showing';
	// 		} else {
	// 			textTrack.mode = 'hidden';
	// 		}
	// 	}
	// }

	function onSelectTextTrack(textTrack: TextTrack | null) {
		if (textTrack) {
			selectedTrackLabel = textTrack.label;

			for (let index = 0; index < video.textTracks.length; index++) {
				video.textTracks[index].mode = 'hidden';
			}
			textTrack.mode = 'showing';
		} else {
			selectedTrackLabel = null;
			for (let index = 0; index < video.textTracks.length; index++) {
				video.textTracks[index].mode = 'hidden';
			}
		}

		settingsContextMenu = false;
		document.getElementById(captionsSettingsButtonId)?.focus();
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
		document.fullscreenElement || (document as any).webkitFullscreenElement // for safari
			? exitFullscreen()
			: enterFullscreen();
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

	// settings context menu
	let settingsContextMenu = false;
	let settingsContextMenuPos = { x: 0, y: 0 };

	async function onOpenSettings(e: MouseEvent) {
		if (settingsContextMenu) {
			settingsContextMenu = false;
		} else {
			if ((document.fullscreenElement || (document as any).webkitFullscreenElement) && e.x > 0) {
				settingsContextMenuPos = { x: e.clientX, y: e.clientY };
			} else if (e.x > 0) {
				settingsContextMenuPos = { x: e.pageX, y: e.pageY };
			} else if (!(document.fullscreenElement || (document as any).webkitFullscreenElement)) {
				settingsContextMenuPos = {
					x:
						window.scrollX +
						(e.target as HTMLElement).getBoundingClientRect().x +
						(e.target as HTMLElement).clientWidth / 2,
					y:
						window.scrollY +
						(e.target as HTMLElement).getBoundingClientRect().y +
						(e.target as HTMLElement).clientHeight / 2
				};
			} else {
				settingsContextMenuPos = {
					x:
						// window.scrollX +
						(e.target as HTMLElement).getBoundingClientRect().x +
						(e.target as HTMLElement).clientWidth / 2,
					y:
						// window.scrollY +
						(e.target as HTMLElement).getBoundingClientRect().y +
						(e.target as HTMLElement).clientHeight / 2
				};
			}
			settingsContextMenu = true;
		}
	}

	async function openCaptionSettingsDialog() {
		if (document.fullscreenElement || (document as any).webkitFullscreenElement) {
			await exitFullscreen();
		}
		isOpenCaptionSettings = true;
		settingsContextMenu = false;
	}
</script>

<div
	class="wrapper"
	bind:this={videoWrapper}
	on:focusout={() => {
		if (ariaLiveContent !== '') ariaLiveContent = '';
	}}
>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		id="video"
		preload="metadata"
		width="100%"
		bind:this={video}
		bind:duration
		bind:currentTime
		bind:muted
		bind:paused
		bind:playbackRate
		bind:volume
		class="bg-{captionsBackgroundColor} fc-{captionsFontColor} fs-{captionsFontSize} "
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
		Your browser does not support the video tag.
	</video>

	<div id="video-controls" class="controls">
		{#if video}
			<div class="row-1">
				<input
					aria-valuetext="Zeit = {currentTimeMinutes} Minuten {currentTimeSeconds} Sekunden"
					class="time-progress"
					type="range"
					bind:value={currentTime}
					min="0"
					max={duration}
					on:keydown={onKeyDownTimeProgress}
				/>
			</div>

			<div class="row-2">
				<div>
					<button
						class="playpause"
						aria-label={paused ? 'Video abspielen' : 'Video pausieren'}
						title={paused ? 'Video abspielen' : 'Video pausieren'}
						on:click={onPlayPause}
					>
						{#if !paused}
							<Icon img="pause" svg_color="white" />
						{:else}
							<Icon img="play" svg_color="white" />
						{/if}
					</button>

					<button
						id="mute"
						aria-label="Ton stummschalten"
						title="Ton stummschalten"
						aria-pressed={muted}
						on:click={onMute}
					>
						{#if muted}
							<Icon img="sound_full" svg_color="green" />
						{:else}
							<Icon img="sound_full" svg_color="white" />
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
						disabled={muted}
					/>
				</div>
				<div>
					<button
						id={captionsSettingsButtonId}
						title="Untertitel Untermenü"
						aria-pressed={selectedTrackLabel !== null}
						on:click={onOpenSettings}
					>
						{#if selectedTrackLabel !== null}
							<Icon img="caption_selected" />
						{:else}
							<Icon img="caption_not_selected" />
						{/if}
					</button>
				</div>
				<div>
					<div>
						<button
							aria-label="Reduziere Wiedergabegeschwindigkeit"
							title="Reduziere Wiedergabegeschwindigkeit"
							on:click={() => {
								playbackRate = playbackRate < 0.5 ? 0.25 : playbackRate - 0.25;
								ariaLiveContent = 'Geschwindigkeit: ' + playbackRate;
							}}
						>
							<Icon img="minus" />
						</button>
						{playbackRate}x
						<button
							aria-label="Erhöhe Wiedergabegeschwindigkeit"
							title="Erhöhe Wiedergabegeschwindigkeit"
							on:click={() => {
								playbackRate = playbackRate + 0.25;
								ariaLiveContent = 'Geschwindigkeit: ' + playbackRate;
							}}
						>
							<Icon img="plus" />
						</button>
					</div>

					<!-- <button> sound </button> -->

					<button title="Fullscreen" on:click={onToggleFullscreen}>
						<Icon img="fullscreen" svg_color="white" />
					</button>
				</div>
			</div>

			<div class="row-3">
				<span>
					{currentTimeMinutes}:{currentTimeSeconds} / {durationMinutes}:{durationSeconds}
				</span>
				<span>Geschwindigkeit: {playbackRate}x</span>
				<span>{paused ? 'Pausiert' : 'Gestartet'}</span>
			</div>
			<div />
		{/if}
	</div>
	<!-- Aria-Live Region -->
	<div class="aria-live-region" aria-live="polite">
		{#key ariaLiveContent}
			{ariaLiveContent}
		{/key}
	</div>
	<!-- <CustomMenu /> -->
	{#if settingsContextMenu}
		<Menu
			{...settingsContextMenuPos}
			on:closeDialog={() => {
				document.getElementById(captionsSettingsButtonId)?.focus();
				settingsContextMenu = !settingsContextMenu;
			}}
		>
			<MenuOption on:click={() => onSelectTextTrack(null)}>
				{#if selectedTrackLabel === null}
					<Icon img="check" alt="Ausgewählt" />
				{:else}
					<div style="width:1.11rem; height:1.11rem" />
				{/if}
				<!-- {selectedTrackLabel === null ? '>' : ''} -->
				Untertitel ausschalten
			</MenuOption>
			{#each video.textTracks as track}
				<MenuOption on:click={() => onSelectTextTrack(track)}>
					{#if track.label === selectedTrackLabel}
						<Icon img="check" alt="Ausgewählt" />
					{:else}
						<div style="width:1.11rem; height:1.11rem" />
					{/if}
					<!-- {track.label === selectedTrackLabel ? '>' : ''} -->
					{track.label}
				</MenuOption>
			{/each}
			<MenuDivider />
			<MenuOption on:click={openCaptionSettingsDialog}>
				<Icon img="settings" />
				Einstellungen</MenuOption
			>
		</Menu>
	{/if}
</div>

<Modal>
	<div class="modalContent">
		<p>Die ausgewählten Einstellungen werden direkt übernommen.</p>

		<table class="style-selection" role="presentation">
			<tr>
				<td><label for="selectBackgroundColor">Hintergrundfarbe der Untertitel</label></td>
				<td>
					<select
						id="selectBackgroundColor"
						bind:value={captionsBackgroundColor}
						on:change={onChangeCaptionsSettings}
						title="Untertitel Hintergrundfarbe"
						class="custom-select"
					>
						<option value="black">black</option>
						<option value="red">red</option>
						<option value="yellow">yellow</option>
						<option value="white">white</option>
						<option value="blue">blue</option>
					</select>
				</td>
			</tr>
			<tr>
				<td><label for="selectFontColor">Schriftfarbe der Untertitel</label></td>
				<td>
					<select
						id="selectFontColor"
						class="custom-select"
						bind:value={captionsFontColor}
						on:change={onChangeCaptionsSettings}
						title="Untertitel Schriftfarbe"
					>
						<option value="black">black</option>
						<option value="red">red</option>
						<option value="yellow">yellow</option>
						<option value="white">white</option>
						<option value="blue">blue</option>
					</select>
				</td>
			</tr>
			<tr>
				<td><label for="selectFontSize">Schriftgröße der Untertitel</label></td>
				<td>
					<select
						id="selectFontSize"
						class="custom-select"
						bind:value={captionsFontSize}
						on:change={onChangeCaptionsSettings}
						title="Untertitel Schriftgröße"
					>
						<option value="small">small</option>
						<option value="medium">medium</option>
						<option value="large">large</option>
						<option value="larger">larger</option>
					</select>
				</td>
			</tr>
		</table>

		<p
			class="exampleText example-{captionsFontSize}"
			style="background-color: {captionsBackgroundColor}; color: {captionsFontColor}; "
		>
			So werden die Untertitel angezeigt
		</p>
	</div>
</Modal>

<style lang="scss">
	.aria-live-region {
		opacity: 0%;
		height: 0px;
		width: 0px;
	}

	button[aria-pressed='true'] {
		background-color: darkblue;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;

		video {
			width: 100%;
			max-height: calc(100% - 5.5rem);
			border-bottom: none;

			// bg color
			&.bg-black {
				&::cue {
					background-color: black;
				}
			}
			&.bg-red {
				&::cue {
					background-color: red;
				}
			}
			&.bg-yellow {
				&::cue {
					background-color: yellow;
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
			padding: 0.2rem;
			box-sizing: border-box;
			width: 100%;
			height: 5.5rem;
			border: 1px solid black;
			border-top: none;
			border-radius: 0 0 1.11rem 1.11rem;
			padding: 0.5rem;

			button {
				background: none;
				border: none;
				cursor: pointer;
			}

			* {
				color: white;
			}

			.time-progress {
				box-sizing: border-box;
				width: 100%;
				margin: 0;
			}

			.row-2 {
				display: flex;
				justify-content: center;
				align-items: center;

				div {
					flex-basis: calc(100% / 3);
					display: flex;
					gap: 5px;
					// text-align: center;
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

				span {
					width: 33.33333%;
					// &:first-of-type {
					// 	text-align: left;
					// }
					&:nth-of-type(2) {
						text-align: center;
					}
					&:last-of-type {
						text-align: right;
					}
				}
			}

			.playpause {
				width: 1.72rem;
				height: 1.72rem;
				border: none;
				// background-color: var(--color-white);
				background-color: transparent;
				border-radius: 50%;
				cursor: pointer;
			}
		}
	}

	.modalContent {
		.style-selection {
			tr {
				width: 100%;
				td:first-child {
					text-align: right;
				}
				td:last-child {
					padding-left: 10px;
					select {
						min-width: 5rem;
					}
				}
			}
		}

		.exampleText {
			width: 100%;
			height: 8rem;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		.example-small {
			font-size: 1rem;
		}
		.example-medium {
			font-size: 1.3rem;
		}
		.example-large {
			font-size: 1.9rem;
		}
		.example-larger {
			font-size: 2rem;
		}
	}

	option::selection {
		background-color: red;
	}

	.custom-select {
		border-radius: 10px;
		padding: 4px;
		option {
			border-radius: 10px;
		}
	}
</style>
