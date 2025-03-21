<script lang="ts">
	import { base } from '$app/paths';
	import { onDestroy, onMount } from 'svelte';
	import Icon from './Icon.svelte';

	interface Props {
		topLeft?: string;
		topRight?: string;
		bottomLeft?: string;
		bottomRight?: string;
	}

	let { topLeft = '', topRight = '', bottomLeft = '', bottomRight = '' }: Props = $props();

	const pieceLabels = ['denke', 'sage', 'fühle', 'mache'];
	const pieceIcon = ['think-bubble', 'speech-bubble', 'heart', 'hand'];
	const puzzlePieces = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
	const smBreakpoint = 350;
	const mdBreakpoint = 480;

	const puzzle = {
		topLeft: topLeft,
		topRight: topRight,
		bottomLeft: bottomLeft,
		bottomRight: bottomRight
	};

	let text = $state(puzzle.topLeft);
	let tabPossible = $state(false);

	let textBox: HTMLElement;
	let textBoxHeight = $state(0);
	let selectedPiece = $state(-1);

	let firstContact = $state(true);

	let paddingBottom = $state(0);
	let textBoxSpace = 0;

	let innerWidth = $state(0);
	let smMq: MediaQueryList;
	let mdMq: MediaQueryList;

	onMount(() => {
		innerWidth = window.innerWidth;
		smMq = window.matchMedia(`(max-width: ${smBreakpoint}px)`);
		mdMq = window.matchMedia(`(max-width: ${mdBreakpoint}px)`);

		smMq.addEventListener('change', onMediaQueryChange);
		mdMq.addEventListener('change', onMediaQueryChange);

		switchTextBoxSpace();
	});

	onDestroy(() => {
		if (smMq) smMq.removeEventListener('change', onMediaQueryChange);
		if (mdMq) mdMq.removeEventListener('change', onMediaQueryChange);
	});

	function switchTextBoxSpace() {
		switch (true) {
			case innerWidth <= smBreakpoint:
				textBoxSpace = 0;
				break;
			case innerWidth <= mdBreakpoint:
				textBoxSpace = 40;
				break;
			default:
				textBoxSpace = 80;
				break;
		}
	}

	function onMediaQueryChange() {
		innerWidth = window.innerWidth;

		switchTextBoxSpace();

		if (selectedPiece !== -1) {
			textBoxHeight = textBox.clientHeight + textBoxSpace;
		}
	}

	function onPiecePressed(piece: string): void {
		if (firstContact) firstContact = false;
		switch (piece) {
			case 'topLeft':
				text = puzzle.topLeft;
				selectedPiece = 0;
				break;
			case 'topRight':
				text = puzzle.topRight;
				selectedPiece = 1;
				break;
			case 'bottomLeft':
				text = puzzle.bottomLeft;
				selectedPiece = 2;
				break;
			case 'bottomRight':
				text = puzzle.bottomRight;
				selectedPiece = 3;
				break;
			default:
				break;
		}

		if (textBoxHeight !== 0) {
			textBoxHeight = 0;
			tabPossible = false;
			paddingBottom = textBox.clientHeight + textBoxSpace;

			setTimeout(() => {
				textBoxHeight = textBox.clientHeight + textBoxSpace;
				tabPossible = true;
				paddingBottom = 0;
			}, 400);
		} else {
			textBoxHeight = textBox.clientHeight + textBoxSpace;
			tabPossible = true;
		}
	}

	function onKeypressed(event: KeyboardEvent) {
		const acceptedKeys = ['ArrowRight', 'ArrowLeft', 'Enter', 'Space'];
		if (firstContact && acceptedKeys.includes(event.code)) firstContact = false;
		if (event.code === 'ArrowLeft') {
			event.preventDefault();
			let element;
			if (selectedPiece === 0) element = document.getElementById('btn-3');
			if (selectedPiece !== 0) element = document.getElementById('btn-' + (selectedPiece - 1));
			element?.focus();
			element?.click();
		} else if (event.code === 'ArrowRight') {
			event.preventDefault();
			let element;
			if (selectedPiece === 3) element = document.getElementById('btn-0');
			if (selectedPiece !== 3) element = document.getElementById('btn-' + (selectedPiece + 1));
			element?.focus();
			element?.click();
		}
	}
</script>

