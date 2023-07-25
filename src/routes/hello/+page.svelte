<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';

	function setWelcomeRead() {
		localStorage.setItem('welcomeTextRead', 'true');
	}
</script>

<svelte:head>
	<title>Willkommen - BlindDate</title>
</svelte:head>

<div class="wrapper">
	<div class="logo">
		<div class="img">
			<Icon size="parent" alt="BlindDate Logo" img="logo" />
		</div>
		<p>BlindDate</p>
	</div>
	<div class="content" id="content">
		<header>
			<h1>Herzlich Willkommen auf BlindDate</h1>
			<a on:click={() => setWelcomeRead()} aria-label="zu Gabriel" href={base + '/personas/gabriel'}
				><Icon svg_color="white" img="close" size="big" /></a
			>
		</header>
		<hr aria-hidden="true" />
		<div>
			<p>Auf dieser Webseite werden Sie <b>Gabriel</b> kennenlernen.</p>
			<p>
				Gabriel ist eine von insgesamt 8 virtuellen Persona, die Ihnen von sich und ihrem
				Studienalltag erzählt.
			</p>
			<p>
				Gabriel wird Ihnen seine Strategien erklären, die er im Studienalltag nutzt. Er kann Ihnen
				Tipps und Tricks an die Hand geben, damit digitale Lehre für Studierende mit einer
				Sehbeeinträchtigung barrierefreier wird.
			</p>
			<p>
				Obwohl Gabriel nur virtuell existiert, ist er aus realen Erfahrungen von Studierenden mit
				einer Sehbeeinträchtigung entstanden. Mithilfe einer großen Datenerhebung, qualitativen
				Interviews und in ständigen <span lang="en">Feedback-Loops</span> mit Studierenden mit einer
				Sehbeeinträchtigung haben wir – das Team des Forschungsprojekt
				<span lang="en">SHUFFLE</span> - diese verschiedenen Perspektiven sammeln können. Damit nicht
				nur Gabriel zu Wort kommt, sondern mehr Vielfalt dargestellt wird, finden Sie neben Gabriels
				persönlichen Erläuterungen auch allgemein gehaltene Textpassagen.
			</p>

			<div class="hint-wrapper">
				<div class="hint">
					<Icon img="attention" size="smedium" />
					<p>Hinweis</p>
				</div>

				<p class="hint-text">
					BlindDate sollte auf allen Endgeräten mit einem aktuellen und gängigen Browser nutzbar
					sein. Bis auf das Simulationsspiel sind alle Inhalte barrierefrei zugänglich. Sollten Sie
					dennoch auf Barrieren stoßen, melden Sie sich bitte bei uns.
				</p>
			</div>
			<b>
				Bitte teilen Sie uns Ihre Gedanken und Rückmeldungen mit und nutzen die Links zur Umfrage am
				Anfang oder am Ende der Seite.
			</b>
			<p class="signature">Das <span lang="en">SHUFFLE</span>-BlindDate-Team</p>
			<p class="shuffle-url">www.shuffle-projekt.de</p>
			<div class="link-wrapper">
				<a href={base + '/personas/gabriel'} on:click={() => setWelcomeRead()}> Zu Gabriel</a>
			</div>

			<div />
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding-top: 1rem;
		padding-bottom: 2rem;
		height: 100%;
		background: linear-gradient(
			var(--color-black) 0%,
			var(--color-black) 40%,
			var(--color-background-body) 40%,
			var(--color-background-body) 100%
		);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logo {
		display: flex;

		align-items: center;

		gap: 1rem;
		margin-bottom: 1rem;

		.img {
			height: 3rem;
			width: 3rem;
		}

		p {
			color: var(--color-white);
			font-weight: bold;
			font-size: 1.22rem;
			margin: 0;
		}
	}

	.content {
		background-color: var(--color-white);
		border-radius: 1rem;
		padding: 0 max(2.5vw, 1rem);
		box-sizing: border-box;
		max-inline-size: min(90vw, 44.4rem);
		max-block-size: min(80vh, 100%);
		max-block-size: min(80dvb, 100%);
		overflow: hidden;
		box-shadow: 0 0 2rem rgba(var(--color-black-rgb), 0.2);
		margin-inline: auto;
	}

	header {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

		h1 {
			margin-top: 1rem;
			font-size: clamp(1.22rem, 3vw + 0.5rem, 1.5rem);
		}

		a {
			background-color: var(--color-blue);
			aspect-ratio: 1;
			border-radius: 50%;
			padding: 0.2rem;
			border: 2px solid transparent;
			outline: 2px solid transparent;

			&:hover,
			&:focus {
				border: 2px solid var(--color-white);
				outline: 2px solid var(--color-blue);
			}
		}
	}

	hr {
		margin: 0;
		background-color: var(--color-lavender);
		height: 3px;
		border: none;
		border-radius: 6px;
	}

	.hint-wrapper {
		background-color: var(--color-lavender);
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 1rem;
		.hint {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;
			height: 2rem;

			p {
				font-weight: bold;
				margin: 0;
			}
		}

		.hint-text {
			margin: 0;
		}
	}

	.signature {
		margin-bottom: 0;
	}

	.shuffle-url {
		margin: 0;
		padding: 0;
		font-size: 0.88rem;
		font-style: italic;
	}

	.link-wrapper {
		display: flex;
		justify-content: center;

		a {
			margin-top: 1rem;
			margin-bottom: 2rem;
			font-size: 1.33rem;
			font-weight: bold;
			background-color: var(--color-blue);
			color: var(--color-white);
			display: inline-block;
			padding: 0.5rem 2rem;
			text-decoration: none;
			border-radius: 2rem;

			border: 2px solid transparent;
			outline: 2px solid transparent;

			&:hover,
			&:focus {
				border: 2px solid var(--color-white);
				outline: 2px solid var(--color-blue);
			}
		}
	}
</style>
