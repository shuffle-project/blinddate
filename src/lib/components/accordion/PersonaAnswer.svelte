<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';

	export let persona: Persona;

	let personaImg = `${base}/personas/${persona.id}/${persona.id}`;

	switch (persona.id) {
		case 'kilian':
			personaImg = personaImg + '-explaining.svg';
			break;
		default:
			personaImg = personaImg + '-explaining-circle.svg';
	}
</script>

<div class="persona-answer-wrapper">
	<div role="separator" aria-label="Anfang der {persona.name} Sprechblase" />
	<img class="persona-img" src={personaImg} aria-hidden="true" alt="" />

	<p class="persona-answer">
		<slot />
	</p>
	<div role="separator" aria-label="Ende der {persona.name} Sprechblase" />
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
