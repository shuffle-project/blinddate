<script lang="ts">
	import type { FriendPersona } from '$lib/interfaces/friendPersona.interfaces';
	import Icon from '../Icon.svelte';
	import PersonaPortrait from '../PersonaPortrait.svelte';

	export let friendPersona: FriendPersona;
</script>

<div class="card">
	<PersonaPortrait persona={friendPersona} />
	<div class="card-content">
		{#if friendPersona.disability !== 'Keine Beeinträchtigung'}
			<table>
				<tr>
					<th aria-label="Beeinträchtigung"
						><Icon img={friendPersona.disabilityIcon} size="medium" />
					</th>
					<td>{friendPersona.disability}</td>
				</tr>
				<tr>
					<th aria-label="Beziehung zu {friendPersona.relation_to}"
						><Icon img="relation" size="medium" />
					</th>
					<td>{friendPersona.relation}</td>
				</tr>
			</table>
		{:else}
			<table>
				<tr>
					<th aria-label="Beziehung zu {friendPersona.relation_to}"
						><Icon img="relation" size="medium" />
					</th>
					<td>{friendPersona.relation}</td>
				</tr>
			</table>
		{/if}
	</div>
</div>

<style lang="scss">
	.card {
		width: 12.5rem;
		aspect-ratio: 5/7;

		border-radius: 2.5rem;
		background: var(--color-gradient-friend-persona);

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		.card-content {
			display: flex;
			flex-direction: column;
			gap: 0.375rem;
			margin: 0 1rem 1rem 1rem;

			table {
				tr {
					th {
						display: flex;
						align-items: center;
						justify-content: center;
						padding-bottom: 0.25rem;
					}
					td {
						padding-left: 0.25rem;
						padding-bottom: 0.25rem;
					}
				}
			}
		}
	}
</style>