<div class="wrapper">
	<div
		class="puzzle"
		role="tablist"
		style={`height: ${
			innerWidth <= smBreakpoint
				? textBoxHeight / 12 + 17.5
				: innerWidth <= mdBreakpoint
					? textBoxHeight / 16 + 19.5
					: textBoxHeight / 16 + 22.875
		}rem`}
	>
		{#each Array(4) as _, i}
			<div class="puzzle-piece piece-{i}" class:active={selectedPiece === i && tabPossible}>
				<button
					id="btn-{i}"
					tabindex={selectedPiece === i || (i === 0 && firstContact) ? 0 : -1}
					role="tab"
					aria-selected={selectedPiece === i}
					onclick={() => onPiecePressed(puzzlePieces[i])}
					onkeydown={onKeypressed}
				>
					<Icon img={pieceIcon[i]} size="parent" />
					<p>Was ich <br role="presentation" /><strong>{pieceLabels[i]}</strong></p>
				</button>
				<img
					class:active={selectedPiece === i}
					class="drop-shadow"
					role="presentation"
					src="{base}/decorations/puzzlePieces/puzzle-{puzzlePieces[i]}.svg"
					alt=""
				/>
			</div>
		{/each}
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<div tabindex={tabPossible ? 0 : -1} class="text" bind:this={textBox} class:hidden={!tabPossible}>
		<p>{text}</p>
	</div>
</div>
<div class="padding-bottom-div" style="height: {paddingBottom}px"></div>

<style lang="scss">
	.padding-bottom-div {
		height: 0px;
		width: 100%;
		transition: all 0.4s ease-in-out;
	}

	button {
		background-color: transparent;
		color: var(--color-black);

		border: none;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0;
		margin: 0;
		z-index: 3;
		top: 1rem;
		left: 1rem;
		width: 100%;
		height: 100%;
		max-width: 10.375rem;
		max-height: 10.375rem;
		font-size: 1rem;
		cursor: pointer;

		&#btn-0 {
			border-top-left-radius: 1.25rem;
		}

		&#btn-1 {
			border-top-right-radius: 1.25rem;
		}

		&#btn-2 {
			border-bottom-left-radius: 1.25rem;
		}

		&#btn-3 {
			border-bottom-right-radius: 1.25rem;
		}

		&:focus,
		&:hover {
			outline: 3px solid var(--color-blue);
			outline-offset: -10px;
			transition: outline 0.1s ease-out;
		}

		p {
			padding: 0;
			margin: 0;
			margin-top: 0.25rem;
		}
	}

	img {
		width: 12.5rem;
		height: 12.5rem;
	}

	.wrapper {
		max-width: var(--content-element-max-width);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 7.5rem;

		.text {
			position: absolute;
			z-index: 1;
			width: 100%;
			max-width: calc(19.875rem - 2px);
			padding: 1rem;
			border: 1px solid var(--color-black);
			border-radius: 1.25rem;
			box-sizing: border-box;
			text-align: center;

			p {
				font-size: 1rem;
				&::before {
					content: open-quote;
				}
				&::after {
					content: close-quote;
				}
			}

			&.hidden {
				visibility: hidden;
			}
		}

		.puzzle {
			position: relative;
			transition: height 0.4s ease-in-out;

			width: 22.5625rem;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 2;

			.puzzle-piece {
				position: absolute;
				transition: transform 0.4s ease-in-out;
				will-change: transform;

				&.piece-0 {
					top: 0;
					left: 0;
					transform: rotate(0deg);

					&.active {
						transform: rotate(-5deg) translateX(-1rem) translateY(4rem);
					}
				}

				&.piece-1 {
					top: 0;
					right: 0;
					transform: rotate(0deg);

					&.active {
						transform: rotate(5deg) translateX(1rem) translateY(3rem);
					}
				}

				&.piece-2 {
					bottom: 0;
					left: 0;
					transform: rotate(0deg);

					&.active {
						transform: rotate(5deg) translateX(-1rem) translateY(-2.5rem);
					}
				}

				&.piece-3 {
					bottom: 0;
					right: 0;
					transform: rotate(0deg);

					&.active {
						transform: rotate(-5deg) translateX(1rem) translateY(-3.5rem);
					}
				}
			}
		}
	}
	@media (max-width: 30rem) {
		img {
			width: 10.625rem;
			height: 10.625rem;
		}

		button {
			max-width: 8.75rem;
			max-height: 8.75rem;
		}

		.wrapper {
			margin-top: 5.625rem;

			.text {
				max-width: 17rem;
				padding: 0.625rem;
			}

			.puzzle {
				width: 19.25rem;

				.puzzle-piece {
					&.piece-0 {
						&.active {
							transform: rotate(-5deg) translateX(-1.25rem) translateY(3rem);
						}
					}

					&.piece-1 {
						&.active {
							transform: rotate(5deg) translateX(1.25rem) translateY(1.875rem);
						}
					}

					&.piece-2 {
						&.active {
							transform: rotate(5deg) translateX(-1.25rem) translateY(-1.675rem);
						}
					}

					&.piece-3 {
						&.active {
							transform: rotate(-5deg) translateX(1.25rem) translateY(-2rem);
						}
					}
				}
			}
		}
	}
	@media (max-width: 21.875rem) {
		img {
			width: 9.5rem;
			height: 9.5rem;
		}

		button {
			max-width: 7.6125rem;
			max-height: 7.6125rem;
		}

		.wrapper {
			margin-top: 4rem;

			.text {
				max-width: 15rem;
				padding: 0;
			}

			.puzzle {
				width: 17.25rem;

				.puzzle-piece {
					&.piece-0 {
						&.active {
							transform: rotate(-5deg) translateX(-1.25rem) translateY(3.125rem);
						}
					}

					&.piece-1 {
						&.active {
							transform: rotate(5deg) translateX(1.25rem) translateY(1.25rem);
						}
					}

					&.piece-2 {
						&.active {
							transform: rotate(5deg) translateX(-1.25rem) translateY(-2.25rem);
						}
					}

					&.piece-3 {
						&.active {
							transform: rotate(-5deg) translateX(1.25rem) translateY(-2.25rem);
						}
					}
				}
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			margin-inline: auto;
		}
	}
</style>
