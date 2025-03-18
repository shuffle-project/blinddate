<script lang="ts">
	import BigPictureMobile from '$lib/components/bigPicture/BigPictureMobile.svelte';
	import BigPictureRoom from '$lib/components/bigPicture/BigPictureRoom.svelte';
	import { SUPPORT_OPTIONS, type SupportOptionId } from '$lib/constants/bigPicture';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';

	let selectedOption: SupportOptionId | '' = $state('');
	const supportOptions = SUPPORT_OPTIONS.filter((option) => option.id !== 'idle');

	function handleSupportSelection(id: SupportOptionId) {
		selectedOption = selectedOption !== id ? id : '';
	}
</script>

<svelte:head>
	<title>Das große Ganze - BlindDate</title>
</svelte:head>

<SubpageTitle>Das große Ganze</SubpageTitle>

<div class="wrapper">
	{#if ENVIRONMENT.showBigPictureContent}
		<!-- <p>
			Werden Lernumgebungen von vornherein so geplant und gestaltet, dass sie für alle Lernenden
			zugänglich sind, können einige aufwändige Nachbesserungen und zusätzliche, zeitintensive
			Anpassungen vermieden werden. Viele (Unterstützungs-)Maßnahmen, die bereits zu Beginn
			mitgedacht und umgesetzt werden, kommen vielen Studierenden zu Gute – vielleicht sogar
			Studierenden, die Sie im ersten Moment gar nicht mitbedacht haben.
		</p> -->

		<p>
			Viele (Unterstützungs-) Maßnahmen, die bereits zu Beginn mitgedacht und umgesetzt werden,
			kommen vielen Studierenden zu Gute – vielleicht sogar Studierenden, die Sie im ersten Moment
			gar nicht mitbedacht haben.
		</p>

		<p>Lassen Sie uns einen Blick auf diese möglichen Maßnahmen werfen.</p>
		<!-- 
		<p>
			Im Folgenden ist ein Vorlesungssaal voller Studierender abgebildet. Wählen Sie weiter unten
			eine Unterstützungsmöglichkeit aus und sehen Sie, wer alles davon profitiert. Anschließend
			können Sie auf die Studierenden klicken, um mehr Informationen zu bekommen.
		</p> -->

		<div class="desktop">
			<BigPictureRoom {selectedOption} />
			<fieldset
				id="support-list"
				aria-label="Unterstützungsmöglichkeiten"
				class="support-list desktop"
			>
				{#each supportOptions as option, i}
					<label>
						<input
							onclick={() => handleSupportSelection(option.id)}
							type="radio"
							value={option.name}
							name="support-list"
							checked={selectedOption === option.id}
						/>
						<span>{option.name}</span>
					</label>
				{/each}
			</fieldset>
		</div>
		<div class="mobile">
			<BigPictureMobile />
		</div>
	{:else}
		<div class="in-progress-wrapper">
			<p>
				Die Seite befindet sich aktuell noch in der Entwicklung. Bleiben Sie gespannt und schauen
				Sie gerne immer wieder Mal vorbei.
			</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		padding-inline: var(--outer-spacing);
		margin-top: 2.5rem;

		.in-progress-wrapper {
			min-height: 30vh;
		}

		p {
			max-width: 35rem;
			margin-inline: auto;
		}

		.mobile {
			display: none;
		}

		.support-list {
			width: 100%;
			max-width: var(--content-max-width);
			margin-inline: auto;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 1rem;
			background-color: var(--color-black);

			border-bottom-left-radius: 2.5rem;
			border-bottom-right-radius: 2.5rem;
			border: none;
			box-sizing: border-box;

			padding: 0 1rem 1rem;
			transform: translateY(-0.25rem);

			label {
				color: rgba(var(--color-white-rgb), 0.8);
				display: flex;
				align-items: center;
				cursor: pointer;

				&:focus,
				&:hover {
					input {
						outline: 2px solid var(--color-white);
						outline-offset: 2px;
					}
				}

				span {
					margin-top: 0.25rem;
				}

				input {
					background-color: transparent;
					-webkit-appearance: none;
					appearance: none;
					margin: 0;
					margin-right: 0.375rem;
					color: var(--color-white);
					min-width: 1.625rem;
					height: 1.625rem;
					border: 2px solid rgba(var(--color-white-rgb), 0.8);
					border-radius: 50%;

					display: grid;
					place-content: center;

					&:focus {
						outline: 2px solid var(--color-white);
						outline-offset: 2px;
					}

					&:checked {
						background-color: var(--color-white);
					}

					&:checked:before {
						content: '';
						width: 0.875rem;
						height: 0.875rem;
						box-shadow: inset 1rem 1rem var(--color-black);

						transform-origin: bottom left;
						clip-path: polygon(13% 50%, 5% 65%, 45% 100%, 100% 10%, 83% 0%, 40% 75%);
					}
				}
			}
		}
	}

	@media (max-width: 68.75rem) {
		.wrapper {
			.desktop {
				display: none;
			}
			.mobile {
				display: block;
			}
		}
	}
</style>
