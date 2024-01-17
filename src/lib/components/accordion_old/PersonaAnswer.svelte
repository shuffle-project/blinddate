<script lang="ts">
	import { base } from '$app/paths';

	export let personaId: string;
	export let personaName: string;
</script>

<div class="persona-answer-wrapper">
	<div role="separator" aria-label="Anfang der {personaName} Sprechblase" />
	<img
		class="persona-img"
		src="{base}/personas/{personaId}/{personaId}-explaining-circle.svg"
		aria-hidden="true"
		alt=""
	/>

	<p class="persona-answer">
		<slot />
	</p>
	<div role="separator" aria-label="Ende der {personaName} Sprechblase" />
</div>

<style lang="scss">
	.persona-answer-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.11rem;

		background-color: var(--color-green);

		border-radius: 0.83rem;
		border: 1px solid var(--color-black);

		box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.1);
		padding: 1.66rem 1.11rem 1.11rem;

		.persona-img {
			max-width: clamp(6rem, 30vw + 0.1rem, 10rem);
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
			padding: 1.11rem 1.66rem;
			flex-direction: row;
		}
	}
</style>
