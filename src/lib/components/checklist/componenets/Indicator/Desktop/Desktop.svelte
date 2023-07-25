<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { quintInOut, quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import type { CheckObject } from '../../../../../interfaces/checkList.interface';
	import PersonaSitting from '../PersonaSitting.svelte';
	import Ground from './Ground.svelte';

	export let displayedBoxes: CheckObject[];
	export let persona: Persona;
	export let totalCheckboxes: number;

	let checkedDisplayedBoxes: CheckObject[];
	let oldDisplayedBoxes = displayedBoxes.filter((item: any) => item.checked);
	let itemAdded = false;

	$: {
		checkedDisplayedBoxes = displayedBoxes.filter((item: any) => item.checked);
		itemAdded = checkedDisplayedBoxes.length > oldDisplayedBoxes.length;
		oldDisplayedBoxes = checkedDisplayedBoxes;
		if (itemAdded) {
			setTimeout(() => {
				itemAdded = false;
			}, 700);
		}
	}
</script>

<div
	aria-label="{persona.name} sitzt auf einem Turm. Je mehr Checkboxen angekreuzt werden, desto höher wächst er. {checkedDisplayedBoxes.length} von {totalCheckboxes} sind aktuell angekreuzt. "
	class="wrapper"
>
	<ul aria-hidden="true" class="box-container">
		<PersonaSitting position="desktop" {itemAdded} {persona} />

		{#each displayedBoxes as box, i}
			{#if box.checked}
				<li
					in:slide={{ duration: 400, easing: quintOut }}
					out:slide={{ duration: 600, easing: quintInOut }}
					class="box background-pattern-{box.backgroundColorCode}"
					style="height: {box.box.size - 15}px; width: 150px; transform: translateX({Math.floor(
						Math.random() * 31
					) - 15}px)"
				/>
			{/if}
		{/each}
		<Ground />
	</ul>
</div>

<style lang="scss">
	ul {
		list-style: none;
		margin: 0;
	}

	.wrapper {
		height: 100%;
		min-width: 16.66rem;
	}

	.box-container {
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	.box {
		background-color: var(--color-green-light);
		border: 1px solid var(--color-black);
		border-radius: 10px;
		z-index: 10;
	}

	.background-pattern-1 {
		background-color: #fdfdfd;
		background: radial-gradient(
				circle,
				transparent 20%,
				#fdfdfd 20%,
				#fdfdfd 80%,
				transparent 80%,
				transparent
			),
			radial-gradient(
					circle,
					transparent 20%,
					#fdfdfd 20%,
					#fdfdfd 80%,
					transparent 80%,
					transparent
				)
				20px 20px,
			linear-gradient(#070d1c 1.6px, transparent 1.6px) 0 -0.8px,
			linear-gradient(90deg, #070d1c 1.6px, #fdfdfd 1.6px) -0.8px 0;
		background-size: 40px 40px, 40px 40px, 20px 20px, 20px 20px;
	}

	.background-pattern-2 {
		background-color: #fdfdfd;
		background-size: 26px 26px;
		background-image: repeating-linear-gradient(
			0deg,
			#070d1c,
			#070d1c 1.3px,
			#fdfdfd 1.3px,
			#fdfdfd
		);
	}

	.background-pattern-3 {
		background-color: #fdfdfd;
		background-image: radial-gradient(#070d1c 1.45px, #fdfdfd 1.45px);
		background-size: 29px 29px;
	}

	.background-pattern-4 {
		background-color: #fdfdfd;
		background-image: linear-gradient(#070d1c 1.2px, transparent 1.2px),
			linear-gradient(to right, #070d1c 1.2px, #fdfdfd 1.2px);
		background-size: 24px 24px;
		background-position: -12px -12px;
	}

	.background-pattern-5 {
		background-color: #fdfdfd;
		background-size: 24px 24px;
		background-image: repeating-linear-gradient(
			to right,
			#070d1c,
			#070d1c 1px,
			#fdfdfd 1px,
			#fdfdfd
		);
		background-position: -12px -12px;
	}

	.background-pattern-6 {
		background-color: #fdfdfd;
		background-size: 12px 12px;
		background-image: repeating-linear-gradient(
			45deg,
			#070d1c 0,
			#070d1c 1.2px,
			#fdfdfd 0,
			#fdfdfd 50%
		);
	}
</style>
