<script lang="ts">
  import { onMount } from 'svelte';
  import { ss } from '$lib/style-string';
  import githubSvg from '$lib/icon/github-alt.svg?raw';
  import linkedinSvg from '$lib/icon/linkedin.svg?raw';
  import emailSvg from '$lib/icon/paper-plane.svg?raw';
  import TypeEffect from './type-effect.svelte';

  let initialPaint = $state(false);
  onMount(() => requestAnimationFrame(() => requestAnimationFrame(() => (initialPaint = true))));

  let scrollY = $state(0);
  let offsetHeight = $state(0);
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let scrollPercent = $derived(scrollY / (offsetHeight - innerHeight));

  let maxCircleRadius = $derived(Math.sqrt((innerWidth / 2) ** 2 + (innerHeight + 120) ** 2));
  let expandCircle = $derived(scrollPercent >= 0.6);

  let circleStyles = $derived({
    transition: 'transform 0.5s ease',
    transform: expandCircle ? `scale(${maxCircleRadius / 1000})` : 'scale(0)'
  });

  let subheadingStyles = $derived({
    transition: 'all 0.6s ease',
    transform: initialPaint ? 'translateY(0px)' : 'translateY(40px)',
    opacity: initialPaint ? 1 : 0
  });

  let buttonStyles = $derived({
    'transition-property': 'all',
    'transition-duration': '0.5s',
    'transition-timing-function': 'ease',
    transform: initialPaint ? 'translateY(0px)' : 'translateY(30px)',
    opacity: initialPaint ? 1 : 0
  });
</script>

<svelte:head>
  <title>Tanner Cecchetti (ta.nner.xyz)</title>
  <meta name="description" content="A software engineer in Seattle, WA" />
</svelte:head>

<svelte:window bind:scrollY bind:innerWidth bind:innerHeight />
<svelte:body bind:offsetHeight />

<div
  class="fixed top-[calc(100vh-1000px)] left-[calc(50vw-1000px)] w-[2000px] h-[2000px] bg-black rounded-full z-10"
  style={ss(circleStyles)}
></div>
<div class="flex flex-col justify-center items-center min-w-screen min-h-screen">
  <div class="flex flex-col justify-center items-center pb-[10vh] md:pb-0">
    <div class="relative">
      <video class="size-[200px] bg-black rounded-full" autoPlay loop muted playsInline src="/memoji.mp4"></video>
    </div>
    <h1 class="font-mono text-3xl mt-7">
      <TypeEffect text="Tanner Cecchetti" />
    </h1>
    <div class="flex flex-col items-center mt-5 pb-7 px-2 border-b-[1px]" style={ss(subheadingStyles)}>
      <h2>
        <span class="opacity-20">a</span>
        Software Engineer 👨‍💻
      </h2>
      <h2>
        <span class="opacity-20">in</span>
        Seattle, WA 🌳
      </h2>
    </div>
    <div class="flex items-center p-5">
      <a
        href="mailto:t@nner.xyz"
        class="size-9 p-2 fill-zinc-800 delay-200"
        style={ss(buttonStyles)}
        aria-label="Email"
      >
        {@html emailSvg}
      </a>
      <a
        href="https://github.com/lightningboltemoji"
        class="size-11 p-2 fill-zinc-800 ml-6 delay-300"
        style={ss(buttonStyles)}
        aria-label="GitHub"
      >
        {@html githubSvg}
      </a>
      <a
        href="https://www.linkedin.com/in/tanner-cecchetti/"
        class="size-10 p-2 fill-zinc-800 ml-6 delay-[400ms]"
        style={ss(buttonStyles)}
        aria-label="LinkedIn"
      >
        {@html linkedinSvg}
      </a>
    </div>
  </div>
</div>
<div class="flex flex-col justify-center items-center min-w-screen min-h-screen text-white">
  <div class="flex flex-col justify-center items-center z-20">
    <h1 class="font-mono text-3xl mt-7 mb-5">
      <TypeEffect text="Work experience" />
    </h1>
    <h2>Amazon Web Services, 2022 -</h2>
    <h2>HealthSparq, 2015 - 2022</h2>
  </div>
</div>
