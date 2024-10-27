<script lang="ts">
  import { ss } from '$lib/style-string';
  import TypeEffect from './type-effect.svelte';

  let scrollY = $state(0);
  let offsetHeight = $state(0);
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let scrollPercent = $derived(scrollY / (offsetHeight - innerHeight));

  let maxCircleRadius = $derived(Math.sqrt((innerWidth / 2) ** 2 + (innerHeight + 120) ** 2));
  let expandCircle = $derived(scrollPercent >= 0.6);

  let circleStyles = $derived({
    transition: 'transform 0.5s ease',
    transform: expandCircle ? `scale(${maxCircleRadius / 1000})` : 'scale(0)',
  });
</script>

<svelte:window bind:scrollY bind:innerWidth bind:innerHeight />
<svelte:body bind:offsetHeight />

<div class="flex flex-col justify-center items-center min-w-screen min-h-screen text-white">
  <div class="flex flex-col justify-center items-center z-20">
    <h1 class="font-mono text-3xl mt-7 mb-5">
      <TypeEffect text="Work experience" />
    </h1>
    <h2>Amazon Web Services, 2022 -</h2>
    <h2>HealthSparq, 2015 - 2022</h2>
  </div>
</div>

<!-- black circle that covers screen when scrolled into view -->
<div
  class="fixed top-[calc(100vh-1000px)] left-[calc(50vw-1000px)] w-[2000px] h-[2000px] bg-black rounded-full z-10"
  style={ss(circleStyles)}
></div>
