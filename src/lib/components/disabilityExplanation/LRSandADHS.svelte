<script lang="ts">
	import Sources from '../Sources.svelte';
</script>

<div>
	<h2>Lese-Rechtschreib-Störung (LRS)</h2>
	<p>
		Legasthenie, auch als Lese-Rechtschreib-Störung bekannt, ist eine spezifische Lernstörung, die
		durch Schwierigkeiten beim Erlernen des Lesens und Schreibens trotz normaler Intelligenz
		gekennzeichnet ist. Betroffene Personen haben oft Probleme mit der genauen und flüssigen
		Worterkennung sowie mit der Rechtschreibung und dem Textverständnis. Diese Schwierigkeiten
		können das schulische und berufliche Leben erheblich beeinträchtigen, sind jedoch durch
		spezielle Fördermaßnahmen oft gut zu kompensieren.
	</p>
	<Sources
		sources={[
			{
				title:
					'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5), American Psychiatric Association.'
			}
		]}
	/>

	<h2>Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS)</h2>
	<p>
		ADHS ist eine neurobiologische Störung, verursacht durch ein Ungleichgewicht von Botenstoffen im
		Gehirn. Gekennzeichnet ist diese Störung durch anhaltende Muster von Unaufmerksamkeit,
		Hyperaktivität und Impulsivität. Diese Symptome führen häufig zu Beeinträchtigungen in
		verschiedenen Lebensbereichen wie Schule, Beruf und sozialen Beziehungen. ADHS wird in der Regel
		im Kindesalter diagnostiziert, kann jedoch auch im Erwachsenenalter fortbestehen.
	</p>
	<Sources
		sources={[
			{
				title:
					'Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) vom Bundesministerium für Gesundheit',
				url: 'https://www.bundesgesundheitsministerium.de/themen/praevention/kindergesundheit/aufmerksamkeitsdefizitsyndrom.html'
			}
		]}
	/>
</div>

<style lang="scss">
	h2 {
		font-size: clamp(1.25rem, 2vw + 0.5rem, 1.5rem);
	}
</style>
