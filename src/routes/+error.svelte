<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="error-container">
	<h1>404 Seite nicht gefunden</h1>
	<a href="{base}/../">Zurück zur Startseite</a>
</div>

<style>
	.error-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
