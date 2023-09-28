<script lang="ts">
	import { base } from '$app/paths';
	import { onDestroy, onMount } from 'svelte';
	import Icon from './Icon.svelte';

	export let topLeft = '';
	export let topRight = '';
	export let bottomLeft = '';
	export let bottomRight = '';

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

	let text = puzzle.topLeft;
	let tabPossible = false;

	let textBox: HTMLElement;
	let textBoxHeight = 0;
	let selectedPiece = -1;

	let firstContact = true;

	let paddingBottom = 0;
	let textBoxSpace = 0;

	let innerWidth = window.innerWidth;
	const smMq = window.matchMedia(`(max-width: ${smBreakpoint}px)`);
	const mdMq = window.matchMedia(`(max-width: ${mdBreakpoint}px)`);

	onMount(() => {
		smMq.addEventListener('change', onMediaQueryChange);
		mdMq.addEventListener('change', onMediaQueryChange);

		switchTextBoxSpace();
	});

	onDestroy(() => {
		smMq.removeEventListener('change', onMediaQueryChange);
		mdMq.removeEventListener('change', onMediaQueryChange);
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
				? textBoxHeight / 13 + 14.7
				: innerWidth <= mdBreakpoint
				? textBoxHeight / 15 + 17.43
				: textBoxHeight / 18 + 20.1
		}rem`}
	>
		{#each Array(4) as _, i}
			<div class="puzzle-piece piece-{i}" class:active={selectedPiece === i && tabPossible}>
				<button
					id="btn-{i}"
					tabindex={selectedPiece === i || (i === 0 && firstContact) ? 0 : -1}
					role="tab"
					aria-selected={selectedPiece === i}
					on:click={() => onPiecePressed(puzzlePieces[i])}
					on:keydown={onKeypressed}
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
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div tabindex={tabPossible ? 0 : -1} class="text" bind:this={textBox} class:hidden={!tabPossible}>
		<p>{text}</p>
	</div>
</div>
<div class="padding-bottom-div" style="height: {paddingBottom}px" />

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
		top: 1.11rem;
		left: 1.11rem;
		width: 100%;
		height: 100%;
		max-width: 8.77rem;
		max-height: 8.77rem;
		font-size: 1rem;
		cursor: pointer;

		&#btn-0 {
			border-top-left-radius: 1.11rem;
		}

		&#btn-1 {
			border-top-right-radius: 1.11rem;
		}

		&#btn-2 {
			border-bottom-left-radius: 1.11rem;
		}

		&#btn-3 {
			border-bottom-right-radius: 1.11rem;
		}

		&:focus,
		&:hover {
			outline: 3px solid var(--color-blue);
			outline-offset: -8px;
			transition: outline 0.1s ease-out;
		}

		p {
			padding: 0;
			margin: 0;
			margin-top: 0.27rem;
		}
	}

	img {
		width: 11rem;
		height: 11rem;

		&.drop-shadow {
			filter: drop-shadow(0px 2px 2px rgb(var(--color-black-rgb), 0.2));

			&.active {
				filter: drop-shadow(0px 6px 3px rgb(var(--color-black-rgb), 0.1));
			}
		}
	}

	.wrapper {
		max-width: var(--content-element-max-width);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 6.66rem;

		.text {
			position: absolute;
			z-index: 1;
			width: 100%;
			max-width: 17.63rem;
			padding: 1rem;
			border: 1px solid var(--color-black);
			border-radius: 0.55rem;
			box-sizing: border-box;
			text-align: center;

			p {
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

			width: 19.85rem;
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
	@media (max-width: 480px) {
		img {
			width: 9.5rem;
			height: 9.5rem;
		}

		button {
			top: 0.95rem;
			left: 0.95rem;
			max-width: 7.6rem;
			max-height: 7.6rem;

			&#btn-0 {
				border-top-left-radius: 0.95rem;
			}

			&#btn-1 {
				border-top-right-radius: 0.95rem;
			}

			&#btn-2 {
				border-bottom-left-radius: 0.95rem;
			}

			&#btn-3 {
				border-bottom-right-radius: 0.95rem;
			}
		}

		.wrapper {
			margin-top: 5rem;

			.text {
				max-width: 15rem;
				padding: 0.55rem;
			}

			.puzzle {
				width: 17.125rem;

				.puzzle-piece {
					&.piece-0 {
						&.active {
							transform: rotate(-5deg) translateX(-1rem) translateY(4rem);
						}
					}

					&.piece-1 {
						&.active {
							transform: rotate(5deg) translateX(1rem) translateY(2.5rem);
						}
					}

					&.piece-2 {
						&.active {
							transform: rotate(5deg) translateX(-1rem) translateY(-3rem);
						}
					}

					&.piece-3 {
						&.active {
							transform: rotate(-5deg) translateX(1rem) translateY(-3.5rem);
						}
					}
				}
			}
		}
	}
	@media (max-width: 350px) {
		img {
			width: 8rem;
			height: 8rem;
		}

		button {
			top: 0.8rem;
			left: 0.8rem;
			max-width: 6.4rem;
			max-height: 6.4rem;

			&#btn-0 {
				border-top-left-radius: 0.8rem;
			}

			&#btn-1 {
				border-top-right-radius: 0.8rem;
			}

			&#btn-2 {
				border-bottom-left-radius: 0.8rem;
			}

			&#btn-3 {
				border-bottom-right-radius: 0.8rem;
			}
		}

		.wrapper {
			margin-top: 4rem;

			.text {
				max-width: calc(100% - 2.33rem);
				margin-inline: 1.33rem;
				padding: 0;
			}

			.puzzle {
				width: 14.44rem;

				.puzzle-piece {
					&.piece-0 {
						&.active {
							transform: rotate(-5deg) translateX(-1rem) translateY(3rem);
						}
					}

					&.piece-1 {
						&.active {
							transform: rotate(5deg) translateX(1rem) translateY(1.5rem);
						}
					}

					&.piece-2 {
						&.active {
							transform: rotate(5deg) translateX(-1rem) translateY(-2rem);
						}
					}

					&.piece-3 {
						&.active {
							transform: rotate(-5deg) translateX(1rem) translateY(-2.5rem);
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
