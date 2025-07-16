<script lang="ts">
	import type { Source } from '$lib/interfaces/sources.interfaces';
	import type { Snippet } from 'svelte';
	import Modal from './Modal.svelte';
	import Sources from './Sources.svelte';

	interface Props {
		id?: string;
		term: string;
		langTerm?: string;
		inSpeechBubble?: boolean;
		sources?: Source[];
		children?: Snippet;
	}

	let {
		id,
		term,
		langTerm = 'de',
		inSpeechBubble = false,
		sources = [],
		children
	}: Props = $props();

	let modal: Modal | undefined = $state();

	function toggleDialogDisplay(e: Event) {
		e.stopPropagation();
		if (modal) modal.toggleModalDisplay();
	}

	function keyboardToggleDialogDisplay(e: KeyboardEvent) {
		e.stopPropagation();
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			if (modal) modal.toggleModalDisplay();
		}
	}
</script>

<span
	{id}
	class="term-btn"
	lang={langTerm}
	class:inSpeechBubble
	role="button"
	tabindex="0"
	onclick={(e) => toggleDialogDisplay(e)}
	onkeypress={(e) => keyboardToggleDialogDisplay(e)}
>
	{@html term}
</span>

{#await import('./Modal.svelte') then { default: Modal }}
	<Modal bind:this={modal} bottomSheet {term}>
		{#snippet content()}
			{@render children?.()}
			{#if sources.length > 0}
				<Sources {sources} />
			{/if}
		{/snippet}
	</Modal>
{/await}

<style lang="scss">
	.term-btn {
		word-wrap: break-word;
		overflow-wrap: break-word;

		color: var(--color-blue);
		border: none;
		padding: 0;

		background-color: transparent;

		line-height: 150%;

		font-size: 1.125rem;
		font-weight: bold;

		text-align: left;

		cursor: pointer;

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

		&.inSpeechBubble {
			font-family: var(--font-persona);
		}
	}
</style>
