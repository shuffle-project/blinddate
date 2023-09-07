<script>
	import { base } from '$app/paths';
	import { onDestroy, onMount } from 'svelte';
	import Icon from '../../lib/components/Icon.svelte';

	onMount(() => {
		window.document.body.classList.toggle('full-height');
		window.document.documentElement.classList.toggle('full-height');
	});

	onDestroy(() => {
		window.document.body.classList.toggle('full-height');
		window.document.documentElement.classList.toggle('full-height');
	});
</script>

<div class="wrapper">
	<header>
		<a class="back-link" href="{base}/personas/gabriel/#simulation-link-gabriel" autofocus>
			<Icon svg_color={'white'} img="back">Zurück zu Gabriel</Icon>
		</a>
		<div class="logo">
			<div class="img">
				<Icon size="parent" alt="BlindDate Logo" img="logo" />
			</div>
			<p>BlindDate</p>
		</div>
	</header>

	<div class="game-wrapper">
		<slot />
	</div>
</div>

<style lang="scss">
	header {
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: var(--content-max-width);
		margin-inline: auto;
		// justify-content: space-between;
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
			height: 3rem;
			width: 3rem;
		}

		p {
			color: var(--color-white);
			font-weight: bold;
			font-size: 1.22rem;
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
