<script lang="ts">
  import type { Snippet } from 'svelte';

  const props = $props<{ title: string; children?: Snippet }>();
</script>

<div class="text-xs">
  <div class="font-bold pt-1">{props.title}</div>
  <ul class="pl-3 list-disc *:[li]:pt-1">
    {@render props.children?.()}
  </ul>
</div>
