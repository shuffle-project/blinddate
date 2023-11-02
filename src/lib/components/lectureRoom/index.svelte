<script lang="ts">
	import { ENVIRONMENT } from '$lib/constants/environment';
	import DesktopLectureRoom from './DesktopLectureRoom.svelte';
	import MobileLectureRoom from './MobileLectureRoom.svelte';
	const personas = ENVIRONMENT.accessiblePersonas;
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
