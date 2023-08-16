<script lang="ts">
	import LectureRoom from '$lib/components/lectureRoom/index.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BlindDate</title>
</svelte:head>

<div class="content" id="content">
	<h1>Studierende kennenlernen</h1>

	<LectureRoom />
</div>

<Footer />

<style lang="scss">
	.content {
		background-color: var(--color-black);
	}
	h1 {
		color: var(--color-white);

		margin: 0;
		padding-bottom: 1rem;

		max-width: var(--content-max-width);
		margin-inline: auto;
	}
</style>
