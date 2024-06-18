<script lang="ts">
	import type { Persona } from '../interfaces/persona.interfaces';
	import PersonaCard from './PersonaCard.svelte';
	export let persona: Persona;
</script>

<div class="background-black">
	<div class="wrapper">
		<div class="header-row" id="content">
			<!-- <div class="heading-section"> -->
			<h1 class="heading" id="persona-name">{persona.name}</h1>
			<!-- </div> -->
			<div class="subheading-details">
				<p class="subheading">{persona.subheading}</p>
				<section aria-label="Schlagwörter" class="tags">
					<ul>
						{#each persona.tags as tag}
							<li lang={tag.lang} class="chip">
								{tag.content}
							</li>
						{/each}
					</ul>
				</section>
			</div>
		</div>
		<div class="persona-card">
			<PersonaCard {persona} />
		</div>
	</div>
</div>

<style lang="scss">
	.background-black {
		background: linear-gradient(180deg, var(--color-black) 50%, var(--color-background-body) 50%);
	}

	.wrapper {
		color: var(--color-white);
		max-width: 100%;
		padding: 0 var(--outer-spacing);

		.header-row {
			.heading {
				margin: 1rem 0 0.625rem 0;
				display: inline-block;
				line-height: 100%;
			}

			.subheading-details {
				display: flex;
				justify-content: space-between;
				min-height: 8rem;

				.subheading {
					margin: 0;
					color: rgba(var(--color-white-rgb), 0.8);
					font-size: clamp(1.375rem, 3vw + 0.5rem, 1.75rem);
					text-align: center;
					text-align: left;
				}

				.tags {
					ul {
						display: flex;
						flex-wrap: wrap-reverse;

						list-style: none;
						margin: 0;
						gap: 0.625rem;
					}

					.chip {
						display: flex;
						align-items: center;
						color: rgba(var(--color-white-rgb), 0.8);
						background-color: var(--color-black);
						border: 1px solid rgba(var(--color-white-rgb), 0.5);

						border-radius: 2rem;
						height: 1.75rem;
						font-size: 1rem;
						padding: 0.25rem 0.625rem;
						text-align: center;
						margin: 0;
					}
				}
			}
		}
	}

	@media (max-width: 24.25rem) {
		.tags {
			.chip {
				max-width: 13.5rem;
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.background-black {
			background: linear-gradient(180deg, var(--color-black) 70%, var(--color-background-body) 70%);
		}

		.wrapper {
			.header-row {
				.heading {
					text-align: center;
					width: 100%;
				}

				.subheading-details {
					text-align: center;
					flex-direction: column;
					gap: 2.5rem;
					margin-bottom: 4rem;

					.subheading {
						text-align: center;
					}
				}
			}
		}

		.tags {
			ul {
				justify-content: center;
				padding: 0;
			}

			.chip {
				margin: 0.375rem;
			}
		}
	}

	@media (min-width: 59.375rem) {
		.background-black {
			background: var(--color-black);
		}

		.persona-card {
			display: none;
		}

		.wrapper {
			.header-row {
				.subheading-details {
					.tags {
						display: flex;
						align-items: end;

						ul {
							justify-content: right;
						}
					}
				}
			}
		}

		.wrapper {
			padding-inline: var(--outer-spacing);
			margin-inline: auto;
			padding-bottom: 2rem;

			max-width: var(--content-max-width);

			.header-row {
				flex-direction: row;
				padding-top: 1.25rem;
				padding-bottom: 4rem;

				.tags {
					max-width: 25rem;
					justify-content: flex-start;
					align-items: flex-start;
					align-content: flex-start;
					margin-bottom: 0rem;
				}
			}
		}
	}
</style>
