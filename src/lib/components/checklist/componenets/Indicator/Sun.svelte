<script lang="ts">
	import { base } from '$app/paths';

	export let position: 'desktop' | 'mobile';
</script>

<img
	class="sun sun--{position}"
	src="{base}/decorations/checkList/sun.svg"
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
			max-width: 6rem;
			top: 1.5rem;
			right: -2rem;
		}
	}
</style>
