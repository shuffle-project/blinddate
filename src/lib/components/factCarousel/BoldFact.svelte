<script lang="ts">
	interface Props {
		boldText: string;
		normalText: string;
	}

	let { boldText, normalText }: Props = $props();
</script>

<div class="wrapper">
	<p><b>{boldText}</b> {normalText}</p>
</div>

<style lang="scss">
	.wrapper {
		p {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1.25rem;

			b {
				font-size: 3rem;
				font-weight: bold;
			}
		}
	}
</style>
