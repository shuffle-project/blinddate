<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	let { personas }: { personas: Persona[] } = $props();
	let toggleDisabilityInfo = $state(false);
</script>

<div class="wrapper">
	<div class="toggle">
		<input id="toggle-mobile-disability-info" type="checkbox" bind:checked={toggleDisabilityInfo} />
		<label for="toggle-mobile-disability-info">Beeinträchtigung mitanzeigen</label>
	</div>

	<div class="persona-wrapper">
		{#each personas as persona}
			<a href="{base}/personas/{persona.id}" data-sveltekit-preload-data="hover">
				<img
					class="background-image {persona.id}"
					src="{base}/decorations/persona-background.svg"
					aria-hidden="true"
					alt=""
				/>

				<div class="info">
					<p class="name">{persona.name}</p>
					{#if toggleDisabilityInfo}
						<p class="disability">{persona.disablityCategory}</p>
					{/if}
				</div>

				<img
					class="persona-img {persona.id}"
					src="{base}/personas/{persona.id}/{persona.id}-lecture.svg"
					aria-hidden="true"
					alt=""
				/>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--color-white);
		padding-inline: var(--outer-spacing);
		padding-top: 1.25rem;

		.persona-wrapper {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;

			justify-content: center;

			a {
				display: flex;
				flex-direction: column;

				justify-content: space-between;

				text-decoration: none;
				border-radius: 1rem;
				overflow: hidden;

				// height: 100%;
				// max-height: 14rem;
				aspect-ratio: 1/1.4;

				width: 100%;
				max-width: clamp(7.5rem, 40vw + 0.125rem, 10rem);

				background:
					// url('/static/decorations/persona-background.svg') no-repeat center,
					linear-gradient(145deg, var(--color-turquoise), var(--color-green));

				position: relative;

				outline: 3px solid transparent;
				outline-offset: 3px;

				box-shadow: 0rem 0.25rem 0.625rem 0rem rgba(var(--color-black-rgb), 0.125);

				&:hover,
				&:focus {
					outline: 3px solid var(--color-blue);

					transition: outline-color 0.4s ease-out;
				}

				.info {
					padding: 0.625rem;

					p {
						margin: 0;
						line-height: 100%;
						color: var(--color-black);
					}

					p.name {
						font-size: 1.375rem;
						font-weight: bold;
						margin-bottom: 0.25rem;
					}

					p.disability {
						font-size: 0.875rem;
						opacity: 80%;
					}
				}

				.background-image {
					position: absolute;
					left: 0.5rem;
					right: 0.5rem;
					bottom: -0.625rem;

					width: 90%;
					height: 90%;

					&.maxi {
						transform: rotate(0deg);
					}

					&.michelle {
						transform: rotate(25deg);
					}

					&.aleksandr {
						transform: rotate(-40deg);
					}

					&.hannah {
						transform: rotate(80deg);
					}

					&.kilian {
						transform: rotate(170deg);
					}

					&.gabriel {
						transform: rotate(-90deg);
					}

					&.faiza {
						transform: rotate(140deg);
					}

					&.oliver {
						transform: rotate(-130deg);
					}
				}

				.persona-img {
					position: absolute;

					&.maxi {
						width: clamp(120%, 70vw + 0.125rem, 160%);
						bottom: -2rem;
						left: -1.5rem;
					}

					&.michelle {
						width: clamp(80%, 70vw + 0.125rem, 95%);
						bottom: -1rem;
						right: 0;
					}

					&.aleksandr {
						bottom: -0.25rem;
						left: -1rem;
						width: clamp(70%, 70vw + 0.125rem, 120%);
					}

					&.hannah {
						bottom: -0.5rem;
						left: -0.5rem;
						width: clamp(60%, 70vw + 0.125rem, 85%);
					}

					&.kilian {
						bottom: -0.5rem;
						width: clamp(75%, 70vw + 0.125rem, 100%);
					}

					&.gabriel {
						bottom: -1.5rem;
						right: -1rem;
						width: clamp(75%, 70vw + 0.125rem, 95%);
					}

					&.faiza {
						bottom: -1.5rem;
						right: -1rem;
						width: clamp(90%, 70vw + 0.125rem, 120%);
					}

					&.oliver {
						bottom: -1.5rem;
						right: -1rem;
						width: clamp(90%, 70vw + 0.125rem, 120%);
					}
				}
			}
		}

		.toggle {
			display: flex;
			gap: 0.5rem;

			box-sizing: border-box;

			display: flex;
			justify-content: center;
			margin-bottom: 1.5rem;

			input {
				-webkit-appearance: none;
				appearance: none;
				background-color: var(--color-white);

				margin: 0;

				height: 1.5rem;
				width: 1.5rem;
				aspect-ratio: 1;

				border-radius: 0.375rem;
				border: 2px solid var(--color-black);

				cursor: pointer;

				display: grid;
				place-content: center;

				&:checked:before {
					content: '';
					width: 0.875rem;
					height: 0.875rem;
					box-shadow: inset 1rem 1rem var(--color-black);

					transform-origin: bottom left;
					clip-path: polygon(13% 50%, 5% 65%, 45% 100%, 100% 10%, 83% 0%, 40% 75%);
				}

				&:checked {
					background-color: var(--color-white);
				}

				&:focus,
				&:hover {
					outline: 2px solid var(--color-black);
					outline-offset: 2px;
				}
			}

			label {
				color: var(--color-black);
				display: flex;
				align-items: center;
			}
		}
	}

	@media (max-width: 22.5rem) {
		.disability {
			word-wrap: break-word;
			overflow-wrap: break-word;
			overflow-wrap: anywhere;

			-webkit-hyphens: auto;
			-moz-hyphens: auto;
			hyphens: auto;
		}
	}
</style>
