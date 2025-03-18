<script lang="ts">
	import { HOSTNAME } from '$lib/constants/hostname';
	import type { Persona } from '$lib/interfaces/persona.interfaces';
	import { MetaTags } from 'svelte-meta-tags';
	interface Props {
		persona: Persona;
	}

	let { persona }: Props = $props();
</script>

<MetaTags
	title={persona.name + ' - BlindDate'}
	description={persona.metaDescription}
	additionalMetaTags={[
		{
			property: 'keywords',
			content: persona.metaKeywords
		}
	]}
	openGraph={{
		url: HOSTNAME + 'personas/' + persona.id,
		title: persona.name + ' - BlindDate',
		description: persona.metaDescription,
		siteName: 'BlindDate',
		images: [
			{
				url: `${HOSTNAME + 'personas/' + persona.id}/${persona.id}-teaser.jpg`
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image',

		title: persona.name + ' - BlindDate',
		description: persona.metaDescription,
		image: `${HOSTNAME + 'personas/' + persona.id}/${persona.id}-teaser.jpg`
	}}
/>
