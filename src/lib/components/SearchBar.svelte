<script lang="ts">
	import Icon from './Icon.svelte';
	let searchstring = '';

	function onSearch() {
		console.log(`search for "${searchstring}"`);
	}
</script>

<!-- <div class="search"> -->
<form class="search" role="search" on:submit|preventDefault={onSearch}>
	<input placeholder="Suche" bind:value={searchstring} type="text" />
	<div class="image">
		<Icon size="medium" img="search" />
	</div>
</form>

<!-- </div> -->
<style lang="scss">
	.search {
		display: flex;
		align-items: center;

		position: relative;

		max-width: 19.5rem;
		width: 100%;


		input {
			box-sizing: border-box;
			background-color: var(--color-background-body);
			color: var(--color-black);
			border-radius: 3.33rem;
			width: 100%;

			font-weight: bold;
			font-size: 1rem;

			padding: 0px;
			border: none;
			padding-left: 1.4rem;
			padding-right: 2.4rem;

			min-height: 2.8rem;
			flex-grow: 1;
		}

		.image {
			position: absolute;
			right: 0.8rem;
			top: 50%;
			transform: translate(0, -50%);
		}
	}
</style>
