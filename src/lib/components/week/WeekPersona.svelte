<script lang="ts">
	import { base } from '$app/paths';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import type { Day } from '$lib/interfaces/week.interfaces';

	let { persona, days }: { persona: Persona; days: Day[] } = $props();
</script>

<div
	class="week-figure-wrapper {days.filter((obj) => obj.smiley === 'sad').length > 2
		? 'flipped'
		: ''}"
>
	<div class="week-figure-inner">
		<div class="week-figure-front">
			<div class="week-figure-background">
				<img
					class="week-figure {days.filter((obj) => obj.smiley === 'happy').length < 3
						? 'hidden'
						: ''}"
					aria-hidden={days.filter((obj) => obj.smiley === 'happy').length < 3}
					src="{base}/personas/{persona.id}/{persona.id}-happy.svg"
					alt="{persona.name} ist zufrieden, da {days.filter((obj) => obj.smiley === 'happy')
						.length} von 5 Tagen in dieser Woche gut verliefen."
					loading="lazy"
				/>
			</div>
		</div>
		<div class="week-figure-back">
			<div class="week-figure-background">
				<img
					class="week-figure"
					aria-hidden={days.filter((obj) => obj.smiley === 'sad').length < 3}
					src="{base}/personas/{persona.id}/{persona.id}-sad.svg"
					alt="{persona.name} steht in einer erschöpften Pose da, da {days.filter(
						(obj) => obj.smiley === 'sad'
					).length} von 5 Tagen in dieser Woche schlecht verliefen"
					loading="lazy"
				/>
			</div>
		</div>
	</div>

	<p class="week-figure-text" aria-hidden="true">
		{#if days.filter((obj) => obj.smiley === 'happy').length >= 3}
			{days.filter((obj) => obj.smiley === 'happy').length} von 5 Tage waren gut
		{:else}
			{days.filter((obj) => obj.smiley === 'sad').length} von 5 Tage waren schlecht
		{/if}
	</p>
</div>

<style lang="scss">
	.week-figure-wrapper {
		perspective: 1000px;
		margin-top: 1.5rem;
		margin-inline: auto;
		width: 15rem;
		height: 34rem;
	}

	.week-figure-text {
		text-align: center;
		margin: 0 auto;

		padding: 0.25rem;
		font-size: 1rem;

		position: absolute;
		inset: auto 0 0 0;
	}

	.week-figure-inner {
		position: relative;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	.week-figure-wrapper.flipped .week-figure-inner {
		transform: rotateY(180deg);
	}

	.week-figure-front,
	.week-figure-back {
		position: absolute;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.week-figure-back {
		transform: rotateY(180deg);
	}

	.week-figure {
		height: 100%;
		max-height: 30rem;
		z-index: 2;

		transform: translateY(5%);
		opacity: 100%;
		transition: all 0s;
		transition-delay: 0.2s;

		&.hidden {
			//for firefox, otherwise you can see the feet in the background
			opacity: 0%;
		}
	}

	.week-figure-background {
		background: var(--color-gradient-persona);
		width: 15rem;
		border-radius: 2.5rem;
		display: flex;
		justify-content: center;
	}
</style>
