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
				class="video"
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
			max-width: 31.04rem;
			padding: 0 1.33rem;
			margin-inline: auto;
		}

		.buttonslist {
			display: flex;
			flex-wrap: wrap;
			gap: 0.66rem;
			margin: 0 1.33rem 1rem 1.33rem;

			button {
				cursor: pointer;

				color: var(--color-black);
				background-color: var(--color-background-body);

				border-radius: 1rem;

				padding: 0.22rem 0.66rem;

				border: 1px solid var(--color-black);
				font-size: 0.88rem;

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
			max-width: calc(var(--content-element-max-width) - 1.66rem);
			overflow: hidden;
			margin-inline: auto;
			padding: 0;
		}

		.transcript {
			margin-inline: 1.33rem;
			padding: 0.33rem;
			border: 1px solid var(--color-black);
			border-radius: 1.11rem;
		}
	}
	@media (min-width: 59.375rem) {
		.wrapper {
			display: flex;
			flex-direction: column;
			max-width: calc(var(--content-element-max-width) - 1.66rem);
			margin: 3.33rem 0 0 1.66rem;

			.buttonslist {
				margin: 0 1.66rem 1rem 1.66rem;
			}

			.transcript {
				padding: 0.33rem 1rem;
				border: 1px solid var(--color-black);
				border-radius: 1.11rem;
			}

			h3 {
				margin-left: 1.66rem;
				padding: 0;
				margin-top: 0;
			}
		}
	}
</style>
