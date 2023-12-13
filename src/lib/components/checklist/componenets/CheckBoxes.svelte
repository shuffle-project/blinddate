<script lang="ts">
	interface CheckObject {
		id: number;
		text: string;
		checked: boolean;
		backgroundColorCode: number;
		box: {
			size: number;
		};
	}

	export let keyedChecks: CheckObject[];
	export let toggleCheckBox: (id: number) => void;
</script>

<ul>
	{#each keyedChecks as check, i (check.id)}
		<li>
			<div
				class="check {check.checked ? 'checked' : 'unchecked'}"
				bind:clientHeight={keyedChecks[i].box.size}
			>
				<input
					class="checkbox"
					type="checkbox"
					id={'checkbox' + check.id}
					value={check}
					disabled={check.id === 0 ? true : false}
					checked={check.checked}
					on:click={() => toggleCheckBox(check.id)}
				/>
				<label class="label" for={'checkbox' + check.id}> {check.text}</label>
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		max-width: var(--content-element-max-width);
	}

	.checked {
		background-color: var(--color-green);
	}

	.unchecked {
		background-color: var(--color-white);
	}

	.check {
		display: flex;
		align-items: center;

		padding: 1.11rem 1.66rem;

		box-sizing: border-box;
		margin-top: 0.66rem;
		margin-inline: auto;
		max-width: 26rem;
		width: 100%;
		border: 1px solid var(--color-lavender);
		border-radius: 10px;

		.checkbox {
			-webkit-appearance: none;
			appearance: none;
			background-color: var(--color-white);

			margin: 0;
			margin-right: 1rem;
			height: 1.11rem;
			width: 1.11rem;
			aspect-ratio: 1;

			border-radius: 0.11rem;
			border: 1px solid var(--color-black);

			cursor: pointer;

			display: grid;
			place-content: center;

			&:checked:before {
				content: '';
				width: 0.8rem;
				height: 0.8rem;
				box-shadow: inset 1rem 1rem var(--color-black);

				transform-origin: bottom left;
				clip-path: polygon(13% 50%, 5% 65%, 45% 100%, 100% 10%, 83% 0%, 40% 75%);
			}

			&:checked {
				border: 1px solid rgba(var(--color-black-rgb), 0.4);
			}

			&:focus,
			&:hover {
				outline: 3px solid var(--color-blue);
				outline-offset: 2px;
			}

			&:disabled::before {
				box-shadow: inset 1rem 1rem rgba(var(--color-black-rgb), 0.4);
			}
		}

		.label {
			width: 100%;
			cursor: pointer;
		}
	}

	@media (max-width: 40.5625rem) {
		ul {
			margin: 0 1.33rem;
		}

		.check {
			padding: 1rem 1rem;
		}
	}
</style>
