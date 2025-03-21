<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	interface Props {
		persona: Persona;
		children?: import('svelte').Snippet;
	}

	let { persona, children }: Props = $props();

	let personaImg = $state(`${base}/personas/${persona.id}/${persona.id}`);

	switch (persona.id) {
		case 'kilian':
			personaImg += '-explaining.svg';
			break;
		case 'aleksandr':
			personaImg += '-neutral.svg';
			break;
		case 'faiza':
			personaImg += '-explaining-circle.svg';
			break;
		default:
			personaImg += '-explaining-circle.svg';
	}
</script>

<div class="persona-answer-wrapper" role="region" aria-label="{persona.name} Sprechblase">
	<img class="persona-img" src={personaImg} aria-hidden="true" alt="" />

	<p class="persona-answer">
		{@render children?.()}
	</p>
</div>

<style lang="scss">
	.persona-answer-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		background-color: var(--color-green);

		border-radius: 1rem;
		border: 1px solid var(--color-black);

		box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.1);
		padding: 1rem;

		.persona-img {
			max-width: clamp(6rem, 30vw + 0.1rem, 9rem);
			object-fit: contain;
		}

		.persona-answer {
			font-family: var(--font-persona);

			&::after {
				content: close-quote;
			}

			&::before {
				content: open-quote;
			}
		}
	}

	@media (min-width: 59.375rem) {
		.persona-answer-wrapper {
			flex-direction: row;
		}
	}
</style>
