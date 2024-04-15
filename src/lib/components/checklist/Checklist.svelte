<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import type { CheckObject } from '../../interfaces/checkList.interface';
	import CheckBoxes from './componenets/CheckBoxes.svelte';
	import Desktop from './componenets/Indicator/Desktop/Desktop.svelte';
	import Mobile from './componenets/Indicator/Mobile/Mobile.svelte';
	export let checks: string[];
	export let persona: Persona;

	function randomIntFromInterval(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let keyedChecks: CheckObject[] = checks.map((item, i) => ({
		id: i,
		text: item,
		checked: i === 0 ? true : false,
		backgroundColorCode: randomIntFromInterval(1, 6),
		box: {
			size: 80
		}
	}));

	function toggleCheckBox(id: number) {
		let checkBox = keyedChecks.find((item) => item.id === id);
		if (checkBox?.checked === true) {
			keyedChecks = keyedChecks.map((item) => {
				if (item.id === id) {
					return {
						...item,
						checked: false
					};
				} else {
					return item;
				}
			});
		} else {
			keyedChecks = keyedChecks.map((item) => {
				if (item.id === id) {
					return {
						...item,
						checked: true
					};
				} else {
					return item;
				}
			});
		}
	}
</script>

<div class="wrapper">
	<div class="mobile">
		<Mobile
			length={keyedChecks.length}
			checkedLength={keyedChecks.filter((check) => check.checked).length}
			{persona}
		/>
	</div>

	<CheckBoxes {keyedChecks} {toggleCheckBox} />

	<div class="desktop">
		<Desktop totalCheckboxes={keyedChecks.length} displayedBoxes={keyedChecks} {persona} />
	</div>
</div>

<style lang="scss">
	.wrapper {
		max-width: 100%;
		overflow: hidden;
		padding-block-start: 1.875rem;
	}
	.desktop {
		display: none;
	}

	.mobile {
		max-width: 100vw;
		box-sizing: content-box;
		display: block;
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			display: flex;
			flex-direction: column;
			margin-inline: auto;
			padding-inline: 1.875rem;
		}
	}

	@media (min-width: 78.375rem) {
		.wrapper {
			display: grid;
			grid-template-columns: 1fr min-content;

			.mobile {
				display: none;
			}

			.desktop {
				display: block;
			}
		}
	}
</style>
