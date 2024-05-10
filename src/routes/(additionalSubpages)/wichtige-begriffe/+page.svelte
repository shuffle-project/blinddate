<script>
	import { base } from '$app/paths';
	import Sources from '../../../lib/components/Sources.svelte';
	import SubpageTitle from '../../../lib/components/SubpageTitle.svelte';
</script>

<svelte:head>
	<title>Wichtige Begriffe - BlindDate</title>
</svelte:head>

<SubpageTitle>Wichtige Begriffe - kurz erklärt</SubpageTitle>

<div class="wrapper">
	<h2>Inhaltsverzeichnis</h2>
	<ol class="table-of-contents">
		<li>
			<a href="#accessibility" class="focus-indicator">1. Barrierefreiheit</a>
		</li>
		<li>
			<a href="#digital-accessibility" class="focus-indicator">2. Digitale Barrierefreiheit</a>
		</li>
		<li>
			<a href="#assistive-technologies" class="focus-indicator">3. Assistive Technologien</a>
		</li>
		<li>
			<a href="#personas" class="focus-indicator">4. Personas</a>
		</li>
		<li>
			<a href="#best3" class="focus-indicator">5. best3 Studie</a>
		</li>
		<li>
			<a href="#multi-sense" class="focus-indicator"
				>6. Mehr-Sinne-Prinzip oder Zwei-Sinne-Prinzip</a
			>
		</li>
		<li>
			<a href="#ocr" class="focus-indicator">7. OCR</a>
		</li>
		<li>
			<a href="#simulation-games" class="focus-indicator"
				>8. Simulationen / Spiele auf der Webseite</a
			>
		</li>
		<li>
			<a href="#universal-design" class="focus-indicator" lang="en"
				>9. Universal Design (for learning)</a
			>
		</li>
	</ol>
	<h2 id="accessibility">1. Barrierefreiheit</h2>
	<p>
		Eine Definition von Barrierefreiheit findet sich in §4 des Behindertengleichstellungsgesetz:
	</p>
	<p>
		“Barrierefrei sind bauliche und sonstige Anlagen, Verkehrsmittel, technische
		Gebrauchsgegenstände, Systeme der Informationsverarbeitung, akustische und visuelle
		Informationsquellen und Kommunikationseinrichtungen sowie andere gestaltete Lebensbereiche, wenn
		sie für Menschen mit Behinderungen <strong>
			in der allgemein üblichen Weise, ohne besondere Erschwernis und grundsätzlich ohne fremde
			Hilfe auffindbar, zugänglich und nutzbar sind.
		</strong> Hierbei ist die Nutzung behinderungsbedingt notwendiger Hilfsmittel zulässig.”
	</p>

	<p>
		Diese Punkte werden auch vom Hochschulrahmengesetz aufgegriffen. Dort heißt es in §2, Abs 4:
		„Hochschulen […] tragen dafür Sorge, dass behinderte Studierende in ihrem Studium nicht
		benachteiligt werden und die Angebote der Hochschule möglichst ohne fremde Hilfe in Anspruch
		nehmen können“
	</p>

	<p>
		Die Angebote der Hochschule umfasst hier nicht nur die Zugänglichkeit von Gebäuden und
		Studierbarkeit von einzelnen Studiengängen, sondern alle Angebote der Hochschule wie z.B. Zugang
		zu Gebäuden, Praktika, Exkursionen, Labore, Sprachkurse und außercurriculare Angebote.
	</p>

	<p>
		Eine genaue Beschreibung, wie Barrierefreiheit an der Hochschule umgesetzt werden sollte, findet
		sich in der <a
			href="https://www.hrk.de/fileadmin/redaktion/hrk/02-Dokumente/02-03-Studium/02-03-08-Barrierefreies-Studium/Auswertung_Evaluation_Hochschule_fuer_Alle_01.pdf"
			class="focus-indicator">Empfehlung „Eine Hochschule für Alle“ der HRK (PDF).</a
		>
	</p>

	<p>
		In ihrer <a href="https://dieneuenorm.de/podcast/barrierefreiheit/" class="focus-indicator">
			Podcast Episode zum Thema Barrierefreiheit
		</a>
		erklärt das Team von „die Neue Norm“ den Begriff und die Bedeutung weiter.
	</p>

	<h2 id="digital-accessibility">2. Digitale Barrierefreiheit</h2>

	<p>
		Digitale Barrierefreiheit bedeutet, dass digitale Angebote unabhängig von persönlichen
		Voraussetzungen genutzt werden können – Webseiten, digitale Veranstaltungen, Dokumente und
		Anwendungen müssen für alle Menschen gleichermaßen auffindbar, zugänglich und nutzbar sein.
		<a
			href="https://hochschulforumdigitalisierung.de/sites/default/files/dateien/HFD_AP_66_Leitfaden_Digitale_Barrierefreiheit.pdf"
			class="focus-indicator">Leitfaden zur Digitalen Barrierefreiheit im Hochschulkontext (PDF)</a
		>
	</p>

	<p>
		An der Hochschule betrifft digitale Barrierefreiheit die ganze digitale Infrastruktur – dazu
		gehören Web-Auftritte der gesamten Hochschule, das Intranet, Dokumente, die im Kontext der Lehre
		oder Verwaltung erstellt und genutzt werden, digitale Services für Mitarbeitende und
		Studierende, Learning Management Systeme und alle weiteren digitalen Angebote. Da diese Bereiche
		fast die ganze Hochschule umfassen, ist es auch die Aufgabe aller, für digitale Barrierefreiheit
		zu sorgen. Die EU-Richtlinie 2016/2102 verpflichtet alle öffentlichen Stellen und damit auch die
		Hochschulen, ihre digitalen Angebote barrierefrei zugänglich zu machen.
	</p>

	<p>
		Die <span lang="en">Web Content Accessibility Guidelines </span> (WCAG) legen fest, welche
		Kriterien erfüllt sein müssen, damit digitale Inhalte barrierefrei sind. Die Kriterien der Stufe
		A und AA finden sich auch in der BITV 2.0, die hier in Deutschland gilt und sich in den
		unterschiedlichen Gesetzen der Länder widerspiegelt. Zentrale Kriterien bei der Umsetzung
		barrierefreier digitaler Inhalte sind die Wahrnehmbarkeit, Bedienbarkeit, Verständlichkeit und
		Robustheit (hier können Sie mehr über die POUR Prinzipien erfahren:

		<a
			class="focus-indicator"
			href="https://hochschulforumdigitalisierung.de/grundlagen-digitaler-barrierefreiheit/"
		>
			Grundlagen digitaler Barrierefreiheit
		</a>). Diese Vorgaben gelten auch für Hochschulen.
	</p>

	<p>
		Für Dokumente gelten die Kriterien des <a
			class="focus-indicator"
			href="https://www.barrierefreiheit-dienstekonsolidierung.bund.de/Webs/PB/DE/gesetze-und-richtlinien/en301549/en301549-node.html"
			>EN 301 549 Standards</a
		>, der europaweit gilt. Hier wird unter anderem beschrieben, wie digitale Dokumente aufgebaut
		sein müssen, damit sie barrierefrei zugänglich sind.
	</p>

	<p>
		Das SHUFFLE-Forschungsprojekt hat mit dem <a
			class="focus-indicator"
			href="https://openmoodle.uni-bielefeld.de/course/view.php?id=46"
			>Materialpaket barrierefreie Lehre</a
		> einen kostenlosen Moodle-Kurs erstellt, um Lehrende bei der Umsetzung barrierefreier Dokumente
		zu unterstützen.
	</p>

	<h2 id="assistive-technologies">3. Assistive Technologien</h2>
	<p>
		Unter dem Begriff versteht man Hilfsmittel, die Menschen mit Beeinträchtigungen beim Zugang zu
		Informationen, digitalen Medien und Kommunikation unterstützen. Diese Technologien werden auch
		Unterstützungstechnologien genannt.
	</p>
	<p>
		Assistive Technologien ist ein Sammelbegriff, der vielfältige Tools umfasst, die Menschen mit
		den unterschiedlichsten Beeinträchtigung unterstützen. Assistive Technologien sollen dabei
		helfen, bestimmte Beeinträchtigungen auszugleichen, z.B. indem sie visuelle Inhalte vorlesen
		oder Inhalte mit der Tastatur anstatt mit der Maus angesteuert werden können.
	</p>
	<p>
		Zu assistiven Technologien gehören sowohl Hardware (z.B. Braillezeilen oder alternative
		Eingabegeräte), als auch Software (z.B. ScreenReader, Bildschirmlupe oder Spracherkennung).
		Viele dieser Technologien sind bereits in Betriebssystemen oder Software enthalten, z.B.
		Spracheingabe, Vorlesefunktionen oder Bildschirmlupen.
	</p>
	<p>
		Hier wird ein Blindenarbeitsplatz mit unterschiedlichen assistiven Technologien vorgestellt:

		<a href="https://www.youtube.com/watch?v=1-6UV6WK3Yk" class="focus-indicator"
			>Der Blindenarbeitsplatz der Zentralen Anlaufstelle der Uni Bielefeld (YouTube)</a
		>
	</p>
	<p>
		Damit assistive Technologien erfolgreich genutzt werden können, müssen Webseiten, Apps und
		Dokumente damit kompatibel sein. ScreenReader können z.B. den Inhalt von Bildern oder Diagrammen
		lesen, wenn ein Alternativtext hinterlegt ist. Für diese Kompatibilität sind die Autor*innen der
		Webseiten und Dokumente verantwortlich. Barrierefreiheit muss also direkt von Anfang an
		mitbedacht werden und entscheidet, wie eine Webseite codiert oder ein Dokument aufgebaut ist.
	</p>

	<h2 id="personas">4. Personas</h2>

	<p>
		Die Persona-Methode wurde 1999 von Alan Cooper entwickelt. Ziel dieser Methode ist es, Modelle
		von Nutzenden, „die Personen einer spezifischen Zielgruppe mit bestimmten Merkmalen
		charakterisieren“ (Lepzien et al) zu entwickeln, um sich in diese Zielgruppe hineinversetzen und
		deren Bedürfnisse und Motivationen verstehen zu können. Personas sind also fiktive Personen, die
		eine bestimmte Gruppe von Menschen repräsentieren.
	</p>

	<p>
		Mehr Informationen zu Personas finden Sie hier: <a
			href="{base}/persona-entwicklung"
			class="focus-indicator">Die Persona-Entwicklung im Detail</a
		>
	</p>

	<h2 id="best3">5. best3 Studie</h2>

	<p>
		Die Studie “beeinträchtigt studieren” wird alle 3 Jahre vom Deutschen Zentrum für Hochschul- und
		Wissenschaftsforschung (DZHW) erstellt und gemeinsam mit dem Deutschen Studierendenwerk
		veröffentlicht. Die Studie gibt einen Einblick über die Situation von Studierenden mit
		Beeinträchtigungen, die von ihnen erlebten Barrieren im Studium und über die Wirksamkeit und
		Nützlichkeit von Vorkehrungen wie z.B. Nachteilsausgleichen oder Beratungsangeboten.
	</p>
	<p>
		best3 ist die dritte Erhebung. Die Daten werden im Rahmen der Sozialerhebung gesammelt. Welche
		Daten erhoben werden, die Forschungsfragen und die Auswertung sind auf Webseite der Umfrage
		genau erklärt: <a
			class="focus-indicator"
			href="https://www.studierendenwerke.de/themen/studieren-mit-behinderung/recht-politik-und-daten/daten"
			>Zum Studiendesign der Sozialerhebung</a
		>
	</p>
	<p>
		Die Studie zeigt, dass insgesamt 16% der Studierenden eine studienerschwerende Beeinträchtigung
		haben – das ist fast jede*r sechste Studierende.
	</p>
	<p>
		<a
			href="https://www.studierendenwerke.de/dsw-zukunftskonferenz-2023/best3-studieren-mit-einer-gesundheitlichen-beeintraechtigung"
			class="focus-indicator">Zu den Ergebnisse der best3 Studie</a
		>
	</p>

	<h2 id="multi-sense">6. Mehr-Sinne-Prinzip oder Zwei-Sinne-Prinzip</h2>

	<p>
		Das Zwei-/Mehr-Sinne-Prinzip ist ein Grundprinzip der barrierefreien Gestaltung. Es besagt, dass
		mindestens zwei der drei Sinne (Hören, Sehen, Fühlen) angesprochen werden sollen, um
		Informationen zu übermitteln.
	</p>
	<p>
		Das Mehr-Sinne Prinzip ist zentral, wenn Inhalte für Menschen mit Sinnesbehinderungen (z.B.
		Hörbehinderungen oder Sehbeeinträchtigungen) zugänglich sein sollen.
	</p>
	<p>Einige Beispiele der Umsetzung sind:</p>

	<ul>
		<li>
			Untertitel, die gesprochene Sprache verschriftlichen, so dass man sie visuell aufnehmen kann
		</li>
		<li>
			Alternativtexte für Bilder, die von einem Screenreader vorgelesenen werden. So kann die
			visuelle Information gehört werden
		</li>
		<li>Audio-Deskription von Handlungen in einem Video, die so gehört werden können</li>
		<li>Ein Transkript für eine Podcast. Die Inhalte können so visuell wahrgenommen werden.</li>
		<li>
			Gebärdensprachdolmetscher*innen oder Schriftdolmetscher*innen, die das Gesprochene in eine
			andere Modalität übersetzen
		</li>
	</ul>

	<p>
		Eine Gestaltung nach dem Mehr-Sinne-Prinzip sorgt einerseits dafür, dass Personen mit
		Sinnesbeeinträchtigungen Informationen trotzdem gleichwertig wahrnehmen können. Zusätzlich ist
		die Wahrscheinlichkeit, dass Informationen aufgenommen und verstanden werden, deutlich höher, je
		mehr Sinne bei der wahrnehmenden Person angesprochen werden.
	</p>

	<h2 id="ocr">7. OCR</h2>

	<p>
		OCR ist die Abkürzung für Optical Character Recognition. Zu diesem Inhaltstyp gehören Dokumente,
		die abfotografiert oder eingescannt und dann als PDF gespeichert wurden. Oft werden diese
		Dateien als Bild abgespeichert, was bedeutet, dass sie nicht maschinenlesbar und somit nicht
		barrierefrei sind. Ein Screenreader kann solche Dokumente nicht vorlesen.
	</p>
	<p>
		Mit Hilfe von OCR kann der Text in solchen Dokumenten erkannt werden. Dieser Text ist dann
		maschinenlesbar. Leider klappt das aber nicht immer reibungslos und ist sehr stark von der
		Qualität und Auflösung der Scans oder Fotos abhängig. Einige Hochschulen haben spezielle
		hochauflösende OCR Scanner, die eine gute Texterkennung ermöglichen. Diese finden Sie in der
		Bibliothek oder bei einem Umsetzungsdienst.
	</p>
	<p>
		Wenn es Alternativen gibt, z.B. das Dokument als Text oder strukturiertes Dokument zu speichern,
		sollten diese immer genutzt werden.
	</p>
	<p>
		Mehr Informationen zu Dokumenten in Lehrkontexten finden Sie in der Handreichung des BFIT Bund

		<a
			href="https://handreichungen.bfit-bund.de/bf-dokumente-lernkontext/1.2/pdf/handreichung.pdf"
			class="focus-indicator">Barrierefreie Dokumente in Lernkontexten (PDF)</a
		>
	</p>

	<h2 id="simulation-games">8. Simulationen / Spiele auf der Webseite</h2>

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
		berichten. So wird das Ziel erfüllt, Bewusstsein zu entwickeln und die eigene Umwelt kritisch zu
		betrachten, ob sie auf die Bedürfnisse von Menschen mit Behinderung zugeschnitten ist.
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

	<h2 id="universal-design" lang="en">9. Universal Design (for learning)</h2>

	<p>
		Ziel von Universal Design ist es, Produkte, Gebäude und Dienstleistungen so zu gestalten, dass
		sie von möglichst vielen Menschen ohne Anpassungen oder Spezialisierungen genutzt werden können.
		Ursprünglich kommt das Designkonzept aus der Architektur. Mittlerweile ist es jedoch auf fast
		alle Design-Bereiche angewendet worden.
	</p>

	<p>
		Universal Design denkt die Bandbreite an menschlichen Fähigkeiten und Fertigkeiten direkt von
		Anfang an mit. Zum Beispiel wird beim Entwurf von Gebäuden direkt geplant, wie Menschen mit
		Mobilitätseinschränkungen das Gebäude nutzen können. Aufzüge, Rampen, automatische Türen und
		barrierefreie Toiletten werden direkt eingeplant und finden sich an sinnvollen Stellen wieder.
		Aufwändige Nachrüstungen entfallen so und das Gebäude kann von allen gleichwertig und zweckmäßig
		genutzt werden. Mittlerweile sind solche Vorkehrung beim Bau von öffentlichen Gebäuden Standard.
	</p>

	<p>
		Wichtig ist auch zu verstehen, dass diese Anpassungen nicht nur Menschen mit Behinderung zu Gute
		kommen. Über eine Rampe freut sich auch jemand, der ein schweres Paket trägt, der Aufzug wird
		auch von Senior*innen oder Personen mit Kinderwagen gern genutzt. Ein zentrales Argument von
		Universal Design ist, dass Orte, Produkte oder Dienstleistungen, die unterschiedliche
		menschliche Bedarfe berücksichtigen, von allen Menschen lieber genutzt werden.
	</p>

	<p>
		Universal Design kann aber auch auf den Kontext (Hochschul-)Lehre angewendet werden. Auch hier
		gilt das gleiche Prinzip: Wir wollen eine Hochschullehre, an der möglichst viele
		unterschiedliche Menschen erfolgreich lernen und lehren können. Universal Design for Learning
		nutzt 9 Guidelines, um Lernumgebungen und Lernaktivitäten an die Bedarfe von vielen Lernenden
		anzupassen. Dazu gehört zum Beispiel, dass unterschiedliche Sinne angesprochen werden, Lernende
		sich auf unterschiedliche Arten beteiligen können, oder auch gelehrt wird, wie man lernt und
		sich selbst organisiert.
	</p>

	<p>
		Die Bedarfe von behinderten Studierenden werden im Universal Design von Anfang an berücksichtigt
		– zum Beispiel werden Dokumente barrierefrei aufbereitet, Fachbegriffe erklärt oder
		unterschiedliche Zugänge zu Inhalten bereit gestellt. Dieses Vorgehen sorgt dafür, dass
		aufwändige Nachbesserungen weniger werden und ermöglicht allen Studierenden, das Lernen nach
		ihren Bedarfen und Vorlieben zu gestalten.
	</p>

	<p>
		Die Guidelines des Universal Design for Learning werden hier erklärt:
		<a href="https://udlguidelines.cast.org/?lutm_medium=web" class="focus-indicator" lang="en"
			>The UDL Guidelines</a
		>
	</p>

	<p>
		Oder in diesem kurzen Video aus dem SHUFFLE Projekt:
		<a href="https://www.youtube.com/watch?v=Sh8lBDLj4hs" class="focus-indicator"
			>Lernen für Alle - Barrierefreie Einführung in das Universal Design for Learning auf Deutsch
			(YouTube)</a
		>
	</p>

	<div class="sources-wrapper">
		<Sources
			sources={[
				{
					title:
						'Lepzien, Josefine/Lewerenz, Michael (2017): Persona Methode. Eine Illustrierung von Bildungsbedarfen. In: Team der Wissenschaftlichen Weiterbildung der Universität Rostock: Weiterbildungsmanagement professionalisieren. Rostock: Universität Rostock, S. 22-31.'
				}
			]}
		/>
	</div>
</div>

<style lang="scss">
	.wrapper {
		max-width: 35rem;
		padding-inline: var(--outer-spacing);
		margin-inline: auto;

		.sources-wrapper {
			margin-block: 3.125rem;
		}

		.table-of-contents {
			list-style-type: none;
			padding: 0;
		}

		li {
			margin: 0.625rem 0rem;
		}
	}
</style>
