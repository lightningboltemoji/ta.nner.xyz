<script lang="ts">
  import { ss } from '$lib/style-string';
  import { hashCode } from '$lib/hash';

  const props = $props<{
    class: string;
    text: string;
  }>();

  let id = $derived(hashCode(props.text));

  let running = $state(false);
  let value = $state('');
  let cursor = $state<'unset' | 'hidden'>('unset');

  const blink = () => {
    cursor = cursor === 'hidden' ? 'unset' : 'hidden';
    setTimeout(blink, 800);
  };

  const type = () => {
    if (value !== props.text) {
      value = props.text.substring(0, value.length + 1);
      setTimeout(type, Math.random() * 150 + 50);
    } else {
      setTimeout(blink, 800);
    }
  };

  function setupObserver(node: HTMLDivElement) {
    const checkAndBegin = (e: any) => {
      if (e[0].isIntersecting && !running) {
        running = true;
        type();
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(checkAndBegin, { threshold: 0.2 });
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }
</script>

<div class="py-1" use:setupObserver>
  <span class="absolute [clip:rect(0,0,0,0)] overflow-hidden w-[1px] h-[1px]" {id}>{props.text}</span>
  <h1 aria-labelledby={id} class={props.class}>
    {value}<span class="p-1" style={ss({ visibility: cursor })}>█</span>
  </h1>
</div>
