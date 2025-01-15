<script>
	import { ENVIRONMENT } from '../lib/constants/environment';
</script>

{#if ENVIRONMENT.showDevEnvInfo}
	<div class="dev-env-info">
		<p>
			<strong>Achtung:</strong>
			Sie befinden sich auf der internen Entwicklungsseite. Die richtige Seite finden Sie unter
			<a href="https://barrierefreies-blinddate.de/">www.barrierefreies-blinddate.de</a>.
		</p>
	</div>
{/if}

<slot />

<style lang="scss" global>
	@import './../scss/_main.scss';

	.dev-env-info {
		background-color: #99bef5;

		padding: 2rem 1.25rem;

		display: flex;
		justify-content: center;

		border: solid 1rem;
		border-image: repeating-linear-gradient(
				-75deg,
				#99bef5,
				#99bef5 0.625rem,
				var(--color-black) 0.625rem,
				var(--color-black) 1.25rem
			)
			20;

		p,
		a,
		strong {
			margin: 0;
			font-size: 1.25rem;
			color: var(--color-black);
		}
	}
</style>
