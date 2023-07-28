<script lang="ts">
	import Icon from './Icon.svelte';
	import Modal from './Modal.svelte';

	let modal: Modal;
</script>

<div class="wrapper">
	<button on:click={() => modal.toggleModalDisplay()}> Willkommenstext öffnen </button>
	<hr aria-hidden="true" />
	<p>Webseite erkundet und bereit?</p>
	<a href="https://survey.hdm-stuttgart.de/227497?lang=de">Zur Umfrage</a>
</div>

<Modal bind:this={modal}>
	<svelte:fragment slot="headline">Herzlich Willkommen auf BlindDate</svelte:fragment>
	<svelte:fragment slot="content">
		<p>Auf dieser Webseite werden Sie <b>Gabriel</b> kennenlernen.</p>
		<p>
			Gabriel ist eine von insgesamt 8 virtuellen Persona, die Ihnen von sich und ihrem
			Studienalltag erzählt.
		</p>
		<p>
			Gabriel wird Ihnen seine Strategien erklären, die er im Studienalltag nutzt. Er kann Ihnen
			Tipps und Tricks an die Hand geben, damit digitale Lehre für Studierende mit einer
			Sehbeeinträchtigung barrierefreier wird.
		</p>
		<p>
			Obwohl Gabriel nur virtuell existiert, ist er aus realen Erfahrungen von Studierenden mit
			einer Sehbeeinträchtigung entstanden. Mithilfe einer großen Datenerhebung, qualitativen
			Interviews und in ständigen <span lang="en">Feedback-Loops</span> mit Studierenden mit einer
			Sehbeeinträchtigung haben wir – das Team des Forschungsprojekt
			<span lang="en">SHUFFLE</span> - diese verschiedenen Perspektiven sammeln können. Damit nicht nur
			Gabriel zu Wort kommt, sondern mehr Vielfalt dargestellt wird, finden Sie neben Gabriels persönlichen
			Erläuterungen auch allgemein gehaltene Textpassagen.
		</p>

		<div class="hint-wrapper">
			<div class="hint">
				<Icon img="attention" size="smedium" />
				<p>Hinweis</p>
			</div>

			<p class="hint-text">
				BlindDate sollte auf allen Endgeräten mit einem aktuellen und gängigen Browser nutzbar sein.
				Bis auf das Simulationsspiel sind alle Inhalte barrierefrei zugänglich. Sollten Sie dennoch
				auf Barrieren stoßen, melden Sie sich bitte bei uns.
			</p>
		</div>
		<b>
			Bitte teilen Sie uns Ihre Gedanken und Rückmeldungen mit und nutzen die Links zur Umfrage am
			Anfang oder am Ende der Seite.
		</b>
		<p class="signature">Das <span lang="en">SHUFFLE</span>-BlindDate-Team</p>
		<p class="shuffle-url">www.shuffle-projekt.de</p>
		<div class="spacer" />
	</svelte:fragment>
</Modal>

<style lang="scss">
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
