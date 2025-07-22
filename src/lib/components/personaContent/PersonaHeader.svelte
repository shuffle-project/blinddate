<script lang="ts">
	import { page } from '$app/state';
	import type { Persona } from '../../interfaces/persona.interfaces';
	import PersonaCard from './PersonaCard.svelte';

	let { persona }: { persona: Persona } = $props();

	let searchParams = $derived(page.url.hash);

	$effect(() => {
		if (searchParams) {
			const tagId = searchParams.split('#')[1];
			const element = document.getElementById(tagId);

			// So navigating through the table of contents does not highlight headings
			if (element?.tagName === 'H1' || element?.tagName === 'H2') {
				return;
			}

			persona.tags.forEach((tag) => {
				if (tag.id !== tagId) {
					const oldTagElement = document.getElementById(tag.id);
					const oldMark = oldTagElement?.parentElement;

					if (oldMark?.tagName.toLowerCase() === 'mark' && oldTagElement) {
						oldMark.parentNode?.replaceChild(oldTagElement, oldMark);
					}
				}
			});

			if (element) {
				const mark = document.createElement('mark');
				element.parentNode?.replaceChild(mark, element);
				mark.appendChild(element);
			}
		}
	});
</script>

<div class="background-black">
	<div class="wrapper">
		<div class="header-row" id="content">
			<h1 class="heading" id={persona.id}>{persona.name}</h1>

			<div class="subheading-details">
				<p class="subheading">{persona.subheading}</p>

				<ul aria-label="Stichwörter" class="tags">
					{#each persona.tags as tag}
						<li>
							<a lang={tag.lang} class="chip" href="#{tag.id}"> {tag.label}</a>
						</li>
					{/each}
				</ul>
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
					display: flex;
					justify-content: center;

					flex-wrap: wrap;

					list-style: none;
					margin: 0;
					padding: 0;
					gap: 0.625rem;

					.chip {
						display: flex;
						align-items: center;
						background-color: var(--color-black);
						border: 1px solid rgba(var(--color-white-rgb), 0.7);

						border-radius: 2rem;
						height: 1.75rem;
						font-size: 1rem;
						padding: 0.25rem 0.625rem;
						text-align: center;
						margin: 0;

						color: rgba(var(--color-white-rgb), 0.9);
						text-decoration: none;

						&:focus,
						&:hover {
							background-color: var(--color-white);
							color: var(--color-black);
							outline: none;
						}
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
			max-width: var(--content-max-width);
			padding-inline: var(--outer-spacing);
			margin-inline: auto;
			padding-bottom: 2rem;

			.header-row {
				flex-direction: row;
				padding-top: 1.25rem;
				padding-bottom: 4rem;

				.tags {
					max-width: 23rem;
					align-content: flex-end;
					justify-content: flex-end !important;
					margin-bottom: 0rem;
				}
			}
		}
	}
</style>
