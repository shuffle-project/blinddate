<script lang="ts">
	import { base } from '$app/paths';
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import type { Snippet } from 'svelte';
	import FriendCard from './FriendCard.svelte';
	import FriendCardMobile from './FriendCardMobile.svelte';
	interface Props {
		friendPersona: FriendPersona;
		hidePersonaCard?: boolean;
		children?: Snippet;
	}

	let { friendPersona, hidePersonaCard = false, children }: Props = $props();
</script>

<div
	class="container"
	class:with-mobile-card={!hidePersonaCard}
	role="region"
	aria-label="{friendPersona.name} Sprechblase"
>
	{#if !hidePersonaCard}
		<div class="card">
			<FriendCard {friendPersona} />
		</div>
	{/if}
	<div class="speech-bubble">
		{#if !hidePersonaCard}
			<div class="mobile-card">
				<FriendCardMobile {friendPersona} />
			</div>
		{/if}
		<p class="text" class:with-card={!hidePersonaCard}>
			{@render children?.()}
		</p>
		<div class="decorative-outline">
			<div aria-hidden="true" class="speech-bubble-indicator">
				<img src="{base}/decorations/friend-bubble-indicator.svg" alt="" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		position: relative;
		margin-bottom: 1.25rem;

		&.with-mobile-card {
			margin-top: 3.125rem;
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
		top: -1.875rem;
	}

	.speech-bubble {
		max-width: 35rem;

		position: relative;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;

		.text {
			margin: 0;
			position: relative;
			z-index: 1;
			padding: 1.25rem 1.375rem;
			font-family: var(--font-persona);
			line-height: 150%;
			color: var(--color-black);
			border: 1px solid var(--color-black);
			background-color: var(--color-orange);
			border-radius: 1.25rem;

			&.with-card {
				padding-top: 1.875rem;
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
			left: 11.5rem;
			right: -1rem;
			bottom: 1rem;

			border: 1px solid var(--color-black);
			border-radius: 1.25rem;
			background-color: var(--color-background-body);

			.speech-bubble-indicator {
				position: absolute;
				top: 1rem;
				right: -1.125rem;
			}
		}

		.speech-bubble {
			padding-left: 10.625rem;
			padding-right: 0;
			padding-top: 1rem;
			margin: 0;
			margin-top: 1rem;

			.text {
				&.with-card {
					padding: 1.25rem 1.375rem;
				}
			}
		}
	}

	@media (max-width: 28.75rem) {
		.container {
			.speech-bubble {
				.text {
					padding: 1.625rem 1rem 1rem;
				}
			}
		}
	}
</style>
