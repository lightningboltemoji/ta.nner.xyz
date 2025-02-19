<script lang="ts">
  import awsSvg from '$lib/icon/aws.svg?raw';
  import circleCiSvg from '$lib/icon/circleci.svg?raw';
  import gcpSvg from '$lib/icon/gcp.svg?raw';
  import githubSvg from '$lib/icon/github.svg?raw';
  import goSvg from '$lib/icon/go.svg?raw';
  import javaSvg from '$lib/icon/java.svg?raw';
  import kotlinSvg from '$lib/icon/kotlin.svg?raw';
  import polarsSvg from '$lib/icon/polars.svg?raw';
  import pythonSvg from '$lib/icon/python.svg?raw';
  import reactSvg from '$lib/icon/react.svg?raw';
  import rustSvg from '$lib/icon/rust.svg?raw';
  import springBootSvg from '$lib/icon/springboot.svg?raw';
  import svelteSvg from '$lib/icon/svelte.svg?raw';
  import terraformSvg from '$lib/icon/terraform.svg?raw';
  import typescriptSvg from '$lib/icon/typescript.svg?raw';
  import zigSvg from '$lib/icon/zig.svg?raw';
  import Bubble from './bubble.svelte';
</script>

<div>
  <h2>Technologies</h2>
  <div>
    {@render bubbleGroup('Worked with most', [
      { name: 'Java', colors: ['#007396', 'white'], icon: javaSvg },
      { name: 'Python', colors: ['#ffde57', 'black'], icon: pythonSvg },
      { name: 'TypeScript', colors: ['#3178c6', 'white'], icon: typescriptSvg },
    ])}
    {@render bubbleGroup('Interested in', [
      { name: 'Rust', colors: ['#f46623', 'black'], icon: rustSvg },
      { name: 'Kotlin', colors: ['#7F52FF', 'white'], icon: kotlinSvg },
      { name: 'Go', colors: ['#00add8', 'white'], icon: goSvg },
      { name: 'Zig', colors: ['#F7A41D', 'black'], icon: zigSvg },
    ])}
    {@render bubbleGroup('Clouds', [
      { name: 'Amazon Web Services', colors: ['#f56600', 'white'], icon: awsSvg },
      { name: 'Google Cloud', colors: ['#4285f4', 'white'], icon: gcpSvg },
    ])}
    {@render bubbleGroup('Tools', [
      { name: 'GitHub', colors: ['#181717', 'white'], icon: githubSvg },
      { name: 'CircleCI', colors: ['#343434', 'white'], icon: circleCiSvg },
      { name: 'Terraform', colors: ['#844FBA', 'white'], icon: terraformSvg },
    ])}
    {@render bubbleGroup('Libraries', [
      { name: 'Spring Boot', colors: ['#6DB33F', 'white'], icon: springBootSvg },
      { name: 'Polars', colors: ['#CD792C', 'white'], icon: polarsSvg },
      { name: 'React', colors: ['#087ea4', 'white'], icon: reactSvg },
      { name: 'Svelte', colors: ['#FF3E00', 'white'], icon: svelteSvg },
    ])}
  </div>
</div>

{#snippet bubbleGroup(title: string, items: { name: string; colors: string[]; icon: string }[])}
  <div class="text-xxs opacity-60 pt-2">{title}</div>
  <div class="text-xxs *:mt-1 *:[div:not(:last-child)]:mr-1">
    {#each items as i}
      <Bubble colors={i.colors} icon={i.icon}>{i.name}</Bubble>
    {/each}
  </div>
{/snippet}
