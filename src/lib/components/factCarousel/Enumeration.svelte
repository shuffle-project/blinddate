<script lang="ts">
	import { base } from '$app/paths';

	export let total = 0;
	export let amount = 0;
</script>

<div class="wrapper">
	{#each { length: amount } as _, i}
		<img class="amount" src="{base}/icons/person-fill.svg" alt="" aria-hidden="true" />
	{/each}
	{#each { length: total - amount } as _, i}
		<img class="total" src="{base}/icons/person-stroke.svg" alt="" aria-hidden="true" />
	{/each}
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		padding-inline: 1rem;
		width: 30rem;
		min-height: 7.5rem;

		img.amount {
			filter: invert(30%) sepia(14%) saturate(901%) hue-rotate(187deg) brightness(104%)
				contrast(88%);
		}

		img.total {
			filter: invert(62%) sepia(7%) saturate(926%) hue-rotate(187deg) brightness(91%) contrast(86%);
		}
	}
</style>
