<script lang="ts">
	import Icon from './Icon.svelte';
	import TextSection from './personaContent/TextSection.svelte';

	type Content = 'keyboard';

	export let content: Content;
</script>

<div class="wrapper">
	<TextSection let:Text>
		<Text>
			BlindDate wurde ebenfalls barrierefrei umgesetzt. Das heißt, dass Sie auch hier direkt die
			Tastatursteuerung ausprobieren können.
		</Text>
	</TextSection>

	<div class="card">
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;
	}
	.card {
		margin: 1rem 1.33rem 0;
		background-color: var(--color-neutral);
		border-radius: 20px;
		max-width: 26rem;
		box-sizing: border-box;
		padding: 1.125rem 1.875rem 1.125rem 1.875rem;
		box-shadow: inset 0px 6px 10px rgba(7, 13, 28, 0.15);
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
