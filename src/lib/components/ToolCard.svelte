<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		image: string;

		langTitle?: string;
		children?: Snippet;
	}

	let { title, image, langTitle = 'de', children }: Props = $props();
</script>

<div class="wrapper">
	<div class="content">
		<div class="text">
			<h3 id={title.replace(' ', '')} class="title" lang={langTitle}>{title}</h3>
			<p>
				{@render children?.()}
			</p>
		</div>
		<div class="image-wrapper">
			<img src={image} alt="" role="presentation" />
		</div>
	</div>
	<div aria-hidden="true" class="background"></div>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		max-width: var(--content-element-max-width);

		.content {
			background-color: var(--color-white);
			border: 1px solid var(--color-lavender);
			border-radius: 1.25rem;

			max-width: calc(var(--content-element-max-width) - 7.5rem);
			padding: 1rem 1.875rem;
			box-sizing: border-box;

			margin: 0 3.375rem 1.875rem 3.375rem;

			display: flex;
			justify-content: space-between;
			justify-content: center;
			gap: 2rem;

			position: relative;
			z-index: 2;

			.image-wrapper {
				display: flex;
				justify-content: center;
				align-self: center;

				img {
					width: 8rem;
					height: 8rem;
				}
			}

			p {
				margin: 0;
			}

			h3 {
				margin: 0 0 0.25rem;
			}
		}

		@for $i from 0 through 20 {
			&:nth-of-type(#{$i}) {
				.background::after {
					content: url('/decorations/toolCardBackground/toolCard_background_#{$i%3}.svg');
					position: absolute;
					top: 75%;
					right: 0rem;

					@if $i%2 == 0 {
						left: 1rem;
					}
				}
			}
		}

		&:nth-last-of-type(1) {
			.background::after {
				display: none;
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			margin-inline: auto;
			padding: 0 var(--outer-spacing);

			.content {
				max-width: 35rem;
				margin-inline: auto;
			}
		}
	}

	@media (max-width: 38rem) {
		.wrapper {
			.content {
				box-shadow: none;
				flex-direction: column;
				align-items: center;
				gap: 1rem;
				padding-bottom: 1.25rem;
			}

			@for $i from 0 through 20 {
				&:nth-of-type(#{$i}) {
					.background::after {
						content: url('/decorations/toolCardBackground/toolCard_background_#{$i%3}.svg');
						position: absolute;
						top: 85%;
						right: -5rem;

						@if $i%2 == 0 {
							left: -5rem;
						}
					}
				}
			}
		}
	}

	@media (max-width: 28.75rem) {
		.wrapper {
			.content {
				padding: 1rem 1rem;
			}
		}
	}
</style>
