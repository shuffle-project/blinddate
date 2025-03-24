<script lang="ts">
	import { page } from '$app/state';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { onMount } from 'svelte';
	import { backIn, backOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import Icon from './Icon.svelte';

	const personas = ENVIRONMENT.accessiblePersonas;

	let visible = $state(false);
	let currentSite = $state('BlindDate'); // the starting page
	let text = $state('');

	onMount(() => {
		let url = page.url.pathname;
		personas.forEach((persona: Persona) => {
			if (url.includes(persona.id)) currentSite = persona.name;
		});
		text = `Lerne ${currentSite} und barrierefreie (Hochschul) Lehre kennen:`;
	});

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
	<div aria-live="polite">
		{#if visible}
			<p
				in:scale={{ duration: 200, easing: backOut }}
				out:scale={{ duration: 200, easing: backIn }}
				class="sharetext-container"
			>
				Webadresse kopiert
			</p>
		{/if}
	</div>
	<button onkeyup={handleKeyPress} class="sharebutton" onclick={onClick} onblur={handleBlur}>
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
		gap: 0.625rem;
		background-color: transparent;
		border: none;
		color: var(--color-white);
		font-family: var(--font-sans-serif);
		border-radius: 1rem;
		font-size: 1rem;
		padding: 0.25rem 0.375rem;
		cursor: pointer;

		&:hover,
		&:focus {
			outline: 2px solid var(--color-white);
			outline-offset: 2px;
		}
	}

	.sharetext-container {
		position: absolute;
		inset: 0 0 -3.875rem -3rem;

		font-weight: bold;
		font-size: 1rem;

		min-width: 10rem;
		min-height: 2.5rem;

		background-image: url('/decorations/share-rectangle-mobile.svg');

		display: flex;
		align-items: end;
		justify-content: center;
		padding: 0 0.375rem 0.25rem 0.375rem;

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
			height: 2.875rem;
			width: 2.875rem;
			margin: 0;
			padding: 0;

			.btn-label {
				display: none;
			}
		}
		.sharetext-container {
			inset: 0 0 -4rem -7.375rem;
		}
	}
</style>
