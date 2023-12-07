<script lang="ts">
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import Icon from '../Icon.svelte';
	import PersonaPortrait from '../PersonaPortrait.svelte';

	export let friendPersona: FriendPersona;
</script>

<div class="card">
	<PersonaPortrait persona={friendPersona} />
	<div class="card-content">
		<div>
			<Icon img={friendPersona.disabilityIcon} size="medium" alt="Beeinträchtigung"
				>{friendPersona.disability}</Icon
			>
		</div>
		<div>
			<Icon img="relation" alt="Beziehung zu {friendPersona.relation_to}" size="medium"
				>{friendPersona.relation}</Icon
			>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		width: 11rem;
		aspect-ratio: 5/7;

		box-shadow: 0 4px 10px 0 rgba(var(--color-black-rgb), 0.15);
		border-radius: 40px;
		background: var(--color-gradient-friend-persona);

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		.card-content {
			display: flex;
			flex-direction: column;
			gap: 0.22rem;
			margin: 0 1rem 1rem 1rem;
		}
	}
</style>
