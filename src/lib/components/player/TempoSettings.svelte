<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';
	import { handleBackdropClick } from '../utils';

	let tempoMenuButton: HTMLButtonElement;

	let dialog: HTMLDialogElement;
	let displayDialog = false;

	let tempoOptions = [0.5, 0.75, 1, 1.25, 1.5];
	export let playbackRate = 1;

	function toggleDialogDisplay() {
		displayDialog = !displayDialog;
	}

	$: {
		if (dialog) displayDialog ? dialog.show() : dialog.close();
	}

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

<svelte:window on:click={(e) => handleMouseClick(e)} />

<div class="wrapper">
	<button
		bind:this={tempoMenuButton}
		aria-expanded={displayDialog}
		title="Wiedergabegetempo Untermenü"
		aria-label="Wiedergabegetempo Untermenü"
		on:click={() => toggleDialogDisplay()}
		class="tempo-btn"
	>
		<Icon svg_color="white" size="parent" img="tempo" />
	</button>

	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<dialog bind:this={dialog} on:keyup={(e) => handleKeyEvent(e)}>
		<header>
			<h4>Tempo</h4>
			<hr />
		</header>
		<menu>
			{#each tempoOptions as tempoOption}
				<li>
					<button
						aria-pressed={playbackRate === tempoOption}
						on:click|stopPropagation={() => {
							playbackRate = tempoOption;
							toggleDialogDisplay();
						}}
					>
						{#if playbackRate === tempoOption}
							<div class="check">
								<Icon size="parent" img="check" />
							</div>
						{:else}
							<div class="check" />
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
		border: 2px solid transparent;
		outline: 2px solid transparent;

		border-radius: 50%;
		font-weight: bold;
		font-size: 1rem;
		height: 1.8rem;
		width: 1.8rem;

		margin-right: 0.5rem;
		padding: 0;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;

		&:focus,
		&:hover {
			border: 2px solid transparent;
			outline: 2px solid var(--color-white);
		}
	}

	dialog {
		width: 6rem;
		bottom: 0;
		transform: translateX(-2.2rem) translateY(-2rem);

		padding: 0;

		border: 1px solid var(--color-black);
		border-radius: 1rem;

		header {
			h4 {
				font-size: 0.88rem;
				margin: 0.55rem 0;
				text-align: center;
			}

			hr {
				background-color: var(--color-lavender);
				border: none;
				height: 3px;
				margin: 0;
			}
		}

		li {
			list-style-type: none;
			margin-left: -2rem;
			padding-right: 0 0.33rem;
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

		.option {
			display: flex;
			font-size: 0.88rem;

			span {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
