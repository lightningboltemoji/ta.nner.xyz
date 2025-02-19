<script lang="ts">
  import chevronSvg from '$lib/icon/chevron.svg?raw';
  import { password } from '$lib/password.svelte';
  import Bubble from './bubble.svelte';
  import Contact from './contact.svelte';
  import Education from './education.svelte';
  import Experience from './experience.svelte';
  import Footer from './footer.svelte';
  import Intro from './intro.svelte';
  import Technologies from './technologies.svelte';

  let offsetWidth = $state(0);
  let innerWidth = $state(0);
  $effect(() => window.scrollTo((offsetWidth - innerWidth) / 2, 0));

  const print = () => window.print();
</script>

<svelte:window bind:innerWidth />
<svelte:body bind:offsetWidth />

<svelte:head>
  <title>Tanner Cecchetti (ta.nner.xyz) - Resume</title>
</svelte:head>

<div class="flex flex-col w-min min-w-[100vw] min-h-screen px-4 py-16 print:p-0">
  <div class="flex select-none text-center pb-8 print:hidden *:px-12 *:basis-0 *:grow w-[8.5in] self-center">
    <div>
      <p class="text-sm">Some elements are redacted for privacy</p>
      <p class="text-xs pb-4 opacity-40">Enter the password to decrypt them!</p>
      <input
        class="px-3 py-1 bg-white rounded-full border"
        type="password"
        placeholder="password"
        bind:value={password.current}
      />
    </div>
    <div>
      <p class="text-sm">This page is designed to be converted to PDF</p>
      <p class="text-xs pb-2 opacity-40">(Chromium-based browsers only, unfortunately)</p>
      <Bubble onclick={print} class="cursor-pointer px-4 mt-3" colors={['black', 'white']}>⌘+P → Save as PDF</Bubble>
    </div>
  </div>
  <div
    class="m-auto flex flex-col min-w-[8.5in] max-w-[8.5in] min-h-[11in] max-h-[11in] box-content bg-white border border-zinc-300 shadow-2xl shadow-zinc-500 print:border-0 print:shadow-none"
  >
    <div>
      <h1 class="text-center pt-8 font-bold font-mono text-4xl">Tanner Cecchetti</h1>
      <h2 class="text-center pb-4 font-mono text-2xl">Software Engineer</h2>
      <div class="flex justify-center">
        {#each { length: 34 } as _, __}
          {@html chevronSvg}
        {/each}
      </div>
    </div>
    <div class="flex-grow inline-grid grid-cols-[285px_1fr] w-full **:[h2]:font-bold **:[h2]:text-2xl">
      <div class="py-8 pl-12 pr-0 *:[div:not(:first-child)]:pt-8">
        <Intro />
        <Contact />
        <Education />
        <Technologies />
      </div>
      <div class="py-8 pl-8 pr-12 *:[div:not(:first-child)]:mt-4">
        <Experience />
        <div>
          <h2>Outside of work</h2>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>

<style>
  :global(body) {
    width: max-content;
    background-color: var(--color-zinc-300);
  }
</style>
