<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Icon from '../../lib/components/Icon.svelte';
</script>

<div class="wrapper">
	<div class="header">
		<button on:click={() => history.back()}>
			<Icon svg_color="white" img="back">Zurück</Icon>
		</button>
		<div class="logo">
			<div class="img">
				<Icon size="parent" alt="BlindDate Logo" img="logo" />
			</div>
			<p>BlindDate</p>
		</div>
	</div>

	<div class="content" id="content">
		<slot />
	</div>
</div>

<Footer />

<style lang="scss">
	.wrapper {
		padding-top: 1rem;
		padding-bottom: 2rem;
		height: 100%;
		background: linear-gradient(
			var(--color-black) 0%,
			var(--color-black) 40%,
			var(--color-background-body) 40%,
			var(--color-background-body) 100%
		);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-inline-size: min(90vw, 44.4rem);
		margin-bottom: 1rem;

		button {
			color: var(--color-white);
			background-color: var(--color-black);
			text-decoration: none;
			cursor: pointer;

			padding: 0.2rem 0.4rem;

			border-radius: 1em;
			border: none;

			&:focus,
			&:hover {
				outline: 2px solid var(--color-white);
				outline-offset: 2px;
			}
		}
	}

	.logo {
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
			margin: 0;
		}
	}

	.content {
		background-color: var(--color-white);
		border-radius: 1rem;
		padding: 0 max(2.5vw, 1rem);
		box-sizing: border-box;
		max-inline-size: min(90vw, 44.4rem);
		max-block-size: min(80vh, 100%);
		max-block-size: min(80dvb, 100%);
		overflow: hidden;
		box-shadow: 0 0 2rem rgba(var(--color-black-rgb), 0.2);
		margin-inline: auto;
	}
</style>
