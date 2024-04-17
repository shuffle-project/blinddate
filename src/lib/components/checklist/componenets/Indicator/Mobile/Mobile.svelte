<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import PersonaSitting from '../PersonaSitting.svelte';

	export let length: number;
	export let checkedLength: number;
	export let persona: Persona;

	$: difference = length - checkedLength;
	$: uncheckedBoxes = Array(difference).fill(0);
	$: checkedBoxes = Array(checkedLength).fill(1);
	$: allBoxes = [...checkedBoxes, ...uncheckedBoxes];

	$: length;
	$: checkedLength;
</script>

<div class="wrapper">
	<div class="content">
		<div class="text-container">
			<p>
				{checkedLength} von {length}
				Tipps werden umgesetzt
			</p>
		</div>

		<ul class="box-container" aria-hidden="true">
			<PersonaSitting position="mobile" {persona} />
			{#each allBoxes as box}
				<li class="box {box == 1 ? 'box__checked' : ''}" />
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.wrapper {
		max-width: var(--content-element-max-width);
	}

	.content {
		max-width: 28rem;
		width: 100%;
		margin-inline: auto;
	}

	.text-container {
		width: 60%;
	}

	.box-container {
		position: relative;
		background-color: var(--color-black);
		height: 2.25rem;
		padding: 0 0.625rem;
		border-radius: 0.625rem;
		z-index: 10;

		display: flex;
		align-items: center;
		gap: 0.625rem;
	}

	.box {
		height: 1.125rem;
		width: 100%;
		border: 1px solid var(--color-green-light);
		border-radius: 0.375rem;

		&__checked {
			background: linear-gradient(135deg, var(--color-green-light), var(--color-green));
		}
	}
</style>
