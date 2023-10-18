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
	@media (min-width: 40.625rem) {
		.wrapper {
			max-width: var(--content-element-max-width);

			@for $i from 0 through 20 {
				&:nth-of-type(#{$i}) {
					.background::after {
						content: url('/decorations/toolCardBackground/toolCard_background_#{$i%3}.svg');
						position: absolute;
						top: 75%;
						right: 1rem;

						@if $i%2 == 0 {
							left: 1rem;
						}
					}
				}
			}
			.content {
				margin-left: 3.33rem;
				margin-right: 3.33rem;
				flex-direction: row;
				align-items: center;
				border: 1px solid var(--color-lavender);

				box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);

				.image {
					margin-left: 2.27rem;
				}
			}
		}
	}

	@media (max-width: 40.625rem) {
		.wrapper {
			max-width: 100%;

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
			.content {
				margin-left: 1.33rem;
				margin-right: 1.33rem;
				flex-direction: column;
				align-items: center;
				border: 1px solid var(--color-lavender);

				.image {
					margin-top: 1.11rem;
				}
			}
		}
	}

	@media (min-width: 40.625rem) and (max-width: 59.375rem) {
		.wrapper {
			margin-inline: auto;
		}
	}

	.wrapper {
		position: relative;

		&:nth-last-of-type(1) {
			.background::after {
				display: none;
			}
		}

		.content {
			position: relative;
			z-index: 2;
			margin-bottom: 1.66rem;
			background-color: var(--color-white);

			border-radius: 1.11rem;

			padding: 1.11rem 1.33rem;

			display: flex;

			.text {
				position: relative;
				z-index: 2;
				h3 {
					margin: 0;
					margin-bottom: 0.2rem;
				}
				p {
					margin: 0;
				}
			}
		}
	}
</style>
