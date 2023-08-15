<script lang="ts">
	// quelle
	// https://www.sarasoueidan.com/blog/toggle-switch-design/#site-header
	// https://codepen.io/scottohara/pen/zLZwNv?editors=1111
	// sonstiges_
	// https://kittygiraudel.com/2021/04/05/an-accessible-toggle/

	// some changes for better responsivness of our component
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
	.radio-switch {
		border: none;
		padding: 0;
		white-space: nowrap;

		&:hover {
			label:first-of-type:after {
				outline: 2px solid var(--color-white);
				outline-offset: 2px;
			}
		}
	}

	.radio-switch legend {
		font-size: 2px;
		opacity: 0;
		position: absolute;
	}

	.radio-switch label {
		display: inline-block;
		line-height: 2;
		position: relative;
		z-index: 2;

		cursor: pointer;
	}

	.radio-switch input {
		opacity: 0;
		position: absolute;
	}

	.radio-switch label:first-of-type {
		padding-right: 3rem;
		opacity: 90%;

		&.focus-within {
			opacity: 100%;
		}
	}

	.radio-switch label:last-child {
		margin-left: -2.12rem;
		padding-left: 3rem;
		opacity: 90%;

		&.focus-within {
			opacity: 100%;
		}
	}

	.radio-switch:focus-within label:first-of-type:after {
		outline: 2px solid var(--color-white);
		outline-offset: 2px;
	}

	.radio-switch:focus-within label:first-of-type:after :hover {
		outline: 2px solid var(--color-white);
		outline-offset: 2px;
	}

	.radio-switch label:first-of-type:before,
	.radio-switch label:first-of-type:after {
		border: 1px solid var(--color-white);
		content: '';
		height: 1rem;
		overflow: hidden;
		pointer-events: none;
		position: absolute;
		vertical-align: middle;
		margin-top: 0.5rem;
	}

	.radio-switch label:first-of-type:before {
		background: var(--color-white);
		border: 1px solid var(--color-white);
		border-radius: 100%;
		position: absolute;
		right: -0.0737rem;
		transform: translateX(0rem);
		transition: transform 0.2s ease-in-out;
		width: 1rem;
		z-index: 2;
	}

	.radio-switch label:first-of-type:after {
		background: var(--color-black);
		border-radius: 0.51rem;
		margin: 0 0.98rem;
		transition: background 0.2s ease-in-out;
		width: 2rem;
		margin-top: 0.5rem;
	}

	.radio-switch input:first-of-type:checked ~ label:first-of-type:before {
		transform: translateX(-1rem);
	}

	.radio-switch input:last-of-type:checked ~ label:last-of-type {
		z-index: 1;
	}
</style>
