<script lang="ts">
	import BigLectureRoom from '$lib/components/big-picture/BigLectureRoom.svelte';
	import BigPictureMobile from '$lib/components/big-picture/BigPictureMobile.svelte';
	import { SUPPORT_OPTIONS, type SupportOptionId } from '$lib/constants/bigPicture';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';

	let selectedOption: SupportOptionId | '' = '';
	const supportOptions = SUPPORT_OPTIONS.filter((option) => option.id !== '0');

	function handleSupportSelection(id: SupportOptionId) {
		selectedOption = selectedOption !== id ? id : '';
	}
</script>

<svelte:head>
	<title>Das große Ganze - BlindDate</title>
</svelte:head>

<SubpageTitle>Das große Ganze</SubpageTitle>

<div class="wrapper">
	{#if ENVIRONMENT.showBigPictureContent}
		<!-- <p>
			Werden Lernumgebungen von vornherein so geplant und gestaltet, dass sie für alle Lernenden
			zugänglich sind, können einige aufwändige Nachbesserungen und zusätzliche, zeitintensive
			Anpassungen vermieden werden. Viele (Unterstützungs-)Maßnahmen, die bereits zu Beginn
			mitgedacht und umgesetzt werden, kommen vielen Studierenden zu Gute – vielleicht sogar
			Studierenden, die Sie im ersten Moment gar nicht mitbedacht haben.
		</p> -->

		<p>
			Viele (Unterstützungs-) Maßnahmen, die bereits zu Beginn mitgedacht und umgesetzt werden,
			kommen vielen Studierenden zu Gute – vielleicht sogar Studierenden, die Sie im ersten Moment
			gar nicht mitbedacht haben.
		</p>

		<p>Lassen Sie uns einen Blick auf diese möglichen Maßnahmen werfen.</p>
		<!-- 
		<p>
			Im Folgenden ist ein Vorlesungssaal voller Studierender abgebildet. Wählen Sie weiter unten
			eine Unterstützungsmöglichkeit aus und sehen Sie, wer alles davon profitiert. Anschließend
			können Sie auf die Studierenden klicken, um mehr Informationen zu bekommen.
		</p> -->

		<div class="desktop">
			<BigLectureRoom {selectedOption} />
			<fieldset
				id="support-list"
				aria-label="Unterstützungsmöglichkeiten"
				class="support-list desktop"
			>
				{#each supportOptions as option, i}
					<label>
						<input
							on:click={() => handleSupportSelection(option.id)}
							type="radio"
							value={option.name}
							name="support-list"
							checked={selectedOption === option.id}
						/>
						<span>{option.name}</span>
					</label>
				{/each}
			</fieldset>
		</div>
		<div class="mobile">
			<BigPictureMobile />
		</div>
	{:else}
		<p>
			Die Seite befindet sich aktuell noch in der Entwicklung. Bleiben Sie gespannt und schauen Sie
			gerne immer wieder Mal vorbei.
		</p>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		padding-inline: var(--outer-spacing);
		margin-top: 2.5rem;

		p {
			max-width: 35rem;
			margin-inline: auto;
		}

		.mobile {
			display: none;
		}

		.desktop {
			display: flex;
			flex-direction: column;
			position: relative;
			margin-inline: auto;
			max-width: var(--content-max-width);

			ul {
				padding: 0;
				margin: 0;
				list-style-type: none;

				li {
					position: absolute;

					.student-info-wrapper {
						display: none;
					}

					&.active {
						z-index: 3;

						.student-info-wrapper {
							position: absolute;
							z-index: 4;
							bottom: 0.625rem;
							left: 0;
							right: 0;

							display: flex;
							justify-content: center;
							align-items: center;

							.student-info {
								background-color: var(--color-blue);

								border-radius: 2.25rem;

								width: 1.375rem;
								height: 1.375rem;

								margin-bottom: 0.375rem;

								transition: all 0.2s ease-out;

								p {
									margin: 0;
									font-size: 1.25rem;
								}

								p {
									opacity: 0%;
									transform: scale(0);
								}
							}
						}

						&:hover,
						&:focus,
						&.show-all-names,
						&.selected {
							.student-info {
								opacity: 100%;

								color: var(--color-white);

								padding: 0.625rem 1rem;
								border-radius: 2.25rem;

								width: 6rem;
								margin-bottom: 0;

								transition: all 0.3s ease-out;

								display: flex;
								align-items: center;
								justify-content: center;
								gap: 0.625rem;

								p {
									transform: scale(1);
									opacity: 100%;
									transition: opacity 0.8s ease-out;
								}
							}
						}
					}
				}

				li.gabriel {
					bottom: 1.1%;
					left: 14%;

					img {
						width: min(13vw, 11.25rem);
					}
				}

				li.michelle {
					top: 38.8%;
					right: 21%;

					img {
						width: min(6.1vw, 5.25rem);
					}
				}

				li.maxi {
					top: 39.8%;
					left: 19%;

					img {
						width: min(10.5vw, 9rem);
					}
				}

				.student-button {
					padding: 0;
					border: none;
					background-color: transparent;
					cursor: pointer;

					&:focus-visible {
						outline: none;

						.persona-img {
							filter: drop-shadow(2px 0 0 var(--color-white))
								drop-shadow(0 -2px 0 var(--color-white)) drop-shadow(-2px 0 0 var(--color-white))
								drop-shadow(4px 0 0 var(--color-blue)) drop-shadow(-4px 0 0 var(--color-blue))
								drop-shadow(0 -4px 0 var(--color-blue));
						}
					}
				}
			}

			.dark-overlay {
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(var(--color-black-rgb), 0.5);
				// pointer-events: none;
				transition: opacity 0.3s ease-in-out;
				z-index: 2;
				border-top-left-radius: 2.5rem;
				border-top-right-radius: 2.5rem;
				opacity: 0%;

				.notch {
					color: var(--color-white);
					height: 4rem;
					border-radius: 2.5rem;
					position: absolute;
					left: 0;
					right: 0;
					top: 1.25rem;
					margin-inline: auto;

					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.625rem;

					label {
						background-color: var(--color-black);
						border-radius: 2.5rem;
						height: 3.5rem;
						padding-inline: 0.875rem;
						display: flex;
						align-items: center;
						gap: 0.625rem;
						cursor: pointer;

						&:hover {
							input {
								outline: 2px solid var(--color-white);
								outline-offset: 2px;
							}
						}

						input {
							background-color: transparent;
							-webkit-appearance: none;
							appearance: none;
							margin: 0;
							color: var(--color-white);
							min-width: 1.625rem;
							height: 1.625rem;
							border: 2px solid rgba(var(--color-white-rgb), 0.8);
							border-radius: 50%;

							display: grid;
							place-content: center;

							&:focus {
								outline: 2px solid var(--color-white);
								outline-offset: 2px;
							}

							&:checked {
								background-color: var(--color-white);
							}

							&:checked:before {
								content: '';
								width: 0.875rem;
								height: 0.875rem;
								box-shadow: inset 1rem 1rem var(--color-black);

								transform-origin: bottom left;
								clip-path: polygon(13% 50%, 5% 65%, 45% 100%, 100% 10%, 83% 0%, 40% 75%);
							}
						}
					}

					.icon-wrapper {
						width: 2.375rem;
						height: 2.375rem;
						background-color: var(--color-black);
						padding: 0.625rem;
						border-radius: 50%;
					}
				}

				&.not-hidden {
					opacity: 100%;
					transition: opacity 0.3s ease-in-out;
				}
			}

			.big-picture-room {
				width: 100%;
				height: 100%;
				border-top-left-radius: 2.5rem;
				border-top-right-radius: 2.5rem;
			}
		}

		.support-list {
			width: 100%;
			max-width: var(--content-max-width);
			margin-inline: auto;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 1rem;
			background-color: var(--color-black);
			border-bottom-left-radius: 2.5rem;
			border-bottom-right-radius: 2.5rem;
			border: none;
			box-sizing: border-box;

			label {
				color: rgba(var(--color-white-rgb), 0.8);
				display: flex;
				cursor: pointer;

				&:focus,
				&:hover {
					input {
						outline: 2px solid var(--color-white);
						outline-offset: 2px;
					}
				}

				span {
					margin-top: 0.25rem;
				}

				input {
					background-color: transparent;
					-webkit-appearance: none;
					appearance: none;
					margin: 0;
					margin-right: 0.375rem;
					color: var(--color-white);
					min-width: 1.625rem;
					height: 1.625rem;
					border: 2px solid rgba(var(--color-white-rgb), 0.8);
					border-radius: 50%;

					display: grid;
					place-content: center;

					&:focus {
						outline: 2px solid var(--color-white);
						outline-offset: 2px;
					}

					&:checked {
						background-color: var(--color-white);
					}

					&:checked:before {
						content: '';
						width: 0.875rem;
						height: 0.875rem;
						box-shadow: inset 1rem 1rem var(--color-black);

						transform-origin: bottom left;
						clip-path: polygon(13% 50%, 5% 65%, 45% 100%, 100% 10%, 83% 0%, 40% 75%);
					}
				}
			}
		}
	}

	@media (max-width: 68.75rem) {
		.wrapper {
			.desktop {
				display: none;
			}
			.mobile {
				display: block;
			}
		}
	}

	// @media (min-width: 68.8125rem) {
	// 	.wrapper {
	// 		.mobile {
	// 			display: none;
	// 		}
	// 	}
	// }
</style>
