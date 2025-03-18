<script lang="ts">
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import type { Check } from '../../interfaces/checklist.interface';
	import Checkboxes from './Checkboxes.svelte';
	import ProgressIndicatorDesktop from './progessIndicator/ProgressIndicatorDesktop.svelte';
	import ProgressIndicatorMobile from './progessIndicator/ProgressIndicatorMobile.svelte';

	let { stringChecks, persona }: { stringChecks: string[]; persona: Persona } = $props();

	function randomNumberFromRange(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let checklist: Check[] = $state(
		stringChecks.map((item, i) => ({
			id: i,
			text: item,
			checked: i === 0 ? true : false,
			backgroundColorCode: randomNumberFromRange(1, 6),
			boxSize: 80
		}))
	);

	function toggleCheckbox(id: number) {
		checklist = checklist.map((item) => {
			if (item.id === id) {
				return {
					...item,
					checked: !item.checked
				};
			} else {
				return item;
			}
		});
	}
</script>

<div class="wrapper">
	<div class="mobile">
		<ProgressIndicatorMobile {checklist} {persona} />
	</div>

	<Checkboxes {checklist} {toggleCheckbox} />

	<div class="desktop">
		<ProgressIndicatorDesktop totalCheckboxes={checklist.length} {checklist} {persona} />
	</div>
</div>

<style lang="scss">
	.wrapper {
		max-width: 100%;
		box-sizing: border-box;
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
			padding-inline: var(--outer-spacing);
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
