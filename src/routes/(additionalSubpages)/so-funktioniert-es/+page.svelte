<script>
	import { base } from '$app/paths';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';
</script>

<svelte:head>
	<title>So funktioniert's - BlindDate</title>
</svelte:head>

<SubpageTitle>So funktioniert's</SubpageTitle>

<div class="wrapper">
	<p>
		Auf dieser Seite möchten wir Ihnen Hinweise geben, wie Sie BlindDate nach Ihren Bedarfen nutzen
		können:
	</p>

	<h2>Ich habe wenig Zeit und brauche gezielte Informationen</h2>

	<!-- <p>Das befindet sich auf BlindDate:</p> -->

	<h3>Die Startseite</h3>

	<ul>
		<li>Virtueller Seminarraum: Auf einzelne Studierende klicken und loslegen</li>
		<li>
			Darunter: Kästen mit Hintergrundinformationen zu bspw. Entwicklung der Personas, wichtigen
			Begriffen, etc.
		</li>
		<li>Footer: Informationen zu BlindDate und dem Forschungsprojekt SHUFFLE</li>
	</ul>

	<h3>Die Persona-Seiten:</h3>
	<ul>
		<li>
			Schlagwörter nach dem Seitentitel geben Hinweise auf angesprochene Themen. Z.B. Beratung bei
			Maxi
		</li>
		<li>
			Die Persona Karte beinhaltet neben dem blauen Button „Selbstcheck Barrierefreiheit“ auch ein
			Inhaltsverzeichnis. Visuell erkennbar durch das Drei-Striche-Icon oder durch das Label
			„Inhaltsverzeichnis anzeigen“ für <span lang="en">Screenreader</span>-Nutzende
		</li>
		<li>
			Über „Selbstcheck Barrierefreiheit“ springen Sie direkt zu der Checkliste mit
			Handlungsempfehlungen am Ende Seite
		</li>
		<li>
			Blau hinterlegte und unterstrichene Worte in Sprechblasen und Textpassagen blenden Ihnen
			Definitionen von Fachbegriffen ein. <span lang="en">Screenreader</span> sollten sie als Taste oder
			Button deklarieren
		</li>
	</ul>

	<p>
		Sie haben gerade keine Zeit, alle Personas kennenzulernen? Besuchen Sie für den Anfang <a
			class="focus-indicator"
			href={base + '/große-ganze'}>"das große Ganze"</a
		> und sehen Sie, welche Maßnahmen für viele Studierende gleichzeitig hilfreich sind!
	</p>

	<h2>Ich möchte in die Studierenden-Perspektive eintauchen</h2>

	<p>
		Um die Perspektive der virtuellen Studierenden besser verstehen zu können, haben Sie
		verschiedene Möglichkeiten. Auf jeder Persona-Unterseite (durch Anklicken der virtuellen
		Studierenden auf der Hauptseite) befinden sich Sprechblasen, die Sie sich auch vorlesen lassen
		können. Die Aussagen der Personas beruhen auf realen Erfahrungen von Studierenden mit
		verschiedenen Beeinträchtigungen. Zusätzlich finden Sie mehrere (interaktive) Elemente, welche
		die Erfahrungen der virtuellen Studierenden auf verschiedene (mediale) Arten darstellen. Ob
		Videos von realen Studierenden, „Eine Woche im Leben von…“ oder Simulationen – diese Elemente
		sollen Sie beim Eintauchen in die Perspektiven unterstützen.
	</p>

	<h2>Ich möchte Infos zu Barrierefreiheit im Allgemeinen</h2>

	<p>
		Wir haben neben der Erstellung der Personas grundlegende und weiterführende Informationen zum
		Thema Barrierefreiheit im Studium zusammengeführt. Falls Sie sich über rechtliche
		Rahmenbedingungen oder aktuelle Zahlen und Bedarfe von Studierenden mit Beeinträchtigungen
		informieren möchten, finden Sie diese unter „wichtige Begriffe“. Sollten Sie Fragen zur
		Umsetzung, Gestaltung oder Texten auf BlindDate haben, finden Sie vielleicht unter „Häufige
		Fragen“ Antworten.
	</p>

	<h2>Ich möchte weiterführende Informationen zu Barrierefreiheit</h2>

	<p>
		Auf jeder Persona-Unterseite finden Sie unterhalb der Checklisten, also am Ende der Seiten,
		Links zu weiterführenden Informationen von (Selbsthilfe-)Vereinen, Verbänden und auch weitere
		Erfahrungsberichte von Studierenden. Außerdem verlinken wir weitere Ergebnisse (beispielsweise
		erarbeitete Tools, wie Checklisten, Lernräume etc.) aus Forschungsprojekten, die Sie bei der
		Umsetzung einer barrierefreien Lehre unterstützen können.
	</p>

	<p>
		Das SHUFFLE Forschungsprojekt hinter BlindDate hat noch weitere Projekte zum Thema
		Barrierefreiheit und der Unterstützung von Lehrenden. Hier kommen sie <a
			class="focus-indicator"
			href="https://shuffle-projekt.de/">zur SHUFFLE Seite</a
		>.
	</p>

	<h2>Ich habe das Gefühl, alleine dazustehen. Wie geht es anderen Lehrenden?</h2>

	<p>Inhalt folgt. Schauen Sie gerne ein anderes Mal nochmal vorbei.</p>
</div>

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;
		margin-top: 2.5rem;

		li {
			margin: 0.625rem 0rem;
		}
	}
</style>
