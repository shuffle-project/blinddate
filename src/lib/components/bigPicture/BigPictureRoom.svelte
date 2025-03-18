<script lang="ts">
	import { base } from '$app/paths';
	import {
		BIG_PICTURE_STUDENTS,
		type BigPictureStudent,
		type StudentId,
		type SupportOptionId
	} from '$lib/constants/bigPicture';
	import Icon from '../Icon.svelte';
	import BigPictureSpeechbubble from './BigPictureSpeechbubble.svelte';

	const REVERSED_STUDENTS = BIG_PICTURE_STUDENTS.slice().reverse();

	interface Props {
		selectedOption?: SupportOptionId | '';
		mobileView?: boolean;
	}

	let { selectedOption = '', mobileView = false }: Props = $props();

	let selectedStudent: StudentId | undefined = $state(undefined);
	let selectedSpeechBubbleText = $state('');

	let students: BigPictureStudent[] = $state([]);
	let highlightedStudents = $state(false);

	$effect(() => {
		if (selectedOption !== '') {
			students = REVERSED_STUDENTS.map((student) => {
				student.active = student.benefitsFrom[selectedOption as SupportOptionId] ? true : false;
				return student;
			});
			highlightedStudents = true;
		} else {
			students = REVERSED_STUDENTS.map((student) => {
				student.active = false;
				return student;
			});
			highlightedStudents = false;
		}
	});

	function handleSpeechbubbleClose() {
		const studentButton = document.getElementById(`student-${selectedStudent}-button`);

		// TODO
		studentButton?.focus();
		selectedStudent = undefined;
	}

	function handleSelectStudent(studentId: StudentId) {
		if (selectedStudent === studentId) {
			selectedStudent = undefined;
			selectedSpeechBubbleText = '';
		} else {
			selectedStudent = studentId;
			selectedSpeechBubbleText =
				students.find((student) => student.id === studentId)?.benefitsFrom[
					selectedOption as SupportOptionId
				] ?? '';
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (selectedStudent === undefined) return;

		if ((e.target as HTMLElement).classList.contains('speechbubble')) {
			return;
		}

		if (((e.target as HTMLElement).parentNode as HTMLElement).classList.contains('speechbubble')) {
			return;
		}

		if ((e.target as HTMLElement).classList.contains('student-info')) {
			return;
		}

		if ((e.target as HTMLElement).classList.contains('student-info-wrapper')) {
			return;
		}

		if ((e.target as HTMLElement).classList.contains('persona-img')) {
			return;
		}

		if ((e.target as HTMLElement).classList.contains('persona-name')) {
			return;
		}

		selectedStudent = undefined;
	}
</script>

<div class="wrapper">
	{#if !mobileView}
		<div
			aria-hidden="true"
			class="dark-overlay"
			class:not-hidden={selectedOption !== '' || highlightedStudents}
		>
			<div class="notch">
				<div class="notch-icon-wrapper">
					<Icon img="clickable-persona" svg_color="white" size="parent" />
				</div>
			</div>
		</div>
	{/if}

	<ul aria-hidden={mobileView}>
		{#each students as student, i}
			<li
				class={student.id}
				class:active={student.active}
				class:selected={student.id === selectedStudent}
				class:not-idle={mobileView}
				aria-hidden={!student.active}
			>
				{#if !mobileView}
					<button
						class="student-button"
						aria-label={student.disability
							? `${student.name}, ${student.disability}`
							: student.name}
						tabindex={student.active ? 0 : -1}
						onclick={() => handleSelectStudent(student.id)}
						id="student-{student.id}-button"
						aria-haspopup={student.active ? 'dialog' : 'false'}
						onfocusout={() => (selectedSpeechBubbleText = '')}
					>
						<div class="student-info-wrapper" aria-hidden="true">
							<div class="student-info">
								{#if student.icon}
									<img src={base + '/icons/' + student.icon + '.svg'} alt="" aria-hidden="true" />
								{/if}
								<span class="persona-name">{student.name}</span>
							</div>
						</div>
						<img
							class="persona-img"
							src="{base}/personas/{student.id}/{student.id}-lecture.svg"
							alt=""
							loading="lazy"
						/>
					</button>

					<BigPictureSpeechbubble
						studentName={student.name}
						studentComment={selectedOption ? student.benefitsFrom[selectedOption] : ''}
						visible={selectedStudent === student.id}
						close={() => handleSpeechbubbleClose()}
					/>
				{:else}
					<img
						class="persona-img"
						src="{base}/personas/{student.id}/{student.id}-lecture.svg"
						alt=""
						loading="lazy"
					/>
				{/if}
			</li>
		{/each}
	</ul>

	<img
		class="big-picture-room"
		src="{base}/decorations/big-picture-room.svg"
		alt=""
		aria-hidden={highlightedStudents || mobileView}
		width="1350"
		height="980"
		aria-label={!highlightedStudents && !mobileView
			? 'Vorlesungsaal mit Studierenden. Wählen Sie weiter unten eine Unterstützungsmaßname aus und erfahren Sie hier, wie die Studierenden davon profitieren.'
			: ''}
	/>
</div>

{#if !mobileView}
	<div aria-live="polite" class="sr-only">
		{#if selectedSpeechBubbleText}
			<p>{selectedSpeechBubbleText}</p>
		{/if}
	</div>
{/if}

<svelte:window onmouseup={(e) => handleBackdropClick(e)} />

<style lang="scss">
	.wrapper {
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
				transition: filter 0.2s ease-out;
				.student-info-wrapper {
					display: none;
				}

				&:not(.active) {
					&.not-idle {
						filter: opacity(96%) brightness(0%);
					}
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

							.persona-name {
								margin: 0;
								font-size: 1.25rem;
								opacity: 0%;
								transform: scale(0);
							}

							img {
								width: 1.25rem;
								height: 1.25rem;

								filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(86%)
									hue-rotate(216deg) brightness(102%) contrast(100%);

								opacity: 0%;
								transform: scale(0);
							}
						}
					}

					&:hover,
					&:focus,
					&.selected {
						.student-info {
							opacity: 100%;

							color: var(--color-white);

							padding: 0.625rem 1rem;
							border-radius: 2.25rem;

							width: 6.25rem;
							margin-bottom: 0;

							transition: all 0.3s ease-out;

							display: flex;
							align-items: center;
							justify-content: center;
							gap: 0.375rem;

							.persona-name {
								transform: scale(1);
								opacity: 100%;
								transition: opacity 0.8s ease-out;
							}

							img {
								transform: scale(1);
								opacity: 100%;
								transition: opacity 0.4s 0.1s ease-out;
							}
						}
					}

					&.selected {
						z-index: 10;
					}
				}
			}

			li.gabriel {
				bottom: calc(1.6% - 0.265em);
				left: 14%;

				img {
					width: min(13vw, 11.25rem);
				}
			}

			li.michelle {
				bottom: calc(51.3% - 0.2675em);
				right: 21%;

				img {
					width: min(6.1vw, 5.25rem);
				}
			}

			li.maxi {
				bottom: calc(49.5% - 0.25em);
				left: 19%;

				img {
					width: min(10.5vw, 9rem);
				}
			}

			li.aleksandr {
				bottom: calc(34% - 0.25em);
				left: 37.5%;

				img {
					width: min(11.4vw, 9.75rem);
				}
			}

			li.fredo {
				bottom: calc(34.2% - 0.2675em);
				left: 26%;

				img {
					width: min(7vw, 6rem);
				}
			}

			li.faiza {
				bottom: calc(1.7% - 0.265em);
				right: 53%;

				img {
					width: min(14vw, 12rem);
				}
			}

			li.kyle {
				bottom: calc(34.1% - 0.25em);
				right: 38%;

				img {
					width: min(8.2vw, 7rem);
				}
			}

			li.sarah {
				bottom: calc(21.4% - 0.25em);
				right: 22%;

				img {
					width: min(9vw, 7.5rem);
				}
			}

			li.mara {
				bottom: calc(21.5% - 0.25em);
				right: 7%;

				img {
					width: min(8.5vw, 7.25rem);
				}
			}

			li.kilian {
				bottom: calc(56.9% - 0.25em);
				right: 33%;

				img {
					width: min(6.5vw, 5.5rem);
				}
			}

			li.hannah {
				top: 33.5%;
				right: 42%;

				img {
					width: min(5.5vw, 4.75rem);
				}
			}

			.student-button {
				cursor: pointer;
				padding: 0;
				border: none;
				background-color: transparent;

				&:focus-visible {
					outline: none;

					.persona-img {
						filter: drop-shadow(2px 0 0 var(--color-white)) drop-shadow(0 -2px 0 var(--color-white))
							drop-shadow(-2px 0 0 var(--color-white)) drop-shadow(4px 0 0 var(--color-blue))
							drop-shadow(-4px 0 0 var(--color-blue)) drop-shadow(0 -4px 0 var(--color-blue));
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
			background-image: radial-gradient(
				rgba(var(--color-black-rgb), 0.5),
				rgba(var(--color-black-rgb), 0.7)
			);
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

				.notch-icon-wrapper {
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

	@media (max-width: 68.75rem) {
		.wrapper {
			.dark-overlay,
			.big-picture-room {
				border-radius: 1.25rem 1.25rem 0 0;
			}
		}
	}
</style>
