<script lang="ts">
	import { base } from '$app/paths';
	import StudentSpeechbubble from '$lib/components/big-picture/StudentSpeechbubble.svelte';
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
		{ id: '1', name: 'Adipiscing rhoncus', svg: 'placeholder' },
		{ id: '2', name: 'Verwenden eines soliden Mikros', svg: 'placeholder' },
		{ id: '3', name: 'Hochwertige Scans mit OCR Software', svg: 'placeholder' },
		{ id: '4', name: 'Lorem ipsum dolor sit amet consectetur', svg: 'placeholder' },
		{ id: '5', name: 'Ultricies porttitor egestas scelerisque id lorem', svg: 'placeholder' },
		{ id: '6', name: 'Bereitstellen der Unterlagen vor der Vorlesung', svg: 'placeholder' },
		{ id: '7', name: 'Aufnahme der Vorlesung', svg: 'placeholder' },
		{ id: '8', name: 'Untertitel bei Videos', svg: 'placeholder' },
		{ id: '9', name: 'Regelmäßige Pausen', svg: 'placeholder' },
		{
			id: 'accessible-documents',
			name: 'Ich überprüfe die Barrierefreiheit meiner Dokumente',
			svg: 'placeholder'
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
	<p>
		Werden Lernumgebungen von vornherein so geplant und gestaltet, dass sie für alle Lernenden
		zugänglich sind, können einige aufwändige Nachbesserungen und zusätzliche, zeitintensive
		Anpassungen vermieden werden. Viele (Unterstützungs-)Maßnahmen, die bereits zu Beginn mitgedacht
		und umgesetzt werden, kommen vielen Studierenden zu Gute – vielleicht sogar Studierenden, die
		Sie im ersten Moment gar nicht mitbedacht haben.
	</p>

	<p>Lassen Sie uns einen Blick auf diese möglichen Maßnahmen werfen.</p>

	<p>
		Im Folgenden ist ein Vorlesungssaal voller Studierender abgebildet. Wählen Sie weiter unten eine
		Unterstützungsmöglichkeit aus und sehen Sie, wer alles davon profitiert. Anschließend können Sie
		auf die Studierenden klicken, um mehr Informationen zu bekommen.
	</p>

	<div class="desktop">
		<ul>
			{#each students as student, i}
				<li
					class={student.id}
					class:active={student.active}
					class:selected={student.id === selectedStudent}
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

		<div class="dark-overlay" class:not-hidden={selectedOption !== ''} />

		<img
			class="big-picture-room"
			src="{base}/decorations/big-picture-room.svg"
			alt=""
			aria-hidden="true"
		/>
	</div>
	<div role="radiogroup" aria-label="Unterstützungsmöglichkeiten" class="support-list">
		{#each supportOptions as option, i}
			<button
				aria-checked={selectedOption === option.id}
				role="radio"
				id="support-tab-{i}"
				on:click={() => {
					handleOptionSelection(option.id);
					selectedStudent = undefined;
				}}
			>
				<!-- <div class="icon-wrapper">
					<Icon
						img={option.svg}
						size="parent"
						svg_color={selectedOption === i ? 'white' : 'black'}
					/>
				</div> -->

				{option.name}
			</button>
		{/each}
	</div>
</div>

<svelte:window on:mouseup={(e) => handleBackdropClick(e)} />

<style lang="scss">
	.wrapper {
		padding-inline: var(--outer-spacing);
		margin: 2.5rem 0;

		p {
			max-width: 35rem;
			margin-inline: auto;
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
					bottom: 2.8%;
					left: 14%;

					img {
						width: min(13vw, 11.25rem);
					}
				}

				li.michelle {
					top: 38.2%;
					right: 21%;

					img {
						width: min(6.1vw, 5.25rem);
					}
				}

				li.maxi {
					top: 39.2%;
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
				border-radius: 2.5rem;
				opacity: 0%;
				&.not-hidden {
					opacity: 100%;
					transition: opacity 0.3s ease-in-out;

					&::before {
						content: url('/icons/clickable-persona-white.svg');
						background-color: var(--color-black);
						width: 4rem;
						height: 4rem;
						border-radius: 50%;
						position: absolute;
						left: 0;
						right: 0;
						top: 1.25rem;
						margin-inline: auto;

						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}

			.big-picture-room {
				width: 100%;
				border-radius: 2.5rem;
			}
		}

		.support-list {
			width: 100%;
			max-width: var(--content-max-width);
			margin: 1.25rem auto;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 0.625rem;

			button {
				min-height: 6rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 0.625rem;

				font-size: 1rem;

				color: var(--color-black);
				background-color: var(--color-lavender);
				border: 1px solid var(--color-lavender);
				border-radius: 2.5rem;

				cursor: pointer;

				font-weight: bold;

				outline: 2px solid transparent;

				.icon-wrapper {
					width: 1.875rem;
					height: 1.875rem;
					margin-bottom: 0.625rem;
				}

				&[aria-checked='true'] {
					background-color: var(--color-black);
					color: rgba(var(--color-white-rgb), 0.85);
				}

				&:hover,
				&:focus {
					outline-offset: 2px;
					outline-color: var(--color-blue);
					transition: outline-color 0.3s ease-in-out;
				}
			}
		}
	}
</style>
