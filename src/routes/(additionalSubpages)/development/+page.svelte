<script>
	import { base } from '$app/paths';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';
</script>

<div class="wrapper">
	<SubpageTitle>Die Persona-Entwicklung im Detail</SubpageTitle>
	<div class="persona-progress-wrapper" aria-hidden="true">
		<div class="persona-progress">
			<img class="progress-1" src="{base}/personas/aleksandr/aleksandr-progress-1.png" alt="" />
			<img class="progress-2" src="{base}/personas/aleksandr/aleksandr-progress-2.png" alt="" />
			<img class="progress-3" src="{base}/personas/aleksandr/aleksandr-progress-3.png" alt="" />
			<img class="progress-4" src="{base}/personas/aleksandr/aleksandr-progress-4.png" alt="" />
			<img class="progress-5" src="{base}/personas/aleksandr/aleksandr-neutral.svg" alt="" />
		</div>
	</div>
	<div class="content-wrapper">
		<div class="content"></div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--color-background-body);

		.persona-progress-wrapper {
			background: linear-gradient(var(--color-black) 50%, var(--color-background-body) 50%);
			padding-inline: 2.77rem;

			.persona-progress {
				margin-inline: auto;
				height: clamp(14rem, 28vw + 1rem, 16.66rem);
				width: 100%;
				max-width: var(--content-max-width);
				background: linear-gradient(315deg, var(--color-turquoise), var(--color-green));
				border-radius: 2.22rem;

				display: flex;
				align-items: center;
				justify-content: space-around;

				img {
					height: clamp(12rem, 23vw + 1rem, 15rem);
				}
			}
		}

		.content-wrapper {
			background-color: var(--color-background-body);

			.content {
				height: 10rem;
			}
		}
	}

	@media (max-width: 43.5rem) {
		.wrapper {
			.persona-progress-wrapper {
				.persona-progress {
					height: clamp(12rem, 45vw + 1rem, 14rem);

					img {
						height: clamp(10rem, 40vw + 1rem, 12rem);
					}
					.progress-3,
					.progress-4 {
						display: none;
					}
				}
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			.persona-progress-wrapper {
				padding-inline: 1.33rem;
			}
		}
	}
</style>
