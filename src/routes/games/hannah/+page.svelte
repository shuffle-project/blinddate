<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	/* tasks */

	const contentsArray = [
		{
			image: base + '/games/hannah/UI/Hannah-1.svg',
			audio: base + '/games/hannah/Audio/task.mp3',
			mood: '',
			description:
				'Hannah sieht sich die Aufnahme der letzten Vorlesung an, die sie wegen einer Erkältung verpasst hat. Sie möchte die Aufgaben, die die Dozentin gestellt hat, lösen, um die Inhalte zu vertiefen. Können Sie Hannah behilflich sein?',
			btnA: { answer: 9, correct: true },
			btnB: { answer: 10, correct: false },
			btnC: { answer: 11, correct: false }
			/*vier plus fünf*/
		},
		{
			image: base + '/games/hannah/UI/Hannah-2.svg',
			audio: base + '/games/hannah/Audio/static.mp3',
			mood: '',
			description:
				'Hannah kann den Ton aufgrund ihrer Hörbeeinträchtigung nicht richtig wahrnehmen. Ohne die Tonspur des Videos ist es jedoch unmöglich, den Worten der Dozentin zu folgen.',
			btnA: { answer: 8, correct: false },
			btnB: { answer: 12, correct: false },
			btnC: { answer: 15, correct: false }
			/*NONE*/
		},
		{
			image: base + '/games/hannah/UI/Hannah-3.svg',
			audio: base + '/games/hannah/Audio/static.mp3',
			mood: base + '/personas/hannah/hannah-explaining.svg',
			description:
				'“Gib’s zu, das hast Du geraten! Aber keine Sorge: Moderne Techniken bergen viele Hilfsmittel. Für dieses Video beispielsweise stehen automatische Untertitel zur Verfügung. Auf die greife ich auch häufig zurück, denn sie sind mittlerweile super weit verbreitet. Ich schalte sie Dir ein!”',
			btnA: { answer: 7, correct: false },
			btnB: { answer: 9, correct: true },
			btnC: { answer: 11, correct: false }
			/*ei fluss nacht*/
		},
		{
			image: base + '/games/hannah/UI/Hannah-4.svg',
			audio: base + '/games/hannah/Audio/static.mp3',
			mood: base + '/personas/hannah/hannah-neutral.svg',
			description:
				'“Schon etwas besser, oder? Automatische Untertitel sind leider oft nicht besonders gut, da die Spracherkennungssoftware viele Wörter nicht richtig versteht und deshalb falsch wiedergibt.”',
			btnA: { answer: 4, correct: true },
			btnB: { answer: 7, correct: false },
			btnC: { answer: 10, correct: false }
			/*sieb und virusbrei*/
		},
		{
			image: base + '/games/hannah/UI/Hannah-5.svg',
			audio: base + '/games/hannah/Audio/static.mp3',
			mood: base + '/personas/hannah/hannah-sad.svg',
			description:
				'“Es würde mir viel Raterei ersparen, wenn die Dozentin die Untertitel manuell korrigieren würde, bevor sie ihre Videos online stellt. Ich schreibe ihr gleich eine E-Mail und bitte sie, das noch nachzuholen.”',
			btnA: { answer: 1, correct: false },
			btnB: { answer: 3, correct: false },
			btnC: { answer: 5, correct: true }
			/*zehenfurcht zweig*/
		},
		{
			image: base + '/games/hannah/UI/Hannah-6.svg',
			audio: base + '/games/hannah/Audio/static.mp3',
			mood: base + '/personas/hannah/hannah-happy.svg',
			description:
				'“Die Dozentin hat auf meine Bitte reagiert und die Untertitel der restlichen Aufgaben mit einem Programm manuell korrigiert! Du wirst gleich merken, dass Du deutlich besser arbeiten kannst, wenn du dabei nicht auch noch ‚Quizduell‘ spielen musst.”',
			btnA: { answer: 24, correct: false },
			btnB: { answer: 27, correct: true },
			btnC: { answer: 31, correct: false }
			/*drei mal neun*/
		},
		{
			image: base + '/games/hannah/UI/Hannah-7.svg',
			audio: base + '/games/hannah/Audio/static.mp3',
			mood: base + '/personas/hannah/hannah-explaining.svg',
			description:
				'“Meistens komme ich im Studium gut zurecht, da ich beidseitig Hörhilfen trage und meine Strategien habe. Aber mit ein wenig Unterstützung kann ich meine Vorlesungen noch effizienter meistern.”',
			btnA: { answer: 5, correct: false },
			btnB: { answer: 3, correct: false },
			btnC: { answer: 2, correct: true }
			/*acht durch vier*/
		},
		{
			image: base + '/games/hannah/UI/Hannah-8.svg',
			audio: base + '/games/hannah/Audio/static.mp3',
			mood: base + '/personas/hannah/hannah-neutral.svg',
			description:
				'“Übrigens: Ein eingeschränktes Hörvermögen bedeutet nicht wirklich, dass ich nur Rauschen höre. Ich muss mich sehr konzentrieren, um kleinen Satzfetzen einen Sinn zu entnehmen. Aber die Strategien, die ich Dir gezeigt habe, sind die gleichen!”',
			btnA: { answer: 9, correct: true },
			btnB: { answer: 14, correct: false },
			btnC: { answer: 17, correct: false }
			/*elf minus zwei*/
		},
		{
			image: base + '/games/hannah/UI/Hannah-9.svg',
			audio: base + '/games/hannah/Audio/static.mp3',
			mood: base + '/personas/hannah/hannah-explaining.svg',
			description:
				'“Vielen Dank für Deine Hilfe! Studierende mit Beeinträchtigungen haben verschiedene Strategien, die ihnen in unterschiedlichen Situationen helfen. Wenn Lehrende bei der Konzeption ihrer Vorlesungen aber generell schon auf Barrierearmut achten, sind manche zeitaufwendigen Strategien gar nicht nötig.”',
			btnA: { answer: 0, correct: false },
			btnB: { answer: 0, correct: false },
			btnC: { answer: 0, correct: false }
		}
	];

	/* elements */

	let checkmarkTrue =
		'<div style="display: flex; align-items: center; height: 2.5vw"><p style="font-size: 1.6vw; font-family: var(--font-sans-serif);">Aufgabe {index}</p><img src="UI/check-true.png" width="8%" style="margin-left: auto; margin-right: 10vw;" /></div>';
	let checkmarkFalse =
		'<div style="display: flex; align-items: center; height: 2.5vw"><p style="font-size: 1.6vw; font-family: var(--font-sans-serif);">Aufgabe {index}</p><img src="UI/check-false.png" width="8%" style="margin-left: auto; margin-right: 10vw;" /></div>';

	let checkmarks: string[] = $state([]);

	/* variables */

	let personaHidden = $state(true);
	let personaImage = $state(contentsArray[0].mood);

	let taskIndex = 0;
	let taskDescriptionText = $state(contentsArray[0].description);
	let taskSlideImage = $state(contentsArray[0].image);

	let selectedAnswer: { answer: number; correct: boolean } | null = $state(null);
	let btnA = $state(contentsArray[0].btnA);
	let btnB = $state(contentsArray[0].btnB);
	let btnC = $state(contentsArray[0].btnC);

	let audioSource = $state(contentsArray[0].audio);
	let audioPlaying = $state(false);
	let audioElement: HTMLAudioElement = $state();

	let endscreen = $state(false);

	/* functions */

	function onAnswerClick(buttonValue: { answer: number; correct: boolean }) {
		if (selectedAnswer === buttonValue) {
			selectedAnswer = null;
		} else {
			selectedAnswer = buttonValue;
		}
	}

	function onSendClick() {
		if (taskIndex == 1) {
			personaHidden = false;
		}
		if (taskIndex == 7) {
			endscreen = true;
		}

		if (selectedAnswer && selectedAnswer.correct) {
			checkmarks = [...checkmarks, checkmarkTrue.replace('{index}', (taskIndex + 1).toString())];
		} else {
			checkmarks = [...checkmarks, checkmarkFalse.replace('{index}', (taskIndex + 1).toString())];
		}

		taskIndex++;

		taskSlideImage = contentsArray[taskIndex].image;
		taskDescriptionText = contentsArray[taskIndex].description;

		btnA = contentsArray[taskIndex].btnA;
		btnB = contentsArray[taskIndex].btnB;
		btnC = contentsArray[taskIndex].btnC;

		audioSource = contentsArray[taskIndex].audio;

		if (contentsArray[taskIndex].mood !== '') {
			personaImage = contentsArray[taskIndex].mood;
		}

		selectedAnswer = null;
	}

	const onPlayAudioClick = () => {
		audioPlaying = !audioPlaying;
		if (audioPlaying) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
	};

	const onAudioEnded = () => {
		audioPlaying = false;
	};

	/*no fun on mobile*/

	let smallScreen: boolean = $state();
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

