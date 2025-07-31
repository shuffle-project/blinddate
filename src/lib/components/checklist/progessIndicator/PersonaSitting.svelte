<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import Sun from './Sun.svelte';

	interface Props {
		position: 'desktop' | 'mobile';
		itemAdded?: boolean;
		persona: Persona;
	}

	let { position, itemAdded = false, persona }: Props = $props();
</script>

<li class="human human--{position}">
	<div class="img-container" class:itemAdded>
		<img
			src="{base}/personas/{persona.id}/{persona.id}-sitting.svg"
			alt=""
			width="200"
			height="220"
			aria-hidden="true"
			loading="lazy"
		/>
	</div>
	<Sun {position} />
</li>

<style lang="scss">
	.human {
		&--desktop {
			position: relative;

			.img-container {
				position: relative;
				z-index: 40;

				img {
					position: absolute;
					top: -8.5rem;
					left: -4rem;
				}

				&.itemAdded {
					animation-name: followThrough;
					animation-duration: 800ms;
					animation-delay: 50ms;
				}

				@keyframes followThrough {
					0% {
						transform: translateY(0rem) rotate(0deg);
					}
					50% {
						transform: translateY(-1rem) rotate(2deg);
					}
					100% {
						transform: translateY(0rem) rotate(0deg);
					}
				}
			}
		}

		&--mobile {
			position: absolute;
			right: 0.75rem;
			bottom: 3.625rem;
			z-index: 5;

			.img-container {
				position: relative;
				width: 100px;
				height: 100px;
				z-index: 40;

				img {
					position: absolute;
					top: 0;
					left: 0;
					width: clamp(100%, 120%, 150%);
					height: clamp(100%, 120%, 150%);
					object-fit: contain;
					transform: translateX(20%) translateY(40%);
				}
			}
		}
	}
</style>
