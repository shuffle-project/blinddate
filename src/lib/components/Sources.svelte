<script lang="ts">
	import type { Source } from '$lib/interfaces/sources.interfaces';

	let { sources }: { sources: Source[] } = $props();
</script>

<div class="source-container">
	{#if sources.length > 1}
		<p class="text-size title">Quellen:</p>
	{:else}
		<p class="text-size title">Quelle:</p>
	{/if}

	<ul aria-label={sources.length > 1 ? 'Quellen:' : 'Quelle:'} class="sources">
		{#each sources as source}
			{#if source.url}
				<li class="source">
					<a
						class="source__link text-size focus-indicator"
						href={source.url}
						lang={source.titleLang}
					>
						{source.title}
					</a>
				</li>
			{:else}
				<li class="source text-size">
					{source.title}
				</li>
			{/if}
		{/each}
	</ul>
</div>

<style lang="scss">
	li {
		list-style: none;
	}

	.title {
		margin: 0;
	}

	.text-size {
		font-size: 1rem;
		line-height: 130%;
	}

	.source-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 1rem 0 0;
		z-index: 100;
	}

	.sources {
		width: 100%;
		padding: 0;
		margin-top: 0.625rem;
	}

	.source {
		position: relative;
		padding: 0 0 0 1rem;
		margin-bottom: 0.625rem;
		display: flex;
		align-items: flex-start;

		word-wrap: break-word;
		overflow-wrap: break-word;
		overflow-wrap: anywhere;

		-webkit-hyphens: auto;
		-moz-hyphens: auto;
		hyphens: auto;

		&:last-child {
			margin-bottom: 0;
		}

		&:after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			height: 100%;
			width: 3px;
			border-radius: 1rem;
			background-color: var(--color-lavender);
		}

		&__link {
			color: var(--color-blue);
		}
	}
</style>
