<script lang="ts">
  import { onMount } from 'svelte';
  import { ss } from '$lib/style-string';
  import githubSvg from '$lib/icon/github-alt.svg?raw';
  import linkedinSvg from '$lib/icon/linkedin.svg?raw';
  import emailSvg from '$lib/icon/paper-plane.svg?raw';
  import TypeEffect from './type-effect.svelte';

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

  const links = [
    {
      name: 'Email',
      href: 'mailto:t@nner.xyz',
      class: 'size-9 delay-200',
      icon: emailSvg,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/lightningboltemoji',
      class: 'size-11 delay-300',
      icon: githubSvg,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tanner-cecchetti/',
      class: 'size-11 delay-[400ms]',
      icon: linkedinSvg,
    },
  ];
</script>

<div class="flex flex-col justify-center items-center min-w-screen min-h-screen">
  <div class="flex flex-col justify-center items-center pb-[10vh] md:pb-0">
    <div class="relative">
      <video
        class="size-[200px] bg-black rounded-full"
        autoPlay
        loop
        muted
        playsInline
        src="/memoji.mp4"
        aria-hidden="true"
      ></video>
    </div>
    <h1 class="font-mono text-3xl mt-7">
      <TypeEffect text="Tanner Cecchetti" />
    </h1>
    <div class="flex flex-col items-center mt-5 pb-7 px-2 border-b-[1px]" style={ss(subheadingStyles)}>
      <h2>
        <span class="opacity-60">a</span>
        Software Engineer 👨‍💻
      </h2>
      <h2>
        <span class="opacity-60">in</span>
        Seattle, WA 🌳
      </h2>
    </div>
    <div class="flex items-center p-5 [&>*:not(:first-child)]:ml-6">
      {#each links as link}
        <a
          href={link.href}
          class={`group p-2 fill-zinc-800 ${link.class}`}
          style={ss(buttonStyles)}
          aria-label={link.name}
        >
          {@html link.icon}
          <div
            class="absolute text-sm top-1/2 left-1/2 -translate-x-1/2 transition duration-300 opacity-0 translate-y-10 group-hover:opacity-60 group-hover:translate-y-6"
          >
            {link.name}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
