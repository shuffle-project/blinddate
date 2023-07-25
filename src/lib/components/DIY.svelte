<script lang="ts">
	import Icon from './Icon.svelte';

	type Content = 'keyboard';

	export let content: Content;
</script>

<div class="wrapper">
	<div class="card">
		<p class="text">
			{#if content === 'keyboard'}
				Blind Date wurde ebenfalls barrierefrei umgesestzt. Das heißt, dass Sie auch hier direkt die
				Tastatursteuerung ausprobieren können. Benutzen Sie die <b>Tabulatortaste</b>
				<span class="key">
					<Icon svg_color="white" img="tab-key" />
				</span>
				, um damit durch die Website zu navigieren. Oder <b>Shift</b>
				<span class="key">
					<Icon svg_color="white" img="shift-key" />
				</span>
				+ Tabulatortaste, um so das vorherige interaktive Element zu erreichen. Mit der
				<b>Leertaste</b>
				<span class="key">
					<Icon svg_color="white" img="spacebar-key" />
				</span>
				können Sie zum Beispiel Auswahlkästchen aktivieren oder deaktivieren. Mithilfe der
				<b>Entertaste</b>
				<span class="key">
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
		align-items: center;
		justify-content: center;
		margin-top: 4rem;
	}
	.card {
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
