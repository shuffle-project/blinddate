<script lang="ts">
	import { base } from '$app/paths';
	import {
		BIG_PICTURE_STUDENTS,
		SUPPORT_OPTIONS,
		type BigPictureStudent,
		type StudentId
	} from '$lib/constants/bigPicture';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	import Icon from '../Icon.svelte';
	import BigLectureRoom from './BigLectureRoom.svelte';

	let students: BigPictureStudent[] = BIG_PICTURE_STUDENTS;
	const supportOptions = SUPPORT_OPTIONS;
	let studentCarousel: Splide;
	let supportCarousel: Splide;
	let selectedStudentComment: string | undefined = '';
	let selectedStudentId: StudentId | undefined = undefined;

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

	const splideOptions = {
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
			slide: 'Person',
			slideLabel: '%s von %s'
		},
		pagination: false,
		arrows: false,
		speed: 800,
		drag: 'free' as const,
		snap: true,
		flickPower: 450,
		easing: 'ease'
	};

	let carouselSupportSelectedIndex: number = 0;
	let carouselStudentSelectedIndex: number = 0;

	let componentHasFocus = false;

	function moveSlide(direction: string, carouselId: 'students' | 'supportOptions') {
		if (!studentCarousel || !supportCarousel) return;
		componentHasFocus = true;

		if (carouselId === 'students') {
			studentCarousel.go(direction);
			carouselStudentSelectedIndex = studentCarousel.splide.index;
		}

		if (carouselId === 'supportOptions') {
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
	}
</script>

<div class="wrapper">
	<div class="top-card">
		<div class="lecture-room">
			<BigLectureRoom />
		</div>
		<div class="support-options">
			{#if carouselSupportSelectedIndex === 0}
				<span>Jetzt Swipen!</span>
			{:else}
				<span>Maßnahme {carouselSupportSelectedIndex} von {supportOptions.length - 1}</span>
			{/if}

			<div class="carousel">
				<button
					on:focusout={() => (componentHasFocus = false)}
					on:click={() => moveSlide('<', 'supportOptions')}
					class="previous-button"
					aria-label="Vorherige Person"
				>
					<Icon img="arrow-toleft" size="small" svg_color="white" />
				</button>
				<Splide
					aria-roledescription="Karussell"
					role="navigation"
					aria-label="Studierende"
					options={splideOptions}
					bind:this={supportCarousel}
					hasTrack={false}
					on:moved={(e) => handleMove(e?.detail.index, 'supportOptions')}
					on:scrolled={() => handleScrolled('supportOptions')}
				>
					<SplideTrack class="splide-track">
						{#each supportOptions as option, i (option.id)}
							<SplideSlide id="result-card-{i + 1}" aria-roledescription="Folie">
								<p class="support-option">{option.name}</p>
							</SplideSlide>
						{/each}
					</SplideTrack>

					<div class="splide__arrows" />
				</Splide>
				<button
					on:focusout={() => (componentHasFocus = false)}
					on:click={() => moveSlide('>', 'supportOptions')}
					class="next-button"
					aria-label="Nächste Person"
					><Icon img="arrow-toright" size="small" svg_color="white" />
				</button>
			</div>
		</div>
	</div>
	<div
		class="bottom-card"
		class:visible={carouselSupportSelectedIndex !== 0 && students.length !== 0}
		aria-hidden={carouselSupportSelectedIndex === 0 && students.length === 0}
	>
		<div class="students">
			<span>Studierende {carouselStudentSelectedIndex + 1} von {students.length}</span>
			<div class="carousel">
				<button
					on:focusout={() => (componentHasFocus = false)}
					on:click={() => moveSlide('<', 'students')}
					class="previous-button"
					aria-label="Vorherige Person"
				>
					<Icon img="arrow-toleft" size="small" svg_color="white" />
				</button>
				<Splide
					aria-roledescription="Karussell"
					role="navigation"
					aria-label="Studierende"
					options={splideOptions}
					bind:this={studentCarousel}
					hasTrack={false}
					on:moved={(e) => handleMove(e?.detail.index, 'students')}
					on:scrolled={() => handleScrolled('students')}
				>
					<SplideTrack class="splide-track">
						{#each students as student, i (student.id)}
							<SplideSlide id="result-card-{i + 1}" aria-roledescription="Folie">
								<p class="student-name">{student.name}</p>
							</SplideSlide>
						{/each}
					</SplideTrack>

					<div class="splide__arrows" />
				</Splide>
				<button
					on:focusout={() => (componentHasFocus = false)}
					on:click={() => moveSlide('>', 'students')}
					class="next-button"
					aria-label="Nächste Person"
					><Icon img="arrow-toright" size="small" svg_color="white" />
				</button>
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
</div>

<style lang="scss">
	.wrapper {
		.top-card {
			.lecture-room {
				display: flex;
			}

			.support-options {
				background-color: var(--color-black);
				border-radius: 0 0 1.25rem 1.25rem;
				color: rgba(var(--color-white-rgb), 0.8);
				position: relative;
				padding-block: 0.625rem;

				span {
					font-size: 0.875rem;
					display: flex;
					justify-content: center;
				}

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

			&.visible {
				opacity: 100%;
			}

			.students {
				background-color: var(--color-black);
				color: rgba(var(--color-white-rgb), 0.8);

				padding: 1rem 0 0.625rem 0;

				border-radius: 1.25rem 1.25rem 0 0;
				position: relative;

				span {
					font-size: 0.875rem;
					display: flex;
					justify-content: center;
				}

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

			.student-detail {
				background: linear-gradient(145deg, var(--color-turquoise), var(--color-green));
				border-radius: 0 0 1.25rem 1.25rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 0 1rem 1rem;

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
			padding-inline: 2.75rem;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-inline: 2.75rem;
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
		}

		.previous-button {
			inset: 0 auto 0 0;
			background: linear-gradient(var(--color-black), transparent);
		}

		.next-button {
			inset: 0 0 0 auto;
			background: linear-gradient(transparent, var(--color-black));
		}
	}
</style>
