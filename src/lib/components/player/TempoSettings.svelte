<script lang="ts">
	import { run } from 'svelte/legacy';

	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';
	import { handleBackdropClick } from '../utils';

	interface Props {
		playbackRate?: number;
	}

	let tempoMenuButton: HTMLButtonElement;

	let dialog: HTMLDialogElement;
	let displayDialog = $state(false);

	let tempoOptions = [0.5, 0.75, 1, 1.25, 1.5];

	let { playbackRate = $bindable(1) }: Props = $props();

	function toggleDialogDisplay() {
		displayDialog = !displayDialog;
	}

	run(() => {
		if (dialog) displayDialog ? dialog.show() : dialog.close();
	});

	function handleMouseClick(e: MouseEvent) {
		if (e.target) {
			let target = e.target as HTMLElement;

			if (target === tempoMenuButton || target.parentNode?.parentNode === tempoMenuButton) {
				return;
			}

			if (displayDialog && target !== dialog && target.parentNode !== dialog) {
				handleBackdropClick(e, dialog);
			}
		}
	}

	onMount(() => {
		if (dialog) {
			dialog.addEventListener('close', () => {
				displayDialog = false;
			});
		}
	});

	function handleKeyEvent(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			toggleDialogDisplay();
		}
	}
</script>

<svelte:window onclick={(e) => handleMouseClick(e)} />

<div class="wrapper">
	<button
		bind:this={tempoMenuButton}
		aria-expanded={displayDialog}
		title="Wiedergabegetempo Untermenü"
		aria-label="Wiedergabegetempo Untermenü"
		onclick={() => toggleDialogDisplay()}
		class="tempo-btn"
	>
		<Icon svg_color="white" size="parent" img="tempo" />
	</button>

	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<dialog bind:this={dialog} onkeyup={(e) => handleKeyEvent(e)}>
		<header>
			<h4>Tempo</h4>
		</header>
		<menu>
			{#each tempoOptions as tempoOption}
				<li>
					<button
						aria-pressed={playbackRate === tempoOption}
						onclick={(e) => {
							e.stopPropagation();
							playbackRate = tempoOption;
							toggleDialogDisplay();
						}}
					>
						{#if playbackRate === tempoOption}
							<div class="check">
								<Icon size="parent" img="check" />
							</div>
						{:else}
							<div class="check"></div>
						{/if}
						<div class="option">{tempoOption}x</div></button
					>
				</li>
			{/each}
		</menu>
	</dialog>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.tempo-btn {
		background-color: transparent;
		color: var(--color-white);
		border: none;
		border-radius: 50%;
		font-weight: bold;
		font-size: 1rem;
		height: 2rem;
		width: 2rem;

		padding: 0;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;

		&:focus,
		&:hover {
			outline: 2px solid var(--color-white);
		}
	}

	dialog {
		width: 6rem;
		bottom: 0;
		transform: translateX(-2.25rem) translateY(-2.25rem);

		padding: 0;

		border: 1px solid var(--color-black);
		border-radius: 1rem;

		header {
			h4 {
				font-size: 1rem;
				margin: 0.375rem 0;
				text-align: center;
			}
		}

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
			min-height: 1.5rem;
			margin-bottom: 0.375rem;

			background-color: transparent;
			border: none;
			border-radius: 0.375rem;

			color: var(--color-black);

			&:hover {
				outline: 2px solid var(--color-blue);
			}

			.check {
				min-height: 1.5rem;
				min-width: 1.25rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.option {
			display: flex;
			font-size: 0.875rem;
			width: 100%;
		}
	}
</style>
