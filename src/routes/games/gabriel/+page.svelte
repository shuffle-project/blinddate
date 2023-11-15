<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	/* tasks */

	const contentsArray = [
		{
			image: base + '/games/gabriel/UI/moodle-01-sl.svg',
			mood: '',
			description:
				'Gabriel möchte sich notieren, auf welchen Seiten im Lehrwerk er weiterführende Informationen zu den Inhalten der Folien findet. Der Professor hat diese Verweise geschickt als kleine, rote Infokästen in den Folien integriert. Können Sie Gabriel dabei behilflich sein?',
			solution: 12
		},
		{
			image: base + '/games/gabriel/UI/moodle-02-nl.svg',
			mood: '',
			description:
				'Die Aufgabe ist gar nicht mehr so leicht, wenn das eigene Gesichtsfeld eingeschränkt ist. Das ist bei Gabriel durch sein Glaukom der Fall. Das bedeutet, dass es ihm schwerer fällt, das, was vor ihm liegt, schnell zu überblicken.',
			solution: 'NONE'
		},
		{
			image: base + '/games/gabriel/UI/moodle-03-el-01.svg',
			mood: base + '/personas/gabriel/gabriel-explaining.svg',
			description:
				'“Keine Sorge: Mit der Zeit entwickelt man Strategien, um mit einer Sehbeeinträchtigung zurecht zu kommen. Mir hilft es, den Kopf viel hin und her zu bewegen, um mich in einem Dokument zurechtzufinden. Das mag für Außenstehende zunächst ungewöhnlich wirken, aber es funktioniert. Versuch‘s mal!”',
			solution: 19
		},
		{
			image: base + '/games/gabriel/UI/moodle-04-el-02.svg',
			mood: base + '/personas/gabriel/gabriel-neutral.svg',
			description:
				'“Wie läuft´s? Zugegeben: Ich brauche mehr Zeit als ein Mensch ohne Sehbehinderung, um mit dieser Methode Stück für Stück alle Inhalte in einem Dokument zu erfassen. Außerdem belastet das ständige Bewegen des Kopfes meinen Nacken auf Dauer.”',
			solution: 22
		},
		{
			image: base + '/games/gabriel/UI/moodle-05-el-03.svg',
			mood: base + '/personas/gabriel/gabriel-sad.svg',
			description:
				'“Es wäre einfacher für mich, die Quellen zu überblicken, wenn der Infokasten sich immer an derselben Stelle auf einer Folie befinden würde. Ich werde meinem Dozenten gleich eine E-Mail schreiben und nachfragen, ob er das ändern kann.”',
			solution: 24
		},
		{
			image: base + '/games/gabriel/UI/moodle-06-ll-01.svg',
			mood: base + '/personas/gabriel/gabriel-happy.svg',
			description:
				'“Der Dozent hat die Folien angepasst! In seiner E-Mail teilt er mit, dass die Quelle nun immer rechts neben dem Titel zu finden ist. Du wirst gleich feststellen, wie viel schneller Du jetzt mit den Aufgaben vorankommst.”',
			solution: 28
		},
		{
			image: base + '/games/gabriel/UI/moodle-07-ll-02.svg',
			mood: base + '/personas/gabriel/gabriel-shrug.svg',
			description:
				'“In der Regel komme ich im Studium gut zurecht, da ich mich über die Jahre an die eingeschränkte Sicht gewöhnt habe. Aber mit etwas Unterstützung kann ich in den Veranstaltungen noch effizienter lernen.”',
			solution: 29
		},
		{
			image: base + '/games/gabriel/UI/moodle-08-ll-03.svg',
			mood: base + '/personas/gabriel/gabriel-neutral.svg',
			description:
				'“Übrigens ist mein Gesichtsfeld am Rand nicht wirklich schwarz. Mein Gehirn ergänzt die Stellen, die mein Auge nicht erfasst, mit dem, was es zu sehen erwartet, und fügt das  zu einem Bild zusammen. Daher  übersehe ich häufig Dinge. Aber das Grundproblem und die Strategien sind die gleichen!”',
			solution: 31
		},
		{
			image: base + '/games/gabriel/UI/moodle-09-ende.svg',
			mood: base + '/personas/gabriel/gabriel-explaining.svg',
			description:
				'“Vielen Dank für Deine Hilfe! Studierende mit Beeinträchtigungen haben verschiedene Strategien, die ihnen in unterschiedlichen Situationen helfen. Werden manche Aspekte jedoch schon von Seiten der Lehrenden beachtet, sind zeitaufwändige Strategien oft gar nicht mehr nötig!”',
			solution: 'FIN'
		}
	];

	/* elements */

	let checkmarks: {
		correct: boolean;
		userAnswer: number | null;
		index: number;
	}[] = [];

	/* variables */

	let personaHidden = true;
	let personaImage = contentsArray[0].mood;

	let hole: HTMLImageElement;
	let holeHidden = true;
	let holeMoveable = false;
	let holePosX = '10vw';
	let holePosY = '16vw';

	let inputImpossible = false;
	let input: number | null = null;

	let taskIndex = 0;
	let descriptionText = contentsArray[0].description;
	let interactionSrc = contentsArray[0].image;

	let inputIsNumber = true;
	let inputRangeCorrect = true;

	/* functions */

	$: {
		if (input) {
			inputIsNumber = true;
			inputRangeCorrect = true;
		}
	}

	function onClick() {
		const regex = /^[0-9]+$/;

		inputIsNumber = Number.isInteger(input);
		if (input !== null) {
			inputRangeCorrect = input > 0 && input <= 99;
		}

		if (!inputIsNumber || !inputRangeCorrect) return;

		if (taskIndex == 0) {
			holeHidden = false;
		}
		if (taskIndex == 1) {
			personaHidden = false;
			holeMoveable = true;
		}

		checkmarks = [
			...checkmarks,
			{
				correct: input === contentsArray[taskIndex].solution,
				userAnswer: input,
				index: taskIndex + 1
			}
		];

		taskIndex++;

		interactionSrc = contentsArray[taskIndex].image;
		descriptionText = contentsArray[taskIndex].description;

		if (contentsArray[taskIndex].mood !== '') {
			personaImage = contentsArray[taskIndex].mood;
		}

		input = null;

		if (taskIndex == 8) {
			holeHidden = true;
			inputImpossible = true;
		}
	}

	function moveHole(e: MouseEvent) {
		if (holeMoveable) {
			holePosX = `calc(${e.clientX}px - 16vw)`;
			holePosY = `calc(${e.clientY}px - 10vw)`;
		}
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			onClick();
		}
	}

	/*no fun on mobile*/

	let smallScreen: boolean;
	let smallScreenMessage =
		'Ihr Gerät oder Browserfenster ist zu klein, um das Spiel zu spielen. Bitte wählen sie ein größeres Gerät oder vergrößern Sie ihr Browserfenster.';

	onMount(() => {
		const mediaQuery = window.matchMedia('(max-width: 767px)');
		smallScreen = mediaQuery.matches;

		function handleScreenSize(event: any) {
			smallScreen = event.matches;
		}
		mediaQuery.addEventListener('change', handleScreenSize);
	});
