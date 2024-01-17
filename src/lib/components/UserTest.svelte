<script lang="ts">
	import { page } from '$app/stores';
	import Icon from './Icon.svelte';
	import Modal from './Modal.svelte';

	export let bottomOfPage = false;

	let modal: Modal;
	let modalButton: HTMLButtonElement;

	let persona = '';
	let malePersona = false;
	let simulationGame = false;
	let disability: 'Hörbehinderung' | 'Sehbeeinträchtigung' | '' = '';

	let linkToPersonaQuestionnaire = '';

	$: {
		let url = $page.url.pathname;

		if (url.includes('gabriel')) {
			persona = 'Gabriel';
			malePersona = true;
			simulationGame = true;
			disability = 'Sehbeeinträchtigung';
			linkToPersonaQuestionnaire = 'https://survey.hdm-stuttgart.de/227497?lang=de';
		} else if (url.includes('hannah')) {
			persona = 'Hannah';
			malePersona = false;
			simulationGame = true;
			disability = 'Hörbehinderung';
			linkToPersonaQuestionnaire = 'https://survey.hdm-stuttgart.de/282499?lang=de';
		} else if (url.includes('maxi')) {
			persona = 'Maxi';
			linkToPersonaQuestionnaire = 'https://survey.hdm-stuttgart.de/434893?lang=de';
		} else {
			persona = '';
			linkToPersonaQuestionnaire = '';
		}
	}
</script>

