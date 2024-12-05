<script>
	import SubpageTitle from '../../../../lib/components/SubpageTitle.svelte';
</script>

<svelte:head>
	<title>Erklärung zur Barrierefreiheit - BlindDate</title>
</svelte:head>

<SubpageTitle>Erklärung zur Barrierefreiheit</SubpageTitle>

<div class="wrapper">
	<h2>Anwendungsbereich</h2>
	<p>
		Diese Erklärung zur Barrierefreiheit bezieht sich auf das <a
			target="_blank"
			rel="noopener"
			href="https://www.landesrecht-bw.de/perma?j=BehGleichStG_BW"
			>Landesgesetz zur Gleichstellung von Menschen mit Behinderungen
			(Landes-Behindertengleichstellungsgesetz – L-BGG) vom 17. Dezember 2014, in der aktuell
			gültigen Fassung.
		</a> Das SHUFFLE-Projekt ist bemüht, diese Webseite in Einklang mit § 10 Absatz 1 des Landes-Behindertengleichstellungsgesetzes
		(L-BGG) barrierefrei zugänglich zu gestalten.
	</p>

	<p>
		Diese Erklärung zur Barrierefreiheit gilt für diese Webseite (www.barrierefreies-blinddate.de).
		Diese Erklärung bezieht sich ausdrücklich nicht auf die anderen Websites und mobilen Apps der
		Hochschule der Medien, oder der am Projekt beteiligten Hochschulen und nicht auf Inhalte von
		Drittanbietern, auf die über externe Links verwiesen wird.
	</p>

	<h2>Stand der Vereinbarkeit mit den Anforderungen</h2>
	<p>
		Diese Webseite ist mit §10 Absatz 1 L-BGG vollständig vereinbar; Ausnahmen siehe folgender
		Abschnitt.
	</p>

	<h2>Nicht barrierefreie Inhalte</h2>
	<p>
		Die Simulationsspiele auf den Persona-Unterseiten (von Gabriel, Hannah und Maxi) sind aufgrund
		ihrer spezifischen Spielmechanik nicht vollständig barrierefrei zugänglich und nicht auf mobilen
		Geräten spielbar. Die Simulation beispielsweise einer visuellen Beeinträchtigung kann mit einem
		Screenreader oder ähnlichen Hilfsmitteln nicht vollständig nachempfunden werden.
	</p>

	<p>
		Die Inhalte sowie die Erkenntnisse der Simulationsspiele können jedoch in Textform nachgelesen
		werden. Eine Zusammenfassung befindet sich bei den entsprechenden Links zu den
		Simulationsspielen auf den jeweiligen Persona-Unterseiten.
	</p>

	<h2>Erstellung dieser Erklärung zur Barrierefreiheit</h2>
	<p>
		Diese Erklärung wurde am 03.12.2024 erstellt. Sie beruht auf einer Selbstbewertung, die am
		03.12.2024 durchgeführt wurde. Diese Erklärung wurde zuletzt am 03.12.2024 überprüft.
	</p>

	<h2>Rückmeldung und Kontaktangaben</h2>
	<p>
		Sie möchten uns bestehende Barrieren mitteilen oder Informationen zur Umsetzung der
		Barrierefreiheit erfragen? Für Ihr Feedback sowie alle weiteren Informationen sprechen Sie
		unsere verantwortliche Kontaktperson an:
	</p>

	<p>
		Prof. Dr. Gottfried Zimmermann <br />
		Hochschule der Medien <br />
		Nobelstr.10 <br />
		70569 Stuttgart <br />
		E-Mail: <a href="mailto:zimmermanng@hdm-stuttgart.de">zimmermanng@hdm-stuttgart.de</a> <br />
		Telefon: <a href="tel:004971189232751">+49 711 8923-2751</a> <br />
	</p>

	<h2>Schlichtungsverfahren</h2>
	<p>
		Um zu gewährleisten, dass diese Webseite den in § 10 Absatz 1 L-BGG beschriebenen Anforderungen
		genügt, können Sie sich per Email an die SHUFFLE-Projekt-Partner (<a
			href="mailto:info@shuffle-projekt.de">info@shuffle-projekt.de</a
		>) wenden und eine entsprechende Rückmeldung geben.
	</p>

	<p>
		Falls das SHUFFLE-Projektteam nicht innerhalb von vier Wochen auf Ihre Anfrage antwortet, können
		Sie sich an die Schlichtungsstelle des Landeszentrums Barrierefreiheit (LZ-BARR) wenden.
	</p>

	<p>
		Die Schlichtungsstelle des Landeszentrums Barrierefreiheit (LZ-BARR) können Sie wie folgt
		erreichen: <a href="mailto:schlichtung@barrierefreiheit.bwl.de"
			>schlichtung@barrierefreiheit.bwl.de</a
		>, <a href="tel:004971112339375">Tel. +49 711 123 39375</a> , Adresse: Landeszentrum Barrierefreiheit,
		Schlichtungsstelle, Else-Josenhans-Straße 6, 70173 Stuttgart.
	</p>

	<p>Das Schlichtungsverfahren ist unentgeltlich.</p>

	<p>
		Auf die Möglichkeit des Verbandsklagerechts nach § 12 Absatz 1 Satz 1 Nummer 4 L-BGG wird
		hingewiesen.
	</p>

	<h2>Hinweise zur Kompatibilität</h2>
	<p>
		Unsere Webseite ist für die folgenden Browser optimiert: Chrome, Firefox, Edge, Safari. Internet
		Explorer wird nicht unterstützt.
	</p>
</div>

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;
	}

	@media (max-width: 21.25rem) {
		h2 {
			word-wrap: break-word;
			overflow-wrap: break-word;
			overflow-wrap: anywhere;

			-webkit-hyphens: auto;
			-moz-hyphens: auto;
			hyphens: auto;
		}
	}
</style>
