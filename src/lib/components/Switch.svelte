<script lang="ts">
	// quelle
	// https://www.sarasoueidan.com/blog/toggle-switch-design/#site-header
	// https://codepen.io/scottohara/pen/zLZwNv?editors=1111
	// sonstiges_
	// https://kittygiraudel.com/2021/04/05/an-accessible-toggle/
	// your script goes here
	export let option1: string;
	export let option2: string;

	export let option1Label: string;
	export let option2Label: string;

	export let value: string;
</script>

<fieldset class="radio-switch" role="radiogroup">
	<legend>Guter oder Schlechter Tag</legend>
	<input type="radio" id="option1" name="Toggle" value={option1} bind:group={value} />
	<label class={option1 === value ? 'focus-within' : ''} for="option1">
		{option1Label}
	</label>
	<input type="radio" id="option2" name="Toggle" value={option2} bind:group={value} />
	<label class={option2 === value ? 'focus-within' : ''} for="option2">
		{option2Label}
	</label>
</fieldset>

<style lang="scss">
	/* 
	get rid of the fieldset styling and keep 
	this all on a single line 
*/
	.radio-switch {
		border: none;
		padding: 0;
		white-space: nowrap;
	}

	/*
	radio button groups often benefit from a legend to
	provide context as to what the different
	options pertain to. Ideally this would be visible to all
	users, but you know...
*/
	.radio-switch legend {
		font-size: 2px;
		opacity: 0;
		position: absolute;
	}

	/*
	relative labels to help position the pseudo elements
	the z-index will be handy later, when the labels that
	overlap the visual switch UI need to be adjusted
	to allow for a user to toggle the switch without
	having to move their mouse/finger to the different
	sides of the UI
*/
	.radio-switch label {
		display: inline-block;
		line-height: 2;
		position: relative;
		z-index: 2;

		cursor: pointer;
	}

	/*
	inputs set to opcacity 0 are still accessible.
	Apparently there can be issues targetting inputs with
	Dragon speech recognition software if you use the typical
	'visually-hidden' class...so might as well just avoid that issue...
*/
	.radio-switch input {
		opacity: 0;
		position: absolute;
	}

	/*
	a 2 option toggle can only have 2 options...so instead of
	adding more classes, i'm just going to use some
	structural pseudo-classes to target them...
	cause why let all that good work go to waste?!

  the large padding is used to position the labels
  on top of the visual UI, so the switch UI itself
  can be mouse clicked or finger tapped to toggle
  the current option
*/

	.radio-switch label:first-of-type {
		padding-right: 3rem;
		padding-left: 0.5rem;

		&.focus-within {
			// font-weight: bolder;
			text-decoration: underline;
			// padding-left: 0.3rem;
		}
	}

	.radio-switch label:last-child {
		margin-left: -2.12rem;
		padding-left: 3rem;
		padding-right: 0.5rem;

		&.focus-within {
			text-decoration: underline;
			// font-weight: bolder;
			// padding-right: 0.3rem;
		}
	}

	.radio-switch:focus-within label:first-of-type:after {
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px #2196f3;
	}

	.radio-switch:focus-within label:first-of-type:after :hover {
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px #2196f3;
	}

	/* making the switch UI.  */
	.radio-switch label:first-of-type:before,
	.radio-switch label:first-of-type:after {
		border: 1px solid #aaa;
		content: '';
		height: 1rem;
		overflow: hidden;
		pointer-events: none;
		position: absolute;
		vertical-align: middle;
		margin-top: 0.5rem;
	}

	.radio-switch label:first-of-type:before {
		background: #fff;
		border: 1px solid #aaa;
		border-radius: 100%;
		position: absolute;
		right: -0.0737rem;
		transform: translateX(0rem);
		transition: transform 0.2s ease-in-out;
		width: 1rem;
		z-index: 2;
	}

	.radio-switch label:first-of-type:after {
		background: #596994;
		border-radius: 0.51rem;
		margin: 0 0.98rem;
		transition: background 0.2s ease-in-out;
		width: 2rem;
		margin-top: 0.5rem;
	}

	/*
	Visually change the switch UI to match the
	checked state of the first radio button
*/

	.radio-switch input:first-of-type:checked ~ label:first-of-type:before {
		transform: translateX(-1rem);
	}

	/* Move the 2nd label to have a lower z-index, so when that
   option is toggled, the first label will overlay on top of the
   Switch ui, and the switch can be pressed again to toggle back
   to the prevoius state. */
	.radio-switch input:last-of-type:checked ~ label:last-of-type {
		z-index: 1;
	}
</style>
