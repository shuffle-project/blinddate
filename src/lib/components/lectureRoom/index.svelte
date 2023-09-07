<script lang="ts">
	import { GABRIEL } from '$lib/constants/gabriel';
	import { HANNAH } from '$lib/constants/hannah';
	import { MAXI } from '$lib/constants/maxi';
	import DesktopLectureRoom from './DesktopLectureRoom.svelte';
	import MobileLectureRoom from './MobileLectureRoom.svelte';

	const personas = [MAXI, HANNAH, GABRIEL];
</script>

<div class="desktop">
	<DesktopLectureRoom {personas} />
</div>
<div class="mobile">
	<MobileLectureRoom {personas} />
</div>

<style lang="scss">
	.desktop {
		display: none;
	}

	@media (min-width: 50rem) {
		.mobile {
			display: none;
		}

		.desktop {
			display: block;
		}
	}
</style>
