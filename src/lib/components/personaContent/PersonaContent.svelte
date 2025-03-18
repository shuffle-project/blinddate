<script lang="ts">
	import PersonaHeader from '$lib/components/PersonaHeader.svelte';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import type { Snippet } from 'svelte';
	import MetaTags from '../MetaTags.svelte';
	import PersonaCard from '../PersonaCard.svelte';
	import MobileCardWrapper from '../mobileCard/MobileCardWrapper.svelte';

	let { persona, children }: { persona: Persona; children: Snippet } = $props();
</script>

<MetaTags {persona} />

<main>
	<PersonaHeader {persona} />
	<div class="columns-wrapper">
		<div class="card-column">
			<div class="hovering-card">
				<PersonaCard {persona} />
			</div>
		</div>
		<div class="content-column">
			<MobileCardWrapper {persona} />
			<div class="general-info">
				<h2 id="about-me" class="main-heading">Über mich</h2>

				<table aria-labelledby="about-me">
					<tbody>
						<tr>
							<th scope="row">Alter</th>
							<td>{persona.age + ' Jahre'}</td>
						</tr>
						<tr>
							<th scope="row">Hobbys</th>
							<td>{persona.hobbies}</td>
						</tr>
						<tr>
							<th scope="row">Studium</th>
							<td>{persona.study}</td>
						</tr>

						<tr>
							<th scope="row">Pronomen</th>
							<td lang={persona.id === 'maxi' ? 'en' : 'de'}>{persona.pronouns}</td>
						</tr>
					</tbody>
				</table>
			</div>

			{@render children?.()}

			<div class="footer-padding"></div>
		</div>
	</div>
</main>

<style lang="scss">
	.columns-wrapper {
		max-width: 100%;

		.card-column {
			display: none;
		}

		.content-column {
			display: flex;
			flex-direction: column;

			.general-info {
				margin-inline: auto;
				margin-bottom: 2.5rem;
				font-size: 1.125rem;
				max-width: 20rem;
				padding-inline: var(--outer-spacing);

				h2 {
					text-align: center;
				}

				table {
					border-collapse: collapse;

					th {
						text-align: right;
						padding: 0 1rem 0.625rem 0;
						border-right: 1px solid var(--color-black);
					}

					td {
						padding: 0 0 0.625rem 1rem;
						word-wrap: break-word;
						overflow-wrap: break-word;
						overflow-wrap: anywhere;

						-webkit-hyphens: auto;
						-moz-hyphens: auto;
						hyphens: auto;
					}
				}
			}
		}
	}

	@media (min-width: 59.375rem) {
		.footer-padding {
			height: 10rem;
		}
		.columns-wrapper {
			display: flex;

			padding-inline: var(--outer-spacing);

			justify-content: center;

			margin-inline: auto;
			max-width: var(--content-max-width);

			.card-column {
				display: block;
				width: 25%;

				background-image: url('/decorations/path.svg');
				background-repeat: repeat-y;

				.hovering-card {
					position: sticky;
					top: 30vh;
					// transform: translateY(-25%);
				}
			}
			.content-column {
				width: 77%;

				.general-info {
					margin-inline: 3.25rem;
					max-width: 40rem;

					h2 {
						text-align: left;
					}
				}
			}
		}
	}
</style>
