<script lang="ts">
	import Icon from './Icon.svelte';
	import TextSection from './personaContent/TextSection.svelte';

	type Content = 'keyboard' | 'support' | 'wheelchair-moving' | 'wheelchair-sitting';

	export let content: Content;
</script>

<div class="wrapper">
	{#if content === 'keyboard'}
		<TextSection let:Text>
			<Text>
				BlindDate wurde ebenfalls barrierefrei umgesetzt. Das heißt, dass Sie auch hier direkt die
				Tastatursteuerung ausprobieren können.
			</Text>
		</TextSection>
	{/if}
	{#if content === 'wheelchair-moving'}
		<TextSection let:Text>
			<Text>
				Wer einen Rollstuhl nutzt, sieht sich mit baulichen Barrieren konfrontiert, die anderen im
				Alltag oft nicht einmal auffallen:
			</Text>
		</TextSection>
	{/if}
	{#if content === 'wheelchair-sitting'}
		<TextSection let:Text>
			<Text>Das permanente Sitzen im Rollstuhl geht auch mit physischen Belastungen einher:</Text>
		</TextSection>
	{/if}

	<div class="card" class:support={content === 'support'}>
		<p class="text">
			{#if content === 'keyboard'}
				Benutzen Sie die <strong>Tabulatortaste</strong>
				<span aria-hidden="true" class="key">
					<Icon svg_color="white" img="tab-key" />
				</span>
				, um damit durch die Website zu navigieren. Oder <strong>Shift</strong>
				<span aria-hidden="true" class="key">
					<Icon svg_color="white" img="shift-key" />
				</span>
				+ Tabulatortaste, um so das vorherige interaktive Element zu erreichen. Mit der
				<strong>Leertaste</strong>
				<span aria-hidden="true" class="key">
					<Icon svg_color="white" img="spacebar-key" />
				</span>
				können Sie zum Beispiel Auswahlkästchen aktivieren oder deaktivieren. Mithilfe der
				<strong>Entertaste</strong>
				<span aria-hidden="true" class="key">
					<Icon svg_color="white" img="enter-key" />
				</span>
				können Sie einen Button betätigen oder einen Link zu öffnen.
			{/if}
			{#if content === 'support'}
				<p>
					Erkennst Du Dich selbst oder jemanden aus Deinem Umfeld in den geschilderten Situationen
					wieder oder benötigst Du Unterstützung? Die Telefonseelsorge unter

					<span>
						<a href="tel:08001110111" class="focus-indicator">0800 111 0111 </a>
					</span>

					und

					<span>
						<a href="tel:08001110222" class="focus-indicator">0800 111 0222</a>
					</span>

					ist rund um die Uhr erreichbar, anonym und kostenlos. Alternativ steht Dir ein Chat unter
					<span>
						<a href="https://online.telefonseelsorge.de/" class="focus-indicator">
							Onlineseelsorge
						</a>
					</span>
					zur Verfügung. Wenn Du in einem anderen Land wohnst oder in einer anderen Sprache kommunizieren
					möchtest, findest Du auf der Webseite der Telefonseelsorge eine Liste
					<span>
						<a
							href="https://www.telefonseelsorge.de/international-helplines/"
							class="focus-indicator"
						>
							internationaler Hilfestellen
						</a>
					</span>
					.
				</p>
			{/if}
			{#if content === 'wheelchair-moving'}
				Legen Sie Ihren Weg zur und innerhalb der Universität einmal ausschließlich
				<strong>auf rollstuhlgerechten Strecken</strong> zurück. Vermeiden Sie vor allem Treppen und
				nutzen Sie stattdessen
				<strong>Aufzüge oder Rampen</strong>, um barrierefrei andere Stockwerke zu erreichen. Achten
				Sie dabei auch auf hohe Türschwellen und darauf, auf welcher Höhe Alltagsgegenstände
				angebracht sind. Wo ist eigentlich die nächste <strong>barrierefreie Toilette</strong>?
			{/if}
			{#if content === 'wheelchair-sitting'}
				Zählen Sie einmal, wie oft Sie normalerweise <strong>am Tag aufstehen</strong>, um sich zu
				strecken oder kurz zu bewegen. Versuchen Sie dann, dies zu reduzieren und den Tag
				<strong>größtenteils im Sitzen</strong>
				zu verbringen. Beachten Sie, wie sich Ihr Körper dabei anfühlt und welche
				<strong>Unannehmlichkeiten</strong> es gibt. Rückenschmerzen sind für Rollstuhlnutzende eine
				häufige Belastung.
			{/if}
		</p>
	</div>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card {
		margin-inline: var(--outer-spacing);
		margin-top: 1rem;
		background-color: var(--color-neutral);
		border-radius: 1.25rem;

		max-width: 35rem;
		border: 1px solid transparent;
		padding: 1.125rem 1.5rem;
		box-sizing: border-box;

		box-shadow: inset 0px 6px 10px rgba(var(--color-black-rgb), 0.1);

		&.support {
			margin-top: 6rem;
		}
	}
	.text {
		color: var(--color-black);
		line-height: 180%;
	}
	.key {
		background-color: var(--color-black);
		display: inline-flex;
		border-radius: 5px;
		height: 1.5rem;
		width: 2.75rem;
		justify-content: center;
		align-items: center;
		position: relative;
		top: 0.125rem;
	}

	@media (min-width: 59.375rem) {
		.wrapper {
			max-width: var(--content-element-max-width);

			.card {
				box-sizing: content-box;
			}
		}
	}

	@media (max-width: 28.75rem) {
		.card {
			padding: 1rem 1rem;
		}
	}
</style>
