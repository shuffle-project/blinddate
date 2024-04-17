<script lang="ts">
	import type { Persona } from '../interfaces/persona.interfaces';
	import PersonaCard from './PersonaCard.svelte';
	export let persona: Persona;
</script>

<div class="background-black">
	<div class="wrapper">
		<div class="header-row" id="content">
			<div class="heading-section">
				<h1 class="heading" id="persona-name">{persona.name}</h1>
				<p class="subheading">{persona.subheading}</p>
			</div>
			<section aria-label="Inhaltspunkte" class="tags">
				<ul>
					{#each persona.tags as tag}
						<li lang={tag.lang} class="chip">
							{tag.content}
						</li>
					{/each}
				</ul>
			</section>
		</div>
		<div class="persona-card">
			<PersonaCard {persona} />
		</div>
		<div class="general-info">
			<h2 id="about-me" class="main-heading">Über mich</h2>
			<!-- role: presentation not possible -> it's a data table -->
			<!-- https://fae.disability.illinois.edu/rulesets/TABLE_5/ -->
			<!-- https://www.w3.org/WAI/WCAG21/Techniques/failures/F92.html -->
			<!-- Using a description list -->
			<!-- See: https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html -->
			<dl aria-describedby="about-me">
				<dt>Alter</dt>
				<dd>{persona.age + ' Jahre'}</dd>
				<dt>Studium</dt>
				<dd>{persona.study}</dd>
				<dt>Hobbys</dt>
				<dd>{persona.hobbies}</dd>
				<dt>Pronomen</dt>
				<dd lang={persona.id === 'maxi' ? 'en' : 'de'}>{persona.pronouns}</dd>
			</dl>
		</div>
	</div>
</div>

<style lang="scss">
	.background-black {
		background: linear-gradient(
			180deg,
			var(--color-black) 0%,
			var(--color-black) 50%,
			var(--color-background-body) 50%,
			var(--color-background-body) 100%
		);
	}

	.wrapper {
		color: var(--color-white);
		max-width: 100%;
		padding: 0 var(--outer-spacing);

		.header-row {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-block: 2.5rem;

			.heading-section {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 1.25rem;

				.heading {
					margin: 1rem 0 0.625rem 0;
					display: inline-block;
					line-height: 100%;
				}

				.subheading {
					margin: 0;
					color: rgba(var(--color-white-rgb), 0.8);
					font-size: clamp(1.375rem, 3vw + 0.5rem, 1.75rem);
					text-align: center;
				}
			}

			.tags {
				margin-bottom: 1.25rem;

				ul {
					display: flex;
					flex-wrap: wrap;
					list-style: none;
				}

				.chip {
					display: flex;
					align-items: center;
					color: rgba(var(--color-white-rgb), 0.8);
					background-color: var(--color-black);
					border: 1px solid rgba(var(--color-white-rgb), 0.5);

					border-radius: 2rem;
					min-height: 1.75rem;
					font-size: 1rem;
					padding: 0.25rem 0.625rem;
					text-align: center;
				}
			}
		}
		.general-info {
			margin-top: 5rem;
			color: var(--color-black);
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 25rem;
			margin-inline: auto;

			h2 {
				margin: 0;
				padding-top: 1.75rem;
			}

			dl {
				display: grid;
				grid-template-columns: max-content auto;
				font-size: 1.125rem;

				dt {
					grid-column-start: 1;
					font-weight: bold;
					border-inline-end: 1px solid var(--color-black);
					padding-inline-end: 1.25rem;
					text-align: right;
				}

				dd {
					grid-column-start: 2;
					margin-inline-start: 1.25rem;
					&:not(:last-of-type) {
						padding-block-end: 0.83rem;
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

		.tags {
			ul {
				justify-content: right;
			}
			.chip {
				margin: 0.375rem 0 0.375rem 0.625rem;
			}
		}

		.wrapper {
			padding-inline: var(--outer-spacing);
			margin-inline: auto;
			padding-bottom: 2rem;

			max-width: var(--content-max-width);

			.header-row {
				.heading-section {
					align-items: self-start;

					.subheading {
						text-align: initial;
					}
				}
			}

			.general-info {
				margin-left: 25%;
				padding-left: 2.75rem;
				display: block;
				margin-top: 0rem;
				max-width: 100%;

				h2 {
					padding-bottom: 0.625rem;
					color: var(--color-white);
				}

				dl {
					color: rgba(var(--color-white-rgb), 0.8);
					padding-top: 0.625rem;

					dt {
						border-inline-end: 1px solid rgba(var(--color-white-rgb), 0.5);
					}
				}
			}

			.header-row {
				flex-direction: row;
				padding-top: 2.5rem;
				padding-bottom: 4.5rem;

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
