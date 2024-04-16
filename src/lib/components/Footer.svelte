<script lang="ts">
	import { base } from '$app/paths';
	import { ENVIRONMENT } from '../constants/environment';
	import Icon from './Icon.svelte';

	const personas = ENVIRONMENT.accessiblePersonas;
</script>

<footer>
	<div class="footer-separator" aria-hidden="true">
		<hr />
	</div>
	<div class="top-part">
		<div>
			{#if ENVIRONMENT.footerPersonas}
				<h2>Studierende</h2>
				<ul class="icon-list">
					{#each personas as persona}
						<li class="icon-list-item">
							<a href="{base}/personas/{persona.name.toLowerCase()}" class="focus-indicator">
								<Icon size="medium" img={persona.disabilityIcon} svg_color="blue" />
								{persona.name}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<div>
			<h2>Barrierefreie Angebote</h2>
			<ul class="icon-list">
				<!-- usertest -->
				<li class="icon-list-item">
					<a href="#" aria-disabled="true" style="opacity: 60%; cursor: not-allowed">
						<Icon size="medium" img="/icons/easy-language.svg" svg_color="blue" />
						Leichte Sprache</a
					>
				</li>
				<li class="icon-list-item">
					<a href="#" aria-disabled="true" style="opacity: 60%; cursor: not-allowed"
						><Icon size="medium" img="/icons/sign-language.svg" />
						Gebärdensprache</a
					>
				</li>

				{#if ENVIRONMENT.sitemap}
					<li class="icon-list-item">
						<a href="{base}/sitemap" class="focus-indicator"
							><Icon size="medium" img="/icons/sitemap.svg" svg_color="blue" />
							Sitemap</a
						>
					</li>
				{:else}
					<li class="icon-list-item">
						<a href="#" aria-disabled="true" style="opacity: 60%; cursor: not-allowed"
							><Icon size="medium" img="/icons/sitemap.svg" svg_color="blue" />
							Sitemap</a
						>
					</li>
				{/if}
			</ul>
		</div>
		<div>
			<h2>Über BlindDate</h2>
			<div class="logo">
				<Icon img="logo_black" size="parent" />
			</div>

			<p>
				"BlindDate" ist eine digitale Plattform, die Lehrenden eine Begegnung mit virtuellen
				Studierende mit individuellen Bedarfen ermöglicht. Diese "Personas" zeigen typische
				Barrieren in ihrem Studienalltag, sowie Strategien zur Bewältigung derselben, auf und
				steigern so das Bewusstsein der Benutzenden.
			</p>
		</div>
		<div>
			<h2>Über <span lang="en">SHUFFLE</span></h2>
			<div class="logo">
				<Icon img="shuffle" size="parent" />
			</div>

			<p>
				Das <span lang="en">SHUFFLE</span>-Projekt unterstützt eine chancengerechte Teilhabe an
				digitaler Lehre für Studierende mit individuellen Bedarfen. Unser Ziel ist es, eine
				systematische Verbesserung der aktuellen Situation digitaler Barrierefreiheit an deutschen
				Hochschulen zu erreichen.
			</p>
			<a class="focus-indicator" href="https://shuffle-projekt.de/"
				>Zur <span lang="en">SHUFFLE</span> Webseite</a
			>
		</div>
	</div>
	<div class="bottom-part">
		<nav class="inner" aria-label="Fußnavigation">
			<ul>
				<!-- usertest -->
				<li>
					<a href="#" aria-disabled="true" style="opacity: 60%; cursor: not-allowed"
						>Erklärung der Barrierefreiheit
					</a>
				</li>

				<!-- <li><a href="{base}/">Erklärung der Barrierefreiheit </a></li>-->
				<li><a href="{base}/kontakt">Kontakt</a></li>
				<li><a href="{base}/legal/imprint">Impressum</a></li>
				<li><a href="{base}/legal/privacy">Datenschutzerklärung</a></li>
			</ul>
			<Icon img="logo" size="big" />
		</nav>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			font-size: 1.125rem;
		}

		.footer-separator {
			padding: 0;
			width: 100%;

			hr {
				background-color: var(--color-lavender);
				border: none;
				height: 6px;
				border-radius: 0px;

				max-width: var(--content-max-width);
				margin: 0;
			}
		}

		.top-part {
			padding: 1.25rem var(--outer-spacing) 2.5rem;
			display: flex;
			flex-direction: column;
			gap: 0.625rem;

			.logo {
				width: 2.5rem;
				height: 2.5em;
				padding-block: 0.625rem;

				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.icon-list {
				list-style-type: none;
				padding: 0;
				color: var(--color-blue);
			}
			.icon-list li {
				vertical-align: baseline;
				display: flex;
				gap: 0.625rem;
			}
			.icon-list-item a {
				display: flex;
				gap: 0.625rem;
				margin-bottom: 1rem;
				border-radius: 2rem;

				&:focus {
					outline: 2px solid var(--color-blue);
					outline-offset: 4px;
				}
			}
		}

		.bottom-part {
			background-color: var(--color-black);
			color: var(--color-white);
			width: 100%;
			padding-block: 1.25rem;
			.inner {
				ul {
					list-style-type: none;
					padding: 0;

					li {
						a {
							color: var(--color-white);
							text-decoration: none;

							&:hover,
							&:focus {
								text-decoration: underline;
							}
						}
					}
				}
			}
		}

		@media (min-width: 40rem) and (max-width: 71.9375rem) {
			.top-part {
				width: 100%;
				display: grid;
				box-sizing: border-box;
				grid-template-columns: repeat(2, clamp(16rem, 30vw + 0.5rem, 20rem));
				gap: 2.5rem;
				justify-content: space-around;
				padding-inline: 0 var(--outer-spacing);
			}
		}

		@media (max-width: 71.9375rem) {
			.inner {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				ul {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 1.875rem;
					margin-bottom: 2rem;
				}
			}
		}

		@media (min-width: 72rem) {
			.footer-separator {
				padding: 0 var(--outer-spacing);
				box-sizing: border-box;

				hr {
					border-radius: 4px;
					margin-inline: auto;
				}
			}

			.top-part {
				max-width: var(--content-max-width);
				display: flex;
				flex-direction: row;
				gap: 1.875rem;

				div {
					min-width: 20%;
				}
			}

			.inner {
				max-width: var(--content-max-width);

				margin-inline: auto;
				padding-inline: var(--outer-spacing);

				display: flex;
				justify-content: space-between;

				ul {
					display: flex;
					flex-wrap: wrap;

					gap: 1.875rem;

					list-style-type: none;
					padding: 0;
				}
			}
		}
	}

	@media (max-width: 59.3125rem) {
		footer {
			.footer-separator {
				hr {
					margin-top: 5rem;
				}
			}
		}
	}
</style>
