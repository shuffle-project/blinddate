<script lang="ts">
	import Icon from '../Icon.svelte';
	import Modal from '../Modal.svelte';

	let {
		video,
		captionsBackgroundColor = $bindable('black'),
		captionsFontColor = $bindable('white'),
		captionsFontSize = $bindable('small')
	}: {
		video: HTMLVideoElement;
		captionsBackgroundColor: string;
		captionsFontColor: string;
		captionsFontSize: string;
	} = $props();

	const randomId = $props.id();

	let captionMenu: HTMLDialogElement;
	let displayCaptionMenu = $state(false);
	let initialOpenMenuClick = $state(false);

	let modal: Modal;
	let displayModal: boolean = $state(false);

	function toggleDisplayCaptionMenu() {
		displayCaptionMenu = !displayCaptionMenu;
		displayCaptionMenu ? captionMenu.show() : captionMenu.close();

		if (!displayCaptionMenu) {
			initialOpenMenuClick = false;
		}
	}

	$effect(() => {
		window.localStorage.setItem('captionsBackgroundColor', captionsBackgroundColor);
		window.localStorage.setItem('captionsFontColor', captionsFontColor);
		window.localStorage.setItem('captionsFontSize', captionsFontSize);
	});

	function handleKeyEvent(e: KeyboardEvent) {
		if (e.key === 'Escape') toggleDisplayCaptionMenu();
	}

	function handleMouseClick(e: MouseEvent) {
		if (displayModal) return;
		if (!displayCaptionMenu) return;

		if (!initialOpenMenuClick) {
			initialOpenMenuClick = true;
			return;
		}

		const dialogDimensions = captionMenu.getBoundingClientRect();
		if (
			e.clientX < dialogDimensions.left ||
			e.clientX > dialogDimensions.right ||
			e.clientY < dialogDimensions.top ||
			e.clientY > dialogDimensions.bottom
		) {
			toggleDisplayCaptionMenu();
		}
	}

	let selectedTrackLabel: string | null = $state(null);

	function onSelectTextTrack(textTrack: TextTrack | null) {
		selectedTrackLabel = textTrack ? textTrack.label : null;

		for (let track of video.textTracks) {
			track.mode = textTrack && track.label === textTrack.label ? 'showing' : 'hidden';
		}

		toggleDisplayCaptionMenu();
	}
</script>

<svelte:window on:click={(e) => handleMouseClick(e)} />

