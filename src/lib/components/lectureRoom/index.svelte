<script lang="ts">
	import { ENVIRONMENT } from '$lib/constants/environment';
	import LectureRoomDesktop from './LectureRoomDesktop.svelte';
	import LectureRoomMobile from './LectureRoomMobile.svelte';

	const personas = ENVIRONMENT.accessiblePersonas;
</script>

<div id="studierende" class="lecture-room">
	<div class="desktop">
		<LectureRoomDesktop {personas} />
	</div>
	<div class="mobile">
		<LectureRoomMobile {personas} />
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