</script>

<div class="mobileMessage" class:mobileVisibility={!smallScreen}>{smallScreenMessage}</div>
<div class="ratio" class:ratioDeactivated={smallScreen}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img class="persona" src={personaImage} hidden={personaHidden} />

	<div class="wrapper-interaction">
		<div class="slides">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img
				class:hole={!holeHidden}
				style="mask-position: {holePosX} {holePosY}; -webkit-mask-position: {holePosX} {holePosY}"
				class="slides-image"
				src={interactionSrc}
			/>

			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- <img
				class="hole"
				class:holeSticky={!holeMoveable}
				src={base + '/games/gabriel/hole.png'}
				style="transform: translate({holePosX}px, {holePosY}px);"
				hidden={holeHidden}
				bind:this={hole}
			/> -->
		</div>
		<div class="notebook" class:mobileVisibility={smallScreen}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="notebook-image" src={base + '/games/gabriel/notepad.svg'} />

			<div class="error-message">
				{#if !inputIsNumber}
					<p>Nur ganze Zahlen werden akzeptiert</p>
				{/if}
				{#if !inputRangeCorrect}
					<p>Die Zahl muss zwischen 1 und 99 groß sein</p>
				{/if}
			</div>
			<div class="notebook-input">
				{#each checkmarks as checkmark}
					<div class="checkmark">
						<span>Artikel {checkmark.index} - Seite </span>
						<span>{checkmark.userAnswer}</span>
						{#if checkmark.correct}
							<img src={base + '/games/gabriel/UI/check-true.png'} alt="Korrekte Antwort" />
						{:else}
							<img src={base + '/games/gabriel/UI/check-false.png'} alt="Falsche Antwort" />
						{/if}
					</div>
				{/each}
				<div
					class:inputHidden={inputImpossible}
					style="display: flex; align-items: center; height: 1.6vw;"
				>
					<p style="font-size: 1.5vw; display: inline-block; margin-right: 0.7vw">
						Artikel {taskIndex + 1} - Seite
					</p>
					<form on:submit|preventDefault>
						<input
							type="number"
							id="notebook-input-field"
							bind:value={input}
							on:keypress={(e) => handleKeyPress(e)}
							class="number-inputfield"
							class:error={!inputIsNumber || !inputRangeCorrect}
						/>
						<button
							id="notebook-input-button"
							type="button"
							disabled={!inputIsNumber || !inputRangeCorrect}
							on:click={onClick}>OK</button
						>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div class="wrapper-description">
		<p class="description" class:descriptionPersona={!personaHidden}>{descriptionText}</p>
	</div>
</div>

<svelte:window on:mousemove={moveHole} />

<style>
	:global(.wip-info) {
		display: none !important;
	}

	:global(html) {
		scrollbar-width: none;
	}

	:global(html::-webkit-scrollbar) {
		width: 0;
	}

	.ratio {
		position: relative;
		aspect-ratio: 16/9;
		overflow: hidden;
	}

	/*main containers*/

	.wrapper-description {
		position: absolute;
		background-color: var(--color-white);
		border: 1px solid var(--color-black);
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		width: 100%;
		height: 23%; /* + interaction = 100%*/
		bottom: 0;
		z-index: 2;
		box-sizing: border-box;

		/*scroll if there's too much text:*/
		overflow: auto;
	}

	.wrapper-interaction {
		position: absolute;
		background-color: var(--color-green);
		width: 100%;
		height: 77%; /* + description = 100%*/

		/* frame the hole in this box: */
		overflow: hidden;
	}

	/*persona image*/

	.persona {
		position: absolute;
		height: 120%; /*hardstyled*/
		transform: translate(-20%, 10%); /*hardstyled*/
		filter: drop-shadow(3px 3px 3px rgba(var(--color-black-rgb), 0.3));
		z-index: 3;
	}

	/*detailed styling: description*/

	.description {
		position: relative;
		text-align: center;
		margin-inline: 1vw;
		font-size: 1.6vw; /*hardstyled*/
		font-family: var(--font-sans-serif);
	}

	.descriptionPersona {
		width: 75%; /*hardstyled*/
		margin-left: auto;
		margin-right: 1vw;
	}

	/*detailed styling: interaction*/

	.slides {
		position: absolute;
		width: 80%;
		aspect-ratio: 16/9;
		top: 8%; /*hardstyled*/
		left: 50%;
		transform: translate(-50%);
		border-radius: 15px;
		/* overflow: hidden; */
		background-color: var(--color-black);
	}

	.slides-image {
		width: 100%;
		height: auto;
	}

	.slides-image.hole {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: auto;

		mask-image: url('/games/gabriel/holetest.svg');
		mask-repeat: no-repeat;
		mask-size: 12vw;

		-webkit-mask-image: url('/games/gabriel/holetest.svg');
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-size: 12vw;
	}

	/*user interface*/

	.notebook {
		position: absolute;
		width: 32%; /*hardstyled*/
		right: 3%; /*hardstyled*/
		top: 45%; /*hardstyled*/
		transform: rotate(5deg); /*hardstyled*/
		z-index: 2;
	}

	.notebook-image {
		width: 100%;
		filter: drop-shadow(3px 3px 3px rgba(var(--color-black-rgb), 0.3));
	}

	.error-message {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	.error-message > p {
		text-align: center;
		font-size: 1.3vw;
		background-color: var(--color-red);
		color: var(--color-white);
		margin: 0;
	}

	.number-inputfield::-webkit-outer-spin-button,
	.number-inputfield::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.number-inputfield {
		-moz-appearance: textfield;
	}

	.number-inputfield.error {
		outline: 2px solid var(--color-red);
	}

	.notebook-input {
		position: absolute;
		width: 100%;
		right: -20%; /*hardstyled*/
		top: 17%; /*hardstyled*/
		font-family: var(--font-persona);
	}

	/* 		'<div style="display: flex; align-items: center; height: 1.8vw;">  <p style="font-size: 1.6vw; display: inline-block;">Artikel {index} - Seite </p><p  style="font-size: 1.6vw; display: inline-block; margin-left: 3vw;"> {input}</p><img src="{base}/games/gabriel/check-true.png" width="5%" style="margin-left: auto; margin-right: 10vw;" /></div>';
 */
	.checkmark {
		max-width: 21vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 1.6vw;
		/* margin-bottom: 0.1vw; */
	}

	.checkmark > span {
		margin: 0;
		font-size: 1.5vw;
	}

	.checkmark > img {
		max-width: 1.6vw;
		max-height: 1.6vw;
	}

	#notebook-input-field {
		border: 1px solid lightgray;
		background-color: #f7f7f7;
		width: 2vw; /*hardstyled*/
		height: 1.5vw; /*hardstyled*/

		margin-left: 2.5vw; /*hardstyled*/
		font-size: 1.3vw; /*hardstyled*/
	}

	#notebook-input-button {
		height: 1.5vw; /*hardstyled*/
		margin-left: auto; /*hardstyled*/
		margin-right: 10vw; /*hardstyled*/
		font-size: 0.9vw; /*hardstyled*/
		background-color: var(--color-white);
	}

	.inputHidden {
		display: none !important;
	}

	/*hole*/

	.hole {
		position: absolute;
		top: -7.5vw; /*hardstyled*/
		left: -7.5vw; /*hardstyled*/
		width: 15vw; /*hardstyled*/
		height: 15vw; /*hardstyled*/

		/* box-shadow: 0 0 0 25000px rgb(0, 0, 0); */
	}

	.holeSticky {
		transform: translate(100%, 125%) !important; /*hardstyled*/
	}

	/*no fun on mobile*/

	.ratioDeactivated {
		pointer-events: none;
		opacity: 0.2;
	}

	.mobileMessage {
		position: absolute;
		margin-top: 15vw;
		left: 0;
		right: 0;
		text-align: center;
		font-size: 5vw;
		font-family: var(--font-sans-serif);
		z-index: 1;
	}

	.mobileVisibility {
		display: none;
	}
</style>
