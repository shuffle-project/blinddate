<script lang="ts">
	import { getRandomId } from './utils';

	export let link: string;
	export let marginBottom = false;
	const randomId = getRandomId();
</script>

<div class="container" class:marginBottom>
	<div class="line" />

	<div class="content">
		<p class="text">
			<span id="text-before-{randomId}">
				<slot name="textBefore" />
			</span>
			<span>
				<a
					class="link focus-indicator"
					href={link}
					aria-describedby="text-before-{randomId} text-after-{randomId}"
				>
					<slot name="linkText" />
				</a>
			</span>
			<span id="text-after-{randomId}">
				<slot name="textAfter" />
			</span>
		</p>
	</div>
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.container {
			margin: 3.375rem 0 0 3.375rem;
		}
	}

	@media (max-width: 59.3125rem) {
		.container {
			width: 100%;
			margin-inline: auto;
			padding: 0 var(--outer-spacing);
			box-sizing: border-box;
		}
	}

	.container {
		max-width: 33.5rem;
		display: flex;
		gap: 1.625rem;
		margin-top: 1.875rem;

		&.marginBottom {
			margin-bottom: 1.375rem;
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
		font-weight: 700;
	}
</style>
