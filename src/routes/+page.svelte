<script lang="ts">
  import CardFavorites from './card-favorites.svelte';
  import CardHeader from './card-header.svelte';
  import CardWorkExperience from './card-work-experience.svelte';
</script>

<svelte:head>
  <title>Tanner Cecchetti (ta.nner.xyz)</title>
  <meta
    name="description"
    content="Full-stack software engineer based in Seattle, WA. Passionate about elegant solutions that do more with less. Find all my links here."
  />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Tanner Cecchetti",
      "url": "https://ta.nner.xyz/"
    }
  </script>
</svelte:head>

<CardHeader />
<CardWorkExperience />
<CardFavorites />
