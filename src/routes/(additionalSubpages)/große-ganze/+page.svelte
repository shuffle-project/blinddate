<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import BigPictureMobile from '$lib/components/big-picture/BigPictureMobile.svelte';
	import StudentSpeechbubble from '$lib/components/big-picture/StudentSpeechbubble.svelte';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';

	type studentId = 'maxi' | 'michelle' | 'gabriel';

	type SupportOptionId =
		| '1'
		| '2'
		| '3'
		| '4'
		| '5'
		| '6'
		| '7'
		| '8'
		| '9'
		| 'accessible-documents';

	interface BigPictureStudent {
		id: studentId;
		name: string;
		active: boolean;
		benefitsFrom: {
			[key in SupportOptionId]?: string;
		};
	}

	let showAllNames = false;
	let selectedStudent: studentId | undefined = undefined;
	let students: BigPictureStudent[] = [
		{
			id: 'maxi',
			name: 'Maxi',
			active: false,
			benefitsFrom: {
				'accessible-documents':
					'Dann kann ich mit meinem Screenreader die Unterlagen besser verstehen.'
			}
		},
		{
			id: 'michelle',
			name: 'Michelle',
			active: false,
			benefitsFrom: {
				'1': 'Platzhalter-Text damit hier was steht und die Sprechblase nicht leer ist.'
			}
		},
		{
			id: 'gabriel',
			name: 'Gabriel',
			active: false,
			benefitsFrom: {
				'1': 'Ich hatte letzte Woche einen Arzt-TP-termin und konnte nicht zur Vorlesung kommen. Die Aufzeichnung hat mich und vor allem meine Note gerettet.'
			}
		}
	];

	let selectedOption: SupportOptionId | '' = '';
	const supportOptions = [
		{ id: '1', name: 'Adipiscing rhoncus' },
		{ id: '2', name: 'Verwenden eines soliden Mikros' },
		{ id: '3', name: 'Hochwertige Scans mit OCR Software' },
		{ id: '4', name: 'Lorem ipsum dolor sit amet consectetur' },
		{ id: '5', name: 'Ultricies porttitor egestas scelerisque id lorem' },
		{ id: '6', name: 'Bereitstellen der Unterlagen vor der Vorlesung' },
		{ id: '7', name: 'Aufnahme der Vorlesung' },
		{ id: '8', name: 'Untertitel bei Videos' },
		{ id: '9', name: 'Regelmäßige Pausen' },
		{
			id: 'accessible-documents',
			name: 'Ich überprüfe die Barrierefreiheit meiner Dokumente'
		}
	] as const;

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

	function handleSelectStudent(studentId: studentId) {
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
			<ul>
				{#each students as student, i}
					<li
						class={student.id}
						class:active={student.active}
						class:selected={student.id === selectedStudent}
						class:show-all-names={showAllNames}
					>
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
					</li>
				{/each}
			</ul>

			<div class="dark-overlay" class:not-hidden={selectedOption !== ''}>
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

			<img
				class="big-picture-room"
				src="{base}/decorations/big-picture-room.svg"
				alt=""
				aria-hidden="true"
				width="1350"
				height="980"
			/>
		</div>
		<fieldset
			id="support-list"
			aria-label="Unterstützungsmöglichkeiten"
			class="support-list desktop"
		>
			{#each supportOptions as option, i}
				<label for={option.id}>
					<input
						on:click={() => {
							handleOptionSelection(option.id);
							selectedStudent = undefined;
						}}
						type="radio"
						value={option.name}
						name="support-list"
						id={option.id}
						checked={selectedOption === option.id}
					/>
					<span>{option.name}</span>
				</label>
			{/each}
		</fieldset>
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

<svelte:window on:mouseup={(e) => handleBackdropClick(e)} />

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
