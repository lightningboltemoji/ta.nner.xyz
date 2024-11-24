<script lang="ts">
  import HeadingTypeEffect from './heading-type-effect.svelte';
</script>

{#snippet header(text: string)}
  <span class="text-right opacity-60">{text}</span>
{/snippet}

{#snippet externalLink(text: string, href: string)}
  <a class="hover:underline decoration-dotted whitespace-nowrap" {href} target="_blank">{text} ↗</a>
{/snippet}

<div class="flex relative flex-col justify-center items-center min-w-screen min-h-screen">
  <div class="flex flex-col justify-center items-center z-20">
    <HeadingTypeEffect class="font-mono text-3xl mt-7 mb-5" text="Favorite things :)" />
    <div class="grid grid-cols-2 gap-x-3 px-6 gap-y-1">
      {@render header('operating system')}
      <span>macOS</span>

      {@render header('browser')}
      {@render externalLink('Arc', 'https://arc.net')}

      {@render header('code editor')}
      <span>
        {@render externalLink('Zed', 'https://zed.dev')},
        {@render externalLink('VSCode', 'https://code.visualstudio.com/')},
        {@render externalLink('IntelliJ', 'https://www.jetbrains.com/idea/')}
      </span>

      {@render header('window mgmt')}
      <span>
        {@render externalLink('AeroSpace', 'https://github.com/nikitabobko/AeroSpace')},
        {@render externalLink('SketchyBar', 'https://github.com/FelixKratz/SketchyBar')}
      </span>

      {@render header('terminal')}
      {@render externalLink('kitty', 'https://github.com/kovidgoyal/kitty')}

      {@render header('notes')}
      {@render externalLink('Obsidian', 'https://obsidian.md')}
    </div>
  </div>
</div>
