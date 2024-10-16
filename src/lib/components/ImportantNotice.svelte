<script lang="ts">
	type Content = 'support' | 'lrs-compensation';

	export let content: Content;
	export let marginTop = false;
</script>

<div class="wrapper" class:marginTop>
	<div class="card">
		<h3>Wichtig</h3>
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
		{#if content === 'lrs-compensation'}
			<p>
				Bei der Beantragung des Nachteilsausgleichs ist jedoch zu beachten, dass hier die
				Legasthenie als psychische oder seelische Erkrankung eingestuft wird. Dies ist aus Sicht der
				Betroffenen oft nicht zutreffend, da eine Legasthenie zwar mit psychischen Problemen und
				Stigmatisierung einhergehen kann, jedoch nicht bei allen Legastheniker*innen zu einer
				psychischen Erkrankung führt. Es kann den Studierenden daher schwerfallen, sich als
				psychisch krank einstufen zu lassen, um den Nachteilsausgleich zu erhalten.
			</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;

		&.marginTop {
			margin-top: 6rem;
		}
	}

	.card {
		margin-inline: var(--outer-spacing);
		margin-top: 1rem;
		border-radius: 1.25rem;

		max-width: 35rem;

		background-color: #f1f0b7;
		padding: 1.125rem 1.5rem;
		box-sizing: border-box;

		h3 {
			margin: 0;
		}
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
