<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { ENVIRONMENT } from '$lib/constants/environment';

	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';

	const personas = ENVIRONMENT.accessiblePersonas;

	let previousPersona: undefined | Persona = $state();
	let nextPersona: undefined | Persona = $state();

	onMount(() => {
		const pathname = page.url.pathname;
		const currentPersonaIndex = personas.findIndex((persona) => pathname.includes(persona.id));

		if (currentPersonaIndex === 0) {
			previousPersona = personas[personas.length - 1];
			nextPersona = personas[currentPersonaIndex + 1];
		} else if (currentPersonaIndex === personas.length - 1) {
			previousPersona = personas[currentPersonaIndex - 1];
			nextPersona = personas[0];
		} else {
			previousPersona = personas[currentPersonaIndex - 1];
			nextPersona = personas[currentPersonaIndex + 1];
		}
	});
</script>

<div class="wrapper">
	<div class="other-personas">
		<a href="{base}/personas/{previousPersona?.id}" data-sveltekit-preload-data="hover"
			>{previousPersona?.name}</a
		>
		<a href="{base}/personas/{nextPersona?.id}" data-sveltekit-preload-data="hover"
			>{nextPersona?.name}</a
		>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;

		.other-personas {
			max-width: 15.625rem;

			box-sizing: border-box;
			width: 100%;
			margin-top: 2rem;

			transition: margin-top 0.3s ease-in-out;

			display: flex;
			justify-content: space-between;

			a {
				text-decoration: none;
				flex-grow: 1;

				color: var(--color-black);
				background-color: var(--color-white);
				border: 1px solid var(--color-lavender);
				border-radius: 2rem;

				font-size: 1rem;
				box-shadow: 0px 2px 4px rgba(var(--color-black-rgb), 0.15);
				text-align: center;
				padding: 0.25rem 0;
				max-width: 6.375rem;
				min-height: 1.25rem;

				&:hover,
				&:focus {
					outline: 2px solid var(--color-blue);
				}
			}
		}
	}

	@media (min-width: 59.375rem) and (max-width: 73.125rem) {
		.wrapper {
			.other-personas {
				margin-top: 1rem;
			}
		}
	}
</style>
