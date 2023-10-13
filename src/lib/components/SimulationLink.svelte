<script lang="ts">
	import { base } from '$app/paths';
	import Icon from './Icon.svelte';
	import Modal from './Modal.svelte';
	export let image: string;
	export let warningtext: string;
	export let pathtext: string;
	export let personaID: string;

	let modal: Modal;

	function toggleModalDisplay() {
		if (modal) modal.toggleModalDisplay();
	}
</script>

<div class="sl-container" id="simulation-link-{personaID}">
	<div class="sl-content">
		<img class="sl-img" src={image} alt="" role="presentation" />
		<div class="text-container">
			<div class="hint-container">
				<Icon img="attention" size="smedium" />
				<p class="hint">Hinweis</p>
			</div>
			<p class="warning-text">
				{warningtext}
			</p>

			<a class="sim-link" href={pathtext}>Zur Simulation</a>
		</div>
	</div>
	<button on:click={() => toggleModalDisplay()}>Informationen zur Simulation</button>
	<Modal bind:this={modal}>
		<svelte:fragment slot="headline">Informationen zur Simulation</svelte:fragment>
		<svelte:fragment slot="content">
			{#if personaID === 'gabriel'}
				<p>
					Das vorliegende Spiel ist aufgrund seiner spezifischen Spielmechanik leider nicht
					vollständig barrierefrei. Die Simulation einer visuellen Beeinträchtigung kann mit einem
					Screenreader oder ähnlichen Hilfsmitteln nicht vollständig nachempfunden werden. Um die
					Spielinhalte dennoch zugänglich zu machen, folgt hier eine detaillierte Beschreibung
					derselben
				</p>

				<p id="game-explained">
					In diesem Simulationsspiel hat die spielende Person die Aufgabe, aus einem Foliensatz aus
					Gabriels Vorlesung "Ethik 1" im Studiengang "Soziale Arbeit" einige Quellen
					herauszuschreiben. Die vermeintlich einfache Aufgabe wird plötzlich erschwert, als das
					Sichtfeld des Spielers eingeschränkt wird (siehe <span lang="en">Screenshot</span> unten).
					Erst mit der Hilfe von Gabriel und dessen Strategie der ständigen Kopfbewegung können die Folien
					Stück für Stück aufgedeckt und die Aufgaben gelöst werden. Der Spieler bekommt ein Gefühl dafür,
					wie hilfreich eine gute Strukturierung der Folien ist, damit Gabriel die gesuchten Inhalte
					zügiger auffinden kann.
				</p>

				<img
					alt="Screenshot aus Gabriels Simulationsspiel"
					aria-describedby="game-explained"
					src={base + '/personas/gabriel/simulation-game.png'}
				/>

				<p>
					Die Strategie mit der ständigen Kopfbewegung spricht Gabriel in dem Screenshot mit den
					folgenden Worten auch an: "Mit einem eingeschränkten Gesichtsfeld ist die Aufgabe gar
					nicht so leicht, was? Mir hilft es, den Kopf viel hin und her zu bewegen, um mich in einem
					Dokument zurechtzufinden. Das mag für Außenstehende zunächst ungewöhnlich wirken, aber es
					funktioniert. Versuch's mal!"
				</p>
			{:else if personaID === 'hannah'}
				<p>Just a test</p>
			{/if}
		</svelte:fragment>
	</Modal>
</div>

<style lang="scss">
	img {
		max-width: 100%;
		aspect-ratio: 16/9;
		object-fit: contain;
		border-radius: 1rem;
	}

	.sl-container {
		max-width: var(--content-element-max-width);
		margin-top: 2rem;
		display: flex;
		flex-direction: column;

		button {
			margin: 1rem auto;
			padding: 0.5rem 1rem;

			border: 2px solid transparent;
			outline: 2px solid transparent;
			border-radius: 2rem;

			background-color: transparent;
			color: var(--color-blue);

			font-size: 0.88rem;
			cursor: pointer;

			&:hover,
			&:focus {
				border: 2px solid transparent;
				outline: 2px solid var(--color-blue);
			}
		}
	}
	.sl-content {
		display: flex;
		justify-content: left;
		background: var(--color-gradient-persona);
		padding: 1rem;
		border-radius: 1.5rem;
		margin-left: 3.33rem;
		margin-right: 3.33rem;

		.text-container {
			display: flex;
			flex-direction: column;
			justify-content: center;

			p {
				margin: 0;

				&.warning-text {
					margin-bottom: 0.5rem;
				}
			}
		}

		.sl-img {
			margin-left: -1rem;
			width: 12rem;
			height: 12rem;
		}

		.hint-container {
			display: flex;
			flex-direction: row;
			gap: 0.5rem;

			.hint {
				font-weight: bold;
			}
		}

		.sim-link {
			border-radius: 1.8rem;
			background-color: var(--color-blue);
			color: var(--color-white);
			text-decoration: none;
			text-align: center;
			font-weight: 600;
			padding: 0.5rem 1rem;
			cursor: pointer;
			&:hover,
			&:focus {
				outline: 2px solid var(--color-blue);
				outline-offset: 2px;
			}
		}
	}

	@media (max-width: 40.5625rem) {
		.sl-content {
			flex-direction: column;
			align-items: center;
			margin-left: 1.33rem;
			margin-right: 1.33rem;

			.sl-img {
				width: clamp(10rem, 70% + 1rem, 12rem);
			}
			.sim-link {
				padding: 0.5rem 2rem;
				margin-left: 1rem;
				margin-right: 1rem;
				box-sizing: border-box;
				width: 100%;
				align-self: center;
			}
		}
	}

	@media (min-width: 40.625rem) and (max-width: 59.375rem) {
		.sl-container {
			margin-inline: auto;
		}
	}
</style>
