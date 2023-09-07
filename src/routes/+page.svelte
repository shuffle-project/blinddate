<script lang="ts">
	import { base } from '$app/paths';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import LectureRoom from '$lib/components/lectureRoom/index.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BlindDate</title>
</svelte:head>

<header>
	<div class="mobile">
		<div class="user-test"></div>

		<div class="first-row">
			<a href="{base}/" class="logo">
				<img src="{base}/icons/logo.svg" alt="Blind Date Logo, zur Startseite" />
				<span aria-hidden="true">BlindDate</span>
			</a>

			<!-- <ShareButton /> -->
		</div>
		<!-- <hr aria-hidden="true" class="separator" /> -->
		<div class="second-row">
			<div class="space" />
			<SearchBar />
			<ShareButton />
		</div>

		<hr aria-hidden="true" class="separator" />
	</div>

	<div class="desktop">
		<div class="first-row">
			<a href="{base}/" class="logo">
				<img src="{base}/icons/logo.svg" alt="Blind Date Logo, zur Startseite" />
				<span aria-hidden="true">BlindDate</span>
			</a>

			<div class="searchbar">
				<SearchBar />
			</div>

			<ShareButton />
		</div>

		<hr aria-hidden="true" class="separator" />
	</div>
</header>

<main class="content" id="content">
	<h1 class="responsive">Studierende kennenlernen</h1>
	<LectureRoom />
</main>

<div class="spacer" />

<Footer />

<style lang="scss">
	.content {
		background-color: var(--color-black);
		padding-top: 4rem;
	}
	h1 {
		color: var(--color-white);

		margin: 0;
		padding-bottom: 2rem;
		padding-inline: 1.33rem;

		max-width: var(--content-max-width);
		margin-inline: auto;
		text-align: center;
	}

	header {
		background-color: var(--color-black);
	}

	.separator {
		margin-top: 0.22rem;
		margin: 0;
		color: rgba(var(--color-white-rgb), 0.5);
	}

	.logo {
		color: var(--color-white);
		display: flex;
		align-items: center;
		gap: 0.55rem;

		font-size: 1.11rem;
		font-weight: bold;
		text-decoration: none;
	}

	@media (min-width: 59.375rem) {
		h1 {
			text-align: left;
			padding-bottom: 1rem;
		}

		.mobile {
			display: none;
		}

		.desktop {
			padding-inline: 1.33rem;
			margin-inline: auto;
			max-width: var(--content-max-width);

			.first-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 1.33rem;
				padding-bottom: 1rem;
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.desktop {
			display: none;
		}

		.mobile {
			.first-row {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 1.33rem 1.33rem 0 1.33rem;
			}

			.second-row {
				display: flex;
				justify-content: space-between;
				gap: 0.55rem;

				padding: 1.33rem 1rem;

				.space {
					min-width: 2.77rem;
					min-height: 2.77rem;
				}
			}
		}
	}

	@media (max-width: 32.75rem) {
		.mobile {
			.second-row {
				padding: 1.33rem 0.55rem;
			}
		}
	}
</style>
