<script lang="ts">
	import { base } from '$app/paths';
	import {
		BIG_PICTURE_STUDENTS,
		SUPPORT_OPTIONS,
		type BigPictureStudent,
		type StudentId,
		type SupportOptionId
	} from '$lib/constants/bigPicture';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	import Icon from '../Icon.svelte';
	import BigLectureRoom from './BigLectureRoom.svelte';

	let students: BigPictureStudent[] = BIG_PICTURE_STUDENTS;
	const supportOptions = SUPPORT_OPTIONS;
	let selectedSupportOption: SupportOptionId | '' = '';

	let studentCarousel: Splide;
	let supportCarousel: Splide;
	let selectedStudentComment: string | undefined = '';
	let selectedStudentId: StudentId | undefined = undefined;

	let carouselSupportSelectedIndex: number = 0;
	let carouselStudentSelectedIndex: number = 0;

	let supportCarouselHasFocus = false;
	let supportCarouselAriaLiveText: string = '';

	let studentsCarouselHasFocus = false;
	let studentsCarouselAriaLiveText: string = '';

	$: {
		if (students.length !== 0) {
			selectedStudentId = students[carouselStudentSelectedIndex].id;
		}
	}

	$: {
		if (carouselSupportSelectedIndex !== 0 && students.length !== 0) {
			selectedStudentComment =
				students[carouselStudentSelectedIndex].benefitsFrom[
					supportOptions[carouselSupportSelectedIndex].id
				];
		}
	}

	$: {
		if (carouselSupportSelectedIndex === 0) {
			supportCarouselAriaLiveText = 'Noch keine Auswahl';
			selectedSupportOption = '';
		} else {
			selectedSupportOption = supportOptions[carouselSupportSelectedIndex].id;
			supportCarouselAriaLiveText =
				supportOptions[carouselSupportSelectedIndex].name +
				', ' +
				carouselSupportSelectedIndex +
				' von ' +
				(supportOptions.length - 1);
		}
	}

	$: {
		if (students.length !== 0) {
			if (students[carouselStudentSelectedIndex].disability) {
				studentsCarouselAriaLiveText = `
				${students[carouselStudentSelectedIndex].name},
				${students[carouselStudentSelectedIndex].disability},
				${carouselStudentSelectedIndex + 1} von ${students.length},
				sagt: "${selectedStudentComment}"
				`;
			} else {
				studentsCarouselAriaLiveText = `
				${students[carouselStudentSelectedIndex].name},
				${carouselStudentSelectedIndex + 1} von ${students.length},
				sagt: "${selectedStudentComment}"
				`;
			}
		}
	}

	const splideOptionsSupport = {
		type: 'loop',
		live: false,
		keyboard: false,
		i18n: {
			prev: 'Vorherige Maßnahme',
			next: 'Nächste Maßnahme',
			first: 'Zur ersten Maßnahme gehen',
			last: 'Zur letzten Maßnahme gehen',
			slideX: 'Zur Maßnahme %s gehen',
			pageX: 'Zur Seite %s gehen',
			carousel: 'Karussell',
			slide: '',
			slideLabel: ''
		},
		pagination: false,
		arrows: false,
		speed: 800,
		drag: 'free' as const,
		snap: true,
		flickPower: 450,
		easing: 'ease'
	};

	const splideOptionsStudents = {
		type: 'loop',
		live: false,
		keyboard: false,
		i18n: {
			prev: 'Vorherige Person',
			next: 'Nächste Person',
			first: 'Zur ersten Person gehen',
			last: 'Zur letzten Person gehen',
			slideX: 'Zur Person %s gehen',
			pageX: 'Zur Seite %s gehen',
			carousel: 'Karussell',
			slide: '',
			slideLabel: ''
		},
		pagination: false,
		arrows: false,
		speed: 800,
		drag: 'free' as const,
		snap: true,
		flickPower: 450,
		easing: 'ease'
	};

	function moveSlide(direction: string, carouselId: 'students' | 'supportOptions') {
		if (!studentCarousel || !supportCarousel) return;

		if (carouselId === 'students') {
			studentsCarouselHasFocus = true;
			studentCarousel.go(direction);
			carouselStudentSelectedIndex = studentCarousel.splide.index;
		}

		if (carouselId === 'supportOptions') {
			supportCarouselHasFocus = true;
			supportCarousel.go(direction);
			carouselSupportSelectedIndex = supportCarousel.splide.index;
			carouselStudentSelectedIndex = 0;
		}
	}

	function handleMove(index: number | undefined, carouselId: 'students' | 'supportOptions') {
		if (index !== undefined) {
			if (carouselId === 'students') carouselStudentSelectedIndex = index;
			if (carouselId === 'supportOptions') {
				carouselSupportSelectedIndex = index;
				carouselStudentSelectedIndex = 0;
			}
		}
	}

	function handleScrolled(carouselId: 'students' | 'supportOptions') {
		if (!studentCarousel || !supportCarousel) return;
		if (carouselId === 'students') carouselStudentSelectedIndex = studentCarousel.splide.index;
		if (carouselId === 'supportOptions') {
			carouselSupportSelectedIndex = supportCarousel.splide.index;
			carouselStudentSelectedIndex = 0;
		}
	}

	$: {
		if (carouselSupportSelectedIndex && carouselSupportSelectedIndex !== 0) {
			students = BIG_PICTURE_STUDENTS.filter((student) => {
				if (student.benefitsFrom.hasOwnProperty(supportOptions[carouselSupportSelectedIndex].id)) {
					return student;
				}
			});
		}

		// find out why I added this a few weeks ago
		if (carouselSupportSelectedIndex === 0) {
			setTimeout(() => {
				students = BIG_PICTURE_STUDENTS;
			}, 300);
		}
	}
