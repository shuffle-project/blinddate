<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { ExtendedPlayerConfig } from '../../interfaces/player.interfaces';
	import { getRandomId } from '../utils';
	import Player from './Player.svelte';

	export let extendedPlayerConfig: ExtendedPlayerConfig;

	const randomId = getRandomId();

	let selectedTab: number | null = 1;
	let selectedTabTemp = 1;

	let tabcount = extendedPlayerConfig.videos.length + extendedPlayerConfig.transcripts.length;

	function onSelectTab(index: number) {
		selectedTab = null;
		selectedTabTemp = index;
	}

	function setSelectedTab() {
		selectedTab = selectedTabTemp;
	}

	function onKeydownTab(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			onSelectTab(selectedTabTemp === tabcount ? 1 : selectedTabTemp + 1);
			document.getElementById('playertab-' + selectedTabTemp)?.focus();
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			onSelectTab(selectedTabTemp === 1 ? tabcount : selectedTabTemp - 1);
			document.getElementById('playertab-' + selectedTabTemp)?.focus();
		}
	}
</script>

<div class="wrapper">
	<h3>{extendedPlayerConfig.title}</h3>
	<div role="tablist" class="buttonslist" aria-label="Video alternativen">
		{#each extendedPlayerConfig.videos as video, i}
			{@const index = i + 1}
			<button
				id="playertab-{i + 1}-{randomId}"
				role="tab"
				aria-selected={selectedTab === index}
				tabindex={selectedTab === index ? 0 : -1}
				on:click={() => onSelectTab(index)}
				on:keydown={onKeydownTab}
			>
				{video.title}
			</button>
		{/each}

		{#each extendedPlayerConfig.transcripts as transcript, i}
			{@const index = extendedPlayerConfig.videos.length + i + 1}
			<button
				id="playertab-{index}-{randomId}"
				role="tab"
				aria-selected={selectedTab === index}
				tabindex={selectedTab === index ? 0 : -1}
				on:click={() => onSelectTab(index)}
				on:keydown={onKeydownTab}
			>
				{transcript.title}
			</button>
		{/each}
	</div>

	{#each extendedPlayerConfig.videos as video, i}
		{@const index = i + 1}
		{#if selectedTab === index}
			<div
				id="panel-{index}-{randomId}"
				in:slide={{ duration: 400 }}
				out:slide={{ duration: 400 }}
				on:outroend={setSelectedTab}
			>
				<Player videoData={video} />
			</div>
		{/if}
	{/each}

	{#each extendedPlayerConfig.transcripts as transcript, i}
		{@const index = extendedPlayerConfig.videos.length + i + 1}
		{#if selectedTab === index}
			<div
				id="panel-{index}-{randomId}"
				in:slide={{ duration: 400 }}
				out:slide={{ duration: 400 }}
				on:outroend={setSelectedTab}
			>
				<div class="transcript">
					{@html transcript.body}
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.wrapper {
		max-width: 100%;
		width: 100%;
		overflow: hidden;

		h3 {
			max-width: 35rem;
			padding: 0 1.375rem;
			margin-inline: auto;

			word-wrap: break-word;
			overflow-wrap: break-word;
			overflow-wrap: anywhere;

			-webkit-hyphens: auto;
			-moz-hyphens: auto;
			hyphens: auto;
		}

		.buttonslist {
			display: flex;
			flex-wrap: wrap;
			gap: 0.625rem;
			margin: 0 1.375rem 1.25rem 1.375rem;

			button {
				cursor: pointer;

				color: var(--color-black);
				background-color: var(--color-background-body);

				border-radius: 2rem;

				padding: 0.375rem 0.875rem;

				border: 1px solid var(--color-black);
				font-size: 1rem;

				&:hover,
				&:focus {
					outline: 2px solid var(--color-blue);
					outline-offset: 2px;
				}

				&[aria-selected='true'] {
					color: var(--color-white);
					background-color: var(--color-black);
				}
				&[aria-selected='false'] {
					color: var(--color-black);
					background-color: var(--color-background-white);
				}
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			max-width: 35rem + (1.375rem * 2);
			overflow: hidden;
			margin-inline: auto;
			padding: 0;
		}

		.transcript {
			margin-inline: var(--outer-spacing);
			padding: 0.625rem;
			border: 1px solid var(--color-black);
			border-radius: 1.25rem;
		}
	}
	@media (min-width: 59.375rem) {
		.wrapper {
			display: flex;
			flex-direction: column;
			max-width: 35rem + (2.875rem * 2);
			margin: 3.375rem 0 0 1.875rem;

			.buttonslist {
				margin: 0 1.5rem 1.25rem 1.5rem;
			}

			.transcript {
				padding: 0.375rem 1.25rem;
				border: 1px solid var(--color-black);
				border-radius: 1.25rem;
			}

			h3 {
				margin-left: 1.5rem;
				padding: 0;
				margin-top: 0;
			}
		}
	}
</style>
