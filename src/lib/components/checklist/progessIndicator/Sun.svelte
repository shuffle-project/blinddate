<script lang="ts">
	import { asset } from '$app/paths';

	let { position }: { position: 'desktop' | 'mobile' } = $props();
</script>

<img
	class="sun sun--{position}"
	src={asset('/decorations/checkList/sun.svg')}
	alt=""
	aria-hidden="true"
/>

<style lang="scss">
	.sun {
		position: absolute;

		&--desktop {
			max-width: 11rem;
			top: -8rem;
			right: -6rem;
		}

		&--mobile {
			max-width: 6.5rem;
			top: 1.875rem;
			right: -2rem;
		}
	}
</style>
