<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import type { Day } from '$lib/interfaces/week.interfaces';
	import { MediaQuery } from 'svelte/reactivity';
	import Icon from '../Icon.svelte';
	import WeekPersona from './WeekPersona.svelte';
	import WeekSwitch from './WeekSwitch.svelte';

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

	const smallScreen = new MediaQuery('max-width: 510px');

	let weekdayIndicatorStyleValue = $derived.by(() => {
		if (smallScreen.current) {
			return 50;
		} else {
			return 10 + 20 * selectedDay;
		}
	});
</script>

<div class="wrapper">
	<div class="calender-wrapper">
		<div class="calender">
			<h3>{persona.week?.month} {persona.week?.year}</h3>

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
								<span class="date">
									{day.date}
								</span>
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
									aria-selected={selectedDay === i}
									onclick={() => onOpenDayDetails(day)}
									onkeydown={onKeypressed}
								>
									<span class="desktop">
										{day.activity}
										<span class="sr-only">
											{`. ${day.dayFull} der ${day.date}. ${month}. 
											${day.smiley === 'happy' ? 'Guter Tag' : 'Schlechter Tag'}`}
										</span>
									</span>
									<span class="mobile">
										{day.date}
										<span class="sr-only">
											{`${month}. ${day.dayFull}.  
											${day.smiley === 'happy' ? 'Guter Tag' : 'Schlechter Tag'}`}
										</span>
									</span>
								</button>
							</td>
						{/each}
					</tr>
				</tbody>
			</table>
			<div class="mobile-activity">
				<div class="mobile-activity-text">
					{days[selectedDay].activity}
				</div>
			</div>
		</div>

		<div class="detailed-day" role="tabpanel">
			<img
				class="week-day-indicator"
				style="left:{weekdayIndicatorStyleValue}%"
				src="{base}/decorations/week-day-indicator.svg"
				alt=""
				aria-hidden="true"
			/>
			<div class="header">
				<span class="smiley-icon">
					<Icon size="medium" img="happy" svg_color="green" />
				</span>

				<WeekSwitch
					option1="happy"
					option1Label="Guter Tag"
					option2="sad"
					option2Label="Schlechter Tag"
					bind:value={days[selectedDay].smiley}
				/>

				<span class="smiley-icon">
					<Icon size="medium" img="sad" svg_color="green" />
				</span>
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

	<WeekPersona {persona} {days} />
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.calender-wrapper {
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

							.mobile {
								display: none;
							}

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

				.mobile-activity {
					display: none;
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
					transform: translateX(-50%);
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
			.calender-wrapper {
				margin-inline: 0;

				.calender {
					margin: 0px 3.375rem;
				}

				.detailed-day {
					margin: 2rem 3.375rem;
				}
			}
		}

		@media (max-width: 31.875rem) {
			.calender-wrapper {
				.calender {
					h3 {
						margin-bottom: 0.5rem;
					}

					table {
						td {
							padding: 0.125rem 0.25rem !important;
						}

						th.day {
							text-align: center;
						}

						td.smiley-date-cell {
							opacity: 85%;
							border: none;
							margin-top: 0.5rem;
							margin-bottom: 1.5rem;

							.date {
								display: none;
							}
						}

						td.activity-cell {
							border-right: none;
							display: flex;
							justify-content: center;

							button {
								background-color: transparent;
								color: var(--color-white);
								border: 2px solid var(--color-border-blue);
								max-width: 3rem;
								min-width: 2.5rem;
								aspect-ratio: 1;
								border-radius: 50%;

								font-size: 1.25rem;
								font-weight: bold;

								display: flex;
								align-items: center;
								justify-content: center;

								&.active {
									background-color: var(--color-turquoise);
									border: 1px solid var(--color-black);
									color: var(--color-black);
								}
							}

							.desktop {
								display: none;
							}

							.mobile {
								display: initial;

								display: flex;
								align-items: center;
							}
						}
					}

					.mobile-activity {
						display: flex;
						gap: 0.625rem;
						align-items: center;
						justify-content: center;

						padding: 0.625rem 0.375rem;
						border-top: 1px solid var(--color-border-blue);

						.mobile-activity-text {
							background-color: var(--color-turquoise);
							color: var(--color-black);
							border-radius: 0.25rem;

							padding: 0.25rem 0.625rem;
							font-weight: bold;
						}
					}
				}

				.detailed-day {
					.smiley-icon {
						display: none;
					}

					.header {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding-left: 0;
					}
				}
			}
		}
	}
</style>
