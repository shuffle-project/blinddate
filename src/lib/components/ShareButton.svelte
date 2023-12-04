<script lang="ts">
	import { page } from '$app/stores';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { backIn, backOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import Icon from './Icon.svelte';

	const personas = ENVIRONMENT.accessiblePersonas;

	let visible = false;
	let currentSite = 'BlindDate'; // the starting page
	let text = '';

	$: {
		let url = $page.url.pathname;
		personas.forEach((persona: Persona) => {
			if (url.includes(persona.id)) currentSite = persona.name;
		});
		text = `Lerne ${currentSite} und barrierefreie (Hochschul) Lehre kennen:`;
	}

	const data = {
		title: 'BlindDate',
		text: '',
		url: ''
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.code === 'Escape' && visible) visible = false;
	};

	const handleBlur = () => {
		if (visible) visible = false;
	};

	const displaySharetext = () => {
		visible = !visible;
	};

	const onClick = () => {
		data.url = document.URL;
		data.text = text;

		if (navigator.share) {
			navigator.share(data);
		} else {
			navigator.clipboard.writeText(data.url);
			displaySharetext();
		}
	};
</script>

<div class="wrapper">
	{#if visible}
		<p
			in:scale={{ duration: 200, easing: backOut }}
			out:scale={{ duration: 200, easing: backIn }}
			class="sharetext-container"
			aria-live="polite"
		>
			Webadresse kopiert
		</p>
	{/if}
	<button on:keyup={handleKeyPress} class="sharebutton" on:click={onClick} on:blur={handleBlur}>
		<Icon alt="Seite teilen" size="small" img="share" svg_color="white" />
		<div class="btn-label" aria-hidden="true">Seite teilen</div>
	</button>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}
	.sharebutton {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		background-color: transparent;
		border: none;
		color: var(--color-white);
		border-radius: 1rem;
		font-size: 0.88rem;
		padding: 0.2rem 0.4rem;
		cursor: pointer;

		&:hover,
		&:focus {
			outline: 2px solid var(--color-white);
			outline-offset: 2px;
		}
	}

	.sharetext-container {
		position: absolute;
		inset: 0 0 -3.33rem -2.55rem;

		font-weight: bold;
		font-size: 0.88rem;

		min-width: 9rem;
		min-height: 2rem;

		background-image: url('/decorations/share-rectangle-mobile.svg');

		display: flex;
		align-items: end;
		justify-content: center;
		padding: 0 0.4rem 0.2rem 0.4rem;

		background-size: 100%;
		background-repeat: no-repeat;
		background-position: bottom;
	}

	@media (max-width: 59.3125rem) {
		.sharebutton {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			height: 2.77rem;
			width: 2.77rem;
			margin: 0;
			padding: 0;

			.btn-label {
				display: none;
			}
		}
		.sharetext-container {
			inset: 0 0 -3.33rem -6.65rem;
		}
	}
</style>