<audio bind:this={audioElement} src={audioSource} onended={onAudioEnded}></audio>

<div class="mobileMessage" class:mobileVisibility={!smallScreen}>{smallScreenMessage}</div>
<div class="ratio" class:ratioDeactivated={smallScreen}>
	<!-- svelte-ignore a11y_missing_attribute -->
	<img class="persona" src={personaImage} hidden={personaHidden} />

	<div class="wrapper-interaction">
		<div class="slides">
			<!-- svelte-ignore a11y_missing_attribute -->
			<img class="slides-image" src={taskSlideImage} draggable="false" />
		</div>
		<div class="solutions">
			{#each checkmarks as div}
				<div>{@html div}</div>
			{/each}
		</div>
		<button class="playbutton" class:hidden={endscreen} onclick={onPlayAudioClick}>
			{#if audioPlaying}
				<img src="UI/pause.svg" alt="Pause" style="width: 85%; height: auto;" />
			{:else}
				<img src="UI/play.svg" alt="Play" style="width: 85%; height: auto;" />
			{/if}
		</button>
		<div class="buttons" style:display={endscreen ? 'none' : 'flex'}>
			<button onclick={() => onAnswerClick(btnA)} class:selected={selectedAnswer == btnA}
				>{btnA.answer}</button
			>
			<button onclick={() => onAnswerClick(btnB)} class:selected={selectedAnswer == btnB}
				>{btnB.answer}</button
			>
			<button onclick={() => onAnswerClick(btnC)} class:selected={selectedAnswer == btnC}
				>{btnC.answer}</button
			>
			<button onclick={onSendClick} disabled={!selectedAnswer}>Antworten</button>
		</div>
	</div>

	<div class="wrapper-description">
		<p class="description" class:descriptionPersona={!personaHidden}>{taskDescriptionText}</p>
	</div>
</div>

<style>
	/*hide stuff when unnecessary*/

	.hidden {
		display: none;
	}

	/*outer container with 16:9 ratio*/

	.ratio {
		position: relative;
		padding-bottom: calc(100vw * 9 / 16);
		border-radius: 15px;
		overflow: hidden;
	}

	/*main containers*/

	.wrapper-description {
		position: absolute;
		box-sizing: border-box;
		background-color: white;
		border: 1px solid black;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		padding: 2%;
		width: 100%;
		height: 23%; /* + interaction = 100%*/
		bottom: 0;
		z-index: 2;
		overflow: auto;
	}

	.wrapper-interaction {
		position: absolute;
		background-color: #e2f0cb;
		width: 100%;
		height: 77%; /* + description = 100%*/
	}

	/*persona image*/

	.persona {
		position: absolute;
		height: 105%; /*hardstyled*/
		transform: translate(10%, 25%); /*hardstyled*/
		filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
		z-index: 3;
	}

	/*detailed styling: description*/

	.description {
		padding: 0px;
		margin: 0px;
		text-align: center;
		font-size: 1.6vw; /*hardstyled*/
		font-family: var(--font-sans-serif);
	}

	.descriptionPersona {
		width: 75%; /*hardstyled*/
		margin-left: auto;
		margin-right: 0;
	}

	/*detailed styling: interaction*/

	.slides {
		position: absolute;
		background-color: white;
		width: 80%;
		height: 100%;
		top: 8%; /*hardstyled*/
		left: 50%;
		transform: translate(-50%);
		border-radius: 15px;
		overflow: hidden;
	}

	.slides-image {
		width: 100%;
		height: auto;
	}

	.buttons {
		position: absolute;
		top: 50%;
		right: 22%;
		width: 9%;
		height: 40%;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
	}

	.buttons button {
		width: 100%;
		font-size: 1.2vw;
	}

	.selected {
		background-color: #569058;
		color: white;
		border-radius: 5px;
	}

	.playbutton {
		position: absolute;
		top: 89.5%;
		left: 37.5%;
		width: 3%;
		height: 5%;
		font-size: 1vw;
	}

	.solutions {
		position: absolute;
		top: 47%;
		left: 23.5%;
		width: 20%;
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

	/*wip-info*/

	:global(.wip-info) {
		display: none !important;
	}

	:global(html) {
		scrollbar-width: none;
	}

	:global(html::-webkit-scrollbar) {
		width: 0;
	}
</style>
