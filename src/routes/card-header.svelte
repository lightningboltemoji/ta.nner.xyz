<script lang="ts">
  import githubSvg from '$lib/icon/github-alt.svg?raw';
  import linkedinSvg from '$lib/icon/linkedin.svg?raw';
  import emailSvg from '$lib/icon/paper-plane.svg?raw';
  import { ss } from '$lib/style-string';
  import HeadingTypeEffect from './heading-type-effect.svelte';
  import { onMount } from 'svelte';

  let initialPaint = $state(false);
  onMount(() => requestAnimationFrame(() => requestAnimationFrame(() => (initialPaint = true))));

  let subheadingStyles = $derived({
    transition: 'all 0.6s ease',
    transform: initialPaint ? 'translateY(0px)' : 'translateY(40px)',
    opacity: initialPaint ? 1 : 0,
  });

  let buttonStyles = $derived({
    'transition-property': 'all',
    'transition-duration': '0.5s',
    'transition-timing-function': 'ease',
    transform: initialPaint ? 'translateY(0px)' : 'translateY(30px)',
    opacity: initialPaint ? 1 : 0,
  });
</script>

{#snippet link(name: string, href: string, class_: string, icon: string)}
  <div class="flex relative">
    <a {href} class={`peer p-2 fill-zinc-800 ${class_}`} style={ss(buttonStyles)} aria-label={name}>
      {@html icon}
    </a>
    <div
      class="absolute text-xs top-1/2 left-1/2 -translate-x-1/2 transition duration-300 opacity-0 translate-y-10 peer-hover:opacity-60 peer-hover:translate-y-8"
    >
      {name}
    </div>
  </div>
{/snippet}

<div class="flex flex-col justify-center items-center min-w-screen min-h-screen">
  <div class="flex flex-col justify-center items-center pb-[10vh] md:pb-0">
    <div class="relative">
      <video class="size-[200px] bg-black rounded-full" autoPlay loop muted playsInline src="/memoji.mp4"></video>
    </div>
    <HeadingTypeEffect class="font-mono text-3xl mt-7" text="Tanner Cecchetti" />
    <div class="flex flex-col items-center mt-5 pb-7 px-2 border-gray-200 border-b" style={ss(subheadingStyles)}>
      <h2>
        <span class="opacity-60">a</span>
        Software Engineer 👨‍💻
      </h2>
      <h2>
        <span class="opacity-60">in</span>
        Seattle, WA 🌳
      </h2>
    </div>
    <div class="flex items-center p-5 *:[:not(:first-child)]:ml-6">
      {@render link('Email', 'mailto:t@nner.xyz', 'size-9 delay-200', emailSvg)}
      {@render link('GitHub', 'https://github.com/lightningboltemoji', 'size-11 delay-300', githubSvg)}
      {@render link('LinkedIn', 'https://www.linkedin.com/in/tanner-cecchetti/', 'size-11 delay-[400ms]', linkedinSvg)}
    </div>
  </div>
</div>
