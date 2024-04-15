<script lang="ts">
	export let noTopMargin = false;
</script>

<p class:noTopMargin><slot /></p>

<style lang="scss">
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
