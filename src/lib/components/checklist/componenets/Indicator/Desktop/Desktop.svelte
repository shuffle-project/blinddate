<script lang="ts">
	import { run } from 'svelte/legacy';

	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { quintInOut, quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import type { CheckObject } from '../../../../../interfaces/checkList.interface';
	import PersonaSitting from '../PersonaSitting.svelte';
	import Ground from './Ground.svelte';

	interface Props {
		displayedBoxes: CheckObject[];
		persona: Persona;
		totalCheckboxes: number;
	}

	let { displayedBoxes, persona, totalCheckboxes }: Props = $props();

	let checkedDisplayedBoxes: CheckObject[] = $state();
	let oldDisplayedBoxes = $state(displayedBoxes.filter((item: any) => item.checked));
	let itemAdded = $state(false);

	run(() => {
		checkedDisplayedBoxes = displayedBoxes.filter((item: any) => item.checked);
		itemAdded = checkedDisplayedBoxes.length > oldDisplayedBoxes.length;
		oldDisplayedBoxes = checkedDisplayedBoxes;
		if (itemAdded) {
			setTimeout(() => {
				itemAdded = false;
			}, 700);
		}
	});
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
					style="height: {box.box.size - 15}px; width: 150px; transform: translateX({i !== 0
						? Math.floor(Math.random() * 31) - 15
						: 0}px)"
				></li>
			{/if}
		{/each}
		<Ground />
	</ul>
</div>

<style lang="scss">
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.wrapper {
		height: 100%;
		min-width: 17rem;
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
		border: 1px solid var(--color-black);
		border-radius: 0.625rem;
		z-index: 10;
	}

	.background-pattern-1 {
		background-color: var(--color-background-body);
		background:
			radial-gradient(
				circle,
				transparent 20%,
				var(--color-background-body) 20%,
				var(--color-background-body) 80%,
				transparent 80%,
				transparent
			),
			radial-gradient(
					circle,
					transparent 20%,
					var(--color-background-body) 20%,
					var(--color-background-body) 80%,
					transparent 80%,
					transparent
				)
				20px 20px,
			linear-gradient(var(--color-black) 1.6px, transparent 1.6px) 0 -0.8px,
			linear-gradient(90deg, var(--color-black) 1.6px, var(--color-background-body) 1.6px) -0.8px 0;
		background-size:
			40px 40px,
			40px 40px,
			20px 20px,
			20px 20px;
	}

	.background-pattern-2 {
		background-color: var(--color-background-body);
		background-size: 26px 26px;
		background-image: repeating-linear-gradient(
			0deg,
			var(--color-black),
			var(--color-black) 1.3px,
			var(--color-background-body) 1.3px,
			var(--color-background-body)
		);
	}

	.background-pattern-3 {
		background-color: var(--color-background-body);
		background-image: radial-gradient(
			var(--color-black) 1.45px,
			var(--color-background-body) 1.45px
		);
		background-size: 29px 29px;
	}

	.background-pattern-4 {
		background-color: var(--color-background-body);
		background-image: linear-gradient(var(--color-black) 1.2px, transparent 1.2px),
			linear-gradient(to right, var(--color-black) 1.2px, var(--color-background-body) 1.2px);
		background-size: 24px 24px;
		background-position: -12px -12px;
	}

	.background-pattern-5 {
		background-color: var(--color-background-body);
		background-size: 24px 24px;
		background-image: repeating-linear-gradient(
			to right,
			var(--color-black),
			var(--color-black) 1px,
			var(--color-background-body) 1px,
			var(--color-background-body)
		);
		background-position: -12px -12px;
	}

	.background-pattern-6 {
		background-color: var(--color-background-body);
		background-size: 12px 12px;
		background-image: repeating-linear-gradient(
			45deg,
			var(--color-black) 0,
			var(--color-black) 1.2px,
			var(--color-background-body) 0,
			var(--color-background-body) 50%
		);
	}
</style>
