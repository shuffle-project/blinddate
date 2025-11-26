<script lang="ts">
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interfaces';
	import Player from './Player.svelte';

	const randomId = $props.id();

	let { extendedPlayerConfig: config }: { extendedPlayerConfig: ExtendedPlayerConfig } = $props();

	const tabs = [...config.melvinVideos, ...config.videos, ...config.transcripts];

	let tabcount = tabs.length;
	let selectedTab: number = $state(0);
	let selectedContent = $derived(tabs[selectedTab]);

	function onSelectTab(index: number) {
		if (selectedTab === index) return;
		selectedTab = index;
	}

	function onKeydownTab(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			onSelectTab(selectedTab === tabcount - 1 ? 0 : selectedTab + 1);
			document.getElementById(`playertab-${selectedTab}-${randomId}`)?.focus();
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			onSelectTab(selectedTab === 0 ? tabcount - 1 : selectedTab - 1);
			document.getElementById(`playertab-${selectedTab}-${randomId}`)?.focus();
		}
	}
</script>

<div class="wrapper">
	<h3>{config.title}</h3>
	<div role="tablist" class="buttonslist" aria-label="Videoauswahl">
		{#each tabs as tab, i}
			<button
				id="playertab-{i}-{randomId}"
				role="tab"
				aria-selected={selectedTab === i}
				tabindex={selectedTab === i ? 0 : -1}
				onclick={() => onSelectTab(i)}
				onkeydown={onKeydownTab}
			>
				{tab.title}
			</button>
		{/each}
	</div>

	{#if 'url' in selectedContent}
		<iframe
			width="100%"
			height="400"
			src={selectedContent.url}
			title={selectedContent.title}
			frameborder="0"
			allowfullscreen
			referrerpolicy="strict-origin-when-cross-origin"
		></iframe>
	{:else if 'videoPathMp4' in selectedContent}
		<Player videoData={selectedContent} />
	{:else if 'body' in selectedContent}
		<div class="transcript">
			{@html selectedContent.body}
		</div>
	{/if}
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

		iframe {
			border: 1px solid var(--color-lavender);
			border-radius: 1.25rem;
			box-sizing: border-box;

			&:fullscreen {
				border: none;
				border-radius: 0;
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

	@media (max-width: 37.75rem) {
		.wrapper {
			iframe {
				border-radius: 0;
				border-left-width: 0;
				border-right-width: 0;
			}
		}
	}
</style>
