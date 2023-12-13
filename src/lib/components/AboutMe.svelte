<script lang="ts">
	import type { Persona } from '../interfaces/persona.interfaces';
	import Card from './Card.svelte';
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
			<Card {persona} />
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
		padding: 0 1.33rem;

		.header-row {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-block: 2.33rem;

			.heading-section {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 1.11rem;

				.heading {
					margin: 1rem 0 0.55rem 0;
					display: inline-block;
					line-height: 100%;
				}

				.subheading {
					margin: 0;
					color: rgba(var(--color-white-rgb), 0.75);
					font-size: clamp(1.22rem, 3vw + 0.5rem, 1.5rem);
					text-align: center;
				}
			}

			.tags {
				margin-bottom: 1rem;
				ul {
					display: flex;
					flex-wrap: wrap;
					list-style: none;
				}

				.chip {
					display: flex;
					align-items: center;
					color: rgba(var(--color-white-rgb), 0.75);
					background-color: var(--color-black);
					border: 1px solid rgba(var(--color-white-rgb), 0.5);

					border-radius: 2.77rem;
					min-height: 1.66rem;
					font-size: 0.88rem;
					padding: 0.22rem 0.66rem;
					text-align: center;
				}
			}
		}
		.general-info {
			margin-top: 3.88rem;
			color: var(--color-black);
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 22.2rem;
			margin-inline: auto;

			h2 {
				margin: 0;
				padding-top: 1.55rem;
			}

			dl {
				display: grid;
				grid-template-columns: max-content auto;

				dt {
					grid-column-start: 1;
					font-weight: bold;
					border-inline-end: 1px solid var(--color-black);
					padding-inline-end: 1.22rem;
					text-align: right;
				}

				dd {
					grid-column-start: 2;
					font-weight: 300;
					margin-inline-start: 1.22rem;
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
				max-width: 12rem;
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
				margin: 0.33rem;
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
				margin: 0.33rem 0 0.33rem 0.66rem;
			}
		}

		.wrapper {
			padding-left: 2.77rem;
			padding-right: 2.77rem;
			margin-left: auto;
			margin-right: auto;
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
				color: var(--color-white);
				margin-left: 22.79635%;
				padding-left: 3.33rem;
				display: block;
				margin-top: 0rem;
				max-width: 100%;

				h2 {
					padding-bottom: 0.66rem;
				}

				dl {
					padding-top: 0.66rem;

					dt {
						border-inline-end: 1px solid rgba(var(--color-white-rgb), 0.5);
					}
				}
			}

			.header-row {
				flex-direction: row;

				.tags {
					max-width: 23rem;
					justify-content: flex-start;
					align-items: flex-start;
					align-content: flex-start;
					margin-bottom: 0rem;
				}
			}
		}
	}
</style>
