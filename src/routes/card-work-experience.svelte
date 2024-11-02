<script lang="ts">
  import { ss } from '$lib/style-string';
  import TypeEffect from './type-effect.svelte';

  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let maxCircleRadius = $derived(Math.sqrt((innerWidth / 2) ** 2 + (innerHeight + 120) ** 2));

  let expandCircle = $state(false);

  let circleStyles = $derived({
    transition: 'transform 0.4s ease',
    transform: expandCircle ? `scale(${maxCircleRadius / 2000})` : 'scale(0)',
  });

  function setupObserver(node: HTMLDivElement) {
    const observer = new IntersectionObserver((e) => (expandCircle = e[0].isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="flex relative flex-col justify-center items-center min-w-screen min-h-screen text-white" use:setupObserver>
  <div class="flex flex-col justify-center items-center z-20">
    <h1 class="font-mono text-3xl mt-7 mb-5">
      <TypeEffect text="Work experience" />
    </h1>
    <h2>Amazon Web Services, 2022 -</h2>
    <h2>HealthSparq, 2015 - 2022</h2>
  </div>

  <!-- black circle that covers screen when scrolled into view -->
  <div
    class="absolute top-[calc(50vh-1000px)] left-[calc(50vw-1000px)] w-[2000px] h-[2000px] bg-black rounded-full z-10"
    style={ss(circleStyles)}
  ></div>
</div>
