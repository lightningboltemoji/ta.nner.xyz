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
      {@render externalLink('Ghostty', 'https://github.com/ghostty-org/ghostty')}

      {@render header('notes')}
      {@render externalLink('Obsidian', 'https://obsidian.md')}

      {@render header('hardware')}
      <span>
        {@render externalLink('MacBook Air', 'https://support.apple.com/en-us/118552')},
        {@render externalLink('Vision Pro', 'https://www.apple.com/apple-vision-pro/')}
      </span>

      {@render header('keyboard')}
      {@render externalLink(
        'NuPhy Halo75 V2',
        'https://nuphy.com/products/halo75-v2-qmk-via-wireless-custom-mechanical-keyboard?variant=41037253935213',
      )}
    </div>
  </div>
</div>
