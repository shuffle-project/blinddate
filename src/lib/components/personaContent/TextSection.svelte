<script lang="ts">
	import Text from './Text.svelte';
</script>

<div class="wrapper">
	<slot {Text} />
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.wrapper {
			max-width: var(--content-element-max-width);
			padding-inline: 3.33rem;
			box-sizing: border-box;
		}
	}
</style>
