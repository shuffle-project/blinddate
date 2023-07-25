<script lang="ts">
	import type { Source } from '$lib/interfaces/sources.interfaces';
	import Modal from './Modal.svelte';
	import Sources from './Sources.svelte';

	export let term: string;
	export let langTerm = 'de';
	export let definition: string;
	export let sources: Source[] = [];

	let modal: Modal;

	function toggleDialogDisplay() {
		if (modal) modal.toggleModalDisplay();
	}
</script>

<span>
	<button class="term-btn " on:click={() => toggleDialogDisplay()}>
		<span lang={langTerm}>{term}</span>
	</button>
</span>

<Modal bind:this={modal} bottomSheet {term}>
	<svelte:fragment slot="content">
		<p>{@html definition.replace(term, `<b lang=${langTerm}>` + term + '</b>')}</p>
		{#if sources.length > 0}
			<Sources {sources} />
		{/if}
	</svelte:fragment>
</Modal>

<style lang="scss">
	.term-btn {
		color: var(--color-blue);
		border: none;
		padding: 0;

		background-color: transparent;
		font-size: 1rem;
		font-weight: bold;

		cursor: pointer;

		span {
			text-decoration: underline;
			text-decoration-color: var(--color-blue);
			text-underline-offset: 0.1rem;
			text-decoration-thickness: 2px;
			text-decoration-skip-ink: auto;
			transition: text-decoration-thickness 0.2s ease;

			&:hover,
			&:focus {
				text-decoration-thickness: 4px;
				text-decoration-skip-ink: none;
			}
		}
	}
</style>
