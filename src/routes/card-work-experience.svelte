<script lang="ts">
  import { ss } from '$lib/style-string';
  import HeadingTypeEffect from './heading-type-effect.svelte';

  let innerHeight = $state(0);
  let maxCircleDiameter = $derived(innerHeight * 1.2 + 60);

  let expandCircle = $state(false);
  let circleStyles = $derived({
    transition: 'transform 0.4s ease',
    transform: expandCircle ? `scale(${maxCircleDiameter / 2000})` : 'scale(0)',
  });

  function setupObserver(node: HTMLDivElement) {
    const observer = new IntersectionObserver((e) => (expandCircle = e[0].isIntersecting), { threshold: 0.25 });
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }
</script>

<svelte:window bind:innerHeight />

<div class="flex relative flex-col justify-center items-center min-w-screen min-h-screen text-white" use:setupObserver>
  <div class="flex flex-col justify-center items-center z-20">
    <HeadingTypeEffect class="font-mono text-3xl mt-7 mb-5" text="Work experience" />
    <h2>Amazon Web Services, 2022 -</h2>
    <h2>HealthSparq, 2015 - 2022</h2>
  </div>

  <!-- black circle that covers screen when scrolled into view -->
  <div
    class="absolute top-[calc(50vh-1000px)] left-[calc(50vw-1000px)] w-[2000px] h-[2000px] bg-black rounded-full z-10"
    style={ss(circleStyles)}
  ></div>
</div>
