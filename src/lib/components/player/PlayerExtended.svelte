<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { ExtendedPlayerConfig } from '../../interfaces/player.interfaces';
	import Icon from '../Icon.svelte';
	import Player from './Player.svelte';

	export let extendedPlayerConfig: ExtendedPlayerConfig;

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
				id="playertab-{i + 1}"
				role="tab"
				aria-selected={selectedTab === index}
				tabindex={selectedTab === index ? 0 : -1}
				on:click={() => onSelectTab(index)}
				on:keydown={onKeydownTab}
			>
				{#if !video.title.includes('Audiodeskription')}
					<div class="icon">
						<Icon size="parent" svg_color={selectedTab === index ? 'white' : 'black'} img="video" />
					</div>
				{/if}

				<p>{video.title}</p>
			</button>
		{/each}

		{#each extendedPlayerConfig.transcripts as transcript, i}
			{@const index = extendedPlayerConfig.videos.length + i + 1}
			<button
				id="playertab-{index}"
				role="tab"
				aria-selected={selectedTab === index}
				tabindex={selectedTab === index ? 0 : -1}
				on:click={() => onSelectTab(index)}
				on:keydown={onKeydownTab}
			>
				<!-- just for marburg, move up afterwards -->
				{#if transcript.title.includes('Audiodeskription')}
					<div class="ad" aria-hidden="true">AD</div>
				{/if}
				{#if !transcript.title.includes('Audiodeskription')}
					<div class="icon">
						<Icon
							size="parent"
							svg_color={selectedTab === index ? 'white' : 'black'}
							img="transcript"
						/>
					</div>
				{/if}
				<p>{transcript.title}</p>
			</button>
		{/each}
	</div>

	<div class="seperator" />

	{#each extendedPlayerConfig.videos as video, i}
		{@const index = i + 1}
		{#if selectedTab === index}
			<div
				class="video"
				id="panel-{index}"
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
				id="panel-{index}"
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

		.video {
			margin-top: 1rem;
		}

		h3 {
			max-width: 31.04rem;
			padding: 0 1.33rem;
			margin-inline: auto;
		}

		.buttonslist {
			max-width: 31.04rem;
			padding: 0 1.33rem;
			margin-inline: auto;

			display: flex;
			flex-direction: column;

			button {
				cursor: pointer;

				display: flex;
				align-items: center;

				color: var(--color-black);
				background-color: transparent;

				&[aria-selected='true'] {
					background-color: var(--color-black);
					color: var(--color-white);
				}

				p {
					margin: 0;
					font-size: 0.88rem;
					text-align: left;
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
			margin-top: 1rem;
			padding: 0.33rem;

			border: 1px solid var(--color-black);
			border-radius: 0.5rem;
		}

		button {
			border-radius: 0.5rem;
			margin-bottom: 0.33rem;
			padding: 0.2rem 0;

			border: 2px solid transparent;
			outline: 2px solid transparent;

			&:focus,
			&:hover {
				border: 2px solid var(--color-white);
				outline: 2px solid var(--color-blue);
			}

			.ad,
			.icon {
				display: block;
				margin-left: 1.33rem;
				margin-right: 0.5rem;
				height: 1.5rem;
				width: 1.5rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.ad {
				font-weight: bold;
				font-size: 1rem;
			}
		}
	}
	@media (min-width: 59.375rem) {
		.wrapper {
			display: flex;
			flex-direction: column;
			max-width: calc(var(--content-element-max-width) - 1.66rem);
			margin-top: 3.33rem;
			margin-left: 1.66rem;

			.transcript {
				padding: 0.33rem 1rem;
				border: 1px solid var(--color-black);
				border-top: none;
				border-radius: 1.11rem;
				border-top-left-radius: 0rem;
				border-top-right-radius: 0rem;
			}

			h3 {
				margin-left: 1.66rem;
				padding: 0;
				margin-top: 0;
			}

			.buttonslist {
				display: flex;
				flex-direction: row;
				margin: 0;
				padding: 0;
			}

			button {
				border-radius: 10px 10px 0px 0px;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;

				background-color: var(--color-background-white);
				margin-right: 0.2rem;
				padding: 0.2rem 1rem;

				border: none;

				position: relative;

				&:focus {
					text-decoration: underline;
				}

				&:hover {
					::before {
						content: '';
						width: 80%;
						height: 6px;
						position: absolute;
						top: -10px;
						left: 0;
						right: 0;
						margin-inline: auto;
						border-radius: 1rem;

						background-color: var(--color-black);
					}
				}

				.ad,
				.icon {
					display: none;
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

			.seperator {
				margin: 0;
				border-top: 1px solid var(--color-black);
			}
		}
	}
</style>
