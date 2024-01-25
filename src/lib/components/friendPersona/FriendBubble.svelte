<script lang="ts">
	import { base } from '$app/paths';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import FriendPersonaCard from './FriendPersonaCard.svelte';
	import MobileFriendCard from './MobileFriendCard.svelte';
	export let friendPersona: FriendPersona;
	export let hidePersonaCard = false;
</script>

<div role="separator" aria-label="Anfang der {friendPersona.name} Sprechblase" />
<div class="container" class:with-mobile-card={!hidePersonaCard}>
	{#if !hidePersonaCard}
		<div class="card">
			<FriendPersonaCard {friendPersona} />
		</div>
	{/if}
	<div class="speech-bubble">
		{#if !hidePersonaCard}
			<div class="mobile-card">
				<MobileFriendCard {friendPersona} />
			</div>
		{/if}
		<p class="text" class:with-card={!hidePersonaCard}>
			<slot />
		</p>
		<div class="decorative-outline">
			<div aria-hidden="true" class="speech-bubble-indicator">
				<img src="{base}/decorations/friend-bubble-indicator.svg" alt="" />
			</div>
		</div>
	</div>
</div>
<div role="separator" aria-label="Ende der {friendPersona.name} Sprechblase" />

<style lang="scss">
	.container {
		display: flex;
		position: relative;
		margin-bottom: 1rem;

		&.with-mobile-card {
			margin-top: 3rem;
		}
	}

	.card,
	.decorative-outline {
		display: none;
	}

	.mobile-card {
		position: absolute;
		z-index: 2;
		right: 2.5rem;
		top: -1.7rem;
	}

	.speech-bubble {
		max-width: 31.04rem;

		position: relative;

		padding-left: 1.33rem;
		padding-right: 1.33rem;
		margin-inline: auto;

		.text {
			margin: 0;
			position: relative;
			z-index: 1;
			padding: 1.11rem 1.66rem;
			font-family: var(--font-persona);
			line-height: 150%;
			color: var(--color-black);
			border: 1px solid var(--color-black);
			background-color: var(--color-orange);
			border-radius: 0.85rem;
			box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.1);

			&.with-card {
				padding: 2rem 1.66rem 1.11rem 1.66rem;
			}

			&::before {
				content: open-quote;
			}

			&::after {
				content: close-quote;
			}
		}
	}

	@media (min-width: 83.75rem) {
		.container {
			&.with-mobile-card {
				margin-top: 1rem;
			}
		}
		.mobile-card {
			display: none;
		}
		.card {
			display: block;
			position: absolute;
			right: 0;
		}

		.decorative-outline {
			display: block;
			position: absolute;
			top: 0;
			left: 10.5rem;
			right: -0.85rem;
			bottom: 0.85rem;

			border: 1px solid var(--color-black);
			border-radius: 0.85rem;
			background-color: var(--color-background-body);

			.speech-bubble-indicator {
				position: absolute;
				top: 1rem;
				right: -1rem;
			}
		}

		.speech-bubble {
			padding-left: 9.375rem;
			padding-right: 0;
			padding-top: 0.85rem;
			margin: 0;
			margin-top: 1rem;

			.text {
				padding: 1.11rem 1.66rem;

				&.with-card {
					padding: 1.11rem 1.66rem;
				}
			}
		}
	}
</style>
