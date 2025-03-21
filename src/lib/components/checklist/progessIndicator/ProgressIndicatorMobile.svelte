<script lang="ts">
	import type { Check } from '$lib/interfaces/checklist.interface';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import PersonaSitting from './PersonaSitting.svelte';

	let { checklist, persona }: { checklist: Check[]; persona: Persona } = $props();

	let checkedLength = $derived(checklist.filter((item) => item.checked).length);
</script>

<div class="wrapper">
	<div class="content">
		<p>
			{`${checkedLength} von ${checklist.length} Tipps werden umgesetzt`}
		</p>

		<ul class="box-wrapper" aria-hidden="true">
			<PersonaSitting position="mobile" {persona} />
			{#each checklist as check, i (check.id)}
				<li
					class="box"
					class:checked={i < checkedLength}
					class:first-active={i === 0}
					class:last-active={i === checkedLength - 1}
					class:one-active={checkedLength === 1}
				></li>
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

	p {
		width: 60%;
	}

	.box-wrapper {
		position: relative;
		background-color: var(--color-black);
		height: 2.25rem;
		padding: 0 0.625rem;
		border-radius: 0.625rem;
		z-index: 10;

		display: flex;
		align-items: center;

		.box {
			height: 0.5rem;
			width: 100%;

			&.first-active {
				border-top-left-radius: 0.5rem;
				border-bottom-left-radius: 0.5rem;
			}
			&.last-active {
				border-top-right-radius: 0.5rem;
				border-bottom-right-radius: 0.5rem;
			}

			&.one-active {
				border-radius: 0.5rem;
			}

			&.checked {
				background-color: var(--color-turquoise);
			}
		}
	}
</style>
