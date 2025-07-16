<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';

	let { personas }: { personas: Persona[] } = $props();

	let toggleAllNames = $state(false);
	let toggleDisabilityInfo = $state(false);

	const durations = ['0.3s', '0.7s', '1.2s', '2s'];

	function randomIntFromInterval() {
		return Math.floor(Math.random() * (3 - 0 + 1) + 0);
	}

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<div class="wrapper">
	<div class="toggle-wrapper">
		<div class="toggle">
			<input id="toggle-all-names" type="checkbox" bind:checked={toggleAllNames} />
			<label for="toggle-all-names">Alle Namen anzeigen</label>
		</div>

		<div class="toggle">
			<input id="toggle-disability-info" type="checkbox" bind:checked={toggleDisabilityInfo} />
			<label for="toggle-disability-info">Beeinträchtigung mitanzeigen</label>
		</div>
	</div>

	<div class="lecture-room">
		<div class="loading-indicator" class:not-mounted={!mounted}></div>
		<div class="click-indicator" class:mounted>
			<Icon img="clickable-persona" size="parent" />
		</div>
		<ul aria-label="Vorlesungssaal mit Studierenden">
			{#each personas as persona}
				<li
					class="persona {persona.id}"
					class:mounted
					style="transition-duration: {durations[randomIntFromInterval()]}"
				>
					<a
						href="{base}/personas/{persona.id}"
						aria-label={persona.name + (toggleDisabilityInfo ? ` (${persona.disability})` : '')}
						class:show-all-names={toggleAllNames}
						data-sveltekit-preload-data="hover"
					>
						<div class="persona-info-wrapper" aria-hidden="true">
							<div class="persona-info" class:show-disability-info={toggleDisabilityInfo}>
								<p class="persona-name">{persona.name}</p>
								{#if toggleDisabilityInfo}
									<p class="persona-disability">{persona.disablityCategory}</p>
								{/if}
							</div>
						</div>
						<img
							class="persona-img"
							src="{base}/personas/{persona.id}/{persona.id}-lecture.svg"
							alt=""
							loading="lazy"
						/>
					</a>
				</li>
			{/each}
		</ul>
		<img
			class="lecture-room-img"
			src={base + '/decorations/lecture-room.svg'}
			aria-hidden="true"
			alt=""
			height="680"
			width="1315"
		/>
	</div>
</div>

<style lang="scss">
	.wrapper {
		background: linear-gradient(var(--color-black) 50%, var(--color-background-body) 50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 var(--outer-spacing);
		position: relative;
		height: min(49vw, 42.75rem);

		.toggle-wrapper {
			width: 100%;
			max-width: var(--content-max-width);
			padding-right: 2.25rem;
			box-sizing: border-box;

			display: flex;
			align-items: center;
			justify-content: end;

			gap: 2rem;
		}

		.toggle {
			display: flex;
			gap: 0.5rem;

			box-sizing: border-box;

			input {
				-webkit-appearance: none;
				appearance: none;
				background-color: var(--color-black);

				margin: 0;

				height: 1.5rem;
				width: 1.5rem;
				aspect-ratio: 1;

				border-radius: 0.375rem;
				border: 2px solid var(--color-white);

				cursor: pointer;

				display: grid;
				place-content: center;

				&:checked:before {
					content: '';
					width: 0.875rem;
					height: 0.875rem;
					box-shadow: inset 1rem 1rem var(--color-white);

					transform-origin: bottom left;
					clip-path: polygon(13% 50%, 5% 65%, 45% 100%, 100% 10%, 83% 0%, 40% 75%);
				}

				&:checked {
					background-color: var(--color-black);
				}

				&:focus,
				&:hover {
					outline: 2px solid var(--color-white);
					outline-offset: 2px;
				}
			}

			label {
				color: var(--color-white);
				display: flex;
				align-items: center;
			}
		}

		.lecture-room {
			max-width: var(--content-max-width);
			width: 100%;
			border-radius: 2.25rem;
			position: relative;

			margin-inline: auto;

			box-sizing: border-box;
			margin-top: 0.625rem;

			ul {
				margin: 0;
			}

			.lecture-room-img {
				width: 100%;
				height: 100%;
				border-radius: 2.5rem;
			}

			.click-indicator {
				width: 3.125rem;
				height: 3.125rem;
				background-color: transparent;
				position: absolute;
				inset: 1rem 1rem auto auto;
				margin: auto;
				opacity: 0%;
				transition: opacity 0.3s ease-in-out;
				transition-delay: 0.2s;

				&.mounted {
					opacity: 100%;
				}
			}

			.loading-indicator {
				width: 2.25rem;
				height: 2.25rem;
				background-color: transparent;
				position: absolute;
				inset: 1rem 1rem auto auto;
				margin: auto;
				opacity: 0%;
				transition: opacity 0.3s ease-in-out;

				border: 0.375rem solid transparent;
				border-top: 0.375rem solid var(--color-black);
				border-radius: 50%;
				animation: spin 1.3s linear infinite;

				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				&.not-mounted {
					opacity: 100%;
				}
			}

			.persona {
				z-index: 1;
				position: absolute;
				list-style: none;
				opacity: 0%;
				transition: opacity ease-in-out;
				pointer-events: none;

				&.mounted {
					opacity: 100%;
					pointer-events: initial;
				}

				&.gabriel {
					bottom: calc(2.4% - 0.125em);
					left: 12%;

					img {
						width: min(17vw, 14.625rem);
					}
				}

				&.aleksandr {
					top: 28%;
					left: 29%;

					img {
						width: min(20.8vw, 18rem);
					}
				}

				&.michelle {
					left: 38%;
					top: calc(2.4% - 0.125em);

					img {
						width: min(11.6vw, 10rem);
					}
				}

				&.hannah {
					bottom: 40.9%;
					right: 28%;

					img {
						width: min(13.4vw, 11.625rem);
					}
				}

				&.kilian {
					bottom: calc(41.5% - 0.125em);
					right: 7%;

					img {
						width: min(15.4vw, 13.3625rem);
					}
				}

				&.maxi {
					top: calc(5.3% - 0.125em);
					left: 6%;

					img {
						width: min(19.5vw, 16.875rem);
					}
				}

				&.faiza {
					bottom: calc(2.5% - 0.125em);
					left: 38%;

					img {
						width: min(18.4vw, 15.8rem);
					}
				}

				&.oliver {
					bottom: calc(1.2% - 0.125em);
					right: 16%;

					img {
						width: min(19.8vw, 17rem);
					}
				}

				a {
					position: relative;

					.persona-info-wrapper {
						position: absolute;
						z-index: 3;
						bottom: 50%;
						left: 0;
						right: 0;

						display: flex;
						justify-content: center;
						align-items: center;

						.persona-info {
							background-color: var(--color-blue);
							color: var(--color-white);

							border-radius: 2.25rem;

							width: 1.375rem;
							height: 1.375rem;

							max-width: 8.5rem;

							margin-bottom: 0.375rem;

							transition: all 0.2s ease-out;

							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							gap: 0.125rem;

							p {
								margin: 0;
								opacity: 0%;
								// transform: scale(0);
							}

							p.persona-name {
								font-size: 1.25rem;
								line-height: 100%;
							}

							p.persona-disability {
								font-size: 0.875rem;
								text-align: center;
								line-height: 120%;
							}
						}
					}

					&:hover,
					&:focus,
					&.show-all-names {
						.persona-info {
							padding: 0.625rem 1rem;

							width: 5rem;
							height: 1.5rem;

							&.show-disability-info {
								width: 10.5rem;
								height: 2.75rem;
							}

							margin-bottom: 0rem;

							transition: all 0.2s ease-out 0.1s;

							p {
								transition: opacity 0.4s ease-out 0.1s;
							}

							p.persona-name {
								opacity: 100%;
							}

							p.persona-disability {
								opacity: 80%;
							}
						}
					}

					&:focus {
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
		}
	}
</style>
