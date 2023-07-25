<script lang="ts">
	import { base } from '$app/paths';
	import Icon from './Icon.svelte';

	let firstInteractionDone = false;

	const title = 'Zahlen und Fakten';
	let contents: { text: string; img?: { path: string; alt: string } }[] = [
		{
			text: '9 von 10 Zahnärzte empfehlen die Platzhaltertexte vor dem Release zu entfernen'
		},
		{
			text: 'Das ist Slide nummer 2',
			img: {
				path: '/five_percent.svg',
				alt: 'Eine ausgefüllte Person und 19 unausgefüllte Personen'
			}
		},
		{
			text: 'Hier kommt eine dritte slide'
		},
		{
			text: 'Und zum Ende kommt die vierte'
		}
	];

	let lastAction: 'lower' | 'higher' = 'higher';
	let currentIndex = 0;

	function setFirstContact() {
		if (!firstInteractionDone) firstInteractionDone = true;
	}

	function onJumpToSlide(index: number) {
		if (index < currentIndex) {
			lastAction = 'lower';
		} else {
			lastAction = 'higher';
		}
		currentIndex = index;
		setFirstContact();
	}

	function onPreviousSlide() {
		lastAction = 'lower';
		if (currentIndex === 0) {
			currentIndex = contents.length - 1;
		} else {
			currentIndex--;
		}
		setFirstContact();
	}

	function onNextSlide() {
		lastAction = 'higher';
		if (currentIndex === contents.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
		setFirstContact();
	}
</script>

<h2 class="heading_desktop">{title}</h2>
<div class="wrapper">
	<img class="top_wave" src={base + '/decorations/top_blue_wave.svg'} alt="" />
	<div class="carousel_box">
		<div class="wrapper-shadow" />
		<h2 class="heading_smartphone">{title}</h2>
		<section class="carousel" aria-label="Karusell">
			<div
				aria-hidden="true"
				class="carousel-visible"
				style:transform={`translateX(${currentIndex * -1 * 100}%)`}
			>
				{#each contents as carouselItem}
					<div class="carousel-item-wrapper">
						<div class="carousel-item">
							{#if carouselItem.img}
								<img src={base + carouselItem.img?.path} alt={carouselItem.img?.alt} />
							{/if}
							<p>
								{carouselItem.text}
							</p>
						</div>
					</div>
				{/each}
			</div>

			<div aria-live={firstInteractionDone ? 'polite' : null} class="visually-hidden">
				{#if contents[currentIndex].img}
					<img src={contents[currentIndex].img?.path} alt={contents[currentIndex].img?.alt} />
				{/if}
				{contents[currentIndex].text}
			</div>

			<div
				on:focusout={() => {
					if (firstInteractionDone) firstInteractionDone = false;
				}}
				class="carousel-nav"
			>
				<button
					class="btn-prev"
					on:click={onPreviousSlide}
					aria-label="Wechseln zum vorherigen Item"
				>
					<Icon img="chevron-left-placeholder" />
				</button>
				{#if contents.length > 3}
					<span>{currentIndex + 1} von {contents.length}</span>
				{:else}
					{#each contents as { }, i}
						<button
							on:click={() => onJumpToSlide(i)}
							class={currentIndex === i ? 'active' : 'inactive'}
							aria-pressed={currentIndex === i}
							aria-label="Wechseln zu Item {i + 1} von {contents.length}"
						/>
					{/each}
				{/if}
				<button class="btn-next" aria-label="Wechseln zum nächsten Item" on:click={onNextSlide}>
					<Icon img="chevron-right-placeholder" />
				</button>
			</div>
		</section>
	</div>

	<img class="buttom_wave" src={base + '/decorations/buttom_blue_wave.svg'} alt="" />
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.carousel_box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-lavender);
	}

	.heading_smartphone {
		margin: 0;
		padding: 0;
	}

	.carousel {
		overflow-x: hidden;
		z-index: 1;
		.carousel-visible {
			margin-top: 1.167rem;
			display: flex;
			transition: transform 1s ease-in-out;

			.carousel-item-wrapper {
				min-width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;

				.carousel-item {
					width: calc(100% - 3.5rem);
					max-width: calc(var(--content-element-max-width) - 6.66rem);

					min-height: 15rem;

					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;

					border: 1px solid var(--color-white);
					box-shadow: 0px 3px 5px 3px rgba(var(--color-black-rgb), 0.05);
					border-radius: 1.11rem;

					background-color: var(--color-white);

					img {
						max-width: 75%;
						max-height: 50%;
						margin-bottom: 1rem;
					}

					p {
						font-weight: bold;
						text-align: center;
						width: 90%;
					}
				}
			}
		}
	}

	.carousel-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 1.11rem;
		margin-bottom: 1.11rem;
		margin-left: 1.5rem;
		margin-right: 1.5rem;
		button {
			margin: 0;
			padding: 0;
			cursor: pointer;
		}

		button:focus {
			outline: 2px solid var(--color-blue);
		}

		.active,
		.inactive {
			width: 1.333rem;
			height: 1.333rem;
			border-radius: 50%;
		}
		.active {
			border: 1px solid var(--color-black);
			background-color: var(--color-black);
		}
		.inactive {
			border: 1px solid var(--color-black);
			background-color: var(--color-white);
		}

		.btn-next,
		.btn-prev {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 100%;
			border: 1px solid var(--color-white);
			background-color: var(--color-white);
		}
	}

	.visually-hidden {
		position: absolute;
		left: -10000px;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	@media (min-width: 30rem) {
		.carousel {
			.carousel-visible {
				.carousel-item {
					img {
						max-width: 60%;
					}
				}
			}
		}
	}
	@media (min-width: 59.375rem) {
		.wrapper {
			max-width: calc(var(--content-element-max-width) - 1.66rem);
			margin-left: 1.66rem;
			background-color: var(--color-lavender);
			border-radius: 1.11rem;
			position: relative;
			.wrapper-shadow {
				position: absolute;
				z-index: 10;
				background-color: transparent;
				width: 100%;
				height: 100%;
				box-shadow: inset 0px 0px 1rem rgba(var(--color-black-rgb), 0.3);
				border-radius: 1.11rem;
				pointer-events: none;
			}
		}

		.heading_smartphone {
			display: none;
		}

		.heading_desktop {
			display: inline-block;
			margin-top: 10rem;
		}

		.carousel_box {
			background-color: transparent;
		}

		.top_wave,
		.buttom_wave {
			display: none;
		}

		.carousel {
			.carousel-visible {
				.carousel-item {
					min-width: 91%;
					margin-inline: 4%;
					padding: 1.11rem 2.22rem;
					box-sizing: border-box;

					img {
						max-width: 50%;
					}
				}
			}
		}
	}

	@media (max-width: 59.3125rem) {
		.heading_desktop {
			display: none;
		}

		.top_wave,
		.buttom_wave {
			max-width: 100%;
		}
	}
</style>
