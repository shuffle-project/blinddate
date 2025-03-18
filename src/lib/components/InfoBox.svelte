<script lang="ts">
	import { stopPropagation } from 'svelte/legacy';

	import type { Source } from '$lib/interfaces/sources.interfaces';
	import Modal from './Modal.svelte';
	import Sources from './Sources.svelte';

	interface Props {
		term: string;
		langTerm?: string;
		inSpeechBubble?: boolean;
		sources?: Source[];
		children?: import('svelte').Snippet;
	}

	let {
		term,
		langTerm = 'de',
		inSpeechBubble = false,
		sources = [],
		children
	}: Props = $props();

	let modal: Modal = $state();

	function toggleDialogDisplay() {
		if (modal) modal.toggleModalDisplay();
	}

	function keyboardToggleDialogDisplay(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			if (modal) modal.toggleModalDisplay();
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<span
	class="term-btn"
	lang={langTerm}
	class:inSpeechBubble
	role="button"
	tabindex="0"
	onclick={stopPropagation(() => toggleDialogDisplay())}
	onkeypress={stopPropagation((e) => keyboardToggleDialogDisplay(e))}
>
	{@html term}
</span>

<Modal bind:this={modal} bottomSheet {term}>
	{#snippet content()}
	
			{@render children?.()}
			{#if sources.length > 0}
				<Sources {sources} />
			{/if}
		
	{/snippet}
</Modal>

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
