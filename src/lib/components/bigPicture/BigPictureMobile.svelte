<script lang="ts">
	import { base } from '$app/paths';
	import {
		BIG_PICTURE_STUDENTS,
		SUPPORT_OPTIONS,
		type BigPictureStudent,
		type SupportOptionId
	} from '$lib/constants/bigPicture';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	import Icon from '../Icon.svelte';
	import BigPictureRoom from './BigPictureRoom.svelte';

	let carouselSupportSelectedIndex: number = $state(0);
	let carouselStudentSelectedIndex: number = $state(0);

	let students: BigPictureStudent[] = $state(BIG_PICTURE_STUDENTS);
	let selectedStudentId = $derived(students[carouselStudentSelectedIndex].id);
	let selectedStudentComment: string | undefined = $state('');

	const supportOptions = SUPPORT_OPTIONS;
	let selectedSupportOption: SupportOptionId | '' = $state('');

	let studentCarousel: Splide | undefined = $state();
	let supportCarousel: Splide | undefined = $state();

	let supportCarouselHasFocus = $state(false);
	let supportCarouselAriaLiveText: string = $state('');

	let studentsCarouselHasFocus = $state(false);
	let studentsCarouselAriaLiveText: string = $state('');

	$effect(() => {
		if (carouselSupportSelectedIndex && carouselSupportSelectedIndex !== 0) {
			students = BIG_PICTURE_STUDENTS.filter((student) => {
				if (student.benefitsFrom.hasOwnProperty(supportOptions[carouselSupportSelectedIndex].id)) {
					return student;
				}
			});
		}
	});

	$effect(() => {
		if (carouselSupportSelectedIndex !== 0 && students.length !== 0) {
			selectedStudentComment =
				students[carouselStudentSelectedIndex].benefitsFrom[
					supportOptions[carouselSupportSelectedIndex].id
				];
		}
	});

	$effect(() => {
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
	});

	$effect(() => {
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
	});

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
			_handleSlideChange(carouselId, studentCarousel.splide.index);
		}

		if (carouselId === 'supportOptions') {
			supportCarouselHasFocus = true;
			supportCarousel.go(direction);
			carouselSupportSelectedIndex = supportCarousel.splide.index;
			carouselStudentSelectedIndex = 0;
			_handleSlideChange(carouselId, supportCarousel.splide.index);
		}
	}

	function handleScrolled(carouselId: 'students' | 'supportOptions') {
		const carousel = carouselId === 'students' ? studentCarousel : supportCarousel;
		_handleSlideChange(carouselId, carousel!.splide.index);
	}

	function _handleSlideChange(carouselId: 'students' | 'supportOptions', index: number) {
		if (carouselId === 'students') carouselStudentSelectedIndex = index;
		if (carouselId === 'supportOptions') {
			carouselSupportSelectedIndex = index;
			carouselStudentSelectedIndex = 0;
		}
	}
</script>

<div class="wrapper">
	<h2 class="sr-only">Wichtiger Screenreader-Hinweis</h2>
	<p class="sr-only">
		Bei der folgenden Karussell-Komponente kann es zu Fehlern kommen, insofern Sie Firefox auf einem
		Mac-Gerät (Laptop oder Computer) benutzen. Die Ausgangsoption "Keine Auswahl" sowie die
		darauffolgende Option "Korrekte Untertitel" werden nicht vorgelesen. Benutzen Sie bitte Chrome
		oder Safari.
	</p>

	<div class="top-card">
		<div class="lecture-room">
			<BigPictureRoom mobileView selectedOption={selectedSupportOption} />
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
					on:scrolled={() => handleScrolled('supportOptions')}
				>
					<button
						onfocusout={() => (supportCarouselHasFocus = false)}
						onclick={() => moveSlide('<', 'supportOptions')}
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
						onfocusout={() => (supportCarouselHasFocus = false)}
						onclick={() => moveSlide('>', 'supportOptions')}
						class="next-button"
						aria-label="Nächste Maßnahme"
						><Icon img="arrow-toright" size="small" svg_color="white" />
					</button>
					<div class="splide__arrows"></div>
				</Splide>
			</div>
		</div>
		<span class="bobble-indicator" aria-hidden="true"></span>
	</div>

	<div
		class="bottom-card"
		class:visible={carouselSupportSelectedIndex !== 0 && students.length !== 0}
		aria-hidden={carouselSupportSelectedIndex === 0 || students.length === 0}
	>
		<span class="bobble-indicator" aria-hidden="true"></span>
		<div class="students">
			<span>{`Studierende ${carouselStudentSelectedIndex + 1} von ${students.length}`}</span>
			<div class="carousel">
				{#key students}
					<Splide
						aria-roledescription="Karussell"
						role="navigation"
						aria-label="Studierende"
						options={splideOptionsStudents}
						bind:this={studentCarousel}
						hasTrack={false}
						on:scrolled={() => handleScrolled('students')}
					>
						<button
							onfocusout={() => (studentsCarouselHasFocus = false)}
							onclick={() => moveSlide('<', 'students')}
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
											<img
												src={base + '/icons/' + student.icon + '.svg'}
												alt=""
												aria-hidden="true"
											/>
										{/if}

										<p class="student-name">{student.name}</p>
									</div>
								</SplideSlide>
							{/each}
						</SplideTrack>
						<button
							onfocusout={() => (studentsCarouselHasFocus = false)}
							onclick={() => moveSlide('>', 'students')}
							class="next-button"
							aria-label="Nächste Person"
							tabindex={carouselSupportSelectedIndex === 0 ? -1 : 0}
							aria-hidden={carouselSupportSelectedIndex === 0}
							><Icon img="arrow-toright" size="small" svg_color="white" />
						</button>
						<div class="splide__arrows"></div>
					</Splide>
				{/key}
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
					transform: translateY(-1px);
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
					transform: rotate(180deg) translateY(-1px);
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

					img {
						width: 1.25rem;
						height: 1.25rem;

						filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(86%)
							hue-rotate(216deg) brightness(102%) contrast(100%);
					}
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

			margin-block: 0.625rem;
			font-weight: bold;

			&.student-name {
				min-height: 2.5rem;
			}

			&.support-option {
				min-height: 5rem;
				margin-inline: 1.875rem;
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
