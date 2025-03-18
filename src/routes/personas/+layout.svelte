<script lang="ts">
	import { base } from '$app/paths';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import Footer from '../../lib/components/Footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="background-black">
	<header>
		<div class="row">
			{#if ENVIRONMENT.backLinkToStartpage}
				<a href="{base}/#lecture-room" class="back-to-startpage">
					<img src="{base}/icons/logo.svg" alt="" aria-hidden="true" />
					<span>Zur Startseite</span>
				</a>
			{:else}
				<div></div>
			{/if}

			<div class="icons">
				<ShareButton />
			</div>
		</div>
	</header>
</div>
<div class="persona">
	{@render children?.()}
</div>

<Footer />

<style lang="scss">
	.background-black {
		background-color: var(--color-black);
		width: 100%;
	}
	header {
		display: flex;
		flex-direction: column;
		align-items: center;

		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;

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
			padding: 1.625rem 0;
		}
	}

	@media (max-width: 59.3125rem) {
		.row {
			padding: 1.625rem 1rem;
		}
	}
</style>
