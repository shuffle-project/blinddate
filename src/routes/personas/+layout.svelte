<script lang="ts">
	import { base } from '$app/paths';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import Skiplink from '$lib/components/Skiplink.svelte';
	import UserTest from '$lib/components/UserTest.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Icon from '../../lib/components/Icon.svelte';
</script>

<Skiplink />

<div class="background-black">
	<header>
		<div class="mobile">
			<div class="row">
				<a class="back-link icons" href="{base}/" aria-label="Zurück zur Hauptseite">
					<Icon svg_color={'white'} img="back" />
				</a>
				<!-- <SearchBar /> -->
				<!-- <div class="searchbar"> -->
				<!-- usertest -->
				<div class="user-test">
					<UserTest />
				</div>

				<div class="icons">
					<ShareButton />
				</div>
			</div>

			<hr aria-hidden="true" class="separator" />
		</div>

		<div class="desktop">
			<div class="first-row">
				<!-- <div class="searchbar"> -->
				<!-- usertest -->
				<div class="user-test">
					<!-- <SearchBar /> -->
					<UserTest />
				</div>

				<a href="{base}/" class="logo">
					<img src="{base}/icons/logo.svg" alt="Blind Date Logo, zurück zur Startseite" />
				</a>
			</div>
			<div class="second-row">
				<a href="{base}/" class="back-link">
					<Icon svg_color={'white'} img="back">Zurück zur Hauptseite</Icon>
				</a>

				<ShareButton />
			</div>
			<hr aria-hidden="true" class="separator" />
		</div>
	</header>
</div>
<div class="persona">
	<slot />
</div>

<Footer />

<style lang="scss">
	.user-test {
		margin-inline: auto;
	}

	.background-black {
		background-color: var(--color-black);
	}

	.back-link {
		border: 2px solid transparent;
		border-radius: 0.33rem;
		outline: none;
		display: flex;

		&:hover,
		&:focus {
			cursor: pointer;
			border: 2px solid var(--color-white);
			outline: none;
		}
	}

	.separator {
		margin-top: 0.22rem;
		margin: 0;
		color: rgba(var(--color-white-rgb), 0.5);
	}

	@media (min-width: 59.375rem) {
		.mobile {
			display: none;
		}

		.desktop {
			padding-left: 2.77rem;
			padding-right: 2.77rem;
			margin-left: auto;
			margin-right: auto;
			max-width: var(--content-max-width);

			.user-test {
				transform: translateX(1.5rem);
			}

			.first-row {
				display: flex;
				justify-content: end;
				align-items: center;
				padding-top: 1.33rem;
				padding-bottom: 0.55rem;

				.searchbar {
					position: absolute;
					left: calc(50% - 9.75rem);
				}
			}

			.second-row {
				display: flex;
				color: var(--color-white);
				justify-content: space-between;
				padding-top: 2.05rem;
				padding-bottom: 0.55rem;

				a {
					text-decoration: none;
					color: var(--color-white);
				}

				.back-link {
					padding: 0 0.33rem;
				}
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.desktop {
			display: none;
		}

		.mobile {
			.row {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.66rem 0;

				.back-link {
					height: 2.77rem;
					width: 2.77rem;
					border-radius: 50%;
					aspect-ratio: 1;

					display: flex;
					align-items: center;
					justify-content: center;
				}
				.icons {
					margin: 0 0.8rem;
				}
			}
		}
	}
</style>
