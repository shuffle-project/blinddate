<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount, type Snippet } from 'svelte';
	import Icon from '../../lib/components/Icon.svelte';

	let { children }: { children: Snippet } = $props();

	// let persona: 'gabriel' | 'hannah' | null = $state(null);
	let link: string | undefined = $state();
	let personaName: string = $state('');

	onMount(() => {
		if (page.url.pathname.includes('gabriel')) {
			personaName = 'Gabriel';
			link = resolve('/personas/gabriel/');
		}

		if (page.url.pathname.includes('hannah')) {
			personaName = 'Hannah';
			link = resolve('/personas/hannah/');
		}

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
		{#if link && personaName}
			<a class="back-link" href={link} autofocus>
				<Icon svg_color={'white'} img="back">Zurück zu {personaName}</Icon>
			</a>
		{/if}

		<div class="logo">
			<div class="img">
				<Icon size="parent" alt="BlindDate Logo" img="logo" />
			</div>
		</div>
	</header>

	<main class="game-wrapper">
		{@render children?.()}
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
		margin-left: 0.625rem;
		border-radius: 1rem;
		padding: 0.25rem 0.375rem;
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
