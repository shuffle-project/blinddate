<script lang="ts">
	import { base } from '$app/paths';
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BlindDate</title>
</svelte:head>

<div class="background-black">
	<!-- <header>
		<div class="first-row">
			<div />
			<SearchBar />
			<a href="{base}/">
				<img src="{base}/icons/logo.svg" alt="Blind Date Logo, zurück zur Startseite" />
			</a>
		</div>
		<div class="second-row">
			<div />
			<div>
				<ShareButton />
			</div>
			<hr aria-hidden="true" class="seperator" /> 
		</div>
	</header> -->

	<!-- <br /> -->
</div>

<div class="content" id="content">
	<h1 class="responsive">Studierende</h1>

	<ul>
		{#each ['gabriel'] as persona}
			<li><a href="{base}/personas/{persona}">{persona}</a></li>
		{/each}
	</ul>
</div>

<Footer />

<style lang="scss">

	
	.content {
		margin-left: auto;
		margin-right: auto;
		max-width: var(--content-max-width);
		padding-left: 2.77rem;
		padding-right: 2.77rem;
	}

	.background-black {
		background-color: var(--color-black);
		height: 30vh;
	}

	header {
		background-color: var(--color-black);
		padding-left: 2.77rem;
		padding-right: 2.77rem;
		margin-left: auto;
		margin-right: auto;
		max-width: var(--content-max-width);
		// max-width: 600px;

		.first-row {
			display: flex;
			color: var(--color-white);
			justify-content: space-between;
			align-items: center;
			padding-top: 1.33rem;
		}

		.second-row {
			display: flex;
			color: var(--color-white);
			justify-content: right;
			padding-top: 2.05rem;
			padding-bottom: 0.55rem;

			a {
				text-decoration: none;
				color: var(--color-white);
			}
		}

		.seperator {
			margin-top: 0.22rem;
			margin: 0;
		}
	}
</style>
