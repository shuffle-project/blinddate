<script>
	import { base } from '$app/paths';
	import Icon from './Icon.svelte';
	const personaToRender = [
		{ name: 'Hannah', svg: 'ear' },
		{ name: 'Gabriel', svg: 'glaucoma' },
		{ name: 'Maxi', svg: 'mental-health' },
		{ name: 'Faiza', svg: 'bottle' },
		{ name: 'Michelle', svg: 'spoon' },
		{ name: 'Aleksandr', svg: 'sunflower' },
		{ name: 'Kilian', svg: 'wheelchair' },
		{ name: 'Oliver', svg: 'neurodiversity' }
	];
</script>

<footer>
	<div class="footer-separator" aria-hidden="true">
		<hr />
	</div>
	<div class="top-part">
		<div>
			<h2>Studierende</h2>
			<ul class="icon-list">
				{#each personaToRender as persona}
					<li class="icon-list-item">
						<a style="opacity: 60%; cursor: not-allowed" href="#" aria-disabled="true">
							<Icon size="medium" img={persona.svg} svg_color="blue" />
							{persona.name}
						</a>
						<!-- usertest -->
						<!-- <a href="{base}/personas/{persona.name.toLowerCase()}">
							<Icon size="medium" img={persona.svg} svg_color="blue" />
							{persona.name}
						</a> -->
					</li>
				{/each}
			</ul>
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
				<li class="icon-list-item">
					<a href="#" aria-disabled="true" style="opacity: 60%; cursor: not-allowed"
						><Icon size="medium" img="/icons/sitemap.svg" svg_color="blue" />
						Sitemap</a
					>
				</li>
				<!-- <li>
					<Icon size="medium" img="/icons/easy-language.svg" svg_color="blue" />
					Leichte Sprache
				</li>
				<li>
					<Icon size="medium" img="/icons/sign-language.svg" />
					Gebärdensprache
				</li>
				<li>
					<Icon size="medium" img="/icons/sitemap.svg" svg_color="blue" />
					Sitemap
				</li> -->
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
				<li>
					<a href="#" aria-disabled="true" style="opacity: 60%; cursor: not-allowed"
						>Barrieren melden
					</a>
				</li>
				<!-- <li><a href="{base}/">Erklärung der Barrierefreiheit </a></li>
				<li><a href="{base}/">Barrieren melden </a></li> -->
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
			font-size: 1rem;
		}

		.footer-separator {
			padding: 0;
			margin-bottom: 1rem;
			width: 100%;

			hr {
				background-color: var(--color-lavender);
				border: none;
				height: 6px;
				border-radius: 0px;

				max-width: var(--content-max-width);
			}
		}

		.top-part {
			padding: 0.5rem 2rem;
			display: flex;
			flex-direction: column;
			margin-bottom: 2rem;

			.logo {
				width: 2.6rem;
				height: 2.6em;
				padding: 0.2rem;

				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.icon-list {
				list-style-type: none;
				margin-left: -2rem;
				line-height: 2.5rem;
				color: var(--color-blue);
			}
			.icon-list li {
				vertical-align: baseline;
				display: flex;
				gap: 0.5rem;
			}
			.icon-list-item a {
				display: flex;
				gap: 0.5rem;
				vertical-align: baseline;
			}
		}

		.bottom-part {
			background-color: var(--color-black);
			color: var(--color-white);
			width: 100%;
			padding-top: 1rem;
			.inner {
				ul {
					list-style-type: none;
					margin-left: -2rem;

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

		@media (max-width: 59.3125rem) {
			hr {
				margin: 4rem auto 0 auto !important;
			}
		}

		@media (min-width: 40rem) and (max-width: 71.9375rem) {
			hr {
				margin: 0 auto;
			}

			.top-part {
				display: grid;
				grid-template-columns: repeat(2, 1fr);

				div {
					padding: 0.5rem;
					max-width: 18rem;
					margin: 0 2rem;
				}
				h2 {
					margin-top: 0rem;
				}
			}
		}

		@media (max-width: 71.9375rem) {
			.inner {
				margin: 1rem 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				ul {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 1.5rem;
					margin-bottom: 2rem;
				}
			}
		}

		@media (min-width: 72rem) {
			.footer-separator {
				padding: 0 2.77rem;
				box-sizing: border-box;

				hr {
					margin: 0 auto;
					border-radius: 4px;
				}
			}

			.top-part {
				max-width: var(--content-max-width);
				display: flex;
				flex-direction: row;
				box-sizing: border-box;
				justify-content: space-evenly;
				margin-bottom: 0;

				div {
					padding: 0.5rem;
					min-width: 18%;
				}
			}

			.inner {
				max-width: var(--content-max-width);
				margin-inline: auto;
				margin-bottom: 1rem;
				padding-inline: 2rem;
				display: flex;
				justify-content: space-between;

				ul {
					display: flex;
					flex-wrap: wrap;

					gap: 2rem;

					list-style-type: none;
					margin-left: -2rem;
				}
			}
		}
	}
</style>
