<script lang="ts">
	export let noTopMargin = false;
	export let extraTopMargin = false;
</script>

<p class:noTopMargin class:extraTopMargin><slot /></p>

<style lang="scss">
	.extraTopMargin {
		margin-top: 2.5rem;
	}
	@media (min-width: 59.375rem) {
		.noTopMargin {
			margin-top: 0;
		}
	}

	@media (max-width: 59.3125rem) {
		p {
			max-width: 35rem;
			margin-inline: auto;
			padding-inline: 1.375rem;
		}
	}
</style>
