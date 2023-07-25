<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	//usertest

	let welcomeTextRead = localStorage.getItem('welcomeTextRead');
	if (welcomeTextRead !== 'true') {
		goto(base + '/hello');
	} else {
		goto(base + '/personas/gabriel');
	}

	if ($page.url.pathname.includes('/iframe/')) {
		goto(base + '/iframe/');
	}
</script>

<slot />

<style lang="scss" global>
	@import './../scss/_main.scss';
</style>
