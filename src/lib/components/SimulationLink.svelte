<script lang="ts">
	import { base } from '$app/paths';
	import Icon from './Icon.svelte';
	import Modal from './Modal.svelte';
	export let image: string;
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
				Mobile Geräte werden nicht unterstützt. Das Spiel ist leider nicht barrierefrei, siehe

				<button class="focus-indicator" on:click={() => toggleModalDisplay()}
					>Informationen zur Simulation</button
				>
			</p>

			<a class="sim-link" href={pathtext}>Zur Simulation</a>
		</div>
	</div>
	<Modal bind:this={modal}>
		<svelte:fragment slot="headline">Informationen zur Simulation</svelte:fragment>
		<svelte:fragment slot="content">
			{#if personaID === 'gabriel'}
				<p>
					Das vorliegende Simulationsspiel ist aufgrund seiner spezifischen Spielmechanik leider
					nicht vollständig barrierefrei. Die Simulation einer visuellen Beeinträchtigung kann mit
					einem Screenreader oder ähnlichen Hilfsmitteln nicht vollständig nachempfunden werden. Um
					die Spielinhalte dennoch zugänglich zu machen, folgt hier eine detaillierte Beschreibung
					derselben.
				</p>

				<p id="game-explained">
					In diesem Simulationsspiel hat die spielende Person die Aufgabe, aus einem Foliensatz aus
					Gabriels Vorlesung "Ethik 1" im Studiengang "Soziale Arbeit" einige Quellen
					herauszuschreiben. Die vermeintlich einfache Aufgabe wird plötzlich erschwert, als das
					Sichtfeld der spielenden Person eingeschränkt wird (siehe <span lang="en">Screenshot</span
					> unten). Erst mit der Hilfe von Gabriel und dessen Strategie der ständigen Kopfbewegung können
					die Folien Stück für Stück aufgedeckt und die Aufgaben gelöst werden. Die spielende Person
					bekommt ein Gefühl dafür, wie hilfreich eine gute Strukturierung der Folien ist, damit Gabriel
					die gesuchten Inhalte zügiger auffinden kann.
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
				<p>
					Das vorliegende Simulationsspiel ist aufgrund seiner spezifischen Spielmechanik leider
					nicht vollständig barrierefrei. Die Simulation einer Hörbeeinträchtigung kann mit einem
					Screenreader oder ähnlichen Hilfsmitteln nicht vollständig nachempfunden werden. Um die
					Spielinhalte dennoch zugänglich zu machen, folgt hier eine detaillierte Beschreibung
					derselben.
				</p>

				<p id="game-explained">
					In diesem Simulationsspiel hat die spielende Person die Aufgabe, einfache Matheaufgaben
					der Vorlesung „Grundschulmathematik 1“ zu lösen, die in einem Video von einer Dozentin
					diktiert werden. Die vermeintlich einfache Aufgabe wird plötzlich erschwert, als die
					Audiospuren von einem starken Rauschen überlagert werden. Erst mit der Hilfe von Hannah
					und deren Strategie, die Untertitel der Videos zu lesen, können die Aufgaben erneut
					verstanden und gelöst werden. Die spielende Person bekommt ein Gefühl dafür, wie hilfreich
					gute Untertitelung ist, damit Hannah das Gesagte ohne Raten verstehen kann.
				</p>

				<img
					alt="Screenshot aus Hannahs Simulationsspiel"
					aria-describedby="game-explained"
					src={base + '/personas/hannah/simulation-game.png'}
				/>

				<p>
					Die Strategie, auf Untertitel zurückzugreifen, spricht Hannah in dem Screenshot mit den
					folgenden Worten auch an: "Gib’s zu, das hast Du geraten! Aber keine Sorge: Moderne
					Techniken bergen viele Hilfsmittel. Für dieses Video beispielsweise stehen automatische
					Untertitel zur Verfügung, auf die auch ich häufig zurückgreife. Ich schalte sie Dir ein. "
				</p>
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
		margin: 2.5rem 0 2rem 1.875rem;
		display: flex;
		flex-direction: column;
		align-items: start;

		button {
			padding: 0;

			border: none;

			background-color: transparent;
			color: var(--color-blue);
			display: inline-block;

			font-size: 1.125rem;
			font-weight: bold;
			cursor: pointer;
		}
	}
	.sl-content {
		display: flex;
		justify-content: left;
		background: linear-gradient(160deg, var(--color-turquoise), var(--color-green));
		padding: 1.25rem;
		border-radius: 1.25rem;
		max-width: 35rem;
		box-sizing: border-box;

		.text-container {
			display: flex;
			flex-direction: column;
			justify-content: center;

			p {
				margin: 0;

				&.warning-text {
					margin-bottom: 0.625rem;
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
			gap: 0.625rem;

			.hint {
				font-weight: bold;
			}
		}

		.sim-link {
			margin-top: 0.625rem;
			border-radius: 2rem;
			background-color: var(--color-blue);
			color: var(--color-white);
			text-decoration: none;
			text-align: center;
			font-weight: 600;
			padding: 0.625rem 1rem;
			cursor: pointer;
			&:hover,
			&:focus {
				outline: 2px solid var(--color-blue);
				outline-offset: 2px;
			}
		}
	}

	@media (max-width: 40.5625rem) {
		.sl-container {
			margin-left: 0;
		}

		.sl-content {
			flex-direction: column;
			align-items: center;
			margin-inline: var(--outer-spacing);

			.sl-img {
				width: clamp(10rem, 70% + 1rem, 12rem);
			}
			.sim-link {
				padding: 0.625rem 2rem;
				margin-inline: 1rem;

				box-sizing: border-box;
				width: 100%;
				align-self: center;
			}
		}
	}

	@media (max-width: 59.375rem) {
		.sl-container {
			margin-inline: auto;
		}
	}
</style>
