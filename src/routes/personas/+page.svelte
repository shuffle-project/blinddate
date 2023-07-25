<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/../');
	});
</script>

<!-- TODO: Quick Fix, so that the prerendering/ building works. Necessary for the Skiplink.svelte -->
<div id="content" />
