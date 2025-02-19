<script lang="ts">
  import Bubble from './bubble.svelte';
</script>

<div>
  <h2>Education</h2>
  <div class="pt-2">
    <div>Oregon State University</div>
    <div class="text-xs">Computer Science, B.S., 2017</div>
    <div class="text-xxs mt-1 *:[div:not(:first-child)]:ml-1">
      <Bubble colors={['#aaaaaa', 'white']}>3.97 GPA</Bubble>
      <Bubble colors={['#aaaaaa', 'white']}>HKN Sophomore of the Year</Bubble>
    </div>
  </div>
</div>
