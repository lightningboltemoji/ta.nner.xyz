<script lang="ts">
  import CardFavorites from './card-favorites.svelte';
  import CardHeader from './card-header.svelte';
  import CardWorkExperience from './card-work-experience.svelte';
</script>

<svelte:head>
  <title>Tanner Cecchetti (ta.nner.xyz)</title>
  <meta name="description" content="A software engineer in Seattle, WA" />
</svelte:head>

<CardHeader />
<CardWorkExperience />
<CardFavorites />
