<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';
	import Modal from '../Modal.svelte';
	import { handleBackdropClick } from '../utils';

	export let video: HTMLVideoElement;

	let captionMenuButton: HTMLButtonElement;

	let captionMenu: HTMLDialogElement;
	let displayCaptionMenu = false;

	let modal: Modal;
	let displayModal = false;

	function toggleDisplayCaptionMenu() {
		displayCaptionMenu = !displayCaptionMenu;
	}

	$: {
		if (captionMenu) {
			displayCaptionMenu ? captionMenu.show() : captionMenu.close();
		}
	}

	function handleKeyEvent(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			toggleDisplayCaptionMenu();
		}
	}

	function handleMouseClick(e: MouseEvent) {
		if (e.target) {
			let target = e.target as HTMLElement;

			if (target === captionMenuButton) {
				return;
			}
			if (displayModal) {
				return;
			}

			if (displayCaptionMenu && target !== captionMenu && target.parentNode !== captionMenu) {
				handleBackdropClick(e, captionMenu);
			}
		}
	}

	onMount(() => {
		if (captionMenu) {
			captionMenu.addEventListener('close', () => {
				displayCaptionMenu = false;
			});
		}
	});

	// caption styles
	export let captionsBackgroundColor: string = 'black';
	export let captionsFontColor: string = 'white';
	export let captionsFontSize: string = 'small';

	$: {
		window.localStorage.setItem('captionsBackgroundColor', captionsBackgroundColor);
	}
	$: {
		window.localStorage.setItem('captionsFontColor', captionsFontColor);
	}
	$: {
		window.localStorage.setItem('captionsFontSize', captionsFontSize);
	}

	let selectedTrackLabel: string | null = null; // track active Caption

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
		displayCaptionMenu = false;
	}
</script>

<svelte:window on:click={(e) => handleMouseClick(e)} />

<div class="wrapper">
	<button
		bind:this={captionMenuButton}
		aria-expanded={displayCaptionMenu}
		on:click={() => toggleDisplayCaptionMenu()}
		title="Untertitel Untermenü"
		aria-label="Untertitel Untermenü"
		class="cc-btn"
	>
		CC
	</button>

	<dialog class="caption-menu" bind:this={captionMenu} on:keyup={(e) => handleKeyEvent(e)}>
		<menu>
			<li>
				<button aria-pressed={selectedTrackLabel === null} on:click={() => onSelectTextTrack(null)}
					>{#if selectedTrackLabel === null}
						<div class="check">
							<Icon size="parent" img="check" />
						</div>
					{:else}
						<div class="check" />
					{/if}
					Untertitel ausschalten</button
				>
			</li>
			{#each video.textTracks as track}
				<li>
					<button
						aria-pressed={track.label === selectedTrackLabel}
						on:click={() => onSelectTextTrack(track)}
					>
						{#if track.label === selectedTrackLabel}
							<div class="check">
								<Icon size="parent" img="check" />
							</div>
						{:else}
							<div class="check" />
						{/if}
						{track.label}
					</button>
				</li>
			{/each}
			<li>
				<button on:click={() => modal.toggleModalDisplay()}>
					<Icon img="settings" />
					Einstellungen
				</button>
			</li>
		</menu>
	</dialog>

	<Modal bind:this={modal} bind:displayModal>
		<svelte:fragment slot="headline">Untertitel Einstellungen</svelte:fragment>
		<svelte:fragment slot="content">
			<div class="modal-content">
				<div class="hint-wrapper">
					<div class="hint">
						<Icon img="attention" size="smedium" />
						<p>Hinweis</p>
					</div>

					<p class="hint-text">
						Die ausgewählten Einstellungen werden direkt übernommen. In gewissen Internetbrowser
						Betriebssystem Kombinationen kann es dazu kommen, dass die Änderung der Hintergrundfarbe
						nicht übernommen wird.
					</p>
				</div>

				<table class="style-selection" role="presentation">
					<tr>
						<td><label for="selectBackgroundColor">Hintergrundfarbe der Untertitel</label></td>
						<td>
							<select
								id="selectBackgroundColor"
								bind:value={captionsBackgroundColor}
								on:click|stopPropagation
								title="Untertitel Hintergrundfarbe"
								class="custom-select"
							>
								<option on:click|stopPropagation value="black">schwarz</option>
								<option on:click|stopPropagation value="red">rot</option>
								<option on:click|stopPropagation value="yellow">gelb</option>
								<option on:click|stopPropagation value="white">weiß</option>
								<option on:click|stopPropagation value="blue">blau</option>
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
								on:click|stopPropagation
								title="Untertitel Schriftfarbe"
							>
								<option on:click|stopPropagation value="black">schwarz</option>
								<option on:click|stopPropagation value="red">rot</option>
								<option on:click|stopPropagation value="yellow">gelb</option>
								<option on:click|stopPropagation value="white">weiß</option>
								<option on:click|stopPropagation value="blue">blau</option>
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
								on:click|stopPropagation
								title="Untertitel Schriftgröße"
							>
								<option on:click|stopPropagation value="small">klein</option>
								<option on:click|stopPropagation value="medium">normal</option>
								<option on:click|stopPropagation value="large">groß</option>
								<option on:click|stopPropagation value="larger">größer</option>
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
		</svelte:fragment>
	</Modal>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.hint-wrapper {
		background-color: var(--color-lavender);
		padding: 1rem;
		margin: 1rem;
		border-radius: 1rem;
		.hint {
			display: flex;
			flex-direction: row;
			gap: 0.5rem;

			p {
				font-weight: bold;
			}
		}

		.hint-text {
			margin-top: -1rem;
		}
	}

	.cc-btn {
		background-color: transparent;
		color: var(--color-white);
		border: 2px solid transparent;
		outline: none;
		border-radius: 0.33rem;
		font-weight: bold;
		font-size: 1rem;
		height: 1.8rem;
		cursor: pointer;

		&:focus,
		&:hover {
			border: 2px solid var(--color-white);
		}
	}

	.caption-menu {
		width: 10rem;
		padding: 0 0.33rem;
		box-sizing: border-box;

		border: 1px solid var(--color-black);
		border-radius: 1rem;

		bottom: 0;

		transform: translateX(-4rem) translateY(-2rem);

		li {
			list-style: none;
			margin-left: -2rem;
		}
		button {
			cursor: pointer;

			display: flex;
			align-items: center;
			text-align: left;
			gap: 0.5rem;

			width: 100%;
			min-height: 1.33rem;
			margin-bottom: 0.33rem;

			background-color: transparent;
			border: none;
			border-radius: 0.33rem;

			&:hover {
				outline: 2px solid var(--color-blue);
			}

			.check {
				height: 1.33rem;
				width: 1.33rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.modal-content {
		.style-selection {
			margin-inline: auto;

			tr {
				width: 100%;
				td {
					padding: 0.5rem 0;
				}

				td:first-child {
					text-align: right;
				}
				td:last-child {
					padding-left: 10px;
					select {
						min-width: 5rem;

						padding: 0.3rem;
						background-color: var(--color-white);
						border: 1px solid var(--color-black);
						outline: 2px solid var(--color-white);
						border-radius: 0.33rem;
						font-weight: bold;

						&:focus,
						&:hover {
							outline: 2px solid var(--color-blue);
						}
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
</style>
