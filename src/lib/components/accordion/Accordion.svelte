<script lang="ts">
	import AccordionItem from './AccordionItem.svelte';
	export let title: string;
</script>

<div class="wrapper">
	<h3>
		{title}
	</h3>
	<div class="items">
		<slot {AccordionItem} />
	</div>
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.wrapper {
			max-width: var(--content-element-max-width);
		}
	}

	.items {
		display: flex;
		flex-direction: column;
		gap: 1.33rem;
	}

	.wrapper {
		margin: 0 3.33rem 4rem 3.33rem;
		max-width: 35.33rem;
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			margin-inline: auto;
			max-width: 31.04rem;
			padding: 0 1.33rem;
		}
	}
</style>
