<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	export let personas: Persona[];
</script>

<div class="wrapper">
	<div class="toggle-all-names">
		<input id="toggle-all-names" type="checkbox" />
		<label for="toggle-all-names">Alle Namen anzeigen</label>
	</div>

	<div class="lecture-room">
		<ul aria-label="Vorlesungssaal mit Studierenden">
			{#each personas as persona}
				<li class="persona {persona.id}">
					<a
						href="{base}/personas/{persona.id}"
						aria-label={persona.name}
						aria-describedby="{persona.id}-image"
					>
						<div class="persona-info-wrapper" aria-hidden="true">
							<div class="persona-info">
								<!-- <div class="icon">
									<Icon
										img="{base}/icons/{persona.disability_icon}"
										size="medium"
										svg_color="white"
									/>
								</div> -->
								<p class="persona-name">{persona.name}</p>
							</div>
						</div>
						<img
							class="persona-img"
							src="{base}/personas/{persona.id}/{persona.id}-lecture.svg"
							alt={persona.shortVisualDescription}
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
		padding: 0 1rem;
		background: linear-gradient(var(--color-black) 50%, var(--color-background-body) 50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.toggle-all-names {
			label {
				color: var(--color-white);
			}
		}

		.lecture-room {
			width: 100%;
			max-width: var(--content-max-width);

			border-radius: 2rem;
			position: relative;

			.lecture-room-img {
				border-radius: 2rem;
			}

			.persona {
				z-index: 1;
				position: absolute;
				list-style: none;

				&.gabriel {
					bottom: 1.8%;
					left: 12%;

					img {
						width: min(18vw, 14rem);
					}
				}

				&.hannah {
					bottom: 40%;
					right: 23%;

					img {
						width: min(20vw, 16rem);
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

							p,
							.icon {
								opacity: 0%;
								transform: scale(0);
							}
						}
					}

					&:hover,
					&:focus {
						.persona-info {
							opacity: 100%;

							color: var(--color-white);

							padding: 0.55rem 1rem;
							border-radius: 2rem;

							width: auto;
							margin-bottom: 0;

							transition: all 0.3s ease-out;

							display: flex;
							align-items: center;
							gap: 0.55rem;

							p {
								margin: 0;
								font-size: 1.22rem;
							}

							p,
							.icon {
								transform: scale(1);
								opacity: 100%;
								transition: opacity 0.8s ease-out;
							}

							.icon {
								display: flex;
								align-items: center;
								justify-content: center;
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
