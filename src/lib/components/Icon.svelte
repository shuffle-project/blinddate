<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		img: string;
		alt?: string;
		size?: 'tiny' | 'small' | 'smedium' | 'medium' | 'big' | 'parent';
		textSize?: 'small' | 'medium' | 'big';
		svg_color?: null | 'white' | 'black' | 'green' | 'blue';
		children?: import('svelte').Snippet;
	}

	let {
		img,
		alt = '',
		size = 'small',
		textSize = 'small',
		svg_color = null,
		children
	}: Props = $props();

	if (!img.endsWith('.svg')) {
		img = img + '.svg';
	}
	if (!img.startsWith('/')) {
		img = '/icons/' + img;
	}
</script>

<div class="icon-component">
	<img
		src={base + img}
		{alt}
		aria-hidden={alt === '' || undefined}
		class="icon-{size} {svg_color ? 'svg-' + svg_color : ''}"
	/>
	{#if children}
		<span class="text-{textSize}">{@render children?.()}</span>
	{/if}
</div>

<style lang="scss">
	.icon-component {
		display: flex;
		align-items: center;

		// COLORS generator : https://codepen.io/sosuke/pen/Pjoqqp
		.svg-black {
			filter: brightness(0) saturate(100%);
		}

		.svg-white {
			filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(86%) hue-rotate(216deg)
				brightness(102%) contrast(100%);
		}

		.svg-green {
			filter: brightness(0) saturate(100%) invert(96%) sepia(9%) saturate(895%) hue-rotate(88deg)
				brightness(97%) contrast(89%);
		}

		.svg-blue {
			filter: invert(25%) sepia(89%) saturate(1393%) hue-rotate(208deg) brightness(100%)
				contrast(87%);
		}

		// SIZE ICON
		.icon-tiny {
			width: 1rem;
			height: 1rem;
		}

		.icon-small {
			width: 1.125rem;
			height: 1.125rem;
		}

		.icon-smedium {
			width: 1.375rem;
			height: 1.375rem;
		}

		.icon-medium {
			width: 1.5rem;
			height: 1.5rem;
		}

		.icon-big {
			width: 1.875rem;
			height: 1.875em;
		}

		.icon-parent {
			width: 100%;
			height: 100%;
		}

		// SIZE TEXT
		.text-small {
			padding-left: 0.625rem;
			font-size: 1rem;
		}

		.text-medium {
			padding-left: 0.625rem;
			font-size: 1.125rem;
		}

		.text-big {
			padding-left: 0.625rem;
			font-size: 1.25rem;
		}
	}
</style>
