<script lang="ts">
	import { detect } from 'detect-browser';
	const isSafari = detect()!.name == 'safari';
	let flipped = false;

	export let front: string;
	export let back: string;

	function onKeydown(ev: KeyboardEvent) {
		if (ev.key === ' ' || ev.key === 'Enter') {
			ev.preventDefault();
			flipped = !flipped;
		}
	}
</script>

<div class="wrapper" aria-live={isSafari ? 'polite' : null}>
	<div
		tabindex="0"
		class="flip-card {flipped ? 'flipped' : ''}"
		on:click={() => {
			flipped = !flipped;
		}}
		on:keydown={onKeydown}
		role="button"
		aria-roledescription="Umdrehbare Karte"
		aria-labelledby="flip-card-inner"
	>
		<div id="flip-card-inner" class="flip-card-inner">
			<div role="group" id="flip-card-front" class="flip-card-front" aria-hidden={flipped}>
				<span class="site-info">Vorderseite</span>
				<div class="main">{front}</div>
			</div>
			<div role="group" id="flip-card-back" class="flip-card-back" aria-hidden={!flipped}>
				<span class="site-info">Rückseite</span>
				<div class="main">{back}</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.wrapper {
			max-width: calc(var(--content-element-max-width) - 1.66rem);
			width: 100%;
			margin-left: 1.66rem;
		}
	}

	.wrapper {
		width: 100%;
		margin-top: 3rem;
		margin-bottom: 3rem;
		display: flex;
		justify-content: center;
	}

	.flip-card {
		background-color: transparent;
		width: 17rem;
		height: 27rem;
		perspective: 1000px;
		outline: 4px solid transparent;
		border-radius: 1.11rem;
		border: 2px solid transparent;

		cursor: pointer;

		&:focus-within {
			outline: 4px solid var(--color-blue);
			border-radius: 1.11rem;
			border: 2px solid transparent;
		}

		&:hover {
			outline: 4px solid var(--color-blue);
			border-radius: 1.11rem;
			border: 2px solid transparent;
		}
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
		@media prefers-reduced-motion {
			transition: transform 2s;
		}
	}

	.flip-card.flipped .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		border-radius: 1.11rem;
		box-shadow: 0px 6px 10px rgba(7, 13, 28, 0.15);

		display: flex;
		flex-direction: column;
		text-align: start;
		padding: 1.66rem 2.77rem;
		box-sizing: border-box;

		.site-info {
			margin-bottom: 1.11rem;
		}

		.main {
			font-weight: bold;
		}
	}

	.flip-card-front {
		background-color: var(--color-black);
		color: var(--color-white);
		border: 1px solid var(--color-white);

		.main {
			font-size: 4rem;
			line-height: 110%;
		}
	}

	.flip-card-back {
		transform: rotateY(180deg);
		background-color: var(--color-white);
		color: var(--color-black);
		border: 1px solid var(--color-black);

		.main {
			font-size: 1.5rem;
			line-height: 140%;
		}
	}
</style>
