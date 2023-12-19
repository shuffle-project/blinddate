<script lang="ts">
	import type { Source } from '$lib/interfaces/sources.interfaces';
	import Modal from './Modal.svelte';
	import Sources from './Sources.svelte';

	export let term: string;
	export let langTerm = 'de';
	export let inSpeechBubble = false;
	export let sources: Source[] = [];

	let modal: Modal;

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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
	class="term-btn"
	lang={langTerm}
	class:inSpeechBubble
	role="button"
	tabindex="0"
	on:click|stopPropagation={() => toggleDialogDisplay()}
	on:keypress|stopPropagation={(e) => keyboardToggleDialogDisplay(e)}
>
	{@html term}
</span>

<Modal bind:this={modal} bottomSheet {term}>
	<svelte:fragment slot="content">
		<slot />
		{#if sources.length > 0}
			<Sources {sources} />
		{/if}
	</svelte:fragment>
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

		font-size: 1rem;
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
