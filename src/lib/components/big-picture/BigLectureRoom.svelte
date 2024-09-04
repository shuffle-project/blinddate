<script lang="ts">
	import { base } from '$app/paths';
	import {
		BIG_PICTURE_STUDENTS,
		type BigPictureStudent,
		type StudentId,
		type SupportOptionId
	} from '$lib/constants/bigPicture';
	import Icon from '../Icon.svelte';
	import StudentSpeechbubble from './StudentSpeechbubble.svelte';

	export let showAllNames = false;
	export let highlightedStudents: BigPictureStudent[] = [];
	export let mobileView = false;

	let students: BigPictureStudent[] = BIG_PICTURE_STUDENTS;
	let selectedStudent: StudentId | undefined = undefined;
	let selectedOption: SupportOptionId | '' = '';

	$: {
		if (
			highlightedStudents.length > 0 &&
			highlightedStudents.length < BIG_PICTURE_STUDENTS.length
		) {
			students = students.map((student) => {
				if (highlightedStudents.includes(student)) {
					student.active = true;
				} else {
					student.active = false;
				}
				return student;
			});
		} else {
			students = students.map((student) => {
				student.active = false;
				return student;
			});
		}
	}

	function handleOptionSelection(id: SupportOptionId) {
		if (selectedOption === id) {
			students.forEach((student) => (student.active = false));
			students = students;
			selectedOption = '';
		} else {
			students.forEach((student) => {
				if (student.benefitsFrom[id]) {
					student.active = true;
				} else {
					student.active = false;
				}
			});
			students = students;
			selectedOption = id;
		}
	}

	function handleSpeechbubbleClose() {
		const studentButton = document.getElementById(`student-${selectedStudent}-button`);
		studentButton?.focus();
		selectedStudent = undefined;
	}

	function handleSelectStudent(studentId: StudentId) {
		if (selectedStudent === studentId) {
			selectedStudent = undefined;
		} else {
			selectedStudent = studentId;
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

		handleSpeechbubbleClose();
	}
</script>

<div class="wrapper">
	<ul aria-hidden={mobileView}>
		{#each students as student, i}
			<li
				class={student.id}
				class:active={student.active}
				class:selected={student.id === selectedStudent}
				class:show-all-names={showAllNames}
				class:not-idle={mobileView && highlightedStudents.length !== BIG_PICTURE_STUDENTS.length}
			>
				{#if !mobileView}
					<button
						class="student-button"
						aria-label={student.name}
						tabindex={student.active ? 0 : -1}
						on:click={() => handleSelectStudent(student.id)}
						id="student-{student.id}-button"
						aria-pressed={student.id === selectedStudent}
					>
						<div class="student-info-wrapper" aria-hidden="true">
							<div class="student-info">
								<p class="persona-name">{student.name}</p>
							</div>
						</div>
						<img
							class="persona-img"
							src="{base}/personas/{student.id}/{student.id}-lecture.svg"
							alt=""
							loading="lazy"
						/>
					</button>

					<StudentSpeechbubble
						studentName={student.name}
						studentComment={selectedOption ? student.benefitsFrom[selectedOption] : ''}
						visible={selectedStudent === student.id}
						on:close={() => handleSpeechbubbleClose()}
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

	{#if !mobileView}
		<div
			class="dark-overlay"
			class:not-hidden={selectedOption !== '' ||
				(highlightedStudents.length > 0 &&
					highlightedStudents.length < BIG_PICTURE_STUDENTS.length)}
		>
			<div class="notch">
				<div class="icon-wrapper">
					<Icon img="clickable-persona" svg_color="white" size="parent" />
				</div>
				<label for="show-all-names">
					<input type="checkbox" id="show-all-names" bind:checked={showAllNames} />
					Alle Namen anzeigen
				</label>
			</div>
		</div>
	{/if}

	<img
		class="big-picture-room"
		src="{base}/decorations/big-picture-room.svg"
		alt=""
		aria-hidden="true"
		width="1350"
		height="980"
	/>
</div>

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

			li.aleksandr {
				top: 54.3%;
				left: 37.5%;

				img {
					width: min(11.2vw, 9.5rem);
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

	@media (max-width: 68.75rem) {
		.wrapper {
			.dark-overlay,
			.big-picture-room {
				border-radius: 1.25rem 1.25rem 0 0;
			}
		}
	}

	@media (max-width: 28.75rem) {
		.wrapper {
			ul {
				li.gabriel {
					bottom: -0.6%;
					left: 14%;

					img {
						width: min(12vw, 10rem);
					}
				}

				li.aleksandr {
					top: 54%;
					left: 37.4%;

					img {
						width: min(10.8vw, 8.75rem);
					}
				}
			}
		}
	}
</style>
