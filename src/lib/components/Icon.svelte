<script lang="ts">
	import { base } from '$app/paths';
	export let img: string;
	export let alt: string = '';
	export let size: 'tiny' | 'small' | 'smedium' | 'medium' | 'big' | 'parent' = 'small';
	export let textSize: 'small' | 'medium' | 'big' = 'small';

	export let svg_color: null | 'white' | 'black' | 'green' | 'blue' = null;

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
	{#if $$slots.default}
		<span class="text-{textSize}"><slot /></span>
	{/if}
</div>

<style lang="scss">
	.icon-component {
		display: flex;
		align-items: center;
		// background-color: red;

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
			width: 0.88rem;
			height: 0.88rem;
		}

		.icon-small {
			width: 1.11rem;
			height: 1.11rem;
		}

		.icon-smedium {
			width: 1.33rem;
			height: 1.33rem;
		}

		.icon-medium {
			width: 1.66rem;
			height: 1.66rem;
		}

		.icon-big {
			width: 1.99rem;
			height: 1.99rem;
		}

		.icon-parent {
			width: 100%;
			height: 100%;
		}

		// SIZE TEXT
		.text-small {
			padding-left: 0.66rem;
			font-size: 0.88rem;
		}

		.text-medium {
			padding-left: 0.66rem;
			font-size: 1rem;
		}

		.text-big {
			padding-left: 0.66rem;
			font-size: 1.11rem;
		}
	}
</style>
