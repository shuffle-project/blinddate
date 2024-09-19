<script lang="ts">
	import AccordionItem from './AccordionItem.svelte';
	export let personaName: string;
	export let question: 'Fragen' | 'Frage' = 'Fragen';
</script>

<section class="wrapper">
	<h3>
		{`${question} an ${personaName}`}
	</h3>
	<div class="items">
		<slot {AccordionItem} />
	</div>
</section>

<style lang="scss">
	.items {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.wrapper {
		max-width: var(--content-element-max-width);
		padding-inline: 3.375rem;
		box-sizing: border-box;
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			width: 100%;
			max-width: calc(35rem + (2 * var(--outer-spacing)));
			margin-inline: auto;
			padding-inline: var(--outer-spacing);
		}
	}
</style>