</script>

<div class="wrapper">
	<div class="top-card">
		<div class="lecture-room">
			<BigLectureRoom mobileView selectedOption={selectedSupportOption} />
		</div>
		<div class="support-options">
			{#if carouselSupportSelectedIndex === 0}
				<span>Jetzt Swipen!</span>
			{:else}
				<span>{`Maßnahme ${carouselSupportSelectedIndex} von ${supportOptions.length - 1}`}</span>
			{/if}

			<div class="carousel">
				<Splide
					aria-roledescription="Karussell"
					role="navigation"
					aria-label="Unterstützungsmaßnahmen"
					options={splideOptionsSupport}
					bind:this={supportCarousel}
					hasTrack={false}
					on:moved={(e) => handleMove(e?.detail.index, 'supportOptions')}
					on:scrolled={() => handleScrolled('supportOptions')}
				>
					<button
						on:focusout={() => (supportCarouselHasFocus = false)}
						on:click={() => moveSlide('<', 'supportOptions')}
						class="previous-button"
						aria-label="Vorherige Maßnahme"
					>
						<Icon img="arrow-toleft" size="small" svg_color="white" />
					</button>
					<SplideTrack class="splide-track">
						{#each supportOptions as option, i (option.id)}
							<SplideSlide id="result-card-{i + 1}" aria-roledescription="Folie">
								<p class="support-option">{option.name}</p>
							</SplideSlide>
						{/each}
					</SplideTrack>
					<button
						on:focusout={() => (supportCarouselHasFocus = false)}
						on:click={() => moveSlide('>', 'supportOptions')}
						class="next-button"
						aria-label="Nächste Maßnahme"
						><Icon img="arrow-toright" size="small" svg_color="white" />
					</button>
					<div class="splide__arrows" />
				</Splide>
			</div>
		</div>
		<span class="bobble-indicator" aria-hidden="true" />
	</div>

	<div
		class="bottom-card"
		class:visible={carouselSupportSelectedIndex !== 0 && students.length !== 0}
		aria-hidden={carouselSupportSelectedIndex === 0 || students.length === 0}
	>
		<span class="bobble-indicator" aria-hidden="true" />
		<div class="students">
			<span>{`Studierende ${carouselStudentSelectedIndex + 1} von ${students.length}`}</span>
			<div class="carousel">
				<Splide
					aria-roledescription="Karussell"
					role="navigation"
					aria-label="Studierende"
					options={splideOptionsStudents}
					bind:this={studentCarousel}
					hasTrack={false}
					on:moved={(e) => handleMove(e?.detail.index, 'students')}
					on:scrolled={() => handleScrolled('students')}
				>
					<button
						on:focusout={() => (studentsCarouselHasFocus = false)}
						on:click={() => moveSlide('<', 'students')}
						class="previous-button"
						aria-label="Vorherige Person"
						tabindex={carouselSupportSelectedIndex === 0 ? -1 : 0}
						aria-hidden={carouselSupportSelectedIndex === 0}
					>
						<Icon img="arrow-toleft" size="small" svg_color="white" />
					</button>
					<SplideTrack class="splide-track">
						{#each students as student, i (student.id)}
							<SplideSlide id="result-card-{i + 1}" aria-roledescription="Folie">
								<div class="name-icon-wrapper">
									{#if student.icon}
										<Icon
											svg_color="white"
											img={base + '/icons/' + student.icon + '.svg'}
											size="medium"
										/>
									{/if}

									<p class="student-name">{student.name}</p>
								</div>
							</SplideSlide>
						{/each}
					</SplideTrack>
					<button
						on:focusout={() => (studentsCarouselHasFocus = false)}
						on:click={() => moveSlide('>', 'students')}
						class="next-button"
						aria-label="Nächste Person"
						tabindex={carouselSupportSelectedIndex === 0 ? -1 : 0}
						aria-hidden={carouselSupportSelectedIndex === 0}
						><Icon img="arrow-toright" size="small" svg_color="white" />
					</button>
					<div class="splide__arrows" />
				</Splide>
			</div>
		</div>
		<div class="student-detail">
			<div class="student-image">
				<img
					src="{base}/personas/{selectedStudentId}/{selectedStudentId}-lecture.svg"
					alt=""
					aria-hidden="true"
				/>
			</div>

			<p>
				{selectedStudentComment}
			</p>
		</div>
	</div>

	<div aria-live="polite" class="sr-only">
		{#if supportCarouselHasFocus}
			{#key supportCarouselAriaLiveText}
				<p>{supportCarouselAriaLiveText}</p>
			{/key}
		{/if}
	</div>

	<div aria-live="polite" class="sr-only">
		{#if studentsCarouselHasFocus}
			{#key studentsCarouselAriaLiveText}
				<p>{studentsCarouselAriaLiveText}</p>
			{/key}
		{/if}
	</div>
</div>

<style lang="scss">
	.wrapper {
		.top-card {
			background: linear-gradient(transparent 50%, var(--color-black) 50%);
			border-radius: 0 0 1.25rem 1.25rem;
			position: relative;
			.lecture-room {
				display: flex;
			}

			.support-options {
				color: rgba(var(--color-white-rgb), 0.8);

				padding-block: 0.625rem;

				max-width: 35rem;
				margin-inline: auto;

				span {
					font-size: 0.875rem;
					display: flex;
					justify-content: center;
				}
			}
			.bobble-indicator {
				&::after {
					content: url('/decorations/mobile-big-picture-indicator.svg');
					position: absolute;
					inset: 0;
					top: auto;
					bottom: -1rem;
					height: 1rem;
					display: flex;
					justify-content: center;
				}
			}
		}

		.bottom-card {
			margin-top: 2.5rem;
			opacity: 0%;
			transition: opacity 0.4s ease-in-out;
			max-width: 35rem;
			margin-inline: auto;
			position: relative;

			&.visible {
				opacity: 100%;
			}

			.bobble-indicator {
				&::before {
					content: url('/decorations/mobile-big-picture-indicator.svg');
					position: absolute;
					inset: 0;

					top: -1rem;
					bottom: auto;
					height: 1rem;
					display: flex;
					transform: rotate(180deg);
					justify-content: center;
				}
			}

			.students {
				background-color: var(--color-black);
				color: rgba(var(--color-white-rgb), 0.8);

				padding: 1rem 0 0.625rem 0;

				border-radius: 1.25rem 1.25rem 0 0;

				.name-icon-wrapper {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.625rem;
					padding-inline: 2.75rem;
				}

				span {
					font-size: 0.875rem;
					display: flex;
					justify-content: center;
				}
			}

			.student-detail {
				background: linear-gradient(145deg, var(--color-turquoise), var(--color-green));
				border-radius: 0 0 1.25rem 1.25rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 0 1rem;

				.student-image {
					width: 6.25rem;
					aspect-ratio: 1;
					border-radius: 50%;
					overflow: hidden;
					position: relative;
					display: flex;
					justify-content: center;

					img {
						height: 100%;

						position: absolute;
						bottom: -1rem;
					}
				}

				p {
					&::before {
						content: open-quote;
					}

					&::after {
						content: close-quote;
					}
				}
			}
		}
	}

	.carousel {
		position: relative;
		text-align: center;

		p {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-inline: 1.875rem;

			margin-block: 0.625rem;
			font-weight: bold;

			&.student-name {
				min-height: 2.5rem;
			}

			&.support-option {
				min-height: 5rem;
			}
		}

		.previous-button,
		.next-button {
			position: absolute;
			// background-color: var(--color-black);
			border: none;
			z-index: 2;

			width: 2.25rem;
			border-radius: 1.25rem;

			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			&:focus-visible {
				outline: 2px solid rgba(var(--color-white-rgb), 0.8);
				outline-offset: -4px;
			}
		}

		.previous-button {
			inset: 0 auto 0 0;
			background: linear-gradient(90deg, var(--color-black), transparent);
		}

		.next-button {
			inset: 0 0 0 auto;
			background: linear-gradient(90deg, transparent, var(--color-black));
		}
	}

	@media (min-width: 22.5rem) {
		.wrapper {
			.bottom-card {
				.student-detail {
					padding: 0 1.25rem;
				}
			}
		}

		.carousel {
			padding-inline: 1.25rem;
		}
	}
</style>
