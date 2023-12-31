<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';

	export let personas: Persona[];

	let toggleAllNames = false;
	let durations = ['0.3s', '0.7s', '1.2s', '2s'];
	function randomIntFromInterval() {
		return Math.floor(Math.random() * (3 - 0 + 1) + 0);
	}

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="wrapper">
	<div class="toggle-all-names">
		<input id="toggle-all-names" type="checkbox" bind:checked={toggleAllNames} />
		<label for="toggle-all-names">Alle Namen anzeigen</label>
	</div>

	<div class="lecture-room">
		<div class="loading-indicator" class:not-mounted={!mounted}></div>
		<ul aria-label="Vorlesungssaal mit Studierenden">
			{#each personas as persona}
				<li
					class="persona {persona.id}"
					class:mounted
					style="transition-duration: {durations[randomIntFromInterval()]}"
				>
					<a
						href="{base}/personas/{persona.id}"
						aria-label={persona.name}
						aria-describedby="{persona.id}-image"
						class:show-all-names={toggleAllNames}
					>
						<div class="persona-info-wrapper" aria-hidden="true">
							<div class="persona-info">
								<p class="persona-name">{persona.name}</p>
							</div>
						</div>
						<img
							class="persona-img"
							src="{base}/personas/{persona.id}/{persona.id}-lecture.svg"
							alt=""
							id="{persona.id}-image"
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
		padding: 0 1rem;
		margin-bottom: -5px;
		position: relative;
		height: min(49vw, 38rem);

		.toggle-all-names {
			width: 100%;
			max-width: var(--content-max-width);

			display: flex;
			justify-content: end;
			align-items: center;
			gap: 0.55rem;

			padding-right: 2rem;
			box-sizing: border-box;

			input {
				-webkit-appearance: none;
				appearance: none;
				background-color: var(--color-black);

				margin: 0;

				height: 1.33rem;
				width: 1.33rem;
				aspect-ratio: 1;

				border-radius: 0.33rem;
				border: 2px solid var(--color-white);

				cursor: pointer;

				display: grid;
				place-content: center;

				&:checked:before {
					content: '';
					width: 0.8rem;
					height: 0.8rem;
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
			}
		}

		.lecture-room {
			max-width: var(--content-max-width);
			width: 100%;
			border-radius: 2rem;
			position: relative;

			margin-inline: auto;

			box-sizing: border-box;
			margin-top: 0.55rem;

			ul {
				margin: 0;
			}

			.lecture-room-img {
				border-radius: 2rem;
			}

			.loading-indicator {
				width: 2rem;
				height: 2rem;
				background-color: transparent;
				position: absolute;
				inset: 1rem 1rem auto auto;
				margin: auto;
				opacity: 0%;
				transition: opacity 0.3s ease-in-out;

				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				border: 0.33rem solid transparent;
				border-top: 0.33rem solid var(--color-black);
				border-radius: 50%;
				animation: spin 1.3s linear infinite;

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
					bottom: 2.5%;
					left: 12%;

					img {
						width: min(17.5vw, 13rem);
					}
				}

				&.aleksandr {
					top: 27.5%;
					left: 29%;

					img {
						width: min(21vw, 16rem);
					}
				}

				&.michelle {
					left: 38%;
					top: 1.5%;

					img {
						width: min(12vw, 9rem);
					}
				}

				&.hannah {
					bottom: 41.5%;
					right: 28%;

					img {
						width: min(13.5vw, 10.3rem);
					}
				}

				&.kilian {
					bottom: 41.7%;
					right: 7%;

					img {
						width: min(15.5vw, 11.9rem);
					}
				}

				&.maxi {
					top: 4.8%;
					left: 6%;

					img {
						width: min(19.6vw, 15rem);
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

							border-radius: 2rem;

							width: 1.33rem;
							height: 1.33rem;

							margin-bottom: 0.33rem;

							transition: all 0.2s ease-out;

							p {
								margin: 0;
								font-size: 1.22rem;
							}

							p,
							.icon {
								opacity: 0%;
								transform: scale(0);
							}
						}
					}

					&:hover,
					&:focus,
					&.show-all-names {
						.persona-info {
							opacity: 100%;

							color: var(--color-white);

							padding: 0.55rem 1rem;
							border-radius: 2rem;

							width: 5rem;
							margin-bottom: 0;

							transition: all 0.3s ease-out;

							display: flex;
							align-items: center;
							justify-content: center;
							gap: 0.55rem;

							p,
							.icon {
								transform: scale(1);
								opacity: 100%;
								transition: opacity 0.8s ease-out;
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
