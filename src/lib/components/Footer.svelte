<script lang="ts">
	import { base } from '$app/paths';
	import { ENVIRONMENT } from '$lib/constants/environment';
	import Icon from './Icon.svelte';

	const personas = ENVIRONMENT.accessiblePersonas;

	const accessibilityLinks = [
		{
			name: 'Sitemap',
			link: 'sitemap',
			disabled: false
		},
		{
			name: 'Leichte Sprache',
			link: 'leichte-sprache',
			disabled: false
		},
		{
			name: 'Gebärdensprache (DGS)',
			link: 'dgs',
			disabled: false
		}
	];

	const legalLinks = [
		{
			name: 'Erklärung zur Barrierefreiheit',
			link: 'erklaerung-zur-barrierefreiheit',
			disabled: false
		},
		{
			name: 'Impressum',
			link: 'impressum',
			disabled: false
		},
		{
			name: 'Datenschutzerklärung',
			link: 'datenschutz',
			disabled: false
		},
		{
			name: 'Kontakt',
			link: 'kontakt',
			disabled: false
		}
	];
</script>

<footer class="wrapper">
	<div class="content-wrapper">
		<nav class="persona-nav" aria-label="Studierende">
			<ul>
				{#each personas as persona}
					<li>
						<a href="{base}/personas/{persona.name.toLowerCase()}" class="persona-chip">
							<Icon size="smedium" img={persona.disabilityIcon} />
							{persona.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="last-row">
			<div class="nav-wrapper">
				<nav
					class="accessibility-nav"
					aria-label={ENVIRONMENT.allowFeedbackLink
						? 'Barrierefreiheit und Feedback'
						: 'Barrierefreiheit'}
				>
					<ul>
						{#each accessibilityLinks as accessibilityLink}
							{#if !accessibilityLink.disabled}
								<li>
									<a href="{base}/{accessibilityLink.link}">{accessibilityLink.name}</a>
								</li>
							{/if}
						{/each}
						{#if ENVIRONMENT.allowFeedbackLink}
							<li class="feedback-link">
								<a
									href={ENVIRONMENT.lecturerFeedbackLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<span aria-hidden="true"> Feedback von Lehrenden </span>
									<span class="sr-only"> Feedback von Lehrenden (Öffnet neues Fenster) </span>
									<Icon img="open-in-new" size="medium"></Icon>
								</a>
							</li>
							<li class="feedback-link">
								<a href={ENVIRONMENT.generalFeedbackLink} target="_blank" rel="noopener noreferrer">
									<span aria-hidden="true">Allgemeines Feedback</span>
									<span class="sr-only">Allgemeines Feedback (öffnet neues Fenster)</span>
									<Icon img="open-in-new" size="medium"></Icon>
								</a>
							</li>
						{/if}
					</ul>
				</nav>
				<nav class="legal-nav" aria-label="Kontakt, Info und Rechtliches">
					<ul>
						{#each legalLinks as legalLink}
							{#if !legalLink.disabled}
								<li>
									<a href="{base}/{legalLink.link}">{legalLink.name}</a>
								</li>
							{/if}
						{/each}
						<li>
							<a href="https://shuffle-projekt.de/">Ein Projekt von SHUFFLE</a>
						</li>
					</ul>
				</nav>
			</div>

			<div class="logo-wrapper">
				<a
					href="https://stiftung-hochschullehre.de/"
					aria-label="Stiftung Innovation in der Hochschullehre, zur Website"
					class="foundation-wrapper"
					rel="noopener noreferrer"
				>
					<Icon img="logo-foundation" size="parent" svg_color="white" />
				</a>
				<Icon img="logo" size="parent" />
			</div>
		</div>
	</div>
	<div class="padding-bottom"></div>
</footer>

<style lang="scss">
	.logo-wrapper {
		display: flex;
		gap: 2.5rem;
		height: 3rem;

		.foundation-wrapper {
			height: 3rem;
			width: 10rem;
		}
	}
	.wrapper {
		padding-inline: var(--outer-spacing);
	}
	.content-wrapper {
		background-color: var(--color-black);
		border-radius: 1.875rem;

		width: 100%;
		max-width: var(--content-max-width);

		margin-inline: auto;
		padding: 2.5rem;
		box-sizing: border-box;

		.persona-nav {
			ul {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				width: 100%;
				gap: 1.25rem;

				margin: 0 0 3.75rem 0;

				list-style: none;
				padding: 0;

				.persona-chip {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					background-color: var(--color-turquoise);
					color: var(--color-black);
					padding: 0.5rem 1rem 0.5rem 0.75rem;
					border-radius: 2rem;

					text-decoration: none;

					&:hover,
					&:focus {
						outline: 2px solid var(--color-turquoise);
						outline-offset: 2px;
					}
				}
			}
		}
	}

	.accessibility-nav,
	.legal-nav {
		ul {
			display: flex;
			flex-wrap: wrap;
			gap: 0.875rem 1.875rem;
			list-style: none;
			padding: 0;
			margin: 0;

			a {
				color: rgba(var(--color-white-rgb), 0.8);
				text-decoration: none;
				font-size: 1rem;

				&:hover,
				&:focus {
					text-decoration: underline;
				}
			}
		}
	}

	.accessibility-nav {
		ul {
			align-items: center;
		}
	}

	.legal-nav {
		margin-top: 1.625rem;
	}

	.last-row {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 1.25rem;
	}

	.padding-bottom {
		height: 2.5rem;
		background-color: var(--color-background-body);
	}

	.feedback-link {
		background-color: var(--color-white);
		padding: 0.375rem 0.625rem;
		font-weight: bold;
		border-radius: 1rem;
		cursor: pointer;

		&:hover,
		&:focus {
			outline: 2px solid var(--color-white);
			outline-offset: 2px;
		}

		a {
			color: var(--color-black) !important;
			text-decoration: none !important;

			display: flex;
			align-items: center;
			gap: 0.25rem;
		}
	}

	@media (max-width: 59.3125rem) {
		.wrapper {
			margin-top: 3.75rem;
		}
	}

	@media (max-width: 41.125rem) {
		.content-wrapper {
			padding: 2.5rem 1.25rem;
		}

		.persona-nav,
		.accessibility-nav,
		.legal-nav {
			ul {
				justify-content: center;
			}
		}

		.last-row {
			flex-direction: column;
			align-items: center;
			gap: 2.5rem;
		}

		.padding-bottom {
			height: var(--outer-spacing);
		}
	}
</style>
