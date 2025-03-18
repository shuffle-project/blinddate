<script lang="ts">
	import type { Check } from '$lib/interfaces/checklist.interface';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import PersonaSitting from '../PersonaSitting.svelte';

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
				<li class="box {i < checkedLength ? 'checked' : ''}"></li>
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
		gap: 0.625rem;

		.box {
			height: 1rem;
			width: 100%;
			border-radius: 0.375rem;

			&.checked {
				background: linear-gradient(135deg, var(--color-green-light), var(--color-green));
			}
		}
	}
</style>
