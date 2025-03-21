<script lang="ts">
	// quelle
	// https://www.sarasoueidan.com/blog/toggle-switch-design/#site-header
	// https://codepen.io/scottohara/pen/zLZwNv?editors=1111
	// sonstiges_
	// https://kittygiraudel.com/2021/04/05/an-accessible-toggle/

	interface Props {
		// some changes for better responsivness of our component
		option1: string;
		option2: string;
		option1Label: string;
		option2Label: string;
		value: string;
	}

	let { option1, option2, option1Label, option2Label, value = $bindable() }: Props = $props();

	const randomId = $props.id();
</script>

<fieldset class="radio-switch" role="radiogroup">
	<legend>Guter oder Schlechter Tag</legend>
	<input type="radio" id="option1-{randomId}" name="Toggle" value={option1} bind:group={value} />
	<label class={option1 === value ? 'focus-within' : ''} for="option1-{randomId}">
		{option1Label}
	</label>
	<input type="radio" id="option2-{randomId}" name="Toggle" value={option2} bind:group={value} />
	<label class={option2 === value ? 'focus-within' : ''} for="option2-{randomId}">
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
		margin-left: -1.625rem;
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

	.radio-switch label:first-of-type:before,
	.radio-switch label:first-of-type:after {
		border: 1px solid var(--color-white);
		content: '';
		height: 1.25rem;
		overflow: hidden;
		pointer-events: none;
		position: absolute;
		vertical-align: middle;
		margin-top: 0.375rem;
	}

	.radio-switch label:first-of-type:before {
		background: var(--color-white);
		border: 1px solid var(--color-white);
		border-radius: 100%;
		position: absolute;
		right: -0.625rem;
		transform: translateX(0rem);
		transition: transform 0.2s ease-in-out;
		width: 1.125rem;
		z-index: 2;
	}

	.radio-switch label:first-of-type:after {
		border-radius: 1rem;
		margin: 0 1rem;
		width: 2.5rem;
		height: 1.25rem;

		margin-top: 0.375rem;
	}

	.radio-switch input:first-of-type:checked ~ label:first-of-type:before {
		transform: translateX(-1.375rem);
	}

	.radio-switch input:last-of-type:checked ~ label:last-of-type {
		z-index: 1;
	}

	@media (max-width: 21rem) {
		.radio-switch label {
			font-size: 0.875rem;
		}
	}
</style>
