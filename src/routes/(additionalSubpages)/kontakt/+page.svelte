<script>
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';
	import { ENVIRONMENT } from '../../../lib/constants/environment';
</script>

<svelte:head>
	<title>Kontakt - BlindDate</title>
</svelte:head>

<SubpageTitle>Kontakt</SubpageTitle>

<div class="wrapper">
	{#if !ENVIRONMENT.allowFeedbackLink}
		<p>
			Sollten Sie auf Fehler stoßen oder dem Entwicklungsteam von BlindDate Rückmeldungen zu den
			Inhalten oder dem Aufbau der Webseite geben wollen, können Sie dies über folgende
			E-Mail-Adresse tun:
			<a href="mailto:kontakt@barrierefreies-blinddate.de" class="focus-indicator"
				>kontakt@barrierefreies-blinddate.de</a
			>
		</p>
	{:else}
		<p>
			Sollten Sie auf Fehler stoßen oder dem Entwicklungsteam von BlindDate Rückmeldungen zu den
			Inhalten oder dem Aufbau der Webseite geben wollen, können Sie dies entweder über die folgende
			E-Mail-Adresse tun:
			<a href="mailto:kontakt@barrierefreies-blinddate.de" class="focus-indicator"
				>kontakt@barrierefreies-blinddate.de</a
			>
			oder anonym über den folgenden Link:
			<a class="focus-indicator" href={ENVIRONMENT.feedbackLink}>Feedback geben</a>
		</p>
	{/if}
	<p>Wir freuen uns auf Ihr Feedback!</p>
</div>
`

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin: 2.5rem auto;

		min-height: 25vh;
	}
</style>
