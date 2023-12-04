<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Icon from '../../lib/components/Icon.svelte';

	let persona: 'gabriel' | 'hannah' | null = null;
	let personaName: string = '';

	if ($page.url.pathname.includes('gabriel')) persona = 'gabriel';
	if ($page.url.pathname.includes('hannah')) persona = 'hannah';

	if (persona !== null) {
		personaName = persona.charAt(0).toUpperCase() + persona.slice(1, persona.length);
	}

	onMount(() => {
		window.document.body.classList.toggle('full-height');
		window.document.documentElement.classList.toggle('full-height');

		return () => {
			window.document.body.classList.toggle('full-height');
			window.document.documentElement.classList.toggle('full-height');
		};
	});
</script>

<svelte:head>
	<title>{personaName} Simulationsspiel - BlindDate</title>
</svelte:head>

<div class="wrapper">
	<header>
		<a class="back-link" href="{base}/personas/{persona}/#simulation-link-{persona}" autofocus>
			<Icon svg_color={'white'} img="back">Zurück zu {personaName}</Icon>
		</a>
		<div class="logo">
			<div class="img">
				<Icon size="parent" alt="BlindDate Logo" img="logo" />
			</div>
		</div>
	</header>

	<main class="game-wrapper">
		<slot />
	</main>
</div>

<style lang="scss">
	header {
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: var(--content-max-width);
		margin-inline: auto;
	}

	.back-link {
		margin-left: 0.6rem;
		border-radius: 1rem;
		padding: 0.2rem 0.4rem;
		color: var(--color-white);
		text-decoration: none;
		display: flex;
		cursor: pointer;

		&:hover,
		&:focus {
			outline: 2px solid var(--color-white);
			outline-offset: 2px;
		}
	}
	.logo {
		margin-right: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;

		.img {
			height: 2.5rem;
			width: 2.5rem;
		}
	}

	.wrapper {
		width: 100%;
		background: linear-gradient(
			var(--color-black) 0%,
			var(--color-black) 70%,
			var(--color-background-body) 70%,
			var(--color-background-body) 100%
		);
	}

	.game-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