<div class="wrapper">
	<button
		aria-expanded={displayCaptionMenu}
		onclick={() => toggleDisplayCaptionMenu()}
		title="Untertitel Untermenü"
		aria-label="Untertitel Untermenü"
		class="caption-btn"
	>
		<Icon img="caption" svg_color="white" size="medium" />
	</button>

	<dialog class="caption-menu" bind:this={captionMenu} onkeyup={(e) => handleKeyEvent(e)}>
		<menu>
			<li>
				<button aria-pressed={selectedTrackLabel === null} onclick={() => onSelectTextTrack(null)}
					>{#if selectedTrackLabel === null}
						<div class="check">
							<Icon size="parent" img="check" />
						</div>
					{:else}
						<div class="check"></div>
					{/if}
					Untertitel ausschalten</button
				>
			</li>
			{#each video.textTracks as track}
				<li>
					<button
						aria-pressed={track.label === selectedTrackLabel}
						onclick={() => onSelectTextTrack(track)}
					>
						{#if track.label === selectedTrackLabel}
							<div class="check">
								<Icon size="parent" img="check" />
							</div>
						{:else}
							<div class="check"></div>
						{/if}
						{track.label}
					</button>
				</li>
			{/each}
			<li>
				<button onclick={() => modal.toggleModalDisplay()}>
					<div class="check">
						<Icon img="settings" size="parent" />
					</div>
					Einstellungen
				</button>
			</li>
		</menu>
	</dialog>

	<Modal bind:this={modal} bind:displayModal>
		{#snippet headline()}
			Untertitel Einstellungen
		{/snippet}

		{#snippet content()}
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
					<tbody>
						<tr>
							<th
								><label for="selectBackgroundColor-{randomId}"
									>Hintergrundfarbe der Untertitel</label
								></th
							>
							<td>
								<select
									id="selectBackgroundColor-{randomId}"
									bind:value={captionsBackgroundColor}
									onclick={(e) => e.stopPropagation()}
									title="Untertitel Hintergrundfarbe"
									class="custom-select"
								>
									<option onclick={(e) => e.stopPropagation()} value="black">schwarz</option>
									<option onclick={(e) => e.stopPropagation()} value="red">rot</option>
									<option onclick={(e) => e.stopPropagation()} value="yellow">gelb</option>
									<option onclick={(e) => e.stopPropagation()} value="white">weiß</option>
									<option onclick={(e) => e.stopPropagation()} value="blue">blau</option>
								</select>
							</td>
						</tr>
						<tr>
							<th><label for="selectFontColor-{randomId}">Schriftfarbe der Untertitel</label></th>
							<td>
								<select
									id="selectFontColor-{randomId}"
									class="custom-select"
									bind:value={captionsFontColor}
									onclick={(e) => e.stopPropagation()}
									title="Untertitel Schriftfarbe"
								>
									<option onclick={(e) => e.stopPropagation()} value="black">schwarz</option>
									<option onclick={(e) => e.stopPropagation()} value="red">rot</option>
									<option onclick={(e) => e.stopPropagation()} value="yellow">gelb</option>
									<option onclick={(e) => e.stopPropagation()} value="white">weiß</option>
									<option onclick={(e) => e.stopPropagation()} value="blue">blau</option>
								</select>
							</td>
						</tr>
						<tr>
							<th><label for="selectFontSize-{randomId}">Schriftgröße der Untertitel</label></th>
							<td>
								<select
									id="selectFontSize-{randomId}"
									class="custom-select"
									bind:value={captionsFontSize}
									onclick={(e) => e.stopPropagation()}
									title="Untertitel Schriftgröße"
								>
									<option onclick={(e) => e.stopPropagation()} value="small">klein</option>
									<option onclick={(e) => e.stopPropagation()} value="medium">normal</option>
									<option onclick={(e) => e.stopPropagation()} value="large">groß</option>
									<option onclick={(e) => e.stopPropagation()} value="larger">größer</option>
								</select>
							</td>
						</tr>
					</tbody>
				</table>

				<div class="example-text-wrapper background-{captionsBackgroundColor}">
					<p class="example-text font-{captionsFontSize} color-{captionsFontColor}">
						So werden die Untertitel angezeigt
					</p>
				</div>
			</div>
		{/snippet}
	</Modal>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.hint-wrapper {
		background-color: var(--color-lavender);
		padding: 0rem 1rem 0.25rem;
		margin-block: 1rem;
		border-radius: 1rem;
		.hint {
			display: flex;
			flex-direction: row;
			gap: 0.625rem;

			p {
				font-weight: bold;
			}
		}

		.hint-text {
			margin-top: -1rem;
		}
	}

	.caption-btn {
		background-color: var(--color-black);
		color: var(--color-white);
		border: none;
		border-radius: 2rem;
		height: 2rem;
		width: 2rem;
		aspect-ratio: 1;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		&:focus,
		&:hover {
			outline: 2px solid var(--color-white);
		}
	}

	.caption-menu {
		width: 12rem;
		padding: 0 0.375rem;
		box-sizing: border-box;

		border: 1px solid var(--color-black);
		border-radius: 1rem;

		bottom: 0;

		transform: translateX(-6.5rem) translateY(-2.25rem);

		menu {
			list-style-type: none;
			padding: 0 0.25rem;
		}
		button {
			cursor: pointer;

			display: flex;
			align-items: center;
			text-align: left;
			gap: 0.375rem;

			width: 100%;
			min-height: 1.375rem;
			margin-bottom: 0.375rem;

			font-size: 0.875rem;
			color: var(--color-black);

			background-color: transparent;
			border: none;
			border-radius: 0.375rem;

			&:hover {
				outline: 2px solid var(--color-blue);
			}

			.check {
				min-height: 1.375rem;
				min-width: 1.375rem;
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
					padding: 0.625rem 0;
				}

				td:first-child {
					text-align: right;
				}
				td:last-child {
					padding-left: 0.625rem;
					select {
						min-width: 6rem;

						padding: 0.375rem;
						background-color: var(--color-white);
						border: 1px solid var(--color-black);
						outline: 2px solid var(--color-white);
						border-radius: 0.375rem;
						font-weight: bold;

						&:focus,
						&:hover {
							outline: 2px solid var(--color-blue);
						}
					}
				}
			}
		}

		.example-text-wrapper {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			border-radius: 1rem;
			margin-bottom: 1.25rem;

			&.background-black {
				background-color: var(--color-black);
			}

			&.background-red {
				background-color: var(--color-red);
			}

			&.background-yellow {
				background-color: var(--color-yellow);
			}

			&.background-white {
				background-color: var(--color-white);
			}

			&.background-blue {
				background-color: var(--color-blue);
			}

			.font-small {
				font-size: 1rem;
			}
			.font-medium {
				font-size: 1.25rem;
			}
			.font-large {
				font-size: 1.5rem;
			}
			.font-larger {
				font-size: 2rem;
			}

			.color-black {
				color: var(--color-black);
			}

			.color-red {
				color: var(--color-red);
			}

			.color-yellow {
				color: var(--color-yellow);
			}

			.color-white {
				color: var(--color-white);
			}

			.color-blue {
				color: var(--color-blue);
			}
		}
	}
</style>
