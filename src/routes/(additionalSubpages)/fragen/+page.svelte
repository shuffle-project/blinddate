<script lang="ts">
	import { base } from '$app/paths';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';
</script>

<svelte:head>
	<title>Häufige Fragen - BlindDate</title>
</svelte:head>

<SubpageTitle>Häufige Fragen</SubpageTitle>

<div class="wrapper">
	<h2>Inhaltsverzeichnis</h2>

	<ol class="table-of-contents">
		<li>
			<a href="#accessibility-necessary" class="focus-indicator"
				>1. Ist Barrierefreiheit in der Hochschullehre überhaupt nötig?
			</a>
		</li>
		<li>
			<a href="#accessibility-numbers" class="focus-indicator"
				>2. Wie viele Studierende haben eine Behinderung?
			</a>
		</li>
		<li>
			<a href="#persona-differences" class="focus-indicator"
				>3. Zwei Personas geben unterschiedliche Tipps – was ist denn jetzt richtig?
			</a>
		</li>
		<li>
			<a href="#disability-or-impairment" class="focus-indicator"
				>4. Warum steht da mal Behinderung und mal Beeinträchtigung?
			</a>
		</li>
		<li>
			<a href="#friend-personas" class="focus-indicator">5. Wofür sind die Freunde-Personas da? </a>
		</li>
		<li>
			<a href="#simulation-games" class="focus-indicator"
				>6. Haben Simulationen nicht einen schlechten Ruf?</a
			>
		</li>
		<li>
			<a href="#actuality" class="focus-indicator">7. Ist das noch aktuell?</a>
		</li>
		<li>
			<a href="#blinddate-accessible" class="focus-indicator"
				>8. Ist BlindDate selbst auch barrierefrei?</a
			>
		</li>
		<li>
			<a href="#blinddate-contact" class="focus-indicator"
				>9. Ich habe Fragen oder Anmerkungen, an wen kann ich mich wenden?</a
			>
		</li>
	</ol>

	<h2 id="accessibility-necessary">
		1. Ist Barrierefreiheit in der Hochschullehre überhaupt nötig?
	</h2>

	<p>
		Chancengleichheit im Studium – und die schließt einen barrierefreien Zugang zu allen Angeboten
		der Hochschule mit ein – ist gesetzlich vorgeschrieben. Wenn Studierende also Bedarfe anmelden
		oder Nachteilsausgleiche haben, muss die Hochschule diese umsetzen.
	</p>

	<p>
		Wenn Bedarfe angemeldet werden, müssen etwaige Änderungen und Nachbesserungen schnell geschehen.
		Das ist oft mit sehr viel Aufwand verbunden – und es bringt Nachteile für die Studierenden, die
		darauf angewiesen sind. Wenn die Barrierefreiheit von Lernmaterial und Veranstaltungen direkt
		mitbedacht wird, fällt dieser Aufwand deutlich geringer aus.
	</p>

	<p>
		Nicht nur das – von Barrierefreiheit profitieren alle Studierenden. Man sagt, Barrierefreiheit
		ist für 10% der Studierenden nötig – es geht nicht ohne sie. Für 30% der Studierenden ist sie
		wichtig – es macht einen großen Unterschied, ob das Studium zugänglich gestaltet ist. Aber für
		alle Studierende ist Barrierefreiheit ein Gewinn.
	</p>

	<p>
		Übersichtlich gestaltetes Lernmaterial, untertitelte Videos, Vorlesungsaufzeichnungen und klare
		Scans von Dokumenten kommen allen zugute. Studierende können so krankheitsbedingte Ausfälle
		kompensieren, lernen auch, wenn sie keinen ruhigen Arbeitsplatz haben, und gewinnen Sicherheit
		dadurch, dass sie sich in Ihrem Kurs gut zurechtfinden. All das ist wichtig für eine
		chancengerechte, diverse Hochschule.
	</p>

	<p>
		Viele Studierende haben unsichtbare Beeinträchtigungen. Das heißt, diese sind von außen nicht
		erkennbar. Das betrifft viele Studierende mit chronischen oder psychischen Krankheiten, aber
		auch Studierende auf dem Autismus-Spektrum, mit Legasthenie, oder AD(H)S. Auch Seh- und
		Hörbeeinträchtigungen sind nicht immer offensichtlich. Wenn niemand zu Ihnen kommt und Bedarfe
		geltend macht, heißt es nicht, dass es diese Bedarfe nicht gibt. Studierende brauchen oft sehr
		lange, bis sie sich melden und auch Nachteilsausgleiche in Anspruch nehmen (siehe

		<a
			href="https://www.studierendenwerke.de/fileadmin/user_upload/beeintraechtigt_studieren_2021.pdf#page=121"
			class="focus-indicator"
		>
			Die Studierendenbefragung in Deutschland: best3 (PDF, Seite 119)
		</a>
		)
	</p>

	<p>
		Wie Sie Ihre Lehre für viele Studierende barrierefrei gestalten können, ohne deren Bedarfe zu
		kennen, zeigen wir Ihnen auf <a class="focus-indicator" href={base + '/große-ganze/'}
			>"das große Ganze"</a
		> .
	</p>

	<h2 id="accessibility-numbers">2. Wie viele Studierende haben eine Behinderung?</h2>

	<p>
		Wie viele Studierende eine Beeinträchtigung haben, ist nicht genau bekannt, denn diese Daten
		dürfen bei der Einschreibung nicht erfasst oder im Studienverlauf gespeichert werden.
	</p>

	<p>
		Eine gute Schätzung liefert die Umfrage „beeinträchtigt studieren“ (best3), die alle 3 Jahre vom
		Deutschen Studierendenwerk und dem Deutschen Zentrum für Hochschul- und Wissenschaftsforschung
		beauftragt wird. An den bisherigen Umfragen haben mehr als 20 000 Studierende teilgenommen und
		Fragen zu ihren Erfahrungen im Studium beantwortet.
	</p>

	<p>
		An der 22. Sozialerhebung, der aktuellen Version der Umfrage, die im Dezember 2023
		veröffentlicht wurde, nahmen 188.000 Studierende teil. Es gaben 15,9% der befragten Studierenden
		an, dass Sie eine studienerschwerende Beeinträchtigung haben.
	</p>

	<img
		src="{base}/media/faq/best3-students-impairment.png"
		alt="Angaben von 179.908 Studierenden werden in einem Kuchendiagramm dargestellt. 84,1% sind Studierende ohne studienerschwerende Beeinträchtigung. 15,9% geben an, eine studienerschwerende Beeinträchtigung zu haben. Innerhalb dieser 15,9% wird auch nach Beeinträchtigungsart unterschieden. Die Ergebnisse zu den Beeinträchtigungsarten basieren auf Angaben von 26.264 Studierenden: 65,2% psychische Erkrankung, 13.2% chronische Erkrankung, 7,2% gleich schwere Mehrfachbeeinträchtigung und 14,3% andere Beeinträchtigung."
	/>
	<p>
		Bildquelle: <a
			href="https://www.studierendenwerke.de/fileadmin/user_upload/beeintraechtigt_studieren_2021.pdf"
			class="focus-indicator"
		>
			Die Studierendenbefragung in Deutschland: best3 (PDF)
		</a>
	</p>

	<p>
		Nach den Zahlen hat fast jede*r sechste Studierende eine Beeinträchtigung, die sich erschwerend
		auf das Studium auswirkt. Es ist deshalb sehr wahrscheinlich, dass auch in Ihren Kursen
		Studierende mit Behinderung sitzen. Und: Der größte Anteil von Studierenden mit Beeinträchtigung
		sind diejenigen, die eine nicht-sichtbare Beeinträchtigung haben. 65% der Studierenden mit einer
		studienerschwerenden Beeinträchtigung haben eine psychische - und damit häufig von außen nicht
		wahrnehmbare - Erkrankung.
	</p>

	<img
		src="{base}/media/faq/best3-students-impairment-detail.png"
		alt="Die Angaben von 26.264 Studierenden mit studienerschwerenden Beeinträchtigungen sind in einem Balkendiagramm dargestellt: 65,2% psychische Erkrankung, 13,2% chronische Erkrankung, 7,2% gleich schwere Mehrfachbeeinträchtigung, 5,1% andere Beeinträchtigung, 3,7% Teilleistungsstörungen, 2,5% Bewegungsbeeinträchtigung, 1,9% Sehbeeinträchtigung, 1,1% Hörbeeinträchtigung."
	/>

	<p>
		Bildquelle: <a
			href="https://www.studierendenwerke.de/fileadmin/user_upload/beeintraechtigt_studieren_2021.pdf"
			class="focus-indicator"
		>
			Die Studierendenbefragung in Deutschland: best3 (PDF)
		</a>
	</p>

	<h2 id="persona-differences">
		3. Zwei Personas geben unterschiedliche Tipps – was ist denn jetzt richtig?
	</h2>

	<p>
		Barrierefreiheit ist in sich widersprüchlich – was für jemanden mit Sehbeeinträchtigung ideal
		ist, kann für jemanden mit Hörbehinderung tatsächlich schwerer zugänglich sein. Deshalb ist eine
		ideale Barrierefreiheit, in der niemand Barrieren erlebt, fast unerreichbar oder nur mit sehr
		großem Aufwand umsetzbar.
	</p>

	<p>
		In der Regel sprechen wir von Barrierearmut – wir versuchen, so viele Barrieren wie möglich zu
		reduzieren und orientieren uns dabei an den Bedarfen der Nutzenden oder Teilnehmenden. Wenn zu
		unserer Nutzendengruppe „alle“ gehören, wie z.B. bei Softwareprogrammen wie MS Office, muss sehr
		viel Aufwand in die Barrierefreiheit fließen. Wenn unsere Basis eine kleinere, uns bekannte
		Gruppe ist, können wir sehr viel für die generelle Barrierefreiheit tun und dann noch
		individuelle Anpassungen vornehmen, die sich an konkreten Bedarfen orientieren.
	</p>

	<p>
		Barrierefreiheit ist ein Prozess – es ist eine andauernde Aufgabe, deren Anforderungen sich
		ändern. Aber: Wir werden stetig besser.
	</p>

	<h2 id="disability-or-impairment">4. Warum steht da mal Behinderung und mal Beeinträchtigung?</h2>

	<p>Oft werden diese Wörter synonym benutzt – in der Definition gibt es aber Unterschiede.</p>

	<p>
		Eine Beeinträchtigung betont den körperlichen Aspekt einer Behinderung – z.B. eingeschränktes
		Seh- oder Hörvermögen, fehlende Gliedmaßen oder eine chronische Krankheit.
	</p>

	<p>
		Für die UN-Behindertenrechtskonvention (UN-BRK) gelten diejenigen Menschen als behindert, die
		eine „langfristige körperliche, seelische, geistige oder Sinnesbeeinträchtigungen haben, welche
		sie in Wechselwirkung mit verschiedenen Barrieren an der vollen, wirksamen und
		gleichberechtigten Teilhabe an der Gesellschaft hindern können“ (UN-BRK 2006). Diese Definition
		geht also weit über die körperlichen Aspekte der Beeinträchtigung hinaus und erkennt an, dass
		Barrieren durch die Wechselwirkung zwischen Gesellschaft, Umwelt und beeinträchtigten Menschen
		entstehen.
	</p>

	<p>
		Das bedeutet auch, dass Menschen nicht behindert sind - also Behinderung ein individuelles
		Problem ist -, sondern behindert werden. Behinderung ist also ein gesellschaftliches Problem,
		das auch auf dieser Ebene adressiert werden muss. Dieses Modell von Behinderung wird auch das
		Soziale Modell genannt.
	</p>

	<p>
		Mehr Infos zum Sozialen Modell der Behinderung:

		<a
			href="https://www.bmz.de/de/themen/rechte-menschen-mit-behinderungen/definition-behinderung-20364
        "
			class="focus-indicator"
			>Definition von Behinderung
		</a>
	</p>

	<p>
		Ob sich jemand als beeinträchtigt oder behindert bezeichnet, ist oft individuell verschieden.
		Manche Communities bevorzugen einen bestimmten Begriff und verwenden diesen auch konsistent. Als
		Selbstbezeichnung können auch Worte genutzt werden, die vielleicht als unpassend oder
		beleidigend eingestuft werden, z.B. <span lang="en">Crip</span>/Krüppel.
	</p>

	<p>
		Wir haben uns auf BlindDate daher entschlossen, die Personas ebenfalls unterschiedliche
		Begrifflichkeiten nutzen zu lassen.
	</p>

	<h2 id="friend-personas">5. Wofür sind die Freunde-Personas da?</h2>

	<p>
		Auf den orangen Karten, die auf der rechten Seite mancher Persona-Seiten erscheinen, finden Sie
		die sogenannten Freunde-Personas, wie beispielsweise Bea und Alex. Diese Bezugspersonen haben
		die Funktion, mit der eigentlichen Persona in den Dialog zu treten, mehr über sie zu erzählen
		oder auch mal anderer Meinung zu sein. Eine Funktion der Freunde-Personas ist, zu zeigen, dass
		Studierende mit Beeinträchtigungen individuell verschieden sind, auch wenn sie vielleicht eine
		ähnliche Beeinträchtigung haben oder in einer ähnlichen Situation sind.
	</p>

	<p>
		Die Freunde-Personas sind nicht mit dem gleichen Detail entwickelt und haben kein zusätzliches
		Audio-Material oder begleitende Medien.
	</p>

	<h2 id="simulation-games">6. Haben Simulationen nicht einen schlechten Ruf?</h2>

	<p>
		Viele Menschen mit Behinderung und ihre Selbstvertretung sehen Simulationen oder immersive
		Spiele, die eine Beeinträchtigung nachstellen sollen, kritisch.
	</p>

	<p>
		Oft laufen diese Simulationen nach einem ähnlichen Schema ab: Eine nichtbehinderte Person soll
		eine Behinderung erleben, indem sie z.B. für eine gewisse Zeit einen Rollstuhl nutzt, eine
		spezielle Brille bekommt, die eine Sehbeeinträchtigungen simuliert, oder einen Anzug trägt, der
		Bewegungen erschwert. Wenn die nichtbehinderte Person dann Aufgaben erledigen muss, soll sie
		erleben, wie die Umwelt sie behindert, Mitgefühl entwickeln und ist in der Lage, in zukünftigen
		Handlungen auch die Perspektive von behinderten Menschen einzubeziehen.
	</p>

	<p>
		Manchmal führen solche Simulationen allerdings dazu, dass nichtbehinderte Personen sich (und im
		Rückschluss Menschen mit Behinderung) als hilflos und ohnmächtig empfinden. Ohne Übung im
		Handling in einem Rollstuhl zu sitzen, kann beispielsweise dazu führen, dass man Mitleid für
		Menschen mit Behinderung entwickelt oder es schlimm findet, das Menschen sich so fortbewegen.
	</p>

	<p>
		Für andere Leute können solche Erlebnisse jedoch auch bereichernd sein – gerade wenn sie von
		Menschen mit Behinderung begleitet und angeleitet werden, die auch von ihren eigenen Erfahrungen
		berichten. Auf diese Weise wird das Ziel erreicht, ein Bewusstsein zu entwickeln und die eigene
		Umwelt kritisch zu überprüfen, ob sie den Bedürfnissen von Menschen mit Behinderung gerecht
		wird.
	</p>

	<p>
		Wichtig ist ein Bewusstsein dafür, dass Menschen mit Behinderung viele Strategien und Kenntnisse
		haben, die sie jeden Tag nutzen. Und dass diese Strategien auf viel Training und Übung aufbauen.
		Dazu gehören zum Beispiel auch der Umgang mit einem Rollstuhl, Navigation in der Stadt mit einem
		Langstock, oder die Nutzung von assistiven Technologien.
	</p>

	<p>
		In dieser Podcast Folge geht das Team der Neuen Norm weiter auf das Thema ein:
		<a href="https://dieneuenorm.de/podcast/rollstuhlexperimente/" class="focus-indicator"
			>#1 Rollstuhl-Experimente</a
		>
	</p>

	<p>
		Und auch dieser Bericht von Suse Bauer geht auf den Umgang mit Simulationen ein:
		<a
			href="https://raul.de/allgemein/disability-simulations-behinderung-als-event-oder-eine-gute-moeglichkeit-um-auf-barrieren-aufmerksam-zu-machen/"
			class="focus-indicator"
			>“Disability Simulations” – Behinderung als Event oder eine gute Möglichkeit, um auf Barrieren
			aufmerksam zu machen?</a
		>
	</p>

	<p>
		Zum Ausprobieren, der <a
			href="https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla
		"
			class="focus-indicator">Web Disability Simulator von Google Chrome</a
		>.
	</p>

	<p>
		Die Spiele, die Sie auf BlindDate finden, sollen genau die Strategien in den Fokus nehmen, die
		Menschen mit Behinderung nutzen, um alltägliche Aufgaben zu erledigen. Es geht also nicht darum,
		genau zu verstehen, wie man mit einer Sehbeeinträchtigung sieht und wie sich das anfühlt,
		sondern zu verstehen, welche Strategien und Technologien eine sehbehinderte Person nutzt, um
		erfolgreich zu studieren. Und natürlich, wie Hochschulangehörige dabei helfen können, dass diese
		Strategien erfolgreich sind.
	</p>

	<p>
		Mehr Hintergrundinformationen zu den Simulationsspielen auf dieser Seite finden Sie hier:
		<a
			href="https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=277"
			class="focus-indicator"
			lang="en"
			>Re-Conceptualizing Disability Simulations: a guided strategies-based approach (PDF)</a
		>
	</p>

	<h2 id="actuality">7. Ist das noch aktuell?</h2>

	<p>
		Grundlage der Personas ist unter anderem die Bedarfsanalyse des Forschungsprojekts SHUFFLE. Die
		Analyse wurde im Januar und Februar 2022 durch qualitative Interviews und einen umfassenden
		Fragebogen durchgeführt. Die Texte in den Sprechblasen der Personas sind paraphrasierte Aussagen
		der Studierenden aus dieser Bedarfsanalyse. Die allgemeinen Textpassagen und Verlinkungen sind
		im Zeitraum von Herbst 2022 bis März 2024 entstanden. Es kann also sein, dass Daten,
		Verlinkungen oder Aussagen nicht mehr dem aktuellen Diskurs entsprechen.
	</p>

	<h2 id="blinddate-accessible">8. Ist BlindDate selbst auch barrierefrei?</h2>

	<p>
		Die Webseite hat das Ziel nach nationalen und internationalen Standards und Richtlinien
		barrierefrei zu sein. Dies bedeutet unter anderem, dass die Videos auf den Persona-Seiten sowohl
		mit Untertiteln, als auch mit Audiodeskriptionen abgespielt werden können. Ein Transkript der
		Videos ist ebenfalls verfügbar. Darüber hinaus ist die Webseite grundsätzlich für Tastatur- und
		<span lang="en">Screenreader</span>nutzende zugänglich. Die sogenannten Simulationsspiele
		stellen hierbei die Ausnahme dar, da sie aufgrund ihrer spezifischen Spielmechanik nicht
		barrierefrei umgesetzt werden können. Eine Zusammenfassung der Kernaussagen und Erkenntnisse
		finden Sie allerdings in Textform unterhalb der Spiele-Links vor.
	</p>

	<p>
		Um weitere Informationen zur Barrierefreiheit von BlindDate zu erhalten, werden Sie hier zur

		<a href="{base}/barrierefreiheit" class="focus-indicator">Erklärung zur Barrierefreiheit</a>
		weitergeleitet.
	</p>

	<h2 id="blinddate-contact">9. Ich habe Fragen oder Anmerkungen, an wen kann ich mich wenden?</h2>

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

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;

		.table-of-contents {
			list-style-type: none;
			padding: 0;

			li {
				margin: 0.625rem 0rem;
			}
		}

		img {
			max-width: 100%;
		}
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
