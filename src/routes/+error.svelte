<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<main>
	<h1>404</h1>
	<p>Oops! Diese Seite gibt es nicht.</p>
	<a href={resolve('/')}>Zurück zur Startseite</a>
</main>

<style>
	main {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: linear-gradient(145deg, var(--color-turquoise), var(--color-green));
		font-family: Arial, sans-serif;
		padding: 1.25rem 1.25rem 3rem;
		box-sizing: border-box;
		color: var(--color-black);

		h1 {
			font-size: clamp(10rem, 25vw + 0.25rem, 14rem);
			line-height: 100%;
			margin: 0;
		}

		p {
			font-size: clamp(1.25rem, 2.5vw + 0.25rem, 1.625rem);
			margin: 0;
		}

		a {
			font-size: 1.125rem;
			background-color: var(--color-black);
			color: var(--color-white);
			padding: 0.75rem 1.5rem;
			border-radius: 2rem;
			text-decoration: none;
			margin-top: 3rem;

			&:focus,
			&:hover {
				outline: 2px solid #070d1c;
				outline-offset: 2px;
			}
		}
	}
</style>
