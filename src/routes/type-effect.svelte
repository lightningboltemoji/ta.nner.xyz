<script lang="ts">
  import { ss } from '$lib/style-string';

  const props = $props<{
    text: string;
  }>();

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
  <span>{value}</span><span class="p-1" style={ss({ visibility: cursor })}>█</span>
</div>