<div class="wrapper">
	{#if !bottomOfPage}
		<button bind:this={modalButton} on:click={() => modal.toggleModalDisplay()}>
			Willkommenstext öffnen
		</button>
		<hr aria-hidden="true" />
	{/if}
	<p>{persona}-Seite erkundet und bereit?</p>
	<a href={linkToPersonaQuestionnaire}>Zur {persona}-Umfrage</a>
</div>

{#if !bottomOfPage}
	<Modal bind:this={modal}>
		<svelte:fragment slot="headline">Herzlich Willkommen auf BlindDate</svelte:fragment>
		<svelte:fragment slot="content">
			{#if persona === 'Maxi'}
				<p>Auf dieser Unterseite werden Sie Maxi kennenlernen.</p>
				<p>
					Maxi ist eine von mehreren virtuellen Studierenden, die Ihnen von sich und ihrem
					Studienalltag erzählen. Maxi ist eine „Persona“ mit einer psychischen Erkrankung und
					erklärt Ihnen genutzte Strategien und gibt Ihnen Tipps und Tricks an die Hand, um digitale
					Lehre für Studierende mit psychischen Erkrankungen barriereärmer zu gestalten.
				</p>
				<p>
					Obwohl Maxi nur virtuell existiert, wurden für die Entwicklung reale Erfahrungen von
					Studierenden mit psychischen Erkrankungen herangezogen. Mithilfe einer großen
					Datenerhebung, qualitativen Interviews und in ständigen Feedback-Loops mit Studierenden
					mit verschiedenen, studienerschwerenden Beeinträchtigungen haben wir – das Team des
					Forschungsprojekt SHUFFLE – diese Perspektiven sammeln können.
				</p>
				<p>
					Damit nicht nur Maxi zu Wort kommt, sondern mehr Vielfalt dargestellt wird, finden Sie
					neben Maxis persönlichen Erläuterungen auch allgemein gehaltene Textpassagen.
				</p>
			{:else}
				<p>Auf dieser Webseite werden Sie <strong>{persona}</strong> kennenlernen.</p>
				<p>
					{persona} ist eine von mehreren virtuellen Personas, die Ihnen von sich und ihrem Studienalltag
					erzählt.
				</p>
				<p>
					{persona} wird Ihnen {malePersona ? 'seine' : 'ihre'} Strategien erklären, die {malePersona
						? 'er'
						: 'sie'} im Studienalltag nutzt. {malePersona ? 'Er' : 'Sie'} kann Ihnen Tipps und Tricks
					an die Hand geben, damit digitale Lehre für Studierende mit einer {disability} barrierefreier
					wird.
				</p>
				<p>
					Obwohl {persona} nur virtuell existiert, ist {malePersona ? 'er' : 'sie'} aus realen Erfahrungen
					von Studierenden mit einer {disability} entstanden. Mithilfe einer großen Datenerhebung, qualitativen
					Interviews und in ständigen <span lang="en">Feedback-Loops</span> mit Studierenden mit
					einer
					{disability} haben wir – das Team des Forschungsprojekt
					<span lang="en">SHUFFLE</span> - diese verschiedenen Perspektiven sammeln können. Damit
					nicht nur
					{persona} zu Wort kommt, sondern mehr Vielfalt dargestellt wird, finden Sie neben {persona}s
					persönlichen Erläuterungen auch allgemein gehaltene Textpassagen.
				</p>
			{/if}

			<div class="hint-wrapper">
				<div class="hint">
					<Icon img="attention" size="smedium" />
					<p>Hinweis</p>
				</div>

				{#if simulationGame}
					<p class="hint-text">
						BlindDate sollte auf allen Endgeräten mit einem aktuellen und gängigen Browser nutzbar
						sein. Bis auf das Simulationsspiel sind alle Inhalte barrierefrei zugänglich. Sollten
						Sie dennoch auf Barrieren stoßen, melden Sie sich bitte bei uns.
					</p>
				{:else}
					<p class="hint-text">
						BlindDate sollte auf allen Endgeräten mit einem aktuellen und gängigen Browser nutzbar
						sein. Alle Inhalte sind barrierefrei zugänglich. Sollten Sie dennoch auf Barrieren
						stoßen, melden Sie sich bitte bei uns.
					</p>
				{/if}
			</div>
			<div class="call-for-action">
				Bitte teilen Sie uns Ihre Gedanken und Rückmeldungen mit und nutzen die Links zur Umfrage am
				Anfang oder am Ende der Seite.
			</div>
			<p class="signature">Das <span lang="en">SHUFFLE</span>-BlindDate-Team</p>
			<p class="shuffle-url">www.shuffle-projekt.de</p>
		</svelte:fragment>
	</Modal>
{/if}

<style lang="scss">
	.call-for-action {
		font-weight: bold;
	}

	.signature {
		margin-bottom: 0;
	}

	.shuffle-url {
		margin: 0;
		padding: 0;
		font-size: 0.88rem;
		font-style: italic;
	}
	.hint-wrapper {
		background-color: var(--color-lavender);
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 1rem;
		.hint {
			display: flex;
			flex-direction: row;
			gap: 0.5rem;

			p {
				font-weight: bold;
			}
		}

		.hint-text {
			margin-top: -1rem;
		}
	}

	.wrapper {
		max-width: 11.5rem;

		button {
			font-size: 0.88rem;
			// padding: 0.33rem 0;
			display: block;
			width: 100%;
			padding: 0.33rem 0.5rem;
			background-color: var(--color-black);
			color: var(--color-white);
			border: 2px solid transparent;
			border-radius: 0.33rem;
			outline: none;
			text-decoration: underline;

			cursor: pointer;

			margin-bottom: 0.2rem;

			&:hover,
			&:focus {
				border: 2px solid var(--color-light-blue);
				text-decoration: none;
			}
		}

		hr {
			color: rgba(var(--color-white-rgb), 0.5);
		}

		p {
			color: var(--color-white);
			font-size: 0.88rem;
			text-align: center;
			margin: 0;
			margin-bottom: 0.33rem;
		}

		a {
			background-color: var(--color-light-blue);
			color: var(--color-black);
			font-size: 1.22rem;
			font-weight: bold;
			text-decoration: none;
			padding: 0.4rem 0;
			display: block;
			text-align: center;
			border-radius: 0.33rem;

			outline: 2px solid transparent;
			border: 2px solid transparent;

			&:hover,
			&:focus {
				border: 2px solid var(--color-black);
				outline: 2px solid var(--color-light-blue);
			}
		}
	}
</style>
