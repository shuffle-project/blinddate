<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';
	import InnerCardMobile from './InnerCardMobile.svelte';
	export let persona: Persona;
	let mobileCardScrolling = true;
	let mobileCard: HTMLElement;
	let mobileCardIsSticky = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				mobileCardIsSticky = entry.intersectionRatio < 1;
			},
			{ threshold: [1] }
		);

		if (mobileCard) observer.observe(mobileCard);
	});

	function toggleMobileCardScrolling() {
		mobileCardScrolling = !mobileCardScrolling;
	}

	function deactivateMobileCardScrolling() {
		mobileCardScrolling = false;
	}
</script>

<div bind:this={mobileCard} class="mobile-card" class:sticky={mobileCardScrolling}>
	<InnerCardMobile
		on:deactivateScrolling={deactivateMobileCardScrolling}
		{mobileCardIsSticky}
		{persona}
	/>
</div>

<div class="scrolling-note">
	<div class="socket" />
	<input
		type="checkbox"
		class="checkbox"
		id="scroll"
		bind:checked={mobileCardScrolling}
		on:click={toggleMobileCardScrolling}
	/>
	<label for="scroll">
		<span aria-hidden="true">Komponente scrollt mit</span>
		<span class="sr-only">Komponente scrollt mit, für Screenreader Nutzende nicht empfohlen</span>
	</label>
</div>

<style lang="scss">
	.mobile-card {
		margin-inline: auto;
		z-index: 15;
		padding-top: 0.625rem;
		margin-top: 4rem;
		width: 100%;

		&.sticky {
			position: sticky;

			// necessary for the intersection observer to work
			top: -1px;
			padding-top: 0.625rem;
		}
	}

	.scrolling-note {
		position: relative;
		margin-inline: auto;
		display: flex;
		gap: 1rem;

		display: flex;
		align-items: center;

		transform: translateY(-1.5rem);
		margin-bottom: 1.25rem;

		padding: 2rem 1.375rem 1rem 1.375rem;

		border: 1px solid var(--color-black);
		border-radius: 1rem;

		label {
			cursor: pointer;
		}

		.checkbox {
			-webkit-appearance: none;
			appearance: none;
			background-color: var(--color-white);

			margin: 0;

			height: 1.375rem;
			width: 1.375rem;
			aspect-ratio: 1;

			border-radius: 0.375rem;
			border: 2px solid var(--color-black);

			cursor: pointer;

			display: grid;
			place-content: center;

			&:checked:before {
				content: '';
				width: 0.8rem;
				height: 0.8rem;
				box-shadow: inset 1rem 1rem var(--color-white);

				transform-origin: bottom left;
				clip-path: polygon(13% 50%, 5% 65%, 45% 100%, 100% 10%, 83% 0%, 40% 75%);
			}

			&:checked {
				background-color: var(--color-blue);
				border: 2px solid var(--color-blue);
			}

			&:focus,
			&:hover {
				outline: 3px solid var(--color-blue);
				outline-offset: 2px;
			}
		}

		.socket {
			height: 2rem;
			width: 10rem;

			border-radius: 2rem;
			background-color: var(--color-black);

			position: absolute;
			top: -1rem;
			left: 0;
			right: 0;
			margin-inline: auto;
		}
	}

	@media (min-width: 59.375rem) {
		.mobile-card,
		.scrolling-note {
			display: none;
		}
	}
</style>
