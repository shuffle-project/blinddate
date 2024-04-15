<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import UserTest from '$lib/components/UserTest.svelte';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import Footer from '../../lib/components/Footer.svelte';
</script>

<div class="background-black">
	<header>
		<div class="user-test">
			<UserTest />
		</div>

		<div class="row">
			{#if ENVIRONMENT.backLinkToStartpage}
				<a href="{base}/" class="back-to-startpage">
					<Icon svg_color={'white'} img="back">Zurück zur Startseite</Icon>
				</a>
			{:else}
				<div />
			{/if}

			<div class="icons">
				<ShareButton />
			</div>
		</div>

		<hr aria-hidden="true" class="separator" />
	</header>
</div>
<div class="persona">
	<slot />
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

		.user-test {
			margin: 1rem auto;
		}

		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;

			box-sizing: border-box;
		}

		.separator {
			margin: 0;
			width: 100%;
			box-sizing: border-box;
			color: rgba(var(--color-white-rgb), 0.5);
		}
	}

	@media (min-width: 59.375rem) {
		header {
			padding-inline: var(--outer-spacing);
			box-sizing: border-box;
		}
		.row,
		.separator {
			max-width: var(--content-max-width);
		}

		.row {
			padding: 1rem 0;
		}
	}

	@media (max-width: 59.3125rem) {
		.row {
			padding: 1rem;
		}
	}
</style>
