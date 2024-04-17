<script lang="ts">
	import { ENVIRONMENT } from '$lib/constants/environment';
	import DesktopLectureRoom from './DesktopLectureRoom.svelte';
	import MobileLectureRoom from './MobileLectureRoom.svelte';
	const personas = ENVIRONMENT.accessiblePersonas;
</script>

<div id="lecture-room" class="lecture-room">
	<div class="desktop">
		<DesktopLectureRoom {personas} />
	</div>
	<div class="mobile">
		<MobileLectureRoom {personas} />
	</div>
</div>

<style lang="scss">
	.lecture-room {
		padding-top: 1.25rem;
	}

	.desktop {
		display: none;
	}

	.mobile {
		background: linear-gradient(var(--color-black) 50%, var(--color-background-body) 50%);
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
