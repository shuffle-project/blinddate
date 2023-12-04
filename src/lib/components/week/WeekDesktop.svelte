<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '../../interfaces/persona.interfaces';
	import type { Day } from '../../interfaces/week.interfaces';
	import Icon from '../Icon.svelte';
	import Switch from '../Switch.svelte';
	import { getRandomId } from '../utils';

	export let persona: Persona;

	const randomId = getRandomId();

	const month: string = persona.week!.month;
	const days: Day[] = persona.week!.days;

	let detailedDay = 0;

	function onOpenDayDetails(day: Day) {
		detailedDay = days.findIndex((obj) => obj.day === day.day);
	}

	function onKeypressed(event: KeyboardEvent) {
		if (event.code === 'ArrowLeft') {
			event.preventDefault();
			let element = document.getElementById(`weektab-${detailedDay + 1 - 1}-${randomId}`);
			element?.focus();
			element?.click();
		} else if (event.code === 'ArrowRight') {
			event.preventDefault();
			let element = document.getElementById(`weektab-${detailedDay + 1 + 1}-${randomId}`);
			element?.focus();
			element?.click();
		}
	}
</script>

<div class="with-week-figure">
	<div class="wrapper">
		<div class="calender">
			<h3 id="tablist-1">{persona.week?.month} {persona.week?.year}</h3>

			<table role="presentation">
				<tr aria-hidden="true">
					{#each days as day}
						<th class="day">{day.day}</th>
					{/each}
				</tr>
				<tr>
					{#each days as day}
						<td aria-hidden="true" class="smiley-date-cell">
							{#if day.smiley === 'sad'}
								<div class="smiley">
									<Icon size="smedium" img="sad" svg_color="green" />
								</div>
							{:else}
								<div class="smiley">
									<Icon size="smedium" img="happy" svg_color="green" />
								</div>
							{/if}

							{day.date}
						</td>
					{/each}
				</tr>
				<tr role="tablist">
					{#each days as day, i}
						<td class="activity-cell">
							<button
								tabindex={i === detailedDay ? 0 : -1}
								class="activity"
								class:active={detailedDay === i}
								id="weektab-{i + 1}-{randomId}"
								role="tab"
								aria-controls="tabpanel-{i + 1}-{randomId}"
								aria-selected={detailedDay === i}
								aria-label="{day.dayFull} der {day.date}. {month}. {day.activity.replace(
									/\&shy;/gi,
									''
								)}. {day.smiley === 'happy' ? 'Guter Tag' : 'Schlechter Tag'}."
								on:click={() => onOpenDayDetails(day)}
								on:keydown={onKeypressed}
							>
								{@html day.activity}
							</button>
						</td>
					{/each}
				</tr>
			</table>
		</div>

		<div
			class="detailed-day"
			id="tabpanel-{detailedDay + 1}-{randomId}"
			role="tabpanel"
			aria-labelledby="weektab-{detailedDay + 1}-{randomId}"
		>
			<img
				class="week-day-indicator"
				style="left:{20 * detailedDay + 3}%"
				src="{base}/decorations/week-day-indicator.svg"
				alt=""
				aria-hidden="true"
			/>
			<div class="header">
				<Icon size="smedium" img="happy" svg_color="green" />
				<Switch
					option1="happy"
					option1Label="Guter Tag"
					option2="sad"
					option2Label="Schlechter Tag"
					bind:value={days[detailedDay].smiley}
				/>
				<Icon size="smedium" img="sad" svg_color="green" />
			</div>
			<div class="body">
				<p>
					{days[detailedDay].time}
				</p>
				<p>
					{#if days[detailedDay].smiley === 'happy'}
						{days[detailedDay].text_happy}
					{:else}
						{days[detailedDay].text_sad}
					{/if}
				</p>
			</div>
		</div>
	</div>

	<div
		class="week-figure-wrapper {days.filter((obj) => obj.smiley === 'sad').length > 2
			? 'flipped'
			: ''}"
	>
		<div class="week-figure-inner">
			<div class="week-figure-front">
				<div class="week-figure-background">
					<img
						class="week-figure {days.filter((obj) => obj.smiley === 'happy').length < 3
							? 'hidden'
							: ''}"
						aria-hidden={days.filter((obj) => obj.smiley === 'happy').length < 3}
						src="{base}/personas/{persona.id}/{persona.id}-happy.svg"
						alt="{persona.name} ist zufrieden, da {days.filter((obj) => obj.smiley === 'happy')
							.length} von 5 Tagen in dieser Woche gut verliefen."
					/>
				</div>
			</div>
			<div class="week-figure-back">
				<div class="week-figure-background">
					<img
						class="week-figure"
						aria-hidden={days.filter((obj) => obj.smiley === 'sad').length < 3}
						src="{base}/personas/{persona.id}/{persona.id}-sad.svg"
						alt="{persona.name} steht in einer erschöpften Pose da, da {days.filter(
							(obj) => obj.smiley === 'sad'
						).length} von 5 Tagen in dieser Woche schlecht verliefen"
					/>
				</div>
			</div>
		</div>

		<p class="week-figure-text" aria-hidden="true">
			{#if days.filter((obj) => obj.smiley === 'happy').length >= 3}
				{days.filter((obj) => obj.smiley === 'happy').length} von 5 Tage waren gut
			{:else}
				{days.filter((obj) => obj.smiley === 'sad').length} von 5 Tage waren schlecht
			{/if}
		</p>
	</div>
</div>

<style lang="scss">
	.with-week-figure {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.week-figure-wrapper {
			perspective: 1000px;
			margin-top: 1.5rem;
			margin-inline: auto;
			width: 13.8rem;
			height: 34rem;
		}

		.week-figure-text {
			text-align: center;
			margin: 0 auto;

			padding: 0.22rem;
			font-size: 0.88rem;

			position: absolute;
			inset: auto 0 0 0;
		}

		.week-figure-inner {
			position: relative;
			transition: transform 0.8s;
			transform-style: preserve-3d;
		}

		.week-figure-wrapper.flipped .week-figure-inner {
			transform: rotateY(180deg);
		}

		.week-figure-front,
		.week-figure-back {
			position: absolute;
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
		}

		.week-figure-back {
			transform: rotateY(180deg);
		}

		.week-figure {
			height: 100%;
			max-height: 28rem;
			z-index: 2;

			transform: translateY(5%);
			opacity: 100%;
			transition: all 0s;
			transition-delay: 0.2s;

			&.hidden {
				//for firefox, otherwise you can see the feet in the background
				opacity: 0%;
			}
		}

		.week-figure-background {
			background: var(--color-gradient-persona);
			width: 13.8rem;
			border-radius: 2.22rem;
			display: flex;
			justify-content: center;
		}
	}

	.wrapper {
		margin-inline: auto;
		max-width: var(--content-element-max-width);

		.calender {
			color: rgba(var(--color-white-rgb), 0.8);
			background-color: var(--color-black);
			margin-inline: 1.33rem;
			border-radius: 1.11rem;

			h3 {
				padding-left: 1.05rem;
				padding-top: 0.66rem;
				color: var(--color-white);
			}

			table {
				width: 100%;

				tr {
					display: flex;
					* {
						flex: 1 1 0px;
					}

					th,
					td {
						padding: 0.27rem 0.5rem 0.27rem 0.5rem;
					}

					.day {
						text-align: right;
					}

					.smiley-date-cell {
						border-top: 1px solid var(--color-border-blue);
						border-right: 1px solid var(--color-border-blue);
						text-align: right;
						color: rgba(var(--color-white-rgb), 0.8);

						&:last-child {
							border-right: none;
						}

						position: relative;

						.smiley {
							position: absolute;
							display: flex;
							align-items: center;
							justify-content: center;
							left: 50%;
							transform: translateX(-0.67rem);
						}
					}

					.activity-cell {
						border-right: 1px solid var(--color-border-blue);

						&:last-child {
							border-right: none;
						}
					}

					.activity {
						margin-bottom: 0.27rem;
						color: var(--color-black);
						background-color: var(--color-turquoise);
						border-radius: 5px;
						font-size: 0.88rem;
						width: 100%;
						border: none;

						display: flex;
						flex-direction: column;
						text-align: left;

						word-wrap: break-word;
						overflow-wrap: break-word;
						overflow-wrap: anywhere;

						-webkit-hyphens: auto;
						-moz-hyphens: auto;
						hyphens: auto;

						padding: 6px;

						&.active {
							text-decoration: underline;
						}

						&:focus,
						&:hover {
							outline: 2px solid var(--color-white);
							outline-offset: 2px;
						}

						cursor: pointer;
					}
				}
			}
		}

		.detailed-day {
			margin: 2rem 1.33rem;
			border: 1px solid var(--color-black);
			border-top: none;
			border-radius: 1.11rem;
			position: relative;

			.week-day-indicator {
				position: absolute;
				top: -1rem;
				transition: all 0.3s ease-out;
			}

			.header {
				border: 1px solid var(--color-black);
				border-radius: 1.11rem 1.11rem 0 0;

				background-color: var(--color-black);
				color: var(--color-white);
				display: flex;
				gap: 0.55rem;
				padding-top: 1.52rem;
				padding-left: 1.93rem;
				padding-bottom: 1.08rem;
			}

			.body {
				padding: 0.86rem 1.11rem;

				p {
					margin: 0;
				}
			}
		}
	}

	@media (min-width: 59.375rem) {
		.wrapper {
			margin-inline: 0;
			.calender {
				margin: 0px 3.33rem;
			}

			.detailed-day {
				margin: 2rem 3.33rem;
			}
		}
	}
</style>
