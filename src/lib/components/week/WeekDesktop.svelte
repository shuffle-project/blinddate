<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '../../interfaces/persona.interfaces';
	import type { Day } from '../../interfaces/week.interfaces';
	import Icon from '../Icon.svelte';
	import WeekDaySwitch from './WeekDaySwitch.svelte';
	import WeekPersonaIndicator from './WeekPersonaIndicator.svelte';

	let { persona }: { persona: Persona } = $props();

	const randomId = $props.id();

	const month: string = persona.week!.month;
	const days: Day[] = $state(persona.week!.days);

	let selectedDay = $state(0);

	function onOpenDayDetails(day: Day) {
		selectedDay = days.findIndex((obj) => obj.day === day.day);
	}

	function onKeypressed(event: KeyboardEvent) {
		const direction = event.code === 'ArrowLeft' ? -1 : event.code === 'ArrowRight' ? 1 : 0;
		if (direction !== 0) {
			event.preventDefault();
			const element = document.getElementById(`weektab-${selectedDay + 1 + direction}-${randomId}`);
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
				<thead>
					<tr aria-hidden="true">
						{#each days as day}
							<th class="day">{day.day}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					<tr>
						{#each days as day}
							<td aria-hidden="true" class="smiley-date-cell">
								{#if day.smiley === 'sad'}
									<div class="smiley">
										<Icon size="medium" img="sad" svg_color="green" />
									</div>
								{:else}
									<div class="smiley">
										<Icon size="medium" img="happy" svg_color="green" />
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
									tabindex={i === selectedDay ? 0 : -1}
									class="activity"
									class:active={selectedDay === i}
									id="weektab-{i + 1}-{randomId}"
									role="tab"
									aria-controls="tabpanel-{i + 1}-{randomId}"
									aria-selected={selectedDay === i}
									aria-label="{day.dayFull} der {day.date}. {month}. {day.activity.replace(
										/\&shy;/gi,
										''
									)}. {day.smiley === 'happy' ? 'Guter Tag' : 'Schlechter Tag'}."
									onclick={() => onOpenDayDetails(day)}
									onkeydown={onKeypressed}
								>
									{@html day.activity}
								</button>
							</td>
						{/each}
					</tr>
				</tbody>
			</table>
		</div>

		<div
			class="detailed-day"
			id="tabpanel-{selectedDay + 1}-{randomId}"
			role="tabpanel"
			aria-labelledby="weektab-{selectedDay + 1}-{randomId}"
		>
			<img
				class="week-day-indicator"
				style="left:{20 * selectedDay + 3}%"
				src="{base}/decorations/week-day-indicator.svg"
				alt=""
				aria-hidden="true"
			/>
			<div class="header">
				<Icon size="medium" img="happy" svg_color="green" />
				<WeekDaySwitch
					option1="happy"
					option1Label="Guter Tag"
					option2="sad"
					option2Label="Schlechter Tag"
					bind:value={days[selectedDay].smiley}
				/>
				<Icon size="medium" img="sad" svg_color="green" />
			</div>
			<div class="body">
				<p>
					{days[selectedDay].time}
				</p>
				<p>
					{#if days[selectedDay].smiley === 'happy'}
						{days[selectedDay].text_happy}
					{:else}
						{days[selectedDay].text_sad}
					{/if}
				</p>
			</div>
		</div>
	</div>

	<WeekPersonaIndicator {persona} {days} />
</div>

<style lang="scss">
	.with-week-figure {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.wrapper {
		margin-inline: auto;
		max-width: var(--content-element-max-width);

		.calender {
			color: rgba(var(--color-white-rgb), 0.8);
			background-color: var(--color-black);
			margin-inline: var(--outer-spacing);
			border-radius: 1.25rem;

			h3 {
				padding-left: 1rem;
				padding-top: 0.625rem;
				color: rgba(var(--color-white-rgb), 0.8);
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
						padding: 0.25rem 0.375rem;
					}

					.day {
						text-align: right;
						font-weight: 400;
					}

					.smiley-date-cell {
						border-top: 1px solid var(--color-border-blue);
						border-right: 1px solid var(--color-border-blue);
						text-align: right;
						color: rgba(var(--color-white-rgb), 0.8);
						font-weight: 400;
						position: relative;

						&:last-child {
							border-right: none;
						}

						.smiley {
							position: absolute;
							display: flex;
							align-items: center;
							justify-content: center;
							margin-inline: auto;
							inset: 0;
						}
					}

					.activity-cell {
						border-right: 1px solid var(--color-border-blue);

						&:last-child {
							border-right: none;
						}
					}

					.activity {
						margin-bottom: 0.25rem;
						color: var(--color-black);
						background-color: var(--color-turquoise);
						border-radius: 0.375rem;
						font-size: 1rem;
						font-weight: 500;
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
						cursor: pointer;
						padding: 0.375rem;

						&:focus,
						&:hover {
							outline: 2px solid var(--color-white);
							outline-offset: 2px;
						}
					}
				}
			}
		}

		.detailed-day {
			margin: 2rem var(--outer-spacing);

			border: 1px solid var(--color-black);
			border-top: none;
			border-radius: 1.25rem;
			position: relative;

			.week-day-indicator {
				position: absolute;
				top: -1rem;
				transition: all 0.3s ease-out;
			}

			.header {
				border: 1px solid var(--color-black);
				border-radius: 1.25rem 1.25rem 0 0;

				background-color: var(--color-black);
				color: var(--color-white);
				display: flex;
				gap: 0.375rem;
				padding: 1.25rem 0 1rem 1rem;
			}

			.body {
				padding: 1rem;

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
				margin: 0px 3.375rem;
			}

			.detailed-day {
				margin: 2rem 3.375rem;
			}
		}
	}
</style>
