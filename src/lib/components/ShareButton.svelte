<script lang="ts">
	import { backIn, backOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import Icon from './Icon.svelte';

	let visible = false;

	// TODO Persona name is hardcoded, make it dynamic
	const data = {
		title: 'BlindDate',
		text: 'Lerne Gabriel kennen und gib Feedback:',
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
		// TODO Custom persona text in data

		if (navigator.share) {
			navigator.share(data);
		} else {
			navigator.clipboard.writeText(data.url);
			displaySharetext();
		}
	};
</script>

<div>
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
		<Icon alt="Seite teilen" size="smedium" img="share" svg_color="white" />
		<div class="btn-label" aria-hidden="true">Seite teilen</div>
	</button>
</div>

<style lang="scss">
	.sharebutton {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		background-color: transparent;
		border: none;
		color: var(--color-white);
		font-size: medium;
		border-radius: 1rem;
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
		font-weight: bold;
		font-size: 0.88rem;
		margin-top: -3rem;
		margin-left: -1rem;
		font-size: medium;
		padding: 1rem 0.6rem;
		color: var(--color-black);
		background-image: url('/decorations/share-rectangle.svg');
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: bottom;
	}

	@media (max-width: 59.3125rem) {
		.sharebutton {
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid transparent;
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
			margin-top: 2.5rem;
			margin-left: -6.5rem;
			z-index: 2;
			background-image: url('/decorations/share-rectangle-mobile.svg');
			background-position: center 0.45rem;
		}
	}
</style>
