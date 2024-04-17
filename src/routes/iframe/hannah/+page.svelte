<script lang="ts">
	import { base } from '$app/paths';
</script>

<iframe src={base + '/games/hannah'} frameborder="0" title="Hannah Simulationsspiel" />

<style lang="scss">
	iframe {
		width: 100%;
		max-width: var(--content-max-width);
		aspect-ratio: 16/9;
		border-radius: 1.25rem;
		box-shadow: 0 0 20px rgba(var(--color-black-rgb), 0.3);
	}
</style>
