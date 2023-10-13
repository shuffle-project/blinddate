<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import Skiplink from '$lib/components/Skiplink.svelte';
	import UserTest from '$lib/components/UserTest.svelte';
	import Footer from '../../lib/components/Footer.svelte';
</script>

<Skiplink />

<div class="background-black">
	<header>
		<div class="mobile">
			<div class="user-test">
				<UserTest />
			</div>

			<div class="row">
				<a href="{base}/" class="back-link">
					<Icon svg_color={'white'} img="back">Zurück zur Startseite</Icon>
				</a>

				<div class="icons">
					<ShareButton />
				</div>
			</div>

			<hr aria-hidden="true" class="separator" />
		</div>

		<div class="desktop">
			<div class="first-row">
				<!-- usertest -->
				<div class="user-test">
					<UserTest />
				</div>

				<!-- usertest -->
				<!-- <a href="{base}/" class="logo">
					<img src="{base}/icons/logo.svg" alt="Blind Date Logo, zurück zur Startseite" />
				</a> -->
				<div class="logo">
					<img src="{base}/icons/logo.svg" alt="Blind Date Logo" />
				</div>
			</div>
			<div class="second-row">
				<a href="{base}/" class="back-link">
					<Icon svg_color={'white'} img="back">Zurück zur Startseite</Icon>
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
		border-radius: 1rem;
		display: flex;
		padding: 0.2rem 0.4rem;
		cursor: pointer;
		color: var(--color-white);
		text-decoration: none;

		&:hover,
		&:focus {
			outline: 2px solid var(--color-white);
			outline-offset: 2px;
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
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.desktop {
			display: none;
		}

		.mobile {
			.user-test {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 1rem;
			}
			.row {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.66rem 1rem;
			}
		}
	}
</style>
