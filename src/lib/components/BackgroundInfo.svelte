<script lang="ts">
	import Icon from './Icon.svelte';
	import TextSection from './personaContent/TextSection.svelte';

	type Content = 'keyboard' | 'support';

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

	<div class="card" class:support={content === 'support'}>
		<p class="text">
			{#if content === 'keyboard'}
				Benutzen Sie die <b>Tabulatortaste</b>
				<span aria-hidden="true" class="key">
					<Icon svg_color="white" img="tab-key" />
				</span>
				, um damit durch die Website zu navigieren. Oder <b>Shift</b>
				<span aria-hidden="true" class="key">
					<Icon svg_color="white" img="shift-key" />
				</span>
				+ Tabulatortaste, um so das vorherige interaktive Element zu erreichen. Mit der
				<b>Leertaste</b>
				<span aria-hidden="true" class="key">
					<Icon svg_color="white" img="spacebar-key" />
				</span>
				können Sie zum Beispiel Auswahlkästchen aktivieren oder deaktivieren. Mithilfe der
				<b>Entertaste</b>
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
							Internationaler Hilfestellen
						</a>
					</span>
					.
				</p>
			{/if}
		</p>
	</div>
</div>

<style lang="scss">
	@media (min-width: 59.375rem) {
		.wrapper {
			max-width: var(--content-element-max-width);
		}
	}

	.wrapper {
		width: 100%;
		margin-top: 2rem;
	}

	.card {
		margin-inline: auto;
		margin-top: 1rem;
		background-color: var(--color-neutral);
		border-radius: 1.11rem;
		width: 100%;
		max-width: 26rem;
		border: 1px solid transparent;
		box-sizing: border-box;
		padding: 1.125rem 1.66rem;
		box-shadow: inset 0px 6px 10px rgba(var(--color-black-rgb), 0.15);

		&.support {
			margin-top: 5.55rem;
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
		height: 1.625rem;
		width: 2.75rem;
		justify-content: center;
		align-items: center;
		position: relative;
		top: 0.22rem;
	}
</style>
