<script lang="ts">
	import { base } from '$app/paths';
	import Footer from '$lib/components/Footer.svelte';
	import { ENVIRONMENT } from '$lib/constants/environment';
</script>

<div class="background-black">
	<header>
		<div class="row">
			{#if ENVIRONMENT.backLinkToStartpage}
				<a href="{base}/" class="back-to-startpage">
					<img src="{base}/icons/logo.svg" alt="" aria-hidden="true" />
					<span>Zur Startseite</span>
				</a>
			{:else}
				<div />
			{/if}

			<div />
		</div>
	</header>
</div>

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	.background-black {
		background-color: var(--color-black);
		width: 100%;
	}

	main {
		padding-bottom: 3.125rem;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;

		.row {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
		}
	}

	@media (min-width: 59.375rem) {
		header {
			padding-inline: var(--outer-spacing);
			box-sizing: border-box;
		}
		.row {
			max-width: var(--content-max-width);
		}

		.row {
			padding: 1rem 0;
		}
	}

	@media (max-width: 59.3125rem) {
		.row {
			padding: 1rem var(--outer-spacing);
		}
	}
</style>
