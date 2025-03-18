<script lang="ts">
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import Icon from '../Icon.svelte';
	import Modal from '../Modal.svelte';
	import FriendPersonaCard from './FriendPersonaCard.svelte';

	interface Props {
		friendPersona: FriendPersona;
	}

	let { friendPersona }: Props = $props();

	let modal: Modal = $state();

	function toggleModalDisplay() {
		if (modal) modal.toggleModalDisplay();
	}
</script>

<div class="wrapper">
	<div class="persona-content">
		<div class="img-wrapper">
			<div class="img">
				<Icon size="parent" img="/personas/{friendPersona.id}/{friendPersona.id}" />
			</div>
		</div>
		<span>{friendPersona.name}</span>
	</div>
	<button onclick={() => toggleModalDisplay()} aria-label="Über {friendPersona.name}">
		<Icon size="smedium" img="more-placeholder" />
	</button>
</div>

<Modal bind:this={modal} bottomSheet {friendPersona}>
	{#snippet content()}
	
			<FriendPersonaCard {friendPersona} />
		
	{/snippet}
</Modal>

<style lang="scss">
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;

		min-width: 10.625rem;
		padding: 0.375rem;
		border-radius: 2rem;

		box-shadow: 0 2px 2px 0 rgba(var(--color-black-rgb), 0.25);
		background: linear-gradient(160deg, var(--color-orange), var(--color-peach));

		.persona-content {
			display: flex;
			align-items: center;

			.img-wrapper {
				height: 2.625rem;
				width: 2.625rem;
				border: 3px solid var(--color-white);
				border-radius: 50%;
				overflow: hidden;
				box-sizing: border-box;

				.img {
					height: 2.625rem;
					width: 2.625rem;
					transform: translateX(-0.2rem) translateY(0.2rem);
				}
			}

			span {
				margin: 0;
				margin-left: 0.375rem;
				font-weight: 700;
				font-size: 1.25rem;
			}
		}

		button {
			background-color: var(--color-white);
			border: none;
			border-radius: 50%;
			height: 2.625rem;
			width: 2.625rem;

			display: flex;
			justify-content: center;
			align-items: center;

			cursor: pointer;

			&:hover,
			&:focus {
				outline: 2px solid var(--color-blue);
			}
		}
	}
</style>
