<script lang="ts">
	export let title: string;
	export let image: string;
	export let langTitle = 'de';
</script>

<div class="wrapper">
	<div class="content">
		<div class="text">
			<h3 id={title.replace(' ', '')} class="title" lang={langTitle}>{title}</h3>
			<p>
				<slot />
			</p>
		</div>
		<img class="image" src={image} alt="" role="presentation" />
	</div>
	<div aria-hidden="true" class="background" />
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		max-width: var(--content-element-max-width);

		.content {
			background-color: var(--color-white);
			border: 1px solid var(--color-lavender);
			border-radius: 0.85rem;

			max-width: calc(var(--content-element-max-width) - 6.66rem);
			padding: 1rem 1.66rem;
			box-sizing: border-box;
			margin: 0 3.33rem 1.66rem 3.33rem;

			display: flex;
			justify-content: space-between;
			gap: 2rem;

			position: relative;
			z-index: 2;

			box-shadow: 0px 6px 10px rgba(var(--color-black-rgb), 0.1);

			p {
				margin: 0;
			}

			h3 {
				margin: 0 0 0.22rem;
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
			padding: 0 1.33rem;

			.content {
				max-width: 31.04rem;
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
				padding-bottom: 1.11rem;
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
</style>
