<div class="title-wrapper">
	<h1 class="responsive"><slot /></h1>
</div>

<style lang="scss">
	.title-wrapper {
		background-color: var(--color-black);
		display: flex;
		justify-content: center;

		h1 {
			width: 100%;
			max-width: var(--content-max-width);

			color: var(--color-white);
			text-align: center;

			padding-inline: 2.77rem;
		}
	}

	@media (max-width: 59.3125rem) {
		.title-wrapper {
			h1 {
				padding-inline: 1.33rem;
			}
		}
	}
</style>
