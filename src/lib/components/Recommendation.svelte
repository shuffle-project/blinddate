<script lang="ts">
	export let link: string;
	export let marginBottom = false;
</script>

<div class="container" class:marginBottom>
	<div class="line" />

	<div class="content">
		<p class="text">
			<slot name="textBefore" />

			<a class="link focus-indicator" href={link}>
				<slot name="linkText" />
			</a>

			<slot name="textAfter" />
		</p>
	</div>
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.container {
			margin: 3.33rem 0 0 3.33rem;
			max-width: 29.33rem;
		}
	}

	@media (max-width: 59.3125rem) {
		.container {
			max-width: calc(26rem + 2.66rem);
			width: 100%;
			margin-inline: auto;
			padding: 0 1.33rem;
			box-sizing: border-box;
		}
	}

	.container {
		display: flex;
		gap: 1.65rem;
		margin-top: 2rem;

		&.marginBottom {
			margin-bottom: 1.33rem;
		}
	}

	.line {
		min-width: 4px;
		border-radius: 1rem;
		background-color: var(--color-lavender);
	}
	.text {
		display: inline;
	}
	.link {
		font-weight: 600;
	}
	.content {
		margin: 0.3rem 0rem 0.3rem 0rem;
		max-width: 27.7rem;
	}
</style>
