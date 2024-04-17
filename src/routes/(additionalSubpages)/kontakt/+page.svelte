<script>
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';
</script>

<svelte:head>
	<title>Kontakt - BlindDate</title>
</svelte:head>

<SubpageTitle>Kontakt</SubpageTitle>

<div class="wrapper">
	<p>
		Sollten Sie auf Fehler stoßen oder dem Entwicklungsteam von BlindDate Rückmeldungen zu den
		Inhalten oder dem Aufbau der Webseite geben wollen, können Sie dies über folgende E-Mail-Adresse
		tun:
		<a href="mailto:kontakt@barrierefreies-blinddate.de" class="focus-indicator"
			>kontakt@barrierefreies-blinddate.de</a
		>
	</p>
	<p>Wir freuen uns auf Ihr Feedback!</p>
</div>
`

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin: 2.5rem auto;
	}
</style>
